// ============================================
// DATABASE.JS - IndexedDB boshqaruvi
// ============================================

class MaktabDatabase {
  constructor() {
    this.dbName = "Maktab41DB";
    this.dbVersion = 1;
    this.db = null;
  }

  // 1. Bazani ochish/yaratish
  async open() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        // 1.1 tests store
        if (!db.objectStoreNames.contains("tests")) {
          const testsStore = db.createObjectStore("tests", { keyPath: "id" });
          testsStore.createIndex("sinf", "sinf", { unique: false });
          testsStore.createIndex("fan", "fan", { unique: false });
          testsStore.createIndex("aktiv", "aktiv", { unique: false });
          testsStore.createIndex("sinf_fan", ["sinf", "fan"], { unique: false });
        }
        
        // 1.2 musobaqaTests store
        if (!db.objectStoreNames.contains("musobaqaTests")) {
          const musobaqaStore = db.createObjectStore("musobaqaTests", { keyPath: "id" });
          musobaqaStore.createIndex("aktiv", "aktiv", { unique: false });
          musobaqaStore.createIndex("boshlanishVaqti", "boshlanishVaqti", { unique: false });
        }
        
        // 1.3 natijalar store
        if (!db.objectStoreNames.contains("natijalar")) {
          const natijalarStore = db.createObjectStore("natijalar", { keyPath: "id" });
          natijalarStore.createIndex("oquvchiId", "oquvchiId", { unique: false });
          natijalarStore.createIndex("sinf", "sinf", { unique: false });
          natijalarStore.createIndex("testId", "testId", { unique: false });
          natijalarStore.createIndex("testTuri", "testTuri", { unique: false });
          natijalarStore.createIndex("vaqt", "vaqt", { unique: false });
        }
        
        // 1.4 oquvchilar store
        if (!db.objectStoreNames.contains("oquvchilar")) {
          const oquvchilarStore = db.createObjectStore("oquvchilar", { keyPath: "id" });
          oquvchilarStore.createIndex("sinf", "sinf", { unique: false });
          oquvchilarStore.createIndex("umumiyBall", "umumiyBall", { unique: false });
        }
        
