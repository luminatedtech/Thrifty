class SellersSerializer < ActiveModel::Serializer
  attributes :id,:kind,:items,:reviews
  has_many :customers
  has_many :items
  def kind
    "seller"
  end 
end
