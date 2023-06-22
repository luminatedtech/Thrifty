class ApplicationController < ActionController::API
  include ActionController::Cookies
  private 
  def authorize
    @customer = Customer.find_by(id: session[:customer_id])
    return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
  end 
end
