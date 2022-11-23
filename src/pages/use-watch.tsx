import { component$, useWatch$, useStore } from "@builder.io/qwik";

export const UseWatch = component$(() => {
  const store = useStore({
    value: "",
    debouncedValue: "",
  });

  useWatch$(({ track }) => {
    // Use track to rerun this function when store's `value` property changes.
    track(() => store.value);
    // Setup a timer to copy `value => debouncedValue` after half a second.
    const timer = setTimeout(() => {
      store.debouncedValue = store.value;
    }, 2000);
    // Return cleanup function in case `value` property changes before time is up.
    return () => {
      // cleanup code
      clearTimeout(timer);
    };
  });
  
  return (
    <div>
      <h2>Example of useWatch hooks</h2>
      <input
        value={store.value}
        onInput$={(event) =>
          (store.value = (event.target as HTMLInputElement).value)
        }
      />
      <br />
      Current value: {store.value}
      <br />
      Debounced value: {store.debouncedValue}
      <hr />
    </div>
  );
});
