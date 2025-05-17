import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createTestimonial,
  CreateTestimonialData,
  deleteTestimonial,
  getTestimonials,
  updateTestimonial,
} from "@/actions/testimonials";
import prisma from "@/lib/prisma";
interface Testimonial {
  id: string;
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
      let testimonials = await getTestimonials();
      return testimonials;
    },
  });
};

export const useCreateTestimonial = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateTestimonialData) => {
      return createTestimonial(data);
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
      await deleteTestimonial(testmonialId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TESTIMONIALS_QUERY_KEY] });
    },
  });
};

export const useUpdateTestimonial = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: CreateTestimonialData;
    }) => {
      const result = await updateTestimonial(id, data);
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TESTIMONIALS_QUERY_KEY] });
    },
  });
};
