import { Module } from '@nestjs/common';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: true,
    debug: true,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql')
  }), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
