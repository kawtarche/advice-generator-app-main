document.addEventListener('DOMContentLoaded', () => {
    console.log('page chargé avec succés');
    const newQuote = document.getElementById('new-quote');
    const choiceButton = document.getElementById('dominos-button');

    choiceButton.addEventListener('click', () => {

        fetch('https://api.adviceslip.com/advice') // une méthode qui me permet d'appeler des APIs et web service et retourne une promesse
            .then(data => {
                // si ce dernier a répondu avec succès, il me retourne un objet stocké dans la variable data
                return data.json();
            })
            .then(data => {
                // instruction executé lorsque l'api réponds avec succes
                console.log(data.slip.advice);
                newQuote.innerHTML = data.slip.advice;
            });
    })
})


