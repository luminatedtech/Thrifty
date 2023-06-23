class ItemsSerializer < ActiveModel::Serializer
  attributes :id, :price
  belongs_to :seller
end
