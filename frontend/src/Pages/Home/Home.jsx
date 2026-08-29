import { Title } from "../../components/Title/Title";
import { CatCards } from "../../components/CatCards/CatCards";
export default function Home() {
  const today = new Date();
  const thisMonth = today.toLocaleDateString("en-US", { month: "long" });
  const thisDate = today.getDate();
  const getDay = today.toLocaleDateString("en-US", { weekday: "long" });
  return (
    <section className="pageWrapper">
      <Title day={getDay} date={thisDate} month={thisMonth} />
      <CatCards />
    </section>
  );
}
