// import { Row } from "@tanstack/react-table";

// export const useEditResident = async (row: Row<any>) => {
//   setIsFormDialog({ dialogBoxType: "editResident", isOpen: true });
//   let residentId: number;
//   if (row.original.resident_id != null) {
//     residentId = row.original.resident_id;
//   } else if (typeof row.original.id == "number") {
//     residentId = row.original.id;
//   }

//   const response = await fetchResidentById(residentId);
//   setResidentData(response);
// };
