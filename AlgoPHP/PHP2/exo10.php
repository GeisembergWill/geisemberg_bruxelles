<h1>Exercice 10</h1>

<h2>Résultat</h2>



<?php

$infoInputs = ["Nom","Prénom","Ville","Sexe"];
//tableau des infos
$metiers = ["Développeur Logiciel","Designer Web","Intégrateur","Chef de projet"];
// liste deroulante avec les metiers

function afficherFormulaire($infoInputs, $metiers){

    $resultat = "<form>";
    foreach($infoInputs as $info){

        $resultat .= "<label>". $info.": <br></label><input type=text><br>";
   }
    
    $resultat.= "<select>";

    foreach($metiers as $metier){
    $resultat.= "<option>".$metier."</option>";
    } 
    $resultat.= "</select></form>";
    return $resultat;    

}
echo afficherFormulaire($infoInputs,$metiers);





