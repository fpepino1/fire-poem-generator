document.addEventListener("DOMContentLoaded", function () {
  function displayPoem(response) {
    console.log("poem generated");

    new Typewriter("#verse", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }

  function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#instructions-input");
    let key = "010at9ca97fd6359640c0357507fb1co";
    let context =
      "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in a <div> element and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem.";
    let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

    console.log("generating poem...");
    let poemElement = document.querySelector("#verse");
    poemElement.classList.remove("hidden");

    poemElement.innerHTML = ` <div class="generating"> Generating a poem about ${instructionsInput.value}</div>`;
    axios.get(apiUrl).then(displayPoem);
  }

  let poemFormElement = document.querySelector("#generate-poem");
  poemFormElement.addEventListener("submit", generatePoem);
});
