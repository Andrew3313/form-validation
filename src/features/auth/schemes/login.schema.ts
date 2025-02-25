import { z } from 'zod';

export const LoginSchema = z
    .object({
        name: z.string().min(1, {
            message: 'Введите имя'
        }),
        email: z.string().email({
            message: 'Некорректный email'
        }),
        password: z.string().min(6, {
            message: 'Пароль минимум 6 символов'
        })
    })

export type LoginSchemaType = z.infer<typeof LoginSchema>;