import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

const projects = [
  {
    id: "123",
    name: "JavaScript vs HTML",
    createdBy: "Dan",
    href: "/",
  },
  {
    id: "456",
    name: "React vs Angular",
    createdBy: "Dan",
    href: "/",
  },
];

export default function Home() {
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
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex items-center justify-between gap-x-6 py-5 px-5 bg-white"
            >
              <div className="min-w-0">
                <div className="flex items-start gap-x-3">
                  <p className="text-lg font-semibold leading-6 text-gray-900">
                    {project.name}
                  </p>
                </div>
              </div>
              <div className="flex flex-none items-center gap-x-4">
                <Link
                  to="/matchup/$matchupId"
                  params={{ matchupId: project.id }}
                  className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                >
                  View matchup
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
