import React from "react";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import { Label } from "../ui/label";

export const CreateResidentHeader = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Create Resident</DialogTitle>
        <DialogDescription>
          Create resident here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
    </>
  );
};

type editResidentHeaderProp = {
  imageUrl?: string;
  fullname: string;
};

export const EditResidentHeader = (prop: editResidentHeaderProp) => {
  const { imageUrl, fullname } = prop;
  console.log("IMG Type ", typeof imageUrl);
  return (
    <>
      {imageUrl ? (
        <Label
          htmlFor="picture"
          className="rounded-full w-[70px] h-[70px] overflow-hidden absolute top-[-35px] left-6 cursor-pointer hover:opacity-50"
        >
          <Image
            id="picture"
            src={imageUrl}
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </Label>
      ) : (
        <Label htmlFor="picture" className="cursor-pointer hover:opacity-50">
          <CircleUserRound className="rounded-full w-[70px] h-[70px] overflow-hidden absolute top-[-35px] left-6" />
        </Label>
      )}
      <DialogHeader>
        <DialogTitle>{fullname}</DialogTitle>
      </DialogHeader>
    </>
  );
};

export const CreateCertificateHeader = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Create Certificate/Clearance</DialogTitle>
        <DialogDescription>
          Create your certificate/clearance here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
    </>
  );
};
