export interface BaseItemData {
	id: number;
	name: string;
	value: number;
	description?: string;
}

export interface WeaponData extends BaseItemData {
	type: "weapon";
	status: WeaponStatus
}

export interface WeaponStatus {
	attack: number,
	speed: number
}

export interface ConsumableData extends BaseItemData {
	type: "consumable";
	status: ConsumableStatus;
}

export interface ConsumableStatus {
	restore_hp?: number;
	restore_mp?: number;
}

export type ItemData = WeaponData | ConsumableData;
