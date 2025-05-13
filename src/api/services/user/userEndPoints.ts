import { get } from "http";

export const userEndpoints = {
  getServiceOffering: "/service-offering",
  createServiceOffering: "/service-offering",
  getServiceOfferingById: (id: string) => `/service-offering/${id}`,
};
