import { component$, $, useOn } from "@builder.io/qwik";

export const ConditionalListeners = component$(() => {
  
  useOn(
    "click",
    $(() => {
      alert("click on current host element.");
    })
  );

  // useOnWindow('click', $(()=> {
  //   alert('click on window object');
  // }));

  // useOnDocument('click', $(()=> {
  //   alert('click on document object');
  // }));

  return (
    <div>
      <h5>Example of Conditional Listeners</h5>
      <p>App Component. Click me.</p>
      <hr />
    </div>
  );
});
