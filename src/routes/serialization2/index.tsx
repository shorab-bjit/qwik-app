import {
  component$,
  // NoSerialize,
  // noSerialize,
  QRL,
  $,
  useStore,
} from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface AppStore {
  time: null | string;
  timerId: any;
  cleanup: QRL<(id: number) => void>;
}
export default component$(() => {
  const store = useStore<AppStore>({
    time: null,
    timerId: null,
    cleanup: $((timerId) => clearInterval(timerId)),
  });
  return (
    <div>
      <h2>Example of Serialization Graph 2</h2>
      <div>Current Time: {store.time}</div>

      <button
        onClick$={() => {
          const id = setInterval(
            () => (store.time = new Date().toString()),
            1000
          );
          store.timerId = id;
          // assign a cleanup function to: store.cleanup
          //store.cleanup(id);
        }}
      >
        start
      </button>
      <button
        onClick$={() => {
          store.cleanup && store.cleanup(store.timerId);
        }}
      >
        stop
      </button>

      <hr />

      <Link class="mindblow" href="/no-serialization/">
        View Example of no Serialization 🤯
      </Link>
    </div>
  );
});
