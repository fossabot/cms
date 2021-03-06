require 'rails_helper'

RSpec.feature 'User logout' do
  let(:host) { Capybara.current_session.server.host }
  let(:port) { Capybara.current_session.server.port }
  let(:environment_variables) { { AWS_COGNITO_DOMAIN: "http://#{host}:#{port}" } }

  before do
    login_with_omniauth_as(site_user)
    visit '/login'
  end

  scenario 'clicking topbar link' do
    within('.topbar') do
      click_link site_user.name
      click_link 'Logout'
    end

    expect(page).to have_content 'Signed out successfully.'
  end

  scenario 'clicking footer link' do
    within('.footer') do
      click_link 'Logout'
    end

    expect(page).to have_content 'Signed out successfully.'
  end
end
