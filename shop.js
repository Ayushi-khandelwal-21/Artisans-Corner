function addToCart(productName, productPrice) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if the product already exists in the cart
    const existingProductIndex = cartItems.findIndex(item => item.name === productName);
    
    if (existingProductIndex > -1) {
        // If it exists, increase the quantity
        cartItems[existingProductIndex].quantity += 1;
    } else {
        // Otherwise, add it to the cart
        cartItems.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${productName} has been added to your cart.`);
}
