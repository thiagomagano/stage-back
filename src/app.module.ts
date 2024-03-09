import { Module } from '@nestjs/common';
import { ProcessModule } from './process/process.module';
import { SubprocessModule } from './subprocess/subprocess.module';
import { AreaModule } from './area/area.module';
import { DatabaseModule } from './database.module';
import { DependecyModule } from './dependecy/dependecy.module';

@Module({
  imports: [
    DatabaseModule,
    ProcessModule,
    SubprocessModule,
    AreaModule,
    DependecyModule,
  ],
})
export class AppModule {}
