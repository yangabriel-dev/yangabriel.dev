import { cn } from "@/lib/utils";
import styles from "./star-wars-toggle-switch.module.css";

// Toggle BB-8 (Uiverse / 21st.dev). É um botão role="switch": quem usa passa
// checked e onClick. O visual de noite acompanha a classe .dark do <html>.
export function StarWarsToggleSwitch({
  checked,
  className,
  ...props
}: Omit<React.ComponentProps<"button">, "children"> & { checked: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={cn(styles["bb8-toggle"], className)}
      {...props}
    >
      <span aria-hidden className={styles["bb8-toggle__container"]}>
        <span className={styles["bb8-toggle__scenery"]}>
          {Array.from({ length: 7 }, (_, i) => (
            <span key={`star-${i}`} className={styles["bb8-toggle__star"]} />
          ))}
          <span className={styles["tatto-1"]} />
          <span className={styles["tatto-2"]} />
          <span className={styles.gomrassen} />
          <span className={styles.hermes} />
          <span className={styles.chenini} />
          {Array.from({ length: 3 }, (_, i) => (
            <span key={`cloud-${i}`} className={styles["bb8-toggle__cloud"]} />
          ))}
        </span>
        <span className={styles.bb8}>
          <span className={styles["bb8__head-container"]}>
            <span className={styles.bb8__antenna} />
            <span className={styles.bb8__antenna} />
            <span className={styles.bb8__head} />
          </span>
          <span className={styles.bb8__body} />
        </span>
        <span className={styles.artificial__hidden}>
          <span className={styles.bb8__shadow} />
        </span>
      </span>
    </button>
  );
}
