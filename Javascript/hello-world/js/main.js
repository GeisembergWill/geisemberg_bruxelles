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
//let numberToGuess = 2; // 2
//numberToGuess += 3;   // numberToGuess =  numberToGuess + 3  // 5
//numberToGuess -= 2;   // numberToGuess =  numberToGuess - 2  // 3
//numberToGuess++;      // numberToGuess =  numberToGuess + 1  // 4
//numberToGuess *= 10;  // numberToGuess =  numberToGuess * 10 // 40
//numberToGuess /= 2;   // numberToGuess =  numberToGuess / 2  // 20
//numberToGuess %= 7;   // numberToGuess =  numberToGuess % 7  // 6
//numberToGuess--;      // numberToGuess =  numberToGuess - 1  // 5

//console.log("numberToGuess [2 +3 -2 +1 *10 /2 %7 -1] = ", numberToGuess); //5

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



//pas d'affichage sur la console



// cas avec parenthèses importantes (3 conditions liées)
console.log("true || (true && false) = " + (true || (true && false))); // true
// étapes : true || (true && false)=== true || false === true
console.log("(true || true) && false = " + ((true || true) && false)); // false


// étapes : (true || true )&& false === true && false === false
//b. L’opérateur ternaire
//L’opérateur ternaire s’écrit en 3 parties, Il est donc composé de 2 symboles qui séparent
//ces 3 parties : « ? » et « : ».
//Il teste une condition, puis retourne quelque chose si la condition est vraie ou autre
//chose si elle est fausse.
//Syntaxe globale : condition ? siVrai : siFaux
//« condition » : la condition testée, généralement un « boolean »
//« siVrai » : ce qui est retourné par l’opérateur si la condition est vraie
//« siFaux » : ce qui est retourné par l’opérateur si la condition est fausse
//Exemple (on insère « majeur » ou « mineur » dans la phrase, en fonction de l’âge) :
const ageJohn = 20;
console.log("John est " + (ageJohn >= 18 ? "majeur" : "mineur") + " en France.");// concaténation
console.log(`John est ${ageJohn >= 21 ? "majeur": "mineur"} aux Etats-Unis.`);// interpolation

 

//VII. Les blocs les plus utiles
//1. Les blocs de condition(s)
//a. Le « if » ou « if/elseif/else »
//Le point commun des variantes du bloc « if », c’est que le programme exécutera 0 ou 1 bloc, mais jamais plusieurs.
//➢ Le « if » simple (si quelque chose est vrai)
//Si la condition du « if » est « true » (vraie), le programme entrera dans son bloc, c’est-à-
//dire qu’il exécutera le contenu du corps du bloc (qui va de « { » à « } »).
//Si la condition est « false » (fausse), il n’entrera pas dans le bloc, il le « sautera » et continuera sa lecture du code après la fermeture du bloc (« } »).
//Exemple (si la variable age est supérieure ou égale à 18, alors on écrit le message dans la console [sinon on ne fait rien]) :

// le bloc if simple (si la conditions est vraie)
if(age>= 18) {
    console.log("la personne est majeure.");   
}
//➢ Le « if/else » (si quelque chose est vrai, sinon)
//Si la condition du « if » est « true » (vraie), le programme entrera dans le bloc du « if ».
//Sinon, donc si la condition du « if » est « false » (fausse), le programme entrera dans le bloc du « else ».
//Remarque : le bloc « else » n’a pas de condition, il représente le « sinon », il est exécuté si la condition du « if » est false (fausse).
//Exemple (si la variable age est supérieure ou égale à 18, alors on écrit un message dans la console, sinon on écrit l’autre message) :

// la variante if/else (si la condition est vraie ,sinon)
if (age >= 18){
        console.log("La personne est majeure.");
}else {
        console.log("la personne est mineure.");
}
//➢ Le « if/elseif » (si quelque chose, sinon si autre chose, sinon si...)
//Si la condition du « if » est « true » (vraie), le programme entrera dans le bloc du « if ».
//Sinon, si la condition du premier « elseif » est « true » (vraie), le programme entrera dans son bloc à la place.
//Sinon, si la condition du deuxième « elseif » est « true » (vraie), le programme entrera dans son bloc à la place.
//Etc., dans l’ordre d’écriture. L’ordre des conditions est important. Remarques :
//quand le programme rencontre la première condition « true » (vraie), il entre dans le bloc correspondant, exécute le code de ce bloc, puis va directement à la fin du groupe « if/elseif » entier
//le programme n’exécutera pas plusieurs blocs, mais uniquement le premier dont la condition est « true »
//si les conditions du « if » et des « elseif » ne couvrent pas 100% des cas, il est possible qu’aucun bloc ne soit exécuté
//Exemple (si la personne a au moins 100 ans, sinon si elle a au moins 80 ans, sinon si... [attention on ne fait rien ici si une personne a moins de 40 ans]) :

