"use strict";

 // tableau d'objets(slide 41)
const Etudiants = [
    {//les objets et leur attributs(slide 40-41)
        matricule: 1000, 
        nom: "JOHN",
        prenom: "DOE",
        moyenne: 14,
        year: 5,
    },

    {
       matricule: 2000,
        nom: "BOB",
        prenom: "CARLTON",
        moyenne: 7,
        year: 1,
    },

    {
        matricule: 3000,
        nom: "RAYANE",
        prenom: "SMITH",
        moyenne: 13,
        year: 3,
    }
]
function check_admis_ou_non(k){/*fonction qui retourne si la moyenne(float) 
    est superieur a 10 ,et retourne un boolean(slide 46-47)*/
   if(k>=10)//une if-else conditionnelle(slide 43)
        return true; 
    
      else
       return false;
   
}


function deliberation(){//fonction qui check si les etudiants sont admis ou non, et affiche le resultat dans la console(slide 46)
  
    //passer l'attribut "moyenne"dans la fonction "check_admis_ou_non"pour chaque etudiant et afficher leur etats et matricule(slide 46) 
    if (check_admis_ou_non(Etudiants[0].moyenne)==true) {
     console.log(Etudiants[0].matricule + ": ADMIS" );
     } 
       else{ 
      console.log(Etudiants[0].matricule + ": AJOURNEE" );
       }
  if (check_admis_ou_non(Etudiants[1].moyenne)==true){ 
    console.log(Etudiants[1].matricule + ": ADMIS" );
  }
    else{ 
      console.log(Etudiants[1].matricule + ": AJOURNEE" );
}
      if (check_admis_ou_non(Etudiants[2].moyenne)==true){ 
       console.log(Etudiants[2].matricule + ": ADMIS" );
      }
      else{ 
      console.log(Etudiants[2].matricule + ": AJOURNEE" );
      }
}

