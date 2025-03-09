import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';
import * as crypto from 'crypto';
import * as dotenv from 'dotenv';
import { DatabaseConfig } from '../env';

dotenv.config();
global.crypto = crypto as Crypto;

export default registerAs(
  'typeorm',
  () =>
    ({
      type: DatabaseConfig.type,
      database: DatabaseConfig.database,
      host: DatabaseConfig.host,
      port: DatabaseConfig.port,
      username: DatabaseConfig.username,
      password: DatabaseConfig.password,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/../migrations/*{.ts,.js}'],
      logging: true,
      synchronize: true,
      dropSchema: true,
    }) as TypeOrmModuleOptions,
);
