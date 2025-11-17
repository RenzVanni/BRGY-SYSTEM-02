import { ContextTheme } from '@/config/config_context';
import { useContext } from 'react';
import { useGet, usePaginate } from './useQuery';
import {
  accountMapper,
  accountMapperForData,
  accountRequestMapper,
  mapResidents,
  updateOfficialRequestDTOMapper
} from './mapper';
import {
  ACCOUNT_FORGOT_PASSWORD,
  ACCOUNT_PATH,
  ACCOUNT_REGISTER,
  ACCOUNT_UPDATE,
  NOTIFICATIONS_SEND_FORGOT_PASSWORD_LINK,
  NOTIFICATIONS_SEND_REGISTRATION_LINK,
  OFFICIALS_ADD,
  OFFICIALS_UPDATE,
  RESIDENTS_ADD,
  RESIDENTS_UPDATE
} from '@/constants/Backend_Slugs';
import { AccountColumnModel, AccountRequestDTO, AccountType } from '@/types/accountType';
import { ResidentColumnModel, ResidentType } from '@/types/residentsType';
import { PostRequestParamType, RequestBodyType, SuccessResponse, TableColumnData } from '@/types/commonType';
import { OfficialsColumnModel, OfficialsType } from '@/types/officialsType';
import { BlotterColumnModel, BlotterType } from '@/types/blotterType';
import { ComplaintColumnModel, ComplaintType } from '@/types/complaintType';
import { DisasterAndEmergencyColumnModel, DisasterAndEmergencyType } from '@/types/disasterAndEmergencyType';
import { HealthAndSanitationColumnModel, HealthAndSanitationType } from '@/types/healthAndSanitationType';
import { IncidentColumnModel, IncidentType } from '@/types/incidentType';
import { mapName } from './methods';
import { mainFindByIdApi } from '@/app/api/mainApi';
import { findAccountVerificationByTokenApi } from '@/app/api/accountApi';
import { useParams } from 'next/navigation';
import { usePostRequestParamMutation, usePostRequestPartMutation, useRequestBodyMutation } from './useMutation';
import toast from 'react-hot-toast';
import { useContextTheme } from './hooks';

/**
 * ! Main Paginate Hook
 * @param path
 * @returns
 */
export const apiPaginateHooks = (path: string) => {
  const { paginateValue } = useContext(ContextTheme);
  const { data } = usePaginate(paginateValue, 2, path);

  /**
   * * Paginate accounts hook
   * @returns
   */
  const paginateAccountsHook = (): TableColumnData<AccountColumnModel> => {
    const payload = data?.data?.map((item) => accountMapperForData(item)) ?? [];
    return { payload: payload, pages: data?.pages };
  };

  /**
   * * Paginate residents hook
   * @returns
   */
  const paginateResidentsHook = (): TableColumnData<ResidentColumnModel> => {
    const payload = data?.data?.map((item) => mapResidents(item)) ?? [];
    return { payload: payload, pages: data?.pages };
  };

  /**
   * * Paginate officials hook
   * @returns
   */
  const paginateOfficialsHook = (): TableColumnData<OfficialsColumnModel> => {
    const payload =
      data?.data?.map((item) => {
        const { id, resident, term_end, term_start, position } = item;
        const fullname = mapName(resident);
        return {
          id: id,
          resident: fullname,
          resident_id: resident.id,
          term_start: term_start,
          term_end: term_end,
          position: position
        };
      }) ?? [];
    return { payload: payload, pages: data?.pages };
  };

  /**
   * * Paginate blotter hook
   * @returns
   */
  const paginateBlotterHook = (): TableColumnData<BlotterColumnModel> => {
    const payload = (data?.data as BlotterType[]) ?? [];
    return { payload: payload, pages: data?.pages };
  };

  /**
   * * Paginate complaint hook
   * @returns
   */
  const paginateComplaintHook = (): TableColumnData<ComplaintColumnModel> => {
    const payload = (data?.data as ComplaintType[]) ?? [];
    return { payload: payload, pages: data?.pages };
  };

  /**
   * * Paginate disaster and emergency hook
   * @returns
   */
  const paginateDAEHook = (): TableColumnData<DisasterAndEmergencyColumnModel> => {
    const payload = (data?.data as DisasterAndEmergencyType[]) ?? [];
    return { payload: payload, pages: data?.pages };
  };

  /**
   * * Paginate health and sanitation hook
   * @returns
   */
  const paginateHASHook = (): TableColumnData<HealthAndSanitationColumnModel> => {
    const payload = (data?.data as HealthAndSanitationType[]) ?? [];
    return { payload: payload, pages: data?.pages };
  };

  /**
   * * Paginate incident hook
   * @returns
   */
  const paginateIncidentHook = (): TableColumnData<IncidentColumnModel> => {
    const payload = (data?.data as IncidentType[]) ?? [];
    return { payload: payload, pages: data?.pages };
  };

  return {
    paginateAccountsHook,
    paginateResidentsHook,
    paginateOfficialsHook,
    paginateBlotterHook,
    paginateComplaintHook,
    paginateDAEHook,
    paginateHASHook,
    paginateIncidentHook
  };
};

