'use client';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { DASHBOARD } from '@/constants/navigation';
import { useFormState, useFormStatus } from 'react-dom';
import { FormEvent, useActionState, useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { set, ZodError } from 'zod';
import { loginAuth } from '@/app/api/auth/auth';
import { loginMutation } from '@/hooks/useMutation';
import { FormState, initialState } from '@/lib/definitions';
import { stat } from 'fs';
import { onLogin } from '@/hooks/customHooks';
import { useContextTheme } from '@/hooks/hooks';

export function LoginForm() {
  const { setIsForgotPasswordOrSignup } = useContextTheme();
  const [formState, setFormState] = useState<FormState>({});
  const { mutate, isPending, data } = loginMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const result = onLogin({ e: e, mutate: mutate });
    setFormState(result);
  };

  return (
    <Card className="w-full max-w-[350px] border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login</CardTitle>
        <CardDescription className="text-center">Enter your username below to login to your account</CardDescription>
        {formState?.errors?.password && <Button variant="destructive">{formState?.errors?.password}</Button>}
      </CardHeader>

      <CardContent>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="username" name="username" placeholder="Username" required />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <p
                  onClick={() => setIsForgotPasswordOrSignup({ prop: 'forgotPassword' })}
                  className="ml-auto inline-block text-[11px] underline cursor-pointer">
                  Forgot your password?
                </p>
              </div>
              <Input id="password" type="password" name="password" placeholder="Password" required />
            </div>
            {isPending ? (
              <Button disabled type="submit" className="w-full">
                <Loader2 className="animate-spin" />
                Submitting...
              </Button>
            ) : (
              <Button type="submit" className="w-full cursor-pointer">
                Login
              </Button>
            )}
          </div>
        </form>

        <div className="mt-4 text-center text-[11px]">
          Don&apos;t have an account?{' '}
          <p
            onClick={() => setIsForgotPasswordOrSignup({ prop: 'signup' })}
            className="underline cursor-pointer text-[11px]">
            Sign Up
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
