import { useQuery } from "@tanstack/react-query";

export const useAccounts = (page: number) =>
  useQuery({
    queryKey: ["accounts", page],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/api/search?query=/accounts?page=${page}`,
        {
          credentials: "include",
        }
      );

      if (!response.ok) {
        return response.status;
      }

      return await response.json();
    },
  });
