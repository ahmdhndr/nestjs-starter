import { z } from 'zod';

export const createUserSchema = z.object({
  fullName: z
    .string({ message: 'Missing property fullName' })
    .nonempty('Full Name is required'),
  email: z
    .string()
    .nonempty('Email is required')
    .email('Must be a valid email'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/\d/, 'Password must contain at least one number')
    .regex(/[@$!%*?&]/, 'Password must contain at least one special character'),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
