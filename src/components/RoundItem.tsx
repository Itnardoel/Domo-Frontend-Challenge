type RoundItemProps = {
  text: string;
  color: string;
};

const RoundItem = ({text, color}: RoundItemProps) => {
  return (
    <div
      className="d-flex justify-content-center rounded-circle p-5 text-white text-center fw-semibold fs-5"
      style={{backgroundColor: color, width: "270px", height: "270px"}}
    >
      <span className="align-self-center">{text}</span>
    </div>
  );
};

export default RoundItem;
