const containerE1=document.querySelector(".container")
const career=["Youtuber","Web developer","Freelancer","Instructor"];
let carrerIndex=0;
let characterIndex=0;
updateText()
function updateText(){
    characterIndex++;
    containerE1.innerHTML=` <h1>I am ${career[carrerIndex].slice(0,1)==="I"?"an":"a"} ${career[carrerIndex].slice(0,characterIndex)}</h1>`;
    if(characterIndex===career[carrerIndex].length){
      carrerIndex++;
      characterIndex=0;
    }
    if(carrerIndex===career.length){
        carrerIndex=0;
    }
    setTimeout(updateText,400);
}
