class Customer < ApplicationRecord
    has_many :reviews
    has_many :sellers, through: :reviews
    has_secure_password
    validates :username, uniqueness: true, presence: true
end 