//la variante if/elseif ( si une condition est vraie , sinon si une autre condition... )
if (age >= 100){
        console.log("La personne est centenaire.");
}else if (age >=80){
        console.log("La personne est au moins octagénaire.");
}else if (age >=60){
        console.log("La personne est au moins sexagénaire.");
}else if (age >=40){
        console.log("la personne est au moins quadragénaire.");
} 

//➢ Le « if/elseif/else » (si quelque chose, sinon si autre chose, sinon si..., sinon)
//Cette forme reprend les mêmes notions et comportements que pour la forme « if/elseif », mais on y ajoute un « else » (sinon).
//Puisqu’il y a un « else », le programme exécutera forcément 1 et 1 seul bloc :
//soit le premier bloc « if » ou « elseif » rencontré qui aura sa condition « true »
//soit par défaut le bloc « else » qui couvre le reste des possibilités (s’il est exécuté, cela signifie que toutes les conditions du « if » et des « elseif » sont « false »)
//Exemple (si la personne a au moins 100 ans, sinon si elle a au moins 80 ans, sinon si..., sinon) :

//La variante complète if/elseif/else ( si la condition est vraie,sinon si une autre condition,sinon si...,sinon)
if (age >= 100){
        console.log("La personne est centenaire.");
}else if (age >=80){
        console.log("La personne est au moins octagénaire.");
}else if (age >=60){
        console.log("La personne est au moins sexagénaire.");
}else if (age >=40){
        console.log("la personne est au moins quadragénaire.");
} else {
        console.log("La personne n'est pas encore quadragénaire.");
}
//Résumé sur les points importants des blocs de type « if/elseif/else » :
//le bloc « if » est toujours le premier bloc du groupe le bloc « else » est toujours le dernier bloc du groupe
//le bloc « else » est le seul qui n’ait pas de condition, car il représente le « sinon », toutes les autres possibilités
//si vous avez seulement besoin d’exécuter une partie de code si une condition est vraie, alors un bloc « if » simple suffit
//si vous avez besoin d’un bloc par défaut à exécuter si aucun autre ne l’est, alors il vous faut un bloc « else »
//si vous utilisez au moins un bloc « elseif », alors faites attention à l’ordre des conditions
//si vous n’avez pas de bloc « else », alors entre 0 et 1 bloc sera exécuté
//si vous avez un bloc « else », alors 1 et 1 seul bloc sera exécuté
//si vous avez plusieurs conditions à tester et que vous voulez laisser la possibilité d’entrer dans plusieurs blocs, alors vous aurez besoin de plusieurs blocs « if » séparés (voir les deux points précédents)

//b. Le « switch/case »
//Le bloc « switch » prend un argument en paramètre et va tester si l’égalité est « true »
//(vraie) entre ce paramètre et chaque « case », dans l’ordre d’écriture des « case ». Dès qu’une égalité est trouvée, le programme entre dans le bloc « case » associé.
//S’il rencontre le bloc « default », alors cela signifie qu’aucun « case » n’était égal au paramètre du « switch ». Dans ce cas, il entre dans ce bloc par défaut.
//Si l’instruction « break; » (« casser » en français) est lue / exécutée à l’intérieur d’un bloc « switch/case », alors le programme « saute » le bloc entier et continue sa lecture après le « } » final du bloc « switch/case ».
//Lorsqu’il entre dans un bloc, alors le programme exécute le code depuis le « : » associé au « case » (ou au « default ») et jusqu’à rencontrer un « break » ou arriver à la fin du bloc « switch/case » entier. Dans ce cas, les lignes « case ...: » sont ignorées / sautées.
//Cas standard(chaque bloc «case» se termine par un «break» et il y a un bloc « default ») :

let action = "virement";

