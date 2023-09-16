import classNames from "classnames";
import styles from "./Button.module.scss";

export type ButtonType = "button" | "reset" | "submit";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "expressive"
  | "destructive"
  | "tertiary-purple"
  | "text";

export type ButtonSizes = "sm" | "md" | "l" | "xl";

export interface ButtonProps {
  text: string;
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSizes;
  disabled?: boolean;
  className?: string;
  onClick: VoidFunction;
}

const Button: React.FC<ButtonProps> = ({
  className,
  text,
  type = "button",
  variant = "primary",
  size = "md",
  disabled,
  onClick,
}) => {
  const classnames = classNames(
    styles.button,
    {
      [styles.button__primary]: variant === "primary",
      [styles.button__secondary]: variant === "secondary",
      [styles.button__expressive]: variant === "expressive",
      [styles.button__destructive]: variant === "destructive",
      [styles.button__tertiary_purple]: variant === "tertiary-purple",
      [styles.button__text]: variant === "text",
      [styles.button__large]: size === "l",
      [styles.button__xlarge]: size === "xl",
      [styles.button__disabled]: disabled,
    },
    className
  );

  return (
    <button
      className={classnames}
      type={type}
      onClick={() => !disabled && onClick()}
    >
      {text}
    </button>
  );
};

export { Button };
