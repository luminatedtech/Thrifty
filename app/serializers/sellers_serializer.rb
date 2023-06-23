class SellersSerializer < ActiveModel::Serializer
  attributes :id
  has_many :customers
  has_many :items
end
