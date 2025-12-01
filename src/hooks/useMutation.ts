import { loginApi, logoutAuth, submitRegisterFormApi } from '@/app/api/accountApi';
import { mainFindByIdApi, mainRequestBodyApi, mainRequestParamApi, mainRequestPartApi } from '@/app/api/mainApi';
import { DASHBOARD, LOGIN } from '@/constants/navigation';
import {
  ErrorResponse,
  GetPathVariableType,
  RequestBodyType,
  RequestParamType,
  RequestPartType,
  SuccessResponse
} from '@/types/commonType';
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
        toast.error(err.message);
      }
    }
  });
};

/**
 * * Submit registration form mutation
 * @returns
 */
export const useSubmitRegisterFormMutation = () => {
  const router = useRouter();
  return useMutation<SuccessResponse, ErrorResponse, FormData>({
    mutationFn: (formData: FormData) => submitRegisterFormApi(formData),
    onSuccess: (data) => {
      toast.success(data.message);
      // router.push(LOGIN);
    },
    onError: (err) => {
      if (err.code) {
        toast.error(err.message);
      }
    }
  });
};

/**
 * ! Main Request Body
 * @returns
 */
export const useRequestBodyMutation = <TDATA>() => {
  return useMutation<SuccessResponse, ErrorResponse, RequestBodyType<TDATA>>({
    mutationFn: ({ body, path, method }) => mainRequestBodyApi<TDATA>({ body, path, method }),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      if (err.code) {
        toast.error(err.message);
      }
    }
  });
};

/**
 * ! Main Request Param Mutation
 * @returns
 */
export const useRequestParamMutation = <TPARAM>() => {
  const router = useRouter();
  return useMutation<SuccessResponse, ErrorResponse, RequestParamType<TPARAM>>({
    mutationFn: ({ param, path, method }) => mainRequestParamApi<SuccessResponse, TPARAM>({ param, path, method }),
    onError: (err) => {
      if (err.code) {
        toast.error(err.message);
      }
    }
  });
};

/**
 * ! Main Request Part Mutation
 * @returns
 */
export const usePostRequestPartMutation = () => {
  const router = useRouter();
  return useMutation<SuccessResponse, ErrorResponse, RequestPartType>({
    mutationFn: ({ formdata, path, method }) => mainRequestPartApi({ formdata: formdata, path: path, method: method }),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      if (err.code) {
        toast.error(err.message);
      }
    }
  });
};

export const useGetPathVariableMutation = <TSUCCESS, TDATA>() => {
  const router = useRouter();
  return useMutation<TSUCCESS, ErrorResponse, GetPathVariableType<TDATA>>({
    mutationFn: ({ id, path }) => mainFindByIdApi<TSUCCESS, TDATA>(id, path),
    onError: (err) => {
      if (err.code) {
        toast.error(err.message);
      }
    }
  });
};

/**
 * * Logout mutation
 */
export const logoutMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: () => logoutAuth(),
    onSuccess: () => {
      router.push(LOGIN);
    }
  });
};
