/**
 * * Send email registration notification or sign up DTO
 */
export type SendEmailRegistrationPublicDTO = {
  firstname: string;
  middlename: string;
  lastname: string;
  birth_date: string;
  email: string;
};

/**
 * * Send email registration notification for admin role
 */
export type SendEmailRegistrationAdminDTO = {
  email: string;
  resident_id: number;
  is_admin: boolean;
};
