import { useMemo } from "react";
import "./CardContainer.css";

const CardContainer = ({
  cCIInformacinSemanalPMDIn,
  deyaniraAndradeCoeto,
  hace2Das,
  propGap,
  propLeft,
}) => {
  const textStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const hace2DasStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="div160">
      <div className="line1" />
      <div className="text1" style={textStyle}>
        <div className="cci-informacin1">{cCIInformacinSemanalPMDIn}</div>
        <div className="deyanira-andrade-coeto">{deyaniraAndradeCoeto}</div>
      </div>
      <div className="placeholder2" />
      <div className="hace-2-das" style={hace2DasStyle}>
        {hace2Das}
      </div>
      <div className="notif">
        <div className="notif-child" />
        <img className="icon" alt="" src="/2.svg" />
      </div>
    </div>
  );
};

export default CardContainer;
