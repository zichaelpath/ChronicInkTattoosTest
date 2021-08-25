var fibonacciArray = [];

function Fibonacci(n)
{
    var addedElement = 0;
    if (fibonacciArray.length === 0)
    {
        fibonacciArray.push(0);
    }
    else if (fibonacciArray[0] === 0)
    {
        fibonacciArray.push(1);
    }
    else
    {
       addedElement = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
       fibonacciArray.push(addedElement);
    }

    if (addedElement != n)
    {
        Fibonacci(n);
    }
    else
    {
        return fibonacciArray;
    }
}