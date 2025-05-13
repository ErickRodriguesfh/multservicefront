import { createFileRoute } from "@tanstack/react-router";
import { OfferServiceForm } from "../../../components/offerService/offer-service-form";

export const Route = createFileRoute("/services/offer-service/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <OfferServiceForm />
    </div>
  );
}
