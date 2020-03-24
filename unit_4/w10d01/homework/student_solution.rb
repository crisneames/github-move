##############
# Hello World
##############
# 1. Print "Hello World" to the console.

puts "Hello World"

# 2. Interpolate the adjective variable into the Hello World string using #{}

adjective = "Big Bad"
puts "Hello #{adjective} World"

# 3. Save "Hello World" to a variable. Without changing the letters in your code manually, permanently change "Hello World" to uppercased letters.

phrase = "Hello World".upcase
puts phrase

#############################
# Nums Array and Enumerables
# With the following array:
#############################

 nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# 1. Use .uniq to print the array with all duplicate entries removed
# Calling uniq on this array removes the extra values & returns a NEW array with unique numbers.

# puts nums.uniq

# 2. Next, use .push and .pop , .shift .unshift and .length on the array as you would with javaScript (if you need to add a number, add 5)
# << also means push
puts nums.shift(5)
puts nums.unshift
puts nums.push(5)
puts nums.pop #removes the recently inserted item
puts nums.length

# Difference between push/pop and shift/unshift - shift and unshift add/remove elements at the beginning of an Array , actually shifting all other elements, while pop and push add/remove elements at the end of the Array , so preserving other elements' indices

# 3. Use .include? to check if the array contains the number 8
# a string class method that is used to return true if the given string contains the givn string or character

puts nums.include? 8

# 4. Use .find_all to find all the numbers greater than 10

puts nums.find_all{|x| x > 10}

# 5. use .all? to check if all the numbers are greater than 0?

puts nums.all?{ |x| x > 4}

# 6. use any? to check if there are any numbers that are divisible by 8

puts nums.any?{ |x| x / 8}

# 7. use .count to let you know how many numbers are greater than 4

puts nums.count{ |x| x > 4}

# 8. use .each_with_index to print each item times its index

nums.each_with_index{ |num, i| puts "#{num} at index #{i} is
#{num * i}"}


# 9. .find the number that is divisible by 7 and 5 and is greater than 0

# puts nums.find {|num|  num % 5 == 0 and num % 7 == 0 and num > 0}

# 10. .find_index of the number that is divisible by 5 and 7 and is greater than 0

# puts num.find_index {|i| i % 5 == 0 and i % 7 == 0 and i > 0 }

# 11. return the .first 3 numbers

puts nums.first(3)

# 12. return the .last 5 numbers

puts nums.last(5)

# 13. .group_by the modulo of 3 ( % 3 )

puts nums.group_by {|i| i % 3}

# 14. use minmax to return the smallest and largest number

puts nums.minmax

# 15. use .reject to return all the numbers that are NOT divisible by 3

puts nums.reject { |i|  i % 3 == 0 }

# 16. use .select to return all the numbers divisible by 5

puts nums.select { |num|  num % 5 == 0 }

#################
# Color Array
#################
# With the following array:

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# 1. Print out a random color.

puts colors.sample(1 + rand(colors.count))

# 2. Print out the colors array in reverse order.

puts colors.reverse()

# 3. Print out all of the colors in the array with all capital letters.

puts colors.map(&:upcase)

############################
# Methods
############################
# Write a method named find_area that finds the area of a rectangle when given values for width and height
#
# REMEMBER: In Ruby, the keyword return is implied and can be omitted!
def find_area (height, width)
  puts height * width
end

find_area(10, 10)

# Write a method named multiply_each_by_five that will loop over the given nums array below and print each number multiplied by 5

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

def multiply_each_by_five arr
arr.each { |item|
  puts item * 5
}
end

multiply_each_by_five(nums)
