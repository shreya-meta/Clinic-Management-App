import LibraryBooksIcon from "@mui/icons-material/Person";
export const clinicSidebarData = [
  {
    name: "Admin Setup",
    Icon: LibraryBooksIcon,
    items: [
      {
        name: "Patient Registration",
        link: "/patient-registration",
      },
      {
        name: "Doctor ",
        link: "/doctor",
      },
      {
        name: "Appointment ",
        link: "/appointment",
      },
      // {
      //   name: "Follow Up",
      //   link: "/follow-up",
      //   permission: ["view_follow_up", "add_follow_up", "update_follow_up"],
      // },
    ],
  },
];
export const clinicDoctorSidebarData = [
  {
    name: "Doctor Setup",
    Icon: LibraryBooksIcon,
    items: [
      {
        name: "Appointment ",
        link: "/appointment",
      },
    ],
  },
];
