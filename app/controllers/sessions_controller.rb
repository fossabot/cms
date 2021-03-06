class SessionsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[create invalid]
  skip_after_action :verify_authorized, only: %i[create destroy invalid]

  def create
    user = user_hash
    user_groups = user.fetch(:groups)

    if user_groups.include?(@site.host) || user_groups.include?('admin')
      session[:user] = user
      flash.notice = t 'sessions.create.message'
    else
      flash.alert = t 'sessions.invalid.message'
    end

    redirect_to root_path
  end

  def destroy
    session.delete :user
    flash.notice = t 'sessions.destroy.message'
    redirect_to aws_logout_url
  end

  def invalid
    flash.alert = t 'sessions.invalid.message'
    redirect_to root_path
  end

  private

  def aws_logout_url
    "#{ENV.fetch('AWS_COGNITO_DOMAIN')}/logout?" + {
      client_id: ENV.fetch('AWS_COGNITO_CLIENT_ID'),
      logout_uri: root_url
    }.to_param
  end

  def user_hash
    auth = request.env['omniauth.auth']
    info = auth.fetch('info')

    {
      id: auth.fetch('uid'),
      name: info.fetch('name'),
      email: info.fetch('email'),
      groups: auth.fetch('extra').fetch('raw_info').fetch('cognito:groups')
    }
  end
end
