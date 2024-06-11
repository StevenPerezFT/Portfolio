import React from 'react';
import QRCode from 'qrcode.react';

interface QRCodeEmailProps {
    link: string;
    size?: number;
}

function QRCodeEmail({ link, size }: QRCodeEmailProps) {
    return (
        <div className="flex flex-col items-center">
            <QRCode value={link} size={size} />
        </div>
    );
};

export default QRCodeEmail;