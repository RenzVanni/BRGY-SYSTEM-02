'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ACCOUNT_FORGOT_PASSWORD } from '@/constants/Backend_Slugs';
import { LOGIN } from '@/constants/navigation';
import { apiRequestBodyHooks } from '@/hooks/useApiHooks';
import { SubmitForgotPasswordFormType } from '@/types/accountType';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';

const page = () => {
  const [viewPassword, setViewPassword] = useState({ password: false, confirmPassword: false });
  const params = useParams();
  const token = useMemo(() => params.token as string, [params.token]);
  const [forgotPasswordData, setForgotPasswordData] = useState<SubmitForgotPasswordFormType>({
    newPassword: '',
    confirmNewPassword: '',
    token: token
  });
  const { requestBodyHook, isSuccess, isPending } = apiRequestBodyHooks<SubmitForgotPasswordFormType>();
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestBodyHook({ body: forgotPasswordData, path: ACCOUNT_FORGOT_PASSWORD, method: 'POST' });

    if (isSuccess) {
      router.push(LOGIN);
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-full max-w-[450px] border-none bg-transparent">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome to BRGY Core</CardTitle>
          <CardDescription className="text-center">Complete this form to change your password</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-7">
              <div className="grid gap-2">
                <Label htmlFor="newPassword">New Password</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={viewPassword.password ? 'text' : 'password'}
                    name="newPassword"
                    placeholder="New Password"
                    className="mr-12"
                    maxLength={24}
                    value={forgotPasswordData.newPassword}
                    onChange={(e) => setForgotPasswordData((prev) => ({ ...prev, newPassword: e.target.value }))}
                    required
                  />
                  {viewPassword.password ? (
                    <Eye
                      onClick={() => {
                        setViewPassword((prev) => ({ ...prev, password: !prev.password }));
                      }}
                      size={18}
                      className="absolute top-2.5 right-2 cursor-pointer"
                    />
                  ) : (
                    <EyeOff
                      onClick={() => {
                        setViewPassword((prev) => ({ ...prev, password: !prev.password }));
                      }}
                      size={18}
                      className="absolute top-2.5 right-2 cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <div className="relative">
                  <Input
                    id="confirmNewPassword"
                    type={viewPassword.confirmPassword ? 'text' : 'password'}
                    name="confirmNewPassword"
                    placeholder="Confirm New Password"
                    className="mr-12"
                    maxLength={24}
                    value={forgotPasswordData.confirmNewPassword}
                    onChange={(e) => setForgotPasswordData((prev) => ({ ...prev, confirmNewPassword: e.target.value }))}
                    required
                  />
                  {viewPassword.confirmPassword ? (
                    <Eye
                      onClick={() => {
                        setViewPassword((prev) => ({ ...prev, confirmPassword: !prev.confirmPassword }));
                      }}
                      size={18}
                      className="absolute top-2.5 right-2 cursor-pointer"
                    />
                  ) : (
                    <EyeOff
                      onClick={() => {
                        setViewPassword((prev) => ({ ...prev, confirmPassword: !prev.confirmPassword }));
                      }}
                      size={18}
                      className="absolute top-2.5 right-2 cursor-pointer"
                    />
                  )}
                </div>
              </div>
              {isPending ? (
                <Button disabled variant="outline" className="w-full">
                  <Loader2 className="animate-spin" />
                  Submit...
                </Button>
              ) : (
                <Button type="submit" variant="outline" className="w-full">
                  Submit
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
