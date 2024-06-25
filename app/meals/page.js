import { Suspense } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals.grid";
import { getMeals } from "@/lib/meals";
import classes1 from "./loading.module.css";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created
          <span className={classes.highlight}> by you</span>
        </h1>
        <p> Choose Your recipe by yourself .It is Easy and Fun </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes1.loading}>Meals are loading....</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
