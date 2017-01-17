class Api::GroupsController < ApplicationController
  def create
    @group = Group.new(group_params)

    if @group.save
      render "api/groups/show"
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def show
    @group = Group.find(params[:id])
    render "api/groups/show"
  end

  def index
    @groups = Group.all
    # temporary, need to implement search here
  end

  def update
    @group = Group.find(params[:id])
    if @group.update_attributes(group_params)
      render json: @group
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def destroy
    @group = Group.find(params[:id])
    @group.destroy
    render '/home'
  end

  private

  def group_params
    params.require(:group).permit(:group_owner_id, :name, :description)
  end
end
