import { component$, useServerMount$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const github = useStore({
    org: "BuilderIO",
    repos: null as string[] | null,
  });

  //* It's use only server/api call purposes not on the client
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
    const controller = new AbortController();
    github.repos = await getRepositories(github.org, controller);

    return () => {
      controller.abort();
    };
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

      <Link class="mindblow" href="/use-clientEffect/">
        View Example of use-clientEffect 🤯
      </Link>
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
