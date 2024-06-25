import sql from "better-sqlite3";

const db = sql("meals.db");
import slugify from "slugify";
import xss from "xss";

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export default function saveMeal(meal) {
  const slug = slugify(meal.title, { lower: true });
  const instructions = xss(meal.instructions);
  meal.slug = slug;
  meal.instructions = instructions;
}
