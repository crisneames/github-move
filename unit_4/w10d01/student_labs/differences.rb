# # Get Name
# # Write a method that accepts a name from the user and then returns it. Here's the javascript:
# #
# # const getName = () => {
# #   let name = prompt("what is your name?");
# #   return name;
# # };
########################################
# # puts "What is your name? "
# # name = gets
# # puts "Hello #{name} "
#########################################
# # Reverse It
# # Write a method that reverses a string. Here's the javascript:
#
#
# # const reverseIt = () => {
# #   let string = "a man, a plan, a canal, frenemies!";
# #
# #   let reverse = "";
# #
# #   for (let i=0; i < string.length; i++) {
# #     reverse += string[string.length - (i+1)];
# #   };
# #
# #   alert(reverse);
# # };
##################################################################
# def reverse_it
# puts "a man, a plan, a canal, frenemies!".reverse
# end
#
# reverse_it
###################################################################
# # Swap Em
# # Write a method that swaps the values of two variables around. Here's the javascript:
# #
# # const swapEm = () => {
# #   let a = 10;
# #   let b = 30;
# #   let temp;
# #
# #   temp = b;
# #   b = a;
# #   a = temp;
# #
# #   alert("a is now " + a + ", and b is now " + b);
# # };
###############################################################
# a = 1
# b = 2
#
# a, b = b, a
# puts a, b
#################################################################

# # Multiply Array
# # Write a method that multiplies all numbers in a given array and returns the final product. Here's the javascript:
# #
# # const multiplyArray = (ary) => {
# #   if (ary.length == 0) { return 1; };
# #
# #   let total = 1;
# #   // let total = ary[0];
# #
# #   for (let i=0; i < ary.length; i++) {
# #     total = total * ary[i];
# #   };
# #
# #   return total;
# # };
####################################
Array A = [1,2,3,4,5]
puts [1, 2, 3, 4, 5].inject(:*)
####################################

# Fizz Buzzer
# Write a method that takes a number argument and returns "fizz" if the number is divisible by three, "buzz" if the number is divisible by five, and "fizzbuzz" if it's divisible by both. Here's the javascript:
#
# const fizzbuzzer = (x) => {
#   if( x%(3*5) == 0 ) {
#     return 'fizzbuzz'
#   } else if( x%3 == 0 ) {
#     return 'fizz'
#   } else if ( x%5 == 0 ) {
#     return 'buzz'
#   } else {
#     return 'archer'
#   }
# }
########################################

def fizzbizz
  if x%(3*5) = 0
    return 'fizzbuzz'
  elsif x%3 = 0
    return 'fizz'
  elsif x%5 = 0
    return 'buzz'
  else
    return archer
end


# # Ruby foreach
# ['one', 'two', 'three'].each do |str|
# 	puts 'the value is ' + str
# end
#
# # Map returns a brand new array, foreach does not
#
# ['one', 'two', 'three'].each { |str| puts 'the value is ' + str } #short form
#
# times_two = [1,2,3].map do |num|
# 	num * 2
# end
#
# p times_two
#
# p [1,2,3].map {|num| num * 2}
#
# # p is short for puts
#
# # def each(arr, &blk) #&blk must always be the last parameter
# # 	for elem in arr
# # 		blk.call(elem)
# # 	end
# # end
# #
# # each 0...5 do |currentNum|
# # 	puts currentNum
# # end
# # The &blk is just a variable that comes in
# # The & means pass by reference
# # This means that the variable &blk points to something and is not a copy of whatever was passed in
# # Therefore &blk is just a reference to the block of code between do and end
# # We can execute that code by calling blk.call()
# # If we don't want to bother with &blk, we have a shortcut:
# #
# def each(arr)
# 	for elem in arr
# 		yield(elem) #use this instead of &blk.call
# 	end
# end
#
# each 0...5 do |currentNum|
# 	puts currentNum
# end
#
# # Yield is a Ruby keyword that calls a block when you use it. It’s how methods USE blocks!
# #
# # When you use the yield keyword, the code inside the block will run & do its work.
# #
# # Just like when you call a regular Ruby method.
#

# Describe and use a proc
# A Proc object is an encapsulation of a block of code, which can be stored in a local variable, passed to a method or another Proc, and can be called.
#
# Proc is an essential concept in Ruby and a core of its functional programming features.
#
# A block is just a type of variable called a proc
# procs are just ways to save functions into variables for later use
# log = Proc.new {|el| puts el}
# log.call(5)

# # Select - Returns an array containing all elements of an array for which the given block returns a true value.
# p [1,2,3,4,5].select { |i| i > 3 } #returns [4,5]
#

# # Detect - Returns the first element of an array for which the block is true.
# p [1,2,3,4,5].detect { |i| i > 3 } #returns [4]
#

# # Reject - Returns an array for all elements of an array for which the given block returns false.
# p [1,2,3,4,5].reject { |i| i > 3 } #returns [1,2,3]

# # GREP
# #Returns an array of every element in the array for which Pattern === element
# p [1,3,5,10,15].grep (1..5) #returns [1,3,5]
# p [0.3, "three", :three, "thirty-three"].grep /three/ #returns ["three", :three, "thirty-three"]
#
# #You can also add a block to pass each matching element through
 # p [1,3,5,10,15].grep (1..5) {|i| i * 3} #returns [3,9,15]
#




# downcase/ downcase! / swapcase / swapcase!
# puts "NAME".downcase
# p "cristi".downcase!

# Calling the downcase method on a string will return the lowercase version of the string, but the original variable won't change
#
# Calling the same methods followed by an exclamation mark will both return lowercase version of the string and will also change the content of the variable.
#
# The .swapcase method transforms the uppercase letters in a string to lowercase and the lowercase letters to uppercase.

# puts "hELLO wORLD".swapcase    #=> Hello World

# swapcase!  - Modify str by swapping case of all characters
#   "Hello World".swapcase!
###################################################################
