 console.log(document.getElementsByTagName("h1"));//recuperer h1

let heading = document.querySelectorAll('article > p');
 console.log(heading[3].remove());//supression du dernier p de la balise article

 let gety = document.querySelector("h2");//couleur de fond du h2
     gety.addEventListener("click", () => {
         gety.style.background="red";
     });

     let geth3 = document.querySelector("h3");//cacher le h3
     geth3.addEventListener("click", () => {
         geth3.style.display="none";
     });

     let grastext = document.getElementById('jsstyle')//rendre tous les paragraphe en gras quand on click sur un bouton
        grastext.addEventListener("click", () => {
            
            document.querySelectorAll('p').forEach(para => {
                para.setAttribute('style','font-weight:bold');
            })

           
           
    
        });