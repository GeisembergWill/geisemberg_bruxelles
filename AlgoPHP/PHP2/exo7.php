<h1>Exercice 9</h1>

<h2>Résultat</h2>
<?php
$elements = [
    "Choix 1" => false,  
    "Choix 2" => true, 
    "Choix 3" => false   
];  
function genererCheckbox($elements) {
    
    foreach ($elements as $key => $value) {
        echo '<input type="Checkbox" name="' . htmlspecialchars($key) . '" value="1"';
        // Si la valeur est vraie (true), on coche la case htmlspecialchars convertit les caracteres speciaux en entite HTML.
        if ($value) {
            echo ' checked'; 
        // Ajout de 'checked'
        }        
        echo '> ' . htmlspecialchars($key); 
        // Affichage du texte associé à la case à cocher
        echo '</label><br>'; 
        // Fermeture du label et ajout d'un retour à la ligne
    }
}

genererCheckbox($elements); // Appel de la fonction avec le tableau d'options
?>