class SellersSerializer < ActiveModel::Serializer
  attributes :id,:type
  has_many :customers
  has_many :items
  def type 
    "seller"
  end 
end
