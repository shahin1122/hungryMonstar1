/////////////////////////////////////////// getting value by ID/////////////////////////////////////////////////////////////// 

const searchBtn = document.getElementById("search-btn");
const cardItem = document.getElementById("card-item")
searchBtn.addEventListener("click", function () {
const searchMeal = document.getElementById("input-meal").value.slice(0, 1);
cardItem.innerText = '';






    /////////////////////////////////// feching data form mealDB using fetch api//////////////////////////////////////////////

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchMeal}`)
        .then(res => res.json())
        .then(data => {
            let divs = "";
            let IngredentItem = [];
            let itemList = [];
            let i = 0;
            data.meals.map(meal => {
                i++;
                
                
               //Ingrediant list element 
               const listItem = `<div class="mt-5">
               <h3>Component</h3>
               <ul>
                   <li>${meal.strIngredient1}</li>

                   <li>${meal.strIngredient2}</li>

                   <li>${meal.strIngredient3}</li>

                   <li>${meal.strIngredient4}</li>

                   <li>${meal.strIngredient5}</li>

                   <li>${meal.strIngredient6}</li>

                   <li>${meal.strIngredient7}</li>

                   <li>${meal.strIngredient8}</li>

                   <li>${meal.strIngredient9}</li>
               </ul>
            </div>`
            IngredentItem.push(listItem);
          


                


                //card body
                const div = `<div class="col-md-2 card m-5 p-0 shadow-lg" style="width: 18rem;">
                              <img id = "${i}"  src="${meal.strMealThumb}" class="card-img-top" style = " marging-top = 20px; border-radius: 10px;" alt="...">
                              <div class="card-body">
                                   <p class="text-center fw-bold">${meal.strMeal}</p>
                              </div>

                           </div>`;
                itemList.push(div);

                divs += div;

            })




            
            const itemsSection = document.getElementById("items-section");
            itemsSection.innerHTML = divs;
            const itemSection = document.getElementById("items-section");

            // event listener
            itemSection.addEventListener("click", event => {
                eventListener()
            });

            
            
            
            function eventListener() {
                const clickingImg = event.target.id;
                const clickedItem = itemList[clickingImg-1];
                const clickedItemIngre = IngredentItem[clickingImg-1];
                cardItem.innerHTML = clickedItem + clickedItemIngre;

                
            }


        })
});