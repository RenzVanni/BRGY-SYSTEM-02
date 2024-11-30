import { Resident } from "@/config/column_Definition";

export const getResidentsData = async (): Promise<Resident[]> => {
  // Fetch data from your API here.
  return [
    {
      id: "m5gr84i9",
      fullname: "Jia",
      address: "jia 003, zone 4",
      pob: "03/15/2001",
      age: 23,
      status: "single",
    },
    {
      id: "m5gr84i9",
      fullname: "Renz",
      address: "renz 003, zone 4",
      pob: "03/15/2001",
      age: 23,
      status: "single",
    },
    {
      id: "m5gr84i9",
      fullname: "Yul",
      address: "yul 003, zone 4",
      pob: "03/15/2001",
      age: 23,
      status: "single",
    },

    // ...
  ];
};
