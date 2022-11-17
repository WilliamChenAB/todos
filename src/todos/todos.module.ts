import { Module } from '@nestjs/common';
import { TodosResolver } from './todos.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [TodosResolver],
})
export class TodosModule {}
