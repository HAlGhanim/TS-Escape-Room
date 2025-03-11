/**
 * 📦 Stage 3: The Cursed Inventory
 * Overcome array and object manipulation errors to retrieve supplies.
 */

const inventory: readonly string[] = ["Sword", "Shield", "Potion"];
inventory.push("Helmet"); // ❌ Error: Cannot modify a readonly array
console.log(inventory);
