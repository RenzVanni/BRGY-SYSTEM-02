import { updateResidentApi } from "@/app/api/residentApi";
import { useMutation } from "@tanstack/react-query";

export const updateResident = useMutation({
  mutationFn: (formData: FormData) => {
    return updateResidentApi(formData);
  },
});
