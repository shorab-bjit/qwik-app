import { component$, useStore, Resource, useResource$ } from "@builder.io/qwik";
import { getRepositories } from "~/constants";

interface GithubStore {
  org: string;
}

export const FetchData = component$(() => {
  const tempData = useStore<GithubStore>({
    org: "BuilderIO",
  });

  const reposResource = useResource$<string[]>(({ track, cleanup }) => {
    track(() => tempData.org);

    const controller = new AbortController();
    cleanup(() => controller.abort());

    return getRepositories(tempData.org, controller);
  });

  return (
    <div>
      <h4>Fetching Resource on state change</h4>
      <div>
        <span>
          GitHub username:
          <input
            value={tempData.org}
            onInput$={(ev) =>
              (tempData.org = (ev.target as HTMLInputElement).value)
            }
          />
        </span>

        <div>
          <Resource
            value={reposResource}
            onPending={() => <>Loading...</>}
            onRejected={(error) => <>Error: {error.message}</>}
            onResolved={(repos) => (
              <ul>
                {repos.map((repo) => (
                  <li>
                    <a href={`https://github.com/${tempData.org}/${repo}`}>
                      {repo}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          />
        </div>
      </div>
      <hr/>
    </div>
  );
});
