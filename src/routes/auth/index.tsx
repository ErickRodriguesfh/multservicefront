import { createFileRoute, Navigate, useNavigate } from "@tanstack/react-router";
import { SignUpForm } from "../../components/users/signup-form";
import { CreateUser } from "../../types/create-user";
import { signUpNewUser } from "../../api/services/users/userLogin";
import { useState } from "react";

export const Route = createFileRoute("/auth/")({
  component: RouteComponent,
});

function RouteComponent() {
  // Procurar Componente de spinner
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Sign up
  const handleSignUpNewUser = async (data: CreateUser) => {
    setLoading(true);
    try {
      const response = await signUpNewUser(data.email, data.password);
      console.log(response);
      navigate({ to: "/" });
      console.log("Navegação solicitada"); // Veja se este log aparece
    } catch (err) {
      alert("Erro ao criar usuário");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 ">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium"></a>
          <img src="/public/logotipo2.png" alt="Image" className="w-24" />
        </div>
        <div className="flex flex-1 justify-center align-center pt-10 mt-10">
          <div className="w-full max-w-xs">
            <h1 className="text-4xl text-center select-none">
              Bem vindo de volta
            </h1>
            <p className="text-center text-green-600 text-sm/5 font-bold pt-5 select-none">
              Nossa missão é conectar prestadores de serviços com contratantes
              de forma rápida e eficiente
            </p>
            <div className="flex flex-1 items-center justify-center pt-5">
              <div className="w-full max-w-xs">
                <SignUpForm onAction={handleSignUpNewUser} />
              </div>
            </div>
            <p className="font-bold text-xs text-center pt-3 select-none">
              Ao clicar em entrar, você concorda com os termos de serviço e
              privacidade
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/public/multservice-login-background.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover "
        />
      </div>
    </div>
  );
}
