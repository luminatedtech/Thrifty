class CustomersSerializer < ActiveModel::Serializer
  attributes :id,:reviews
  has_many :sellers
  has_many :reviews
end
