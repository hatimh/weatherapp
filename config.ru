# Require config/environment.rb
require ::File.expand_path('../config/environment',  __FILE__)

set :app_file, __FILE__
run Sinatra::Application

require 'sinatra'
require 'sinatra/cross_origin'

configure do
  enable :cross_origin
end
