class Seller < ApplicationRecord
    has_many :reviews
    has_many :items
    has_many :customers, through: :reviews
    validates :username, presence: true, uniqueness: true
    has_secure_password
end 