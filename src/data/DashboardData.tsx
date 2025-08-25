import { OfficialsModel } from "@/config/officials/columns";

export const statisticsCardData = [
  {
    description: "Residents",
    value: 1000000,
  },
  {
    description: "Blotter",
    value: 99,
  },
  {
    description: "Complaint",
    value: 59,
  },
  {
    description: "Awareness",
    value: 89,
  },
];

export const fetchOfficials = async (): Promise<OfficialsModel[]> => {
  return [
    {
      id: 1,
      resident_id: 1,
      term_start: "2025-03-12",
      term_end: "2026-12-01",
      position: "Midlane",
    },
    {
      id: 2,
      resident_id: 2,
      term_start: "2025-11-02",
      term_end: "2026-02-19",
      position: "Botlane",
    },
    {
      id: 3,
      resident_id: 3,
      term_start: "2025-07-22",
      term_end: "2026-10-11",
      position: "Toplane",
    },
    {
      id: 4,
      resident_id: 4,
      term_start: "2025-08-10",
      term_end: "2026-05-18",
      position: "Jungle",
    },
  ];
};
