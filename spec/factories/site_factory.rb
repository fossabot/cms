# == Schema Information
#
# Table name: sites
#
#  id                   :integer          not null, primary key
#  host                 :string(64)       not null
#  name                 :string(64)       not null
#  sub_title            :string(64)
#  layout               :string(32)       default("one_column")
#  main_menu_page_ids   :text
#  copyright            :string(64)
#  google_analytics     :string(32)
#  charity_number       :string(32)
#  stylesheet_filename  :string(36)
#  sidebar_html_content :text
#  created_by_id        :integer          not null
#  updated_by_id        :integer          not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  main_menu_in_footer  :boolean          default(FALSE), not null
#  separate_header      :boolean          default(TRUE), not null
#  facebook             :string(64)
#  twitter              :string(15)
#  linkedin             :string(32)
#  github               :string(32)
#  youtube              :string(32)
#
# Indexes
#
#  fk__sites_created_by_id  (created_by_id)
#  fk__sites_updated_by_id  (updated_by_id)
#  index_sites_on_host      (host) UNIQUE
#
# Foreign Keys
#
#  fk_sites_created_by_id  (created_by_id => users.id)
#  fk_sites_updated_by_id  (updated_by_id => users.id)
#

FactoryGirl.define do
  factory :site do
    host { Faker::Internet.domain_name }
    name { Faker::Company.name.gsub("'", '') }

    association :created_by, factory: :admin
    updated_by { created_by }
  end
end