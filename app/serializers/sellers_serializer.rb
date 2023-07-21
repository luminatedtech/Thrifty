class SellersSerializer < ActiveModel::Serializer
  attributes :id,:type,:items,:reviews
  has_many :customers
  has_many :items
  has_many :reviews
  def type
    "seller"
  end 
end
