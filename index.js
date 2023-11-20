// Write your code here...

const menuItemsDivElement = document.getElementById('menu-items')

const dishImageElement = document.getElementById('dish-image')
const dishNameElement = document.getElementById('dish-name')
const dishDescriptionElement = document.getElementById('dish-description')
const dishPriceElement = document.getElementById('dish-price')

// Deliverable # 1
fetch('http://localhost:3000/menu')
.then(response => response.json())
.then(menuItems => {
    menuItems.forEach((menuItem) => {
        const spanElement = document.createElement('span')
        spanElement.textContent = menuItem.name
        menuItemsDivElement.appendChild(spanElement)

        // Deliverable # 3
        spanElement.addEventListener('click', () => {
            displayMenuItemDetails(menuItem)
        })
    })

    // Deliverable # 2
    displayMenuItemDetails(menuItems[0])
})

function displayMenuItemDetails(menuItem){
    dishImageElement.src = menuItem.image
    dishNameElement.textContent = menuItem.name    
    dishDescriptionElement.textContent = menuItem.description    
    dishPriceElement.textContent = "$" + menuItem.price
}

// Deliverable # 4
const cartFormElement = document.getElementById('cart-form')
cartFormElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const cartAmountInputElement = document.getElementById('cart-amount')
    const numberInCartSpanElement = document.getElementById('number-in-cart')
    
    if(isNaN(Number(cartAmountInputElement.value))){
        alert("Error: That's NOT a number! Please try again!")
    }
    else{
        const sum = Number(numberInCartSpanElement.textContent) + Number(cartAmountInputElement.value)
        numberInCartSpanElement.textContent = sum
    }

    cartFormElement.reset()
})