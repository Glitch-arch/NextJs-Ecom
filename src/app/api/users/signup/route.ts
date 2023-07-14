
import connect from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest,NextResponse  } from 'next/server';
import bcryptjs from 'bcryptjs';


// Function for POST request

// export async function POST(request: NextRequest) {
//     try {
        
//         const reqBody = request.json();
//         const {username,email,password}:any = reqBody;
//         console.log(reqBody);

//         // Check if user already exists
//         const user = await User.findOne(email);
//         if(user){
//             return NextResponse.json({error: "User already exists"}, {status: 400});
//         }

//         // Hassing the password
//         const salt = await bcryptjs.genSalt(10);
//         const hashedPassword = await bcryptjs.hash(password,salt)

//         // Creating a new user
//         const newUser = new User({username, email, password: hashedPassword}).save()

//                      return NextResponse.json({message: "User created successfully"}, {status: 201});


//     } catch (error:any) {
//         return NextResponse.json({error: error.message}, {status: 500});
//     }
        
    
// }


// connect();

// Function

connect();

export async function POST(request: NextRequest){

    const reqBody = request.json();
    const {username, email , password }:any = reqBody;
    

    // Check if user already exists

    const user = await User.findOne({email: email})
    if(user){
        return NextResponse.json({error: "User already exists"}, {status: 400});
    }
    else{
        //Hashing the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt )

        // Creating a new user
        const creatUser =  new User({username:username, email:email, password:hashedPassword})
        creatUser.save();
        
        return NextResponse.json({message: "User created successfully"}, {status: 201});
        

    }

}

