import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { IdentityDto } from './identity.dto';
import { IdentityService } from './identity.service';

@Controller('identity')
export class IdentityController {
  constructor(private readonly identityService: IdentityService) { }

  @Post()
  create(@Body() identity: IdentityDto, @Res({ passthrough: true }) response): any {
    console.log(identity)
    this.identityService.create(identity);
    response.status(200).send({ "subject": "Identity Created" });
  }

  @Get()
  getAllIdentities(): any {
    return this.identityService.findAll();
  }

  @Get(':id')
  getIdentityById(@Param() params): any {
    
    return this.identityService.findById(params.id);
  }

}
