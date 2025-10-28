/**
 * * Disaster and Emergency Type
 */
export type DisasterAndEmergencyType = {
  id: number;

  date: string;
  time: string;
  location: string;

  reporting_name: string;
  reporting_contact_no: string;

  affected_area: string;
  injured: number;
  missing: number;
  displaced: number;
  casualties: number;
  damage_assessment: number;
  follow_up_action: string;
  type: string;
  preparedness: string;
  response: string;
  recovery: string;
  agencies: string;
};

/**
 * * Disaster and Emergency table column model
 */
export type DisasterAndEmergencyColumnModel = {
  id: number;

  date: string;
  time: string;
  location: string;

  reporting_name: string;
  reporting_contact_no: string;

  affected_area: string;
  injured: number;
  missing: number;
  displaced: number;
  casualties: number;
  damage_assessment: number;
  follow_up_action: string;
  type: string;
  preparedness: string;
  response: string;
  recovery: string;
  agencies: string;
};
