class Review < ApplicationRecord
    belongs_to :seller
    belongs_to :customer
    validates :title, presence: true
    validates :comment, presence: true
    validates :rating, numericality: {only_integer: true}
end 