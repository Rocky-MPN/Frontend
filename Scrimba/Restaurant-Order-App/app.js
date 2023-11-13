import { menuArray } from "./data.js"

let addBtn = document.getElementById('add-btn')


// render items HTML
function getItemsHtml() {

    const foodItemsArr = menuArray.map((item) => {
        const { name, ingredients, id, price, emoji } = item

        return `
        <div class="food-item-card">
          <p class="item-emoji">${emoji}</p>
          <div class="item-details">
            <h4 class="item-name">${name}</h4>
            <p class="item-ingredients">${ingredients.join(", ")}</p>
            <p class="item-price">$${price}</p>
          </div>
          <div class="btn-wrapper">
            <button class="add-btn" data-add=${id}>+</button>
          </div>
        </div> 
        `
    }).join('')

    return foodItemsArr
}


addBtn.addEventListener('click',function(){
    
})

document.querySelector('.menu-items').innerHTML = getItemsHtml()

