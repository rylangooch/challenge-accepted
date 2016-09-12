# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bob = User.create(name: 'Bob Bobby', email: 'hello@hello.com', nickname: 'Bob')
bab = User.create(name: 'Bab Babby', email: 'bye@bye.com', nickname: 'Bab')

# create challenges
ping_pong = Challenge.create( title: 'ping-pong masters',
                              ante: 'A round of beers',
                              user_id: bob.id
                            )
poker     = Challenge.create( title: 'poker masters',
                              ante: 'A bag of peanuts',
                              user_id: bab.id,
                            )
