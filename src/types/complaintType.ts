/**
 * * Complaint Type
 */
export type ComplaintType = {
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

  time: string;
  date: string;
  location: string;
  statement_of_complaint: string;
  evidence: string;
  type: string;
  relief: string;
  action: string;
};

/**
 * * Complaint table column model
 */
export type ComplaintColumnModel = {
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

  time: string;
  date: string;
  location: string;
  statement_of_complaint: string;
  evidence: string;
  type: string;
  relief: string;
  action: string;
};
