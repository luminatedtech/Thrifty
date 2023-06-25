class SellersSerializer < ActiveModel::Serializer
  attributes :id,:type,:items
  has_many :customers
  has_many :items
  def type 
    "seller"
  end 
end
