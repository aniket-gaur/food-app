import ImagePicker from "@/components/meals/image-picker";
import classes from "./share.module.css";
import shareMeal from "@/lib/actions";

export default function MealsShare() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share Your <span className={classes.highlight}>Favourite Meals</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required></input>
            </p>
            <p>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required></input>
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
