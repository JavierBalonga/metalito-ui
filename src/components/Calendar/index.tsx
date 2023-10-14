import { useMemo, useState } from "react";
import { cx } from "class-variance-authority";
import IconButton from "../IconButton";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import capitalize from "../utils/capitalize";

export interface CalendarProps {
  /** Locale to use for formatting dates */
  locale?: string;
  /** The value of the calendar */
  value?: Date;
  /** Called when the value of the calendar changes */
  onChange?: (date: Date) => void;
}

export default function Calendar({
  locale = navigator.language,
  value: propsValue,
  onChange,
}: CalendarProps) {
  const [month, setMonth] = useState(() => {
    const month = new Date();
    month.setDate(1);
    return month;
  });
  const [localValue, setLocalValue] = useState<Date | null>(null);

  const value = propsValue ?? localValue;

  const formatAsWeekday = useMemo(() => {
    const formater = new Intl.DateTimeFormat(locale, { weekday: "short" });
    return (date: Date) => {
      return capitalize(formater.format(date));
    };
  }, [locale]);

  const formatAsMonth = useMemo(() => {
    const formater = new Intl.DateTimeFormat(locale, { month: "long" });
    return (date: Date) => {
      return capitalize(formater.format(date));
    };
  }, [locale]);

  const weekDays = useMemo(() => {
    const firstMonday = new Date("1970-01-05T00:00:00.000Z");
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(firstMonday);
      date.setDate(firstMonday.getDate() + i);
      return date;
    });
  }, []);

  const days = useMemo(() => {
    const daysMonth = month.getMonth();
    const daysYear = month.getFullYear();
    const days: Date[] = [];
    const current = new Date(daysYear, daysMonth, 1);
    while (current.getMonth() === daysMonth) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return days;
  }, [month]);

  const handlePrevMonth = () => {
    setMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(newMonth.getMonth() - 1);
      return newMonth;
    });
  };

  const handleNextMonth = () => {
    setMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(newMonth.getMonth() + 1);
      return newMonth;
    });
  };

  const handleChange = (date: Date) => {
    onChange?.(date);
    setLocalValue(date);
  };

  return (
    <div className="flex w-fit flex-col gap-2">
      {/* Month */}
      <div className="flex flex-row items-center">
        <IconButton onClick={handlePrevMonth}>
          <ArrowLeftIcon />
        </IconButton>
        <h5 className="grow text-center">
          {formatAsMonth(month)} {month.getFullYear()}
        </h5>
        <IconButton onClick={handleNextMonth}>
          <ArrowRightIcon />
        </IconButton>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 justify-items-center gap-1">
        {weekDays.map((day) => (
          <span className="w-9 text-center">{formatAsWeekday(day)}</span>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 justify-items-center gap-1">
        {/* First days placeholders  */}
        {Array.from({ length: days[0].getDay() }, (_, i) => (
          <div key={i} />
        ))}

        {days.map((day) => (
          <IconButton
            key={day.toISOString()}
            className={cx(
              "border-none",
              day.valueOf() === value?.valueOf() && "bg-white text-black",
            )}
            onClick={() => handleChange(day)}
          >
            {day.getDate()}
          </IconButton>
        ))}
      </div>
    </div>
  );
}
