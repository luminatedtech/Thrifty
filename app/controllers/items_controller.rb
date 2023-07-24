class ItemsController < ApplicationController
    def create 
        seller = Seller.find_by(id: session[:seller_id])
        item = seller.items.create(item_params)
        if item.valid? && session[:seller_id] = item.seller.id
            render json: item, status: :created
        else
            render json: {errors: ['Test error']}
        end 
    end 
    def index
        if params[:seller_id]
            seller = Seller.find(params[:seller_id])
            items = seller.items
        else 
            items = Item.all
        end 
        render json: items, include: :seller
    end 
    def destroy
        seller = Seller.find_by(id: session[:seller_id])
        item = Item.find_by(id: params[:id])
        item.destroy
        seller_items = seller.items
        render json: seller_items 
    end 
    def update 
        item = Item.find_by(id: params[:id])
        if session[:seller_id] == item.seller.id
            item.update(item_params)
            items = Item.all
            seller_items = items.where(seller_id: session[:seller_id])
            if item.valid?
                render json: seller_items
            else 
                render json: {errors: ["test error"]}
            end 
        else 
            render json: {errors: ["Test error"]}
        end 
    end 
    def show
        item = Item.find_by(id: params[:id])
        render json: item
    end 
    def mens_items
        items = Item.all
        filtered_items = items.select{|item| item.wearer == "Mens"}
        render json: filtered_items, include: :seller
    end 
    def womens_items
        items = Item.all
        filtered_items = items.select{|item| item.wearer == "Womens"}
        render json: filtered_items, include: :seller
    end 
    def seller_list
        items = Item.all
        seller_items = items.where(seller_id: session[:seller_id])
        render json: seller_items
    end 
    def allen
        puts "hello"
        items = Item.all
        render json: items
    end 
    private     
    def item_params
        params.permit(:category,:price,:size,:condition,:photo,:brand,:name,:seller_id,:wearer)
    end 
end
