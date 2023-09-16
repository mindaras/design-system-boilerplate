import classNames from "classnames";
import styles from "./Spacer.module.scss";

interface Props {
  horizontal?: boolean;
  vertical?: boolean;
}

const Spacer: React.FC<Props> = ({ vertical, horizontal }) => {
  const classnames = classNames({
    [styles.container__vertical]: vertical,
    [styles.container__horizontal]: horizontal,
  });

  return <span className={classnames} />;
};

export { Spacer };
