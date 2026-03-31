// ============================================
// TEST-AI.JS - AI ORQALI TEST YARATISH
// ============================================

// Mistral Large API kaliti (sizning mavjud kalitingiz)
const MISTRAL_API_KEY = "vJtD1Lt8l60qRF7OSOWESe7wScLFFy4y";
const MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions";

// Sinf va fanlar ro'yxati
const SINFLAR = ["5", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a"];
const FANLAR = [
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

// Qiyinlik koeffitsientlari (sinfga bog'liq)
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

// Har bir sinf+fan uchun o'tiladigan mavzular
const MAVZULAR = {
  // 5-sinf
  "5_matematika": ["Sonlar", "Qo'shish", "Ayirish", "Ko'paytirish", "Bo'lish", "Kasrlar", "Geometrik shakllar"],
  "5_ona-tili": ["Alifbo", "Harflar", "So'zlar", "Gap", "Tinish belgilari", "Ot", "Sifat"],
  "5_rus-tili": ["Алфавит", "Буквы", "Слова", "Предложения", "Знаки препинания"],
  "5_tabiiy-fan": ["Tirik organizmlar", "O'simliklar", "Hayvonlar", "Suv", "Havo", "Tuproq"],
  "5_tarix": ["O'zbekiston tarixi", "Qadimgi odamlar", "Buyuk ipak yo'li", "Amir Temur"],
  
  // 6-sinf
  "6_matematika": ["Natural sonlar", "Kasrlar", "Protsent", "Nisbat", "Tenglama", "Geometriya"],
  "6_ona-tili": ["So'z turkumlari", "Ot", "Sifat", "Son", "Olmoshlar", "Fe'l", "Gap bo'laklari"],
  "6_rus-tili": ["Существительное", "Прилагательное", "Глагол", "Местоимение", "Числительное"],
  "6_tabiiy-fan": ["Suyuqliklar", "Gazlar", "Qattiq jismlar", "Energiya", "Kuch", "Harakat"],
  "6_tarix": ["Qadimgi dunyo", "Yunoniston", "Rim", "Buyuk ipak yo'li", "Islom dini"],
  "6_geografiya": ["Yer shari", "Materiklar", "Okeanlar", "Tabiat zonalari", "Iqlim"],
  
  // 7-sinf
  "7_matematika": ["Algebraik ifodalar", "Tenglamalar", "Tengsizliklar", "Funksiya", "Geometrik shakllar"],
  "7_fizika": ["Mexanik harakat", "Tezlik", "Kuch", "Og'irlik", "Ishqalanish", "Bosim"],
  "7_kimyo": ["Atom", "Molekula", "Kimyoviy elementlar", "Kislorod", "Vodorod", "Suv"],
  "7_biologiya": ["Hujayra", "To'qimalar", "Organlar", "O'simliklar", "Hayvonlar", "Inson organizmi"],
  "7_tarix": ["O'zbekiston XV-XVI asrlarda", "Shayboniylar", "Boburiylar", "Xiva xonligi"],
  "7_geografiya": ["O'zbekiston geografiyasi", "Farg'ona vodiysi", "Tog'lar", "Daryolar", "Iqlim"],
  
  // 8-sinf
  "8_matematika": ["Kvadrat tenglamalar", "Kvadrat funksiya", "Parabola", "Progressiya", "Geometriya"],
  "8_fizika": ["Elektr toki", "Kuchlanish", "Qarshilik", "Om qonuni", "Magnit maydoni"],
  "8_kimyo": ["Kislotalar", "Asoslar", "Tuzlar", "Oksidlar", "Kimyoviy reaksiyalar"],
  "8_biologiya": ["Inson anatomiyasi", "Skelet", "Mushaklar", "Nerv sistemasi", "Qon aylanish"],
  "8_tarix": ["O'zbekiston XVII-XVIII asrlarda", "Rossiya mustamlakasi", "Jadidchilik"],
  "8_geografiya": ["Dunyo geografiyasi", "Aholi", "Iqtisodiyot", "Tabiiy resurslar"],
  "8_informatika": ["Kompyuter tuzilishi", "Windows", "Word", "Excel", "Internet"],
  
  // 9-sinf
  "9_matematika": ["Trigonometriya", "Vektorlar", "Aylana", "Kombinatorika", "Ehtimollar"],
  "9_fizika": ["Nyuton qonunlari", "Impuls", "Energiya", "Ish", "Quvvat"],
  "9_kimyo": ["Mendeleyev jadvali", "Kimyoviy bog'lanish", "Eritmalar", "Elektrolitlar"],
  "9_biologiya": ["Irsiyat", "Genetika", "Evolyutsiya", "Ekologiya", "Biosfera"],
  "9_tarix": ["O'zbekiston XX asrda", "Mustaqillik", "Amir Temur", "Jadidchilik"],
  "9_geografiya": ["Dunyo iqtisodiyoti", "Global muammolar", "O'zbekiston iqtisodiyoti"],
  "9_informatika": ["Algoritmlar", "Dasturlash", "Python", "Web dasturlash"],
  
  // 10-sinf
  "10_matematika": ["Hosila", "Integral", "Limit", "Funksiya grafigi", "Trigonometrik tenglamalar"],
  "10_fizika": ["Elektr maydoni", "Magnit maydoni", "Elektromagnit induksiya", "Optika"],
  "10_kimyo": ["Organik kimyo", "Uglevodorodlar", "Spirtlar", "Kislotalar", "Polimerlar"],
  "10_biologiya": ["Hujayra biologiyasi", "Genetika", "Molekulyar biologiya", "Biotexnologiya"],
  "10_tarix": ["O'zbekiston mustaqillik yillarida", "Jahon tarixi", "Globalizatsiya"],
  "10_geografiya": ["Geosiyosat", "Xalqaro munosabatlar", "Tabiiy geografiya"],
  "10_informatika": ["Ma'lumotlar bazasi", "SQL", "JavaScript", "React", "Backend"]
};

// ============================================
// 1. AI ORQALI TEST YARATISH
// ============================================

class AITestGenerator {
  
  // 1.1 Bitta test yaratish
  async createSingleTest(sinf, fan, testNumber = 1) {
    const fanInfo = FANLAR.find(f => f.nom === fan);
    const fanNomi = fanInfo ? fanInfo.ozbekcha : fan;
    const qiyinlikKoeff = QIYINLIK_KOEFF[sinf] || 1.0;
    
    // Sinfga mos mavzular
    const sinfKey = sinf.replace(/[a-z]/g, ''); // "6a" dan "6" ni olish
    const mavzular = MAVZULAR[`${sinfKey}_${fan}`] || MAVZULAR[`${sinf}_${fan}`] || ["Asosiy mavzular"];
    
    // AI ga yuboriladigan prompt
    const prompt = `
Siz 41-maktab o'quvchilari uchun test tuzuvchi AIsiz.

Test haqida ma'lumot:
- Sinf: ${sinf} (${sinf === "5" ? "5-sinf" : sinf === "6a" ? "6-A sinf" : sinf === "6b" ? "6-B sinf" : sinf === "7a" ? "7-A sinf" : sinf === "7b" ? "7-B sinf" : sinf === "8a" ? "8-A sinf" : sinf === "8b" ? "8-B sinf" : sinf === "9a" ? "9-A sinf" : sinf === "9b" ? "9-B sinf" : "10-A sinf"})
- Fan: ${fanNomi}
- Test raqami: ${testNumber}
- Qiyinlik darajasi: ${qiyinlikKoeff} (1.0 - oson, 2.2 - qiyin)

O'tilgan mavzular: ${mavzular.join(", ")}

TEST TALABLARI:
1. 20 ta savoldan iborat test tuzing
2. Har bir savol 4 ta variantli (A, B, C, D) bo'lsin
3. Har bir savol 2 ball bo'lsin
4. Savollar ${mavzular.join(", ")} mavzularidan bo'lsin
5. Sinf darajasiga mos bo'lsin (${sinf}-sinf o'quvchisi tushunadigan darajada)
6. Savollar o'zbek tilida bo'lsin
7. To'g'ri javobni aniq ko'rsating

JAVOB FORMATI (faqat JSON qaytaring, boshqa matn yo'q):
{
  "savollar": [
    {
      "savol": "Savol matni",
      "variantlar": ["A variant", "B variant", "C variant", "D variant"],
      "togri": 0,
      "ball": 2
    }
  ]
}

To'g'ri javob indeksi 0-3 oralig'ida bo'lsin (0=A, 1=B, 2=C, 3=D).
`;

    try {
      const response = await fetch(MISTRAL_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${MISTRAL_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "mistral-large-2411",
          messages: [
            { role: "system", content: "Siz o'zbek tilida test tuzuvchi aqlli AIsiz. Faqat JSON formatda javob qaytaring." },
            { role: "user", content: prompt }
          ],
          temperature: 0.7,
          max_tokens: 4096
        })
      });

      if (!response.ok) {
        throw new Error(`API xatosi: ${response.status}`);
      }

      const data = await response.json();
      let content = data.choices[0].message.content;
      
      // JSON ni tozalash (boshqa matnlar bo'lsa olib tashlash)
      content = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      
      // JSON ni parse qilish
      const parsed = JSON.parse(content);
      
      // Test obyektini yaratish
      const testId = `${sinf}_${fan}_${testNumber.toString().padStart(3, "0")}`;
      const test = {
        id: testId,
        sinf: sinf,
        fan: fan,
        nom: `${fanNomi} testi #${testNumber}`,
        savollar: parsed.savollar,
        qiyinlikKoeff: qiyinlikKoeff,
        vaqt: 35,
        aktiv: false, // yangi testlar aktiv emas, admin aktivlashtiradi
        yaratilganVaqt: new Date().toISOString(),
        yechilishSoni: 0,
        mavzular: mavzular
      };
      
      return test;
      
    } catch (error) {
      console.error("AI test yaratishda xatolik:", error);
      // Xato bo'lsa, fallback test yaratamiz
      return this.createFallbackTest(sinf, fan, testNumber);
    }
  }
  
  // 1.2 Ko'p test yaratish (masalan 200 ta)
  async createMultipleTests(sinf, fan, count = 200, onProgress = null) {
    const tests = [];
    const batchSize = 10; // Bir vaqtda 10 ta test yaratish
    
    for (let i = 1; i <= count; i += batchSize) {
      const batch = [];
      const end = Math.min(i + batchSize - 1, count);
      
      for (let j = i; j <= end; j++) {
        if (onProgress) {
          onProgress(j, count, `Test ${j}/${count} yaratilmoqda...`);
        }
        
        const test = await this.createSingleTest(sinf, fan, j);
        batch.push(test);
        
        // DB ga saqlash
        try {
          await db.addTest(test);
        } catch (err) {
          console.warn(`Test ${j} saqlashda xatolik:`, err);
        }
      }
      
      tests.push(...batch);
      
      // API limiti uchun kichik kutish
      if (i + batchSize <= count) {
        await this.sleep(1000);
      }
    }
    
    return tests;
  }
  
  // 1.3 Fallback test (AI ishlamasa)
  createFallbackTest(sinf, fan, testNumber) {
    const fanInfo = FANLAR.find(f => f.nom === fan);
    const fanNomi = fanInfo ? fanInfo.ozbekcha : fan;
    
    // Standart savollar
    const defaultQuestions = this.getDefaultQuestions(sinf, fan);
    
    return {
      id: `${sinf}_${fan}_${testNumber.toString().padStart(3, "0")}`,
      sinf: sinf,
      fan: fan,
      nom: `${fanNomi} testi #${testNumber}`,
      savollar: defaultQuestions,
      qiyinlikKoeff: QIYINLIK_KOEFF[sinf] || 1.0,
      vaqt: 35,
      aktiv: false,
      yaratilganVaqt: new Date().toISOString(),
      yechilishSoni: 0
    };
  }
  
  // 1.4 Sinf va fanga mos default savollar
  getDefaultQuestions(sinf, fan) {
    // Matematika uchun default savollar
    if (fan === "matematika") {
      const baseQuestions = [
        { savol: "5 + 3 = ?", variantlar: ["6", "7", "8", "9"], togri: 2, ball: 2 },
        { savol: "10 - 4 = ?", variantlar: ["4", "5", "6", "7"], togri: 2, ball: 2 },
        { savol: "3 × 4 = ?", variantlar: ["10", "11", "12", "13"], togri: 2, ball: 2 },
        { savol: "15 ÷ 3 = ?", variantlar: ["3", "4", "5", "6"], togri: 2, ball: 2 },
        { savol: "Qaysi son eng katta?", variantlar: ["12", "15", "9", "7"], togri: 1, ball: 2 }
      ];
      
      // 20 ta savol bo'lguncha takrorlash
      const questions = [];
      for (let i = 0; i < 20; i++) {
        questions.push({ ...baseQuestions[i % baseQuestions.length], savol: `${baseQuestions[i % baseQuestions.length].savol} (${i+1})` });
      }
      return questions;
    }
    
    // Ona tili uchun default savollar
    if (fan === "ona-tili") {
      const baseQuestions = [
        { savol: "Alifboda nechta harf bor?", variantlar: ["28", "29", "30", "31"], togri: 1, ball: 2 },
        { savol: "Unli harflar nechta?", variantlar: ["5", "6", "7", "8"], togri: 1, ball: 2 },
        { savol: "Gap qanday yoziladi?", variantlar: ["kichik", "katta", "qalin", "yog'on"], togri: 1, ball: 2 }
      ];
      
      const questions = [];
      for (let i = 0; i < 20; i++) {
        questions.push({ ...baseQuestions[i % baseQuestions.length], savol: `${baseQuestions[i % baseQuestions.length].savol} (${i+1})` });
      }
      return questions;
    }
    
    // Boshqa fanlar uchun
    const defaultQuestion = {
      savol: `${fan} fanidan test savoli`,
      variantlar: ["A variant", "B variant", "C variant", "D variant"],
      togri: 0,
      ball: 2
    };
    
    return Array(20).fill().map((_, i) => ({
      ...defaultQuestion,
      savol: `${fan} fanidan ${i+1}-savol`
    }));
  }
  
  // 1.5 Kutish funksiyasi
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // 1.6 Sinf+fanga mos barcha testlarni olish (bazadan)
  async getAllTestsForSubject(sinf, fan) {
    return await db.getTestsBySinfFan(sinf, fan);
  }
  
  // 1.7 Faol testlarni olish (30 ta)
  async getActiveTests(sinf, fan) {
    return await db.getActiveTests(sinf, fan);
  }
  
  // 1.8 Faol testlarni random tanlash (30 ta)
  async randomizeActiveTests(sinf, fan) {
    const allTests = await this.getAllTestsForSubject(sinf, fan);
    if (allTests.length === 0) return [];
    
    // Random 30 ta test tanlash
    const shuffled = [...allTests];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    const selectedTests = shuffled.slice(0, 30);
    const testIds = selectedTests.map(t => t.id);
    
    // DB ga saqlash
    await db.updateActiveTests(sinf, fan, testIds);
    
    return selectedTests;
  }
}

