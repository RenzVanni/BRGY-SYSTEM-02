import {
  ACCOUNT,
  CONTENT_MANAGEMENT,
  CONTENT_MANAGEMENT_SLUG,
  DASHBOARD,
  OFFICIALS,
  RESIDENTS,
} from "@/constants/navigation";
import {
  LayoutDashboard,
  BookUser,
  UsersRound,
  MessageSquareWarning,
  UserRoundPen,
  TableOfContents,
  ChevronDown,
  FileBox,
  FileChartColumnIncreasing,
  ClipboardMinus,
} from "lucide-react";

export const SIDEBAR_DATA = {
  navMain: [
    {
      title: DASHBOARD,
      url: DASHBOARD,
      icon: LayoutDashboard,
    },
    {
      title: OFFICIALS,
      url: OFFICIALS,
      icon: BookUser,
    },
    {
      title: RESIDENTS,
      url: RESIDENTS,
      icon: UsersRound,
    },
  ],
  navDocuments: [
    {
      title: "Certificate/Clearance",
      icon: FileBox,
      item: [
        { title: "Barangay Clearance" },
        { title: "Certificate of Indigency" },
        { title: "Certificate of Late Birth Registration" },
        { title: "Business Clearance" },
      ],
    },
    {
      title: "Reports",
      icon: MessageSquareWarning,
      item: [
        { title: "Blotter" },
        { title: "Awareness" },
        { title: "Complain" },
      ],
    },
  ],
  navSecondary: [
    {
      title: ACCOUNT,
      url: ACCOUNT,
      icon: UserRoundPen,
    },
    {
      title: CONTENT_MANAGEMENT,
      url: CONTENT_MANAGEMENT_SLUG,
      icon: TableOfContents,
    },
  ],
};
