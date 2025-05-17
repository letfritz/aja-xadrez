import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { db } from "@/lib/prisma";

interface Testimonial {
  id: string;
  title: string;
  content: string;
  playerName: string;
}

interface CreateTestimonialData {
  title: string;
  content: string;
  playerName: string;
}

// Query keys
const TESTIMONIALS_QUERY_KEY = "testimonials";

export const useGetTestimonials = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [TESTIMONIALS_QUERY_KEY],
    queryFn: async () => {
      let testimonials = await db.testimonials.findMany();
      return testimonials;
    },
  });
};

export const useCreateTestimonial = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateTestimonialData) => {
      let result = await db.testimonials.create({
        data: {
          content: data.content,
          playerName: data.title,
          title: data.title,
        },
      });
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TESTIMONIALS_QUERY_KEY] });
    },
  });
};

export const useRemoveTestimonial = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (testmonialId: number) => {
      await db.testimonials.delete({
        where: {
          id: testmonialId,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TESTIMONIALS_QUERY_KEY] });
    },
  });
};
