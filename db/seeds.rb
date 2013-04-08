# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Link.create!(url: "www.stumweb.com",
			 title: "Stumweb: the front page of New York City!",
			 comment: "nice website")
Link.create!(url: "www.google.com",
			 title: "Search Google now",
			 comment: "google search")
Link.create!(url: "www.facebook.com",
			 title: "Find out what your friends are doing",
			 comment: "facebook")