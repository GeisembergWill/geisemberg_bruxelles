<h1>Exercice 8 </h1>



<h2>Résultat</h2>




<?php
function afficherTableMultiplication($nombre) {
    echo "Table de multiplication de $nombre :\n<br>";
    for ($i = 1; $i <= 10; $i++) {
        $resultat = $nombre * $i;
        echo "$nombre * $i = $resultat\n <br>";
    }
}


$nombre = 9; 
afficherTableMultiplication($nombre);
?>
