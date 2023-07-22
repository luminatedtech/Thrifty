class PaymentsController < ApplicationController
    def create_payment_intent
      # Get the cart items and calculate the total amount (replace this with your logic)
      cart_items = params[:cart_items]
      total_amount = calculate_total_amount(cart_items)
      total_amount_in_cents = (total_amount * 100).to_i
      delete_cart_items(cart_items)
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
  def delete_cart_items(cart_items)
    # Implement your logic to delete the cart items from the database
    # For example, if you have a CartItem model:
    cart_items.each do |item|
      Item.find(item[:id]).destroy
    end
  end
  end