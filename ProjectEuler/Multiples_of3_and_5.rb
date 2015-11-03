# Find the sum of all the multiples of 3 or 5 below 1000.

def multiples_by_3_or_5 (n)
  suma = 0
  for i in 0...n
    if i%3 == 0 || i%5 == 0
      print i.to_s + " "
      suma += i
    end
  end

puts "\nfinal sum: " + suma.to_s
end


multiples_by_3_or_5(1000)