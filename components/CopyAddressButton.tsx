'use client';

import { useState } from 'react';

type CopyAddressButtonProps = {
  address: string;
  className?: string;
};

const CopyAddressButton = ({ address, className }: CopyAddressButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button type="button" onClick={handleCopy} className={className}>
      {copied ? 'Copied!' : 'Copy address'}
    </button>
  );
};

export default CopyAddressButton;
