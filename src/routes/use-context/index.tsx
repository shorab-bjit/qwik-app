import {
  component$,
  useContext,
  createContext,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface TodoStore {
  items: string[];
}

interface CountStore {
  count: 0;
}

export const TodoContext = createContext<TodoStore>("Todo");
export const CountContext = createContext<CountStore>("Counts");

export default component$(() => {
  const todoStore = useStore<TodoStore>({
    items: ["Learn Qwik", "Build Qwik app", "Profit"],
  });

  const countStore = useStore<CountStore>({
    count: 0,
  });

  useContextProvider(TodoContext, todoStore);
  useContextProvider(CountContext, countStore);

  return (
    <div>
      <h2>Example of using useContext provider for manage global state</h2>
      <div>Count: {countStore.count}</div>
      <Items />
      <hr />

      <Link class="mindblow" href="/fetch-data/">
        View Example of no Fetch Data 🤯
      </Link>
    </div>
  );
});

export const Items = component$(() => {
  // replace this with context retrieval.
  //const todos = { items: [] };
  const TodoStore = useContext(TodoContext);
  const CounterStore = useContext(CountContext);

  return (
    <>
      <ul>
        {TodoStore.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick$={() => CounterStore.count++}>Increment Count</button>
    </>
  );
});
