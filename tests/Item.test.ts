import Entity from "../src/models/Entity";
import ItemService from "../src/services/ItemService";

describe("Item module", () => {
	const char = new Entity("Arch", "Mage");
	const enemy = new Entity("Goblin", "Rogue");
	const itemService = new ItemService();

	test("Use Mana Potion", () => {
		const manaPotion = itemService.getItemById("2");
		manaPotion?.use(char);
		expect(char.mp).toBe(30);
	});

	test("Use Health Potion", () => {
		const healthPotion = itemService.getItemById("3");
		healthPotion?.use(char);
		expect(char.hp).toBe(110);
	});

	test("Attack Enemy", () => {
		const greatsword = itemService.getItemById("1");
		greatsword?.use(enemy);
		expect(enemy.hp).toBe(95)
	});

})
