'use client';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: 'filled' | 'outline';
};

export default function Button({ label, variant = 'filled', ...props }: Props) {
  const buttonClass = variant === 'outline' ? styles.btnOutline : styles.btnFill;

  return (
    <button className={buttonClass} {...props}>
      {label}
    </button>
  );
}
