//paginate accounts
export const paginateAccounts = async (page: number) => {
  const response = await fetch(`/api/search?query=/accounts?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  return await response.json();
};
