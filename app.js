window.addEventListener("DOMContentLoaded" , ()=>{

  //lets build the DOM
  const leftTop = document.createElement("div");
  const topMiddle = document.createElement("div");
  const RightTop = document.createElement("div");

  const topDiv = document.createElement("div");
  topDiv.appendChild(leftTop);
  topDiv.appendChild(topMiddle);
  topDiv.appendChild(RightTop);

  document.body.appendChild(topDiv);


});