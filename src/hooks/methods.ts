import { ResidentType } from '@/types/residentsType';
import { useContextTheme } from './hooks';
import { ResidentDefaultData } from '@/data/defaultData';

export const useFullname = (data: ResidentType): string => {
  if (!data) return '';
  const { firstname, middlename, lastname } = data;

  const checkMiddleName = middlename == undefined ? ' ' : ' ' + middlename + ' ';
  return firstname + checkMiddleName + lastname;
};
