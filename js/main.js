// ============================================
// DARS JADVALI - TELEGRAM BOTDAGI JADVALLAR
// ============================================

// Har bir sinf va kun uchun dars jadvallari (Telegram botdagi ma'lumotlar asosida)
const schedules = {
  // 5-sinf
  5: [
    { day: "Dushanba", lessons: ["Kelajak soati", "Adabiyot", "Jismoniy tarbiya", "Ona tili", "Matematika"] },
    { day: "Seshanba", lessons: ["Tabiy fan", "Tarixdan hikoyalar", "Informatika", "Tasviriy san`at", "Matematika", "Ingiliz tili", "Fransuz tili"] },
    { day: "Chorshanba", lessons: ["Musiqa", "Matematika", "Ona tili", "Fransuz tili", "Ingiliz tili"] },
    { day: "Payshanba", lessons: ["Tarixdan hikoyalar", "Ona tili", "Adabiyot", "Texnalogiya", "Texnalogiya", "Fransuz tili", "Ingiliz tili"] },
    { day: "Juma", lessons: ["Jismoniy Tarbiya", "Ona tili", "Tabiy fan", "Rus tili(n)", "Matematika"] },
    { day: "Shanba", lessons: ["Rus tili", "Fransuz tili", "Ingliz tili", "Matematika", "Tarbiya"] }
  ],
  
  // 6-A sinf
  '6a': [
    { day: "Dushanba", lessons: ["Kelajak soati", "Fransuz tili", "Matematika", "Tabiy fan", "Ona tili", "Fransuz tili"] },
    { day: "Seshanba", lessons: ["Fransuz tili", "Musiqa", "Matematika", "Tabiy fan", "Tasviriy san`at", "Tarix"] },
    { day: "Chorshanba", lessons: ["Ona tili", "Rus tili", "Adabiyot", "Matematika"] },
    { day: "Payshanba", lessons: ["Fransuz tili", "Texnalogiya", "Texnalogiya", "Rus tili", "Jismoniy tarbiya"] },
    { day: "Juma", lessons: ["Adabiyot", "Jismoniy tarbiya", "Ona tili", "Matematika", "Tabiy fan"] },
    { day: "Shanba", lessons: ["Tarix", "Informatika", "Ona tili", "Matematika", "Tarbiya"] }
  ],
  
  // 6-B sinf
  '6b': [
    { day: "Dushanba", lessons: ["Kelajak soati", "Jismoniy tarbiya", "Ona tili", "Matematika", "Texnalogiya", "Texnalogiya"] },
    { day: "Seshanba", lessons: ["Tasviriy san`at", "Tarbiya", "Tabiy fan", "Matematika", "Fransuz tili"] },
    { day: "Chorshanba", lessons: ["Fransuz tili", "Musiqa", "Rus tili", "Ona tili", "Matematika", "Adabiyot"] },
    { day: "Payshanba", lessons: ["Adabiyot", "Jisminiy tarbiya", "Fransuz tili", "Ona tili", "Tabiy fan"] },
    { day: "Juma", lessons: ["Tabiy fan", "Tarix", "Matematika", "Ona tili"] },
    { day: "Shanba", lessons: ["Fransuz tili", "Matematika", "Informatika", "Tarix", "Rus tili"] }
  ],
  
  // 7-A sinf
  '7a': [
    { day: "Dushanba", lessons: ["Kelajak soati", "Geografiya", "Jismoniy tarbiya", "Fransuz tili", "Matematika", "Fizika"] },
    { day: "Seshanba", lessons: ["Matematika", "Fizika", "Tasviriy san`at", "Kimyo", "Fransuz tili", "Matematika"] },
    { day: "Chorshanba", lessons: ["Matematika", "Informatika", "Musiqa", "Fransuz tili", "O`zbekiston tarixi", "Jismoniy tarbiya"] },
    { day: "Payshanba", lessons: ["Ona tili", "Biyologiya", "Fransuz tili", "Adabiyot", "Kimyo", "Geografiya"] },
    { day: "Juma", lessons: ["O`zbekiston tarixi", "Rus tili", "Matematika", "Ona tili", "Texnalogiya", "Texnalogiya"] },
    { day: "Shanba", lessons: ["Adabiyot", "Tarbiya", "Jaxon tarixi", "Ona tili", "Rus tili", "Biologiya"] }
  ],
  
  // 7-B sinf
  '7b': [
    { day: "Dushanba", lessons: ["Kelajak soati", "Informatika", "Fransuz tili", "Fizika", "Geografiya", "Matematika"] },
    { day: "Seshanba", lessons: ["Fransuz tili", "Tasviriy san`at", "O`zbekiston tarixi", "Texnalogiya", "Texnalogiya", "Matematika"] },
    { day: "Chorshanba", lessons: ["Matematika", "Jismoniy tarbiya", "Tarbiya", "O`zbekiston tarixi", "Musiqa", "Fransuz tili"] },
    { day: "Payshanba", lessons: ["Fransuz tili", "Kimyo", "Adabiyot", "Geografiya", "Ona tili", "Jismoniy tarbiya"] },
    { day: "Juma", lessons: ["Matematika", "Ona tili", "Rus tili", "Fizika", "Biologiya", "Jahon tarixi"] },
    { day: "Shanba", lessons: ["Matematika", "Adabiyot", "Biologiya", "Rus tili", "Ona tili", "Kimyo"] }
  ],
  
  // 8-A sinf
  '8a': [
    { day: "Dushanba", lessons: ["Kelajak soati", "Adabiyot", "Geografiya", "Jismoniy tarbiya", "Chizmachilika", "Fransuz tili"] },
    { day: "Seshanba", lessons: ["Texnalogiya", "Jismoniy tarbiya", "O'zbekiston tarixi", "Fizika", "Biologiya", "Fransuz tili"] },
    { day: "Chorshanba", lessons: ["Ona tili", "Rus tili", "Huquq", "Algebra", "Ona tili", "Geometriya"] },
    { day: "Payshanba", lessons: ["Ona tili", "Uz tarix", "Rus tili", "Kimyo", "Fransuz tili", "Jahon tarixi"] },
    { day: "Juma", lessons: ["Adabiyot", "Iqtisodiyot", "Biologiya", "Algebra", "Geometriya"] },
    { day: "Shanba", lessons: ["Tarbiya", "Kimyo", "Fizika", "Informatika", "Algebra"] }
  ],
  
  // 8-B sinf
  '8b': [
    { day: "Dushanba", lessons: ["Kelajak soati", "Chizmachilik", "Ona tili", "Algebra", "Jismoniy tarbiya", "Adabiyot"] },
    { day: "Seshanba", lessons: ["Algebra", "Informatika", "Biyologiya", "Fransuz tili", "Fizika"] },
    { day: "Chorshanba", lessons: ["Tarbiya", "Jahon Tarix", "Rus tili", "Ona tili", "Fransuz tili", "Algebra"] },
    { day: "Payshanba", lessons: ["Geografiya", "Fransuz tili", "Rus tili", "Jismoniy tarbiya", "Ona tili", "Kimyo"] },
    { day: "Juma", lessons: ["Texnalogiya", "Geografiya", "O`zbekiston tarixi", "Geometriya", "Adabiyot", "Fizika"] },
    { day: "Shanba", lessons: ["Geometriya", "Huquq", "Kimyo", "Biologiya", "O`zbekiston tarixi"] }
  ],
  
  // 9-A sinf
  '9a': [
    { day: "Dushanba", lessons: ["Kelajak soati", "Adabiyot", "Fransuz tili", "Chizmachilik", "Ona tili", "Informatika"] },
    { day: "Seshanba", lessons: ["O`zbekiston tarixi", "Geografiya", "Fizika", "Algebra", "Geometriya", "Jismniy tarbiya"] },
    { day: "Chorshanba", lessons: ["Jismoniy tarbiya", "Geometriya", "Algebra", "Informatika", "Fransuz tili", "Tarbiya"] },
    { day: "Payshanba", lessons: ["Texnalogiya", "Ona tili", "Kimyo", "Fransuz tili", "Jahon tarixi", "Adabiyot"] },
    { day: "Juma", lessons: ["Biologiya", "Fizika", "Ona tili", "Rus tili", "O`zbekiston tarixi", "Geografiya"] },
    { day: "Shanba", lessons: ["Biologiya", "Rus tili", "Huquq", "Algebra", "Kimyo"] }
  ],
  
  // 9-B sinf
  '9b': [
    { day: "Dushanba", lessons: ["Kelajak soati", "Algebra", "Chizmachilik", "Ona tili", "Adabiyot", "Kimyo"] },
    { day: "Seshanba", lessons: ["Fizika", "Geometriya", "Algebra", "Jismoniy tarbiya", "O`zbekiston tarixi", "Fransuz tili"] },
    { day: "Chorshanba", lessons: ["Informatika", "Adabiyot", "Fransuz tili", "Jismoniy tarbiya", "Geometriya", "Huquq"] },
    { day: "Payshanba", lessons: ["Kimyo", "Fransuz tili", "Geografiya", "Jahon tarixi", "Biologiya", "Rus tili"] },
    { day: "Juma", lessons: ["Ona tili", "Texnalogiya", "Informatika", "O`zbekiston tarixi", "Tarbiya", "Iqtisodiyot"] },
    { day: "Shanba", lessons: ["Fizika", "Algebra", "Ona tili", "Rus tili", "Biologiya"] }
  ],
  
  // 10-A sinf
  '10a': [
    { day: "Dushanba", lessons: ["Kelajak soati", "Fizika", "Algebra", "Geometriya", "Informatika"] },
    { day: "Seshanba", lessons: ["Biologiya", "Fransuz tili", "Kimyo", "Huquq", "Geografiya"] },
    { day: "Chorshanba", lessons: ["Rus tili", "Fransuz tili", "ChYoT", "Jismoniy tarbiya", "Tarbiya", "Ona tili"] },
    { day: "Payshanba", lessons: ["Biologiya", "Geografiya", "O`zbekiston tarixi", "Adabiyot", "ChYoT"] },
    { day: "Juma", lessons: ["Ona tili", "Algebra", "Jahon tarixi", "Jismoniy tarbiya", "Adabiyot", "Rus tili"] }
  ]
};

