<h1>Exercice 5</h1>


<h2>Résultat</h2>

<?php

$nomsInput = ["Nom","Prenom","Ville"];
function afficherInput($nomsInput){
        $resultat = "<form>";
        foreach ($nomsInput as $nom){

        $resultat.= "<label>".$nom."<br></label><input type=text><br></form><br>";

}
return  $resultat;
}
echo afficherInput($nomsInput);



// $resultat .= "<label>". $info.": <br></label><input type=text><br>";
//    }


