window.addEventListener("DOMContentLoaded" , ()=>{

 
  //lets build the DOM and set Attributes 
  //
  const header = document.createElement("h1");
  header.setAttribute("class", "header")
  header.innerText = "Tik Tak Toe"
  document.body.prepend(header)
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


   const topRow = document.querySelectorAll(".top");
   console.log(topRow)

   topRow.forEach((el)=>{
    el.addEventListener("click", ()=>{
      el.innerText= 
    })

    })

  

});