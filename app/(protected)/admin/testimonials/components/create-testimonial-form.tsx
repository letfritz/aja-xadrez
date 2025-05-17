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
      toast.success("Testimonial created successfully!");
    } catch (error) {
      toast.error(`Error creating testimonial: ${error}`);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Add New Testimonial</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Testimonial</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            Create Testimonial
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
