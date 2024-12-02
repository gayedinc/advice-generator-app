const content = document.querySelector('.content');
const btnChange = document.querySelector('.btnChange');

btnChange.addEventListener('click', render);

function render() {
  // randomAdvice fonksiyonu çağrılarak rastgele bir alıntının id numarası number değişkenine atanır
  let number = randomAdvice();
  for (const advice of data.quotes) {
    if (advice.id === number) { // her bir alıntının id'si number ile karşılaştırılır ve eşleşirse
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
  // Math.random 0-1 arası rastgele sayı üretir
  // Math.floor sayıyı data.quotes dizisinin boyutuna kadar olan bir sayıya yuvarlar
  randomNumber = Math.floor(Math.random() * data.quotes.length);
  return randomNumber;
}

async function init() {
  // fetch alıntıları almak için bir HTTP isteği yapar
  // await fetch'in verileri almasını bekler ve veriyi JSON formatında döner
  data = await fetch('https://dummyjson.com/quotes?limit=2000').then(response => response.json());
  render(); // alıntıları ekrana yerleştirmek için çağrılır
}

init(); // sayfa yüklendiğinde çalışır