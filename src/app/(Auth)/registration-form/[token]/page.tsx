'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { apiRequestParamHooks } from '@/hooks/useApiHooks';
import { useContextTheme } from '@/hooks/hooks';
import { useSubmitRegisterFormMutation } from '@/hooks/useMutation';
import { RegisterAccountRequestDTO } from '@/types/accountType';
import { AccountVerificationResponseDTO } from '@/types/accountVerificationType';
import { Loader2 } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

const page = () => {
  const params = useParams();
  const token = params.token as string;
  const { setRegisterAccountData, registerAccountData } = useContextTheme();
  // * fetch account verification data
  const { fetchAccountVerification } = apiRequestParamHooks();
  const { data } = fetchAccountVerification(token);
  const { resident, email } = data;

  // * send
  const { mutate, isPending } = useSubmitRegisterFormMutation();

  console.log('Token: ', data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalPayload: RegisterAccountRequestDTO = { ...registerAccountData, token: token, role: ['user'] };
    const formData = new FormData();
    // if (imgUrl != null) {
    //   formData.append('file', imgUrl);
    // }
    // const mappedAccount = accountMapper(accountData);
    formData.append('body', new Blob([JSON.stringify(finalPayload)], { type: 'application/json' }));
    mutate(formData);
  };

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center h-full">
  //       <div className="w-full max-w-[450px]">
  //         <div className="flex flex-col items-center">
  //           <Skeleton className="h-12 w-[80%] mb-6" />
  //           <Skeleton className="h-8 w-full mb-12" />
  //         </div>
  //         <Skeleton className="h-8 w-24 mb-4" />
  //         <Skeleton className="h-8 w-full mb-8" />
  //         <Skeleton className="h-8 w-24 mb-4" />
  //         <Skeleton className="h-8 w-full mb-8" />
  //       </div>
  //     </div>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <div className="absolute inset-0 flex flex-col items-center justify-center">
  //       <p className="text-md font-bold mb-6">{error?.message}</p>
  //       <Button onClick={() => router.push(LOGIN)} variant="outline">
  //         Back to Login
  //       </Button>
  //     </div>
  //   );
  // }

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-12 gap-12 justify-center h-full">
      <Field className="h-full flex flex-col items-center justify-center">
        <FieldSet>
          <FieldLegend>Resident</FieldLegend>
          <FieldDescription>This contains your personal data, reminder that this part is not editable</FieldDescription>
        </FieldSet>
        <Field orientation="horizontal">
          <FieldLabel>Full Name</FieldLabel>
          <FieldDescription>{resident?.fullname}</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <FieldLabel>Gender</FieldLabel>
          <FieldDescription>{resident?.gender}</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <FieldLabel>Birth Date</FieldLabel>
          <FieldDescription>{resident?.birth_date}</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <FieldLabel>Birth Place</FieldLabel>
          <FieldDescription>{resident?.birth_place}</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <FieldLabel>Address</FieldLabel>
          <FieldDescription>{resident?.address}</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <FieldLabel>Contact No</FieldLabel>
          <FieldDescription>{resident?.contact_no}</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <FieldLabel>Voter</FieldLabel>
          <FieldDescription>{resident?.voter_status ? 'Yes' : 'No'}</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <FieldLabel>Citizenship</FieldLabel>
          <FieldDescription>{resident?.citizenship}</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <FieldLabel>PWD</FieldLabel>
          <FieldDescription>{resident?.pwd ? 'Yes' : 'No'}</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <FieldLabel>OSY - Out of School Youth</FieldLabel>
          <FieldDescription>{resident?.osy ? 'Yes' : 'No'}</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <FieldLabel>Civil Status</FieldLabel>
          <FieldDescription>{resident?.civil_status}</FieldDescription>
        </Field>
      </Field>
      <Field className="h-full flex flex-col items-center justify-center">
        <FieldSet>
          <FieldLegend>Account Details</FieldLegend>
          <FieldDescription>Fill up the form to complete your registration</FieldDescription>
        </FieldSet>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="Enter email..." value={email} disabled />
        </Field>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input
            id="username"
            type="text"
            placeholder="Enter username..."
            value={registerAccountData?.username}
            onChange={(e) => setRegisterAccountData((prev) => ({ ...prev, username: e.target.value }))}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter password..."
            value={registerAccountData?.password}
            onChange={(e) => setRegisterAccountData((prev) => ({ ...prev, password: e.target.value }))}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Enter confirm password..."
            value={registerAccountData?.confirmPassword}
            onChange={(e) => setRegisterAccountData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
          />
        </Field>
        {isPending ? (
          <Button disabled variant="outline" className="w-fit">
            <Loader2 className="animate-spin" />
            Submit...
          </Button>
        ) : (
          <Button type="submit" variant="outline" className="w-fit">
            Submit
          </Button>
        )}
      </Field>
    </form>
  );
};

export default page;
