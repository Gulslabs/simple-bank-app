import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Identity } from 'src/models/Identity.schema';
import { IdentityDto } from './identity.dto';

@Injectable()
export class IdentityService {

    constructor(@InjectModel(Identity.name) private identityModel: Model<Identity>) { }

    async create(identityDto: IdentityDto): Promise<Identity> {
        const identity = new this.identityModel(identityDto);
        return identity.save();
    }

    async findAll(): Promise<Identity[]> {
        const identities: Identity[] = await this.identityModel.find({});
        //return this.modelToDto(identities);
        return identities;
    }
    async findById(id: string): Promise<Identity> {
        var newObjectId = new mongoose.Types.ObjectId(id);
        const identity = await this.identityModel.findOne({ _id: newObjectId });
        return identity;        
    }
    // modelToDto(identities: Identity[]): any {
    //     // const array2: MyObject[] = array1.map(s => ({name: s}));
    //     const identitiesDtos: IdentityDto[] = identities.map(i => ({
    //         dobProof: i.dobProof,
    //         addressProof: i.addressProof,
    //         idProof: i.idProof,
    //         type: i.type,
    //         name: i.name,
    //         age: i.age,
    //         id: i._id
    //     }));
    // }
}
