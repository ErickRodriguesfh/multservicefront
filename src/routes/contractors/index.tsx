import { createFileRoute } from "@tanstack/react-router";
import { Contractor } from "../../types/contractor";
import { fetchUsers } from "../../api/services/contractors/findAll";

export const Route = createFileRoute("/contractors/")({
  component: RouteComponent,
  loader: () => fetchUsers(),
});

function RouteComponent() {
  const data: Contractor[] = Route.useLoaderData();

  return (
    <div>
      <ul>
        {data.map((contractor: Contractor) => (
          <li key={contractor.id}>
            <h3>{contractor.name}</h3>
            <p>{contractor.email}</p>
            <p>{contractor.contactNumber}</p>
            <p>{contractor.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
