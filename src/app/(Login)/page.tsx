'use client';
import React, { useEffect, useState } from 'react';
import { LoginForm } from '@/components/LoginForm';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';
import { useContextTheme } from '@/hooks/hooks';
import SignupForm from '@/components/SignupForm';

const page = () => {
  const { isForgotPasswordOrSignup } = useContextTheme();
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="flex-col item justify-between w-[50%] rounded-2xl p-10 h-full bg-primary hidden md:flex">
        <div>
          <h1 className="text-lg font-semibold">BRGY CORE</h1>
        </div>
        <div>
          <p className="text-lg">
            "Efficient governance, empowered communities—streamlining barangay management for a better tomorrow."
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center md:w-[50%] h-full">
        {isForgotPasswordOrSignup.prop == 'forgotPassword' && <ForgotPasswordForm />}
        {isForgotPasswordOrSignup.prop == 'signup' && <SignupForm />}
        {isForgotPasswordOrSignup.prop == 'none' && <LoginForm />}
      </div>
    </div>
  );
};

export default page;
