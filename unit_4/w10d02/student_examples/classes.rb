
# p "Hello World".upcase
# p "Hello World".class
#
# class String
#   def is_palindrome?
#     self.upcase.reverse == self.upcase
#   end
# end
#
# p "Evan".is_palindrome?
# p "radar".is_palindrome?

class World
  def name
    "Nothing But Shrimp"
  end
end

world1 = World.new # new instance of class World


# p world1
# p world1.name
# p world1.class


# Let's make it so we can update properties by refactoring code
class World
  def initialize name, shape = "oblate spheroid"
    # constructor (name){}
    # required to be named initilize analagous with constructor
    @name = name
    @shape = shape
    @people = []
  end
  def name
    @name
  end
  def shape
    @shape
  end
  def people
    @people
  end
  def name=value
    # name=value these need to be touching for us to make our setter method this is required
    @name = value
  end
  def populate
    @people << { name: "Evan James", age: 35 }
  end
end

world1 = World.new "Panthelassa"
world2 = World.new "Tatooine", "sphere"
world3 = World.new "Nothing But Shrimp", "dome"
world4 = World.new "San Junipero", "cylinder"

# p world1.shape
# p world2.shape
# p world3.shape
# p world4.shape

planets = %w( Mercury Venus Earth Mars Jupiter Saturn Uranus Pluto)
milky_way = []
planets.each do |planet|
  world = World.new planet
  milky_way << world
end
p milky_way

class Mathy
  def self.formula_1 (a, b, c)
     a + b * c
   end
  def self.subtract_and_divide (a , b, c)
    (a - c ) / b
  end

  def self.powers_of_3 a
     `a * a * a / 3`
  end

  def self.multiply (a, b, c)
    a *  b * c
  end
end

# p Mathy.formula_1(2, 3, 4)

##########################
# Beginning Hangman
#########################
class Word
	def initialize word
		letters = word.split('')
     @word = word
		@letters_display = letters.map do |l|
			{ letter: l, hidden: true }
		end
	end
  def word
   @word
end
	def render
		@letters_display.each do |l|
			if l[:hidden]
				print " _ "
			else
				print l.letter
			end
		end
	end
end
dictionary = ["potato", "honey", "tea", "rice", "quinoa"]
word = dictionary.sample
puts "Hangman! Guess this word"
puts " The length of the word is #{word.length
}"
current_word = Word.new word
loop do
	current_word.render
	input = gets.chomp
	if input == current_word.word
		puts "Yep. You got it. The word was #{current_word.word}."
		break
	else
		puts "WRONG"
		puts "(t)ry again or (q)uit?"
		again = gets.chomp.downcase
		break if again == "q"
	end
end
