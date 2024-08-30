import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";


export function GET(request:NextRequest){
    return NextResponse.json([
        {id:10 , name:'Milk', price: 30.00 },
        {id:12 , name:'Bread',price: 45.00},

    ]);
}


export async function POST(request:NextRequest){
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success)
    return NextResponse.json(validation.error.errors, {status:400})
    return NextResponse.json({id:10 , name:body.name, price:body.price},{status:201});
}