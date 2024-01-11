import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const res = await fetch('https://api.vercel.com/v9/projects', {
			headers: {
				Authorization: `Bearer K5M4QOsuLzJRya2F8mPHJjn4`,
			},
			method: 'GET',
		});
		const data = await res.json();

		return NextResponse.json(
			{
				data,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: 'Error',
			},
			{ status: 500 }
		);
	}
}
