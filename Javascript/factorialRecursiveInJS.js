function factorial(num)
{
    // expected a numeric input only
    if(num===0 || num===1)
    {
        return 1;
    }
    return num*factorial(num-1);
}

factorial(10);