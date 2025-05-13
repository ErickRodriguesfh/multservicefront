import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "../components/theme-provider";
import { Navbar } from "../components/navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Navbar />
        <Outlet />
        <TanStackRouterDevtools />
      </ThemeProvider>
    </>
  ),
});