export const apiFindByHooks = () => {
  const path = useParams();

  const findAccountVerificationHook = async () => {
    const response = findAccountVerificationByTokenApi(path.token as string);
    return await response;
  };

  return { findAccountVerificationHook };
};

/**
 * ! Main POST Request Param Hook
 * @returns
 */
export const apiPostRequestParamHooks = <T>() => {
  const { mutate, isSuccess, data } = usePostRequestParamMutation<T>();

  const sendEmailNotification = ({ param, path }: PostRequestParamType<T>) => {
    mutate({ param: param, path: path });
  };

  return { sendEmailNotification };
};

/**
 * ! Main Request Body Hook
 * @returns
 */
export const apiRequestBodyHooks = <T>() => {
  const { isFormDialog, residentData, accountData, officialsData } = useContextTheme();
  const { dialogBoxType } = isFormDialog;

  const { mutate, isPending, isSuccess } = useRequestBodyMutation<SuccessResponse, T>();

  const requestBodyHook = ({ body, path, method }: RequestBodyType<T>) => {
    mutate({ body: body, path: path, method: method });
  };

  return { isPending, isSuccess, requestBodyHook };
};

/**
 * ! Main Request Part Hook
 * @returns
 */
export const apiRequestPartHooks = () => {
  const { isFormDialog, residentData, accountData, officialsData } = useContextTheme();
  const { dialogBoxType } = isFormDialog;

  const { mutate, isPending } = usePostRequestPartMutation();
  const formData = new FormData();

  //* create and update resident hook
  const residentRequestPartHook = () => {
    if (residentData?.profile_image_url != null) {
      formData.append('file', residentData?.profile_image_url);
    }
    formData.append(
      'body',
      new Blob(
        [
          JSON.stringify({
            ...residentData,
            profile_image_url: null
          })
        ],
        {
          type: 'application/json'
        }
      )
    );

    if (dialogBoxType == 'editResident') {
      mutate({ formdata: formData, path: RESIDENTS_UPDATE, method: 'PATCH' });
    } else if (dialogBoxType == 'createResident') {
      mutate({ formdata: formData, path: RESIDENTS_ADD, method: 'POST' });
    }
  };

  //* create and update account hook
  const accountRequestPartHook = () => {
    if (accountData?.imgUrl != null) {
      formData.append('file', accountData?.imgUrl);
    }

    if (dialogBoxType == 'editAccount') {
      const mappedAccount = accountMapper(accountData);
      formData.append('body', new Blob([JSON.stringify({ ...mappedAccount })], { type: 'application/json' }));
      mutate({ formdata: formData, path: ACCOUNT_UPDATE, method: 'PUT' });
    } else if (dialogBoxType == 'createAccount') {
      const mappedAccount = accountRequestMapper(accountData);
      formData.append('body', new Blob([JSON.stringify({ ...mappedAccount })], { type: 'application/json' }));
      mutate({ formdata: formData, path: NOTIFICATIONS_SEND_REGISTRATION_LINK, method: 'POST' });
    }
  };

  //* create and update officials hook
  const officialRequestPartHook = () => {
    if (officialsData?.imgurl != null) {
      formData.append('file', officialsData?.imgurl);
    }

    const mappedOfficial = updateOfficialRequestDTOMapper(officialsData);
    formData.append(
      'body',
      new Blob([JSON.stringify({ ...mappedOfficial })], {
        type: 'application/json'
      })
    );

    if (dialogBoxType == 'editOfficial') {
      mutate({ formdata: formData, path: OFFICIALS_UPDATE, method: 'PATCH' });
    } else if (dialogBoxType == 'createOfficial') {
      mutate({ formdata: formData, path: OFFICIALS_ADD, method: 'POST' });
    }
  };

  return { isPending, residentRequestPartHook, accountRequestPartHook, officialRequestPartHook };
};
