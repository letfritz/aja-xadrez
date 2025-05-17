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
      toast.success("Testimonial updated successfully!");
    } catch (error) {
      toast.error("Error updating testimonial");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await removeTestimonial.mutateAsync(id);
      toast.success("Testimonial deleted successfully!");
    } catch (error) {
      toast.error("Error deleting testimonial");
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Player Name</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Actions</TableHead>
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
                  onClick={() => handleDelete(testimonial.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Testimonial</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Title</label>
              <Input
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Player Name</label>
              <Input
                value={formData.playerName}
                onChange={(e) =>
                  setFormData({ ...formData, playerName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Content</label>
              <Textarea
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Update Testimonial
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
