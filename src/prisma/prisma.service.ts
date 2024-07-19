import { Global, Injectable,OnModuleDestroy,OnModuleInit,Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Global()
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit,OnModuleDestroy {
    
    private logger = new Logger(PrismaService.name)

    async onModuleInit(){
        await this.$connect()
        this.logger.log("Database Connected")
    }
    
    async onModuleDestroy(){
        await this.$disconnect()
        this.logger.log("Database Disconnected")
    }
}
