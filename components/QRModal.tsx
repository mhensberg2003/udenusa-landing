'use client';

import Image from 'next/image';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRModal({ isOpen, onClose }: QRModalProps) {
  if (!isOpen) return null;

  return (
    <div className="qr-modal open" onClick={onClose}>
      <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
        <Image
          src="/images/universal-download-qr-code.png"
          alt="UdenUSA Universal Download QR Code"
          width={300}
          height={300}
          className="qr-code-img-expanded"
        />
        <button className="close-qr-modal" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}
