import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SignUpForm } from "../../../components/users/signup-form";
import { CreateUser } from "../../../types/create-user";
import { signUpNewUser } from "../../../api/services/users/userLogin";

export const Route = createFileRoute("/auth/sign-up/")({
  component: RouteComponent,
});

function RouteComponent() {
  // Procurar Componente de spinner

  const navigate = useNavigate();

  // Sign up
  const handleSignUpNewUser = async (data: CreateUser) => {
    try {
      const response = await signUpNewUser(data.email, data.password);
      console.log(response);
      navigate({ to: "/" });
      console.log("Navegação solicitada"); // Veja se este log aparece
    } catch (err) {
      alert("Erro ao criar usuário");
    } finally {
      console.log("Requisição finalizada");
    }
  };

  const handleNavigateToSignIn = () => {
    navigate({ to: "/auth/sign-in" });
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 ">
        <div className="flex justify-center gap-2 md:justify-start"></div>
        <div className="flex flex-1 justify-center align-center pt-10 mt-10">
          <div className="w-full max-w-xs">
            <h1 className="text-4xl text-center select-none">
              Bem vindo de volta
            </h1>

            <div className="text-center pt-2">
              <p className="text-balance text-sm">
                Já tem uma conta?
                <a
                  href=""
                  onClick={handleNavigateToSignIn}
                  className="ml-auto text-sm underline-offset-4 hover:underline pl-1"
                >
                  Entrar
                </a>
              </p>
            </div>

            <p className="text-center text-green-600 text-sm/5 font-bold pt-5 select-none">
              Nossa missão é conectar prestadores de serviços com contratantes
              de forma rápida e eficiente
            </p>
            <div className="flex flex-1 items-center justify-center pt-5">
              <div className="w-full max-w-xs">
                <SignUpForm
                  onAction={handleSignUpNewUser}
                  actionButtonText="Cadastre-se"
                />
              </div>
            </div>

            <p className="font-bold text-xs text-center pt-3 select-none">
              Ao cadastrar-se, você concorda com os termos de serviço e
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
