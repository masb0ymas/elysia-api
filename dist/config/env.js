const TYPEORM_CONNECTION = process.env.TYPEORM_CONNECTION || "postgres";
const TYPEORM_HOST = process.env.TYPEORM_HOST || "127.0.0.1";
const TYPEORM_PORT = Number(process.env.TYPEORM_PORT) || 5432;
const TYPEORM_DATABASE = process.env.TYPEORM_DATABASE || "expresso";
const TYPEORM_USERNAME = process.env.TYPEORM_USERNAME || "postgres";
const TYPEORM_PASSWORD = process.env.TYPEORM_PASSWORD || "postgres";
const TYPEORM_SYNCHRONIZE = Boolean(process.env.TYPEORM_SYNCHRONIZE) || true;
const TYPEORM_LOGGING = Boolean(process.env.TYPEORM_LOGGING) || true;
const TYPEORM_MIGRATIONS_RUN = Boolean(process.env.TYPEORM_MIGRATIONS_RUN) || true;
const TYPEORM_TIMEZONE = process.env.TYPEORM_TIMEZONE || "Asia/Jakarta";
export const env = {
    TYPEORM_CONNECTION,
    TYPEORM_HOST,
    TYPEORM_PORT,
    TYPEORM_DATABASE,
    TYPEORM_USERNAME,
    TYPEORM_PASSWORD,
    TYPEORM_SYNCHRONIZE,
    TYPEORM_LOGGING,
    TYPEORM_MIGRATIONS_RUN,
    TYPEORM_TIMEZONE,
};
