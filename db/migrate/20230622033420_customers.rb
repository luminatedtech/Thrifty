class Customers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :shopping_cart, array: true, default: []
      t.string :username
      t.string :password_digest
    end 
  end
end
