import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dependecy } from './dependecy.entity';
import { Subprocess } from '../subprocess/subprocess.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Dependecy, Subprocess])],
})
export class DependecyModule {}
