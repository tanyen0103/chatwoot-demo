import { ReactNode } from "react";


type SubMenuMenuItem = {
  subMenuItemId: number;
  name: string;
  description: string;
  link: string;
  icon: string | ReactNode;
}

type MenuMenuItem = {
  id: number;
  name: string;
  description: string;
  href: string;
  icon: string | ReactNode;
  children: SubMenuMenuItem[]
}

type NewsMenuMenuItem = {
  id: number;
  name: string;
  children: MenuMenuItem[]
}

type NewsMenuItem = {
  categories: NewsMenuMenuItem[],
  news: SubMenuMenuItem[]
}

type MenuItem = {
  id: number;
  name: string;
  href: string;
  type: number;
  children: MenuMenuItem[] | NewsMenuItem
}

export type {
  MenuItem,
  MenuMenuItem,
  SubMenuMenuItem,
  NewsMenuItem,
  NewsMenuMenuItem
}