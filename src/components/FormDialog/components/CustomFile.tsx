import { Input } from '@/components/ui/input';
import { useContextTheme } from '@/hooks/hooks';
import { AccountType } from '@/types/accountType';
import { OfficialsType } from '@/types/officialsType';
import { ResidentType } from '@/types/residentsType';
import React from 'react';

type Prop = {
  setOfficialsData?: React.Dispatch<React.SetStateAction<OfficialsType>>;
  setAccountData?: React.Dispatch<React.SetStateAction<AccountType>>;
  setResidentData?: React.Dispatch<React.SetStateAction<ResidentType>>;
};

const CustomFile = (prop: Prop) => {
  const { setPreviewImg } = useContextTheme();
  const { setOfficialsData, setAccountData, setResidentData } = prop;
  return (
    <Input
      id="picture"
      type="file"
      onChange={(e) => {
        setPreviewImg(URL.createObjectURL(e.target.files[0]));
        setOfficialsData?.((prev) => ({ ...prev, imgurl: e.target.files?.[0] }));
        setAccountData?.((prev) => ({ ...prev, imgUrl: e.target.files?.[0] }));
        setResidentData?.((prev) => ({ ...prev, profile_image_url: e.target.files?.[0] }));
      }}
      hidden
    />
  );
};

export default CustomFile;
