import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { useContextTheme } from '@/hooks/hooks';
import { useRequestBodyMutation } from '@/hooks/useMutation';
import { NOTIFICATIONS_SEND_REGISTRATION_LINK } from '@/constants/Backend_Slugs';
import { SuccessResponse } from '@/types/commonType';
import { SendEmailRegistrationPublicDTO } from '@/types/notificationType';

const SignupForm = () => {
  const [formData, setFormData] = useState<SendEmailRegistrationPublicDTO>({
    firstname: '',
    middlename: '',
    lastname: '',
    birth_date: '',
    email: ''
  });
  const { setIsForgotPasswordOrSignup } = useContextTheme();
  const { mutate, isPending } = useRequestBodyMutation<SendEmailRegistrationPublicDTO>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ body: formData, path: NOTIFICATIONS_SEND_REGISTRATION_LINK, method: 'POST' });
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
              <Label htmlFor="firstname">First Name</Label>
              <Input
                id="firstname"
                type="text"
                name="firstname"
                placeholder="First Name"
                onChange={(e) => setFormData((prev) => ({ ...prev, firstname: e.target.value }))}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="middlename">Middle Name</Label>
              <Input
                id="middlename"
                type="text"
                name="middlename"
                placeholder="Middle Name"
                onChange={(e) => setFormData((prev) => ({ ...prev, middlename: e.target.value }))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Last Name"
                onChange={(e) => setFormData((prev) => ({ ...prev, lastname: e.target.value }))}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="birth_date">Birth Date</Label>
              <Input
                id="birth_date"
                type="date"
                name="birth_date"
                onChange={(e) => setFormData((prev) => ({ ...prev, birth_date: e.target.value }))}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
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
