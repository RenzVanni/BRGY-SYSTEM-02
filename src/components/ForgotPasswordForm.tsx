import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useContextTheme } from '@/hooks/hooks';
import { usePostRequestParamMutation } from '@/hooks/useMutation';
import { apiPostRequestParamHooks } from '@/hooks/apiHooks';
import { NOTIFICATIONS_SEND_FORGOT_PASSWORD_LINK } from '@/constants/Backend_Slugs';

const ForgotPasswordForm = () => {
  const { setIsForgotPasswordOrSignup } = useContextTheme();
  const [emailData, setEmailData] = useState<{ email: string }>({ email: '' });
  const { mutate, isPending } = usePostRequestParamMutation<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ param: emailData?.email, path: NOTIFICATIONS_SEND_FORGOT_PASSWORD_LINK });
  };

  return (
    <Card className="w-full max-w-[350px] border-none bg-transparent">
      <ArrowLeft size={16} className="cursor-pointer" onClick={() => setIsForgotPasswordOrSignup({ prop: 'none' })} />

      <CardHeader>
        <CardTitle className="text-2xl text-center">Forgot Password</CardTitle>
        <CardDescription className="text-center">
          Enter your email below, a link will be send to your email to change your password
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={emailData?.email}
                onChange={(e) => setEmailData((prev) => ({ email: e.target.value }))}
                required
              />
            </div>
            {isPending ? (
              <Button disabled type="submit" className="w-full">
                <Loader2 className="animate-spin" />
                Submitting...
              </Button>
            ) : (
              <Button type="submit" className="w-full cursor-pointer">
                Send
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ForgotPasswordForm;
