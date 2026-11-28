import { PaletteIcon, SearchIcon, SmartphoneIcon, ZapIcon } from "lucide-react";

export const differentialsList = [
  {
    id: 1,
    title: "Design responsivo",
    description: "Seu site adaptado para celulares, tablets e computadores.",
    icon: <SmartphoneIcon />,
    visual: {
      title: "Multiplataforma",
      description: "Adaptável a diferentes telas",
      labels: ["Mobile", "Desktop"] as [string, string],
      color: "#818cf8",
    },
  },
  {
    id: 2,
    title: "Alta performance",
    description: "Carregamento rápido e uma melhor experiência de navegação.",
    icon: <ZapIcon />,
    visual: {
      title: "Performance",
      description: "Carregamento otimizado",
      labels: ["Speed", "Optimization"] as [string, string],
      color: "#818cf8",
    },
  },
  {
    id: 3,
    title: "Otimização para o Google",
    description:
      "Estrutura preparada para melhorar sua visibilidade nos buscadores.",
    icon: <SearchIcon />,
    visual: {
      title: "Visibilidade",
      description: "Otimização para buscas",
      labels: ["SEO", "Indexação"] as [string, string],
      color: "#818cf8",
    },
  },
  {
    id: 4,
    title: "Design personalizado",
    description:
      "Um site desenvolvido de acordo com a identidade do seu negócio.",
    icon: <PaletteIcon />,
    visual: {
      title: "Identidade visual",
      description: "Design único para sua marca",
      labels: ["UI/UX", "Exclusividade"] as [string, string],
      color: "#818cf8",
    },
  },
];
