import { component$, useStore } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

interface CountStore {
  count: number;
}
export default component$(() => {
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

      <Link class="mindblow" href="/synchronous-events/">
        View Example of SynchronousEvents 🤯
      </Link>
    </div>
  );
});

interface DisplayProps {
  count: number;
}

export const Display = component$((props: { state: DisplayProps }) => {
  return <div>The count is: {props.state.count}</div>;
});


export const head: DocumentHead = {
    title: "Example of passing store",
  };
  