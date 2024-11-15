// log de Hello JS!
console.log("Hello JS!"); // affichage de "Hello JS" dans la console
let age = 37
/* 

        Apprenons a coder 
        en Javascript

*/
// Chaque sujet de code JS dans la suite de ce document sera soit une instruction, soit un
// bloc.
// Nous allons parcourir différentes instructions et différents blocs, mais il est utile de savoir
// à l’avance que ce sont les deux grandes familles dans l’écriture de code.

// 1. Les instructions
// Une instruction est un ordre direct. Le programme doit effectuer une action.
// Les lignes d’instruction(s) se terminent par un « ; ».
// Syntaxe globale: instruction1;
//                : instruction2;


// 2.les blocs
// Un bloc est une structure. Il permet de faire appliquer une logique au programme.
// Un bloc contient un « corps », qui va de « { » à « } », dans lequel on peut placer une/des
// instruction(s) et/ou bloc(s).
// Les blocs ont un nom et une syntaxe qui répond à leurs besoins, ils sont paramétrables.
// Syntaxe globale de la plupart des blocs :
// Exemple1: nomBloc (parametrage){
     // instruction(s) et/ou bloc(s)
//  }
// Exemple2: if(age >= ageMin){          
//           }
//           while (k < 10){
//           }
// 3.Les variables
//Les variables servent à stocker des données.
//Elles ont un type (nombre, chaîne de caractères, etc.).
//Elles peuvent être utilisées dans le code, une ou plusieurs fois.
//Le fait d’être réutilisables est très important, afin de ne pas refaire les mêmes calculs
//plusieurs fois.
//Elles peuvent également aider à écrire du code plus lisible, en décomposant une suite
//d’opérations simples à la place d’un calcul unique très complexe.
// Règles de bonnes pratiques
// Une variable porte un nom écrit en « camelCase » : les lettres sont en minuscule, sauf la
// 1ère lettre de chaque mot à partir du 2ème mot qui est en majuscule.
// Le nom d’une variable ne doit pas contenir d’accent, d’espace, de « _ » ni aucun autre
// symbole spécial, seulement des lettres sans accent en camelCase et éventuellement des
// chiffres (mais pas en début de nom).
// Exemple: 
// nom
// deuxMots
// unPeuPlusDeMots
// longNomDeVariableEnCamelCase
// eteEnsoleille //sans accent, pas "étéEnsoleillé"
// segmentPoint1
// 3. Les types de variables les plus utiles
// a. La variable « let »
// Une variable classique est déclarée grâce au mot-clef « let ».
// Sa valeur peut ensuite être modifiée autant de fois qu’on le souhaite.
let animal = "dog"; // déclaration et initialisation de la variable animal
animal = "cat"; // modification de sa valeur
animal = "bird"; // modification de sa valeur
// b. La constante « const »
// Une constante est une variable dont la valeur ne peut pas être modifiée.
// Tenter de modifier la valeur d’une constante provoque une erreur.
// exemple:
// const deux = 2;// la valeur ne peut pas etre modifiée

