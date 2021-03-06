class ItemsController < ApplicationController
  before_action :authorize_request
  before_action :set_item, only: [:show, :update, :destroy]

  # GET /items
  def index
    @items = Item.where(user_id: @current_user.id)
    
    render json: @items
  end
  
  # GET /items/1
  def show
    render json: @item
  end
  
  # POST /items
  def create
    @item = Item.new(item_params)
    @item.user_id = @current_user.id
    if @item.save
      render json: @item, status: :created, location: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end
  
  # PATCH/PUT /items/1
  def update
    @item.to_do_date = Date.new
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end
  
  # DELETE /items/1
  def destroy
    @item.destroy
  end
  
  private
  # Use callbacks to share common setup or constraints between actions.
  def set_item
    @item = Item.find(params[:id])
  end

    # Only allow a list of trusted parameters through.
    def item_params
      params.require(:item).permit(:title, :description, :notes, :completed, :to_do_date)
    end
end
