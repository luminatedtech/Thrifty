class PaymentsController < ApplicationController
    def create_payment_intent
      # Get the cart items and calculate the total amount (replace this with your logic)
      cart_items = params[:cart_items]
      total_amount = calculate_total_amount(cart_items)
      total_amount_in_cents = (total_amount * 100).to_i
      byebug
      # Create the PaymentIntent using the Stripe API
      begin
        intent = Stripe::PaymentIntent.create({
          amount: total_amount_in_cents,
          currency: 'usd', # Replace with your preferred currency
        })
  
        render json: { client_secret: intent.client_secret }
      rescue Stripe::StripeError => e
        render json: { error: e.message }, status: :unprocessable_entity
      end
    end
  
    private
  
    # Replace this with your logic to calculate the total amount based on cart items
   def calculate_total_amount(cart_items)
  total = cart_items.sum { |item| item[:price] }
  total
end
  end