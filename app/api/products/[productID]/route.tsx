import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";


export function GET(
    request: NextRequest, 
    {params}:{params:{productID:number}} ){
        if(params.productID > 20)
        return NextResponse.json({error:'Products Not Found'},{status: 404});

        return NextResponse.json({id:10 , name: 'Milk', price: 5});
}

export async function PUT(
    request: NextRequest, 
    {params}:{params:{productID:number} }) {
        const body = await request.json();
        const validation = schema.safeParse(body);
        if(!validation.success)
        return NextResponse.json(validation.error.errors, {status:400});

        if (params.productID > 20)
        return NextResponse.json({error:'Products Not Found'}, {status:404});

        return NextResponse.json({id:10 , name:body.name,price:body.price});
}


export async function DELETE(
    request: NextRequest, 
    {params}:{params:{productID:number} }) {

        if (params.productID > 20)
            return NextResponse.json({error:'Products Not Found'}, {status:404});

        return NextResponse.json({});
}