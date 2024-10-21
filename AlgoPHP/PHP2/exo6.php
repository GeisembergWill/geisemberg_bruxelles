<h1>Exercice 2</h1>


<h2>Résultat</h2>

<?php
$elements = ["Monsieur",
"Madame","Mademoiselle"];

Function alimenterListeDeroulante($elements){

    $resultat = "<select>";

    foreach ($elements as $element){

    $resultat.= "<option>$element</option>";

    } 

    $resultat.= "</select>";


    return $resultat;
}
echo alimenterListeDeroulante($elements);





