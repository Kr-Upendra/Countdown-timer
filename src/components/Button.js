export default function Button({ icon, onClick }) {
  return (
    <button onClick={onClick}>
      <i className={`fa-solid ${icon}`}></i>
      <span className="tt">Play</span>
    </button>
  );
}
