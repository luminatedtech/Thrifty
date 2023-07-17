class CustomersSerializer < ActiveModel::Serializer
  attributes :id,:reviews,:type,:username,:shopping_cart
  has_many :sellers
  has_many :reviews
  def type
    "customer"
  end 
end
