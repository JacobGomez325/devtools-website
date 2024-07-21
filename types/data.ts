export interface DataItem {
  name:string;
  description:string;
  image:string;
  link:string;
}


interface Item {
  name: string;
  description: string;
  image: string;
  link: string;
}

export interface Category {
  [key: string]: Item[];
}