class Api::MembershipsController < ApplicationController
  def delete
    target = Membership.find_by(member_id: current_user.id, group_id: params[:group_id].to_i)
    @group = Group.find(params[:group_id].to_i)
    target.delete
    render 'api/groups/show'
  end

  def create
    @membership = Membership.new(member_id: params[:member_id].to_i, group_id: params[:group_id].to_i)
    if @membership.save
      @group = Group.find(params[:group_id])
      render 'api/groups/show'
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  private

  def membership_params
    params.permit(:member_id, :group_id)
  end

end
