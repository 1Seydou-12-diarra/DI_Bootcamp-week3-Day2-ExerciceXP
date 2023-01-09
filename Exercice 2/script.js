let createform = document.forms[0];
console.log(createform) //recuperer le formulaire

console.log(document.getElementById("fname"));//recuperer les inputs par leur id
console.log(document.getElementById("lname"));//recuperer les inputs par leur id

let firstElement = createform.elements[0]; //recuperer les inputs par leur name
console.log(firstElement);
let lasttElement = createform.elements[1]; //recuperer les inputs par leur name
console.log(lasttElement);



//  l'on utilie event.preventDefault() car il  se charge d'empêcher le comportement par défaut qui aurait dû se manifester lorsqu'une action a eu lieu

    createform.addEventListener('.submit',(event) => {
     event.preventDefault();

    const  firstName = firstElement.value;
    const  lastName = lasttElement.value;

    if(firstElement ==='' || lasttElement ===''){
        alert("entrer votre  premier et dernier nom");
        return;

    }
        
       
let firstli = document.createElement('li');//creer un li et mettre dans ul
firstli.textContent =firstName;

let lastli = document.createTextNode('li')//creer un li et mettre 
lastli.textContent=lastName;

const  identifiantUl = document.querySelector(' .usersAnswer');
identifiantUl.appendChild(firstli);
identifiantUl.appendChild(lastli);
 
});

