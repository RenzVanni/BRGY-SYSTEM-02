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
