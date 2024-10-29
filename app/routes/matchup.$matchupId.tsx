import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/matchup/$matchupId")({
  component: Home,
});

function Home() {
  const { matchupId } = Route.useParams();
  return (
    <div className="m-32 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6 text-center text-3xl font-bold">
        Here is the matchup!
      </div>
      <div className="px-4 py-5 sm:p-6 text-center">
        <p className="text-2xl">JavaScript vs. HTML</p>
        <p className="text-2xl mt-2">0 : 0</p>
        <div className="flex space-x-4 justify-center mt-4">
          <button
            type="button"
            className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Vote for JavaScript
          </button>
          <button
            type="button"
            className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Vote for HTML
          </button>
        </div>
      </div>
      <div className="px-4 py-4 sm:px-6 flex justify-center">
        <Link
          className="rounded-full bg-white px-4 py-2.5 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          to="/"
        >
          View all matchups
        </Link>
      </div>
    </div>
  );
}
