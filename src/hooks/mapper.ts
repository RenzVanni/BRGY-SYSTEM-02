import { AccountColumnModel, AccountType, UpdateAccountRequestDTO } from '@/types/accountType';
import { MappedResidentType, ResidentType } from '@/types/residentsType';
import { OfficialsType, UpdateOfficialRequestDTO } from '@/types/officialsType';
import { useFullname } from './customHooks';
import { mapName } from './methods';

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

/**
 * * Account
 */
export const accountMapper = (prop: AccountType): UpdateAccountRequestDTO => {
  const { id, username, email, resident, role } = prop;
  return { id: id, username: username, email: email, resident_id: resident?.id, role: role };
};

export const accountMapperForData = (prop: AccountType): AccountColumnModel => {
  const { id, username, email, resident, role, imgUrl } = prop;
  const fullname = mapName(resident);
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

/**
 * * Official
 */
export const updateOfficialRequestDTOMapper = (data: OfficialsType): UpdateOfficialRequestDTO => {
  const { id, resident, term_start, term_end, position } = data;
  return {
    id: id,
    resident_id: resident?.id,
    term_start: term_start,
    term_end: term_end,
    position: position
  };
};
