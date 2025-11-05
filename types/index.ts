import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";

// Includes all fields being inferred and adds more.
export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
