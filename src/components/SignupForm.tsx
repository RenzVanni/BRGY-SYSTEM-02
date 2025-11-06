import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { useContextTheme } from '@/hooks/hooks';
import { sendRegistrationLinkMutation } from '@/hooks/useMutation';
import { useRouter } from 'next/navigation';
import { LOGIN } from '@/constants/navigation';

const SignupForm = () => {
  const [email, setEmail] = useState<string>('');
  const { mutate, isPending, data, status } = sendRegistrationLinkMutation();
  const { setIsForgotPasswordOrSignup } = useContextTheme();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(email);
  };

  return (
    <Card className="w-full max-w-[350px] border-none bg-transparent">
      <ArrowLeft size={16} className="cursor-pointer" onClick={() => setIsForgotPasswordOrSignup({ prop: 'none' })} />

      <CardHeader>
        <CardTitle className="text-2xl text-center">Signup</CardTitle>
        <CardDescription className="text-center">
          Enter your email below, a link will be send to your email. Click the link and fill up the form to complete
          your signup
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
                onChange={(e) => setEmail(e.target.value)}
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

export default SignupForm;
