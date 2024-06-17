import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize';

export const sqlConfig = registerAs('database', () => ({
  dialect: <Dialect>process.env.SQL_DIALECT || 'mysql',
  logging: process.env.SQL_LOGGING === 'true',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_TEST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadEntities: true,
  synchronize: true,
}));
