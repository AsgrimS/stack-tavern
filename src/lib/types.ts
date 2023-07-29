export interface Stack {
	id: number;
	name: string;
	description?: string;
	created_at: string;
	author: User;
	technologies: Technology[];
}

export interface User {
	id: number;
	name: string;
	created_at: string;
}

export interface Technology {
	id: number;
	name: string;
	description?: string;
	purpose: string;
	created_at: string;
}
