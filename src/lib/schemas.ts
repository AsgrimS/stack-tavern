import { z } from "zod";

const noWhitespaceRegexp = /^\S*$/;

export const stackSchema = z.object({
	name: z.string(),
	description: z.string(),
});

export const registerUserSchema = z
	.object({
		name: z.string().min(3).max(40).regex(noWhitespaceRegexp, "Cannot contain whitespace."),
		email: z.string().max(255).email(),
		password: z.string().min(8).max(255),
		confirmPassword: z.string().min(8).max(255),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Password don't match",
		path: ["confirmPassword"],
	});

export const loginUserSchema = z.object({
	nameOrEmail: z.string().min(3).max(255).regex(noWhitespaceRegexp, "Cannot contain whitespace."),
	password: z.string().min(8).max(255),
});
