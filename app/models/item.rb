class Item < ApplicationRecord
    belongs_to :seller
    validates :condition, presence: true
    validates :wearer, presence: true
    validates :size, presence: true
    
end 