import { component$, useServerMount$, useStore } from "@builder.io/qwik";

export const UseMountHooks = component$(() => {
  const github = useStore({
    org: "BuilderIO",
    repos: null as string[] | null,
  });

  useServerMount$(async () => {
    // Put code here to fetch data from the server.

    /** ---------way 1------------*/
    // const resp = await fetch(
    //   `https://api.github.com/users/${github.org}/repos`,
    //   {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //     },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((response) => response);

    // github.repos = resp.map((item: any) => item.name);
    /** ------way 1---------------*/

    /**---------- way 2---------- */
    github.repos = await getRepositories(github.org);
    /**---------- way 2---------- */
  });

  return (
    <div>
      <h2>Example of useMount/useServerMount hook</h2>
      <span>GitHub username: {github.org}</span>
      <div>
        {github.repos ? (
          <ul>
            {github.repos.map((repo) => (
              <li>
                <a href={`https://github.com/${github.org}/${repo}`}>{repo}</a>
              </li>
            ))}
          </ul>
        ) : (
          "loading..."
        )}
      </div>
      <hr />
    </div>
  );
});

export const getRepositories = async (
  username: string,
  controller?: AbortController
) => {
  const resp = await fetch(`https://api.github.com/users/${username}/repos`, {
    signal: controller?.signal,
  });
  const json = await resp.json();
  return Array.isArray(json)
    ? json.map((repo: { name: string }) => repo.name)
    : null;
};
