// here declare the miscounter variable 
alert(window.innerHeight);
alert(window.innerWidth);
let misCounter=0;
let miss=0;
let winCounter=0;
let choice;
let ele=document.getElementById("play");
ele.addEventListener("click",()=>{
    idFinder("fontPath").style.display="none";
 
});
// here decaring the variable for the 
function idFinder(ele)
{
   return document.getElementById(ele);
}
// here creating the database for the hinting and answering
let arry=[["bikal","The user Name"],
["messi","world famouse player"],
["elephant","the world big animal?"],
["cow","the National animal of the nepal?"],
["dog","The domestic animal Name?"]
]
// here creating the keword and adding event listener
let key="abcdefghidjklmnopqrstuvwxyz";
function createKeyword()
{
    hintOF();
    var resLen=resultDisplay(true);
    console.log(resLen);
    for(let i=0; i<key.length;i++)
    {
        // here creating the element
       let ele=document.createElement("span");
       ele.className="keypad";
       ele.innerHTML=key[i];
       idFinder("clickArea").appendChild(ele);
     ele.addEventListener("click",function(){
     let temp=this.innerHTML;
     isExist(temp);
                          
    })
    }
}
createKeyword();

// creating title for displaying the result
function resultDisplay(checker)
{
    if(checker==true)
    {
    choice=Math.trunc(Math.random()*arry.length);
    }
    console.log(choice);
    for(let i=0;i<arry[choice][0].length;i++)
    {
        let ele=document.createElement("div");
        ele.className="item";
        // here setting the attribute for displaying the result
        ele.setAttribute("check","false");
        ele.setAttribute("data",arry[choice][0][i]);
      idFinder("resultDisp").appendChild(ele);
 }
 return choice;
}
// resultDisplay();

function isExist(ele)
{
console.log(ele);
let str=arry[choice][0];
console.log(str);
if( str.includes(ele))
{
let items=document.getElementsByClassName("item");
console.log(items[0]);
   for(let i=0;i<items.length;i++)
   {
    if(items[i].getAttribute("data")==ele)
    {
        if(items[i].getAttribute("check")=="false")
        {  misCounter=1;
            winCounter++;
            items[i].setAttribute("check",true);
            items[i].innerHTML=items[i].getAttribute("data");
            break;
        }
    }
   }
}
     if(misCounter==1)
      {
       misCounter=0;
      }
      else
      {
       misCounter=0
       miss++;
       console.log("the value of the miss"+miss);
      }
      manDisplayer(miss);
      quitGame(miss);
      winGame(winCounter);
}
function manDisplayer(ele)
{
switch(ele)
{
    case 1:
        idFinder("stand1").setAttribute("data",true);
        break;
    case 2:
        idFinder("stand2").setAttribute("data",true);
        break;
    case 3:
        idFinder("stand3").setAttribute("data",true);
        break;
    case 4:
        idFinder("head").setAttribute("data",true);
        break;
    case 5:
        idFinder("body").setAttribute("data",true);
        break;
    case 6:
        idFinder("handLeft").setAttribute("data",true);
        break;
    case 7:
       idFinder("handRight").setAttribute("data",true);
        break;
    case 8:
    idFinder("legLeft").setAttribute("data",true);
    hintShow();
    break;
    case 9:
        idFinder("legRight").setAttribute("data",true);
        break;
    }
}
function manClear()
{
    idFinder("stand1").setAttribute("data","false");  
    idFinder("stand2").setAttribute("data","false");
    idFinder("stand3").setAttribute("data","false");
    idFinder("head").setAttribute("data","false");
    idFinder("body").setAttribute("data","false");
    idFinder("handLeft").setAttribute("data","false");
    idFinder("handRight").setAttribute("data","false");
    idFinder("legLeft").setAttribute("data","false");
    idFinder("legRight").setAttribute("data","false");
}
function quitGame(val)
{
if(val==9)
{
    
    manClear();
   Reset();
    idFinder("backPath").setAttribute("id","tryagainBody");
    // here creating element for setting the title
    let titleEle=document.createElement("div");
    let text=document.createTextNode("The Game is Quit");
    titleEle.appendChild(text);
    titleEle.className="twTitle";
    idFinder("resultDisp").appendChild(titleEle);
    idFinder("playModel").setAttribute("id","bodyExit");
resultShow();
 let btn1=eleCreator("button");
 btn1.className="btn";
 btn1.innerHTML="Try Again";
 btn1.setAttribute("onclick","tryagain()");
 console.log(btn1);
 idFinder("bodyExit").appendChild(btn1);
    let btn2=eleCreator("button")
    // let btn3=eleCreator("button");
    btn2.className="btn";
    btn2.innerHTML="Restart";
   
 idFinder("bodyExit").appendChild(btn2);
let eleHint=idFinder("hintBtn");
eleHint.innerHTML="Home";
eleHint.removeAttribute("id");
 eleHint.setAttribute("class","btn home");
 console.log(eleHint);
 idFinder("hintContainer").setAttribute("class","eleClear");

// here hiding the keyboard
idFinder("keyboard").setAttribute("class","eleClear");
classFinder("eleClear")[0].removeAttribute("id");
classFinder("eleClear")[1].removeAttribute("id");
    
}
}
function Reset()
{
    misCounter=0;
    miss=0;
    winCounter=0;
 
}
// this is show the result after win or lose the user
function resultShow()
{
    let ca=eleCreator("div");
    ca.id="correctAnswer"
    let text1=document.createTextNode("The answer is  "+arry[choice][0].toUpperCase());
    ca.appendChild(text1);
    // here creating and adding the button and adding the eventListener to the button
    idFinder("bodyExit").appendChild(ca);
}

