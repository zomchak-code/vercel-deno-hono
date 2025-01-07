import { Hono } from "hono";
import { cors } from "hono/cors";
import { jwt } from "hono/jwt";
import { serve } from "inngest/hono";

export const app = new Hono();

app.use(cors());
app.use(
  "/research/user",
  jwt({
    secret:
      "GdO4mqZvQMoVM83mcr23l5maFMN8iZJOOe6NzN7IG11QrEyNfSRw8g/wgr9hVFcnEY/eKV98ZmrdngEyueT8Rw==",
  }),
);
