// 3. Créez une fonction qui sert à repérer si un texte qu'on lui passe en argument contient la lettre "z".
// si c'est le cas, la fonction écrit dans la console "Alerte: le texte contient la lettre Z".

function reveleZ(text) {
     
     for (const zapeZ of text) {

          switch (zapeZ) {
               case "z":
                    console.log("Alerte: le texte contient la lettre Z");
                    break;
          
               default:
                    console.log("Le texte ne contient pas la lettre Z");
                    break;
                    
          }

     }
     reveleZ("je suis une  bonne soeur ")