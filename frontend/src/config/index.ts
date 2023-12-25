import z from 'zod';

const environment = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  SAY_DEVELOPER_API_URL: z.string().url(),
});

const processEnv = {
  NODE_ENV: import.meta.env.VITE_NODE_ENV,
  SAY_DEVELOPER_API_URL: import.meta.env.VITE_SAY_DEVELOPER_API_URL,
};

console.log(import.meta.env.NODE_ENV);

const parsed = environment.safeParse(processEnv);

if (!parsed.success) {
  console.error(parsed.error.flatten().fieldErrors);
  throw new Error('Invalid environment variables');
}

export const config = new Proxy(parsed.data, {
  get(target, prop) {
    if (typeof prop !== 'string') {
      return undefined;
    }

    return target[prop as keyof typeof target];
  },
});
