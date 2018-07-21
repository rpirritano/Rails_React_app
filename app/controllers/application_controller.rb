class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
=begin
  null_session should be used in API-style controllers, where you have no use for the session object.
  The user's preexisting session will remain intact.
=end
end
