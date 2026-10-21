export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <g strokeWidth="1.6" strokeLinecap="round" stroke="#22d3ee">
        <path d="M16 7v19" />
        <ellipse cx="9.5" cy="12" rx="6.5" ry="2.4" transform="rotate(-18 9.5 12)" fill="#22d3ee" fillOpacity=".15" />
        <ellipse cx="22.5" cy="12" rx="6.5" ry="2.4" transform="rotate(18 22.5 12)" fill="#22d3ee" fillOpacity=".15" />
        <ellipse cx="10.5" cy="16.5" rx="5.5" ry="2" transform="rotate(-8 10.5 16.5)" fill="#818cf8" fillOpacity=".2" stroke="#818cf8" />
        <ellipse cx="21.5" cy="16.5" rx="5.5" ry="2" transform="rotate(8 21.5 16.5)" fill="#818cf8" fillOpacity=".2" stroke="#818cf8" />
      </g>
    </svg>
  );
}
