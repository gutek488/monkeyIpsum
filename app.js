

document.addEventListener("DOMContentLoaded", ()=>{




let monkeyText = document.querySelector(".monkeyText");
let longest = document.querySelector(".longest");
let wordsLength = document.querySelector(".wordsLength");
let playStop = document.querySelector(".button");
let playing = false;
let foundDiv = document.querySelector(".found");
let hideList = document.querySelector(".hideList");
let mainInterval;

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let str = 0;
let literature = "";
let found = [];

playStop.addEventListener("click", ()=>{
        if (!playing) { 
                mainInterval = setInterval(()=>{
                        playStop.classList.add("stop");
                        playing = true;
                        literature += alphabet[Math.floor(Math.random() * 24)];
                        searchWord();
                        monkeyText.innerHTML+=literature[literature.length-1];
                        if (found.length !== 0 ) {
                                longest.innerText = "Longest word found: " + found.sort((a,b)=>b.length-a.length)[0]

                        }
                        //colorWords();
                        wordsLength.innerText = "Number of words found: " + found.length; 
                        },50)
                } else  {
                        clearInterval(mainInterval);
                        playing = false;     
                        playStop.classList.remove("stop");                   
                }
        



})

hideList.addEventListener("click", ()=>{
        foundDiv.classList.toggle("found--active");
        hideList.classList.toggle("hideList--rotate")


})



let searchWord = () => {
    str++;
    if (str === 6) {
        for (let z of list) {
                    if (literature.includes(z) && found.includes(z)===false) {
                                found.push(z);
                                let newWord = document.createElement(`a`);
                                newWord.href = `https://en.oxforddictionaries.com/definition/us/${z}`;
                                newWord.innerText = z;
                                newWord.target ="_blank";
                                newWord.classList.add("foundWord");
                                foundDiv.appendChild(newWord);
                                found.sort((a,b)=>b.length-a.length);

                                

                                }
                        

                        }
                        str = 0;

                }
        }
      
})   
    

