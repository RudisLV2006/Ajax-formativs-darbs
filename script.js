async function loadJoke() {
  cardEl.classList.add('hidden');

  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=twopart');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = response.json();

    setupEl.textContent = data.setup;
    punchEl.textContent = data.delivery;
    cardEl.classList.remove('hidden');

  } catch (err) {
    console.error(err);
  }
}
btn = document.getElementById("newJokeBtn");

cardEl = document.getElementById("card");

setupEl = document.getElementById("setupline");
punchEl = document.getElementById("punchline");


btn.addEventListener('click', loadJoke);
