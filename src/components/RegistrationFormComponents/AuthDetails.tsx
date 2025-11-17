import React, { useEffect, useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Eye, EyeOff } from 'lucide-react';
import { useParams, usePathname } from 'next/navigation';
import { apiFindByHooks } from '@/hooks/apiHooks';
import { useFindAccountVerificationByToken } from '@/hooks/useQuery';
import { RegistrationFormType } from '@/types/accountType';

const AuthDetails = ({
  setIsNext,
  setRegistrationFormData,
  registrationFormData,
  email
}: {
  setIsNext: React.Dispatch<React.SetStateAction<number>>;
  setRegistrationFormData: React.Dispatch<React.SetStateAction<RegistrationFormType>>;
  registrationFormData: RegistrationFormType;
  email: string;
}) => {
  const [viewPassword, setViewPassword] = useState({ password: false, confirmPassword: false });

  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="username"
          name="username"
          placeholder="Username"
          value={registrationFormData?.username}
          onChange={(e) => setRegistrationFormData((prev) => ({ ...prev, username: e.target.value }))}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" value={email} placeholder="Email" disabled required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={viewPassword.password ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className="mr-12"
            maxLength={24}
            value={registrationFormData?.password}
            onChange={(e) => setRegistrationFormData((prev) => ({ ...prev, password: e.target.value }))}
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
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={viewPassword.confirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={registrationFormData?.confirmPassword}
            onChange={(e) => setRegistrationFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
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
      <div className="flex justify-end w-full">
        <Button onClick={() => setIsNext(1)} variant="outline" className="cursor-pointer">
          Next
        </Button>
      </div>
    </>
  );
};

export default AuthDetails;