// Global obyekt yaratish
const aiTestGenerator = new AITestGenerator();

// ============================================
// 2. KOMBINATSION TEST YARATISH
// ============================================

class KombinatsionTestGenerator {
  
  // 2.1 Kombinatsion test yaratish (barcha fanlardan)
  async createKombinatsionTest(sinf, testNumber = 1) {
    const qiyinlikKoeff = QIYINLIK_KOEFF[sinf] || 1.0;
    const sinfKey = sinf.replace(/[a-z]/g, '');
    
    // Barcha fanlardan mavzular
    const fanlar = FANLAR.filter(f => {
      // 5-sinf uchun faqat 5 ta fan
      if (sinf === "5") {
        return ["matematika", "ona-tili", "rus-tili", "tabiiy-fan", "tarix"].includes(f.nom);
      }
      // 6-sinf uchun geografiya qo'shiladi
      if (sinf === "6a" || sinf === "6b") {
        return ["matematika", "ona-tili", "rus-tili", "tabiiy-fan", "tarix", "geografiya"].includes(f.nom);
      }
      // 7+ sinflar uchun hamma fanlar
      return true;
    });
    
    const prompt = `
Siz 41-maktab o'quvchilari uchun KOMBINATSION TEST tuzuvchi AIsiz.

Kombinatsion test - bu barcha fanlardan aralash savollar beriladigan test.

Test haqida ma'lumot:
- Sinf: ${sinf}
- Qiyinlik: ${qiyinlikKoeff}

Fanlar va mavzular:
${fanlar.map(f => {
  const mavzular = MAVZULAR[`${sinfKey}_${f.nom}`] || MAVZULAR[`${sinf}_${f.nom}`] || ["Asosiy mavzular"];
  return `- ${f.ozbekcha}: ${mavzular.slice(0, 3).join(", ")}...`;
}).join("\n")}

TEST TALABLARI:
1. 20 ta savoldan iborat test tuzing
2. Har bir fan dan 2-3 ta savol bo'lsin (jami 20 ta)
3. Har bir savol 4 ta variantli bo'lsin
4. Har bir savol 2 ball bo'lsin
5. Sinf darajasiga mos bo'lsin
6. Savollar o'zbek tilida bo'lsin

JAVOB FORMATI (faqat JSON):
{
  "savollar": [
    {
      "savol": "Savol matni",
      "variantlar": ["A", "B", "C", "D"],
      "togri": 0,
      "ball": 2,
      "fan": "matematika"
    }
  ]
}
`;

    try {
      const response = await fetch(MISTRAL_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${MISTRAL_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "mistral-large-2411",
          messages: [
            { role: "system", content: "Siz o'zbek tilida kombinatsion test tuzuvchi AIsiz. Faqat JSON formatda javob qaytaring." },
            { role: "user", content: prompt }
          ],
          temperature: 0.7,
          max_tokens: 4096
        })
      });

