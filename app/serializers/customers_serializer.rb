class CustomersSerializer < ActiveModel::Serializer
  attributes :id
  has_many :sellers
end
