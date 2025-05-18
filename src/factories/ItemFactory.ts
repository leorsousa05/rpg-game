import { Consumable, Weapon } from "../models/Item";
import { ItemData } from "../types/Item";


export class ItemFactory {
	public static create(data: ItemData) {
		switch(data.type) {
			case "weapon":
				return new Weapon(data);
			case "consumable":
				return new Consumable(data);
		}
	}
}
