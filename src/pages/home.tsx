import { component$, $, useStore } from "@builder.io/qwik";
import { Input } from "~/components/input";
import { Button } from "~/components/button";

interface UserState {
  userName: string;
}

interface CounterState {
  count: number;
  debounced: number;
}

export const Home = component$(() => {
  const state = useStore<UserState>({
    userName: "",
  });

  const counter = useStore<CounterState>({
    count: 0,
    debounced: 0,
  });

  const handleClick$ = $(() => {
    counter.count++;
  });

  return (
    <div>
      <h5>Example of uses reuse component</h5>
      <Input userData={state} />
      <p>User Name: {state.userName}</p>

      <Button onClick$={handleClick$} />
      <p>Button Click: {counter.count}</p>
      <p>Debounce Value: {counter.debounced}</p>
      <hr />
    </div>
  );
});
