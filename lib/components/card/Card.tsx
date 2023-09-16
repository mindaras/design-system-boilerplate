import classNames from "classnames";
import styles from "./Card.module.scss";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  disablePadding?: boolean;
}

const Card: React.FC<CardProps> = ({ children, disablePadding, className }) => {
  const classes = classNames(
    styles.container,
    { [styles.container__noPadding]: disablePadding },
    className
  );
  return <div className={classes}>{children}</div>;
};

export { Card };
