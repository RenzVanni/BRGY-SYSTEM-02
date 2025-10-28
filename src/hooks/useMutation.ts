import { loginApi, updateAccountApi } from '@/app/api/accountApi';
import { updateOfficialApi } from '@/app/api/officialsApi';
import { updateResidentApi } from '@/app/api/residentApi';
import { DASHBOARD } from '@/constants/navigation';
import { LoginType } from '@/types/accountType';
import { ErrorResponse, SuccessResponse } from '@/types/commonType';
import { UpdateOfficialRequestDTO } from '@/types/officialsType';
import { ResidentType } from '@/types/residentsType';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

/**
 * * Login mutation
 */
export const loginMutation = () => {
  const router = useRouter();
  return useMutation<SuccessResponse, ErrorResponse, FormData>({
    mutationFn: (formData: FormData) => loginApi(formData),
    onSuccess: (data) => {
      toast.success(data.message);
      router.push(DASHBOARD);
    },
    onError: (err) => {
      if (err.code) {
        toast.error(err.error);
      }
    }
  });
};

/**
 * * Update mutation
 */
export const updateResidentMutation = () => {
  return useMutation<SuccessResponse, ErrorResponse, FormData>({
    mutationFn: (formData: FormData) => updateResidentApi(formData),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      if (err.code) {
        toast.error(err.error);
      }
    }
  });
};

export const updateOfficialMutation = () => {
  return useMutation<SuccessResponse, ErrorResponse, FormData>({
    mutationFn: (formData: FormData) => updateOfficialApi(formData),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      if (err.code) {
        toast.error(err.error);
      }
    }
  });
};

export const updateAccountMutation = () => {
  return useMutation<SuccessResponse, ErrorResponse, FormData>({
    mutationFn: (formData: FormData) => updateAccountApi(formData),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      if (err.code) {
        toast.error(err.error);
      }
    }
  });
};
