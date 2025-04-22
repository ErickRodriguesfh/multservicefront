"use client";

import type React from "react";

import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";

export default function ContractorRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      contactNumber: "",
      address: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
      valid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send the data to your API
      console.log("Form submitted:", formData);

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        address: "",
      });
    }
  };

  return (
    <Card className="max-w-md w-full mx-auto p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Cadastrar Contratante
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" placeholder="Digite seu nome" />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="email@exemplo.com" />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactNumber">Telefone</Label>
          <Input id="contactNumber" placeholder="Digite o seu telefone" />
          {errors.contactNumber && (
            <p className="text-sm text-red-500">{errors.contactNumber}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Endereço</Label>
          <Textarea id="address" placeholder="Digite o seu endereço" rows={3} />
          {errors.address && (
            <p className="text-sm text-red-500">{errors.address}</p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Finalizar Cadastro
        </Button>
      </form>
    </Card>
  );
}
