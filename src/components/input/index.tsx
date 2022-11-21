import { component$ } from "@builder.io/qwik";

interface UserState {
  userName: string;
}

export const Input = component$((props: { userData: UserState }) => {

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
