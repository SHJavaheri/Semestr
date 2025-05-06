import React from 'react';
import './ProgressCircle.css';

interface ProgressCircleProps {
  percent: number; // value between 0 and 100
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ percent }) => {
  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="progress-wrapper">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#333"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#00bfff"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="progress-ring"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#fff"
          fontSize="20px"
        >
          {percent}%
        </text>
      </svg>
    </div>
  );
};

export default ProgressCircle;
