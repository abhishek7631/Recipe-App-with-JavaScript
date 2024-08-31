let searchBox = document.querySelector(".search-box");
let searchBtn = document.querySelector(".search-btn");
let recipeContainer = document.querySelector(".recipe-container");

let fetchRecipes = async (query) => {
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  let response = await data.json();

  response.meals.forEach((meal) => {
    let recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
    <img src="${meal.strMealThumb}"`;
    recipeContainer.appendChild(recipeDiv);
  });
};

searchBtn.addEventListener("click", () => {
  fetchRecipes();
  let searchInput = searchBox.value.trim();
  fetchRecipes(searchInput);
});
