class Seller < ApplicationRecord
    has_many :reviews
    has_many :items
    has_many :customers, through: :reviews
end 