function winGame(val)
{
    if(val==arry[choice][0].length)
    {
        manClear();
       Reset();
        idFinder("backPath").setAttribute("id","tryagainBody");
        // here creating element for setting the title
        let titleEle=eleCreator("div");
        let text=document.createTextNode("The Game is win");
        titleEle.appendChild(text);
        titleEle.className="twTitle";
        idFinder("resultDisp").appendChild(titleEle);
        idFinder("playModel").setAttribute("id","bodyExit");
    //    here displaying result
    resultShow();
     let btn1=eleCreator("button");
     btn1.className="btn";
     btn1.innerHTML="Next Game";
    //  here playing the new game; 
     btn1.setAttribute("onclick","newGame()");
     idFinder("bodyExit").appendChild(btn1);
        let btn2=eleCreator("button")
        // let btn3=eleCreator("button");
        btn2.className="btn";
        btn2.innerHTML="Restart";
       
     idFinder("bodyExit").appendChild(btn2);
    let eleHint=idFinder("hintBtn");
    eleHint.innerHTML="Home";
    eleHint.removeAttribute("id");
     eleHint.setAttribute("class","btn home");
     console.log(eleHint);
     idFinder("hintContainer").setAttribute("class","eleClear");
    
    // here hiding the keyboard
    idFinder("keyboard").setAttribute("class","eleClear");
    classFinder("eleClear")[0].removeAttribute("id");
    classFinder("eleClear")[1].removeAttribute("id");
    }
}

function tryagain()
{

resultClear();
idFinder("tryagainBody").setAttribute("id","backPath");
 idFinder("bodyExit").setAttribute("id","playModel");
    // here creating element for setting the title
idFinder("correctAnswer").remove();
let btnEle=classFinder("btn");
btnEle[0].remove();
classFinder("btn")[0].remove();
 classFinder("eleClear")[0].setAttribute("id","hintContainer");
 let eleHint=classFinder("btn");
eleHint[0].innerHTML="?";
eleHint[0].setAttribute("id","hintBtn");
idFinder("hintBtn").removeAttribute("class");
 classFinder("eleClear")[1].setAttribute("id","keyboard");
    idFinder("hintContainer").removeAttribute("class");
    idFinder("keyboard").removeAttribute("class");
    hintOF();
    resultDisplay(false);
}
 function newGame()
 {
   
resultClear();
    idFinder("tryagainBody").setAttribute("id","backPath");
    // classFinder("twTitle")[0].remove();
     idFinder("bodyExit").setAttribute("id","playModel");
        // here creating element for setting the title
    idFinder("correctAnswer").remove();
    let btnEle=classFinder("btn");
    btnEle[0].remove();
    classFinder("btn")[0].remove();
     classFinder("eleClear")[0].setAttribute("id","hintContainer");
     let eleHint=classFinder("btn");
    eleHint[0].innerHTML="?";
    eleHint[0].setAttribute("id","hintBtn");
    idFinder("hintBtn").removeAttribute("class");
     classFinder("eleClear")[1].setAttribute("id","keyboard");
        idFinder("hintContainer").removeAttribute("class");
        idFinder("keyboard").removeAttribute("class");
 hintOF();
       resultDisplay(true);
//     let  childContainer=idFinder("resultDisp");
//   while(childContainer.hasChildNodes())
//   {
//     childContainer.remove(childContainer.firstChild);
//   }


 }
//  help to create element
 function eleCreator(Name)
{
 return document.createElement(Name);  
}
// help find the element throught the class
function classFinder(c)
{
 return document.getElementsByClassName(c);
}

function resultClear()
{
let rd=idFinder("resultDisp").childNodes;
for(let i=0;i<rd.length;i++)
{

    for(let j=0;j<rd.length;j++)
    {
        
       if(rd[j].nodeName=="DIV")
       {
    
           rd[j].remove();
       }
       
    }
   
}
}
 function hintShow()
 {
    idFinder("hintContainer").style.display="flex";
    idFinder("hintTitle").innerHTML=arry[choice][1];
 }
function hintOF()
{
    idFinder("hintContainer").style.display="none";
}

