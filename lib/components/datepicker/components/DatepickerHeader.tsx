import styles from "./DatepickerHeader.module.scss";
import { ReactComponent as ArrowLeftIcon } from "@assets/icons/arrowLeft-black.svg";
import { ReactComponent as ArrowRightIcon } from "@assets/icons/arrowRight-black.svg";
import { ReactComponent as CloseIcon } from "@assets/icons/close-black.svg";

interface Props {
  months: string[];
  years: number[];
  date: Date;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  changeYear: (year: number) => void;
  changeMonth: (month: number) => void;
  decreaseMonth: VoidFunction;
  increaseMonth: VoidFunction;
  close: VoidFunction;
}

const DatepickerHeader: React.FC<Props> = ({
  months,
  years,
  date,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  close,
}) => {
  return (
    <div className={styles.container}>
      <button className={styles.close} type="button" onClick={close}>
        <CloseIcon />
      </button>
      <div className={styles.navigation}>
        <div className={styles.dropdowns}>
          <select
            className={styles.dropdown}
            value={date?.getMonth()}
            onChange={(e) => changeMonth(parseInt(e.target.value))}
          >
            {months.map((month) => (
              <option key={month} value={months.indexOf(month)}>
                {month}
              </option>
            ))}
          </select>
          <select
            className={styles.dropdown}
            value={date?.getFullYear()}
            onChange={(e) => changeYear(parseInt(e.target.value))}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.controls}>
          <button
            className={styles.control}
            type="button"
            disabled={prevMonthButtonDisabled}
            onClick={decreaseMonth}
          >
            <ArrowLeftIcon />
          </button>
          <button
            className={styles.control}
            type="button"
            disabled={nextMonthButtonDisabled}
            onClick={increaseMonth}
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export { DatepickerHeader };
