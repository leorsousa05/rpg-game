import { describe } from "@jest/globals";
import { ItemFactory } from "../src/factories/ItemFactory";
import { ItemData } from "../src/types/Item";
import { Consumable, Weapon } from "../src/models/Item";

describe("Item Factory Module", () => {
	test("Weapon Class Creation", () => {
		const weaponData: ItemData = {
			"id": 1,
			"name": "test",
			"value": 0,
			"status": {
				"attack": 10,
				"speed": 10
			},
			"type": "weapon"
		}
		const weapon = ItemFactory.create(weaponData);
		expect(weapon).toBeInstanceOf(Weapon)
	});

	test("Consumable Class Creation", () => {
		const consumableData: ItemData = {
			"id": 1,
			"name": "test",
			"value": 0,
			"status": {
				"restore_mp": 10,
			},
			"type": "consumable"
		}
		const consumable = ItemFactory.create(consumableData);
		expect(consumable).toBeInstanceOf(Consumable);
	});
});
