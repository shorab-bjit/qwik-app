import { component$, PropFunction } from "@builder.io/qwik";
// import styles from "./index.css?inline";

interface ButtonProps {
    onClick$: PropFunction<() => void>;
  }

export const Button = component$((props: ButtonProps) => {
  //   useStylesScoped$(styles);

  return (
    <div class="a-button">
      <button preventdefault:click onClick$={props.onClick$}>+</button>
    </div>
  );
});
