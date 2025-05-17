"use server";

import prisma from "@/lib/prisma";

export interface CreateTestimonialData {
  title: string;
  content: string;
  playerName: string;
}

export async function createTestimonial(data: CreateTestimonialData) {
  let result = await prisma.testimonials.create({
    data: {
      content: data.content,
      playerName: data.playerName,
      title: data.title,
    },
  });

  return result;
}

export async function getTestimonials() {
  let result = await prisma.testimonials.findMany();
  return result;
}

export async function deleteTestimonial(id: number) {
  let result = await prisma.testimonials.delete({
    where: {
      id,
    },
  });
  return result;
}

export async function updateTestimonial(
  id: number,
  data: CreateTestimonialData
) {
  let result = await prisma.testimonials.update({
    where: {
      id,
    },
    data: {
      content: data.content,
      playerName: data.playerName,
      title: data.title,
    },
  });
}