switch (action){
        case "retrait":
                //instructions de retrait
                break;

        case "virement":
                //instructions de virement
                break;
        case "clotureCompte":
                //instruction de cloture de compte
                break;
        default:
                //instructions par défaut
                break;
}
//Cas sans « break » systématique (certaines instructions peuvent être exécutées en entrant par différents « case ») :

let numberToGuess = 7;
let operation = "foisDeuxPlusTrois";

switch (operation){
        case "plusUn":
                numberToGuess++;
                break;

        case "foisDeuxPlusTrois":
                numberToGuess *= 2;
                break;

        case "plusTrois":
                numberToGuess+= 3;
                break;

        case "foisZero":
                numberToGuess = 0;
                break;        
}
//2. Les boucles les plus utiles
//Les boucles sont des blocs qui permettent d’exécuter plusieurs fois le code contenu dans
//leur corps.
//Chaque passage dans une boucle est appelé une itération.
//a. La boucle « for »
//En général, on utilise la boucle for (ou une de ses variantes) quand le programme sait
//combien d’itérations il devra effectuer au moment où il arrive sur cette boucle. On itère « n fois », « pour chaque... parmi... ».
//Syntaxe : for (initialisation; condition pour continuer; incrémentation) {}

//Voici quelques exemples d’utilisation :
//Le « for » « pour chaque entier de a à b inclus » (ici pour i allant de 1 à 10 inclus, écrivant
//progressivement la table de multiplication des 3 dans la console) :

//le for "de a à b inclus"
for (let i =1; i <=10; i++){
        console.log(`3 x ${i} = ${3 * i}`);
}
//Le « for » « n fois » (ici « 3 fois », pour i allant de 0 inclus à 3 exclu [donc jusqu’à 2 inclus], écrivant 3 fois au total la phrase dans la console) :

//le for "n fois"
for(let i = 0; i < 3; i++) {
        console.log("Je serai un bon développeur");
}
//Le «for» «de a à b inclus avec un pas différent de 1»(ici pour i démarrant à 3, incrémenté de 3 à chaque itération, tant que i <= 10) :

// le for "de a à b inclus avec un pas différent de 1"
for(let i = 3; i <= 10; i += 3) {
        console.log(`${i} est inférieur ou égal à 10 et est divisible par 3`);
}

//Le « for » « inversé » (on décrémente au lieu d'incrémenter) (ici pour i démarrant à 5, décrémenté de 1 à chaque itération, jusqu’à 0 exclu [donc 1 inclus]) :

//le for "inversé" (ondécrémente au lieu d'incrementer)
for(let i = 5; i > 0; i--) {
        console.log(`${i}...`);
}
console.log("Bonne année !");

//b. La boucle « while »
//En général, on utilise la boucle while (ou une de ses variantes) quand le programme ne
//sait pas combien d’itérations il devra effectuer au moment où il arrive sur cette boucle. On itère « tant que... ».
//Syntaxe : while (condition pour continuer) {}
//Notes :risque de boucle infinie (rester indéfiniment bloqué dans le while et ne jamais en sortir) : si dans le corps du while rien ne fait que la condition pour continuer renverra false => risque de crash de l'application. Penser à double-checker que la condition renverra bien false au bout d'un moment
//Exemple d’utilisation :Le « while » classique (ici on écrit la phrase dans la console tant que la variable est
//strictement inférieure à 18) :

let kAge = 12;
while (kAge < 18){
        console.log(`J'ai maintenant ${kAge} ans ...`);
        kAge++;
}
console.log(`J'ai finalement ${kAge} ans.`);
//VIII. Les fonctions
//Afin de ne pas dupliquer de code, lorsqu'une logique commune doit être utilisée à
//plusieurs endroits, on crée une fonction.
//Une fonction a un nom (écrit en camelCase), des arguments (paramètres) et un corps
//(bloc « {} ») qui contient l’implémentation d’une logique et peut retourner un résultat.
//Une fois la fonction déclarée, elle peut être appelée autant de fois que nécessaire.
//Lors de l’appel à une fonction, l’ordre des arguments doit être respecté.
//Les arguments sont des variables locales et peuvent être utilisés à l’intérieur de la fonction.
//Syntaxes globales d’une fonction (déclaration et appel) : ▪ Nom : nomDeLaFonction
//▪ Arguments : oui, il y en a 3 -> arg1, arg2, arg3
//▪ Implémentation : calcul de arg1 * arg2 + arg3
//▪ Renvoi d’un résultat : oui -> le résultat du calcul