// la ligne suivante est mise en commentaire car elle provoque une erreur
// deux = 3; -> uncaught TypeError:Assignment to constant variable.
// 4. Les types de données primitifs les plus utiles
// a. number
// Un « number » est un nombre, entier ou décimal.
// Exemples :
const deux = 2;
let quantite = 3;
const prix = 1.15;
// b. string
// Un « string » est une chaîne de caractères.
// Lorsqu’on veut écrire sa valeur, on le fait entre guillemets / quottes.
// Exemples :
// const prenom = "John";
let repas = "pizza";
const criDuChien = "aboiement";
// c. boolean
// Un « boolean » est un booléen, qui peut avoir comme valeur « true » (vrai) ou « false »
// (faux).
// Par convention, le nom d’une variable de type « boolean » commence par « is » (est) ou
// « has » (a), afin d’être identifiée facilement.
// Exemples :
let isAdult = true;
let isTaskDone = false;
const hasBeenToTokyo = true;
// 5. La portée des variables
// Une variable a une certaine « portée ». Il s’agit de la zone de code dans laquelle elle peut
// être utilisée, dans laquelle elle est définie.
// Cette portée s’étend :
// depuis la ligne à laquelle la variable a été déclarée (grâce à « let » ou « const »)
// jusqu’à la fin du bloc (« } ») dans lequel la variable a été déclarée
// Note : elle sera accessible dans les blocs intérieurs
// 5. La portée des variables
// Une variable a une certaine « portée ». Il s’agit de la zone de code dans laquelle elle peut
// être utilisée, dans laquelle elle est définie.
// Cette portée s’étend :
// depuis la ligne à laquelle la variable a été déclarée (grâce à « let » ou « const »)
// jusqu’à la fin du bloc (« } ») dans lequel la variable a été déclarée
// Note : elle sera accessible dans les blocs intérieurs
// VI. Les opérateurs
// Les opérateurs sont des symboles qui ont chacun un effet précis.
// Il en existe beaucoup, nous allons découvrir ceux qui sont les plus utiles.
// 1. Affectations et calculs
// a. L’opérateur d’affectation simple
// L’opérateur d’affectation « = » permet d’attribuer une valeur à une variable.
// Nous en avons déjà vu plusieurs exemples :
// b. Les opérateurs arithmétiques
// Ces opérateurs demandent d’être entourés de valeurs de type « number », puisqu’ils
// entrainent un calcul mathématique. Ils renvoient un « number ».
// Nous avons accès aux opérateurs arithmétiques basiques :
// « + » : addition
// « - » : soustraction
// « * » : multiplication
// « / » : division
// Nous y ajouterons l’opérateur « modulo », qui s’utilise avec le symbole « % ».
// Le modulo, pour l’expression « a % b » (qui se prononce « a modulo b »), est le reste de
// la division entière de a par b.
// Par exemple :
// « 7 % 3 » vaut 1, car 7/3 vaut 2 en division entière, il reste donc 1 [7-(2*3)]
// -> 7 = 2 * 3 + 1
// « 6 % 2 » vaut 0, car 6/2 vaut 3 en division entière, il reste donc 0 [6-(3*2)]
// -> 6 = 3 * 2 + 0
// « 2 % 9 » vaut 2, car 2/9 vaut 0 en division entière, il reste donc 2 [2-(0*9)]
// -> 2 = 0 * 9 + 2
// c. Les opérateurs d’affectation spéciaux
// Il existe certains opérateurs qui cumulent plusieurs actions.
// Ils sont utiles lorsqu’une variable est utilisée dans un calcul et que le résultat doit être
// affecté à cette variable. Ils permettent alors d’accumuler les valeurs.
// Voici les opérateurs les plus utiles qui entrainent un calcul puis une affectation :
// « += » : addition puis affectation
// (« a += b; » équivaut à « a = a + b; »)
// « ++ » : incrémentation de 1 puis affectation
// (« a++; » équivaut à « a += 1; », qui équivaut à « a = a + 1; »)
// « -= » : soustraction puis affectation
// (« a -= b; » équivaut à « a = a - b; »)
// « -- » : décrémentation de 1 puis affectation
// (« a--; » équivaut à « a -= 1; », qui équivaut à « a = a - 1; »)
// « *= » : multiplication puis affectation
// (« a *= b; » équivaut à « a = a * b; »)
// « /= » : division puis affectation
// (« a /= b; » équivaut à « a = a / b; »)
// « %= » : modulo puis affectation
// (« a %= b; » équivaut à « a = a % b; »)
// Exemple (plusieurs instructions à la suite, qui utilisent les opérateurs d’affectation
// spéciaux sur une variable) :
let numberToGuess = 2; // 2
numberToGuess += 3;   // numberToGuess =  numberToGuess + 3  // 5
numberToGuess -= 2;   // numberToGuess =  numberToGuess - 2  // 3
numberToGuess++;      // numberToGuess =  numberToGuess + 1  // 4
numberToGuess *= 10;  // numberToGuess =  numberToGuess * 10 // 40
numberToGuess /= 2;   // numberToGuess =  numberToGuess / 2  // 20
numberToGuess %= 7;   // numberToGuess =  numberToGuess % 7  // 6
numberToGuess--;      // numberToGuess =  numberToGuess - 1  // 5

console.log("numberToGuess [2 +3 -2 +1 *10 /2 %7 -1] = ", numberToGuess); //5

// d. L’opérateur de concaténation
// Concaténer, c’est le fait de fusionner plusieurs chaînes de caractères (« string »)
// ensemble, afin d’en obtenir une seule.
// Cet opérateur renvoie un « string ».
// Son symbole est « + » en JS, comme pour l’addition. Si ce symbole n’est pas entouré de
// deux valeurs de type « number », alors le programme le verra comme une concaténation
// et non pas une addition.
// Exemple (concaténation de la valeur d’un prénom, d’un espace et d’un nom, qu’on
// affecte à une autre variable) :
 const prenom = "John";
 const nom = "Smith";
 const nomComplet = prenom + " " +nom;
 console.log("Je m'appelle " + nomComplet);
