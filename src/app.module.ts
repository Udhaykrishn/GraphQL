import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver,ApolloDriverConfig } from '@nestjs/apollo';


@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver:ApolloDriver,
    autoSchemaFile:true,
  }),
BookModule]
})
export class AppModule {}
