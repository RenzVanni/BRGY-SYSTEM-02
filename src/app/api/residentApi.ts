//paginate residents
export const paginateResidents = async (page: number) => {
  const response = await fetch(`/api/search?query=/residents?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  return await response.json();
};

export const updateResidentApi = async (formData: FormData) => {
  const response = await fetch(`/api/search?query=/residents/update`, {
    method: "PATCH",
    credentials: "include",
    body: formData,
  });
};
