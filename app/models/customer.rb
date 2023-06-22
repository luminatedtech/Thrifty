class Customer < ApplicationRecord
    has_many :reviews
    has_many :sellers, through: :reviews
end 
