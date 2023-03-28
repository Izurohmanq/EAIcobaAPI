const form = document.getElementById("bmi-form");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = document.querySelector(".weight").value;
  const height = document.querySelector(".height").value;
  const age = document.querySelector(".age").value;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f4404ad3f6msh2be7d6b2cb3a2f8p181a08jsn4baf211cad41",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
  };

  fetch("https://fitness-calculator.p.rapidapi.com/bmi?age=" + age + "&weight=" + weight + "&height=" + height, options)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = updateBMI(data);
    })
    .catch((err) => console.error(err));
});

// ada bmi, health, normal
function updateBMI(data) {
  return /* HTML */ `<div class="card mx-auto" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title text-center">Angka BMI mu sebesar: ${data.data.bmi}</h5>
      <h6 class="card-subtitle mb-2 text-muted text-center">Kategori kesehatanmu: </br>${data.data.health}</h6>
    </div>
  </div>`;
}
