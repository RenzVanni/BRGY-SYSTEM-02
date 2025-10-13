'use server';
import { instance } from './config/axios_config';
import { redirect } from 'next/navigation';
import { LOGIN, RESIDENTS } from '@/constants/navigation';
import { Resident_FormSchema, Resident_FormState } from '@/lib/definitions';
import { cookies } from 'next/headers';
import { ResidentType } from '@/types/residentsType';
import { paginateResidentsApi } from './residentApi';
import { PaginateApiResponse } from '@/types/commonType';

//format residents for resident table
export const formatFetchedResidents = async (page: number) => {
  const response = await paginateResidentsApi(page);
  const resident: PaginateApiResponse = response;

  const data = resident.data.map((item) => {
    const {
      id,
      firstname,
      middlename,
      lastname,
      gender,
      birth_date,
      birth_place,
      address,
      contact_no,
      voter_status,
      citizenship,
      civil_status,
      osy,
      pwd,
      official_id,
      account_id,
      profile_image_url
    } = item;

    const middlenameValid = middlename ? ' ' + middlename + ' ' : ' ';
    const name = firstname + middlenameValid + lastname;

    return {
      id,
      name,
      gender,
      birth_date,
      birth_place,
      address,
      contact_no,
      voter_status,
      citizenship,
      civil_status,
      osy,
      pwd
    };
  });

  return data;
};

//fetch residents by id
export const fetchResidentById = async (id: number) => {
  try {
    const cookieHeader = (await cookies()).toString();
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/residents/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookieHeader
      }
    });

    if (response.status == 401) {
      redirect(LOGIN);
      return;
    }
    const data = await response.json();

    return data;
  } catch (error: any) {
    console.log('resident getch status: ', error.status);
    throw new Error('Something went wrong fetching residents data!');
  }
};

// add resident
export const resident_auth = async (state: Resident_FormState, formData: FormData) => {
  const validateFields = Resident_FormSchema.safeParse({
    id: formData.get('id'),
    firstName: formData.get('firstName'),
    middleName: formData.get('middleName'),
    lastName: formData.get('lastName'),
    birthDate: formData.get('birthDate'),
    birthPlace: formData.get('birthPlace'),
    gender: formData.get('gender'),
    civilStatus: formData.get('civilStatus'),
    address: formData.get('address'),
    whatsType: formData.get('whatsType')
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors
    };
  }

  if (validateFields.success) {
    try {
      const { firstName, middleName, lastName, birthDate, birthPlace, civilStatus, gender, address, whatsType } =
        validateFields.data;

      const parsedCivilStatus = parseInt(civilStatus);

      if (whatsType == 'create') {
        const response = await instance.post('/residents/add', {
          firstname: firstName,
          middlename: middleName,
          lastname: lastName,
          birth_date: birthDate,
          birth_place: birthPlace,
          civil_status: parsedCivilStatus,
          gender: gender,
          address: address
        });

        const responseData = response.data;

        // if (response.status == 401) {
        //   await deleteSession();
        // }
        // await createSession(responseData);
      }
    } catch (error) {
      // console.log(error);
    }
    redirect(RESIDENTS);
  }
};
