import styles from "./Inline.module.scss";

interface Props {
  children: React.ReactNode;
}

const Inline: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export { Inline };
