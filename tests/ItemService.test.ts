import { describe, test } from "@jest/globals";
import ItemService from "../src/services/ItemService";


describe("Item Service Module", () => {
	const Items = new ItemService();
	test("Get Item By Id", () => {
		const firstInGameItem = Items.getItemById("1");
		expect(firstInGameItem).toBeDefined();
	});

	test("getAllItems returns an array", () => {
		const allItems = Items.getAllItems();
		expect(Array.isArray(allItems)).toBeTruthy();
	});

	test("getAllItems returns at least 1 item", () => {
		const allItems = Items.getAllItems();
		expect(allItems.length).toBeGreaterThan(0);
	});
});
