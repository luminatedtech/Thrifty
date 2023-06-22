class ReviewsSerializer < ActiveModel::Serializer
  attributes :id, :seller, :customer
  belongs_to :seller
  belongs_to :customer
end
