'use client';
import { findAccountVerificationByTokenApi } from '@/app/api/accountApi';
import { mainFindByIdApi } from '@/app/api/mainApi';
import AuthDetails from '@/components/RegistrationFormComponents/AuthDetails';
import PersonalDetails from '@/components/RegistrationFormComponents/PersonalDetails';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { ACCOUNT_PATH } from '@/constants/Backend_Slugs';
import { LOGIN } from '@/constants/navigation';
import { registrationFormDefaultData } from '@/data/defaultData';
import { useContextTheme } from '@/hooks/hooks';
import { useFindAccountVerificationByToken } from '@/hooks/useQuery';
import { RegistrationFormType } from '@/types/commonType';
import { Loader2 } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

const page = () => {
  const [registrationFormData, setRegistrationFormData] = useState<RegistrationFormType>(registrationFormDefaultData);
  const params = useParams();
  const token = useMemo(() => params.token as string, [params.token]);
  const [isNext, setIsNext] = useState<number>(0);
  const { data, isError, error, isLoading, isSuccess } = useFindAccountVerificationByToken(token);
  const router = useRouter();

  useEffect(() => {
    if (data?.data) {
      setRegistrationFormData((prev) => ({ ...prev, email: data?.data }));
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-[450px]">
          <div className="flex flex-col items-center">
            <Skeleton className="h-12 w-[80%] mb-6" />
            <Skeleton className="h-8 w-full mb-12" />
          </div>
          <Skeleton className="h-8 w-24 mb-4" />
          <Skeleton className="h-8 w-full mb-8" />
          <Skeleton className="h-8 w-24 mb-4" />
          <Skeleton className="h-8 w-full mb-8" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-md font-bold mb-6">{error?.message}</p>
        <Button onClick={() => router.push(LOGIN)} variant="outline">
          Back to Login
        </Button>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-full max-w-[450px] border-none bg-transparent">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome to BRGY Core</CardTitle>
          <CardDescription className="text-center">Complete this form to finalize your registration</CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid gap-7">
              {isNext == 0 && (
                <AuthDetails
                  setIsNext={setIsNext}
                  email={registrationFormData.email}
                  setRegistrationFormData={setRegistrationFormData}
                  registrationFormData={registrationFormData}
                />
              )}
              {isNext == 1 && (
                <PersonalDetails
                  setIsNext={setIsNext}
                  setRegistrationFormData={setRegistrationFormData}
                  registrationFormData={registrationFormData}
                />
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
