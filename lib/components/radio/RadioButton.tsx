import classnames from "classnames";
import styles from "./RadioButton.module.scss";
import { useEffect, useRef } from "react";

export interface RadioButtonProps {
  name: string;
  label: string;
  className?: string;
  value?: boolean;
  additional?: string;
  onChange: (checked: boolean) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
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
    <div className={styles.container}>
      <div className={classnames(styles.radioContainer, className)}>
        <input
          className={styles.radio}
          type="radio"
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

export { RadioButton };