// Fanlarning kalitlarini olish (rang berish uchun)
function getLessonKey(lesson) {
  const lessonKeys = {
    'Matematika': 'matematika',
    'Algebra': 'matematika',
    'Geometriya': 'matematika',
    'Ona tili': 'ona-tili',
    'Adabiyot': 'adabiyot',
    'Ingliz tili': 'ingliz-tili',
    'Ingiliz tili': 'ingliz-tili',
    'Fransuz tili': 'ingliz-tili',
    'Rus tili': 'ingliz-tili',
    'Rus tili(n)': 'ingliz-tili',
    'Fizika': 'fizika',
    'Kimyo': 'kimyo',
    'Biologiya': 'biologiya',
    'Biyologiya': 'biologiya',
    'Tarix': 'tarix',
    'O`zbekiston tarixi': 'tarix',
    'Jahon tarixi': 'tarix',
    'Jaxon tarixi': 'tarix',
    'Uz tarix': 'tarix',
    'Geografiya': 'geografiya',
    'Informatika': 'informatika',
    'Texnalogiya': 'texnologiya',
    'Chizmachilik': 'texnologiya',
    'Chizmachilika': 'texnologiya',
    'Jismoniy tarbiya': 'jismoniy-tarbiya',
    'Jismniy tarbiya': 'jismoniy-tarbiya',
    'Jismoniy Tarbiya': 'jismoniy-tarbiya',
    'Jisminiy tarbiya': 'jismoniy-tarbiya',
    'Musiqa': 'sanat',
    'Tasviriy san`at': 'sanat',
    'Tarbiya': 'tarbiya',
    'Huquq': 'huquq',
    'Iqtisodiyot': 'iqtisod',
    'Kelajak soati': 'kelajak',
    'Tabiy fan': 'tabiiy',
    'Tarixdan hikoyalar': 'tarix',
    'ChYoT': 'chyot'
  };
  return lessonKeys[lesson] || '';
}

