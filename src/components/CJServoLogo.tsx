import React from 'react';

interface CJServoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CJServoLogo: React.FC<CJServoLogoProps> = ({ className = '', size = 'lg' }) => {
  // Height presets enlarged by 20% for prominent brand visibility
  const heightClass = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-[53px] lg:h-[58px]',
    xl: 'h-13 sm:h-[62px] lg:h-[68px]',
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${heightClass} ${className}`}>
      <svg
        viewBox="0 0 680 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-w-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
      >
        <defs>
          {/* Chrome / Brushed Silver Gradient for main borders and letters */}
          <linearGradient id="chrome-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#cbd5e1" />
            <stop offset="48%" stopColor="#64748b" />
            <stop offset="52%" stopColor="#f8fafc" />
            <stop offset="78%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          {/* Electric Blue Glossy Gradient for CJ interior */}
          <linearGradient id="cj-blue-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="35%" stopColor="#0284c7" />
            <stop offset="70%" stopColor="#0369a1" />
            <stop offset="100%" stopColor="#075985" />
          </linearGradient>

          {/* Core Electric Blue Lightning / Sparkle Glow */}
          <linearGradient id="lightning-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="50%" stopColor="#00b4ff" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* Drop shadow filter for 3D metallic presence */}
          <filter id="metallic-bevel" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.8" />
          </filter>

          <filter id="blue-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --------------------- CJ EMBLEM (LEFT) --------------------- */}
        <g id="cj-emblem" filter="url(#metallic-bevel)">
          {/* CJ Outer Darker Shadow / Extrusion */}
          <path
            d="M 45 42 
               L 155 42 
               Q 165 42 165 52 
               L 165 82 
               Q 165 118 135 124 
               L 80 124 
               Q 45 124 45 95 
               L 45 42 Z"
            fill="#090d14"
            opacity="0.4"
          />

          {/* Outer Chrome Contour for CJ */}
          {/* Letter C */}
          <path
            d="M 150 48 
               L 80 48 
               Q 48 48 48 78 
               L 48 90 
               Q 48 120 80 120 
               L 145 120 
               L 145 102 
               L 86 102 
               Q 68 102 68 90 
               L 68 78 
               Q 68 66 86 66 
               L 150 66 Z"
            fill="url(#chrome-grad)"
            stroke="#1e293b"
            strokeWidth="3"
          />

          {/* Letter J interlocking */}
          <path
            d="M 175 48 
               L 225 48 
               L 225 96 
               Q 225 122 195 122 
               L 158 122 
               L 158 104 
               L 192 104 
               Q 206 104 206 94 
               L 206 48 
               L 175 48 Z"
            fill="url(#chrome-grad)"
            stroke="#1e293b"
            strokeWidth="3"
          />

          {/* Blue Core Inlay for C */}
          <path
            d="M 146 52 
               L 82 52 
               Q 52 52 52 79 
               L 52 89 
               Q 52 116 82 116 
               L 141 116 
               L 141 106 
               L 84 106 
               Q 72 106 72 89 
               L 72 79 
               Q 72 62 84 62 
               L 146 62 Z"
            fill="url(#cj-blue-grad)"
          />

          {/* Inner Gloss Highlights for C */}
          <path
            d="M 144 54 L 84 54 Q 56 54 56 78 L 56 80 Q 74 60 144 60 Z"
            fill="#ffffff"
            opacity="0.6"
          />

          {/* Blue Core Inlay for J */}
          <path
            d="M 179 52 
               L 221 52 
               L 221 95 
               Q 221 118 194 118 
               L 162 118 
               L 162 108 
               L 191 108 
               Q 202 108 202 95 
               L 202 52 
               L 179 52 Z"
            fill="url(#cj-blue-grad)"
          />

          {/* Inner Gloss Highlight for J */}
          <path
            d="M 181 54 L 219 54 L 219 72 Q 210 60 181 60 Z"
            fill="#ffffff"
            opacity="0.6"
          />

          {/* 4-Point Blue Star Sparkle next to J */}
          <g transform="translate(232, 98)" filter="url(#blue-glow)">
            <path
              d="M 0 -12 Q 1 -2 10 0 Q 1 2 0 12 Q -1 2 -10 0 Q -1 -2 0 -12 Z"
              fill="url(#lightning-blue)"
            />
            <circle cx="0" cy="0" r="2" fill="#ffffff" />
          </g>
        </g>

        {/* --------------------- SERVO TEXT (RIGHT) --------------------- */}
        <g id="servo-letters" filter="url(#metallic-bevel)">
          {/* S */}
          <path
            d="M 315 54 
               L 272 54 
               Q 256 54 256 68 
               Q 256 80 274 84 
               L 298 88 
               Q 318 92 318 104 
               Q 318 118 296 118 
               L 252 118 
               L 252 104 
               L 296 104 
               Q 302 104 302 98 
               Q 302 92 288 88 
               L 266 84 
               Q 242 78 242 66 
               Q 242 50 268 48 
               L 315 48 Z"
            fill="url(#chrome-grad)"
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* E */}
          <path
            d="M 330 48 
               L 384 48 
               L 384 62 
               L 348 62 
               L 348 76 
               L 380 76 
               L 380 89 
               L 348 89 
               L 348 104 
               L 386 104 
               L 386 118 
               L 330 118 Z"
            fill="url(#chrome-grad)"
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* R */}
          <path
            d="M 400 48 
               L 446 48 
               Q 466 48 466 68 
               Q 466 82 448 86 
               L 468 118 
               L 450 118 
               L 432 88 
               L 418 88 
               L 418 118 
               L 400 118 Z 
               M 418 62 
               L 418 76 
               L 442 76 
               Q 448 76 448 69 
               Q 448 62 442 62 Z"
            fill="url(#chrome-grad)"
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* V */}
          <path
            d="M 474 48 
               L 492 48 
               L 512 102 
               L 532 48 
               L 550 48 
               L 522 118 
               L 502 118 Z"
            fill="url(#chrome-grad)"
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* O (with inner cut for lightning bolt) */}
          <path
            d="M 588 48 
               Q 628 48 628 83 
               Q 628 118 588 118 
               Q 548 118 548 83 
               Q 548 48 588 48 Z 
               M 588 64 
               Q 566 64 566 83 
               Q 566 102 588 102 
               Q 610 102 610 83 
               Q 610 64 588 64 Z"
            fill="url(#chrome-grad)"
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* ELECTRIC LIGHTNING BOLT CUTTING THROUGH "O" */}
          <g filter="url(#blue-glow)">
            <path
              d="M 598 38 
                 L 570 82 
                 L 588 82 
                 L 572 128 
                 L 606 74 
                 L 588 74 
                 L 606 38 Z"
              fill="url(#lightning-blue)"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
            {/* Inner highlight core of bolt */}
            <path
              d="M 596 44 L 576 80 L 590 80 L 580 120 L 602 76 L 588 76 Z"
              fill="#ffffff"
              opacity="0.8"
            />
          </g>
        </g>

        {/* ----------------- SUBTITLE: RC HIGH VOLTAGE // PRO COMPETITION ----------------- */}
        <g id="subtitle" transform="translate(245, 142)">
          {/* "RC HIGH VOLTAGE" */}
          <text
            x="0"
            y="0"
            fill="url(#chrome-grad)"
            fontFamily="'Space Grotesk', 'Chivo', 'JetBrains Mono', sans-serif"
            fontSize="18.5"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="2.5"
          >
            RC HIGH VOLTAGE
          </text>

          {/* Electric Blue Slashes "//" */}
          <text
            x="200"
            y="0"
            fill="url(#lightning-blue)"
            fontFamily="'Space Grotesk', sans-serif"
            fontSize="21"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="1"
            filter="url(#blue-glow)"
          >
            //
          </text>

          {/* "PRO COMPETITION" */}
          <text
            x="232"
            y="0"
            fill="url(#chrome-grad)"
            fontFamily="'Space Grotesk', 'Chivo', 'JetBrains Mono', sans-serif"
            fontSize="18.5"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="2.5"
          >
            PRO COMPETITION
          </text>
        </g>
      </svg>
    </div>
  );
};
