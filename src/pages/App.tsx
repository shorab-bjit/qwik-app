import { component$ } from "@builder.io/qwik";
import { Home } from "~/pages/home";
import { PassingStore } from "~/pages/passing-store";
import { SynchronousEvents } from "~/pages/synchronous-event";
import { ConditionalListeners } from "~/pages/conditional-listeners";
import { RecursiveStore } from "~/pages/recursive-store";
import { Serialization } from "~/pages/Serialization";
import { Serialization2 } from "~/pages/Serialization2";
import { ConditionUses } from "~/pages/condition";
import { UsingContext } from "~/pages/using-context";
import { UseMountHooks } from "~/pages/use-mount";
import { UseWatch } from "~/pages/use-watch";
import { FetchData } from "~/pages/fetchData";
import { NoSerializeComponent } from "~/pages/no-serialization";
import { ClientEffect } from "~/components/clock";

export const App = component$(() => {
  return (
    <div>
      <Home />
      <PassingStore />
      <SynchronousEvents />
      <ConditionalListeners />
      <RecursiveStore />
      <Serialization />
      <Serialization2 />
      <NoSerializeComponent />
      <ConditionUses />
      <UseWatch />
      <UseMountHooks />
      <ClientEffect />
      <UsingContext />
      <FetchData />
    </div>
  );
});
