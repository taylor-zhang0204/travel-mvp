export type AppEnv = 'development' | 'staging' | 'production';

const env = (process.env.EXPO_PUBLIC_ENV ?? 'development') as AppEnv;

export const config = {
  env,
  isDev: env === 'development',
  isStaging: env === 'staging',
  isProd: env === 'production',
} as const;
