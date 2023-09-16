import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.overrides.scss";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./Datepicker.module.scss";
import classnames from "classnames";
import { DatepickerHeader } from "./components/DatepickerHeader";
import { ReactComponent as CalendarIcon } from "@assets/icons/calendar-black.svg";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const years = Array.from(new Array(30))
  .map((_, i) => new Date().getFullYear() - i)
  .reverse();

export interface DatepickerProps {
  className?: string;
  date?: Date;
  additional?: string;
  onChange: (date: Date | null) => void;
}

const Datepicker: React.FC<DatepickerProps> = ({
  className,
  date: initialDate,
  additional,
  onChange,
}) => {
  const today = new Date();
  const [date, setDate] = useState<Date | null>(initialDate || today);
  const [isOpen, setOpen] = useState<boolean>(false);
  const minDate = new Date(`${years[0]} 01 01`);
  const maxDate = new Date(`${years[years.length - 1]} 12 31`);

  const toggle = () => setOpen(!isOpen);

  const close = () => setOpen(false);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") close();
  };

  useEffect(() => {
    onChange(date);
  }, [date]);

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const getDayClassNames = (day: Date) => {
    return classnames(styles.day, {
      [styles.day__today]:
        day.toLocaleDateString() === today.toLocaleDateString(),
      [styles.day__selected]:
        day.toLocaleDateString() === date?.toLocaleDateString(),
    });
  };

  const onOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (!target.closest("#datepicker")) close();
  };

  return (
    <div className={styles.container}>
      <div id="datepicker" className={styles.datepicker}>
        <DatePicker
          selected={date}
          minDate={minDate}
          maxDate={maxDate}
          onChange={setDate}
          calendarClassName={className}
          dayClassName={getDayClassNames}
          renderCustomHeader={(props) => (
            <DatepickerHeader
              {...props}
              months={months}
              years={years}
              close={close}
            />
          )}
          onClickOutside={onOutsideClick}
          onSelect={close}
          open={isOpen}
          dateFormat="yyyy/MM/dd"
        />
        <button
          className={styles.calendarButton}
          type="button"
          onClick={toggle}
        >
          <CalendarIcon />
        </button>
      </div>
      {additional && <p className={styles.additionalText}>{additional}</p>}
    </div>
  );
};

export { Datepicker };
