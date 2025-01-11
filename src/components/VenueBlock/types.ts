import { TFunction } from "react-i18next";
export interface VenueBlockProps {
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
