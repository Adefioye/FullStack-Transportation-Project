"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function getEventsByPersonId(prevState, formData) {
  const schema = z.object({
    search: z.string().nonempty(),
  });

  const data = schema.parse({
    search: formData.get("search"),
  });

  console.log("Search data in action", data.search);

  try {
    const results = await prisma.event.findMany({
      where: {
        person: data.search,
      },
      select: {
        person: true,
        type: true,
        time: true,
      },
      take: 20,
      orderBy: {
        time: "asc",
      },
    });

    revalidatePath("/events_by_person_id");
    return { message: "Success", eventData: results };
  } catch (error) {
    console.log(error);
    return { message: "Failed to fetch event" };
  }
}

export async function getEventsByLinkId(prevState, formData) {
  const schema = z.object({
    search: z.string().nonempty(),
  });

  const data = schema.parse({
    search: formData.get("search"),
  });

  console.log("Search data in action", data.search);

  try {
    const results = await prisma.event.findMany({
      where: {
        link: data.search,
      },
      select: {
        person: true,
        type: true,
        time: true,
      },
      take: 20,
      orderBy: {
        time: "asc",
      },
    });

    revalidatePath("/events_by_link_id");
    return { message: "Success", eventData: results };
  } catch (error) {
    console.log(error);
    return { message: "Failed to fetch event" };
  }
}

export async function getEventsByTimeRange(prevState, formData) {
  const schema = z.object({
    low: z.number().positive(),
    high: z.number().positive(),
  });

  const data = schema.parse({
    low: Number(formData.get("low")),
    high: Number(formData.get("high")),
  });

  console.log("Search data in action", data.low, data.high);

  try {
    const results = await prisma.event.findMany({
      where: {
        time: {
          lte: data.high,
          gte: data.low,
        },
      },
      select: {
        person: true,
        type: true,
        time: true,
      },
      take: 20,
      orderBy: {
        time: "asc",
      },
    });

    revalidatePath("/events_by_link_id");
    return { message: "Success", eventData: results };
  } catch (error) {
    console.log(error);
    return { message: "Failed to fetch event" };
  }
}
