#Numbers (floats and integers)
#puts(1.class)
#puts(1.0.class)
2 - 3 # => -1
2 * 3 # => 6
1 + 1 # => 2
1 / 2 # => 0 (rounds down)
1 / 2.0 #=> 0.5 (does not round float)

#Strings
puts("foo".length) # => 3
puts("foo".include?("o")) # => true
#Strings are mutable unlike js (mutable - they can be changed after they're created)
str = "foo"
str.upcase # => "FOO"

str # => "foo" (upcase does not mutate str)
str.upcase! # => "FOO"
str # => "FOO" (upcase! DOES mutate str)

num = 8
str_one = "foo"
#String interpolation
"I can do #{num} burpees in 30 seconds because i am a burpee #{str_one}l"

# Symbols
puts(:foo.class)

#Boolean
puts(1 == 1)
puts(true.class)
puts(2 == 1)

# nil is used in Ruby, null is used in JS
# Ruby only has two falsy values: nil and false

# A Symbol is similar to a String. It cannot be mutated or manipulated. It is used represent things rather than text. Symbols start with :.

# Arrays
arr = [:Gustave, :Sandrine, :Delphine, :Maurice]
arr.include?(:Sandrine) # => true
arr.push(:Ric)
arr.push(:Ben)
puts(arr)
puts(arr[-2])

# We can also concatenate arrays:

[1, 2, 3] + [4, 5] # => [1, 2, 3, 4, 5]
# (this is a new array. neither is mutated)

#Ranges A Range allows you to define a range of values. This is a great technique to avoid for loops. you can use three dots instead of two for an exclusive range.
(1..10).to_a #=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
(1...10).to_a #=> [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Hashes - similar to a JS object
gustave = { 'name' => 'Gustave', 'age' => 2.5 }
puts gustave['name'] # => 'Gustave'
puts gustave['foo'] # => nil

puts ben['name']
puts ben['age']
ben['age'] = 26
puts "Ben is #{ben['age']}"

alfonso = {
  :name => 'Alfonso'
  :age => 19
}

puts alfonso[:name]
puts alfonson[:age]
puts "The Fonz is #{alfonso[:age]}"

evan = {
  name: 'Evan'
  age: 41
}

puts evan

# Iteration
3.times { |i| puts i }
# > 0
# > 1
# > 2

3.times { |i| puts i} # ruby block betweem curly braces

# times is a method that takes a block. A block is just a chunk of code that may or may not take arguments. The closest thing to a block in ES6-land would be an (anonymous) arrow function.

# We can also iterate over arrays:

arr = [10, 20, 30]

arr.each { |num| puts num }
# > 10
# > 20
# > 30

arr.map { |num| num / 10 }
# => [1, 2, 3]
# For comparison sake, let's show the above in Javascript

const arr = [10,20,30]

arr.forEach(num => console.log(num))
// 10
// 20
// 30

arr.map(num => num / 10)
// [1,2,3]

# each and map also take blocks (just like forEach and map take callbacks in JS).
#
# For blocks with longer lines or multiple lines, replace { and } with do and end

arr.map do |num|
  "#{num / 10} is great!"
end
# => ["1 is great!", "2 is great!", "3 is great!"]
# And we can iterate over hashes:

hash = { a: 1, b: 2, c: 3 }
hash.each do |key, val|
  puts "the value of #{key} is #{val}"
end
# > the value of a is 1
# > the value of b is 2
# > the value of c is 3

# Methods
#
# In Ruby everything is a Method. There are NO functions!

def add(a, b)
  a + b
end

add(1, 2) # => 3

add(1, 2, 3)
# > ArgumentError: wrong number of arguments (given 3, expected 2)

def say_hi(name = 'World')
  puts "Hello, #{name}!"
end

# Control Flow
#
# if/elsif/else and ternary
def number_message(num)
  if num < 10
    puts 'what a small number'
  elsif num > 10
    puts 'That is a big number!'
  else
    puts 'That number is just right!'
  end
end

# if / unless
# We also have single-line ifs

puts 'you are old!' if age >= 100

# You may even see unless

puts 'you are old!' unless age < 100
When you see an unless foo, read it as if !foo

# if !foo can always be written as unless foo which creates a more readable line

# Ternary operator
# A ternary operator looks just like we have seen in JS

num.even? ? "#{num} is even!" : "#{num} is odd!"

# while loops

a = 10
while a.positive?
  puts a
  a -= 1
end

1 && 2 # => 2 (truthy)
nil && 2 # => nil (falsy)
1 && nil # => nil (falsy)

1 || nil # => 1 (truthy)
nil || 2 # => 2 (truthy)
false || nil # => nil (falsy)
