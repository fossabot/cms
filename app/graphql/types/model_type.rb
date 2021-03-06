module Types
  class ModelType < BaseObject
    implements GraphQL::Relay::Node.interface

    global_id_field :id

    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def self.connection_type_class
      TotalCountConnection
    end
  end
end
