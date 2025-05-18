import { BaseItemData, ConsumableData, WeaponData } from "../types/Item";
import Entity from "./Entity";

export abstract class Item<D extends BaseItemData> {
	constructor(protected data: D) {}

	abstract use(user: Entity, target?: Entity): void;

	
	public get id() : number {
		return this.data.id;
	}
	
}

export class Weapon extends Item<WeaponData> {
	constructor(data: WeaponData) {
		super(data);
	}

	use(target: Entity): void {
		target.takeDamage(this.data.status.attack);
	}
}

export class Consumable extends Item<ConsumableData> {
	constructor(data: ConsumableData) {
		super(data)
	}

	use(user: Entity): void {
		if(this.data.status.restore_mp) {
			user.recoverMana(this.data.status.restore_mp);
		}
		if(this.data.status.restore_hp) {
			user.recoverHealth(this.data.status.restore_hp);
		}
	}
}
