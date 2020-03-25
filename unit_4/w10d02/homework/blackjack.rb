##########################
# I realized late that I did not ask for the player's name.
# The code is messy. I got confused on where to put methods/call methods, what should go in methods, and variable scope. I ran out of time even after working on the assignment this morning.
# I could get two random cards but I pulled the entire objects instead of just the values for the cards 
##########################

class Player
  # can update these attributes later in the program
  attr_accessor :name, :bankroll, :hand

  # initialize allows the creation of a new object based on this model
  def initialize name, bankroll, hand
    @name = name
    @bankroll = 100
    @hand = []
  end
end


class House
  attr_accessor :name, :bankroll, :hand
  def initialize name, bankroll, hand
    @name = "House"
    @bankroll = 10000
    @hand = []
  end
end

class Card
  attr_accessor :value
  def initialize value
    @value = value
  end
end

def generate_deck
  generated_deck = []
  #nested loop to generate deck
  for j in 1..4
    for i in 1..13
      generated_deck.push(Card.new(i))
    end
  end
  generated_deck.shuffle!
  # p generated_deck
end

deck = generate_deck
# generate_deck

human_player = Player.new("Cristi", 100, [])

# p human_player

computer_player = House.new("House", 10000, [])
card_one = computer_player.hand.push(deck.shift)
card_two = computer_player.hand.push(deck.shift)
# p computer_player

def calculate_points
  if human_player.hand > 21
    puts "Sorry, you bust!"
  # if dealer hand < 17
  #   puts "Dealer hits!"
  end


# game time - player hand
# this is the entire object - all I need is the card value
# how do I pull only the value?
  card1 = human_player.hand.push(deck.shift)
  card2 = human_player.hand.push(deck.shift)
  puts "player hand:  #{card1}" # and #{card2}"
  puts "hit or stand?"
  user_input = gets.chomp
  if user_input == "hit"
    human_player.hand.push(deck.shift)
  elsif user_input == "stand"
    ##stand ?
  else
  end