      if (!response.ok) {
        throw new Error(`API xatosi: ${response.status}`);
      }

      const data = await response.json();
      let content = data.choices[0].message.content;
      content = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      const parsed = JSON.parse(content);
      
      const testId = `kombinatsion_${sinf}_${testNumber.toString().padStart(3, "0")}`;
      
      return {
        id: testId,
        sinf: sinf,
        fan: "kombinatsion",
        nom: `${sinf === "5" ? "5-sinf" : sinf === "6a" ? "6-A sinf" : sinf === "6b" ? "6-B sinf" : sinf === "7a" ? "7-A sinf" : sinf === "7b" ? "7-B sinf" : sinf === "8a" ? "8-A sinf" : sinf === "8b" ? "8-B sinf" : sinf === "9a" ? "9-A sinf" : sinf === "9b" ? "9-B sinf" : "10-A sinf"} uchun kombinatsion test`,
        savollar: parsed.savollar,
        qiyinlikKoeff: qiyinlikKoeff,
        vaqt: 35,
        aktiv: true,
        yaratilganVaqt: new Date().toISOString()
      };
      
    } catch (error) {
      console.error("Kombinatsion test yaratishda xatolik:", error);
      return this.createFallbackKombinatsionTest(sinf);
    }
  }
  
  // 2.2 Fallback kombinatsion test
  createFallbackKombinatsionTest(sinf) {
    const questions = [];
    const fanlar = ["Matematika", "Ona tili", "Rus tili", "Tarix", "Geografiya"];
    
    for (let i = 0; i < 20; i++) {
      const fan = fanlar[i % fanlar.length];
      questions.push({
        savol: `${fan} fanidan ${i+1}-savol: Bu yerda test savoli bo'ladi`,
        variantlar: ["A variant", "B variant", "C variant", "D variant"],
        togri: 0,
        ball: 2,
        fan: fan.toLowerCase().replace(" ", "-")
      });
    }
    
    return {
      id: `kombinatsion_${sinf}_001`,
      sinf: sinf,
      fan: "kombinatsion",
      nom: `${sinf}-sinf uchun kombinatsion test`,
      savollar: questions,
      qiyinlikKoeff: QIYINLIK_KOEFF[sinf] || 1.0,
      vaqt: 35,
      aktiv: true,
      yaratilganVaqt: new Date().toISOString()
    };
  }
}

