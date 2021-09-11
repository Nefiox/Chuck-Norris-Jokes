const joke = document.querySelector('.joke');
const button = document.querySelector('button');

async function chuckJoke() {
    try {
        let res = await fetch('https://api.chucknorris.io/jokes/random');
        let jokeData = await res.json();

        jokeTxt(jokeData);
    } catch (error) {
        console.log(error);
    };

};

async function jokeTxt(jokeData) {
    let icons = ['😀', '😂', '🤣', '😋', '😎', '😁'];
    let number = parseInt(Math.random()*10);
    let icon;
    if(number > 5) {
        icon = icons[number-5];
    } else {
        icon = icons[number];
    };

    button.innerText = `Get another joke ${icon}`;
    joke.innerHTML = `<p>${jokeData.value}</p>`;
};

button.addEventListener('click', chuckJoke);