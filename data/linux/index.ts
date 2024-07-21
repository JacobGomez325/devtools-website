import type { Category } from "~/types/data";
import { browsers } from "./browsers";
import { databases } from "./database";
import { devops } from "./devops";
import { medias } from "./multimedia";
import { programmings } from "./programming";
import { userfullLink } from "./usefullscript";


export const linuxItems = [...browsers,...databases,...devops,...medias,...programmings,...userfullLink]
export const linuxItemsDetails:Category[] = [
  { browsers: [...browsers] },
  { databases: [...databases] },
  { devops: [...devops] },
  { medias: [...medias] },
  { programmings: [...programmings] },
  { userfullLink: [...userfullLink] }
];
