// ============================================================
// JAVASCRIPT CURRICULUM ASSIGNMENTS + CAPSTONE PROJECT
// Runtime: Node.js (OneCompiler)
// ============================================================

"use strict";

const readline = require("readline");

// Create an input interface compatible with Node.js
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Promise-based input function
function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// ============================================================
// ASSIGNMENT 1: VARIABLES, DATA TYPES & CONSOLE OPERATIONS
// ============================================================

function assignment1() {
    console.log("\n========== ASSIGNMENT 1 ==========");

    var userName = "Alice";
    let age = 25;
    const isEmployed = true;
    const skills = ["HTML", "CSS", "JavaScript"];

    console.log(`Name: ${userName} (Type: ${typeof userName})`);
    console.log(`Age: ${age} (Type: ${typeof age})`);
    console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
    console.log(`Skills: ${JSON.stringify(skills)} (Type: ${typeof skills})`);
}

// ============================================================
// ASSIGNMENT 2: OPERATORS, EXPRESSIONS & INPUT HANDLING
// ============================================================

async function assignment2() {
    console.log("\n========== ASSIGNMENT 2 ==========");

    const billInput = await askQuestion(
        "Enter bill amount (default 100): "
    );

    const tipInput = await askQuestion(
        "Enter tip percentage (default 15): "
    );

    const billAmount = billInput.trim() === ""
        ? 100
        : Number(billInput);

    const tipPercentage = tipInput.trim() === ""
        ? 15
        : Number(tipInput);

    if (
        !Number.isFinite(billAmount) ||
        billAmount < 0 ||
        !Number.isFinite(tipPercentage) ||
        tipPercentage < 0
    ) {
        console.log("Error: Enter valid non-negative numbers.");
        return;
    }

    const calculatedTip = billAmount * tipPercentage / 100;
    let totalAmount = billAmount;
    totalAmount += calculatedTip;

    console.log(`Subtotal: $${billAmount}`);
    console.log(`Tip Percentage: ${tipPercentage}%`);
    console.log(`Calculated Tip: $${calculatedTip}`);
    console.log(`Total Amount to Pay: $${totalAmount}`);
}

// ============================================================
// ASSIGNMENT 3: CONDITIONAL LOGIC
// ============================================================

function assignment3() {
    console.log("\n========== ASSIGNMENT 3 ==========");

    const score = 85;
    let grade;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    switch (grade) {
        case "A":
            console.log("Performance: Excellent");
            break;
        case "B":
            console.log("Performance: Good");
            break;
        case "C":
            console.log("Performance: Average");
            break;
        case "D":
            console.log("Performance: Needs Improvement");
            break;
        case "F":
            console.log("Performance: Failed");
            break;
        default:
            console.log("Performance: Unknown");
    }

    const status = score >= 40 ? "Passed" : "Failed";

    console.log(`Score: ${score}`);
    console.log(`Grade: ${grade}`);
    console.log(`Status: ${status}`);
}

// ============================================================
// ASSIGNMENT 4: LOOPS & FLOW CONTROL
// ============================================================

function assignment4() {
    console.log("\n========== ASSIGNMENT 4 ==========");

    console.log("-- Multiplication Table of 5 --");

    for (let i = 1; i <= 5; i++) {
        console.log(`5 x ${i} = ${5 * i}`);
    }

    console.log("\n-- First number > 10 divisible by 6 --");

    let number = 11;

    while (number <= 100) {
        if (number > 10 && number % 6 === 0) {
            console.log(`Found: ${number}`);
            break;
        }
        number++;
    }

    console.log("\n-- do...while with continue --");

    let count = 0;

    do {
        count++;

        if (count === 3) {
            continue;
        }

        console.log(`Number: ${count}`);
    } while (count < 5);
}

// ============================================================
// ASSIGNMENT 5: FUNCTIONS & SCOPE
// ============================================================

function assignment5() {
    console.log("\n========== ASSIGNMENT 5 ==========");

    function rectangleArea(length = 5, width = 4) {
        return length * width;
    }

    console.log(
        `Standard Function Area (Default 5x4): ${rectangleArea()}`
    );

    const calculateArea = (length = 5, width = 4) =>
        length * width;

    console.log(
        `Arrow Function Area (Custom 10x3): ${calculateArea(10, 3)}`
    );

    {
        let blockVar = "Available only inside this block";
        console.log("Inside block:", blockVar);
    }

    try {
        console.log(blockVar);
    } catch (error) {
        console.log(
            `Scope Test Error: ReferenceError: ${error.message}`
        );
    }
}

// ============================================================
// ASSIGNMENT 6: ARRAYS, OBJECTS & CORE METHODS
// ============================================================

