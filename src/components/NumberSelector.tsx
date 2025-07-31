interface NumberSelectorProps {
  label: string;
  setValue: (value: number) => void;
  value: number;
  min: number;
  max: number;
}

const NumberSelector: React.FC<NumberSelectorProps> = ({
  label,
  setValue,
  value,
  min,
  max
}) => {
  const decrement = () => {
    if (value > min) setValue(value - 1);
  }

  const increment = () => {
    if (value < max) setValue(value + 1);
  }

  return (
    <div className="number-selector">
      <span className="label">{label}</span>
      <div className="selector-body">
        <div className="value-display">{value}</div>
        <div className="button-group">
           <button
            onClick={decrement}
            className="arrow-button down"
            aria-label="Decrease"
          >
            -
          </button>
          <button
            onClick={increment}
            className="arrow-button up"
            aria-label="Increase"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumberSelector;
