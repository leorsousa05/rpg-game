import { readFileSync } from "fs";
import path from "path";
import { Item } from "../models/Item";
import { ItemFactory } from "../factories/ItemFactory";
import { BaseItemData, ItemData } from "../types/Item";

export default class ItemService {
	private _items: Map<String, Item<ItemData>> = new Map();

	constructor() {
		const filepath = path.resolve(__dirname, "../data/items.json");
		const raw: ItemData[] = JSON.parse(readFileSync(filepath, 'utf-8'));
		raw.forEach(data => {
			this._items.set(data.id.toString(), ItemFactory.create(data))
		});
	}

	getItemById(id: string): Item<ItemData> | undefined {
		return this._items.get(id)
	}

	getAllItems(): Item<ItemData>[] {
		return [...this._items.values()];
	}

}
