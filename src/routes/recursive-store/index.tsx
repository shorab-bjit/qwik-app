import { component$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const store = useStore({ counter: { count: 0 } }, { recursive: true });
  //! here we add {recursive: true} so it will work recursively
  return (
    <>
      <h2>Example of recursive store</h2>
      <Display counter={store.counter} />
      <button onClick$={() => store.counter.count++}>+1</button>
      <hr />

      <Link class="mindblow" href="/serialization/">
        View Example of Serialization 🤯
      </Link>
    </>
  );
});

interface DisplayProps {
  counter: { count: number };
}
export const Display = component$((props: DisplayProps) => {
  return <p>Count: {props.counter.count}</p>;
});
