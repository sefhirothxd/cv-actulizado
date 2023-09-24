interface EmailTemplateProps {
	firstName: string;
	correo: string;
	message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
	firstName,
	correo,
	message,
}) => {
	return (
		<div>
			<h1>¡Hola, te acaba de enviar un mensaje!</h1>
			<p>Nombre: {firstName}</p>
			<p>Correo: {correo}</p>
			<p>Mensaje: {message}</p>
		</div>
	);
};
