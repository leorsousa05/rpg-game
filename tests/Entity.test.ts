import { describe, expect, test } from "@jest/globals";
import Entity from "../src/models/Entity";

describe('Entity - Points System', () => {
	const char = new Entity("Arch", "Rogue");
	test('Hit character', () => {
		char.takeDamage(20);
		expect(char.hp).toBe(80);
	});

	test('Heal character', () => {
		char.recoverHealth(30);
		expect(char.hp).toBe(110);
	});

	test('Recover character mana', () => {
		char.recoverMana(10);
		expect(char.mp).toBe(30);
	});

	test('Use character mana', () => {
		char.useMana(10);
		expect(char.mp).toBe(20);
	})

	test('Get Exp character', () => {
		char.gainExp(20);
		expect(char.exp).toBe(20);
	});

})

describe("Entity - Inventory System", () => {
	const char = new Entity("Arch", "Mage");
	test('Take Item Character', () => {
		char.takeItem(2);
		expect(char.inventory.length).toBeGreaterThan(0);
		expect(char.inventory[0].id).toBe(2);
	});

	test('Take Item Character', () => {
		char.removeItem(2);
		expect(char.inventory.length).toBeLessThan(1);
		expect(char.inventory[0]).toBeUndefined();
	});
})
