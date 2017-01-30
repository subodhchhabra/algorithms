def multiples_by_3_or_5(n):
    """
    multiples_by_3_or_5 prints out the numbers that are smaller than n (n not included) and either multiples of 3 OR 5.
    """
    suma = 0
    for i in range(n):
        if i%3 == 0 or i%5 == 0:
            print i
            suma += i
    print suma

multiples_by_3_or_5(1000)