<h1>Exercice 9</h1>



<h2>Résultat</h2>

<?php


$age = 30; 
$sexe = 'F'; 

function estImposable($age, $sexe) {
    
    if ($sexe === 'F' && $age >= 18 && $age <= 35) {
        return true;
    }
    
    elseif ($sexe === 'H' && $age > 20) {
        return true;
    }
    
    return false;
}


if (estImposable($age, $sexe)) {
    echo "La personne est imposable.<br>";
} else {
    echo "La personne n'est pas imposable.<br>";
}

echo "Age : $age<br>";
echo "Sexe : $sexe<br>";

