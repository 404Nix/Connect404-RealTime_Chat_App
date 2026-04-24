import * as z from "zod";

export const loginValidator = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters")
        .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers and underscores")
        .max(20, "Username must be under 20 characters"),
    password: z
        .string()
        .refine((val) => !/\s/.test(val), "Password cannot contain spaces")
        .min(6, "Password must be at least 6 characters"),
});

export const registerValidator = z.object({
    avatar: z
        .any()
        .refine(
            (files) => files?.[0]?.size <= 2 * 1024 * 1024,
            "Avatar must be under 2MB",
        )
        .refine((files) => ["image/jpeg", "image/png", "image/webp"].includes(files?.[0]?.type),
            "Only JPG, PNG, WEBP allowed"),
    name: z
        .string()
        .refine(
            (val) => val.trim() === val,
            "Name cannot have leading or trailing spaces",
        )
        .refine(
            (val) => !/\s{2,}/.test(val),
            "Name cannot have consecutive spaces",
        )
        .min(2, "Name must be at least 3 characters")
        .max(50, "Name must be under 50 characters"),
    username: z
        .string()
        .trim()
        .min(3, "Username must be at least 3 characters")
        .regex(
            /^[a-zA-Z0-9_]+$/,
            "Username can only contain letters, numbers and underscores",
        )
        .max(20, "Username must be under 20 characters"),
    bio: z
        .string()
        .refine((val) => val.trim().length > 0, "Bio cannot be only spaces")
        .min(1, "Bio is required")
        .max(150, "Bio must be under 150 characters"),
    password: z
        .string()
        .refine((val) => !/\s/.test(val), "Password cannot contain spaces")
        .min(6, "Password must be at least 6 characters"),
});
