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
import { resident_auth } from "@/api/resident_api";
import { civilStatusData } from "@/data/civilStatus";
import { genderData } from "@/data/gender";
import { Checkbox } from "./ui/checkbox";
import { ResidentProp } from "@/props/Resident_Prop";

type Prop = {
  data?: ResidentProp;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  is_Add_Resident: boolean;
  is_Edit_Resident: boolean;
  is_Create_Certificate: boolean;
  whatsType: string;
};

type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

const CustomDialog = ({
  data,
  isOpen,
  setIsOpen,
  is_Add_Resident,
  is_Edit_Resident,
  is_Create_Certificate,
  whatsType = "",
}: PartialExcept<Prop, "setIsOpen">) => {
  const [state, action, pending] = useActionState(resident_auth, undefined);
  const [resident, setResident] = useState<ResidentProp>(data);

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
    citizenship,
    civil_status,
    voter_status,
    osy,
    pwd,
    profile_image_url,
    official_id,
    account_id,
  } = resident ?? ({} as ResidentProp);

  const [isVoterStatus, setIsVoterStatus] = useState<boolean>(voter_status);

  const checkMiddleName = middlename == null ? "" : " " + middlename + " ";
  useEffect(() => {
    if (pending) {
      setIsOpen(false);
    }
  }, [pending, data]);

  console.log("Resident in Edit: ", resident);

  const fullname = firstname + checkMiddleName + lastname;

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
            {profile_image_url ? (
              <Image
                src={profile_image_url}
                alt="image"
                width={70}
                height={70}
                className="rounded-full absolute top-[-35px] left-6"
              />
            ) : (
              <CircleUserRound />
            )}
            <DialogHeader>
              <DialogTitle>{fullname}</DialogTitle>
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
            <Label htmlFor="birth_place">Birth Place</Label>
            <Input
              id="birth_place"
              type="text"
              name="birth_place"
              required
              className="col-span-2"
              placeholder="Enter birth place..."
              defaultValue={birth_place}
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="birth_date">Birth Date</Label>
            <Input
              id="birth_date"
              type="date"
              name="birth_date"
              required
              className="col-span-2"
              defaultValue={birth_date}
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="gender">Gender</Label>
            <Select defaultValue={gender} name="gender">
              <SelectTrigger className="col-span-2" id="gender">
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
            <Label htmlFor="civil_status">Civil Status</Label>
            <Select defaultValue={`${civil_status}`} name="civilStatus">
              <SelectTrigger className="col-span-2" id="civil_status">
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

          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="contact_no">Contact No</Label>
            <Input
              id="contact_no"
              type="text"
              name="contact_no"
              required
              className="col-span-2"
              defaultValue={contact_no}
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="voter_status">Voter Status</Label>
            <Checkbox
              id="voter_status"
              checked={isVoterStatus}
              onCheckedChange={(check) => setIsVoterStatus(!!check)}
              name="voter_status"
              required
              className="col-span-2"
              // defaultValue={voter_status}
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="citizenship">Citizenship</Label>
            <Input
              id="citizenship"
              type="text"
              name="citizenship"
              required
              className="col-span-2"
              defaultValue={citizenship}
            />
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
