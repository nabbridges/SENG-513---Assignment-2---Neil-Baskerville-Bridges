/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getStats(txt) {
    return {
        nChars: getNChars(txt),
        nWords: getNWords(txt),
        nLines: getNLines(txt),
        nNonEmptyLines: getNNonEmptyLines(txt),
        averageWordLength: getAverageWordLength(txt),
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
}

function getNChars(txt){
    var chars = txt.match(/./g);
        
    if(chars !== null && txt !== "")
        return chars.length;
    else
        return 0;    
}

function getNWords(txt){
    var words = txt.replace(/\W/g, " ").match(/\S+/g);
        
    if(words !== null && txt !== "")
        return words.length;
    else
        return 0;    
}

function getNLines(txt){
    var lines = txt.match(/\n/g);
        
    if(txt === "")
        return 0;
    else if(lines !== null)
        return lines.length+1;
    else
        return 1;    
}

function getNNonEmptyLines(txt){
    var nonEmptyLines = txt.match(/\S*$/m);
    
        if(nonEmptyLines !== null && txt !== "")
        return nonEmptyLines.length;
    else
        return 0; 
    
}

function getAverageWordLength(txt){
    var words = txt.replace(/\W/g, " ").match(/\S+/g);
        
    if(words !== null && txt !== "")
    {
        var totalLength = 0;
        for(var i = 0; i < words.length; i++)
        {
            totalLength+=words[i].length;
        }
        return totalLength/words.length;
    }
    else
        return 0; 
}