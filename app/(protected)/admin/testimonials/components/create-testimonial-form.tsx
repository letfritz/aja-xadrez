"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateTestimonial } from "@/hooks/use-testimonials";
import { useState } from "react";
import { toast } from "sonner";

interface TestimonialFormData {
  title: string;
  content: string;
  playerName: string;
}

export function CreateTestimonialForm() {
  const [isOpen, setIsOpen] = useState(false);
  const createTestimonial = useCreateTestimonial();
  const [formData, setFormData] = useState<TestimonialFormData>({
    title: "",
    content: "",
    playerName: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTestimonial.mutateAsync(formData);
      setIsOpen(false);
      setFormData({ title: "", content: "", playerName: "" });
      toast.success("Depoimento criado com sucesso!");
    } catch (error) {
      toast.error(`Erro ao criar depoimento: ${error}`);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Novo Depoimento</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar Novo Depoimento</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Treinador</label>
            <Input
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Jogador</label>
            <Input
              value={formData.playerName}
              onChange={(e) =>
                setFormData({ ...formData, playerName: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Depoimento</label>
            <Textarea
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Criar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
