import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type LoginSchema = z.infer<typeof loginSchema>;

interface LoginFormProps extends React.ComponentPropsWithoutRef<"form"> {
  onAction?: (data: LoginSchema) => void;
  className?: string;
}

export function SignUpForm({ onAction, className, ...props }: LoginFormProps) {
  const { register, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: LoginSchema) => {
    if (onAction) {
      await onAction(data);
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-balance text-sm">
          Já tem uma conta?
          <a
            href="#"
            className="ml-auto text-sm underline-offset-4 hover:underline pl-1"
          >
            Entrar
          </a>
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            {...register("email")}
            type="email"
            placeholder="Digite o seu e-mail"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <Input
            id="password"
            {...register("password")}
            type="password"
            required
            placeholder="Digite a sua senha"
          />
        </div>
        <Button type="submit" className="w-full">
          Cadastre-se
        </Button>
      </div>
      <div className="text-center text-sm">
        Ainda não tem uma conta?{" "}
        <a href="#" className="underline underline-offset-4">
          Registre-se
        </a>
      </div>
    </form>
  );
}
