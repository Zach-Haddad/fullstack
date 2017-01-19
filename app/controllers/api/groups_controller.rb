class Api::GroupsController < ApplicationController
  def create
    @group = Group.new(group_params)
    @group.group_owner_id = current_user.id

    if @group.save
      Membership.create(group_id: @group.id, member_id: current_user.id)
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
    render "api/groups/index"
    # temporary, need to implement search here
  end
  
  # if params[:search]
  #   Group.find(group.name like search_term)
  # else
  #   find all groups where member is the current user id (my groups)

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
    @group.delete
    @groups = Group.all
    render "api/groups/index"
  end

  private

  def group_params
    params.require(:group).permit(:group_owner_id, :name, :description)
  end
end
