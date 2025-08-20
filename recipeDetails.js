//------------------------ Recipe Details Logic -----------------------------------------

let link = new URLSearchParams(window.location.search);
let recipeId = link.get("id");

if (recipeId) {
    let recipeImg = document.querySelector(".recipe-img");
    let recipeName = document.querySelector(".recipe-name");
    let recipeIngredients = document.querySelector(".recipe-ingredients");
    let recipeInstructions = document.querySelector(".recipe-instructions");
    let preparingTime = document.querySelector(".preparing-time");
    let cookingTime = document.querySelector(".cooking-time");
    let cuisine = document.querySelector(".cuising");

    fetch(`https://dummyjson.com/recipes/${recipeId}`)
        .then(res => res.json())
        .then(data => {
            recipeImg.innerHTML = `<img src="${data.image}" alt="${data.name}">`;
            recipeName.textContent = data.name;

            recipeIngredients.innerHTML += `<ul>${data.ingredients.map(ing => `<li>${ing}</li>`).join("")
                }</ul>`;

            recipeInstructions.innerHTML += `<ol>${data.instructions.map(step => `<li>${step}</li>`).join("")
                }</ol>`;

            preparingTime.innerHTML = `Preparing Time: <span>${data.prepTimeMinutes}</span> min`;
            cookingTime.innerHTML = `Cooking Time: <span>${data.cookTimeMinutes}</span> min`;
            cuisine.innerHTML = `Cuisine: <span>${data.cuisine}</span>`;
        });

}

