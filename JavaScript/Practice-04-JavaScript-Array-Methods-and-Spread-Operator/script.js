let a = [1, 2, 58, 78];
a[4] = 50;
console.log(a);

let b = {
    mouse: 1,
    keyboard: 2,
    ram: 6
}
b.ssd = 45;
console.log(b);

// Get all products that are currently in stock .filter() returns only the products whose inStock value is true.
function getAvailableProducts(products) {
    return products.filter(p => p.inStock); //p.inStock === true here p.inStock is already a boolean comparing it to true is redundant
}
console.log(getAvailableProducts([
    { name: "Laptop", price: 800, inStock: true },
    { name: "Mouse", price: 20, inStock: false },
    { name: "Keyboard", price: 45, inStock: true },
    { name: "Monitor", price: 300, inStock: false }
]));

// Get the names of all available products .filter() selects available products first, then map() extracts only their names.
function getAvailableProductsNames(products) {
    return products.filter(p => p.inStock).map(p => p.name);
}
console.log(getAvailableProductsNames([
    { name: "Laptop", price: 800, inStock: true },
    { name: "Mouse", price: 20, inStock: false },
    { name: "Keyboard", price: 45, inStock: true },
    { name: "Monitor", price: 300, inStock: false }
]));

// Update a user's city without modifying the original object the spread operator copies the existing properties, while the new city value replaces the old one.

function updateCity(user, newCity) {
    return { ...user, city: newCity }
}
console.log(updateCity({ name: "Suraj", age: 22, city: "Delhi" }, 'Pune'));

// Apply a 10% discount to a specific order .map() creates a new array while updating only the matching order.The spread operator preserves the existing order properties.
function applyDiscount(orders, orderId) {
    let newOrder = orders.map(o => {
        if (o.id === orderId) {
            let newPrice = o.price * 0.9;
            return { ...o, price: newPrice, discounted: true };
        } else {
            return o;
        }
    });
    return newOrder;
}
console.log(applyDiscount([
    { id: 1, item: "Book", price: 15, discounted: false },
    { id: 2, item: "Pen", price: 2, discounted: false },
    { id: 3, item: "Bag", price: 40, discounted: false }
], 3));
