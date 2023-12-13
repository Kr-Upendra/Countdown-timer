export default function Input({ time, setTime }) {
  return (
    <div className="input__area">
      <label htmlFor="time">Enter Minutes</label>
      <input
        type="number"
        className="input"
        id="time"
        min={1}
        onChange={(e) =>
          setTime(Math.max(60, parseInt(e.target.value, 10) * 60))
        }
      />
    </div>
  );
}
