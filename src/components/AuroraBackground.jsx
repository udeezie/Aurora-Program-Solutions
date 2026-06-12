import "./AuroraBackground.scss";

const stars = Array.from({ length: 70 }, (_, i) => ({
  x: ((i * 73) % 997) / 0.997,
  y: ((i * 131) % 613) / 0.613,
  s: 1 + ((i * 7) % 3) * 0.5,
}));

export default function AuroraBackground() {
  return (
    <>
      <div className="night-sky" aria-hidden="true">
        <svg
          className="sky-stars"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="tw-a">
            {stars.filter((_, i) => i % 2 === 0).map((st, i) => (
              <circle key={i} cx={st.x} cy={st.y} r={st.s} fill="rgba(234,230,218,0.55)" />
            ))}
          </g>
          <g className="tw-b">
            {stars.filter((_, i) => i % 2 === 1).map((st, i) => (
              <circle key={i} cx={st.x} cy={st.y} r={st.s} fill="rgba(234,230,218,0.55)" />
            ))}
          </g>
        </svg>
      </div>
      <div className="grain" aria-hidden="true" />
    </>
  );
}
