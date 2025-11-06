import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useContextTheme } from '@/hooks/hooks';

const ForgotPasswordForm = () => {
  const { setIsForgotPasswordOrSignup } = useContextTheme();
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
        <form>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" placeholder="Email" required />
            </div>
            {false ? (
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
