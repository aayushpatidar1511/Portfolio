/**
 * AAYUSH PATIDAR — WEB AUDIO SCI-FI SYNTHESIZER
 * Zero external asset dependencies (synthesized tones)
 */

(function () {
  'use strict';

  let audioCtx = null;
  let isSoundEnabled = false;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTone(freq, type, duration, gainValue) {
    if (!isSoundEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(gainValue || 0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  const SoundFX = {
    hover: () => playTone(620, 'sine', 0.08, 0.02),
    click: () => {
      playTone(880, 'triangle', 0.1, 0.04);
      setTimeout(() => playTone(1200, 'sine', 0.08, 0.03), 30);
    },
    success: () => {
      playTone(523.25, 'triangle', 0.15, 0.05);
      setTimeout(() => playTone(659.25, 'triangle', 0.15, 0.05), 100);
      setTimeout(() => playTone(783.99, 'triangle', 0.25, 0.06), 200);
    },
    terminal: () => playTone(440, 'sine', 0.05, 0.02),
    toggleSound: () => {
      initAudio();
      isSoundEnabled = !isSoundEnabled;
      if (isSoundEnabled) {
        SoundFX.success();
      }
      return isSoundEnabled;
    },
    isEnabled: () => isSoundEnabled
  };

  window.SoundFX = SoundFX;

  // Sound toggle button in header
  document.addEventListener('DOMContentLoaded', () => {
    const audioToggleBtn = document.getElementById('audio-toggle-btn');
    if (audioToggleBtn) {
      audioToggleBtn.addEventListener('click', () => {
        const state = SoundFX.toggleSound();
        audioToggleBtn.innerHTML = state
          ? '<i data-lucide="volume-2"></i>'
          : '<i data-lucide="volume-x"></i>';
        audioToggleBtn.setAttribute('title', state ? 'Mute Sound FX' : 'Enable Sound FX');
        if (window.lucide) {
          window.lucide.createIcons();
        }
      });
    }

    // Interactive button sounds
    document.querySelectorAll('.btn, .nav-link, .filter-btn, .social-link, .stat-item, .project-card').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (SoundFX.isEnabled()) SoundFX.hover();
      });
      el.addEventListener('click', () => {
        if (SoundFX.isEnabled()) SoundFX.click();
      });
    });
  });
})();
