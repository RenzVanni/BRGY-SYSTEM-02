"use client";
import React, {
  Dispatch,
  SetStateAction,
  useActionState,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import Image from "next/image";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { CircleUserRound } from "lucide-react";
import { ContextTheme } from "@/config/config_context";
import { CIVIL_STATUS_PROP } from "@/constants/CivilStatus_Prop";
import { fetch_civilStatus } from "@/api/civilStatus_api";
import { GENDER_PROP } from "@/constants/Gender_Prop";
import { fetch_gender } from "@/api/gender_api";
import { resident_auth } from "@/api/resident_api";
import { civilStatusData } from "@/data/civilStatus";
import { genderData } from "@/data/gender";

type Prop = {
  id: number;
  firstname: string;
  middlename: string;
  lastname: string;
  gender: string;
  birthDate: string;
  birthPlace: string;
  address: string;
  contactNo: string;
  citizenship: string;
  civilStatus: string;
  voterStatus: string;
  osy: string;
  pwd: string;
  profileImageUrl: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  is_Add_Resident: boolean;
  is_Edit_Resident: boolean;
  is_Create_Certificate: boolean;
  whatsType: string;
};

type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

// const tempo = {
//   id,
//   isOpen,
//   setIsOpen,
//   firstName,
//   middleName,
//   lastName,
//   picture,
//   birthDate,
//   birthPlace,
//   email,
//   address,
//   status,
//   sex,
//   is_Add_Resident,
//   is_Edit_Resident,
//   is_Create_Certificate,
//   whatsType = "",
// };
const CustomDialog = ({
  id,
  firstname,
  middlename,
  lastname,
  gender,
  birthDate,
  birthPlace,
  address,
  contactNo,
  citizenship,
  civilStatus,
  voterStatus,
  osy,
  pwd,
  profileImageUrl,
  isOpen,
  setIsOpen,
  is_Add_Resident,
  is_Edit_Resident,
  is_Create_Certificate,
  whatsType = "",
}: PartialExcept<Prop, "setIsOpen">) => {
  const [state, action, pending] = useActionState(resident_auth, undefined);

  const checkMiddleName = middlename == null ? "" : middlename;
  useEffect(() => {
    if (pending) {
      setIsOpen(false);
    }
  }, [pending]);

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
      <DialogContent className={`${is_Edit_Resident && "pt-12"}`}>
        {is_Add_Resident && (
          <>
            <DialogHeader>
              <DialogTitle>Add Resident</DialogTitle>
              <DialogDescription>
                Add resident here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
          </>
        )}

        {is_Edit_Resident && (
          <>
            {profileImageUrl ? (
              <Image
                src={profileImageUrl}
                alt="image"
                width={70}
                height={70}
                className="rounded-full absolute top-[-35px] left-6"
              />
            ) : (
              <CircleUserRound />
            )}
            <DialogHeader>
              <DialogTitle>{firstname}</DialogTitle>
            </DialogHeader>
          </>
        )}

        {is_Create_Certificate && (
          <>
            <DialogHeader>
              <DialogTitle>Create Certificate/Clearance</DialogTitle>
              <DialogDescription>
                Create your certificate/clearance here. Click save when you're
                done.
              </DialogDescription>
            </DialogHeader>
          </>
        )}

        <form action={action} className="grid gap-4">
          <div className="grid grid-cols-3 items-center gap-2">
            <p>Name</p>
            <div className="grid grid-cols-3 gap-2 col-span-2">
              <Input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First name..."
                defaultValue={firstname}
                required
              />
              <Input
                id="middleName"
                type="text"
                name="middleName"
                placeholder="Middle name..."
                defaultValue={checkMiddleName}
              />
              <Input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last name..."
                defaultValue={lastname}
                required
              />
            </div>
          </div>

          {/* {is_Edit_Resident && (
            <div className="grid grid-cols-3 items-center gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="jia@gmail.com"
                className="col-span-2"
                defaultValue={email}
              />
            </div>
          )} */}

          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              type="text"
              name="address"
              placeholder="Enter address..."
              required
              className="col-span-2"
              defaultValue={address}
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="birth">Birth Place</Label>
            <Input
              id="birthPlace"
              type="text"
              name="birthPlace"
              required
              className="col-span-2"
              placeholder="Enter birth place..."
              defaultValue={birthPlace}
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="birth">Birth Date</Label>
            <Input
              id="birth"
              type="date"
              name="birthDate"
              required
              className="col-span-2"
              defaultValue={birthDate}
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="gender">Gender</Label>
            <Select defaultValue={`${gender}`} name="gender">
              <SelectTrigger className="col-span-2" id="sex">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                {genderData?.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="civilStatus">Civil Status</Label>
            <Select defaultValue={`${civilStatus}`} name="civilStatus">
              <SelectTrigger className="col-span-2" id="status">
                <SelectValue placeholder="Select Civil Status" />
              </SelectTrigger>
              <SelectContent>
                {civilStatusData?.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Input type="hidden" name="whatsType" value={whatsType} />
          <Input type="hidden" name="id" value={id} />

          <div
            className={`flex items-center ${
              is_Edit_Resident ? "justify-between" : "justify-end"
            }`}
          >
            {is_Edit_Resident && (
              <Button
                disabled={pending}
                type="submit"
                variant="destructive"
                className="w-[100px]"
              >
                Delete
              </Button>
            )}
            <Button
              disabled={pending}
              type="submit"
              variant="outline"
              className="w-[100px]"
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
