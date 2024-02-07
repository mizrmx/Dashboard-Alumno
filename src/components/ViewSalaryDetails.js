import { useMemo } from "react";
import "./ViewSalaryDetails.css";

const ViewSalaryDetails = ({
  viewSalaryDetailsPosition,
  viewSalaryDetailsTop,
  viewSalaryDetailsLeft,
}) => {
  const viewSalaryDetailsStyle = useMemo(() => {
    return {
      position: viewSalaryDetailsPosition,
      top: viewSalaryDetailsTop,
      left: viewSalaryDetailsLeft,
    };
  }, [viewSalaryDetailsPosition, viewSalaryDetailsTop, viewSalaryDetailsLeft]);

  return (
    <div className="view-salary-details" style={viewSalaryDetailsStyle}>
      <div className="calificar-parent">
        <div className="calificar">Calificar</div>
        <img className="vector-icon" alt="" src="/vector.svg" />
      </div>
    </div>
  );
};

export default ViewSalaryDetails;
