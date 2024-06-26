"use server";
export default async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image").size,
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  console.log(meal);
}
