'use client';

import { RegisterSchema, RegisterSchemaType } from '../schemes';
import { AuthWrapper } from './auth-wrapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Button,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input
} from '@/shared/components/ui';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'sonner';

export function RegisterForm() {
    const { theme } = useTheme();
    const [recapValue, setRecapValue] = useState<string | null>(null);

    const form = useForm<RegisterSchemaType>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            passwordRepeat: ''
        }
    });

    const onSubmit = (data: RegisterSchemaType) => {
        if (recapValue) {
            console.log(data);
        } else {
            toast.error('Пожалуйста, завершите reCAPTCHA');
        }
    };

    return (
        <AuthWrapper
            heading='Регистрация'
            description='Чтобы войти на сайт введите ваш email и пароль'
            backButtonLabel='Уже есть аккаунт? Войти'
            backButtonLink='/auth/login'
            isShowSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='grid gap-2 space-y-2'
                >
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Имя</FormLabel>
                                <FormControl>
                                    <Input placeholder='Иван' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Почта</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='ivan@example.com'
                                        type='email'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Пароль</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='******'
                                        type='password'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='passwordRepeat'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Повторите пароль</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='******'
                                        type='password'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='flex justify-center'>
                        <ReCAPTCHA
                            sitekey={
                                process.env.GOOGLE_RECAPTCHA_SITE_KEY as string
                            }
                            onChange={setRecapValue}
                            theme={theme === 'light' ? 'light' : 'dark'}
                        />
                    </div>
                    <Button type='submit'>Создать аккаунт</Button>
                </form>
            </Form>
        </AuthWrapper>
    );
}
