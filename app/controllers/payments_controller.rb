class PaymentsController < ApplicationController
    def create_payment_intent
      cart_items = params[:cart_items]
      total_amount = calculate_total_amount(cart_items)
      total_amount_in_cents = (total_amount * 100).to_i
      delete_cart_items(cart_items)
      begin
        intent = Stripe::PaymentIntent.create({
          amount: total_amount_in_cents,
          currency: 'usd', 
        })
  
        render json: { client_secret: intent.client_secret }
      rescue Stripe::StripeError => e
        render json: { error: e.message }, status: :unprocessable_entity
      end
    end
  
    private
  
   def calculate_total_amount(cart_items)
  total = cart_items.sum { |item| item[:price] }
  total
  end
  def delete_cart_items(cart_items)
    cart_items.each do |item|
      Item.find(item[:id]).destroy
    end
  end
  end