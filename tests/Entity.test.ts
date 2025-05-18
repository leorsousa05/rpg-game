import { describe, expect, test } from "@jest/globals";
import Entity from "../src/models/Entity";

describe('Entity Module', () => {
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
