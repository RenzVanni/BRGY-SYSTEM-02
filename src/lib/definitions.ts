import { z } from 'zod';

export type SessionPayload = {
  id: String;
  email: String;
  firstName: String;
  middleName: String;
  lastName: String;
  password: String;
  address: String;
  role: String;
  expiresAt?: Date;
};

// Login Definitions
export const LoginFormSchema = z.object({
  // email: z.string().email({ message: "Please enter a valid email." }).trim(),
  username: z.string().trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    // .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    // .regex(/[0-9]/, { message: "Contain at least one number." })
    // .regex(/[^a-zA-Z0-9]/, {
    //   message: "Contain at least one special character.",
    // })
    .trim()
});

export const initialState = {
  message: ''
};

export type FormState =
  | {
      errors?: {
        // email?: string[];
        username?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

// Resident Definitions
export const Resident_FormSchema = z.object({
  id: z.string().trim(),
  firstName: z.string().trim(),
  middleName: z.string().trim().nullable(),
  lastName: z.string().trim(),
  birthDate: z.string().date(),
  birthPlace: z.string().trim(),
  gender: z.string().trim(),
  civilStatus: z.string().trim(),
  address: z.string().trim(),
  whatsType: z.string().trim()
});

// export const Resident_FormSchema_Optional = Resident_FormSchema.partial({
//   email: true,
//   middleName: true,
// });

export type Resident_FormState =
  | {
      errors?: {
        id?: string[];
        firstName?: string[];
        middleName?: string[];
        lastName?: string[];
        birthDate?: string[];
        birthPlace?: string[];
        gender?: string[];
        civilStatus?: string[];
        address?: string[];
        whatsType?: string[];
      };
      message?: string;
    }
  | undefined;
