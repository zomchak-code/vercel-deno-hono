import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { jwt } from "npm:hono/jwt";
import { serve } from "npm:inngest/hono";

export const app = new Hono();

app.use(cors());
app.use(
  "/research/user",
  jwt({
    secret:
      "GdO4mqZvQMoVM83mcr23l5maFMN8iZJOOe6NzN7IG11QrEyNfSRw8g/wgr9hVFcnEY/eKV98ZmrdngEyueT8Rw==",
  }),
);
