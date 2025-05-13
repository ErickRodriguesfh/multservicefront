import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const OfferServiceForm = () => {
  return (
    <form>
      <Card className="w-full max-w-md mx-auto mt-10">
        <CardHeader>
          <h1 className="text-lg font-bold text-center">Cadastro de serviço</h1>
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-bold text-center p-2">
            Dados do serviço
          </h2>
          <div className="grid grid-cols-2 gap-8 mb-2">
            <div>
              <Label className="pb-2">Tipo de serviço</Label>
              <Input></Input>
            </div>
            <div>
              <Label className="pb-2">Número de contato</Label>
              <Input></Input>
            </div>
          </div>

          <h2 className="text-lg font-bold text-center p-2">
            Dados do prestador
          </h2>
        </CardContent>
      </Card>
    </form>
  );
};
