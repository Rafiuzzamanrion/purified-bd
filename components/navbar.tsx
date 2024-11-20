import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const Navbar = () => {
  return (
    <NextUINavbar className="bg-teal-600" maxWidth="full" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden p-5 lg:flex gap-5 justify-start bg-teal-600">
          <NavbarItem>
            <Link className="text-white font-bold text-sm hover:border-b-3 hover:border-white" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white font-bold text-sm hover:border-b-3 hover:border-white" href="/personalCare">
              Personal Care
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white font-bold text-sm hover:border-b-3 hover:border-white" href="/organicFood">
              Organic Food
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-white font-bold text-sm hover:border-b-3 hover:border-white"
              href="/electronicGadget"
            >
              Electronic Gadgets
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-white font-bold text-sm hover:border-b-3 hover:border-white"
              href="/sexualWellness"
            >
              Sexual Wellness
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white font-bold text-sm hover:border-b-3 hover:border-white" href="/womensChoice">
              Women's Choice
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white font-bold text-sm hover:border-b-3 hover:border-white" href="/tShirt">
              T-Shirt
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white font-bold text-sm hover:border-b-3 hover:border-white" href="/panjabi">
              Panjabi
            </Link>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-white" />
      </NavbarContent>
      <NavbarMenu className="bg-teal-600">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem>
            <Link className="text-white font-bold text-sm" href="/">
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="text-white font-bold text-sm" href="/personalCare">
              Personal Care
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="text-white font-bold text-sm" href="/organicFood">
              Organic Food
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="text-white font-bold text-sm"
              href="/electronicGadget"
            >
              Electronic Gadgets
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="text-white font-bold text-sm"
              href="/sexualWellness"
            >
              Sexual Wellness
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="text-white font-bold text-sm" href="/womensChoice">
              Women's Choice
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="text-white font-bold text-sm" href="/tShirt">
              T-Shirt
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="text-white font-bold text-sm" href="/panjabi">
              Panjabi
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
