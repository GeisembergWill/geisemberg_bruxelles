<h1>Exercice 1 </h1>



<h2>Résultat</h2>



<?php

$phrase = "Engage le jeu que je le gagne";
function est_Palindrome ($phrase)

if ((strlen($phrase) == 1) || (strlen($phrase) == 0));{
    echo "Palindrome";
}

else{
     
    
    if (substr($phrase,0,1) == substr($phrase,(strlen($phrase) - 1),1));{
         
    
        return Palindrome(substr($phrase,1,strlen($phrase) -2));
    }
    else{ 
        echo " Not a Palindrome"; }
}


$phrase = "MALAYALAM";
Palindrome($phrase);