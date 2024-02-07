import { useMemo } from "react";
import "./DateRangeFilter.css";

const DateRangeFilter = ({ dateRangeLabel, propLeft, propPadding }) => {
  const hastaFechaStyle = useMemo(() => {
    return {
      left: propLeft,
      padding: propPadding,
    };
  }, [propLeft, propPadding]);

  return (
    <div className="hasta-fecha" style={hastaFechaStyle}>
      <div className="hasta">{dateRangeLabel}</div>
      <div className="calendario">
        <img className="uiscalender-icon" alt="" src="/uiscalender.svg" />
        <div className="div79">12-01-2023</div>
      </div>
    </div>
  );
};

export default DateRangeFilter;
