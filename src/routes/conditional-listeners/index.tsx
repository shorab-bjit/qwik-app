import { component$, $, useOn } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  
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
      <h2>Example of Conditional Listeners</h2>
      <p>App Component. Click me.</p>
      <hr />

      <Link class="mindblow" href="/recursive-store/">
        View Example of RecursiveStore 🤯
      </Link>
    </div>
  );
});
