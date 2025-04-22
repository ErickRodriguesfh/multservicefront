import { createFileRoute } from "@tanstack/react-router";
import ContractorRegistrationForm from "../../../components/contractors/contractor-registration-form";

export const Route = createFileRoute("/contractors/create/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="flex min-h-screen flex-col items-center ">
      <ContractorRegistrationForm />
    </section>
  );
}
