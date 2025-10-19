import { AccountColumnModel, AccountType, UpdateAccountRequestDTO } from '@/types/accountType';
import { MappedResidentType, ResidentType } from '@/types/residentsType';
import { getFullname } from './methods';

export const mapResidents = (prop: ResidentType): MappedResidentType => {
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
  } = prop;
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
};

export const accountMapper = (prop: AccountType): UpdateAccountRequestDTO => {
  const { id, username, email, resident, role } = prop;
  return { id: id, username: username, email: email, resident_id: resident?.id, role: role };
};

export const accountMapperForData = (prop: AccountType): AccountColumnModel => {
  const { id, username, email, resident, role, imgUrl } = prop;
  const fullname = getFullname(resident?.firstname, resident?.middlename, resident?.lastname);
  return {
    id: id,
    name: fullname,
    username: username,
    email: email,
    resident_id: resident?.id,
    role: role,
    imgUrl: imgUrl
  };
};
