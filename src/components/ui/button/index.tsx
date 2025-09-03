'use client';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: 'filled' | 'outline' | 'secondary';
};

export default function Button({ label, variant = 'filled', ...props }: Props) {
  const getButtonClass = () => {
    switch (variant) {
      case 'outline':
        return styles.btnOutline;
      case 'secondary':
        return styles.btnSecondary;
      default:
        return styles.btnFill;
    }
  };

  return (
    <button className={getButtonClass()} {...props}>
      {label}
    </button>
  );
}