//déclaration de la fonction
function nomDeLaFonction (arg1, arg2, arg3) {
        //logique implémentée
        const result = arg1 * arg2 + arg3;
        return result;
}

//appel à la fonction déclarée plus haut
const valeurRenvoyee = nomDeLaFonction(1,2,3);

//1. Utilités des fonctions
//Les fonctions sont très utiles car elles permettent de :
//réutiliser une logique implémentée
//éviter la duplication de code
//structurer et organiser le code par parties améliorer la lisibilité du code
//2. Exemples:Une fonction simple (ici qui prend 1 argument et retourne le résultat de la multiplication par 3 de cet argument) :

//déclaration de la fonction getNombreFoisTrois,
//qui prend en argument un nombre et qui renvoie le triple de ce nombre
function getNombreFoisTrois(nombre){
        //nombre est un argument et une variable locale
        return nombre * 3;// la fonction retourne le resultat du calcul
}
//appel a la fonction getNombreTrois en lui passant 5 en argument
// et affectation du résultat reçu dans la constante cinqFoisTrois
const cinqFoisTrois = getNombreFoisTrois(5);//cinqFoisTrois = 15
//log de cinqFoisTrois dans la console
console.log("cinqFoisTrois = " + cinqFoisTrois);

//Une fonction sans résultat retourné (ici log de la phrase fournie en argument, à laquelle on ajoute un espace et un point d’exclamation) :
function logPhraseAvecPointDExclamation(phrase){
        console.log(`${phrase} !`);
}
logPhraseAvecPointDExclamation("Je serai un bon développeur");

//Une fonction sans argument (ici renvoie une valeur approximative de pi (π)) :

//une fonction sans argument
function getApproximationPi(){
        return 3.14; // ou 22/7
}
console.log(`360 deg = 2*pi ~= ${2 * getApproximationPi()} rad`);


//Une fonction qui appelle d'autres fonctions (ici retourne le résultat de l’appel 
//à une autre fonction spécialisée, en fonction de l’opération demandée) :

//fonction qui retourne le resultat de l'addition de 2 nombres
function getResultatAdditionDe2Nombres(nombre1, nombre2){
        return nombre1 + nombre2;
}

//fonction qui retourne le resultat de la multiplication de 2 nombres
function getResultatMultiplicationDe2Nombres(nombre1, nombre2){
        return nombre1 * nombre2;
}

//une fonction qui appelle d'autres fonctions,en fonction de l'operation demandée
//et retourne le résultat reçu de la fonction appelée
// note: l'instruction "return" met fin à l'execution de la fonction
function getResultatCalculEntre2Nombres(nombre1, operation,nombre2){
        //en fonction de l'opération demandée
        switch (operation) {
                //addition et soustraction (a - b = a + -b)
                case "addition":
                        return getResultatAdditionDe2Nombres(nombre1, nombre2);
                case "soustraction":
                        return getResultatAdditionDe2Nombres(nombre1,-nombre2);
                //multiplication et division (a / b = a *1/b)
                case "multiplication":
                        return getResultatAdditionDe2Nombres(nombre1, nombre2);
                case "division":
                        return getResultatAdditionDe2Nombres(nombre1, 1 / nombre2);
                default:
                    console.log(`Operation "${operation}" non gérée`);
                    return null;
        }
}
console.log (`7 + 2 = ${getResultatCalculEntre2Nombres(7, "addition" ,2)}`);
console.log (`6 - 1 = ${getResultatCalculEntre2Nombres(6, "soustraction" ,1)}`);
console.log (`3 * 4 = ${getResultatCalculEntre2Nombres(3, "multiplication" ,4)}`);
console.log (`10 / 2 = ${getResultatCalculEntre2Nombres(10, "division" ,2)}`);
console.log (`2 ** 3 = ${getResultatCalculEntre2Nombres(2, "puissance" ,3)}`);

