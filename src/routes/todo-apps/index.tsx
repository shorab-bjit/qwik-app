import { component$, $, useStore, useStylesScoped$ } from "@builder.io/qwik";

import { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.scss?inline";

interface inputState {
  taskInfo: string;
}

interface taskDetails {
  id: number;
  task: string;
}

export default component$(() => {
  useStylesScoped$(styles);

  const task = useStore<inputState>({
    taskInfo: "",
  });

  const taskList = useStore<taskDetails[]>([
    {
      id: 0,
      task: "add item 1",
    },
    {
      id: 1,
      task: "add item 2",
    },
  ]);

  const completedTaskList = useStore<taskDetails[]>([
    {
      id: 3,
      task: "add item 3",
    },
  ]);

  const handleAdd$ = $(() => {
    if (task.taskInfo !== "") {
      taskList.push({
        id: taskList.length ? taskList[taskList.length - 1].id + 1 : 0,
        task: task.taskInfo,
      });

      task.taskInfo = "";
    }
  });

  const handleRemove$ = $(
    (removeId: number, status: string = "removeIncompleteTask") => {
      if (status == "removeIncompleteTask") {
        const removeIndx = taskList.findIndex((item) => item.id == removeId);
        taskList.splice(removeIndx, 1);
      }
      if (status == "removeCompletedTask") {
        const removeIndx = completedTaskList.findIndex(
          (item) => item.id == removeId
        );
        completedTaskList.splice(removeIndx, 1);
      }
    }
  );

  const handleCompleted$ = $((itemId: number) => {
    const indx = taskList.findIndex((item) => item.id == itemId);
    completedTaskList.push(taskList[indx]);
    taskList.splice(indx, 1);
  });

  return (
    <div class="p-todo">
      <div class="p-todo__wrapper">
        <input
          type="text"
          class="p-todo__wrapper--input"
          placeholder="Please Enter task details"
          value={task.taskInfo}
          onInput$={(ev) =>
            (task.taskInfo = (ev.target as HTMLInputElement).value)
          }
        />
        <button class="p-todo__wrapper--button" onClick$={handleAdd$}>
          Add
        </button>
      </div>

      <div class="p-todo__details">
        <div>
          <h4>Task List</h4>
          {taskList.length ? (
            taskList.map((item) => {
              return (
                <div class="p-todo__items">
                  <p class="p-todo__items--info">{item.task}</p>
                  <div class="p-todo__items--action">
                    <button
                      class="p-todo__items--action-remove"
                      onClick$={() =>
                        handleRemove$(item.id, "removeIncompleteTask")
                      }
                    >
                      x
                    </button>
                    <button
                      class="p-todo__items--action-complete"
                      onClick$={() => handleCompleted$(item.id)}
                    >
                      &radic;
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div
              style={
                "background-color: orange; color: white; padding: 10px; width: 150px"
              }
            >
              List is empty
            </div>
          )}
        </div>

        <div>
          <h4>Completed List</h4>
          {completedTaskList.length ? (
            completedTaskList.map((item) => {
              return (
                <div class="p-todo__items p-todo__items--completed">
                  <p class="p-todo__items--info">{item.task}</p>
                  <div class="p-todo__items--action">
                    <button
                      class="p-todo__items--action-remove"
                      onClick$={() =>
                        handleRemove$(item.id, "removeCompletedTask")
                      }
                    >
                      x
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div
              style={
                "background-color: green; color: white; padding: 10px; width: 150px"
              }
            >
              List is empty
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Todo Apps",
};
