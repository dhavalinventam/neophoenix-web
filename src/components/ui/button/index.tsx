"use client";
import styles from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export default function Button({ label, ...props }: Props) {
  return (
    <button className={styles.button} {...props}>
      {label}
    </button>
  );
}
