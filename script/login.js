//document.addEventListener("DOMContentLoaded", function () {

//********************************STOCKAGE***********************************************

    
const button = document.getElementById('submit');
console.log(button);




//********************************FONCTION***********************************************

// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage  the documentation for use the localstorage
//On vérifie qu'on catch bien la value de l'input email au moment du log puis on appele la fonction setNewUser

function getNameInput () {
    const nameInput = document.getElementById('email-login').value;
     alert(`Merci ${nameInput} pour votre partage !`);
     setNewUser(nameInput);
}

// cette fonction permet de creer une nouvelle entrée dans le local storage qui aura userMail comme key et la value de l'input comme value
// une fois créer on appele la fonction NavigateToHome qui permet la navigation vers la page de connexion

function setNewUser (nameInput) {
  localStorage.setItem("userMail",nameInput );
  navigateToHome('../screen/game-cards.html');
}

function navigateToHome(url) {
  window.location.href = url;
}

// cette fonction est appelé en arrivant sur la page GameCards lorsqu'on se connecte, 
// elle verifie la présence de la key userMail dans le localstorage et la stock dans la variable dataToDisplay
// on identifie l'elément html visé pour injecter de la donnée dedans grâce à son id
// on lui injecte notre message d'accueil et on formate la donnée stockée pour qu'elle s'affiche correctement 

function getNewUserInfo () {
  const dataToDisplay = localStorage.getItem("userMail");
  console.log(dataToDisplay);
  const pElem = document.getElementById("helloUser");
  pElem.innerHTML= "Hello " + JSON.stringify(dataToDisplay);
}



// const refresh = () => {
//   setTimeout(function() {document.location.reload(true)}, 900); 

// }



//********************************APPEL FONCTION***********************************************
button.addEventListener('click', getNameInput);
button.addEventListener('click', refresh);
button.addEventListener('load', getNewUserInfo);