//  Note : l’opérateur d’affectation spécial « += » fonctionne également pour la
// concaténation.
// Page 19 sur 43 ELAN / Javascript / 12_2023 / Version 2.1
// Interpolation : proche de la concaténation qui sert à fusionner, il s’agit de créer un
// « string » en y « incrustant » des valeurs. En JS le string sera entre « backticks »
// (apostrophes descendantes => AltGR+7) et les valeurs entre les symboles « ${ » et « } ».
// Le principal avantage de l’interpolation, par rapport à la concaténation, est qu’elle
// permet de taper des phrases proches du rendu final. Les chaînes de caractères sont plus
// compréhensibles à la lecture car elles ne sont pas faites de petits morceaux.
// Les valeurs qui se trouvent dans les « ${} » sont calculées en premier (en JS, avec accès
// aux variables locales), puis incrustées dans le « string » global.
// Exemple (en reprenant les variables de l’exemple précédent) :
console.log(`Je m'appelle ${prenom} ${nom},soyez le bienvenu !`);
// 2. Comparaisons
// a. Les opérateurs d’égalité et d’inégalité
// Voici les opérateurs qui testent une égalité ou une inégalité entre les valeurs qui les
// entourent :
// « == » : même valeur
// « === » : même valeur et même type
// « != » : valeur différente
// « !== » : valeur différente ou type différent
// Ils renvoient un « boolean ».
console.log("1 : " + (2 == "2")); // meme valeur  => true
console.log("2 : " + (2 === "2")); // meme valeur mais type différent  => false
console.log("3 : " + (2 != "2")); // valeur non différente  => false
console.log("4 : " + (2 !== "2")); //valeur non différente mais type différent => true

// b. Les opérateurs de comparaison
// Voici les opérateurs qui comparent les valeurs qui les entourent :
// « < » : inférieur strictement
// « <= » : inférieur ou égal
// « > » : supérieur strictement
// « >= » : supérieur ou égal
// Ils renvoient un « boolean ».

console.log("3 < 7 is " + (3 < 7));
console.log("8 <= 1 is " + (8 <= 1));
console.log("7 >= 7 is " + (7 >= 7));
console.log("7 > 7 is " + (7 > 7));

// 3. Conditions
// a. Les opérateurs logiques
// Un opérateur logique sert principalement à lier plusieurs conditions, souvent des
// « boolean », afin de savoir si l’ensemble est « true » (vrai) ou « false » (faux).
// Tous les opérateurs logiques renvoient un « boolean ». Voici les plus utiles :
// « && » : le « et » logique, qui sert à savoir si deux conditions sont vraies
// « || » : le « ou » logique, qui sert à savoir si au moins une des deux conditions est
// vraie
// « ! » : le « non » logique, qui sert à inverser une condition (se place avant la
// condition concernée)
// Note : les opérateurs logiques « && » et « || » peuvent lier deux conditions, afin d’avoir
// une réponse de type « boolean » sur l’ensemble. Ce « boolean » peut ensuite être lié à
// une autre condition, et ainsi de suite, permettant de lier autant de conditions que
// nécessaire.
// Conseil : si votre code devient difficile à lire car vous liez beaucoup de conditions dans un
// même test, n’hésitez pas à ajouter des parenthèses !
// Exemples (ici avec des « number » et des « boolean » figés pour comprendre le principe,
// mais un programme sera dynamique et on utilisera des variables à la place, ainsi un
// même test pourra renvoyer des fois « true », des fois « false », en fonction des valeurs) :

// cas simples (2 conditions liées)
console.log("true && true = " + (2 > 1 && 3 <= 3)); // true (tout est vrai)
console.log("true && false = " + (2 > 1 && 3 < 3)); // false (tout n'est pas vrai)
console.log("true || false = " + (2 > 1 || 3 < 3)); // true (au moins un est vrai)
console.log("false || false = " + (2 <= 1 || 3 < 3)); // false (pas un seul n'est vrai)

// cas simples (inversion de condition)
console.log("!true = " + !(2 > 1)); // false
console.log("!false = " + !(2 <= 1)); // true