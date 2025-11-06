import { ContextTheme } from '@/config/config_context';
import { useContext } from 'react';
import { usePaginate } from './useQuery';
import { accountMapperForData, mapResidents } from './mapper';
import { ACCOUNT_PATH } from '@/constants/Backend_Slugs';
import { AccountColumnModel } from '@/types/accountType';
import { ResidentColumnModel } from '@/types/residentsType';
import { TableColumnData } from '@/types/commonType';
import { OfficialsColumnModel } from '@/types/officialsType';
import { BlotterColumnModel, BlotterType } from '@/types/blotterType';
import { ComplaintColumnModel, ComplaintType } from '@/types/complaintType';
import { DisasterAndEmergencyColumnModel, DisasterAndEmergencyType } from '@/types/disasterAndEmergencyType';
import { HealthAndSanitationColumnModel, HealthAndSanitationType } from '@/types/healthAndSanitationType';
import { IncidentColumnModel, IncidentType } from '@/types/incidentType';
import { mapName } from './methods';
import { mainFindByIdApi } from '@/app/api/mainApi';
import { findAccountVerificationByTokenApi } from '@/app/api/accountApi';
import { useParams } from 'next/navigation';
import { sendRegistrationLinkMutation } from './useMutation';

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


