<h1>Exercice 6 </h1>



<h2>Résultat</h2>







<?php
$prix_unitaire = 9.99; // Prix unitaire
$quantite = 5; // Quantité
$taux_tva = 0.20; // Taux de TVA

// Calcul du montant HT
$montant_ht = $prix_unitaire * $quantite;

// Calcul de la TVA
$tva = $montant_ht * $taux_tva;

// Montant total TTC
$montant_ttc = $montant_ht + $tva;

echo "Prix unitaire : " . number_format($prix_unitaire, 2, ',', '') . "€<br>";
echo "Quantité : " . $quantite . "<br>";
echo "Taux de TVA : " . ($taux_tva * 1) . "<br>";
echo "Montant de la facture : " . number_format($montant_ttc, 2, ',', '') . "€";
