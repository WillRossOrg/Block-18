// Function to concatenate and sort odd numbers from two arrays
function concatOdds(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error("Both arguments must be arrays.");
    }

    const combinedOdds = arr1.concat(arr2).filter(number => {
        return typeof number === 'number' && number % 2 !== 0;
    });

    combinedOdds.sort((a, b) => a - b);

    return combinedOdds;
}

// Function to multiply two numbers
function multiplication(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error("Both arguments must be numbers.");
    }

    return num1 * num2;
}

// Example usage of provided functions
console.log(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])); // Output: [-1, 1, 3, 9, 15]
console.log(multiplication(5, 4)); // Output: 20

// Basic Shopping Cart functionality
let cart = [];

function addToCart(item) {
    cart.push(item);
    console.log(`Added ${item} to the cart.`);
    updateCartDisplay();
}

function checkCart() {
    if (cart.length === 0) {
        console.log("Your cart is empty.");
        return;
    }
    console.log("Cart Contents:", cart);
}

function checkout() {
    if (cart.length === 0) {
        console.log("Cannot checkout, the cart is empty.");
        return;
    }
    console.log("Proceeding to checkout with items:", cart);

}
function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cartItems');
    if (!cartItemsDiv) return;

    cartItemsDiv.innerHTML = ''; // Clear existing items

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item;
        cartItemsDiv.appendChild(itemElement);
    });
}
function checkCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    // Proceed to show checkout section
    document.getElementById('checkout').style.display = 'block';
}
// Example usage of cart functions
addToCart("Item 1");
addToCart("Item 2");
checkCart();
checkout();
