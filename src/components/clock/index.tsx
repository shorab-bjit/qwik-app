import {
  component$,
  useStore,
  useStyles$,
  useClientEffect$,
} from "@builder.io/qwik";
import styles from "./index.css";

interface ClockStore {
  hour: number;
  minute: number;
  second: number;
}
export const Clock = component$(() => {
  useStyles$(styles);

  const store = useStore<ClockStore>({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useClientEffect$(
    () => {
      updateClock(store);
      const tmrId = setInterval(() => updateClock(store), 1000);
      return () => clearInterval(tmrId);
    },
    { eagerness: "visible" }
  );

  return (
    <div class="clock">
      <div class="twelve"></div>
      <div class="three"></div>
      <div class="six"></div>
      <div class="nine"></div>
      <div class="hour" style={{ transform: `rotate(${store.hour}deg)` }}></div>
      <div
        class="minute"
        style={{ transform: `rotate(${store.minute}deg)` }}
      ></div>
      <div
        class="second"
        style={{ transform: `rotate(${store.second}deg)` }}
      ></div>
    </div>
  );
});

export function updateClock(store: ClockStore) {
  const now = new Date();
  store.second = now.getSeconds() * (360 / 60);
  store.minute = now.getMinutes() * (360 / 60);
  store.hour = now.getHours() * (360 / 12);
}

export const ClientEffect = component$(() => {
  return (
    <div>
      <h2>Example of use-clientEffect</h2>
      <p>
        This is an example of Lazy executing code on component when component
        becomes visible.
      </p>

      <p style={{ height: "200px" }}>
        ⬇️ <strong>Scroll down</strong> until the clock is in view.
      </p>

      <Clock />
      <hr />
    </div>
  );
});
