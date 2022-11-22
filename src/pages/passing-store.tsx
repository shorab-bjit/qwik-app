import { component$, useStore } from "@builder.io/qwik";

interface CountStore {
  count: number;
}
export const PassingStore = component$(() => {
  const store = useStore<CountStore>({ count: 0 });

  return (
    <div>
      <h2>Example passing state as props</h2>
      <p>
        A best practice to follow in Qwik features passing a store to child
        components rather than individual primitives. When you use primitives,
        the parent component needs to rerender just to pass in the new value.
        When you pass in a store, the parent component doesn't need to rerender.
      </p>
      <button onClick$={() => store.count++}>+1</button>
      <Display state={store} />
      <hr />
    </div>
  );
});

interface DisplayProps {
  count: number;
}
export const Display = component$((props: { state: DisplayProps }) => {
  return <div>The count is: {props.state.count}</div>;
});
