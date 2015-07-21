class AddUsers < ActiveRecord::Migration
  def change
    create_table :users do |table|
      table.string :email, null: false, limit: 64
      table.string :password_digest, null: false, limit: 64

      table.timestamps null: false
    end

    add_index :users, :email, unique: true
  end
end