const content = document.querySelector('.content');
const btnChange = document.querySelector('.btnChange');

btnChange.addEventListener('click', render);

function render() {
  let number = randomAdvice();
  for (const advice of data.quotes) {
    if (advice.id === number) {
      content.innerHTML = `
      <h4>ADVICE #${advice.id}</h4>
      <h2>"${advice.quote}"</h2>
      <h3>${advice.author}</h3>
      <div class="pauseArea">
        <img src="assets/img/pause-icon.svg" alt="Pause Icon">
      </div>
      `;
    }
  }
}

let randomNumber = 0;

function randomAdvice() {
  randomNumber = Math.floor(Math.random() * data.quotes.length);
  return randomNumber;
}

async function init() {
  data = await fetch('https://dummyjson.com/quotes?limit=2000').then(response => response.json());
  render();
  randomAdvice();
}

init();