/* ==========================================================================
   FOCUS MEDIA — Main Application JavaScript
   Interactive Logic, Simulated Bot, Quiz, Audio & Counters
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Web Audio API Synthesizer (Micro-Interactions)
  // --------------------------------------------------------------------------
  let audioContext = null;
  let isSoundEnabled = true;

  function initAudio() {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) audioContext = new AudioCtx();
    }
  }

  function playTone(freq, type, duration, gainVal = 0.05) {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioContext) return;
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioContext.currentTime);
      gain.gain.setValueAtTime(gainVal, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.start();
      osc.stop(audioContext.currentTime + duration);
    } catch (e) {
      // Audio not permitted yet
    }
  }

  function playClick() { playTone(800, 'sine', 0.08, 0.04); }
  function playSuccess() {
    playTone(520, 'sine', 0.12, 0.05);
    setTimeout(() => playTone(780, 'sine', 0.2, 0.05), 100);
  }

  // Sound toggle button
  const soundToggleBtn = document.getElementById('sound-toggle');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      soundToggleBtn.innerHTML = isSoundEnabled
        ? '<i class="fas fa-volume-up"></i>'
        : '<i class="fas fa-volume-mute"></i>';
      showToast(isSoundEnabled ? "Ovozli effektlar yoqildi" : "Ovozli effektlar o'chirildi");
    });
  }

  // Theme toggle button
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      playClick();
      const current = document.documentElement.getAttribute('data-theme');
      const target = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', target);
      themeToggleBtn.innerHTML = target === 'light'
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun"></i>';
      localStorage.setItem('focus-theme', target);
    });
    // Restore theme
    const saved = localStorage.getItem('focus-theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
      if (saved === 'light') themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      playClick();
      navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
  }

  // --------------------------------------------------------------------------
  // 2. Animated Number Counters (KPIs & Metrics)
  // --------------------------------------------------------------------------
  const counters = document.querySelectorAll('.counter-val');
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        let count = 0;
        const speed = target / 50;

        const updateCount = () => {
          count += speed;
          if (count < target) {
            el.innerText = prefix + Math.floor(count) + suffix;
            requestAnimationFrame(updateCount);
          } else {
            el.innerText = prefix + target + suffix;
          }
        };
        updateCount();
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  // --------------------------------------------------------------------------
  // 3. Telegram Bot Interactive Simulator
  // --------------------------------------------------------------------------
  const botMessagesContainer = document.getElementById('bot-messages');
  const botButtons = document.querySelectorAll('.bot-cmd-btn');

  const botResponses = {
    news: "📢 <b>Toshkent Viloyati Yangiliklari:</b><br>• Nurafshon shahar 4-maktabda yangi robototexnika to'garagi ochildi!<br>• Qibray tumani o'quvchisi xalqaro matematika olimpiadasida kumush medal sohibi bo'ldi.<br>• 287-maktab 'Kelajak Liderlari' kengashi tuzildi.",
    fame: "🏆 <b>Viloyat Iftixorlari Portali:</b><br>Oxirgi 30 kunda viloyatimizdan 18 nafar o'quvchi xalqaro va respublika tanlovlarida mutlaq g'oliblikni qo'lga kiritdi! Profilingizni tekshirish uchun maktabingiz ID raqamini kiriting.",
    shield: "🛡️ <b>Kiber-Qalqon Tizimi:</b><br>Xush kelibsiz! Onlayn xavfsizlik madaniyatini oshirish bo'yicha 5 ta oltin qoida:<br>1. 2-bosqichli autentifikatsiyani yoqing.<br>2. Begona havolalarni ochmang.<br>3. Shaxsiy ma'lumotlarni ulashmang.",
    podcast: "🎙️ <b>'Focus Suhbat' Podkasti:</b><br>Yangi son efirda: <i>'Qanday qilib maktab o'quvchisi xalqaro grant yutdi?'</i><br>Boshlovchi: Yosh jurnalistlar klubi rahbari.<br>Davomiyligi: 24 daqiqa.",
    feedback: "📩 <b>Ochiq Muloqot & Murojaat:</b><br>Sizning taklif va tashabbusingiz biz uchun qadrli! Xabaringizni yozib qoldiring, mas'ul koordinator 24 soat ichida bog'lanadi."
  };

  function appendBotMessage(text, isOutgoing = false) {
    if (!botMessagesContainer) return;
    const bubble = document.createElement('div');
    bubble.className = `bot-bubble ${isOutgoing ? 'outgoing' : 'incoming'}`;
    bubble.innerHTML = text;
    botMessagesContainer.appendChild(bubble);
    botMessagesContainer.scrollTop = botMessagesContainer.scrollHeight;
  }

  botButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      playClick();
      const cmdKey = btn.getAttribute('data-cmd');
      const cmdTitle = btn.innerText;

      appendBotMessage(cmdTitle, true);

      setTimeout(() => {
        playTone(600, 'sine', 0.1, 0.03);
        const reply = botResponses[cmdKey] || "Ma'lumot yangilanmoqda...";
        appendBotMessage(reply, false);
      }, 450);
    });
  });

  // --------------------------------------------------------------------------
  // 4. Simulated Audio Player ("Focus Suhbat" Podcast)
  // --------------------------------------------------------------------------
  const playBtn = document.getElementById('podcast-play-btn');
  const waveform = document.getElementById('podcast-waveform');
  const audioTime = document.getElementById('podcast-time');
  let isPlaying = false;
  let playTimer = null;
  let seconds = 0;

  if (playBtn && waveform) {
    playBtn.addEventListener('click', () => {
      playClick();
      isPlaying = !isPlaying;
      if (isPlaying) {
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        waveform.classList.add('playing');
        playTimer = setInterval(() => {
          seconds++;
          const mins = Math.floor(seconds / 60);
          const secs = seconds % 60;
          if (audioTime) audioTime.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }, 1000);
        showToast("Podkast ijro etilmoqda...");
      } else {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        waveform.classList.remove('playing');
        clearInterval(playTimer);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. Hall of Fame (Viloyat Iftixorlari) Filter Tabs
  // --------------------------------------------------------------------------
  const tabBtns = document.querySelectorAll('.tab-btn');
  const fameCards = document.querySelectorAll('.fame-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playClick();
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      fameCards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInBubble 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 6. Interactive Cyber-Shield Quiz (Kiber-Qalqon)
  // --------------------------------------------------------------------------
  const quizData = [
    {
      q: "Telegramda notanish odamdan 'Siz 5 million so'm yutdingiz, havolaga bosing' degan xabar keldi. Nima qilasiz?",
      opts: [
        { text: "A) Havolani ochib tezroq tekshiraman", correct: false },
        { text: "B) Havolani ochmayman, xabarni spam deb belgilayman va o'chiraman", correct: true },
        { text: "C) Do'stlarimga jo'natib maslahat so'rayman", correct: false }
      ]
    },
    {
      q: "Parolingiz xavfsiz va buzilmas bo'lishi uchun qaysi biri eng to'g'ri?",
      opts: [
        { text: "A) Tug'ilgan sana va ismingiz (masalan: ali2008)", correct: false },
        { text: "B) Ketma-ket raqamlar (12345678)", correct: false },
        { text: "C) Katta-kichik harflar, raqamlar va belgilar aralashmasi (K#9pL!2026)", correct: true }
      ]
    },
    {
      q: "Jamoat joylaridagi ochiq (parolsiz) bepul Wi-Fi tarmoqlarida nima qilish xavfli?",
      opts: [
        { text: "A) Yangiliklar saytini o'qish", correct: false },
        { text: "B) Bank kartalari ma'lumotlarini kiritish va shaxsiy hisoblarga kirish", correct: true },
        { text: "C) Ob-havoni tekshirish", correct: false }
      ]
    }
  ];

  let currentQuestion = 0;
  let quizScore = 0;

  const quizStep = document.getElementById('quiz-step');
  const quizScoreBadge = document.getElementById('quiz-score-badge');
  const quizQuestionEl = document.getElementById('quiz-question');
  const quizOptionsEl = document.getElementById('quiz-options');
  const quizBox = document.getElementById('quiz-content-box');
  const quizResultBox = document.getElementById('quiz-result');
  const restartQuizBtn = document.getElementById('restart-quiz-btn');

  function renderQuestion() {
    if (!quizQuestionEl || !quizOptionsEl) return;
    const item = quizData[currentQuestion];
    if (quizStep) quizStep.innerText = `Savol ${currentQuestion + 1} / ${quizData.length}`;
    if (quizScoreBadge) quizScoreBadge.innerText = `To'plangan ball: ${quizScore * 10}`;
    quizQuestionEl.innerText = item.q;
    quizOptionsEl.innerHTML = '';

    item.opts.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt';
      btn.innerText = opt.text;
      btn.addEventListener('click', () => {
        if (opt.correct) {
          playSuccess();
          btn.classList.add('correct');
          quizScore++;
        } else {
          playTone(280, 'sawtooth', 0.15, 0.05);
          btn.classList.add('wrong');
        }

        // Disable options
        quizOptionsEl.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);

        setTimeout(() => {
          currentQuestion++;
          if (currentQuestion < quizData.length) {
            renderQuestion();
          } else {
            showQuizResult();
          }
        }, 800);
      });
      quizOptionsEl.appendChild(btn);
    });
  }

  function showQuizResult() {
    if (quizBox) quizBox.style.display = 'none';
    if (quizResultBox) {
      quizResultBox.classList.add('show');
      const scoreTotal = document.getElementById('quiz-final-score');
      const scoreTitle = document.getElementById('quiz-final-title');
      if (scoreTotal) scoreTotal.innerText = `${quizScore} / ${quizData.length}`;
      if (scoreTitle) {
        if (quizScore === 3) scoreTitle.innerText = "🏆 A'lo daraja: Siz mukammal Kiber-Qalqonga egasiz!";
        else if (quizScore === 2) scoreTitle.innerText = "👍 Yaxshi: Kiber-xavfsizlik ko'nikmalaringiz yuqori.";
        else scoreTitle.innerText = "⚠️ Diqqat: Kiber-savodxonlik bo'yicha ko'proq bilim oling.";
      }
    }
  }

  if (restartQuizBtn) {
    restartQuizBtn.addEventListener('click', () => {
      playClick();
      currentQuestion = 0;
      quizScore = 0;
      if (quizResultBox) quizResultBox.classList.remove('show');
      if (quizBox) quizBox.style.display = 'block';
      renderQuestion();
    });
  }

  renderQuestion();

  // --------------------------------------------------------------------------
  // 7. FAQ Accordion Interaction
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        playClick();
        const isActive = item.classList.contains('active');
        faqItems.forEach(f => f.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  // --------------------------------------------------------------------------
  // 8. Contact / Application Form Submission
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('school-connect-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playSuccess();
      showToast("Arizangiz qabul qilindi! Koordinator tez orada bog'lanadi.");
      contactForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 9. Toast Notification System
  // --------------------------------------------------------------------------
  const toast = document.getElementById('toast-notice');
  const toastMsg = document.getElementById('toast-msg');

  function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  window.showToast = showToast;
});
