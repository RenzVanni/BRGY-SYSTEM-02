import { updateResidentApi } from "@/app/api/residentApi";
import { useMutation } from "@tanstack/react-query";

export const updateResidentMutation = () => {
  return useMutation({
    mutationFn: (formData: FormData) => updateResidentApi(formData),
  });
};
