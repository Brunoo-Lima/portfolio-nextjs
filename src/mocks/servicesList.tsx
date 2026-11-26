import {
  GlobeIcon,
  LayoutPanelTopIcon,
  MonitorIcon,
  WrenchIcon,
} from "lucide-react";

import { getWhatsAppUrl } from "@/utils/whatsapp";

export const servicesList = [
  {
    id: 1,
    service: "Landing pages",
    icon: <LayoutPanelTopIcon />,
    href: getWhatsAppUrl("landing"),
  },
  {
    id: 2,
    service: "Sites institucionais",
    icon: <GlobeIcon />,
    href: getWhatsAppUrl("site"),
  },
  {
    id: 3,
    service: "Sistemas web",
    icon: <MonitorIcon />,
    href: getWhatsAppUrl("system"),
  },
  {
    id: 4,
    service: "Manutenção",
    icon: <WrenchIcon />,
    href: getWhatsAppUrl("maintenance"),
  },
];
