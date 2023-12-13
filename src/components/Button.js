export default function Button({ icon, onClick, tipText }) {
  return (
    <button onClick={onClick}>
      <i className={`fa-solid ${icon}`}></i>
      <span className="tt">{tipText}</span>
    </button>
  );
}
