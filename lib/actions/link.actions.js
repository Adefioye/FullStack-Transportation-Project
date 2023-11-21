"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function getLinkDetails(prevState, formData) {
  const schema = z.object({
    search: z.string().nonempty(),
  });

  const data = schema.parse({
    search: formData.get("search"),
  });

  console.log("Search data in link action", data.search);

  try {
    const results = await prisma.link.findFirst({
      where: {
        link_id: data.search,
      },
      select: {
        link_id: true,
        freespeed: true,
        capacity: true,
        modes: true,
      },
    });

    revalidatePath("/show_link_details");
    return { message: "Success", linkData: results };
  } catch (error) {
    console.log(error);
    return { message: "Failed to fetch event" };
  }
}
