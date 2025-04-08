import { CiUser } from "react-icons/ci";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

export const nav = [
  { name: "HOME", path: "/" },
  { name: "PRODUCTS", path: "/products" },
  { name: "ABOUT", path: "/about" },
];

export const navIcon = [
  { name: <CiUser />, path: "/register" },
  { name: <MdOutlineAdminPanelSettings />, path: "/admin" },
  { name: <CiHeart />, path: "/" },
  { name: <CiShoppingCart />, path: "/" },
];
