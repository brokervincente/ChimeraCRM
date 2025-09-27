import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className = '', ...rest }: Props) {
  return (
    <button
      className={`px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-shadow shadow ${className}`}
      {...rest}
    />
  );
}
