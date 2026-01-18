interface ContactEmailProps {
    name: string;
    phone: string;
    email?: string;
    service?: string;
    message: string;
}

export const generateContactEmailHTML = ({
    name,
    phone,
    email,
    service,
    message,
}: ContactEmailProps): string => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1e40af; padding: 20px; color: white; text-align: center;">
            <h1 style="margin: 0;">New Contact Request</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #eee;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            ${email ? `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>` : ''}
            ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
            <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #1e40af;">
                <p style="margin: 0;"><strong>Message:</strong></p>
                <p style="margin-top: 10px; white-space: pre-wrap;">${message}</p>
            </div>
        </div>
        <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>Sent from Seven Star Lining Works Website</p>
        </div>
    </div>
</body>
</html>
    `.trim();
};
