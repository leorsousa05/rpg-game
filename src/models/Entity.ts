import ItemService from "../services/ItemService";
import { Class } from "../types/Entity";
import { ItemData } from "../types/Item";
import { Item } from "./Item";

export default class Entity {
	private _name: string;
	private _characterClass: Class;	
	private _exp: number;
	private _inventory: Item<ItemData>[];
	private _hp: number;
	private _mp: number;

	constructor(name: string, characterClass: Class) {
		this._name = name;
		this._characterClass = characterClass;
		this._exp = 0;
		this._inventory = [];
		this._hp = 100;
		this._mp = 20;
	}

	takeItem(id: number) {
		const item = new ItemService().getItemById(String(id));
		if(item) {
			this._inventory.push(item);
		}
	}

	removeItem(id: number) {
		this._inventory = this._inventory.filter(item => item.id !== id)
	}

	takeDamage(ammount: number) {
		this._hp -= ammount;
	}

	recoverHealth(ammount: number) {
		this._hp += ammount;
	}

	recoverMana(ammount: number) {
		this._mp += ammount;
	}

	useMana(ammount: number) {
		this._mp -= ammount;
	}

	gainExp(ammount: number) {
		this._exp += ammount;
	}

	public get hp(): number {
		return this._hp;
	}

	
	public get exp() : number {
		return this._exp
	}

	
	public get mp() : number {
		return this._mp
	}

	
	public get inventory() : Item<ItemData>[] {
		return this._inventory;
	}
	
	
}
