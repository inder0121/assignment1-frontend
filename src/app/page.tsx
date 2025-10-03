
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My React App!</h1>
      <p>This is the home page. Use the navigation menu above to explore.</p>
      <Counter start={0} />
    </div>
  );
}
