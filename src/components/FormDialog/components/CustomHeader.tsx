import React from 'react';
import { DialogDescription, DialogHeader, DialogTitle } from '../../ui/dialog';
import { CircleUserRound } from 'lucide-react';
import Image from 'next/image';
import { Label } from '../../ui/label';
import { useFullname } from '@/hooks/customHooks';
import { useContextTheme } from '@/hooks/hooks';
import { ResidentType } from '@/types/residentsType';

export const CreateResidentHeader = () => {
  const { isFormDialog } = useContextTheme();
  let title = '';
  if (isFormDialog.dialogBoxType == 'createResident') {
    title = 'Resident';
  }
  if (isFormDialog.dialogBoxType == 'createAccount') {
    title = 'Account';
  }
  if (isFormDialog.dialogBoxType == 'createOfficial') {
    title = 'Official';
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Create {title}</DialogTitle>
        <DialogDescription>Create {title.toLowerCase()} here. Click save when you're done.</DialogDescription>
      </DialogHeader>
    </>
  );
};

export const EditResidentHeader = ({ picture, data }: { picture: string | File; data: ResidentType }) => {
  const { previewImg } = useContextTheme();
  const fullname = useFullname(data);
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

export const ReportsHeader = () => {
  const { isFormDialog } = useContextTheme();
  const { dialogBoxType } = isFormDialog;
  return (
    <>
      <DialogHeader>
        <DialogTitle>Reports</DialogTitle>
      </DialogHeader>
    </>
  );
};
