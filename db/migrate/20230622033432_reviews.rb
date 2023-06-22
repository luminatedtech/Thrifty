class Reviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :comment
      t.integer :rating
      t.integer :customer_id
      t.integer :seller_id
     end 
  end
end
