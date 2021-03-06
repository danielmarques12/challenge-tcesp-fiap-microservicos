import { Connection, createConnection, getConnectionOptions } from 'typeorm';
import 'dotenv/config';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === 'development'
          ? 'challenge-api'
          : process.env.DATABASE_NAME,
    })
  );
};
