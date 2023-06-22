class SellersSerializer < ActiveModel::Serializer
  attributes :id, :items, :customers
  has_many :customers
end
