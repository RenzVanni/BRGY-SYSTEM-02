import { ResidentType } from "@/types/residentsType";

export const mapResidents = (prop: ResidentType) => {
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
    profile_image_url,
  } = prop;
  const middlenameValid = middlename ? " " + middlename + " " : " ";
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
    pwd,
  };
};
