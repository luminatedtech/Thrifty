class ReviewsSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :seller
  belongs_to :customer
end
