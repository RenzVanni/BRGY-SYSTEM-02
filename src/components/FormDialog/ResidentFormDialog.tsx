import { ContextTheme } from "@/config/config_context";
import { ResidentProp } from "@/types/residentsType";
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

const ResidentFormDialog = () => {
  const [state, action, pending] = useActionState(resident_auth, undefined);

  const { residentData, setResidentData } = useContext(ContextTheme);

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
  } = residentData;

  const checkMiddleName = middlename == null ? " " : " " + middlename + " ";
  const fullname = firstname + checkMiddleName + lastname;

  const { isFormDialog, setIsFormDialog } = useContext(ContextTheme);
  const { isOpen, dialogBoxType } = isFormDialog;

  const handleOnOpenChange = (open: boolean) => {
    setIsFormDialog({ isOpen: open, dialogBoxType: "none" });
    setResidentData({} as ResidentProp);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (residentData != null) {
      formData.append("file", residentData.profile_image_url);
    }
    formData.append(
      "resident",
      new Blob([JSON.stringify(residentData)], { type: "application/json" })
    );
    const response = await fetch(`/api/search?query=/residents/update`, {
      method: "PATCH",
      credentials: "include",
      body: formData,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => handleOnOpenChange(open)}>
      <DialogContent className={`${isOpen && "pt-12"}`} aria-describedby="">
        {dialogBoxType == "createResident" && <CreateResidentHeader />}
        {dialogBoxType == "editResident" && (
          <EditResidentHeader
            imageUrl={profile_image_url}
            fullname={fullname}
          />
        )}
        {dialogBoxType == "createCertificate" && <CreateCertificateHeader />}

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid grid-cols-3 items-center gap-2">
            <p>Name</p>
            <div className="grid grid-cols-3 gap-2 col-span-2">
              <Input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First name..."
                value={firstname ?? ""}
                onChange={(e) =>
                  setResidentData((prev) => ({
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
                value={middlename ?? ""}
                onChange={(e) =>
                  setResidentData((prev) => ({
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
                value={lastname ?? ""}
                onChange={(e) =>
                  setResidentData((prev) => ({
                    ...prev,
                    lastname: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <CustomInput
            label="Address"
            name="address"
            placeholder="Enter Address..."
            value={address}
            type="text"
            setResidentData={setResidentData}
          />

          <CustomInput
            label="Birth Place"
            name="birth_place"
            placeholder="Enter birth place..."
            value={birth_place}
            type="text"
            setResidentData={setResidentData}
          />

          <CustomInput
            label="Birth Date"
            name="birth_date"
            placeholder="Enter birth date..."
            value={birth_date}
            type="date"
            setResidentData={setResidentData}
          />

          <CustomSelect
            label="Gender"
            name="gender"
            placeholder="Select Gender"
            value={gender}
            setResidentData={setResidentData}
            data={genderData}
          />

          <CustomSelect
            label="Civil Status"
            name="civil_status"
            placeholder="Select Civil Status"
            value={civil_status}
            setResidentData={setResidentData}
            data={civilStatusData}
          />

          <CustomInput
            label="Contact No"
            name="contact_no"
            placeholder="Enter contact no..."
            value={contact_no}
            type="text"
            setResidentData={setResidentData}
          />

          <CustomInput
            label="Citizenship"
            name="citizenship"
            placeholder="Enter Citizenship..."
            value={citizenship}
            type="text"
            setResidentData={setResidentData}
          />

          <Input type="hidden" name="whatsType" value={dialogBoxType ?? ""} />
          <Input type="hidden" name="id" value={id ?? 0} />

          <div
            className={`flex items-center ${
              isFormDialog.dialogBoxType == "editResident"
                ? "justify-between"
                : "justify-end"
            }`}
          >
            {isFormDialog.dialogBoxType == "editResident" && (
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

export default ResidentFormDialog;
