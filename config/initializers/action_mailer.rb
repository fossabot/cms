if ENV['SENDGRID_USERNAME'] && ENV['SENDGRID_PASSWORD']
  ActionMailer::Base.smtp_settings = {
    address: 'smtp.sendgrid.net',
    port: 587,
    user_name: ENV['SENDGRID_USERNAME'],
    password: ENV['SENDGRID_PASSWORD']
  }
elsif ENV['AWS_REGION'] && ENV['AWS_IAM_KEY'] && ENV['AWS_IAM_SECRET']
  signature = OpenSSL::HMAC.digest(
    OpenSSL::Digest.new('sha256'),
    ENV['AWS_IAM_SECRET'],
    'SendRawEmail'
  )

  ActionMailer::Base.smtp_settings = {
    address: "email-smtp.#{ENV['AWS_REGION']}.amazonaws.com",
    port: 587,
    user_name: ENV['AWS_IAM_KEY'],
    password: Base64.encode64(2.chr + signature).strip
  }
end
