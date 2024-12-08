import { z } from "zod";

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
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    // .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    // .regex(/[0-9]/, { message: "Contain at least one number." })
    // .regex(/[^a-zA-Z0-9]/, {
    //   message: "Contain at least one special character.",
    // })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

// Resident Definitions
export type Edit_Resident_FormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

const Edit_Resident_FormSchema = z.object({
  id: z.string().trim(),
  firstName: z.string().trim(),
  middleName: z.string().trim(),
  lastName: z.string().trim(),
  birthDate: z.string().date(),
  email: z.string().trim(),
  birthPlace: z.string().trim(),
  sex: z.string().trim(),
  status: z.string().trim(),
});

export const Edit_Resident_FormSchema_Optional =
  Edit_Resident_FormSchema.partial({ email: true, middleName: true });