function assignment6() {
    console.log("\n========== ASSIGNMENT 6 ==========");

    const products = [
        { name: "Laptop", price: 800 },
        { name: "Mouse", price: 25 },
        { name: "Keyboard", price: 45 }
    ];

    console.log("-- All Products (forEach) --");

    products.forEach((product) => {
        console.log(
            `Item: ${product.name} - Price: $${product.price}`
        );
    });

    console.log("\n-- Filtered Products (Price < $50) --");

    const affordableProducts = products.filter(
        (product) => product.price < 50
    );

    console.log(affordableProducts);

    console.log("\n-- Mapped Product Tags (map) --");

    const productTags = products.map(
        (product) =>
            `${product.name.toUpperCase()} costs $${product.price}`
    );

    console.log(productTags);
}

// ============================================================
// CAPSTONE: PRODUCT INVENTORY & ANALYTICS DASHBOARD
// ============================================================

async function capstoneProject() {
    console.log("\n==============================================");
    console.log("INTERACTIVE PRODUCT INVENTORY SYSTEM");
    console.log("==============================================");

    console.log("\n--- Initializing Inventory System ---");

    const inventory = [
        { name: "Laptop", price: 800 },
        { name: "Mouse", price: 25 }
    ];

    // Take product details from the user.
    const productNameInput = await askQuestion(
        "Enter new product name (default Monitor): "
    );

    const productPriceInput = await askQuestion(
        "Enter new product price (default 150): "
    );

    const newProductName =
        productNameInput.trim() === ""
            ? "Monitor"
            : productNameInput.trim();

    const newProductPrice =
        productPriceInput.trim() === ""
            ? 150
            : Number(productPriceInput);

    // Validate the user's input.
    if (
        newProductName === "" ||
        !Number.isFinite(newProductPrice) ||
        newProductPrice <= 0
    ) {
        console.log(
            "Error: Product name must not be empty and price must be a positive number."
        );
        return;
    }

    // Add the new product.
    inventory.push({
        name: newProductName,
        price: newProductPrice
    });

    console.log(
        `\n[Product added: "${newProductName}" at $${newProductPrice}]`
    );

    // Assign categories using if...else.
    function getCategory(price) {
        if (price < 50) {
            return "Budget";
        } else if (price < 200) {
            return "Standard";
        } else {
            return "Premium";
        }
    }

    // Use switch to assign a category badge.
    function getCategoryBadge(category) {
        switch (category) {
            case "Budget":
                return "Budget";
            case "Standard":
                return "Standard";
            case "Premium":
                return "Premium";
            default:
                return "Unknown";
        }
    }

    console.log("\n--- Processing Inventory Roster (forEach) ---");

    inventory.forEach((product) => {
        const category = getCategory(product.price);
        const badge = getCategoryBadge(category);

        console.log(
            `* Item: ${product.name} ($${product.price}) -> Category: ${badge}`
        );
    });

    // Calculate the total value using a standard function.
    function calculateTotalInventory(items) {
        let total = 0;

        for (let i = 0; i < items.length; i++) {
            // Demonstrate continue for invalid entries.
            if (!Number.isFinite(items[i].price)) {
                continue;
            }

            total += items[i].price;
        }

        return total;
    }

    // Demonstrate an arrow function with default parameters.
    const applyAdjustment = (amount, tax = 0, discount = 0) => {
        const taxAmount = amount * tax / 100;
        const discountAmount = amount * discount / 100;

        return amount + taxAmount - discountAmount;
    };

    console.log("\n--- Financial Analytics ---");

    const totalValue = calculateTotalInventory(inventory);

    console.log(`Total Inventory Value: $${totalValue}`);

    // Filter products costing less than $200.
    const affordableItems = inventory
        .filter((product) => product.price < 200)
        .map((product) => product.name);

    console.log(
        `Filtered Affordable Items (Under $200): ${JSON.stringify(affordableItems)}`
    );

    // Transform the inventory into formatted report strings.
    const formattedReport = inventory.map(
        (product) =>
            `${product.name.toUpperCase()}: $${product.price}`
    );

    console.log(
        `Formatted Report List: ${JSON.stringify(formattedReport)}`
    );

    // Demonstrate custom tax and discount parameters.
    console.log(
        `Total after 10% tax: $${applyAdjustment(totalValue, 10).toFixed(2)}`
    );

    console.log(
        `Total after 10% discount: $${applyAdjustment(totalValue, 0, 10).toFixed(2)}`
    );

    // Demonstrate break by finding the first affordable product.
    for (const product of inventory) {
        if (product.price < 50) {
            console.log(
                `First Budget Product Found: ${product.name}`
            );
            break;
        }
    }

    console.log("\n--- Final Inventory Report ---");

    inventory.forEach((product) => {
        console.log(
            `${product.name} | $${product.price} | ${getCategory(product.price)}`
        );
    });

    console.log("\n==============================================");
    console.log("Inventory Processing Completed Successfully");
    console.log("==============================================");
}

// ============================================================
// MAIN PROGRAM
// ============================================================

async function main() {
    try {
        assignment1();
        await assignment2();
        assignment3();
        assignment4();
        assignment5();
        assignment6();
        await capstoneProject();
    } catch (error) {
        console.error("An unexpected error occurred:", error.message);
    } finally {
        rl.close();
    }
}

main();

