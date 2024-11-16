import { TreePalm } from "lucide-react";
import { Book } from "lucide-react";
import { Eye } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
export const sideBarLinks = [
  {
    title: "Overview",
    url: "#",
    icon: Eye,
    isActive: true,
  },
  {
    title: "Tours",
    url: "#",
    icon: TreePalm,
    isActive: false,
    items: [
      {
        title: "Create Tour",
        url: "#",
      },
      {
        title: "All Tours",
        url: "/dashboard/all-tours",
      },
    ],
  },
  {
    title: "Bookings",
    url: "#",
    icon: Book,
    isActive: false,
    items: [
      {
        title: "Pending",
        url: "#",
      },
      {
        title: "Confirmed",
        url: "#",
      },
      {
        title: "Rejected",
        url: "#",
      },
      {
        title: "Archive",
        url: "#",
      },
    ],
  },
  {
    title: "Payments",
    url: "#",
    icon: CircleDollarSign,
    isActive: false,
    items: [
      {
        title: "Overview",
        url: "#",
      },
      {
        title: "Request Payment",
        url: "#",
      },
    ],
  },
];

export const testUser = {
  name: "Abdelrahman Qassem",
  email: "abdelrahman.qassem@gmail.com",
  avatar: "",
};
