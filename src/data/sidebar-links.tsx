import {IconAppointments} from "@/components/common/IconAppointments";
import {IconContacts} from "@/components/common/IconContacts";
import {IconDataAnalytics} from "@/components/common/IconDataAnalytics";
import {IconHelpCenter} from "@/components/common/IconHelpCenter";
import {IconHome} from "@/components/common/IconHome";
import {IconMessages} from "@/components/common/IconMessages";
import {IconSettings} from "@/components/common/IconSettings";
import {IconSubscription} from "@/components/common/IconSubscription";

export const sidebarLinks = [
  {
    icon: <IconHome />,
    title: "Home",
    path: "/",
  },
  {
    icon: <IconAppointments />,
    title: "Appointments",
    path: "/appointments",
  },
  {
    icon: <IconMessages />,
    title: "Messages",
    path: "/messages",
  },
  {
    icon: <IconContacts />,
    title: "Contacts",
    path: "/contacts",
  },
  {
    icon: <IconDataAnalytics />,
    title: "Data Analytics",
    path: "/data-analytics",
  },
  {
    icon: <IconSubscription />,
    title: "Subscription",
    path: "/subscription",
  },
  {
    icon: <IconHelpCenter />,
    title: "Help Center",
    path: "/help-center",
  },
  {
    icon: <IconSettings />,
    title: "Settings",
    path: "/settings",
  },
];
