type TopoVisualProps = {
  seed: number;
  hue: number;
  className?: string;
};

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 400;
const H = 260;

// Courbes de niveau et points de contrôle générés de façon déterministe, à superposer à une photo.
export function TopoVisual({ seed, hue, className }: TopoVisualProps) {
  const rand = mulberry32(seed);
  const f1 = 0.008 + rand() * 0.01;
  const f2 = 0.02 + rand() * 0.02;
  const p1 = rand() * Math.PI * 2;
  const p2 = rand() * Math.PI * 2;
  const lines = 16;

  const paths = Array.from({ length: lines }, (_, i) => {
    const base = (i / (lines - 1)) * (H + 60) - 30;
    const amp = 14 + (i / lines) * 22;
    const pts: string[] = [];
    for (let x = 0; x <= W; x += 10) {
      const y =
        base +
        Math.sin(x * f1 + p1 + i * 0.35) * amp +
        Math.sin(x * f2 + p2 + i * 0.6) * (amp * 0.35);
      pts.push(`${x},${y.toFixed(1)}`);
    }
    return `M${pts.join(" L")}`;
  });

  const dots = Array.from({ length: 22 }, () => ({
    x: Math.round(rand() * W),
    y: Math.round(rand() * H),
    r: (0.8 + rand() * 1.4).toFixed(1),
  }));

  const stroke = `hsl(${hue} 85% 65%)`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={stroke}
          strokeWidth={i % 4 === 0 ? 1.4 : 0.7}
          strokeOpacity={i % 4 === 0 ? 0.8 : 0.4}
        />
      ))}
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={dot.r}
          fill={stroke}
          fillOpacity={0.7}
        />
      ))}
    </svg>
  );
}
