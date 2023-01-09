
    let gety = document.querySelector("h2")
  
 
        gety.addEventListener("click", () => {
            gety.style.background="yellow";
            gety.style.fontSize =" 50px";
            gety.style.textAlign ="center";
    
        });
        gety.addEventListener("mouseout", () => {
            gety.style.background="blue";
            gety.style.fontSize =" 50px";
            gety.style.textAlign ="center";
    
        });


     let getx = document.querySelector("p")

     getx.addEventListener("mouseover", () => {
        getx.style.textAlign ="centre";
        getx.style.fontSize = " 70px";
        getx.style.background="orange";

    });
    
     getx.addEventListener("mouseout", () => {
        getx.style.textAlign="centre";
        getx.style.fontSize =" 70px";
        getx.style.background="green";

    });

