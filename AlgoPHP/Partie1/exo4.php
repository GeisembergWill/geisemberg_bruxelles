<h1>Exercice 4 </h1>



<h2>Résultat</h2>



<?php

function ($phrase){
    // déclarer une variable phrase
     $phrase = "«engage le jeu que je le gagne»";
    //  enlever les espaces
    $phrase = str_replace(" ", "", $phrase);
    // phrase en minuscule
    strtolower($phrase);
    // lire la phrase a l'envers
    $phraseInversé = $strrev($phrase);
    
}

if  ($phrase == $phraseInversé) 
// comparé la phrase avec celle inversé si elle est égale
   echo est Palindrome ;
else 
// sinon elle n'est pas palindrome 
    echo est pas Palindrome      
 else { echo "est pas Palindrome";
};
