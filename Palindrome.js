function palindromeCheck (word)
{
    var returnValue = false;
    var wordRegular = word;

    var splitStringArray = wordRegular.split();
    var reversedArray = splitStringArray.reverse();
    var wordReversed = reversedArray.join();

    if (wordRegular === wordReversed)
    {
        returnValue = true;
    }
    return returnValue;
}