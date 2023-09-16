import classnames from "classnames";
import styles from "./Checkbox.module.scss";
import { useEffect, useRef } from "react";

export interface CheckboxProps {
  name: string;
  label: string;
  className?: string;
  value?: boolean;
  additional?: string;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  name,
  label,
  value,
  additional,
  onChange,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value && ref.current) ref.current.checked = true;
  }, []);

  return (
    <div className={classnames(styles.container, className)}>
      <div className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          type="checkbox"
          name={name}
          ref={ref}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className={styles.label}>{label}</span>
      </div>
      {additional && <p className={styles.additionalText}>{additional}</p>}
    </div>
  );
};

export { Checkbox };
