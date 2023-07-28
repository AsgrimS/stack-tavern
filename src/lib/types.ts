export interface Stack {
	id: number;
	name: string;
	description?: string;
	created_at: string;
	user_id: number;
	author_name: string;
}

export interface Technology {
	id: number;
	name: string;
	description?: string;
	purpose: string;
	created_at: string;
}
