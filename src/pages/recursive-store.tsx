import { component$, useStore } from "@builder.io/qwik";

export const RecursiveStore = component$(() => {
  const store = useStore({ counter: { count: 0 } }, { recursive: true });
  //! here we add {recursive: true} so it will work recursively
  return (
    <>
      <h5>Example of recursive store</h5>
      <Display counter={store.counter} />
      <button onClick$={() => store.counter.count++}>+1</button>
      <hr />
    </>
  );
});

interface DisplayProps {
  counter: { count: number };
}
export const Display = component$((props: DisplayProps) => {
  return <p>Count: {props.counter.count}</p>;
});
