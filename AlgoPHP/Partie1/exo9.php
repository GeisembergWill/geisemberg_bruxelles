<h1>Exercice 9</h1>



<h2>Résultat</h2>

<?php
function estImposable($age, $sexe) {
    
    if ($sexe === 'F' && $age >= 18 && $age <= 35) {
        return true;
    }
    
    elseif ($sexe === 'H' && $age > 20) {
        return true;
    }
    
    return false;
}


$age = 30; 
$sexe = 'F'; 


echo "Age : $age<br>";
echo "Sexe : $sexe<br>";

if (estImposable($age, $sexe)) {
    echo "La personne est imposable.";
} else {
    echo "La personne n'est pas imposable.";
}