//IX. Les tableaux
//Les tableaux permettent de stocker des données, de n’importe quel type, de façon
//groupée.
//Si des données à manipuler ont un lien entre elles, alors il est plus pratique d’utiliser un tableau et de l’affecter à une seule variable, plutôt que de les traiter séparément. De cette façon, les données qui ont un lien entre elles restent groupées et on peut facilement automatiser un traitement.
//1. Les tableaux indexés
//Leur symbole est le crochet « [] » (comme dans la plupart des langages). Un tableau indexé regroupe des éléments.
//C’est une liste ordonnée d’éléments (l’ordre des éléments est conservé). Chaque élément a pour emplacement un « index » du tableau.
//La longueur (« length » en anglais) d’un tableau indexé est le nombre d’éléments qu’il contient.
//Attention, dans un tableau indexé contenant n éléments : le premier élément a l’index 0 (zéro)
//le dernier élément a l’index (n - 1) a. Utilités
//permet de regrouper des éléments ensemble, dans le but par exemple de « boucler sur le tableau » (souvent grâce à une boucle « for ») et appliquer une logique commune pour chaque élément
//il est extensible, pouvant contenir 0 à n éléments, donc très pratique quand on ne sait pas à l’avance sur combien d’éléments on devra appliquer une logique
//chaque élément peut être de n’importe quel type (on peut y stocker des nombres, des tableaux, des fonctions, etc.)

//b. Les bases de leur utilisation
//Voici les opérations les plus courantes sur les tableaux indexés.
//Créer un tableau indexé vide (qui contient 0 élément) et l’affecter à une variable :

//initialiser un tableau vide
const tableauVide =[]

//Créer un tableau indexé qui contient des valeurs fournies (ici 7 nombres) et l’affecter à une variable :
const tabNums = [11,22,33,44,55,66,77];

//Ajouter un élément à la fin du tableau (en dernière position) :
tableauVide.push(2);
tableauVide.push(3);
tableauVide.push(7);

console.log("tableauVide = ",tableauVide);

//Récupérer un élément par son index (son emplacement, qui commence par 0) :
console.log("tableauVide[1] = ", tableauVide [1]);

//Modifier la valeur d'un élément à un certain index :

//Modifier la valeur de l'élément à l'index 2 
tableauVide[2] = "abc";
console.log("tableauVide = ", tableauVide);

//Boucler sur un tableau et appliquer une logique pour chaque élément :

//boucler sur un tableau(de 0 à lenght-1)
for (let i = 0; i < tableauVide.length; i++) {
        // récuperation de l'élément à l'index i
     const elementTableauVide = tableauVide[i];
     //log de cet élément
     console.log("tableauVide[" + i + "] = ", elementTableauVide) ;
}

//c. Quelques méthodes utiles
//Une méthode est une fonction qui appartient à une classe. Comme les fonctions en
//général, une méthode peut avoir besoin d’argument(s) et peut retourner un résultat. Les tableaux sont de la classe Array.
//Syntaxe : pour appeler une méthode « uneMethode » sur un tableau indexé « unTableau », on écrit :

//unTableau.uneMethode()

//Voici quelques méthodes utiles sur les tableaux indexés (classe Array) : .push(newElement) 
//: ajouter un élément à la fin du tableau (déjà vu plus haut dans les opérations courantes)

//ajouter un élément à la fin du tableau
tableauVide.push(2);

//.join(separateur) : transforme un tableau en string, en concaténant tous les éléments dans l’ordre et en ajoutant le séparateur entre chaque élément

//tabNums transforme en string avec "_|_" entre chaque element
console.log(`tabNums.join("_|_") = ${tabNums.join("_|_")}`);

//.includes(elementRecherche) : renvoie true ou false, si l'élément est présent ou non dans le tableau 
//(ici on cherche l’élément 77 puis 42 dans le tableau tabNums) :

//includes(elementRecherche) : renvoie true/false si l'élément est présent ou non dans le tableau
console.log(
        `L'élement ${77} ${tabNums.includes(77) ? "est" : "n'est pas"}
        présent dans le tableau [${tabNums.join(", ")}]`
);
console.log(
        `L'élement ${42} ${tabNums.includes(42) ? "est" : "n'est pas"}
        présent dans le tableau [${tabNums.join(", ")}]`

);
//.indexOf(elementRecherche) : renvoie l'index de l'élément recherché (entre 0 et length-1 si trouvé, -1 sinon) :
const indexOf77 = tabNums.indexOf(77);
if (indexOf77 != -1){
        console.log(`L'élément ${77} est à l'index ${indexOf77} dans le tableau [${tabNums.join(", ")}]`);
}

