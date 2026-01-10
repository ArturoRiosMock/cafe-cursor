import { z } from "zod";

/**
 * Schema de validación para registro de usuarios
 * Usa Zod para validación robusta en servidor y cliente
 */
export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres")
    .trim()
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, "El nombre solo puede contener letras"),
  email: z
    .string()
    .email("Por favor ingresa un email válido")
    .max(255, "El email no puede exceder 255 caracteres")
    .toLowerCase()
    .trim(),
});

export type RegisterInput = z.infer<typeof registerSchema>;
