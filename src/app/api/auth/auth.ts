'use server';
import { LoginFormSchema, FormState, Resident_FormState, Resident_FormSchema } from '@/lib/definitions';
import axios from 'axios';
import { redirect } from 'next/navigation';
import { createSession, deleteSession, setSession } from '@/lib/session';
import { DASHBOARD, LOGIN, RESIDENTS } from '@/constants/navigation';
import { instance } from '@/app/api/config/axios_config';
import { ACCOUNT_PATH, LOGIN_SLUG } from '@/constants/Backend_Slugs';
import { cookies } from 'next/headers';
import { FormEvent } from 'react';

export const loginAuth = async (previousState: any, formData: FormData) => {
  const validateFields = LoginFormSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password')
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors
    };
  }
  const query = encodeURIComponent(`${ACCOUNT_PATH}/login`);
  const response = await fetch(`http://localhost:8222/api/v1/accounts/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ ...validateFields.data })
  });

  const data = response.json();

  if (!response.ok) {
    console.log('data: ', data);
    // return data;
  }
  if (response.ok) {
    return data;
  }
};

// export const fetchToken = async () => {
//   const cookieHeader = (await cookies()).toString();
//   // console.log("fetch officials: ", cookieHeader);

//   try {
//     const response = await fetch(process.env.BACKEND_DEV_URL + '/accounts/token', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Cookie: cookieHeader
//       }
//     });

//     if (response.status == 200) {
//       const data = await response.text();
//       console.log('Token data: ', data);
//       return data;
//     }
//   } catch (error: any) {
//     console.log('Fetch error: ', error.status);
//     if (error.status == 401) {
//       redirect(DASHBOARD);
//     }
//   }
// };

// export const logout_auth = async () => {
//   const response = await instance.get('/accounts/logout');

//   const data = response.data;
//   redirect(LOGIN);
//   // await deleteSession();
// };
