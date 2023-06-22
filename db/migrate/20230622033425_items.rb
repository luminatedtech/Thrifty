class Items < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :category
      t.integer :price
      t.string :size
      t.string :condition
      t.string :photo
      t.integer :seller_id
      t.string :wearer
      t.string :brand
      t.string :name 
    end 
  end
end
