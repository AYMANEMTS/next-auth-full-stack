export async function GET(request) {
    try {

        return Response.json({message: 'dashboard'});
    }catch (e) {
        console.error(e)
        return Response.json({error: "Internal Server Error"},{status: 500});
    }
}