// Write your code here...

const menuItems = document.getElementById("menu-items")

fetch("http://localhost:3000/menu")
.then(response => response.json())
.then(menu => {
    displayDetails(menu[0])
    menu.forEach(food => {
        addFoodItemToMenu(food)
    })
})

// fetch("http://localhost:3000/menu/1")
// .then(response => response.json())
// .then(food => displayDetails(food))

function addFoodItemToMenu(food) {
    const spanElement = document.createElement('span')
    spanElement.textContent = food.name
    spanElement.addEventListener('click', () => {
        displayDetails(food)
    })
    menuItems.appendChild(spanElement)
}

function displayDetails(food) {
    const foodImage = document.querySelector('#dish-image')
    foodImage.src = food.image
    const dishName = document.getElementById('dish-name')
    dishName.textContent = food.name
    const dishDescription = document.getElementById('dish-description')
    dishDescription.textContent = food.description
    const dishPrice = document.getElementById('dish-price')
    dishPrice.textContent = `$${food.price}`
}

const cartForm = document.getElementById('cart-form')
cartForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const cartAmount = document.getElementById('cart-amount')
    const numberInCartElement = document.getElementById('number-in-cart')
    numberInCartElement.textContent = parseInt(numberInCartElement.textContent) + parseInt(cartAmount.value)
    cartForm.reset()
})