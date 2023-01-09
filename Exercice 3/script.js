let allBoldItems;

function getBoldItems() {
//la function qui permet de recuperer les p et strong 
    allBoldItems = document.querySelectorAll("p strong");
    console.log(allBoldItems)
}
function highlight() {
    //function permetant de mettre la couleur blue sur la partie gras du text
    getBoldItems();
    allBoldItems.forEach(para => para.style.color ="blue");
  
}
function returnNormal() {
     //function permetant de mettre la couleur black sur la partie gras du text
    getBoldItems();
    allBoldItems.forEach(noire => noire.style.color ="black");

}
document.querySelector("p").addEventListener("mouseover",highlight);
document.querySelector("p").addEventListener("mouseout",returnNormal);

