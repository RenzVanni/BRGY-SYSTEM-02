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
import { resident_auth } from "@/app/api/resident_api";
import { civilStatusData } from "@/data/civilStatus";
import { genderData } from "@/data/gender";
import { Checkbox } from "./ui/checkbox";
import { ResidentProp } from "@/props/Resident_Prop";
import { ContextTheme } from "@/config/config_context";

type Prop = {
  data?: ResidentProp;
  // isOpen: boolean;
  // setIsOpen: Dispatch<SetStateAction<boolean>>;
  is_Add_Resident: boolean;
  is_Edit_Resident: boolean;
  is_Create_Certificate: boolean;
  whatsType: string;
};

type PartialExcept<T> = Partial<T>;

const CustomDialog = ({
  data,
  // isOpen,
  // setIsOpen,
  is_Add_Resident,
  is_Edit_Resident,
  is_Create_Certificate,
  whatsType = "",
}: PartialExcept<Prop>) => {
  const [state, action, pending] = useActionState(resident_auth, undefined);
  const { residentData } = useContext(ContextTheme);
  const [resident, setResident] = useState<ResidentProp>({} as ResidentProp);

  useEffect(() => {
    setResident(residentData);
  }, [residentData]);

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
  // useEffect(() => {
  //   if (pending) {
  //     setIsOpen(false);
  //   }
  // }, [pending, data]);

  console.log("Resident in Edit: ", resident);

  const fullname = firstname + checkMiddleName + lastname;
  const { isDialogBox, setIsDialogBox } = useContext(ContextTheme);

  return (
    <Dialog
      open={isDialogBox.isOpen}
      onOpenChange={() => setIsDialogBox({ isOpen: false })}
    >
      <DialogContent
        className={`${is_Edit_Resident && "pt-12"}`}
        aria-describedby=""
      >
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
                value={firstname}
                onChange={(e) =>
                  setResident((prev) => ({
                    ...prev,
                    firstname: e.target.value,
                  }))
                }
                required
              />
              <Input
                id="middleName"
                type="text"
                name="middleName"
                placeholder="Middle name..."
                value={checkMiddleName}
                onChange={(e) =>
                  setResident((prev) => ({
                    ...prev,
                    middlename: e.target.value,
                  }))
                }
              />
              <Input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last name..."
                value={lastname}
                onChange={(e) =>
                  setResident((prev) => ({
                    ...prev,
                    lastname: e.target.value,
                  }))
                }
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
                value={email}
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
              value={address}
              onChange={(e) =>
                setResident((prev) => ({
                  ...prev,
                  address: e.target.value,
                }))
              }
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
              value={birth_place}
              onChange={(e) =>
                setResident((prev) => ({
                  ...prev,
                  birth_place: e.target.value,
                }))
              }
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
              value={birth_date}
              onChange={(e) =>
                setResident((prev) => ({
                  ...prev,
                  birth_date: e.target.value,
                }))
              }
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="gender">Gender</Label>
            <Select
              value={gender}
              onValueChange={(e) =>
                setResident((prev) => ({
                  ...prev,
                  gender: e,
                }))
              }
              name="gender"
            >
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
            <Select
              value={`${civil_status}`}
              onValueChange={(e) =>
                setResident((prev) => ({
                  ...prev,
                  civil_status: e,
                }))
              }
              name="civilStatus"
            >
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
              value={contact_no}
              onChange={(e) =>
                setResident((prev) => ({
                  ...prev,
                  contact_no: e.target.value,
                }))
              }
            />
          </div>

          {/* <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="voter_status">Voter Status</Label>
            <Checkbox
              id="voter_status"
              checked={isVoterStatus}
              onCheckedChange={(check) => setIsVoterStatus(!!check)}
              name="voter_status"
              required
              className="col-span-2"
              value={voter_status}
            />
          </div> */}

          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="citizenship">Citizenship</Label>
            <Input
              id="citizenship"
              type="text"
              name="citizenship"
              required
              className="col-span-2"
              value={citizenship}
              onChange={(e) =>
                setResident((prev) => ({
                  ...prev,
                  citizenship: e.target.value,
                }))
              }
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