// Sinfni tanlash va jadvalni ko'rsatish
function showSchedule(classType) {
  // Tugmalardan active classni olib tashlash
  document.querySelectorAll('.class-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Tanlangan tugmaga active class qo'shish
  const activeBtn = document.querySelector(`.class-btn[data-class="${classType}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  // Jadval ma'lumotlarini olish
  const scheduleData = schedules[classType];
  const container = document.getElementById('schedule-container');
  
  if (!scheduleData || scheduleData.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📚</div>
        <h3>Jadval topilmadi</h3>
        <p>Kechirasiz, bu sinf uchun jadval hozircha mavjud emas</p>
      </div>
    `;
    return;
  }
  
  // Maksimal dars sonini aniqlash (eng ko'p dars bo'lgan kun)
  let maxLessons = 0;
  scheduleData.forEach(day => {
    if (day.lessons.length > maxLessons) {
      maxLessons = day.lessons.length;
    }
  });
  
  // Jadval sarlavhalarini yaratish (1-dars, 2-dars, ...)
  let headersHtml = '<th>Kun</th>';
  for (let i = 1; i <= maxLessons; i++) {
    headersHtml += `<th>${i}-dars</th>`;
  }
  
  // Jadval qatorlarini yaratish
  let rowsHtml = '';
  scheduleData.forEach(day => {
    rowsHtml += '<tr>';
    rowsHtml += `<td class="day-cell">${day.day}</td>`;
    
    // Darslarni qo'shish
    for (let i = 0; i < maxLessons; i++) {
      const lesson = day.lessons[i] || '—';
      const lessonKey = getLessonKey(lesson);
      rowsHtml += `<td data-lesson="${lessonKey}">${lesson}</td>`;
    }
    
    rowsHtml += '</tr>';
  });
  
  // To'liq jadval HTML
  const tableHTML = `
    <div style="overflow-x: auto;">
      <table class="schedule-table">
        <thead>
          <tr>
            ${headersHtml}
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  `;
  
  container.innerHTML = tableHTML;
  
  // Smooth scroll
  container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================
// QIDIRUV FUNKSIYASI
// ============================================

const searchInput = document.getElementById('search-input');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const filter = e.target.value.toLowerCase().trim();
    
    // Qidiriladigan elementlar
    const newsCards = document.querySelectorAll('.news-card');
    const projectCards = document.querySelectorAll('.project-card');
    const aboutText = document.querySelectorAll('.about p');
    const contactInfo = document.querySelectorAll('.contact-info li');
    const scheduleCells = document.querySelectorAll('.schedule-table td');
    
    // Yangiliklar kartalarini qidirish
    newsCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (filter === '' || text.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
    
    // Loyihalar kartalarini qidirish
    projectCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (filter === '' || text.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
    
    // About matnini qidirish
    aboutText.forEach(text => {
      const parent = text.parentElement;
      const content = text.textContent.toLowerCase();
      if (filter === '' || content.includes(filter)) {
        if (parent) parent.style.display = '';
      } else {
        if (parent) parent.style.display = 'none';
      }
    });
    
    // Kontakt ma'lumotlarini qidirish
    contactInfo.forEach(info => {
      const text = info.textContent.toLowerCase();
      if (filter === '' || text.includes(filter)) {
        info.style.display = '';
      } else {
        info.style.display = 'none';
      }
    });
    
    // Jadval qatorlarini qidirish
    const tableRows = document.querySelectorAll('.schedule-table tbody tr');
    tableRows.forEach(row => {
      const rowText = row.textContent.toLowerCase();
      if (filter === '' || rowText.includes(filter)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
}

// ============================================
// DARK MODE FUNKSIYASI
// ============================================

const toggleButton = document.getElementById('dark-mode-toggle');
if (toggleButton) {
  // Mavzuni qo'llash funksiyasi
  const applyTheme = () => {
    const isDark = localStorage.getItem('theme') === 'dark';
    document.body.classList.toggle('dark', isDark);
    toggleButton.textContent = isDark ? '☀️' : '🌙';
  };
  
  applyTheme(); // Sahifa yuklanganda mavzuni qo'llash

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleButton.textContent = isDark ? '☀️' : '🌙';
  });
}

// ============================================
// SAHIFA YUKLANGANDA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // 5-sinf tugmasiga active class qo'shish
  const defaultButton = document.querySelector('.class-btn[data-class="5"]');
  if (defaultButton) {
    defaultButton.classList.add('active');
  }
  
  // 5-sinf jadvalini yuklash
  showSchedule('5');
});
