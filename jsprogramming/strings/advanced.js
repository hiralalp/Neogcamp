//1.Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

function replaceChar(str,c1,c2){

    let finalStr='';
    for(let i=0;i<str.length;i++){

        if(str[i]==c1)
        finalStr+=c2
        else
        finalStr+=str[i]
    }

    return finalStr
}

console.log(replaceChar("hello","l","p"))

//2.Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word

function removeSpaces(str) {

    let finalStr='';
    for(let i of str){
        if(i!==" "){
            finalStr+=i;
        }
    }
    return finalStr;
}

console.log(removeSpaces('hello    world neog  camp'))

//3.Reverse the given string word wise. That is, the last word in given string should come at 1st place, last second word at 2nd place and so on. Individual words should remain as it is. example: Input : Welcome to NeoG Camp → Camp NeoG to Welcome

function reverseWords(str) {

    let finalStr='';
    let strList=str.split(' ');

    for(i=strList.length-1; i>=1; i--){
        finalStr+=strList[i]+" "
    }

    finalStr+=strList[0]

    return finalStr
}

console.log(reverseWords("Welcome to NeoG Camp"))


//4.A program that counts the value of each character and prints the most repeated character?

function mostRepeatedCharacter(str){

    chars={}

    for(let i=0; i<str.length; i++) {

        if(chars[str.charAt(i)]){
            chars[str.charAt(i)]+=1
        }
        else{
            chars[str.charAt(i)]=1
        }
    }
    let maxi=Math.max(...Object.values(chars))

    
    for (let [key, value] of Object.entries(chars)) {
         if(value === maxi)
        return key
      }

    
}

console.log(mostRepeatedCharacter('abbccdd'))


//5.Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )
function toggleCharacter(str) {

    let finalStr='';
    for (let i=1; i<str.length; i++){
        if(i%2===0){
            if(str[i].toUpperCase()==str.charAt(i)){
                finalStr+=str[i].toLowerCase()
            }
            else if(str[i].toLowerCase()==str.charAt(i)){
                finalStr+=str[i].toUpperCase()
            }
            

        }else{
            finalStr+=str[i]
        }
            
    }

    return finalStr
}

console.log(toggleCharacter("Welcome to NeoG Camp"))

//6.Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence. ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")

function removeWords(str,word){
    let finalStr='';
    let strList=str.split(' ');

    for(let i=0; i<strList.length; i++){
        if(strList[i]!==word)
            finalStr+=strList[i]+" "
    }

    

    return finalStr.slice(0,finalStr.length-1)
}
console.log(removeWords("programming camp are amazing","programming"))
