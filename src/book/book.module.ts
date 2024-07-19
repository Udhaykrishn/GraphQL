import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';

@Module({
  controllers: [BookResolver],
  providers: [BookService]
})
export class BookModule {}
