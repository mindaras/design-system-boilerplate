import classnames from "classnames";
import styles from "./Breadcrumb.module.scss";

export interface Breadcrumb {
  label: string;
  value?: any;
  homeIcon?: boolean;
  onClick: (value?: any) => void;
}

export type Breadcrumbs = Breadcrumb[];

export interface BreadcrumbProps {
  items: Breadcrumbs;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <div className={classnames(styles.container, className)}>
      {items.map(({ label, value, onClick }) => (
        <button
          className={styles.breadcrumb}
          type="button"
          onClick={() => onClick(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export { Breadcrumb };
