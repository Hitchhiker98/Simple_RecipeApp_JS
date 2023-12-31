
getRandomMeal();



let meals = document.getElementById("meals");

const list = document.querySelector(".fav-meals")

list.addEventListener("click", (e) => {
    // meals.innerHTML = ""
    getRandomMeal();
})



function getMealsS() {
    const mealIds = JSON.parse(localStorage.getItem("mealIds"));
}

async function getRandomMeal() {
     const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    
    const respData = await resp.json();
    const randomMeal = respData.meals[0];


    addMeal(randomMeal, true)
}

// async function getMealById(id) {
//    const meal =  await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
// }

// async function getMealBySearch(term) {
//    const meals = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
// }


function addMeal(mealData, random = false) {
    const meal = document.createElement('div');
    meal.classList.add("meal");
    
    meals.innerHTML = ""
    meal.innerHTML = `
    
        <div class="meal-header">
            ${random ? `
            <span class="random">
            Random Recipe
            </span>` : ""}
            <img 
                src="${mealData.strMealThumb}" 
                alt="${mealData.strMeal}"
            >
        </div>
                
            <div class="meal-body">
                <h4>${mealData.strMeal}</h4>
                <button class="fav-btn" >
                    <i class="fas fa-heart"></i>
                </button>
            </div>
    `

    
    meals.appendChild(meal);
} 


