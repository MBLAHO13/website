require 'test_helper'

class ViewControllerTest < ActionDispatch::IntegrationTest
  test "should get degree" do
    get view_degree_url
    assert_response :success
  end

  test "should get tree" do
    get view_tree_url
    assert_response :success
  end

end