const kombinatsionGenerator = new KombinatsionTestGenerator();

// ============================================
// 3. EXPORT FUNKSIYALAR (Admin panel uchun)
// ============================================

async function generateAllTestsForSchool(onProgress) {
  const total = SINFLAR.length * FANLAR.length;
  let completed = 0;
  
  for (const sinf of SINFLAR) {
    for (const fan of FANLAR) {
      // 5-sinf uchun faqat 5 ta fan
      if (sinf === "5" && !["matematika", "ona-tili", "rus-tili", "tabiiy-fan", "tarix"].includes(fan.nom)) {
        completed++;
        continue;
      }
      
      if (onProgress) {
        onProgress(completed, total, `${sinf} - ${fan.ozbekcha} testlari yaratilmoqda...`);
      }
      
      // Mavjud testlarni tekshirish
      const existingTests = await aiTestGenerator.getAllTestsForSubject(sinf, fan.nom);
      if (existingTests.length === 0) {
        // 200 ta test yaratish
        await aiTestGenerator.createMultipleTests(sinf, fan.nom, 200, (current, total, msg) => {
          if (onProgress) {
            onProgress(completed + (current / total), total * 200, `${sinf} - ${fan.ozbekcha}: ${msg}`);
          }
        });
      }
      
      completed++;
    }
  }
  
  return { success: true, message: "Barcha testlar yaratildi!" };
}

async function generateKombinatsionTestsForAllSinf(onProgress) {
  const sinflar = ["5", "6a", "6b", "7a", "7b", "8a", "8b", "9a", "9b", "10a"];
  
  for (let i = 0; i < sinflar.length; i++) {
    const sinf = sinflar[i];
    if (onProgress) {
      onProgress(i + 1, sinflar.length, `${sinf}-sinf uchun kombinatsion test yaratilmoqda...`);
    }
    
    const test = await kombinatsionGenerator.createKombinatsionTest(sinf);
    await db.addTest(test);
  }
  
  return { success: true, message: "Barcha kombinatsion testlar yaratildi!" };
}

// Konsolga yozish
console.log("✅ AI Test Generator yuklandi");
console.log("📚 Sinf va fanlar:", SINFLAR.length, "sinf,", FANLAR.length, "fan");
console.log("🤖 API: Mistral Large");
