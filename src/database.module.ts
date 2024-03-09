import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Area } from './area/area.entity';
import { Process } from './process/process.entity';
import { Subprocess } from './subprocess/subprocess.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql',
      database: 'stage',
      //autoLoadEntities: true,
      entities: [Area, Process, Subprocess],
      synchronize: true,
    })
  ],
})
export class DatabaseModule {}