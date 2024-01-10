import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const PORT = +z.string().regex(/^\d+$/).parse(process.env.PORT);
const API_BASE_PATH = z.string().startsWith('/').parse(process.env.API_BASE_PATH);
const CORS_ORIGIN = z.string().url().parse(process.env.CORS_ORIGIN);
const SUPABASE_JWT_SECRET = z.string().parse(process.env.SUPABASE_JWT_SECRET);
const S3_ENDPOINT = z.string().url().parse(process.env.S3_ENDPOINT);
const S3_BUCKET = z.string().parse(process.env.S3_BUCKET);
const S3_ACCESS_KEY = z.string().parse(process.env.S3_ACCESS_KEY);
const S3_SECRET_KEY = z.string().parse(process.env.S3_SECRET_KEY);
const S3_REGION = z.string().parse(process.env.S3_REGION);
const S3_CUSTOM_ENDPOINT = z
  .string()
  .url()
  .optional()
  .parse(process.env.S3_CUSTOM_ENDPOINT === '' ? undefined : process.env.S3_CUSTOM_ENDPOINT);

export {
  API_BASE_PATH,
  CORS_ORIGIN,
  PORT,
  S3_ACCESS_KEY,
  S3_BUCKET,
  S3_CUSTOM_ENDPOINT,
  S3_ENDPOINT,
  S3_REGION,
  S3_SECRET_KEY,
  SUPABASE_JWT_SECRET,
};
