import { Resolver,Query,Mutation,Args,ID } from '@nestjs/graphql';
import { Book } from "./models/book.model";
import { BookService } from './book.service';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';


@Resolver(()=>Book)
export class BookResolver {
    constructor(private readonly bookService:BookService){}

    @Query(()=>[Book],{name:'books'})
    async findAll(){
        return this.bookService.findAll()
    }

    @Query(()=>Book,{name:'book'})
    async findOne(@Args('id',{type:()=>ID}) id:string){
        return this.bookService.findOne(id)
    }

    @Mutation(()=>Book)
    async createBook(@Args('createBookInput') createBookInput:CreateBookInput ){
        return this.bookService.create(createBookInput)
    }

    @Mutation(()=>Book)
    async updateBook(
        @Args('id',{type:()=>ID})id:string,
        @Args('updateBookInput') updateBookInput:UpdateBookInput
    ){
        return this.bookService.update(id,updateBookInput)
    }

    @Mutation(()=>Book)
    async deleteBook(
        @Args('id',{type:()=>ID}) id:string
    ){
        return this.bookService.delete(id)
    }
}
