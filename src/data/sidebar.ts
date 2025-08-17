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

export const sidebar_navigation_data = [
  { id: 0, icon: LayoutDashboard, title: DASHBOARD, slug: DASHBOARD },
  { id: 1, icon: BookUser, title: OFFICIALS, slug: OFFICIALS },
  { id: 2, icon: UsersRound, title: RESIDENTS, slug: RESIDENTS },
  {
    id: 3,
    icon: FileBox,
    title: "Certificate/Clearance",
    option: ChevronDown,
    folders: [
      {
        subId: 0,
        icon: FileChartColumnIncreasing,
        title: "Barangay Clearance",
      },
      {
        subId: 1,
        icon: FileChartColumnIncreasing,
        title: "Certificate of Indigency",
      },
      {
        subId: 2,
        icon: FileChartColumnIncreasing,
        title: "Certificate of Late Birth Registration",
      },
      {
        subId: 3,
        icon: FileChartColumnIncreasing,
        title: "Business Clearance",
      },
    ],
  },
  {
    id: 4,
    icon: MessageSquareWarning,
    title: "Reports",
    option: ChevronDown,
    folders: [
      { subId: 0, icon: ClipboardMinus, title: "Blotter" },
      { subId: 1, icon: ClipboardMinus, title: "Awareness" },
      { subId: 2, icon: ClipboardMinus, title: "Complain" },
    ],
  },
  { id: 5, icon: UserRoundPen, title: ACCOUNT, slug: ACCOUNT },
  {
    id: 6,
    icon: TableOfContents,
    title: CONTENT_MANAGEMENT,
    slug: CONTENT_MANAGEMENT_SLUG,
  },
];
