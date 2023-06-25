class ItemsSerializer < ActiveModel::Serializer
  attributes :id, :price, :seller
  belongs_to :seller
end
