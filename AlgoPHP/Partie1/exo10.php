<h1>Exercice 10</h1>



<h2>Résultat</h2>

<?php



$montantAPayer = 152;
$montantVerse = 200;


$resteAPayer = $montantVerse - $montantAPayer;

echo "Montant à payer : " . $montantAPayer . " €\n<br>";
echo "Montant versé : " . $montantVerse . " €\n<br>";
echo "Reste à payer : " . $resteAPayer . " €\n<br>";
echo "Rendu de monnaie : \n<br>";


$billets10 = floor($resteAPayer / 10);
$resteAPayer -= $billets10 * 10;

$billets5 = floor($resteAPayer / 5);
$resteAPayer -= $billets5 * 5;

$pieces2 = floor($resteAPayer / 2);
$resteAPayer -= $pieces2 * 2;

$pieces1 = $resteAPayer;


echo $billets10 . " billets de 10€ - ";
echo $billets5 . " billets de 5€ - ";
echo $pieces2 . " pièce de 2€ - ";
echo $pieces1 . " pièce de 1€\n";
?>
