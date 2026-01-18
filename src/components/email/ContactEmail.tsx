import * as React from 'react';

interface ContactEmailProps {
    name: string;
    phone: string;
    email?: string;
    service?: string;
    message: string;
}

export const ContactEmail: React.FC<ContactEmailProps> = ({
    name,
    phone,
    email,
    service,
    message,
}) => (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
        <div style={{ backgroundColor: '#1e40af', padding: '20px', color: 'white', textAlign: 'center' }}>
            <h1 style={{ margin: 0 }}>New Contact Request</h1>
        </div>
        <div style={{ padding: '20px', border: '1px solid #eee' }}>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a></p>
            {email && <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>}
            {service && <p><strong>Service:</strong> {service}</p>}
            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f9fafb', borderLeft: '4px solid #1e40af' }}>
                <p style={{ margin: 0 }}><strong>Message:</strong></p>
                <p style={{ marginTop: '10px', whiteSpace: 'pre-wrap' }}>{message}</p>
            </div>
        </div>
        <div style={{ textAlign: 'center', padding: '20px', color: '#666', fontSize: '12px' }}>
            <p>Sent from Seven Star Lining Works Website</p>
        </div>
    </div>
);
