import { Type } from "class-transformer";
import { IsDefined, IsEnum, IsNotEmpty, IsNotEmptyObject, IsNumber, ValidateNested, } from "class-validator";


enum ProofType {
    ADHAAR = "ADHAAR",
    PASSPORT = "PASSPORT",
}

enum AccountType {
    PERSON = "PERSON",
    NON_PERSON = "NON_PERSON"
}

export class ProofIdType {

    @IsEnum(ProofType)
    proofType: ProofType;

    link: string;


    @IsNotEmpty()
    value: string;
}


export class IdentityDto {
    
    // Nested Validation: https://stackoverflow.com/questions/53650528/validate-nested-objects-using-class-validator-in-nest-js-controller
    @IsDefined()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => ProofIdType)
    dobProof: ProofIdType;

    @IsNotEmpty()
    addressProof: ProofIdType;
    @IsNotEmpty()
    idProof: ProofIdType;

    @IsEnum(AccountType)
    type: AccountType;

    @IsNotEmpty()
    name: string;

    @IsNumber()
    age: number;

    id: string;
}






