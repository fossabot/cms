require 'rails_helper'

RSpec.describe Types::QueryType do
  subject(:result) { GraphqlSchema.execute(query, context: context) }

  let(:site) { FactoryBot.create(:site) }
  let(:user) { FactoryBot.build(:user, site: site) }
  let(:context) { { user: user, site: site } }

  context 'with messages query' do
    let!(:message1) do
      FactoryBot.create(
        :message,
        name: 'Message 1',
        site: site,
        created_at: Time.zone.now - 2.days,
        updated_at: Time.zone.now - 2.days
      )
    end

    let!(:message2) do
      FactoryBot.create(
        :message,
        site: site,
        name: 'Message 2',
        created_at: Time.zone.now - 1.day,
        updated_at: Time.zone.now - 1.day
      )
    end

    let(:query) do
      <<~BODY
        query {
          messages(orderBy: {field: CREATED_AT, direction: DESC}) {
            nodes {
              name
            }
            totalCount
          }
        }
      BODY
    end

    let(:expected_result) do
      [
        {
          'messages' => {
            'nodes' => [
              { 'name' => message2.name },
              { 'name' => message1.name }
            ],
            'totalCount' => 2
          }
        }
      ]
    end

    before { FactoryBot.create(:message) }

    it 'returns scoped ordered messages' do
      expect(result.values).to eq expected_result
    end
  end

  context 'with pages query' do
    let!(:page1) { FactoryBot.create(:page, name: 'Page 1', site: site) }
    let!(:page2) { FactoryBot.create(:page, name: 'Page 2', site: site) }

    let(:query) do
      <<~BODY
        query {
          pages {
            nodes {
              name
            }
            totalCount
          }
        }
      BODY
    end

    let(:expected_result) do
      [
        {
          'pages' => {
            'nodes' => [
              { 'name' => page1.name },
              { 'name' => page2.name }
            ],
            'totalCount' => 2
          }
        }
      ]
    end

    before { FactoryBot.create(:page) }

    it 'returns ordered pages' do
      expect(result.values).to eq expected_result
    end
  end

  context 'with sites query' do
    let!(:site2) do
      FactoryBot.create(
        :site,
        host: 'aaaa.com',
        created_at: Time.zone.now - 2.days,
        updated_at: Time.zone.now - 2.days
      )
    end

    let(:user) { FactoryBot.build(:user, groups: [site.host, site2.host]) }

    let(:query) do
      <<~BODY
        query {
          sites {
            nodes {
              host
            }
            totalCount
          }
        }
      BODY
    end

    let(:expected_result) do
      [
        {
          'sites' => {
            'nodes' => [
              { 'host' => site2.host },
              { 'host' => site.host }
            ],
            'totalCount' => 2
          }
        }
      ]
    end

    before { FactoryBot.create(:site) }

    it 'returns ordered sites' do
      expect(result.values).to eq expected_result
    end
  end

  context 'with node query' do
    let(:message) { FactoryBot.create(:message, site: site) }

    let(:id) { Base64.urlsafe_encode64("Message-#{message.uid}") }

    let(:query) do
      <<~BODY
        query {
          node(id: "#{id}") {
            id
            ... on Message {
              name
            }
          }
        }
      BODY
    end

    let(:expected_result) do
      [
        {
          'node' => {
            'id' => id,
            'name' => message.name
          }
        }
      ]
    end

    it 'returns message' do
      expect(result.values).to eq expected_result
    end
  end
end
