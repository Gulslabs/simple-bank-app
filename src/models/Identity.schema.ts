import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type IdentityDocument = HydratedDocument<Identity>;

enum ProofType {
    ADHAAR = "ADHAAR",
    PASSPORT = "PASSPORT",
}

enum AccountType {
    PERSON = "PERSON",
    NON_PERSON = "NON_PERSON"
}

class ProofIdType {

    proofType: ProofType;

    @Prop()
    link: string;
    @Prop()
    value: string;
}



@Schema()
export class Identity {

    @Prop()
    name: string;
    @Prop()
    age: number;

   // @Prop()
    _id: string;

    @Prop()
    addressProof: ProofIdType;

    @Prop()
    dobProof: ProofIdType;

    @Prop()
    idProof: ProofIdType;

    
    @Prop()
    type: string;

}

export const IdentitySchema = SchemaFactory.createForClass(Identity);