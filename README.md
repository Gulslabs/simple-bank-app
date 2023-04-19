# A simple bank app with ability to perform basic debit credits. 

# Components
- Front End 
- Back End(server). 
- A processor component that receives events commits transaction. 

## Front End: 
- React UI 
- Simple Account Opening Form that create a document in mongoDB. 
- 

1 Identity (MongoDB)
    objectId:
    img: 
    type: PERSON/NON_PERSON
    IDProof: Proof
    AddressProof: Proof
    DOBProof: Proof

        Proof:
            Type: PASSPORT,ADHAAR
            ImageLink: 
            Value: <<Any Value you want to put it. for Ex: Passport#, AdhaarId#>>

        
2. Account: 
    AccountId
    Identity.ObjectId; 
    AccountType: SAVING, FIXED;
    Balance: Sum(All_Transactions); not a DB Field


3. Transactions:(PostGrress)
    creationDate, updationDate, accountId, Debit(deposited), Credit(withdrawal), Type(TRANSFER, CASH), Text(Transaction Particulars)


Events for Debit and Credits(Kafka)
    git config --global --add safe.directory '*'