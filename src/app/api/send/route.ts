import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';

const resend = new Resend('re_dCEBKPPE_KoQipwRN1FNp3JBS2NNth9ZM');

type EmailType = {
	name: string;
	correo: string;
	message: string;
};

export async function POST(request: Request) {
	const { name, correo, message } = await request.json();

	console.log(name, correo, message);

	try {
		await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: ['bveracachay@gmail.com'],
			subject: 'Nuevo mensaje de pagina personal',
			react: EmailTemplate({ firstName: name, correo, message }),
			text: '',
		});

		return NextResponse.json(
			{
				message: 'Email sent',
				status: 200
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: 'Error',
				status: 500
			},
			{ status: 500 }
		);
	}
}
