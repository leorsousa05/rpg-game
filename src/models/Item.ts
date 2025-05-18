import { BaseItemData, ConsumableData, WeaponData } from "../types/Item";
import Entity from "./Entity";

export abstract class Item<D extends BaseItemData> {
	constructor(protected data: D) {}

	abstract use(user: Entity, target?: Entity): void;
}

export class Weapon extends Item<WeaponData> {
	constructor(data: WeaponData) {
		super(data);
	}

	use(target: Entity): void {
		target.takeDamage(this.data.damage);
	}
}

export class Consumable extends Item<ConsumableData> {
	constructor(data: ConsumableData) {
		super(data)
	}

	use(user: Entity): void {
		if(this.data.mp) {
			user.recoverMana(this.data.mp);
		}
		if(this.data.hp) {
			user.recoverHealth(this.data.hp);
		}
	}
}
