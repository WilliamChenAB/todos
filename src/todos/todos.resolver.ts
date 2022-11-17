import { Resolver, Query } from "@nestjs/graphql";

@Resolver()

export class TodosResolver{
    @Query(() => String) 
    test() {
        return 'test'
    }
}