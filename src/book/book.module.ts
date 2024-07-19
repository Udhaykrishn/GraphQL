import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
 providers:[BookResolver,BookService,PrismaService]
})
export class BookModule {}
