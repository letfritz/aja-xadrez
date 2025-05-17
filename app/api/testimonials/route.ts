"use server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const testimonials = await prisma.testimonials.findMany();
  return NextResponse.json(testimonials);
}
