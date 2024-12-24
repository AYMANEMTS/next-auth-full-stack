import clientPromise from '../../../lib/mongodb';
import bcrypt from "bcrypt";

export async function POST(request) {
    try {
        const { email, password } = await request.json();
        if (!email || !password) {
            return new Response(JSON.stringify({ error: "Email and Password are required" }), { status: 400 });
        }
        const client = await clientPromise;
        const db = client.db('brikool-api');
        const user = await db.collection('users').findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return new Response(JSON.stringify({ message: 'Invalid email or password' }), { status: 400 });
        }
        return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
    } catch (e) {
        console.error(e);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
