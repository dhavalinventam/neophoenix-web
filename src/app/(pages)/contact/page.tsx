import styles from "./page.module.scss";

export const metadata = {
  title: "Contact",
  description: "Get in touch with us.",
};

export default function ContactPage() {
  return (
    <section className={styles.section}>
      <h1>Contact Us</h1>
      <form className={styles.form}>
        <label className={styles.row}>
          Name
          <input className={styles.input} type="text" name="name" required />
        </label>
        <label className={styles.row}>
          Email
          <input className={styles.input} type="email" name="email" required />
        </label>
        <label className={styles.row}>
          Message
          <textarea className={styles.textarea} name="message" rows={6} required />
        </label>
        <button className={styles.submit} type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
