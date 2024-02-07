function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  const b = document.querySelectorAll("button");
  const b1 = document.querySelector("#counter"); 
  const off=document.querySelector(".offer");
  const pbtn = b[2]; 
  const mbtn = b[0]; 
  
  pbtn.addEventListener("click", () => {
     if(b1.innerText==="10") alert("Maximum pairs have been added in the cart");
     else b1.innerText = parseInt(b1.innerText) + 1;
  });
  
  mbtn.addEventListener("click", () => {
      if(b1.innerText!='0')  b1.innerText = parseInt(b1.innerText) - 1;
  });

  function myFunction(clickedImg  ) {
    const shoe = clickedImg.src;
    const doc = document.querySelector(".fit");
    doc.src = shoe;
}