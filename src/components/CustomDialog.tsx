import React, { Dispatch, SetStateAction } from "react";
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

type Prop = {
  id: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  firstName: string;
  middleName: string;
  lastName: string;
  picture: string;
  isResident: boolean;
  birthDate: string;
  birthPlace: string;
  email: string;
  address: string;
  status: string;
  sex: string;
};

type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

const CustomDialog = ({
  id,
  isOpen,
  setIsOpen,
  firstName,
  middleName,
  lastName,
  picture,
  isResident,
  birthDate,
  birthPlace,
  email,
  address,
  status,
  sex,
}: PartialExcept<Prop, "setIsOpen">) => {
  const checkMiddleName = middleName == null ? "" : middleName;
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
      <DialogContent className={`${isResident && "pt-12"}`}>
        {isResident ? (
          <>
            {picture ? (
              <Image
                src={picture}
                alt="image"
                width={70}
                height={70}
                className="rounded-full absolute top-[-35px] left-6"
              />
            ) : (
              <CircleUserRound />
            )}
            <DialogHeader>
              <DialogTitle>{firstName}</DialogTitle>
              <DialogDescription>{email}</DialogDescription>
            </DialogHeader>
          </>
        ) : (
          <DialogHeader>
            <DialogTitle>Create Certificate</DialogTitle>
            <DialogDescription>
              Create your certificate/clearance here. Click save when you're
              done.
            </DialogDescription>
          </DialogHeader>
        )}
        <form action="" className="grid gap-4">
          <div className="grid grid-cols-3 items-center gap-2">
            <p>Name</p>
            <div className="grid grid-cols-3 gap-2 col-span-2">
              <Input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First name..."
                defaultValue={firstName}
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
                defaultValue={lastName}
                required
              />
            </div>
          </div>

          {isResident && (
            <div className="grid grid-cols-3 items-center gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="jia@gmail.com"
                required
                className="col-span-2"
                defaultValue={email}
              />
            </div>
          )}

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
            <Label htmlFor="sex">Sex</Label>
            <Select defaultValue={sex && sex} name="sex">
              <SelectTrigger className="col-span-2" id="sex">
                <SelectValue placeholder="Select Sex" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-3 items-center gap-2">
            <Label htmlFor="status">Status</Label>
            <Select defaultValue={status && status} name="status">
              <SelectTrigger className="col-span-2" id="status">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Single">Single</SelectItem>
                <SelectItem value="InRelation">In Relationship</SelectItem>
                <SelectItem value="Married">Married</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Input type="hidden" value={id} />

          <div
            className={`flex items-center ${
              isResident ? "justify-between" : "justify-end"
            }`}
          >
            {isResident && (
              <Button type="button" variant="destructive" className="w-[100px]">
                Delete
              </Button>
            )}
            <Button type="button" variant="outline" className="w-[100px]">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
