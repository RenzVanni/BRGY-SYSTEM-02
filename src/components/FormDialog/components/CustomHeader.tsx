import React from 'react';
import { DialogDescription, DialogHeader, DialogTitle } from '../../ui/dialog';
import { CircleUserRound } from 'lucide-react';
import Image from 'next/image';
import { Label } from '../../ui/label';
import { useFullname } from '@/hooks/customHooks';
import { useContextTheme } from '@/hooks/hooks';

export const CreateResidentHeader = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Create Resident</DialogTitle>
        <DialogDescription>Create resident here. Click save when you're done.</DialogDescription>
      </DialogHeader>
    </>
  );
};

export const EditResidentHeader = ({ picture }: { picture: string | File }) => {
  const { previewImg } = useContextTheme();
  const fullname = useFullname();
  const validPicture = previewImg ?? (picture as string);
  return (
    <>
      {validPicture ? (
        <Label
          htmlFor="picture"
          className="rounded-full w-[70px] h-[70px] overflow-hidden absolute top-[-35px] left-6 cursor-pointer hover:opacity-50">
          <Image src={validPicture} alt="image" fill style={{ objectFit: 'cover' }} />
        </Label>
      ) : (
        <Label htmlFor="picture" className="cursor-pointer hover:opacity-50">
          <CircleUserRound className="rounded-full w-[70px] h-[70px] overflow-hidden absolute top-[-35px] left-6" />
        </Label>
      )}
      <DialogHeader>
        <DialogTitle className="capitalize">{fullname}</DialogTitle>
      </DialogHeader>
    </>
  );
};

export const CreateCertificateHeader = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Create Certificate/Clearance</DialogTitle>
        <DialogDescription>Create your certificate/clearance here. Click save when you're done.</DialogDescription>
      </DialogHeader>
    </>
  );
};
