<h1>Exercice 7 </h1>



<h2>Résultat</h2>

<?php
function CategorieParAge($age) {
    if ($age >= 6 && $age <= 7) {
        return "Poussin";
    } elseif ($age >= 8 && $age <= 9) {
        return "Pupille";
    } elseif ($age >= 10 && $age <= 11) {
        return "Minime";
    } elseif ($age >= 12) {
        return "Cadet";
    } else {
        return "Catégorie non gérée";
    }
}

$age = 5; 
$category = CategorieParAge($age);
echo "L'enfant qui a $age ans appartient à la catégorie \"$category\".";
?>
