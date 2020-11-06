document.body.onload = addElement;

function addElement () {

  let year = 2020;
  let nDivId = 1;

  while (year <= 2030){

    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // on lui adress un nouvel ID
    newDiv.id = String("layout"+nDivId);
    
    // et lui donne un peu de contenu
    var newContent = document.createTextNode(year);

    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);
    
    // ajoute le nouvel élément créé et son contenu dans le DOM
    var currentDiv = document.getElementById('div');
    document.body.insertBefore(newDiv, currentDiv);

    // on récupère l'id du nouvel élément
    let TheId = document.getElementById(String("layout"+nDivId));

    //on teste si l'année est bissextile et on lui attribue une couleur 
    if ((year%4==0) && ((year%100!=0) || (year%400==0))) {
      TheId.style.color = "red";
    } else { 
      TheId.style.color = "black";
    };

    //on incrément les valeures year et nDivId ..
    year += 1;
    nDivId += 1;
  }
  
}






// layout()

// function layout() {

// let iYear = 2020;  
// let IDL = "layout";    

//   while (iYear <=  2030){
    
//     let intID = 1;
//     let iLayout = document.getElementById("layout");

//     clone = iLayout.cloneNode(true);
//     iLayout.textContent = iYear;
//     clone.id = String("layout" + intID)

//     if ((iYear%4==0) && ((iYear%100!=0) || (iYear%400==0))) {
//         iLayout.style.color = "red";
//     } else { 
//         iLayout.style.color = "black";
//     };

//     console.log(clone)
//     document.getElementById("div").appendChild (clone);

//     iYear += 1;
//     intID += 1;
//   }
// }


