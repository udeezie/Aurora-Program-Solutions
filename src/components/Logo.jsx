export default function Logo({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 40"
      fill="none"
      role="img"
      aria-label="Aurora Program Solutions"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 34 C12 14 19 6 24 5 C29 6 36 14 43 34"
        stroke="#84c98e"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M11 34 C16 19 21 11 24 10 C27 11 32 19 37 34"
        stroke="#d99a4e"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 34 C19 24 22 18 24 17 C26 18 29 24 32 34"
        stroke="#c97a52"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line x1="3" y1="34.5" x2="45" y2="34.5" stroke="rgba(234,230,218,0.45)" strokeWidth="1" />
    </svg>
  );
}
