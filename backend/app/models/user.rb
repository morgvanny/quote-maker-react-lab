# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  has_many :quotes
  validates_uniqueness_of :username

  def as_json(options = {})
    super(options.merge(except: [:password_digest]))
  end
end
