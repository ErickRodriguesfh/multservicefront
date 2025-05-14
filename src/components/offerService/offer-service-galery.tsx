import React, { useRef, useState } from "react";
import { Label } from "../ui/label";
import { Upload, X } from "lucide-react";

export const OfferServiceGalery = () => {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const newImages = [...images];
      const newPreviews = [...previews];

      selectedFiles.forEach((file) => {
        if (newImages.length < 5 && file.type.startsWith("image/")) {
          newImages.push(file);
          const reader = new FileReader();
          reader.onload = () => {
            if (reader.result) {
              newPreviews.push(reader.result.toString());
              setPreviews([...newPreviews]);
            }
          };
          reader.readAsDataURL(file);
        }
      });
      setImages(newImages.slice(0, 5));
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    const newPreviews = [...previews];
    newImages.splice(index, 1);
    newPreviews.splice(index, 1);
    setImages(newImages);
    setPreviews(newPreviews);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="pt-4">
      <Label className="pb-2">
        Adicione imagens a seu portifólio (máximo 5)
      </Label>
      <div className="mt-2">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          multiple
          className="hidden"
        />
        <div className="grid grid-cols-3 gap-4 mb-4">
          {previews.map((preview, index) => (
            <div key={index} className="relative">
              <img
                src={preview || "/placeholder.svg"}
                alt={`Imagem ${index + 1}`}
                className="w-full h-32 object-cover rounded-md border"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
              >
                <X size={16} />
              </button>
            </div>
          ))}
          {images.length < 5 && (
            <button
              type="button"
              onClick={triggerFileInput}
              className="w-full h-32 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center text-gray-500 hover:border-green-500 hover:text-green-500 transition-colors"
            >
              <Upload size={24} />
              <span className="mt-2 text-sm">Adicionar imagem</span>
            </button>
          )}
        </div>
        <div className="text-sm text-gray-500">
          {images.length}/5 imagens selecionadas
        </div>
      </div>
    </div>
  );
};
