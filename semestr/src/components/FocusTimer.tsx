// FocusTimer.tsx
import React, { useState, useEffect, useRef } from 'react';
import './FocusTimer.css';

const defaultTimers = ['25 min – Study Sprint', '1 hr – Deep Focus', '2 hr – Exam Prep'];

const FocusTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [recentTimers, setRecentTimers] = useState(defaultTimers);
  const [showCreate, setShowCreate] = useState(true);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [label, setLabel] = useState('');
  const [soundPlaying, setSoundPlaying] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isRunning) {
      setIsRunning(false);
      setSoundPlaying(true);
      audioRef.current = new Audio('timermusic/Slow Days.mp3');
      audioRef.current.play();
    }

    return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
  }, [isRunning, secondsLeft]);

  const startTimer = (durationInSeconds: number, fullLabel: string) => {
    setSecondsLeft(durationInSeconds);
    setIsRunning(true);
    setShowCreate(false);
    setSoundPlaying(false);
    setRecentTimers((prev) => [fullLabel, ...prev.filter((t) => t !== fullLabel)].slice(0, 3));
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setSoundPlaying(false);
    }
  };

  const handleCreate = () => {
    const totalSeconds = hours * 3600 + minutes * 60;
    if (totalSeconds <= 0) return;

    const timeLabel = [
      hours > 0 ? `${hours} hr` : '',
      minutes > 0 ? `${minutes} min` : ''
    ].filter(Boolean).join(' ');

    const fullLabel = label.trim()
      ? `${timeLabel} – ${label.trim()}`
      : `${timeLabel} – Custom Focus`;

    startTimer(totalSeconds, fullLabel);
    setLabel('');
  };

  const formatTime = () => {
    const min = Math.floor(secondsLeft / 60).toString().padStart(2, '0');
    const sec = (secondsLeft % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <div className="focus-timer-panel">
      <div className="panel-title">Focus Timer</div>

      {showCreate && (
        <>
          <div className="create-timer-ui">
            <div className="time-input">
              <label>Hours</label>
              <input type="number" min={0} max={12} value={hours} onChange={(e) => setHours(parseInt(e.target.value) || 0)} />
            </div>
            <div className="time-input">
              <label>Minutes</label>
              <input type="number" min={0} max={59} value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value) || 0)} />
            </div>
          </div>

          <div className="timer-label-input">
            <label>Timer Name</label>
            <input
              type="text"
              placeholder="e.g. LOCK IN"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>

          <div className="start-timer-button">
            <button onClick={handleCreate}>Start Focus</button>
          </div>

          <div className="recent-label">Recent Timers:</div>
          <div className="recent-timers">
            {recentTimers.map((label, i) => (
              <button key={i} onClick={() => {
                const [timeStr] = label.split(' – ');
                const [hr, min] = timeStr.includes('hr')
                  ? [parseInt(timeStr), parseInt(timeStr.split(' ')[2] || '0')]
                  : [0, parseInt(timeStr)];
                const totalSeconds = hr * 3600 + min * 60;
                startTimer(totalSeconds, label);
              }}>
                {label}
              </button>
            ))}
          </div>
        </>
      )}

      {!showCreate && (
        <>
          <div className="timer-circle">{formatTime()}</div>
          <div className="timer-controls">
            {isRunning ? (
              <button onClick={() => setIsRunning(false)}>Pause</button>
            ) : (
              <button onClick={() => setIsRunning(true)}>Resume</button>
            )}
            <button onClick={() => {
              setIsRunning(false);
              setSecondsLeft(0);
              setShowCreate(true);
            }}>Reset</button>
          </div>

          {!isRunning && secondsLeft === 0 && (
            <div className="timer-complete">
              <span>Time to take a break! 🥳</span>
              {soundPlaying && (
                <button onClick={stopSound} className="stop-sound-btn">Stop Sound</button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FocusTimer;
