import { NextResponse } from 'next/server';
import axios from 'axios';
export async function GET() {
	const res = await axios.get('https://api.vercel.com/v9/projects', {
		headers: {
			Authorization: `Bearer K5M4QOsuLzJRya2F8mPHJjn4`,
		},
	});
	const data = await res.data;

	return data;
}
