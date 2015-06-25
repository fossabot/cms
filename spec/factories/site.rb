FactoryGirl.define do
  factory :site do
    host { Faker::Internet.domain_name }
    name { Faker::Company.name.gsub("'", '') }
    sub_title { Faker::Company.catch_phrase }
    copyright { Faker::Name.name }
    charity_number { Faker::Number.number(Faker::Number.digit.to_i) }
    sidebar_html_content { "<h2>#{Faker::Lorem.sentence}</h2>" }

    association :created_by, factory: :user
    association :updated_by, factory: :user

    after(:create) do |site|
      site.users += [site.created_by, site.updated_by]
    end
  end
end
