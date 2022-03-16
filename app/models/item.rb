class Item < ApplicationRecord
    belongs_to :user

    validates :to_do_date, presence: true
    validates :title, presence: true
end
