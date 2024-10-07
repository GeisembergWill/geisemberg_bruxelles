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
$chaineDeCaracteres = "mon texte";//string
$chaineDeCaracteres2 = "mon prix est très intéressant";//string
$chaineDeCaracteres3 = "Mon prix est de";//string
$entier = 50;
// variable d'un nombre entier sans " " "integer"
$flottent = 9.99;
// variable d'un nombre decimal avec un point "float"
$booleen = true;
//booleen(true ou false) binaire vrai ou faux
$tableau = array("texte 1","texte 2","texte 3");//array ancien
$tableau = ["texte 1,texte 2,texte 3"];//array recent
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
echo mb_strtoupper($chaineDeCaracteres2)."<br";
// mb-strtoupper fonction pour mettre toutes les lettres accentués inclus en majuscule

// Compter le nombre de mots
$nbMots = str_word_count($chaineDeCaracteres);
echo "La phrase contient $nbMots mots<br>";