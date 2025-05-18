export interface BaseItemData {
	id: number;
	name: string;
	value: number;
	description?: string;
}

export interface WeaponData extends BaseItemData {
	type: "weapon";
	damage: number;
}

export interface ConsumableData extends BaseItemData {
	type: "consumable";
	hp?: number;
	mp?: number;
}

export type ItemData = WeaponData | ConsumableData;
