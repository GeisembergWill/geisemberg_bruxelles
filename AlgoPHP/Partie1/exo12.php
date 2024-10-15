<h1>Exercice 12</h1>



<h2>Résultat</h2>

<?php
$Prenom_Langue =[ "Mickael" => "FRA","Virgile" => "ESP","Marie-Claire" => "ENG",
];

foreach($Prenom_Langue as $prenom => $langue){

 switch($langue){
    case 'FRA':
        echo "Salut $prenom<br>";
            break;
            case 'ESP':
                echo "Hola $prenom<br>";
                break;
                case 'ENG':
                    echo "Hello $prenom<br>";

 }

}

