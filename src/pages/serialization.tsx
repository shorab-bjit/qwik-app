import { component$, useStore, QRL, $ } from "@builder.io/qwik";

interface ParentStore {
  name: string;
  children: ChildStore[];
  greetNames: QRL<(parent: ParentStore) => void>;
}
interface ChildStore {
  name: string;
  parent: ParentStore;
}

export const Serialization = component$(() => {
  const parent: ParentStore = {
    name: "test from parent store",
    children: [],
    greetNames: $((parent) => alert(parent.name)),
  };

  parent.children = [
    // insert few items here
    {
      name: "test-1",
      parent: {
        name: "test1-parent",
        children: [],
        greetNames: $((parent) => alert(parent.name)),
      },
    },
    {
      name: "test2",
      parent: {
        name: "test2-parent",
        children: [],
        greetNames: $((parent) => alert(parent.name)),
      },
    },
    {
      name: "test3",
      parent: {
        name: "test2-parent",
        children: [],
        greetNames: $((parent) => alert(parent.name)),
      },
    },
  ];

  const parentStore = useStore<ParentStore>(parent, { recursive: true });
  return (
    <div>
      <h2>Example of Serialization Graph</h2>
      <p>
        Stores are serializable as the application is paused on the server and
        resumed on the client.
      </p>
      {parentStore.name}
      <button onClick$={async () => await parentStore.greetNames(parent)}>
        alert
      </button>
      <ul>
        {parentStore.children.map((child) => (
          <li>
            {child.name} -&lt; {child.parent.name}
          </li>
        ))}
      </ul>

      <hr/>
    </div>
  );
});
