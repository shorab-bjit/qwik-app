import { component$ } from "@builder.io/qwik";
import { Home } from "~/pages/home";
import { FetchData } from "~/pages/fetchData";
import { ConditionUses } from "~/pages/condition";
import { RecursiveStore } from "~/pages/recursive-store";
import { SynchronousEvents } from "~/pages/synchronous-enent";
import { ConditionalListeners } from "~/pages/conditional-listeners";
import { Serialization } from "~/pages/Serialization";
import { Serialization2 } from "~/pages/Serialization2";

export const App = component$(() => {
  return (
    <div>
      <Home />
      <SynchronousEvents />
      <ConditionalListeners />
      <RecursiveStore />
      <Serialization />
      <Serialization2 />
      <ConditionUses />
      <FetchData />
    </div>
  );
});