        // 1.5 faolTestlar store
        if (!db.objectStoreNames.contains("faolTestlar")) {
          const faolStore = db.createObjectStore("faolTestlar", { keyPath: "sinf_fan" });
          faolStore.createIndex("sinf", "sinf", { unique: false });
          faolStore.createIndex("fan", "fan", { unique: false });
        }
      };
    });
  }

  // 2. TESTLAR BILAN ISHLASH
  
  // 2.1 Yangi test qo'shish
  async addTest(test) {
    const store = this.db.transaction("tests", "readwrite").objectStore("tests");
    return new Promise((resolve, reject) => {
      const request = store.add(test);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  
  // 2.2 Testni olish (ID bo'yicha)
  async getTest(testId) {
    const store = this.db.transaction("tests", "readonly").objectStore("tests");
    return new Promise((resolve, reject) => {
      const request = store.get(testId);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  
  // 2.3 Sinf va fanga mos barcha testlarni olish
  async getTestsBySinfFan(sinf, fan) {
    const store = this.db.transaction("tests", "readonly").objectStore("tests");
    const index = store.index("sinf_fan");
    return new Promise((resolve, reject) => {
      const request = index.getAll([sinf, fan]);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  
  // 2.4 Faol testlarni olish (30 ta)
  async getActiveTests(sinf, fan) {
    // 1. Faol testlar ro'yxatini olish
    const faolStore = this.db.transaction("faolTestlar", "readonly").objectStore("faolTestlar");
    const faol = await new Promise((resolve, reject) => {
      const request = faolStore.get(`${sinf}_${fan}`);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    
    if (!faol || !faol.testlarIdlari) return [];
    
    // 2. Har bir testni alohida olish
    const testsStore = this.db.transaction("tests", "readonly").objectStore("tests");
    const tests = [];
    for (const testId of faol.testlarIdlari) {
      const test = await new Promise((resolve) => {
        const req = testsStore.get(testId);
        req.onsuccess = () => resolve(req.result);
      });
      if (test) tests.push(test);
    }
    return tests;
  }
  
  // 2.5 Faol testlarni yangilash (admin uchun)
  async updateActiveTests(sinf, fan, testIdlari) {
    const store = this.db.transaction("faolTestlar", "readwrite").objectStore("faolTestlar");
    const data = {
      sinf_fan: `${sinf}_${fan}`,
      sinf: sinf,
      fan: fan,
      testlarIdlari: testIdlari,
      yangilanganVaqt: new Date().toISOString()
    };
    return new Promise((resolve, reject) => {
      const request = store.put(data);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // 3. NATIJALAR BILAN ISHLASH
  
  // 3.1 Natija qo'shish (yoki yangilash - eng yaxshi natija)
  async addOrUpdateResult(natija) {
    // Avval shu test uchun oldingi natija bormi?
    const oldResult = await this.getBestResultForTest(natija.oquvchiId, natija.testId);
    
    if (oldResult && oldResult.ball >= natija.ball) {
      // Eski natija yaxshiroq, yangisini qo'shmaymiz
      return { added: false, message: "Avvalgi natijangiz yaxshiroq", bestBall: oldResult.ball };
    }
    
    // Yangi natijani qo'shamiz
    const store = this.db.transaction("natijalar", "readwrite").objectStore("natijalar");
    await new Promise((resolve, reject) => {
      const request = store.add(natija);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
    
    // O'quvchining umumiy ballini yangilaymiz
    await this.updateOquvchiUmumiyBall(natija.oquvchiId);
    
    return { added: true, message: "Natija saqlandi", ball: natija.ball };
  }
  
  // 3.2 Test uchun eng yaxshi natijani olish
  async getBestResultForTest(oquvchiId, testId) {
    const store = this.db.transaction("natijalar", "readonly").objectStore("natijalar");
    const index = store.index("oquvchiId");
    const natijalar = await new Promise((resolve, reject) => {
      const request = index.getAll(oquvchiId);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    
    const filtered = natijalar.filter(n => n.testId === testId);
    if (filtered.length === 0) return null;
    
    // Eng yaxshi ballni qaytarish
    return filtered.reduce((best, current) => current.ball > best.ball ? current : best, filtered[0]);
  }
  
  // 3.3 O'quvchining barcha natijalarini olish
  async getOquvchiNatijalari(oquvchiId) {
    const store = this.db.transaction("natijalar", "readonly").objectStore("natijalar");
    const index = store.index("oquvchiId");
    return new Promise((resolve, reject) => {
      const request = index.getAll(oquvchiId);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // 4. O'QUVCHILAR BILAN ISHLASH
  
  // 4.1 O'quvchi qo'shish yoki yangilash
  async addOrUpdateOquvchi(oquvchi) {
    const store = this.db.transaction("oquvchilar", "readwrite").objectStore("oquvchilar");
    
    // Avval mavjudligini tekshiramiz
    const existing = await new Promise((resolve) => {
      const req = store.get(oquvchi.id);
      req.onsuccess = () => resolve(req.result);
    });
    
    if (existing) {
      // Yangilash
      const updated = { ...existing, ...oquvchi, oxirgiKirish: new Date().toISOString() };
      return new Promise((resolve, reject) => {
        const req = store.put(updated);
        req.onsuccess = () => resolve(updated);
        req.onerror = () => reject(req.error);
      });
    } else {
      // Yangi qo'shish
      oquvchi.oxirgiKirish = new Date().toISOString();
      oquvchi.umumiyBall = 0;
      oquvchi.testlarSoni = 0;
      oquvchi.yechilganTestlar = [];
      oquvchi.engYaxshiNatijalar = {};
      return new Promise((resolve, reject) => {
        const req = store.add(oquvchi);
        req.onsuccess = () => resolve(oquvchi);
        req.onerror = () => reject(req.error);
      });
    }
  }
  
  // 4.2 O'quvchining umumiy ballini yangilash
  async updateOquvchiUmumiyBall(oquvchiId) {
    const natijalar = await this.getOquvchiNatijalari(oquvchiId);
    const umumiyBall = natijalar.reduce((sum, n) => sum + n.ball, 0);
    const testlarSoni = natijalar.length;
    
    const store = this.db.transaction("oquvchilar", "readwrite").objectStore("oquvchilar");
    const oquvchi = await new Promise((resolve) => {
      const req = store.get(oquvchiId);
      req.onsuccess = () => resolve(req.result);
    });
    
    if (oquvchi) {
      oquvchi.umumiyBall = umumiyBall;
      oquvchi.testlarSoni = testlarSoni;
      return new Promise((resolve, reject) => {
        const req = store.put(oquvchi);
        req.onsuccess = () => resolve(oquvchi);
        req.onerror = () => reject(req.error);
      });
    }
  }
  
  // 4.3 Reyting olish (maktab bo'yicha)
  async getMaktabReytingi(limit = 10) {
    const store = this.db.transaction("oquvchilar", "readonly").objectStore("oquvchilar");
    const index = store.index("umumiyBall");
    
    const all = await new Promise((resolve, reject) => {
      const request = index.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    
    // Ball bo'yicha kamayish tartibida saralash
    return all.sort((a, b) => b.umumiyBall - a.umumiyBall).slice(0, limit);
  }
  
  // 4.4 Sinf reytingi olish
  async getSinfReytingi(sinf, limit = 10) {
    const store = this.db.transaction("oquvchilar", "readonly").objectStore("oquvchilar");
    const index = store.index("sinf");
    
    const sinfOquvchilari = await new Promise((resolve, reject) => {
      const request = index.getAll(sinf);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    
    return sinfOquvchilari.sort((a, b) => b.umumiyBall - a.umumiyBall).slice(0, limit);
  }

  // 5. MUSOBAQA TESTLARI BILAN ISHLASH
  
  // 5.1 Faol musobaqa testini olish (vaqtiga qarab)
  async getActiveMusobaqaTest() {
    const store = this.db.transaction("musobaqaTests", "readonly").objectStore("musobaqaTests");
    const index = store.index("aktiv");
    
    const activeTests = await new Promise((resolve, reject) => {
      const request = index.getAll(true);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    
    const now = new Date();
    return activeTests.find(test => {
      const start = new Date(test.boshlanishVaqti);
      const end = new Date(test.tugashVaqti);
      return now >= start && now <= end;
    });
  }
  
  // 5.2 Musobaqa testi vaqtini tekshirish
  async getMusobaqaTestStatus(testId) {
    const test = await this.getMusobaqaTest(testId);
    if (!test) return { exists: false };
    
    const now = new Date();
    const start = new Date(test.boshlanishVaqti);
    const end = new Date(test.tugashVaqti);
    
    if (now < start) {
      // Vaqt kelmagan
      const diff = start - now;
      return {
        status: "waiting",
        message: "Test hali boshlanmagan",
        remaining: diff,
        remainingText: this.formatTime(diff),
        startTime: start
      };
    } else if (now > end) {
      // Vaqt o'tib ketgan
      return {
        status: "expired",
        message: "Test vaqti tugagan",
        endTime: end
      };
    } else {
      // Test davom etmoqda
      const remaining = end - now;
      return {
        status: "active",
        message: "Test davom etmoqda",
        remaining: remaining,
        remainingText: this.formatTime(remaining),
        endTime: end
      };
    }
  }
  
  // Vaqtni formatlash (kun, soat, daqiqa, soniya)
  formatTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (days > 0) {
      return `${days} kun ${hours} soat ${minutes} daqiqa`;
    } else if (hours > 0) {
      return `${hours} soat ${minutes} daqiqa ${secs} soniya`;
    } else {
      return `${minutes} daqiqa ${secs} soniya`;
    }
  }
}

// Global obyekt yaratish
const db = new MaktabDatabase();

// Bazani ochish
db.open().then(() => {
  console.log("✅ Ma'lumotlar bazasi ulandi");
}).catch(err => {
  console.error("❌ Bazani ulashda xatolik:", err);
});
