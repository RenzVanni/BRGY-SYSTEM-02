/**
 * * Incident Type
 */
export type IncidentType = {
  id: number;

  complainant_name: string;
  complainant_birthdate: string;
  complainant_address: string;
  complainant_contact_no: string;

  respondent_name: string;
  respondent_birthdate: string;
  respondent_address: string;
  respondent_contact_no: string;

  witness_name: string;
  witness_birthdate: string;
  witness_address: string;
  witness_contact_no: string;

  reporting_name: string;
  reporting_contact_no: string;

  settlement: string;
  recommendations: string;

  date: string;
  time: string;
  location: string;

  type: string;
  action: string;
  official_id: string;
};

/**
 * * Incident table column model
 */
export type IncidentColumnModel = {
  id: number;

  complainant_name: string;
  complainant_birthdate: string;
  complainant_address: string;
  complainant_contact_no: string;

  respondent_name: string;
  respondent_birthdate: string;
  respondent_address: string;
  respondent_contact_no: string;

  witness_name: string;
  witness_birthdate: string;
  witness_address: string;
  witness_contact_no: string;

  reporting_name: string;
  reporting_contact_no: string;

  settlement: string;
  recommendations: string;

  date: string;
  time: string;
  location: string;

  type: string;
  action: string;
  official_id: string;
};
