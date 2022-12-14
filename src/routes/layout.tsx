import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://qwik.builder.io/docs/getting-started/" target="_blank">
          Qwik Documentation
        </a>
      </footer>
    </>
  );
});
