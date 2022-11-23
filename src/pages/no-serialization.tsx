import {
  component$,
  noSerialize,
  NoSerialize,
  useStore,
} from "@builder.io/qwik";

interface AppStore {
  time: null | string;
  id: any;
  cleanup: NoSerialize<(id: number) => void>;
}
export const NoSerializeComponent = component$(() => {
  const store = useStore<AppStore>({
    time: null,
    id: null,
    cleanup: undefined,
  });
  return (
    <div>
      <h2>Example of No Serialization</h2>
      <div>Current Time: {store.time}</div>

      <button
        onClick$={() => {
          // @ts-ignore
          const id = setInterval(
            () => (store.time = new Date().toString()),
            1000
          );
          store.id = id;
          store.cleanup = noSerialize((id) => clearInterval(id));
        }}
      >
        start
      </button>
      <button
        onClick$={() => {
          // @ts-ignore
          store.cleanup && store.cleanup(store.id);
          store.cleanup = undefined;
        }}
      >
        stop
      </button>

      <hr />
    </div>
  );
});
