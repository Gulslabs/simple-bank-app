import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdentityModule } from './identity/identity.module';


@Module({ 
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot('mongodb+srv://blogs-dev:test1234@guls-mongodb-cluster.2xpkeu2.mongodb.net/blogs-db?retryWrites=true&w=majority'),
    IdentityModule],
})
export class AppModule {}
