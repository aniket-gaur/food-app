"use client";

import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  //this hook will give the pathname
  const path = usePathname();
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="logo image " priority></Image>
          {/* why logoImg.src ,in nextjs this is stored under src object  */}
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              {/* adding the active functionality  */}
              <Link
                href="/meals"
                className={
                  path.startsWith("/meals") ? classes.active : undefined
                }
              >
                Browse-Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={
                  path.startsWith("/community") ? classes.active : undefined
                }
              >
                Foodie-Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
