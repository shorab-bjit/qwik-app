import { component$, useStore } from "@builder.io/qwik";

interface GithubStore {
  org: string;
  repos: string[] | null;
}

interface Coordinate {
  x: number;
  y: number;
}

export const ConditionUses = component$(() => {
  const tempData = useStore<GithubStore>({
    org: "BuilderIO",
    repos: ["qwik", "partytown"] as string[] | null,
  });

  const coordinate = useStore<Coordinate>({ x: 0, y: 0 });

  return (
    <div>
      <h4>Show data conditionally</h4>

      <div>
        <span>
          GitHub username:
          <input
            onInput$={(ev) =>
              (tempData.org = (ev.target as HTMLInputElement).value)
            }
            value={tempData.org}
          />
        </span>

        {tempData.repos ? (
          <ul>
            {tempData.repos.map((repo) => (
              <li>
                <a href={`https://github.com/${tempData.org}/${repo}`}>
                  {tempData.org}/{repo}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          "loading..."
        )}
      </div>

      <h5>Listening on document/window</h5>
      <div
        onMouseMove$={(event) => {
          coordinate.x = event.clientX;
          coordinate.y = event.clientY;
        }}
      >
        Your mouse location is ({coordinate.x}, {coordinate.y}).
      </div>
      <hr />
    </div>
  );
});
