def fizz_buzz_for_loop (start_n, stop_n)
  for num in (start_n..stop_n) do 
    if num%5.0 == 0
      if num%3.0 == 0
        puts "FizzBuzz"
      else
        puts "Buzz"
      end
    elsif num%3 == 0
      puts "Fizz"
    else
      puts num
    end
  end
end

fizz_buzz_for_loop(0,100)
