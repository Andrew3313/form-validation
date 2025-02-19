import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/shared/components/ui';
import Link from 'next/link';
import { type PropsWithChildren } from 'react';
import { AuthSocial } from './auth-social';

interface AuthWrapperProps {
    heading: string;
    description?: string;
    backButtonLabel?: string;
    backButtonLink?: string;
    isShowSocial?: boolean;
}

export function AuthWrapper({
    children,
    heading,
    description,
    backButtonLabel,
    backButtonLink,
    isShowSocial = false
}: PropsWithChildren<AuthWrapperProps>) {
    return (
        <Card className='w-[400px]'>
            <CardHeader className='space-y-2'>
                <CardTitle>{heading}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                {isShowSocial && <AuthSocial />}
                {children}
            </CardContent>
            <CardFooter>
                {backButtonLabel && backButtonLink && (
                    <Button variant='link' className='w-full font-normal'>
                        <Link href={backButtonLink}>{backButtonLabel}</Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
