<h1>Exercice 13</h1>



<h2>Résultat</h2>

<?php

$notes = [10,12,8,19,3,16,11,13,9];
$NbNotes = count($notes);
$sommesNotes = array_sum($notes);
$moyenne = $sommesNotes / $NbNotes;



echo "Les notes obtenues par l'élève sont : " . implode(" ", $notes) . "\n<br>";


echo "Sa moyenne générale est donc de : " . number_format($moyenne, 2) . "\n<br>";
