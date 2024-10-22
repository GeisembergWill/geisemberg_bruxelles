<h1>Exercice 13</h1>

<h2>Résultat</h2>


<?php

$email_a = 'elan@elan-formation.fr';
$email_b = 'contact@elan';

if (filter_var($email_a, FILTER_VALIDATE_EMAIL)) {
    echo "L'adresse email $email_a est considérée comme valide.<br>";
    // filtrer dans ce cas la variable email avec "filter Var"pour savoir si il est conforme ex: "nom-@-nom2-.-fr".
}
if (filter_var($email_b, FILTER_VALIDATE_EMAIL)) {
    echo "L'adresse email $email_b est considérée comme valide.";
} else {
    echo "L'adresse email $email_b est considérée comme invalide.";
}
?>