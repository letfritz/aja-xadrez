"use client";

import { useGetTestimonials } from "@/hooks/use-testimonials";
import { Loader2 } from "lucide-react";
import { CreateTestimonialForm } from "./components/create-testimonial-form";
import { TestimonialsTable } from "./components/testimonials-table";

export default function TestimonialsPage() {
  const { data: testimonials, isLoading } = useGetTestimonials();

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-4rem)] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Depoimentos</h1>
        <CreateTestimonialForm />
      </div>

      <TestimonialsTable testimonials={testimonials || []} />
    </div>
  );
}
