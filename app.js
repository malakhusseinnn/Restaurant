let recipes = document.querySelector(".recipes");

function getRecipes(link) {
    let xml = new XMLHttpRequest();
    xml.open("GET", link, true);
    xml.onload = () => {
        if (xml.status == 200) {
            recipes.innerHTML = "";
            let response = JSON.parse(xml.responseText);
            let data = response.recipes;
            data.map((e) => {
                recipes.innerHTML += `
                <div class = "recipe">
                 <img src = ${e.image}>
                 <div class = "layout"><button class = "view-recipe" data-id = '${e.id}' >View Recipe</button></div>
                 <div class = "paragraphs">
                 <p class = "recipe-name"> ${e.name}</p>
                 <p class = "ingredients">Ingredients: ${e.ingredients}</p>
                 <p class = "preparing-time">Preparing Time: <span>${e.prepTimeMinutes} min</span></p>
                 <p class = "cooking-time">Cooking Time: <span>${e.cookTimeMinutes} min</span></p>
                  </div>
                </div>
            `
            })
            if (data.length == 0) {
                recipes.innerHTML = `
            <p class = "not-found">No Recipes Founded :)</p>`
            }
        }
    }
    xml.send();
}


let recipesLink = "https://dummyjson.com/recipes";

getRecipes(recipesLink);

let searchInput = document.querySelector(".search-input")

searchInput.addEventListener("input", () => {
    let recipeLink = `https://dummyjson.com/recipes/search?q=${searchInput.value}`
    getRecipes(recipeLink);

})



recipes.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-recipe")) {
        let recipeId = e.target.dataset.id;
        window.location.href = `recipeDetails.html?id=${recipeId}`;
    }
})
