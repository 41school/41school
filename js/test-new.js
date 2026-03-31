// ============================================
// TEST-NEW.JS - 20 SAVOL, 35 DAKIKA, QIYINLIK KOEFFITSIENTI
// ============================================

// Global o'zgaruvchilar
let currentClass = null;
let currentSubject = null;
let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let timer = null;
let timeLeft = 0;
let startTime = null;
let isTestActive = false;

// Qiyinlik koeffitsientlari
const QIYINLIK_KOEFF = {
  "5": 1.0,
  "6a": 1.2,
  "6b": 1.2,
  "7a": 1.5,
  "7b": 1.5,
  "8a": 1.8,
  "8b": 1.8,
  "9a": 2.0,
  "9b": 2.0,
  "10a": 2.2
};

// Sinf nomlarini olish
function getClassName(classNum) {
  const classNames = {
    "5": "5-sinf",
    "6a": "6-A sinf",
    "6b": "6-B sinf",
    "7a": "7-A sinf",
    "7b": "7-B sinf",
    "8a": "8-A sinf",
    "8b": "8-B sinf",
    "9a": "9-A sinf",
    "9b": "9-B sinf",
    "10a": "10-A sinf"
  };
  return classNames[classNum] || classNum;
}

// Fan nomlarini olish
function getFanName(fan) {
  const fanNames = {
    "matematika": "🔢 Matematika",
    "ona-tili": "📖 Ona tili",
    "rus-tili": "🇷🇺 Rus tili",
    "fizika": "⚛️ Fizika",
    "kimyo": "🧪 Kimyo",
    "biologiya": "🧬 Biologiya",
    "tarix": "📜 Tarix",
    "geografiya": "🌍 Geografiya",
    "informatika": "💻 Informatika",
    "tabiiy-fan": "🌿 Tabiiy fan",
    "kombinatsion": "🎯 Kombinatsion test"
  };
  return fanNames[fan] || fan;
}

