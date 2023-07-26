import { NextResponse } from "next/server";
import dbconnect from "../../../../dbConfig/dbConfig";
import User from "../../../../models/User";

dbconnect();

export default async function GET(req:any){

    // destructure 
    const {email, fName, lName, password } = req.json()
    
    const userPresent = await User.findOne(email);

    if(!userPresent){
        const response = new NextResponse("User is already present in db")
    }
    else{
        try {
            const userentry =  new User({
                email: email,
                fName: fName,
                lName: lName,
                password: password,
            })
            .save()
            .then((result)=>{
                console.log(result);
            })
        } catch (error) {
            console.log(error);
        }
}
}