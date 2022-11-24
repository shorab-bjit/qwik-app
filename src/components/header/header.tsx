import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.css";

export default component$(() => {
  useStylesScoped$(styles);

  const AllRoutes: string[] = [
    "passing-store",
    "synchronous-events",
    "conditional-listeners",
    "recursive-store",
    "serialization",
    "serialization2",
    "no-serialization",
    "condition-uses",
    "use-watch",
    "use-mount",
    "use-clientEffect",
    "use-context",
    "fetch-data",
    "auto-complete",
    "use-style",
  ];

  return (
    <header>
      <div class="logo">
        <Link class="home" href="/">
          <QwikLogo />
        </Link>

        <p class="router">
          {AllRoutes.map((route: string) => {
            return (
              <Link class="router-item" href={`/${route}/`}>
                {route}
              </Link>
            );
          })}
        </p>
      </div>
    </header>
  );
});