// Sinf tanlash
async function selectTestClass(classNum) {
  currentClass = classNum;
  
  // Tugmalarni yangilash
  document.querySelectorAll('.class-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`.class-btn[data-class="${classNum}"]`);
  if (activeBtn) activeBtn.classList.add('active');
  
  // Fanlarni yuklash
  await loadSubjects(classNum);
}

// Fanlarni yuklash
async function loadSubjects(classNum) {
  const subjectsGrid = document.getElementById('subjects-grid');
  subjectsGrid.innerHTML = '<div class="loading"><div class="loading-spinner"></div><p>Testlar yuklanmoqda...</p></div>';
  
  // Bazadan testlarni olish
  await db.open();
  
  // Qaysi fanlar mavjud?
  const fanlar = [];
  
  // Fanlar ro'yxati (sinfga mos)
  const allFans = [
    { nom: "matematika", ozbekcha: "Matematika", icon: "🔢" },
    { nom: "ona-tili", ozbekcha: "Ona tili", icon: "📖" },
    { nom: "rus-tili", ozbekcha: "Rus tili", icon: "🇷🇺" },
    { nom: "fizika", ozbekcha: "Fizika", icon: "⚛️" },
    { nom: "kimyo", ozbekcha: "Kimyo", icon: "🧪" },
    { nom: "biologiya", ozbekcha: "Biologiya", icon: "🧬" },
    { nom: "tarix", ozbekcha: "Tarix", icon: "📜" },
    { nom: "geografiya", ozbekcha: "Geografiya", icon: "🌍" },
    { nom: "informatika", ozbekcha: "Informatika", icon: "💻" },
    { nom: "tabiiy-fan", ozbekcha: "Tabiiy fan", icon: "🌿" }
  ];
  
  // 5-sinf uchun faqat 5 ta fan
  if (classNum === "5") {
    const allowedFans = ["matematika", "ona-tili", "rus-tili", "tabiiy-fan", "tarix"];
    for (const fan of allFans) {
      if (allowedFans.includes(fan.nom)) {
        const activeTests = await db.getActiveTests(classNum, fan.nom);
        if (activeTests && activeTests.length > 0) {
          fanlar.push({ ...fan, testlarSoni: activeTests.length });
        }
      }
    }
  } 
  // 6-sinf uchun geografiya qo'shiladi
  else if (classNum === "6a" || classNum === "6b") {
    const allowedFans = ["matematika", "ona-tili", "rus-tili", "tabiiy-fan", "tarix", "geografiya"];
    for (const fan of allFans) {
      if (allowedFans.includes(fan.nom)) {
        const activeTests = await db.getActiveTests(classNum, fan.nom);
        if (activeTests && activeTests.length > 0) {
          fanlar.push({ ...fan, testlarSoni: activeTests.length });
        }
      }
    }
  }
  // 7+ sinflar uchun hamma fanlar
  else {
    for (const fan of allFans) {
      const activeTests = await db.getActiveTests(classNum, fan.nom);
      if (activeTests && activeTests.length > 0) {
        fanlar.push({ ...fan, testlarSoni: activeTests.length });
      }
    }
  }
  
  // Kombinatsion testni qo'shish
  const kombinatsionTest = await db.getTest(`kombinatsion_${classNum}_001`);
  if (kombinatsionTest) {
    fanlar.push({
      nom: "kombinatsion",
      ozbekcha: "Kombinatsion test",
      icon: "🎯",
      testlarSoni: 1,
      isKombinatsion: true
    });
  }
  
  // Agar hech qanday fan bo'lmasa
  if (fanlar.length === 0) {
    subjectsGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 50px;">
        <div class="empty-state-icon">📚</div>
        <h3>Testlar tayyorlanmoqda</h3>
        <p>Bu sinf uchun testlar hozircha mavjud emas. Tez orada qo'shiladi!</p>
        <button class="retry-btn" onclick="loadSubjects('${classNum}')">🔄 Qayta yuklash</button>
      </div>
    `;
    return;
  }
  
  // Fan kartochkalarini yaratish
  let html = '';
  for (const fan of fanlar) {
    const qiyinlikKoeff = QIYINLIK_KOEFF[classNum] || 1.0;
    const maxBall = 40; // 20 savol × 2 ball
    const umumiyBall = Math.floor(maxBall * qiyinlikKoeff);
    
    html += `
      <div class="subject-card ${fan.isKombinatsion ? 'kombinatsion' : ''}" onclick="selectSubject('${fan.nom}')">
        <div class="subject-icon">${fan.icon}</div>
        <h3>${fan.ozbekcha}</h3>
        <p>${getClassName(classNum)} uchun ${fan.testlarSoni} ta test mavjud</p>
        <div class="subject-info">
          <span class="questions">🎯 20 savol</span>
          <span class="time">⏱️ 35 daqiqa</span>
          <span class="ball">🏆 ${maxBall} ball</span>
        </div>
        <div class="test-stats">
          <span class="ball">✨ Qiyinlik: ${qiyinlikKoeff}x</span>
          <span class="time">💯 Maks: ${umumiyBall} ball</span>
        </div>
      </div>
    `;
  }
  
  subjectsGrid.innerHTML = html;
}

// Fanni tanlash
async function selectSubject(subjectId) {
  currentSubject = subjectId;
  
  // O'quvchi ma'lumotlarini tekshirish (localStorage dan)
  const savedStudent = localStorage.getItem(`student_${currentClass}_${currentSubject}`);
  if (savedStudent) {
    const student = JSON.parse(savedStudent);
    if (confirm(`${student.ism} ${student.familiya} sifatida davom etasizmi?`)) {
      document.getElementById('student-name').value = student.ism;
      document.getElementById('student-surname').value = student.familiya;
    }
  }
  
  // Formani ko'rsatish
  document.getElementById('test-selection').style.display = 'none';
  document.getElementById('student-info-form').style.display = 'block';
}

// Orqaga qaytish
function backToSubjects() {
  document.getElementById('student-info-form').style.display = 'none';
  document.getElementById('test-selection').style.display = 'block';
  document.getElementById('student-form').reset();
}

// Student ma'lumotlarini yuborish
async function submitStudentInfo(event) {
  event.preventDefault();
  
  const ism = document.getElementById('student-name').value.trim();
  const familiya = document.getElementById('student-surname').value.trim();
  
  if (!ism || !familiya) {
    alert('Iltimos, ism va familiyangizni kiriting!');
    return;
  }
  
  // O'quvchini saqlash
  const oquvchiId = `${ism.toLowerCase()}_${familiya.toLowerCase()}`;
  const oquvchi = {
    id: oquvchiId,
    ism: ism,
    familiya: familiya,
    sinf: currentClass,
    oxirgiKirish: new Date().toISOString()
  };
  
  await db.addOrUpdateOquvchi(oquvchi);
  
  // LocalStorage ga saqlash (keyingi safar uchun)
  localStorage.setItem(`student_${currentClass}_${currentSubject}`, JSON.stringify({ ism, familiya }));
  
  // Testni boshlash
  await startTest(oquvchiId);
}

// Testni boshlash
async function startTest(oquvchiId) {
  // Testni tanlash
  let test = null;
  
  if (currentSubject === "kombinatsion") {
    test = await db.getTest(`kombinatsion_${currentClass}_001`);
  } else {
    const activeTests = await db.getActiveTests(currentClass, currentSubject);
    if (!activeTests || activeTests.length === 0) {
      alert("Testlar topilmadi. Iltimos, keyinroq urinib ko'ring.");
      backToSubjects();
      return;
    }
    
    // O'quvchi yechmagan testlarni topish
    const oquvchi = await db.getOquvchi(oquvchiId);
    const yechilganTestlar = oquvchi?.yechilganTestlar || [];
    
    // Yechilmagan testlarni filtrlash
    const yechilmaganTestlar = activeTests.filter(t => !yechilganTestlar.includes(t.id));
    
    if (yechilmaganTestlar.length > 0) {
      // Random tanlash
      const randomIndex = Math.floor(Math.random() * yechilmaganTestlar.length);
      test = yechilmaganTestlar[randomIndex];
    } else {
      // Hammasini yechgan bo'lsa, random test
      const randomIndex = Math.floor(Math.random() * activeTests.length);
      test = activeTests[randomIndex];
      alert("⚠️ Barcha testlarni yechib bo'lgansiz! Yangi testlar qo'shilguncha takroriy test yechasiz.");
    }
  }
  
  if (!test) {
    alert("Test topilmadi!");
    backToSubjects();
    return;
  }
  
  currentTest = test;
  currentQuestionIndex = 0;
  userAnswers = new Array(test.savollar.length).fill(undefined);
  
  // Vaqtni sozlash
  timeLeft = test.vaqt * 60;
  startTime = Date.now();
  
  // Test nomini o'rnatish
  const fanNomi = getFanName(currentSubject);
  document.getElementById('test-title').innerHTML = `${fanNomi} - ${getClassName(currentClass)}`;
  document.getElementById('test-score').innerHTML = `🎯 0 ball`;
  
  // Taymerni boshlash
  startTimer();
  
  // Birinchi savolni ko'rsatish
  showQuestion();
  
  // Formani yashirish, testni ko'rsatish
  document.getElementById('student-info-form').style.display = 'none';
  document.getElementById('test-container').style.display = 'block';
  
  isTestActive = true;
}

// Taymer
function startTimer() {
  const timerElement = document.getElementById('timer');
  const testScore = document.getElementById('test-score');
  
  if (timer) clearInterval(timer);
  
  timer = setInterval(() => {
    if (!isTestActive) return;
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      finishTest();
      return;
    }
    
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerHTML = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Joriy ballni hisoblash
    let currentScore = 0;
    for (let i = 0; i <= currentQuestionIndex; i++) {
      if (userAnswers[i] !== undefined && currentTest.savollar[i]) {
        if (userAnswers[i] === currentTest.savollar[i].togri) {
          currentScore += 2;
        }
      }
    }
    testScore.innerHTML = `🎯 ${currentScore} ball`;
    
    timeLeft--;
  }, 1000);
}

// Savolni ko'rsatish
function showQuestion() {
  const question = currentTest.savollar[currentQuestionIndex];
  const container = document.getElementById('question-container');
  
  let answersHtml = '';
  question.variantlar.forEach((answer, index) => {
    const isSelected = userAnswers[currentQuestionIndex] === index;
    answersHtml += `
      <div class="answer-option ${isSelected ? 'selected' : ''}" onclick="selectAnswer(${index})">
        <input type="radio" name="answer" id="answer-${index}" value="${index}" ${isSelected ? 'checked' : ''}>
        <label for="answer-${index}">${answer}</label>
      </div>
    `;
  });
  
  container.innerHTML = `
    <div class="question-card">
      <div class="question-number">Savol ${currentQuestionIndex + 1} / ${currentTest.savollar.length}</div>
      <div class="question-text">${question.savol}</div>
      <div class="answers-grid">
        ${answersHtml}
      </div>
    </div>
  `;
  
  // Progress barni yangilash
  updateProgress();
  updateNavigation();
}

// Javobni tanlash
function selectAnswer(answerIndex) {
  userAnswers[currentQuestionIndex] = answerIndex;
  
  // Eski tanlovni olib tashlash
  document.querySelectorAll('.answer-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  
  // Yangi tanlovni belgilash
  const options = document.querySelectorAll('.answer-option');
  if (options[answerIndex]) {
    options[answerIndex].classList.add('selected');
    const radio = options[answerIndex].querySelector('input[type="radio"]');
    if (radio) radio.checked = true;
  }
}

// Progress barni yangilash
function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / currentTest.savollar.length) * 100;
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  
  if (progressFill) progressFill.style.width = `${progress}%`;
  if (progressText) progressText.innerHTML = `${currentQuestionIndex + 1}/${currentTest.savollar.length}`;
}

// Navigatsiyani yangilash
function updateNavigation() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const finishBtn = document.getElementById('finish-btn');
  
  if (prevBtn) prevBtn.disabled = currentQuestionIndex === 0;
  
  if (currentQuestionIndex === currentTest.savollar.length - 1) {
    if (nextBtn) nextBtn.style.display = 'none';
    if (finishBtn) finishBtn.style.display = 'block';
  } else {
    if (nextBtn) nextBtn.style.display = 'block';
    if (finishBtn) finishBtn.style.display = 'none';
  }
}

// Oldingi savol
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

// Keyingi savol
function nextQuestion() {
  if (currentQuestionIndex < currentTest.savollar.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
}

// Testni tugatish
async function finishTest() {
  if (timer) clearInterval(timer);
  isTestActive = false;
  
  // Javoblarni tekshirish
  let correctCount = 0;
  currentTest.savollar.forEach((question, index) => {
    if (userAnswers[index] === question.togri) {
      correctCount++;
    }
  });
  
  const total = currentTest.savollar.length;
  const percentage = Math.round((correctCount / total) * 100);
  const timeTaken = Math.floor((Date.now() - startTime) / 1000);
  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;
  const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
  // Ball hisoblash
  const rawBall = correctCount * 2; // 2 ball har bir to'g'ri javob
  const qiyinlikKoeff = QIYINLIK_KOEFF[currentClass] || 1.0;
  const totalBall = Math.floor(rawBall * qiyinlikKoeff);
  
  // Natijalarni ko'rsatish
  showResults(correctCount, total, percentage, timeString, rawBall, totalBall, qiyinlikKoeff);
  
  // Natijani bazaga saqlash
  const ism = document.getElementById('student-name').value;
  const familiya = document.getElementById('student-surname').value;
  const oquvchiId = `${ism.toLowerCase()}_${familiya.toLowerCase()}`;
  
  const natija = {
    id: `${oquvchiId}_${currentTest.id}_${Date.now()}`,
    oquvchiId: oquvchiId,
    ism: ism,
    familiya: familiya,
    sinf: currentClass,
    testId: currentTest.id,
    testTuri: currentSubject === "kombinatsion" ? "kombinatsion" : "oddiy",
    testNomi: currentTest.nom,
    togri: correctCount,
    jami: total,
    foiz: percentage,
    ball: totalBall,
    rawBall: rawBall,
    qiyinlikKoeff: qiyinlikKoeff,
    vaqt: new Date().toISOString(),
    davomiylik: timeTaken
  };
  
  await db.addOrUpdateResult(natija);
  
  // O'quvchining yechilgan testlar ro'yxatini yangilash
  const oquvchi = await db.getOquvchi(oquvchiId);
  if (oquvchi) {
    if (!oquvchi.yechilganTestlar) oquvchi.yechilganTestlar = [];
    if (!oquvchi.yechilganTestlar.includes(currentTest.id)) {
      oquvchi.yechilganTestlar.push(currentTest.id);
      await db.addOrUpdateOquvchi(oquvchi);
    }
  }
}

// Natijalarni ko'rsatish
function showResults(correct, total, percentage, timeString, rawBall, totalBall, qiyinlikKoeff) {
  const scorePercentage = document.getElementById('score-percentage');
  const correctCount = document.getElementById('correct-count');
  const totalCount = document.getElementById('total-count');
  const timeTaken = document.getElementById('time-taken');
  const scorePoints = document.getElementById('score-points');
  const totalScore = document.getElementById('total-score');
  const qiyinlikSpan = document.getElementById('qiyinlik-koeff');
  
  if (scorePercentage) scorePercentage.innerHTML = `${percentage}%`;
  if (correctCount) correctCount.innerHTML = correct;
  if (totalCount) totalCount.innerHTML = total;
  if (timeTaken) timeTaken.innerHTML = timeString;
  if (scorePoints) scorePoints.innerHTML = rawBall;
  if (totalScore) totalScore.innerHTML = totalBall;
  if (qiyinlikSpan) qiyinlikSpan.innerHTML = `${qiyinlikKoeff}x`;
  
  // Progress barlar
  const correctBar = document.getElementById('correct-bar');
  const incorrectBar = document.getElementById('incorrect-bar');
  const correctPercent = document.getElementById('correct-percent');
  const incorrectPercent = document.getElementById('incorrect-percent');
  
  if (correctBar) correctBar.style.width = `${percentage}%`;
  if (incorrectBar) incorrectBar.style.width = `${100 - percentage}%`;
  if (correctPercent) correctPercent.innerHTML = `${percentage}%`;
  if (incorrectPercent) incorrectPercent.innerHTML = `${100 - percentage}%`;
  
  // Natija xabari
  const messageElement = document.getElementById('results-message');
  if (messageElement) {
    messageElement.className = 'results-message';
    
    if (percentage >= 90) {
      messageElement.className += ' excellent';
      messageElement.innerHTML = '🎉 Ajoyib! Sizning bilimingiz juda yaxshi!';
    } else if (percentage >= 70) {
      messageElement.className += ' good';
      messageElement.innerHTML = '👍 Yaxshi natija! Ozgina mashq qilsangiz yetarli';
    } else if (percentage >= 50) {
      messageElement.className += ' average';
      messageElement.innerHTML = '📚 Qoniqarli. Ko\'proq mashq qilishingiz kerak';
    } else {
      messageElement.className += ' poor';
      messageElement.innerHTML = '💪 Xafa bo\'lmang! Qayta urinib ko\'ring';
    }
  }
  
  // Testni yashirish, natijalarni ko'rsatish
  const testContainer = document.getElementById('test-container');
  const resultsContainer = document.getElementById('results-container');
  
  if (testContainer) testContainer.style.display = 'none';
  if (resultsContainer) resultsContainer.style.display = 'block';
}

// Testni qayta boshlash
async function restartTest() {
  const resultsContainer = document.getElementById('results-container');
  if (resultsContainer) resultsContainer.style.display = 'none';
  
  const ism = document.getElementById('student-name').value;
  const familiya = document.getElementById('student-surname').value;
  const oquvchiId = `${ism.toLowerCase()}_${familiya.toLowerCase()}`;
  
  await startTest(oquvchiId);
}

// Test tanlashga qaytish
function backToTestSelection() {
  if (timer) clearInterval(timer);
  
  const resultsContainer = document.getElementById('results-container');
  const testContainer = document.getElementById('test-container');
  const testSelection = document.getElementById('test-selection');
  
  if (resultsContainer) resultsContainer.style.display = 'none';
  if (testContainer) testContainer.style.display = 'none';
  if (testSelection) testSelection.style.display = 'block';
  
  currentSubject = null;
  currentTest = null;
  currentQuestionIndex = 0;
  userAnswers = [];
  isTestActive = false;
}

// Chiqish
function exitTest() {
  if (confirm('Testni tark etishga ishonchingiz komilmi? Javoblaringiz saqlanmaydi!')) {
    if (timer) clearInterval(timer);
    
    const testContainer = document.getElementById('test-container');
    const testSelection = document.getElementById('test-selection');
    
    if (testContainer) testContainer.style.display = 'none';
    if (testSelection) testSelection.style.display = 'block';
    
    currentSubject = null;
    currentTest = null;
    currentQuestionIndex = 0;
    userAnswers = [];
    isTestActive = false;
  }
}

// Batafsil natijalar
function showDetailedResults() {
  if (!currentTest) return;
  
  let details = '═══════════════════════════════\n';
  details += '     BATAFSIL NATIJALAR\n';
  details += '═══════════════════════════════\n\n';
  
  currentTest.savollar.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.togri;
    
    details += `📌 Savol ${index + 1}: ${question.savol}\n`;
    details += `   Sizning javobingiz: ${userAnswer !== undefined ? question.variantlar[userAnswer] : 'Javob berilmagan'}\n`;
    details += `   To'g'ri javob: ${question.variantlar[question.togri]}\n`;
    details += `   Natija: ${isCorrect ? '✅ TO\'G\'RI (+2 ball)' : '❌ XATO (0 ball)'}\n`;
    details += '───────────────────────────────────\n';
  });
  
  alert(details);
}

// Sahifa yuklanganda
document.addEventListener('DOMContentLoaded', async function() {
  await db.open();
  
  // Default 5-sinfni tanlash
  const defaultButton = document.querySelector('.class-btn[data-class="5"]');
  if (defaultButton) {
    defaultButton.classList.add('active');
  }
  
  await loadSubjects('5');
});

console.log("✅ Test tizimi yuklandi (20 savol, 35 daqiqa)");