//.slice(indexDebutEltInclus, indexFinEltExclu) : renvoie une copie (sans impacter le tableau initial)
//d'un morceau du tableau (attention l’index de début est inclus mais l’index de fin est exclu) :

const morceau = tabNums.slice(2,4);
console.log(`morceau (tabNums.slice(2,4)) = [${morceau.join(", ")}]`);

//2. Les tableaux associatifs
//Leur symbole est l’accolade « {} » (peut varier en fonction des langages).
//Attention donc à ne pas confondre un tableau associatif avec le corps d’un bloc, d’une fonction ou autre, puisqu’ils ont le même symbole. Bien indenter votre code vous aidera !
//Un tableau associatif regroupe des éléments sous la forme de paires (ou duos) clef/valeur.
//Un tableau associatif contient 0 à n clefs et chaque clef pointe vers une valeur (une donnée de n’importe quel type).
//Une façon simple de se représenter un tableau associatif est de le comparer à un dictionnaire. Les clefs sont les mots et chaque mot pointe vers une valeur qui est la définition de ce mot.
//a. Utilités permet de regrouper des données, de façon structurée, dans le but de « construire
//un objet » qu’on pourra facilement manipuler
//il est extensible, pouvant contenir 0 à n paires clef/valeur
//chaque valeur peut être de n’importe quel type (on peut y stocker des nombres, des tableaux, des fonctions, etc.)
//b. Les bases de leur utilisation
//Voici les opérations les plus courantes sur les tableaux associatifs. Création d’un tableau associatif vide (sans aucune paire clef/valeur) :

//initialisation d'un tableau associatif vide
let tabAssocVide = {};

//Ajout d’une paire clef/valeur (ici le prénom Bryan et l’âge 27) :

tabAssocVide.prenom = "Bryan";
tabAssocVide.age = 27;
console.log("tabAssocVide = ", tabAssocVide);

//Accéder à une valeur (ici la propriété « prenom ») :

console.log(`Je m'appelle ${tabAssocVide.prenom}`);

//Modification d’une valeur (ici l’âge passe à 28) :

tabAssocVide.age = 28;
console.log("tabAssocVide = ",tabAssocVide);

//Créer un tableau associatif contenant des paires clef/valeur fournies (ici le Pokémon Pikachu) :

//initialisation d'un tableau associatif plus riche
//affectation à la variable pikachu,stockant ses infos et attaques
//(données sur Pikachu récupérées d'Internet)

let pikachu = {
     id:25,         // number (entier)       : identifiant unique
     name:"Pikachu",// string                : nom du pokemon
     weightKg:6.0,  // number (décimal)      : poids
     hpMax: 80,     // number (entier)       : points de vie max
     attacks: [     // Array (tableau indexé): liste des attaques
        {
                name: "Vive-Attaque",//string         :nom de l'attaque
                damages:10,          //number(entier) :puissance de l'attaque
        },
        {
                name: "Boule Elek",
                damages:20,
        },
    ],
};

console.log("pikachu = ", pikachu);

//3. Exemples d’application
//a. Tableaux indexés et associatifs avec Pikachu
//En se basant sur la structure du Pokémon Pikachu, écrire dans la console :

//Le code devra pouvoir s'adapter à d'autres Pokémons (tableaux associatifs) qui suivront la même structure.
//Note : pour faire une tabulation / un retrait dans la console, écrire le caractère spécial "\t".

//création d'une fonction,ainsi il sera simple d'appeler cette logique avec d'autres Pokemons
function listerAttaquesPokemon(pokemon) {
        //ecriture de la premiere ligne
        console.log(`*{pokemon.name} possède ${pokemon.attacks.length} attaques :`);

        //pour chaque attaque (dans le tableau indexé pokemon.attacks)
        for(let i =0; i < pokemon.attacks.length;i++){
        //récupération du tableau associatif de l'attaque ( le i-ème élément)
        const attaque = pokemon.attacks[i];
        
        //écriture d'une ligne d'attaque
        console.log(`\t"${pikachu}" (puissance${attaque.damages})`);
        }
}

//appel de la fonction listerAttaquesPokemon en lui passant pikachu comme argument/paramètre
listerAttaquesPokemon(pikachu);