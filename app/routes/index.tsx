import * as fs from "node:fs";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";

const filePath = "count.txt";

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, "utf-8").catch(() => "0")
  );
}

const getCount = createServerFn("GET", () => {
  return readCount();
});

const updateCount = createServerFn("POST", async (addBy: number) => {
  const count = await readCount();
  await fs.promises.writeFile(filePath, `${count + addBy}`);
});

export const Route = createFileRoute("/")({
  component: Example,
  // loader: async () => await getCount(),
  loader: async () => {
    const count = await getCount();

    return {
      foo: "bar",
      count,
    };
  },
});

// function Home() {
//   const router = useRouter();
//   const state = Route.useLoaderData();

//   return (
//     <>
//       <button
//         type="button"
//         onClick={() => {
//           updateCount(1).then(() => {
//             router.invalidate();
//           });
//         }}
//       >
//         Add 1 to {state.count}?
//       </button>
//       <p className="text-3xl font-sans">{state.foo}</p>
//     </>
//   );
// }

const project = {
  id: 123,
  name: "Demo",
  status: "Open",
  dueDateTime: "March 17",
  dueDate: "2023",
  createdBy: "Dan",
  href: "/",
};
export default function Example() {
  return (
    <>
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Tech Matchup
        </h1>
        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Vote for your favorite technology in head-to-head matchups with our
          app.
        </p>
      </div>
      <div className="p-32">
        <ul role="list" className="divide-y divide-gray-100">
          <li
            key={project.id}
            className="flex items-center justify-between gap-x-6 py-5 px-5 bg-white"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-lg font-semibold leading-6 text-gray-900">
                  JavaScript vs HTML
                </p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
              <a
                href={project.href}
                className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
              >
                View matchup<span className="sr-only">, {project.name}</span>
              </a>
            </div>
          </li>
          <li
            key={project.id}
            className="flex items-center justify-between gap-x-6 py-5 px-5 bg-white"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-lg font-semibold leading-6 text-gray-900">
                  JavaScript vs HTML
                </p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
              <a
                href={project.href}
                className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
              >
                View matchup<span className="sr-only">, {project.name}</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
