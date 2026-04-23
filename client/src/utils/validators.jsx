import * as z from "zod";

export const loginValidator = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username must be under 20 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerValidator = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be under 50 characters"),
    username: z
        .string()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username must be under 20 characters"),
    bio: z
        .string()
        .max(150, "Bio must be under 150 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});
