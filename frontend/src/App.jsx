import "./App.css";
import { Title } from './components/title/Title';
function App() {
  const today = new Date();
  const thisMonth = today.toLocaleDateString("en-US", { month: "long" });
  const thisDate = today.getDate();
  const getDay = today.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <>
      <section>
        <Title
        day={getDay}
        date={thisDate}
        month={thisMonth}
        />
      </section>
    </>
  );
}

export default App;
