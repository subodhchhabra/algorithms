def fizz_buzz_for_loop (start_n, stop_n)
  reply = []
    for num in (start_n..stop_n) do
    if num%5.0 == 0
      if num%3.0 == 0
        answer = "FizzBuzz"
      else
        answer= "Buzz"
      end
    elsif num%3 == 0
      answer = "Fizz"
    else
      answer = num
    end
  reply << answer
  end
  reply
end

p fizz_buzz_for_loop(1,30)


def fizz_buzz_each (start_n, stop_n)
  reply = []
  (start_n..stop_n).each do |num|
    if num%3 == 0 and num%5 == 0
      answer = "FizzBuzz"
    elsif num%3 == 0
      answer = "Fizz"
    elsif num%5 == 0
      answer= "Buzz"
    else
      answer = num
    end
  reply << answer
  end
  reply
end

p fizz_buzz_each(1,30)
