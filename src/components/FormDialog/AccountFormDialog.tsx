import { ContextTheme } from "@/config/config_context";
import { ResidentType } from "@/types/residentsType";
import React, { useActionState, useContext, useEffect, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import {
  CreateCertificateHeader,
  CreateResidentHeader,
  EditResidentHeader,
} from "./CustomHeader";
import { Input } from "../ui/input";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { genderData } from "@/data/gender";
import { civilStatusData } from "@/data/civilStatus";
import { Button } from "../ui/button";
import { resident_auth } from "@/app/api/resident_api";
import { ResidentDefaultData } from "@/data/defaultData";
import { Loader2 } from "lucide-react";
import { updateResidentMutation } from "@/hooks/useMutation";
import { AccountType } from "@/types/accountType";

const AccountFormDialog = () => {
  const { accountData, setAccountData } = useContext(ContextTheme);
  // const { data } = useFindResidentById(residentId);

  console.log("Edit Account: ", accountData);

  const { id, username, email, resident_id, role } = accountData;

  // const checkMiddleName = middlename == null ? " " : " " + middlename + " ";
  // const fullname = firstname + checkMiddleName + lastname;

  const { isFormDialog, setIsFormDialog } = useContext(ContextTheme);
  const { isOpen, dialogBoxType } = isFormDialog;

  const handleOnOpenChange = (open: boolean) => {
    setIsFormDialog({ isOpen: open, dialogBoxType: "none" });
    setAccountData({} as AccountType);
  };

  const [previewImg, setPreviewImg] = useState(null);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => handleOnOpenChange(open)}>
      <DialogContent className={`${isOpen && "pt-12"}`} aria-describedby="">
        {dialogBoxType == "createAccount" && <CreateResidentHeader />}
        {dialogBoxType == "editAccount" && (
          <EditResidentHeader
            // imageUrl={previewImg || profile_image_url}
            fullname={username}
          />
        )}

        <form className="grid gap-4">
          <CustomInput
            label="Username"
            name="username"
            placeholder="Enter Username..."
            value={username}
            type="text"
            setAccountData={setAccountData}
          />

          <CustomInput
            label="Email"
            name="email"
            placeholder="Enter Email..."
            value={email}
            type="text"
            setAccountData={setAccountData}
          />

          {/* <Input
            id="picture"
            type="file"
            onChange={(e) => {
              setPreviewImg(URL.createObjectURL(e.target.files[0]));
              setResidentData((prev) => ({
                ...prev,
                profile_image_url: e.target.files?.[0],
              }));
            }}
            hidden
          /> */}

          <Input type="hidden" name="whatsType" value={dialogBoxType ?? ""} />
          <Input type="hidden" name="resident_id" value={resident_id} />
          <Input type="hidden" name="id" value={id} />

          <div
            className={`flex items-center gap-3 ${
              isFormDialog.dialogBoxType == "editResident"
                ? "justify-end"
                : "justify-end"
            }`}
          >
            {isFormDialog.dialogBoxType == "editResident" && (
              <Button
                // disabled={pending}
                variant="destructive"
                className="w-fit"
              >
                Delete
              </Button>
            )}
            {/* {isPending ? (
              <Button disabled type="submit" className="w-fit">
                <Loader2 className="animate-spin" />
                Save...
              </Button>
            ) : (
              <Button type="submit" className="w-fit">
                Save
              </Button>
            )} */}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AccountFormDialog;
