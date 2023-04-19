import { Module } from '@nestjs/common';
import { IdentityService } from './identity.service';
import { IdentityController } from './identity.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Identity, IdentitySchema } from 'src/models/Identity.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Identity.name ,schema: IdentitySchema}])],
  controllers: [IdentityController],
  providers: [IdentityService]
})
export class IdentityModule {}
