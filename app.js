window.addEventListener("DOMContentLoaded" , ()=>{

 
  //lets build the DOM and set Attributes 
  //
  const header = document.createElement("h1");
  header.setAttribute("class", "header")
  header.innerText = "Tik Tak Toe"
  document.body.prepend(header)


  //players
  const playerContainer = document.createElement("div")
  playerContainer.setAttribute("id","playerContainer");
  const player1 = document.createElement("div");
  player1.setAttribute("class" ,"player1 player")
  const player2 = document.createElement("div")
  player2.setAttribute("class", "player2 player")


  //input box
  const inputbox1 = document.createElement("input");
  inputbox1.placeholder="Name";
  inputbox1.setAttribute("class", "inputBox1 inputBox")
  player1.appendChild(inputbox1);

  const inputbox2 = document.createElement("input");
  inputbox2.placeholder="Name";
  inputbox2.setAttribute("class", "inputBox2 inputBox")
  player2.appendChild(inputbox2);

  //inputButton 
  const inputButton1 = document.createElement("button");
  inputButton1.innerText="Enter"
  inputButton1.setAttribute("class", "inputButton");
  inputbox1.insertAdjacentElement("afterend", inputButton1)


  const inputButton2 = document.createElement("button");
  inputButton2.innerText="Enter"
  inputButton2.setAttribute("class", "inputButton");
  inputbox2.insertAdjacentElement("afterend", inputButton2)



  //append players 
  playerContainer.append(player1, player2)

  //player to body
  header.insertAdjacentElement("afterend",playerContainer);

 

  //top
  const topLeft= document.createElement("div");
  topLeft.setAttribute("class", "topLeft top");
  const topMiddle = document.createElement("div");
  topMiddle.setAttribute("class", "topMiddle top");
  const topRight = document.createElement("div");
  topRight.setAttribute("class", "topRight top");



    //middle
  const middleLeft = document.createElement("div");
  middleLeft.setAttribute("class", "middleLeft middle");
  const middleMiddle = document.createElement("div");
  middleMiddle.setAttribute("class", "middleMiddle middle");
  const middleRight = document.createElement("div");
  middleRight.setAttribute("class", "middleRight middle");


  //bottom
  const bottomLeft = document.createElement("div");
  bottomLeft.setAttribute("class", "bottomLeft bottom");
  const bottomMiddle = document.createElement("div");
  bottomMiddle.setAttribute("class", "bottomMiddle bottom");
  const bottomRight= document.createElement("div");
  bottomRight.setAttribute("class", "bottomRight bottom");


  //appending Div
  const topDiv = document.createElement("div");
  topDiv.setAttribute("id" ,"topDiv");
  topDiv.appendChild(topLeft);
  topDiv.appendChild(topMiddle);
  topDiv.appendChild(topRight);

  document.body.appendChild(topDiv);


  const middleDiv = document.createElement("div");
  middleDiv.setAttribute("id" ,"middleDiv");
  middleDiv.appendChild(middleLeft);
  middleDiv.appendChild(middleMiddle);
  middleDiv.appendChild(middleRight);

  document.body.appendChild(middleDiv)

  const bottomDiv = document.createElement("div");
  bottomDiv.setAttribute("id" ,"bottomDiv");
  bottomDiv.appendChild(bottomLeft);
  bottomDiv.appendChild(bottomMiddle);
  bottomDiv.appendChild(bottomRight);


  document.body.appendChild(bottomDiv)


 
  



  //WE ARE DONE WITH THE BUILD 



  //storage
  const getNameOfPlayer = localStorage.getItem("player1Name");
  if(getNameOfPlayer){
    inputbox1.value = `${getNameOfPlayer}'s Score`;
  }
  
  function getName(){
    console.log(inputbox1.value)
    return inputbox1.value
  }

   inputbox1.addEventListener("input", getName)
   
   inputButton1.addEventListener("click", ()=>{
     const player1Name = getName();
     localStorage.setItem("player1Name",player1Name);
     inputbox1.value = `${player1Name}'s Score`;
     inputbox1.style.border="none"
     inputbox1.style.borderBottom="solid black";
     inputbox1.style.backgroundColor="rgba(238, 237, 223, 0.844)"
 

   })

   const getNameOfPlayer2 = localStorage.getItem("player2Name");
   if(getNameOfPlayer2){
     inputbox2.value = `${getNameOfPlayer2}'s Score`;
   }
   
   function getName2(){
     console.log(inputbox2.value)
     return inputbox2.value
   }
 
    inputbox2.addEventListener("input", getName2)
    
    inputButton2.addEventListener("click", ()=>{
      const player2Name = getName2();
      localStorage.setItem("player2Name",player2Name);
      inputbox2.value = `${player2Name}'s Score`;
      inputbox2.style.border="none"
      inputbox2.style.borderBottom="solid black";
      inputbox2.style.backgroundColor="rgba(238, 237, 223, 0.844)"

 
    })

  




    //DONE WITH STORAGE AND PLAYER BOARD FOR NOW 




    const arr = ["❌", "⭕️", "❌","⭕️","❌", "⭕️", "❌","⭕️","❌", "⭕️", "❌","⭕️","❌", "⭕️", "❌","⭕️"]
   const topRow = document.querySelectorAll(".top");
  

    topRow.forEach((el)=>{
    el.addEventListener("click", ()=>{

      el.innerText= arr[0];
      arr.shift();
    
    

      })

    })
    const middleRow = document.querySelectorAll(".middle");
    middleRow.forEach((el)=>{
      el.addEventListener("click", ()=>{
  
        el.innerText= arr[0];
        arr.shift();
      
      
  
        })
  
    })



     const bottomRow = document.querySelectorAll(".bottom");
     bottomRow.forEach((el)=>{
      el.addEventListener("click", ()=>{
  
        el.innerText= arr[0];
        arr.shift();
      
      
  
        })
  
    })

  

});