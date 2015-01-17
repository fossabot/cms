# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  email              :string(64)       not null
#  encrypted_password :string(64)       not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  sign_in_count      :integer          default("0"), not null
#  current_sign_in_at :datetime
#  last_sign_in_at    :datetime
#  current_sign_in_ip :inet
#  last_sign_in_ip    :inet
#

class User < ActiveRecord::Base
  include Gravtastic

  devise :database_authenticatable, :trackable, :validatable

  gravtastic default: 'mm', size: 40

  has_and_belongs_to_many :sites, -> { order :name }

  has_paper_trail

  strip_attributes only: :email, collapse_spaces: true

  validates :email, length: { maximum: 64 }, email_format: true
  validates :password, password_strength: true

  def password_required?
    !password.blank?
  end
end