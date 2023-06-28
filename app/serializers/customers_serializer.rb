class CustomersSerializer < ActiveModel::Serializer
  attributes :id,:reviews,:type
  has_many :sellers
  has_many :reviews
  def type
    "customer"
  end 
end
