import React, { useState } from 'react';
import './Dashboard.css';
import ProgressCircle from './components/ProgressCircle';
import FocusTimer from './components/FocusTimer';

function App() {
  const [useGoogleCalendar, setUseGoogleCalendar] = useState(false);
  const manualDeadlines = [
    "CS101 – Assignment 3 due May 10",
    "Math201 – Midterm Review on May 12",
    "ENG102 – Essay Draft due May 14"
  ];

  const recentItems = Array.from({ length: 15 }, (_, i) => `Last visited: Placeholder Item #${i + 1}`);

  return (
    <div className="dashboard">
      <div className="row">
        <div className="panel glass" style={{ flex: 0.5, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px', textAlign: 'left' }}>
            Progress
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ProgressCircle percent={80} />
          </div>
        </div>

        <div className="panel glass" style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '16px', fontWeight: 500 }}>Upcoming Deadlines</span>

            {/* Toggle Switch */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#ccc' }}>
              <input
                type="checkbox"
                checked={useGoogleCalendar}
                onChange={() => setUseGoogleCalendar(!useGoogleCalendar)}
                style={{ transform: 'scale(1.2)', accentColor: '#00bfff' }}
              />
              <span>{useGoogleCalendar ? "Google Calendar" : "Manual"}</span>
            </label>
          </div>

          {/* Dynamic Content Based on Toggle */}
          {useGoogleCalendar ? (
            <div style={{
              flex: 1,
              backgroundColor: 'rgba(0, 191, 255, 0.1)',
              border: '1px dashed rgba(0, 191, 255, 0.4)',
              borderRadius: '12px',
              padding: '20px',
              color: '#88ccff',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              Google Calendar integration coming soon...
            </div>
          ) : (
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              overflowY: 'auto',
              padding: '5px 5px 5px 0',
            }}>
              {manualDeadlines.map((item, index) => (
                <div key={index} style={{
                  background: 'rgba(0, 191, 255, 0.1)',
                  border: '1px solid rgba(0, 191, 255, 0.4)',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  color: '#ccf',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>{item}</span>
                  <span style={{ fontSize: '11px', color: '#66d' }}>📅</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="row">
        {/* Where You Left Off */}
        <div className="panel glass" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '16px', fontWeight: 500 }}>Where You Left Off</span>
            <button style={{
              backgroundColor: '#ffffff22',
              border: 'none',
              borderRadius: '6px',
              padding: '4px 10px',
              color: 'white',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)'
            }}>
              Clear
            </button>
          </div>

          <div style={{
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            maxHeight: '200px', // controls visible area for scrolling
            paddingRight: '6px'
          }}>
            {[...Array(15)].map((_, i) => {
              const date = new Date();
              date.setDate(date.getDate() - i);
              const dateString = date.toLocaleString('default', { month: 'short', day: 'numeric' });
              return (
                <div key={i} style={{
                  padding: '10px 14px',
                  backgroundColor: 'rgba(0, 191, 255, 0.1)',
                  border: '1px solid rgba(0, 191, 255, 0.4)',
                  borderRadius: '12px',
                  color: '#ccf',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>{dateString} – Placeholder Item #{i + 1}</span>
                  <span style={{ fontSize: '11px', color: '#66d' }}>🕓</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* You Should Catch Up On... */}
        <div className="panel glass" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '10px' }}>
            You Should Catch Up On...
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
            {/* Placeholder logic — update later */}
            {true ? ( // Replace 'true' with !courses.length when functional
              <div style={{
                backgroundColor: 'rgba(0, 191, 255, 0.1)',
                border: '1px solid rgba(0, 191, 255, 0.4)',
                borderRadius: '12px',
                padding: '14px',
                textAlign: 'center',
                color: '#99ccff',
                fontWeight: 500
              }}>
                You’re all caught up!
              </div>
            ) : (
              // Placeholder for least active courses
              ['ENG102', 'CS101', 'Math201'].map((course, i) => (
                <div key={i} style={{
                  padding: '10px 14px',
                  backgroundColor: 'rgba(0, 191, 255, 0.1)',
                  border: '1px solid rgba(0, 191, 255, 0.4)',
                  borderRadius: '12px',
                  color: '#ccf',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>{course} – hasn’t been opened in a while</span>
                  <span style={{ fontSize: '11px', color: '#66d' }}>⚠️</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="row">
      {/* Focus Timer */}
      <div className="panel glass">
        <FocusTimer />
      </div>

        <div className="panel glass">Motivational Quotes</div>
        <div className="panel glass">Spotify</div>
      </div>
    </div>
  );
}

export default App;
