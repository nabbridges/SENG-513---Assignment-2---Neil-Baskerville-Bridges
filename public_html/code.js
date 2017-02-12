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
        maxLineLength: getMaxLineLength(txt),
        palindromes: getPalindromes(txt),
        longestWords: getLongestWords(txt),
        mostFrequentWords: getMostFrequentWords(txt)
    };
}

//DONE
function getNChars(txt){        
    if(txt !== null && txt !== "")
        return txt.length;
    
    else
        return 0;    
}

//DONE
function getNWords(txt){
    let words = txt.replace(/\W/g, " ").match(/\S+/g);
        
    if(words !== null && txt !== "")
        return words.length;
    
    else
        return 0;    
}

//DONE
function getNLines(txt){
    let lines = txt.match(/\n/g);
        
    if(txt === "")
        return 0;
    
    else if(lines !== null)
        return lines.length+1;
    
    else
        return 1;    
}

//DONE
function getNNonEmptyLines(txt){
    let line = txt.split("\n");
    let checkEmptyLine = "";
    let numNonEmptyLines = 0;
    
    for(let i = 0; i < line.length; i++)
    {
        checkEmptyLine = line[i].replace(/\s/g, "");
        if(checkEmptyLine !== "")
            numNonEmptyLines++;
    }

    if(txt === "")
        return 0;
    
    return numNonEmptyLines;
}

//DONE
function getAverageWordLength(txt){
    let words = txt.replace(/\W/g, " ").match(/\S+/g);
        
    if(words !== null && txt !== "")
    {
        let totalLength = 0;
        
        for(let i = 0; i < words.length; i++)
            totalLength+=words[i].length;
        
        return totalLength/words.length;
    }
    
    else
        return 0; 
}

//DONE
function getMaxLineLength(txt){
    let temp = txt.match(/^.*$/mg);
    let charsPerLine = 0;
            
    if(txt === "")
        return 0;
    
    else if(temp === null)
        return txt.length;
    
    else if(temp !== null)
    {
        for(let i = 0; i < temp.length; i++)
        {
            if(charsPerLine < temp[i].length)
                charsPerLine = temp[i].length;
        }
        
        return charsPerLine;
    }
}

//DONE
function getPalindromes(txt){
    let toReturn = [];
    let add = true;
    let words = txt.replace(/\W/g, " ").toLowerCase().match(/\S+/g);

    if(words === null)
        return toReturn;
    
    for(let i = 0; i < words.length; i++)
    {
        let backwards = words[i].split("").reverse().join("");
        
        if(words[i] === backwards && words[i].length > 2)
        {
            for(let j = 0; j < toReturn.length; j++)
            {
                if(toReturn[j] === words[i])
                    add = false;
            }
            
            if(add === true)
            {
                toReturn.push(words[i]);
            }
            
            add = true;
        }
    }
    
    return toReturn;
}

//DONE
function getLongestWords(txt){
    let temp;
    let toReturn = [];
    let words = txt.replace(/\W/g, " ").toLowerCase().match(/\S+/g);
    

    if(txt === "" || words === null)
        return toReturn;
    
    for(let i = 0; i < words.length; i++)
    {
        if(toReturn.includes(words[i]) === false)
            toReturn.push(words[i]);
    }
    
    toReturn.sort();
    
    for(let j = 0; j < toReturn.length-1; j++)
    {
        for(let k = 0; k < toReturn.length-1; k++)
        {
            if(toReturn[k].length < toReturn[k+1].length)
            {
                temp = toReturn[k];
                toReturn.splice(k, 1, toReturn[k+1]);
                toReturn.splice(k+1, 1, temp);
            }
        }
        
    }
    
    if(toReturn.length > 10)
        toReturn = toReturn.slice(0, 10);
    
    return toReturn;
}

function getMostFrequentWords(txt){
    let toReturn = [];
    let countAndWord = [];
    let words = txt.replace(/\W/g, " ").toLowerCase().match(/\S+/g);

    if(txt === "" || words === null)
        return toReturn;
    
    words = words.sort();
    
    let wordCount = 1;
 
    for(let i = 0; i < words.length; i++)
    {
        if(words[i] === words[i+1])
            wordCount++; 
                
        else
        {
            countAndWord.push([wordCount, words[i]]);
            wordCount = 1;
        }
    }

    countAndWord.sort().reverse();
    let temp = [];
    for(let j = 0; j < countAndWord.length-1; j++)
    {
        let k = j+1;
        while(k < countAndWord.length && countAndWord[j][0] === countAndWord[k][0])
        {
            if(countAndWord[j][1] > countAndWord[k][1])
            {
                temp = countAndWord[j];
                countAndWord.splice(j, 1, countAndWord[k]);
                countAndWord.splice(k, 1, temp);
                k++;
            }
        }
        
        if(countAndWord[j][0] === countAndWord[j+1][0] && countAndWord[j][1] < countAndWord[j+1][1])
            toReturn.splice(j, 0, countAndWord[j]);
        
        else if (countAndWord[j][0] !== countAndWord[j+1][0])
            toReturn.splice(j, 0, countAndWord[j]);            
    }
    
    toReturn.splice(countAndWord.length-1, 0, countAndWord[countAndWord.length-1]);
    if(toReturn.length > 10)
        toReturn = toReturn.slice(0,10);
    
    let toReturnFormatted = [];

    for(let l = 0; l < toReturn.length; l++)
        toReturnFormatted.push(toReturn[l][1] + "(" + toReturn[l][0] +")");

    
    return toReturnFormatted;
}
