function reducer(accumulator, current)
{
    return accumulator += current;
}

function Reduce(reduceArray, reducer, initialAccum)
{
    var totalValue = 0;

    for (var i = 0; i < reduceArray.length; i++)
    {
        totalValue = reducer(reduceArray[i], totalValue);
    }
    return totalValue;
}