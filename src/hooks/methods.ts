import { ResidentType } from '@/types/residentsType';

export const mapName = (data: ResidentType): string => {
  if (!data) return '';
  const { firstname, middlename, lastname } = data;

  const checkMiddleName = middlename == undefined ? ' ' : ' ' + middlename + ' ';
  return firstname + checkMiddleName + lastname;
};
