export const paginateOfficialsApi = async (page: number, limit: number) => {
  const response = await fetch(`/api/search?query=/officials?page=${page}&limit=${limit}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  return await response.json();
};
