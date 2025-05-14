import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { OfferServiceGalery } from "./offer-service-galery";

export const OfferServiceForm = () => {
  return (
    <form>
      <Card className="w-full w-2xl mx-auto mt-10 shadow-md rounded-lg">
        <CardHeader>
          <img src="/logotipo.png" className="w-24 h-auto m-auto  w-80" />
          <h2 className="text-lg font-bold text-center p-2 text-green-600">
            Dados do prestador
          </h2>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 mb-2">
            <div>
              <Label className="pb-2">Contato</Label>
              <Input placeholder="Digite o seu melhor número para contato"></Input>
            </div>
            <div>
              <Label className="pb-2">E-mail</Label>
              <Input placeholder="Digite o seu melhor e-mail para contato"></Input>
            </div>
          </div>

          <OfferServiceGalery />

          <div className="flex justify-center pt-5">
            <Button>Publicar serviço</Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};
