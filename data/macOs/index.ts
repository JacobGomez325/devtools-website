import type { Category } from "~/types/data";
import { browsers } from "./browsers";
//import { databases } from "./database";
//import { devops } from "./devops";
//import { medias } from "./multimedia";
import { programmings } from "./programming";
//import { userfullLink } from "./usefullscript";


export const macItems = [...browsers,...programmings]
export const macItemsDetails:Category[] = [
  { browsers: [...browsers] },
  { programmings: [...programmings] },
];
