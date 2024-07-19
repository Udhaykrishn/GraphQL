import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Book } from '@prisma/client';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Injectable()
export class BookService {
    constructor(private readonly prisma:PrismaService){}

    async findAll():Promise<Book[]>{
        return this.prisma.book.findMany()
    }

    async findOne(id:string):Promise<Book>{
        return this.prisma.book.findFirst({where:{id}})
    }

    async create(createBookInput:CreateBookInput):Promise<Book>{
        return this.prisma.book.create({
            data:createBookInput
        })
    }

    async update(id:string,updateBookInput:UpdateBookInput):Promise<Book>{
        return this.prisma.book.update({
            where:{id},
            data:updateBookInput
        })
    }

    async delete(id:string):Promise<Book>{
        return this.prisma.book.delete({where:{id}})
    }
}
