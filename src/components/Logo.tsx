export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g strokeWidth="1.6" strokeLinecap="round" stroke="#2dd4bf">
        <path d="M16 7v19" />
        <ellipse
          cx="9.5"
          cy="12"
          rx="6.5"
          ry="2.4"
          transform="rotate(-18 9.5 12)"
          fill="#2dd4bf"
          fillOpacity=".15"
        />
        <ellipse
          cx="22.5"
          cy="12"
          rx="6.5"
          ry="2.4"
          transform="rotate(18 22.5 12)"
          fill="#2dd4bf"
          fillOpacity=".15"
        />
        <ellipse
          cx="10.5"
          cy="16.5"
          rx="5.5"
          ry="2"
          transform="rotate(-8 10.5 16.5)"
          fill="#e8c98f"
          fillOpacity=".2"
          stroke="#e8c98f"
        />
        <ellipse
          cx="21.5"
          cy="16.5"
          rx="5.5"
          ry="2"
          transform="rotate(8 21.5 16.5)"
          fill="#e8c98f"
          fillOpacity=".2"
          stroke="#e8c98f"
        />
      </g>
    </svg>
  );
}
