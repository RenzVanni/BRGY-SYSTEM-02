/**
 * * Health and Sanitation Type
 */
export type HealthAndSanitationType = {
  id: number;

  reporting_name: string;
  reporting_contact_no: string;

  date: string;
  time: string;
  location: string;

  description: string;
  condition: string;
  recommendations: string;
  endorsement: string;
  concern: string;
  action: string;
};

/**
 * * Health and Sanitation table column model
 */
export type HealthAndSanitationColumnModel = {
  id: number;

  reporting_name: string;
  reporting_contact_no: string;

  date: string;
  time: string;
  location: string;

  description: string;
  condition: string;
  recommendations: string;
  endorsement: string;
  concern: string;
  action: string;
};
