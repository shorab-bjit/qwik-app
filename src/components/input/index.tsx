import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.scss?inline";

interface UserState {
  userName: string;
}

export const Input = component$((props: { userData: UserState }) => {
  useStylesScoped$(styles);

  return (
    <div class="a-input">
      <input
        type="text"
        placeholder="Enter User Name"
        onInput$={(ev) =>
          (props.userData.userName = (ev.target as HTMLInputElement).value)
        }
      />
    </div>
  );
});
