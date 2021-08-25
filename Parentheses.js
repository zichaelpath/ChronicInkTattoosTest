function parentheses(phrase)
{
    var returnValue = false;
    var openingParentheses = 0;
    var closingParentheses = 0;
    var stringArray = phrase.split();
    for (var i = 0; i < stringArray.length; i++)
    {
        if (stringArray[i] === "(")
        {
            openingParentheses += 1;
        }
        else
        {
            closingParentheses += 1;
        }
    }

    for (var i = 0; i < stringArray.length; i++)
    {
        if (stringArray[i] === "(")
        {
            openingParentheses -= 1;
        }
        else
        {
            closingParentheses -= 1;
        }
    }

    if (openingParentheses === 0 && closingParentheses === 0)
    {
        returnValue = true;
    }
    return returnValue;
}