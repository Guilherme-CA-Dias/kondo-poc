export const RECORD_ACTIONS = [
	{
		key: "get-activities",
		name: "Activities",
		type: "default",
	},
] as const;

export type RecordActionKey = (typeof RECORD_ACTIONS)[number]["key"] | string;
