function caesarCipher(inputString, key)
{
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var keyValue = key;
    
    var inputStringArray = inputString.split();

    for (var i = 0; i < inputStringArray.length; i++)
    {
        for (var j = 0; j < alphabet.length; j++)
        {
            
            if (inputStringArray[i] === alphabet[j])
            {
                if (j + keyValue > 25)
                {
                    var cipher = (j + keyValue) - 25;
                    inputStringArray[i] = alphabet[cipher];
                }
                else
                {
                    inputStringArray[i] = alphabet[j + key];
                }
            }
        }
    }

    var newString = inputStringArray.join();
    return newString;
}