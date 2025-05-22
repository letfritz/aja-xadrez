"use client";

import {
  useRemoveTestimonial,
  useUpdateTestimonial,
} from "@/hooks/use-testimonials";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface TestimonialFormData {
  title: string;
  content: string;
  playerName: string;
}

interface Testimonial extends TestimonialFormData {
  id: number;
}

interface TestimonialsTableProps {
  testimonials: Testimonial[];
}

export function TestimonialsTable({ testimonials }: TestimonialsTableProps) {
  const removeTestimonial = useRemoveTestimonial();
  const updateTestimonial = useUpdateTestimonial();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);
  const [formData, setFormData] = useState<TestimonialFormData>({
    title: "",
    content: "",
    playerName: "",
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [testimonialToDelete, setTestimonialToDelete] = useState<number | null>(null);

  const handleEdit = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setFormData({
      title: testimonial.title,
      content: testimonial.content,
      playerName: testimonial.playerName,
    });
    setIsEditModalOpen(true);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTestimonial) return;

    try {
      await updateTestimonial.mutateAsync({
        id: selectedTestimonial.id,
        data: formData,
      });
      setIsEditModalOpen(false);
      setSelectedTestimonial(null);
      setFormData({ title: "", content: "", playerName: "" });
      toast.success("Depoimento atualizado com sucesso!");
    } catch (error) {
      toast.error("Erro ao atualizar depoimento.");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await removeTestimonial.mutateAsync(id);
      toast.success("Depoimento deletado com sucesso!");
    } catch (error) {
      toast.error("Erro ao deletar depoimento.");
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Treinador</TableHead>
            <TableHead>Jogador</TableHead>
            <TableHead>Depoimento</TableHead>
            <TableHead>Ação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {testimonials?.map((testimonial) => (
            <TableRow key={testimonial.id}>
              <TableCell>{testimonial.title}</TableCell>
              <TableCell>{testimonial.playerName}</TableCell>
              <TableCell className="max-w-md truncate">
                {testimonial.content}
              </TableCell>
              <TableCell className="space-x-2">
                <Button
                  variant="outline"
                  onClick={() => handleEdit(testimonial)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                  setTestimonialToDelete(testimonial.id);
                  setIsDeleteModalOpen(true);
                }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Exclusão</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-700">
            Tem certeza de que deseja excluir este depoimento? Esta ação não pode ser desfeita.
          </p>
          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="destructive"
              onClick={async () => {
                if (testimonialToDelete !== null) {
                  await handleDelete(testimonialToDelete);
                  setIsDeleteModalOpen(false);
                  setTestimonialToDelete(null);
                }
              }}
            >
              Confirmar
            </Button>
          </div>
        </DialogContent>
      </Dialog>


      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Depoimento</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleUpdate} className="space-y-4">
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
              Atualizar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
