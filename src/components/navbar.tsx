"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import { useMobile } from "../hooks/use-mobile";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { signOutUser } from "../api/services/users/userLogin";
import { useNavigate } from "@tanstack/react-router";

interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Prestadores",
    href: "/pricing",
  },
  {
    title: "Contratantes",
    href: "/contractors",
  },
  {
    title: "Serviços",
    href: "/pricing",
  },
];

export function Navbar() {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate({ to: "/auth/sign-up" });
    } catch (error) {
      alert("Erro ao deslogar");
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10 pl-5">
          <img src="/public/logotipo.png" className="w-24 h-auto" />
          {!isMobile && (
            <nav className="flex gap-6">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
                    item.disabled ? "cursor-not-allowed opacity-80" : ""
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!isMobile && (
            <>
              <div className="pr-5">
                <Button variant="secondary" onClick={handleSignOut}>
                  Sair
                </Button>
              </div>
            </>
          )}

          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-6">
                  {navItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
                        item.disabled ? "cursor-not-allowed opacity-80" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                  <div className="flex flex-col gap-2 mt-4">
                    <Button
                      size="sm"
                      asChild
                      variant="destructive"
                      className="pr-2"
                    >
                      <a href="/signup" onClick={() => setIsOpen(false)}>
                        Sair
                      </a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
