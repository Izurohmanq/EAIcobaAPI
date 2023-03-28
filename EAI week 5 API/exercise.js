const search = document.querySelector(".search-button");

function getExerciseByMuscle(muscle) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f3837ee821msh5314c14a91ee1d0p10b5a5jsna4b2420cd461",
      "X-RapidAPI-Host": "exerciseapi3.p.rapidapi.com",
    },
  };

  return fetch(`https://exerciseapi3.p.rapidapi.com/search/?primaryMuscle=${muscle}`, options)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => err);
}

function updateUI(exercises) {
  let results = "";
  exercises.forEach((exercise) => {
    results += showResults(exercise);
  });
  const resultContainer = document.querySelector(".result-container");
  resultContainer.innerHTML = results;
}

function showResults(exercise) {
  return /*HTML */ `<div class="col-md-6">
    <h5 class="mb-3">${exercise.Name}</h5>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/${exercise["Youtube link"].substr(
      32,
      11
    )}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>`;
}

search.addEventListener("click", async function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const exercise = await getExerciseByMuscle(inputKeyword.value);
  updateUI(exercise);
});
