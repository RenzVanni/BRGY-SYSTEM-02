import { ErrorResponse, SuccessResponse } from '@/types/commonType';
import { UseMutateFunction } from '@tanstack/react-query';
import { accountMapper, updateOfficialRequestDTOMapper } from './mapper';
import { useContextTheme } from './hooks';

export const updateHook = () => {
  const {
    residentData,
    accountData,
    officialsData,
    setResidentData,
    isFormDialog,
    setIsFormDialog,
    previewImg,
    setPreviewImg
  } = useContextTheme();

  /**
   * * Update resident hook
   * @param e
   */
  const onUpdateResident = (
    e: React.FormEvent<HTMLFormElement>,
    mutate: UseMutateFunction<SuccessResponse, ErrorResponse, FormData, unknown>
  ) => {
    const { profile_image_url } = residentData;
    e.preventDefault();

    const formData = new FormData();
    if (profile_image_url != null) {
      formData.append('file', profile_image_url);
    }
    formData.append(
      'resident',
      new Blob([JSON.stringify({ ...residentData, profile_image_url: undefined })], {
        type: 'application/json'
      })
    );
    mutate(formData);
  };

  /**
   * * Update account hook
   * @param e
   * @param mutate
   */
  const onUpdateAccount = (
    e: React.FormEvent<HTMLFormElement>,
    mutate: UseMutateFunction<SuccessResponse, ErrorResponse, FormData, unknown>
  ) => {
    const { imgUrl } = accountData;
    e.preventDefault();

    const formData = new FormData();
    if (imgUrl != null) {
      formData.append('file', imgUrl);
    }
    const mappedAccount = accountMapper(accountData);
    formData.append('body', new Blob([JSON.stringify({ ...mappedAccount })], { type: 'application/json' }));

    mutate(formData);
  };

  /**
   * * Update official hook
   * @param e
   * @param mutate
   */
  const onUpdateOfficial = (
    e: React.FormEvent<HTMLFormElement>,
    mutate: UseMutateFunction<SuccessResponse, ErrorResponse, FormData, unknown>
  ) => {
    const { imgurl } = officialsData;
    const mappedOfficial = updateOfficialRequestDTOMapper(officialsData);
    e.preventDefault();

    const formData = new FormData();
    if (imgurl != null) {
      formData.append('file', imgurl);
    }
    formData.append(
      'body',
      new Blob([JSON.stringify({ ...mappedOfficial })], {
        type: 'application/json'
      })
    );
    mutate(formData);
  };

  return { onUpdateResident, onUpdateAccount, onUpdateOfficial };
};
