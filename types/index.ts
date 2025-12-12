import { z } from "zod";
import {
  insertProductSchema,
  insertCartSchema,
  cartItemSchema,
} from "@/lib/validators";

// Includes all fields being inferred and adds more.
export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type cartItem = z.infer<typeof cartItemSchema>;
