import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { type } from 'os';

const resend = new Resend('re_dCEBKPPE_KoQipwRN1FNp3JBS2NNth9ZM');

type EmailType = {
	name: string;
	correo: string;
	message: string;
};

export async function POST(request: { json: () => Promise<EmailType> }) {
	const { name, correo, message } = await request.json();

	console.log(name, correo, message);

	try {
		const data = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: [correo],
			subject: 'Nuevo mensaje de pagina personal',
			react: EmailTemplate({ firstName: name, correo, message }),
			text: '',
		});
		console.log(data);
		return NextResponse.json(
			{
				message: 'Email sent',
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
