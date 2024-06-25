import classes from "./page.module.css";
import Image from "next/image";
import mealsImg from "@/assets/icons/meal.png";
import eventsImg from "@/assets/icons/events.png";
import communityImg from "@/assets/icons/community.png";

const CommunityPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One Shared Passion : <span className={classes.highlight}> Food</span>
        </h1>
        <p>Join Our Community and Share Your Favourite Recipes!</p>
      </header>
      {/* main block  */}
      <main className={classes.main}>
        <h2>Community Perks</h2>
        <ul className={classes.perks}>
          <li>
            <Image src={mealsImg} alt="a meals img " />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image src={communityImg} alt="a community image " />
            <p>Find new friends & like minded-people</p>
          </li>
          <li>
            <Image src={eventsImg} alt="a events image" />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default CommunityPage;
