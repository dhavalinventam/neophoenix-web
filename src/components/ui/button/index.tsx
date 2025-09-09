'use client';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: 'filled' | 'outline' | 'secondary';
  icon?: ReactNode;
  showIconOnly?: boolean;
};

export default function Button({ label, variant = 'filled', className, icon, showIconOnly = false, ...props }: Props) {
  const getButtonClass = () => {
    const baseClass = (() => {
      switch (variant) {
        case 'outline':
          return styles.btnOutline;
        case 'secondary':
          return styles.btnSecondary;
        default:
          return styles.btnFill;
      }
    })();
    
    return className ? `${baseClass} ${className}` : baseClass;
  };

  return (
    <button className={getButtonClass()} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {!showIconOnly && <span className={styles.label}>{label}</span>}
    </button>
  );
}
