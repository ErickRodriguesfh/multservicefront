import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SignUpForm } from "../../../components/users/signup-form";
import { signInUser } from "../../../api/services/users/userLogin";
import { CreateUser } from "../../../types/create-user";

export const Route = createFileRoute("/auth/sign-in/")({
  component: RouteComponent,
});

function RouteComponent() {
  // Procurar Componente de spinner
  const navigate = useNavigate();

  // Sign up
  const handleSignInUser = async (data: CreateUser) => {
    try {
      const response = await signInUser(data.email, data.password);
      console.log(response);
      navigate({ to: "/" });
    } catch (err) {
      alert("Erro ao logar usuário");
    } finally {
      console.log("Requisição finalizada");
    }
  };

  const handleNavigateToSignUp = () => {
    navigate({ to: "/auth/sign-up" });
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

            <div className="flex flex-1 items-center justify-center pt-5">
              <div className="w-full max-w-xs">
                <SignUpForm
                  onAction={handleSignInUser}
                  actionButtonText="Entrar"
                />
              </div>
            </div>
            <div className="text-center text-sm pt-5">
              Ainda não tem uma conta?{" "}
              <a
                href=""
                className="underline underline-offset-4"
                onClick={handleNavigateToSignUp}
              >
                Registre-se
              </a>
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
