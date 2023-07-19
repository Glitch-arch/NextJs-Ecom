import connect from '@/dbConfig/dbConfig';

export function test(){
    console.log("above db connect");
    try {
        connect();
    } catch (error) {
        console.log("Error in test.ts",error);
    }
    console.log("below db connect");
}