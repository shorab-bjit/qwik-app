import { component$, useStyles$, useStore } from "@builder.io/qwik";
import AppCSS from "./index.css";

export default component$(() => {
  useStyles$(AppCSS);
  const store = useStore({ open: false, siblings: [0] }, { recursive: true });

  return (
    <div class="parent">
      <h2>Example of use useStyles for inline styling</h2>
      <button onClick$={() => (store.open = !store.open)}>toggle</button>
      <button onClick$={() => store.siblings.push(0)}>addSibling</button>
      {store.open ? <Child key="child" /> : null}
      {store.siblings.map(() => (
        <Sibling />
      ))}
    </div>
  );
});

export const Child = component$(() => {
  useStyles$(AppCSS);
  return (
    <div class="child">
      <div>Child</div>
    </div>
  );
});

export const Sibling = component$(() => {
  useStyles$(AppCSS);

  return (
    <div class="sibling">
      <div>Sibling</div>
    </div>
  );
});

