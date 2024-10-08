<h1>Exercice 1</h1>
<!-- /************Titre de l'exercice et titre de la page***********/ -->

<p>Enoncé de l'exercice</p>
<!-- ***********1er paragraphe*************** -->

<?php
// code en php

$phrase = "Comment ca va";
// *****variable$phrase contenant une chaine de caractères***
$nbCaracteres = strlen($phrase);
// fonction calcul du nombre de caractère dans la fonction $phrase
echo "La phrase contient $nbCaracteres caractères";
// echo :affichage de "la phrase contient  n carctères"
//declaration de variables
$chaineDeCaracteres = "Mon texte";//string
$chaineDeCaracteres2 = "Mon prix est très intéressant";//string
$chaineDeCaracteres3 = "Mon prix est de";//string
$entier = 50;
// variable d'un nombre entier sans " " "integer"
$flottent = 9.99;
// variable d'un nombre decimal avec un point "float"
$booleen = true;
//booleen(true ou false) binaire vrai ou faux
$tableau1 = array("texte 1","texte 2","texte 3");//array ancien
$tableau2 = ["texte 1","texte 2,"];//array recent
$date = new DateTime();  //programmation orienté objet (POO)

// AFFICHAGE
echo "<h3>Test</h3>";
// on peut prendre des partie du html comme les H 
echo $chaineDeCaracteres."<br>"; 
// br mettre a la ligne en html utilisable aussi en php
echo $chaineDeCaracteres3." ".$entier." euros<br>";
// (conquetenation)Mon prix est de 50 euros "espace  apres le debut de guillement et euros pour faire un espace sur laffichage
echo"$chaineDeCaracteres3 $entier euros<br>"; 
// la meme ligne que precedemment ecrit plus simplement

// FONCTIONS CHAINE DE CARACTERES
$nbCaracteres = strlen($chaineDeCaracteres);
// calcul la taille d'une chaine de caractere
// echo $nbCaracteres;
// afficher les calcul du nombre de caractere (espaces inclus!)
echo"La phrase contient $nbCaracteres caractères<br>";
echo"La phrase contient ".strlen($chaineDeCaracteres)." caractères<br>";
// quantenation

// convertir une chaine en majuscule
$chaineMajuscules = strtoupper($chaineDeCaracteres);
echo $chaineMajuscules."<br>";
echo mb_strtoupper($chaineDeCaracteres2)."<br>";
// mb-strtoupper fonction pour mettre toutes les lettres accentués inclus en majuscule

// Compter le nombre de mots
$nbMots = str_word_count($chaineDeCaracteres);
echo "La phrase contient $nbMots mots<br>";

// FONCTIONS TABLEAUX
$tailleTableau1 = count($tableau1);
echo "Le tableau 1 contient $tailleTableau1 éléments<br>";
// fonction compter le nombre d'éléments dans le tableau 1
echo "Le tableau 2 contient ".count($tableau2)." éléments<br>";
// fonction en quantenation du nombre d'éléments dans le tableau 2
echo $tableau1[0]."<br>";
// Choisir l'élément 1 du tableau 1 (1er=O) (2eme=1)etc....

// Exercice 1: Calcul de la moyenne d'un élève
$notes = [12,14,9,8,19,17.25];
$nbNotes = count($notes);
$sommeNotes = array_sum($notes);
// somme des elements du tableau note
$moyenne = round($sommeNotes / $nbNotes, 2);
// division de la somme des elements du tableau /nombre d'elements du tableau
// fonction round valeur decimal arrondis
echo "La moyenne est $moyenne <br>";

// OPERATIONS MATHEMATIQUES

$nbArticles = 5;
$prixHT = 10.99;
$totalHT = $nbArticles * $prixHT;
echo " Le total HT est de $totalHT €<br>";

// Afficher le total TTC d'une facture
$tauxTVA =0.20;

$totalTTC = $nbArticles * $prixHT + $nbArticles * $prixHT * $tauxTVA;
// formule développer pour le total ttc
$totalTTC2 = $nbArticles * $prixHT * (1 + $tauxTVA);
// formule factoriser pour le total ttc
echo "Le total TTC est de $totalTTC €<br>";

// ERROR on ne peux calculer que les elements du meme type( maison * 5 )n'est pas possible
// exemple:
// $texte = "Texte";
// $calcul = $texte - 5;
// echo $calcul."<br>";

// renvoi le type de la variable specifié en paramètre
echo gettype ($tableau1);
var_dump($tableau1);
// // caracteristisque des elements du tableau par exemple


// STRUCTURES DE CONTROLE

// Conditions (IF = SI)
$prenom = "Georges";
$age = 17.5;

if($age >= 18) {
    $resultat = "majeur";
} else {
    $resultat = "mineur";
}
echo "$prenom est $resultat<br>";

// Ternaire
$result = $age >=18 ? "majeur" :"mineur";
echo "$prenom est $resultat<br>";
echo "$prenom est ".($age >=18 ? "majeur" :"mineur").
"<br>";

// En fonction de l'age, afficher une catégorie
// si la personne a plus de 30 ans ---> SENIOR
// si la personne a plus de 20 ans ---> CADET
// sinon JUNIOR
if(gettype($age) == "double" || gettype($age)=="integer"
) {
    if($age >= 30) {
        $resultat = "Senior";
    }elseif($age >=20) {
        $resultat = "Cadet";
    } else {
        $resultat = "Junior";
    }

    echo "La personne qui a $age ans est : $resultat <br>";
} else {
    echo "Veuillez saisir un âge numérique !<br>";
}

// si la valeur est 1 --> OK
// si la valeur est 0 --> KO
// sinon afficher "valeur non gérée"

$valeur = 99;
switch($valeur) {
    case 0: echo "KO !<br>";break;
    case 1: echo "OK !<br>";break;
    default: echo "Valeur non gérée !<br>";
}

$age = 18;
if(gettype($age) == "double" || gettype($age)=="integer"
) {
switch(true){
    case $age >= 30:echo "Senior<br>";break;
    case $age >= 20:echo "Cadet<br>";break;
    default: echo "Junior<br>";}

}else {
    echo "Veuillez saisir un âge numérique !<br>";
}

// BOUCLES (LOOP) Repetition
//afficher les chiffres 1 à 10

// FOR (pour)

for($i =1;$i <=10;$i++ ){
// $i++ ---> $i= $i+1
    echo $i." ";
}

// WHILE (tant que)
$i = 1; 
while($i <=10){
    echo $i." ";
    $i++;
}

// FOREACH
// $range = range(1,10);
// var_dump($range);

foreach(range(1,10) as $valeur) {
    echo $valeur." ";
}
echo"<br>";


$marques = ["Mercedes","BMW","Toyota","Tesla"];
echo $marques[2];