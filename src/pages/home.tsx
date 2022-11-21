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

type TextProps = {
  createdAt: string;
  updatedAt: string;
};

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

  const text = [
    {
      createdAt: "2020-10-12",
      updatedAt: "2020-11-11",
    },
  ];

  return (
    <div>
      <h2>Example of uses reuse component</h2>
      <Input userData={state} />
      <p>User Name: {state.userName}</p>
      <Button onClick$={handleClick$} />
      <p>Button Click: {counter.count}</p>
      <p>Debounce Value: {counter.debounced}</p>

      {text.map((item: TextProps, index) => {
        return (
          <div key={index}>
            <p>Created At: {item.createdAt}</p>
            <p>updated At: {item.updatedAt}</p>
          </div>
        );
      })}
      <hr />
    </div>
  );
});
