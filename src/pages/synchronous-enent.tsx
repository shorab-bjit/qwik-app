import { component$, useClientEffect$ } from "@builder.io/qwik";

export const SynchronousEvents = component$(() => {
  const openNewWindow = useClientEffect$(() => {
    window.open("http://qwik.builder.io");
  });

  return (
    <div>
      <h2>Example of Synchronous Events</h2>
      {/* 
      this is asynchronous call example
        <a href="/" onClick$={() => window.open("http://qwik.builder.io")}>
          click me!
        </a> 
      */}

      {/* this is synchronous example */}
      <a href="/" onClick$={() => openNewWindow}>
        click me!
      </a>
      <hr />
    </div>
  );
});
