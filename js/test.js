// ============================================
// TEST TIZIMI - SINFLARGA MOS VERSIYA
// ============================================

// Har bir sinf va fan uchun alohida testlar
const testData = {
  // ========== 5-SINF TESTLARI ==========
  '5': {
    'matematika': {
      title: '🔢 Matematika (5-sinf)',
      icon: '🔢',
      time: 20,
      questions: [
        { question: '5 + 3 = ?', answers: ['6', '7', '8', '9'], correct: 2 },
        { question: '10 - 4 = ?', answers: ['4', '5', '6', '7'], correct: 2 },
        { question: '3 × 4 = ?', answers: ['10', '11', '12', '13'], correct: 2 },
        { question: '15 ÷ 3 = ?', answers: ['3', '4', '5', '6'], correct: 2 },
        { question: 'Qaysi son eng katta?', answers: ['12', '15', '9', '7'], correct: 1 },
        { question: '20 + 15 = ?', answers: ['30', '35', '40', '45'], correct: 1 },
        { question: '100 - 45 = ?', answers: ['55', '65', '45', '35'], correct: 0 },
        { question: '8 × 6 = ?', answers: ['42', '48', '54', '56'], correct: 1 },
        { question: '36 ÷ 6 = ?', answers: ['4', '5', '6', '7'], correct: 2 },
        { question: 'Qaysi son 50 dan kichik?', answers: ['55', '60', '45', '52'], correct: 2 }
      ]
    },
    'ona-tili': {
      title: '📖 Ona tili (5-sinf)',
      icon: '📖',
      time: 20,
      questions: [
        { question: 'Alifboda nechta harf bor?', answers: ['28', '29', '30', '31'], correct: 1 },
        { question: '"Kitob" so\'zida nechta harf?', answers: ['4', '5', '6', '7'], correct: 1 },
        { question: 'Unli harflar nechta?', answers: ['5', '6', '7', '8'], correct: 1 },
        { question: '"Olma" so\'zining birinchi harfi?', answers: ['A', 'O', 'L', 'M'], correct: 1 },
        { question: 'Gap qanday yoziladi?', answers: ['kichik', 'katta', 'qalin', 'yog\'on'], correct: 1 },
        { question: 'Nuqta qayerda qo\'yiladi?', answers: ['gap boshida', 'gap oxirida', 'o\'rtasida', 'hech qayerda'], correct: 1 },
        { question: '"Maktab" so\'zining ma\'nosi?', answers: ['uy', 'o\'qish joyi', 'do\'kon', 'bog\''], correct: 1 },
        { question: 'So\'roq gap oxiriga qanday belgi qo\'yiladi?', answers: ['!', '?', '.', ','], correct: 1 },
        { question: '"Salom" so\'zi qanday ma\'noda?', answers: ['xayrlashish', 'salomlashish', 'rahmat', 'kechirasiz'], correct: 1 },
        { question: 'O\'zbek tilida nechta undosh harf?', answers: ['20', '21', '22', '23'], correct: 2 }
      ]
    },
    'ingliz-tili': {
      title: '🌍 Ingliz tili (5-sinf)',
      icon: '🌍',
      time: 20,
      questions: [
        { question: '"Hello" meaning?', answers: ['Xayr', 'Salom', 'Rahmat', 'Kechirasiz'], correct: 1 },
        { question: '"Cat" is?', answers: ['It', 'Mushuk', 'Sigir', 'Ot'], correct: 1 },
        { question: 'What is "1" in English?', answers: ['One', 'Two', 'Three', 'Four'], correct: 0 },
        { question: '"Red" color?', answers: ['Ko\'k', 'Yashil', 'Qizil', 'Sariq'], correct: 2 },
        { question: '"Mother" meaning?', answers: ['Ota', 'Ona', 'Bola', 'Aka'], correct: 1 },
        { question: '"School" is?', answers: ['Maktab', 'Bog\'cha', 'Universitet', 'Kollej'], correct: 0 },
        { question: 'How are you?', answers: ['Salom', 'Rahmat', 'Yaxshimisiz', 'Xayr'], correct: 2 },
        { question: '"Book" is?', answers: ['Qalam', 'Kitob', 'Daftar', 'Ruchka'], correct: 1 },
        { question: '"Good" meaning?', answers: ['Yomon', 'Yaxshi', 'Katta', 'Kichik'], correct: 1 },
        { question: '"Apple" is?', answers: ['Banan', 'Olma', 'Nok', 'Uzum'], correct: 1 }
      ]
    }
  },
  
  // ========== 6-A SINF TESTLARI ==========
  '6a': {
    'matematika': {
      title: '🔢 Matematika (6-sinf)',
      icon: '🔢',
      time: 25,
      questions: [
        { question: '45 + 37 = ?', answers: ['72', '82', '92', '102'], correct: 1 },
        { question: '120 - 45 = ?', answers: ['65', '75', '85', '95'], correct: 1 },
        { question: '14 × 6 = ?', answers: ['74', '84', '94', '104'], correct: 1 },
        { question: '144 ÷ 12 = ?', answers: ['10', '11', '12', '13'], correct: 2 },
        { question: '3² = ?', answers: ['6', '8', '9', '12'], correct: 2 },
        { question: '√64 = ?', answers: ['6', '7', '8', '9'], correct: 2 },
        { question: 'Kasr 1/2 + 1/4 = ?', answers: ['1/4', '1/2', '3/4', '1'], correct: 2 },
        { question: '25% of 200 = ?', answers: ['25', '50', '75', '100'], correct: 1 },
        { question: '7 × 8 = ?', answers: ['48', '54', '56', '64'], correct: 2 },
        { question: '81 ÷ 9 = ?', answers: ['7', '8', '9', '10'], correct: 2 }
      ]
    },
    'ona-tili': {
      title: '📖 Ona tili (6-sinf)',
      icon: '📖',
      time: 25,
      questions: [
        { question: 'Ot so\'z turkumi nimani bildiradi?', answers: ['Harakat', 'Narsa', 'Belgi', 'Sifat'], correct: 1 },
        { question: 'Fe\'l qanday savolga javob beradi?', answers: ['Kim?', 'Nima?', 'Nima qildi?', 'Qanaqa?'], correct: 2 },
        { question: 'Sifat qanday ma\'noni bildiradi?', answers: ['Narsa', 'Harakat', 'Belgi', 'Son'], correct: 2 },
        { question: '"Yugurdi" qaysi turkum?', answers: ['Ot', 'Sifat', 'Fe\'l', 'Ravish'], correct: 2 },
        { question: 'Gapning bosh bo\'laklari?', answers: ['ega, kesim', 'aniqlovchi', 'to\'ldiruvchi', 'hol'], correct: 0 },
        { question: 'So\'roq olmoshlari?', answers: ['men', 'sen', 'kim?', 'biz'], correct: 2 },
        { question: 'Ko\'plik qo\'shimchasi?', answers: ['-lar', '-ga', '-da', '-ni'], correct: 0 },
        { question: '"Chiroyli" so\'zi qaysi turkum?', answers: ['Ot', 'Fe\'l', 'Sifat', 'Ravish'], correct: 2 },
        { question: 'Kelishiklar nechta?', answers: ['4', '5', '6', '7'], correct: 2 },
        { question: 'Bosh kelishik qaysi?', answers: ['Qaratqich', 'Tushum', 'Jo\'nalish', 'Bosh'], correct: 3 }
      ]
    },
    'ingliz-tili': {
      title: '🌍 Ingliz tili (6-sinf)',
      icon: '🌍',
      time: 25,
      questions: [
        { question: 'I ___ a student.', answers: ['am', 'is', 'are', 'be'], correct: 0 },
        { question: 'She ___ to school every day.', answers: ['go', 'goes', 'going', 'went'], correct: 1 },
        { question: 'They ___ playing football now.', answers: ['am', 'is', 'are', 'be'], correct: 2 },
        { question: 'What is the past of "eat"?', answers: ['eated', 'ate', 'eaten', 'eating'], correct: 1 },
        { question: '___ you like ice cream?', answers: ['Does', 'Do', 'Is', 'Are'], correct: 1 },
        { question: 'My father ___ a doctor.', answers: ['am', 'is', 'are', 'be'], correct: 1 },
        { question: 'We ___ to the park yesterday.', answers: ['go', 'goes', 'went', 'going'], correct: 2 },
        { question: '___ is your name?', answers: ['What', 'Where', 'When', 'Who'], correct: 0 },
        { question: 'I have ___ apple.', answers: ['a', 'an', 'the', 'no'], correct: 1 },
        { question: 'She ___ English very well.', answers: ['speak', 'speaks', 'speaking', 'spoke'], correct: 1 }
      ]
    }
  },
  
  // ========== 6-B SINF TESTLARI ==========
  '6b': {
    'matematika': {
      title: '🔢 Matematika (6-sinf)',
      icon: '🔢',
      time: 25,
      questions: [
        { question: '45 + 37 = ?', answers: ['72', '82', '92', '102'], correct: 1 },
        { question: '120 - 45 = ?', answers: ['65', '75', '85', '95'], correct: 1 },
        { question: '14 × 6 = ?', answers: ['74', '84', '94', '104'], correct: 1 },
        { question: '144 ÷ 12 = ?', answers: ['10', '11', '12', '13'], correct: 2 },
        { question: '3² = ?', answers: ['6', '8', '9', '12'], correct: 2 },
        { question: '√64 = ?', answers: ['6', '7', '8', '9'], correct: 2 },
        { question: 'Kasr 1/2 + 1/4 = ?', answers: ['1/4', '1/2', '3/4', '1'], correct: 2 },
        { question: '25% of 200 = ?', answers: ['25', '50', '75', '100'], correct: 1 },
        { question: '7 × 8 = ?', answers: ['48', '54', '56', '64'], correct: 2 },
        { question: '81 ÷ 9 = ?', answers: ['7', '8', '9', '10'], correct: 2 }
      ]
    },
    'ona-tili': {
      title: '📖 Ona tili (6-sinf)',
      icon: '📖',
      time: 25,
      questions: [
        { question: 'Ot so\'z turkumi nimani bildiradi?', answers: ['Harakat', 'Narsa', 'Belgi', 'Sifat'], correct: 1 },
        { question: 'Fe\'l qanday savolga javob beradi?', answers: ['Kim?', 'Nima?', 'Nima qildi?', 'Qanaqa?'], correct: 2 },
        { question: 'Sifat qanday ma\'noni bildiradi?', answers: ['Narsa', 'Harakat', 'Belgi', 'Son'], correct: 2 },
        { question: '"Yugurdi" qaysi turkum?', answers: ['Ot', 'Sifat', 'Fe\'l', 'Ravish'], correct: 2 },
        { question: 'Gapning bosh bo\'laklari?', answers: ['ega, kesim', 'aniqlovchi', 'to\'ldiruvchi', 'hol'], correct: 0 },
        { question: 'So\'roq olmoshlari?', answers: ['men', 'sen', 'kim?', 'biz'], correct: 2 },
        { question: 'Ko\'plik qo\'shimchasi?', answers: ['-lar', '-ga', '-da', '-ni'], correct: 0 },
        { question: '"Chiroyli" so\'zi qaysi turkum?', answers: ['Ot', 'Fe\'l', 'Sifat', 'Ravish'], correct: 2 },
        { question: 'Kelishiklar nechta?', answers: ['4', '5', '6', '7'], correct: 2 },
        { question: 'Bosh kelishik qaysi?', answers: ['Qaratqich', 'Tushum', 'Jo\'nalish', 'Bosh'], correct: 3 }
      ]
    },
    'ingliz-tili': {
      title: '🌍 Ingliz tili (6-sinf)',
      icon: '🌍',
      time: 25,
      questions: [
        { question: 'I ___ a student.', answers: ['am', 'is', 'are', 'be'], correct: 0 },
        { question: 'She ___ to school every day.', answers: ['go', 'goes', 'going', 'went'], correct: 1 },
        { question: 'They ___ playing football now.', answers: ['am', 'is', 'are', 'be'], correct: 2 },
        { question: 'What is the past of "eat"?', answers: ['eated', 'ate', 'eaten', 'eating'], correct: 1 },
        { question: '___ you like ice cream?', answers: ['Does', 'Do', 'Is', 'Are'], correct: 1 },
        { question: 'My father ___ a doctor.', answers: ['am', 'is', 'are', 'be'], correct: 1 },
        { question: 'We ___ to the park yesterday.', answers: ['go', 'goes', 'went', 'going'], correct: 2 },
        { question: '___ is your name?', answers: ['What', 'Where', 'When', 'Who'], correct: 0 },
        { question: 'I have ___ apple.', answers: ['a', 'an', 'the', 'no'], correct: 1 },
        { question: 'She ___ English very well.', answers: ['speak', 'speaks', 'speaking', 'spoke'], correct: 1 }
      ]
    }
  },
  
  // ========== 7-A SINF TESTLARI ==========
  '7a': {
    'matematika': {
      title: '🔢 Matematika (7-sinf)',
      icon: '🔢',
      time: 30,
      questions: [
        { question: '3x + 5 = 20, x = ?', answers: ['3', '4', '5', '6'], correct: 2 },
        { question: '2(x + 3) = 14, x = ?', answers: ['2', '3', '4', '5'], correct: 2 },
        { question: 'x² = 49, x = ?', answers: ['±5', '±6', '±7', '±8'], correct: 2 },
        { question: '√121 = ?', answers: ['9', '10', '11', '12'], correct: 2 },
        { question: '125 ni 5 ga bo\'lganda?', answers: ['15', '20', '25', '30'], correct: 2 },
        { question: '-5 + 8 = ?', answers: ['-3', '3', '13', '-13'], correct: 1 },
        { question: '7 - (-3) = ?', answers: ['4', '10', '-4', '-10'], correct: 1 },
        { question: '(-6) × (-4) = ?', answers: ['-24', '24', '-10', '10'], correct: 1 },
        { question: '12 ÷ (-3) = ?', answers: ['4', '-4', '36', '-36'], correct: 1 },
        { question: '3² + 4² = ?', answers: ['5²', '6²', '7²', '8²'], correct: 0 }
      ]
    },
    'fizika': {
      title: '⚛️ Fizika (7-sinf)',
      icon: '⚛️',
      time: 30,
      questions: [
        { question: 'Mexanik harakat nima?', answers: ['Jismning o\'zgarishi', 'Jismning vaqt o\'tishi bilan vaziyatining o\'zgarishi', 'Jismning shakli o\'zgarishi', 'Jismning rangi o\'zgarishi'], correct: 1 },
        { question: 'Tezlik formulasi?', answers: ['v = s/t', 'v = t/s', 'v = s × t', 'v = s + t'], correct: 0 },
        { question: 'Inersiya nima?', answers: ['Jismning tinch holatini saqlashi', 'Jismning tezligini o\'zgartirishi', 'Jismning shakli o\'zgarishi', 'Jismning erishi'], correct: 0 },
        { question: 'Kuch birligi?', answers: ['Joul', 'Vatt', 'Nyuton', 'Paskal'], correct: 2 },
        { question: 'Og\'irlik kuchi formulasi?', answers: ['F = ma', 'F = mg', 'F = mv', 'F = m/t'], correct: 1 },
        { question: 'Ishqalanish kuchi...', answers: ['harakatni tezlashtiradi', 'harakatni sekinlashtiradi', 'harakatga ta\'sir qilmaydi', 'harakatni to\'xtatadi'], correct: 1 },
        { question: 'Bosim formulasi?', answers: ['P = F/S', 'P = S/F', 'P = F × S', 'P = F + S'], correct: 0 },
        { question: 'Suyuqlik bosimi...', answers: ['faqat pastga', 'faqat yuqoriga', 'hamma tomonga', 'yon tomonga'], correct: 2 },
        { question: 'Arximed kuchi...', answers: ['yuqoriga', 'pastga', 'yon tomonga', 'aylana bo\'ylab'], correct: 0 },
        { question: 'Energiya birligi?', answers: ['Nyuton', 'Vatt', 'Joul', 'Paskal'], correct: 2 }
      ]
    },
    'ona-tili': {
      title: '📖 Ona tili (7-sinf)',
      icon: '📖',
      time: 25,
      questions: [
        { question: 'Gapning ikkinchi darajali bo\'laklari?', answers: ['ega, kesim', 'aniqlovchi, to\'ldiruvchi, hol', 'ot, sifat', 'fe\'l, ravish'], correct: 1 },
        { question: 'Aniqlovchi qanday savolga javob beradi?', answers: ['Kim?', 'Nima?', 'Qanaqa?', 'Qayerda?'], correct: 2 },
        { question: 'To\'ldiruvchi qanday savolga javob beradi?', answers: ['Kimni?', 'Qanaqa?', 'Qayerda?', 'Qachon?'], correct: 0 },
        { question: 'Hol qanday savolga javob beradi?', answers: ['Kim?', 'Nima?', 'Qanaqa?', 'Qayerda?'], correct: 3 },
        { question: 'Sodda gap necha bo\'lakdan iborat?', answers: ['1', '2', '3', '4'], correct: 1 },
        { question: 'Qo\'shma gap necha sodda gapdan tashkil topadi?', answers: ['1', '2 yoki undan ko\'p', '3', '4'], correct: 1 },
        { question: 'Bog\'lovchisiz qo\'shma gap...', answers: ['bog\'lovchi bilan', 'bog\'lovchisiz', 'yordamchi so\'z bilan', 'ko\'makchi bilan'], correct: 1 },
        { question: 'Uyushiq bo\'laklar...', answers: ['bir-biriga bog\'liq', 'bir-biriga bog\'liq emas', 'bir xil savolga javob beradi', 'turli savolga javob beradi'], correct: 2 },
        { question: 'Kirish so\'zlar...', answers: ['gap bo\'lagi', 'gap bo\'lagi emas', 'ega', 'kesim'], correct: 1 },
        { question: 'Undalma...', answers: ['kimga murojaat', 'narsaga murojaat', 'harakatga murojaat', 'belgiga murojaat'], correct: 0 }
      ]
    }
  },
  
  // ========== 7-B SINF TESTLARI ==========
  '7b': {
    'matematika': {
      title: '🔢 Matematika (7-sinf)',
      icon: '🔢',
      time: 30,
      questions: [
        { question: '3x + 5 = 20, x = ?', answers: ['3', '4', '5', '6'], correct: 2 },
        { question: '2(x + 3) = 14, x = ?', answers: ['2', '3', '4', '5'], correct: 2 },
        { question: 'x² = 49, x = ?', answers: ['±5', '±6', '±7', '±8'], correct: 2 },
        { question: '√121 = ?', answers: ['9', '10', '11', '12'], correct: 2 },
        { question: '125 ni 5 ga bo\'lganda?', answers: ['15', '20', '25', '30'], correct: 2 },
        { question: '-5 + 8 = ?', answers: ['-3', '3', '13', '-13'], correct: 1 },
        { question: '7 - (-3) = ?', answers: ['4', '10', '-4', '-10'], correct: 1 },
        { question: '(-6) × (-4) = ?', answers: ['-24', '24', '-10', '10'], correct: 1 },
        { question: '12 ÷ (-3) = ?', answers: ['4', '-4', '36', '-36'], correct: 1 },
        { question: '3² + 4² = ?', answers: ['5²', '6²', '7²', '8²'], correct: 0 }
      ]
    },
    'fizika': {
      title: '⚛️ Fizika (7-sinf)',
      icon: '⚛️',
      time: 30,
      questions: [
        { question: 'Mexanik harakat nima?', answers: ['Jismning o\'zgarishi', 'Jismning vaqt o\'tishi bilan vaziyatining o\'zgarishi', 'Jismning shakli o\'zgarishi', 'Jismning rangi o\'zgarishi'], correct: 1 },
        { question: 'Tezlik formulasi?', answers: ['v = s/t', 'v = t/s', 'v = s × t', 'v = s + t'], correct: 0 },
        { question: 'Inersiya nima?', answers: ['Jismning tinch holatini saqlashi', 'Jismning tezligini o\'zgartirishi', 'Jismning shakli o\'zgarishi', 'Jismning erishi'], correct: 0 },
        { question: 'Kuch birligi?', answers: ['Joul', 'Vatt', 'Nyuton', 'Paskal'], correct: 2 },
        { question: 'Og\'irlik kuchi formulasi?', answers: ['F = ma', 'F = mg', 'F = mv', 'F = m/t'], correct: 1 },
        { question: 'Ishqalanish kuchi...', answers: ['harakatni tezlashtiradi', 'harakatni sekinlashtiradi', 'harakatga ta\'sir qilmaydi', 'harakatni to\'xtatadi'], correct: 1 },
        { question: 'Bosim formulasi?', answers: ['P = F/S', 'P = S/F', 'P = F × S', 'P = F + S'], correct: 0 },
        { question: 'Suyuqlik bosimi...', answers: ['faqat pastga', 'faqat yuqoriga', 'hamma tomonga', 'yon tomonga'], correct: 2 },
        { question: 'Arximed kuchi...', answers: ['yuqoriga', 'pastga', 'yon tomonga', 'aylana bo\'ylab'], correct: 0 },
        { question: 'Energiya birligi?', answers: ['Nyuton', 'Vatt', 'Joul', 'Paskal'], correct: 2 }
      ]
    },
    'ona-tili': {
      title: '📖 Ona tili (7-sinf)',
      icon: '📖',
      time: 25,
      questions: [
        { question: 'Gapning ikkinchi darajali bo\'laklari?', answers: ['ega, kesim', 'aniqlovchi, to\'ldiruvchi, hol', 'ot, sifat', 'fe\'l, ravish'], correct: 1 },
        { question: 'Aniqlovchi qanday savolga javob beradi?', answers: ['Kim?', 'Nima?', 'Qanaqa?', 'Qayerda?'], correct: 2 },
        { question: 'To\'ldiruvchi qanday savolga javob beradi?', answers: ['Kimni?', 'Qanaqa?', 'Qayerda?', 'Qachon?'], correct: 0 },
        { question: 'Hol qanday savolga javob beradi?', answers: ['Kim?', 'Nima?', 'Qanaqa?', 'Qayerda?'], correct: 3 },
        { question: 'Sodda gap necha bo\'lakdan iborat?', answers: ['1', '2', '3', '4'], correct: 1 },
        { question: 'Qo\'shma gap necha sodda gapdan tashkil topadi?', answers: ['1', '2 yoki undan ko\'p', '3', '4'], correct: 1 },
        { question: 'Bog\'lovchisiz qo\'shma gap...', answers: ['bog\'lovchi bilan', 'bog\'lovchisiz', 'yordamchi so\'z bilan', 'ko\'makchi bilan'], correct: 1 },
        { question: 'Uyushiq bo\'laklar...', answers: ['bir-biriga bog\'liq', 'bir-biriga bog\'liq emas', 'bir xil savolga javob beradi', 'turli savolga javob beradi'], correct: 2 },
        { question: 'Kirish so\'zlar...', answers: ['gap bo\'lagi', 'gap bo\'lagi emas', 'ega', 'kesim'], correct: 1 },
        { question: 'Undalma...', answers: ['kimga murojaat', 'narsaga murojaat', 'harakatga murojaat', 'belgiga murojaat'], correct: 0 }
      ]
    }
  },
  
  // ========== 8-A SINF TESTLARI ==========
  '8a': {
    'matematika': {
      title: '🔢 Matematika (8-sinf)',
      icon: '🔢',
      time: 35,
      questions: [
        { question: 'x² - 9 = 0 tenglamani yeching', answers: ['±2', '±3', '±4', '±5'], correct: 1 },
        { question: 'x² - 5x + 6 = 0 ildizlari?', answers: ['2 va 3', '1 va 6', '2 va 4', '3 va 4'], correct: 0 },
        { question: 'Kvadrat tenglama diskriminanti?', answers: ['D = b² - 4ac', 'D = b² + 4ac', 'D = 4ac - b²', 'D = b - 4ac'], correct: 0 },
        { question: 'Parabola uchi formulasi?', answers: ['x = -b/2a', 'x = b/2a', 'x = -b/a', 'x = b/a'], correct: 0 },
        { question: 'Funksiya nima?', answers: ['x va y orasidagi bog\'liqlik', 'sonlar', 'tenglamalar', 'tengsizliklar'], correct: 0 },
        { question: 'To\'g\'ri proporsionallik formulasi?', answers: ['y = kx', 'y = k/x', 'y = kx + b', 'y = x²'], correct: 0 },
        { question: 'Teskari proporsionallik?', answers: ['y = kx', 'y = k/x', 'y = kx + b', 'y = x²'], correct: 1 },
        { question: 'Chiziqli funksiya?', answers: ['y = kx + b', 'y = x²', 'y = k/x', 'y = |x|'], correct: 0 },
        { question: 'Arifmetik progressiya formulası?', answers: ['a_n = a₁ + (n-1)d', 'a_n = a₁ × qⁿ⁻¹', 'a_n = a₁ + d', 'a_n = a₁ × n'], correct: 0 },
        { question: 'Geometrik progressiya?', answers: ['a_n = a₁ + (n-1)d', 'a_n = a₁ × qⁿ⁻¹', 'a_n = a₁ + d', 'a_n = a₁ × n'], correct: 1 }
      ]
    },
    'kimyo': {
      title: '🧪 Kimyo (8-sinf)',
      icon: '🧪',
      time: 30,
      questions: [
        { question: 'Kislorodning valentligi?', answers: ['I', 'II', 'III', 'IV'], correct: 1 },
        { question: 'Vodorodning valentligi?', answers: ['I', 'II', 'III', 'IV'], correct: 0 },
        { question: 'Suv formulasi?', answers: ['H₂O', 'CO₂', 'O₂', 'N₂'], correct: 0 },
        { question: 'Natriy xlorid formulasi?', answers: ['NaCl', 'KCl', 'CaCl₂', 'MgCl₂'], correct: 0 },
        { question: 'Kislotalar ta\'mi?', answers: ['shirin', 'achchiq', 'nordon', 'tuzli'], correct: 2 },
        { question: 'Ishqorlar ta\'mi?', answers: ['shirin', 'achchiq', 'nordon', 'tuzli'], correct: 0 },
        { question: 'Lakmus kislotada qanday rang?', answers: ['ko\'k', 'qizil', 'sariq', 'yashil'], correct: 1 },
        { question: 'Fenolftalein ishqorda?', answers: ['rangsiz', 'qizil', 'ko\'k', 'sariq'], correct: 1 },
        { question: 'Metallar elektr tokini...', answers: ['o\'tkazadi', 'o\'tkazmaydi', 'yomon o\'tkazadi', 'faqat qizdirganda'], correct: 0 },
        { question: 'Nometallar...', answers: ['o\'tkazadi', 'o\'tkazmaydi', 'yaxshi o\'tkazadi', 'faqat qizdirganda'], correct: 1 }
      ]
    },
    'fizika': {
      title: '⚛️ Fizika (8-sinf)',
      icon: '⚛️',
      time: 30,
      questions: [
        { question: 'Elektr toki nima?', answers: ['Zaryadlangan zarrachalarning tartibli harakati', 'Elektronlarning xaotik harakati', 'Atomlarning tebranishi', 'Molekulalarning harakati'], correct: 0 },
        { question: 'Tok kuchi qanday harf bilan belgilanadi?', answers: ['U', 'I', 'R', 'P'], correct: 1 },
        { question: 'Kuchlanish formulasi?', answers: ['U = IR', 'I = U/R', 'R = U/I', 'P = UI'], correct: 0 },
        { question: 'Qarshilik birligi?', answers: ['Amper', 'Volt', 'Om', 'Vatt'], correct: 2 },
        { question: 'Om qonuni formulasi?', answers: ['I = U/R', 'U = IR', 'R = U/I', 'P = UI'], correct: 0 },
        { question: 'O\'tkazgichlar ketma-ket ulanganda...', answers: ['I = const', 'U = const', 'R = const', 'P = const'], correct: 0 },
        { question: 'O\'tkazgichlar parallel ulanganda...', answers: ['I = const', 'U = const', 'R = const', 'P = const'], correct: 1 },
        { question: 'Quvvat formulasi?', answers: ['P = UI', 'A = UIt', 'I = U/R', 'U = IR'], correct: 0 },
        { question: 'Ish formulasi?', answers: ['A = UIt', 'P = UI', 'I = U/R', 'U = IR'], correct: 0 },
        { question: 'Joul-Lens qonuni?', answers: ['Q = I²Rt', 'I = U/R', 'P = UI', 'U = IR'], correct: 0 }
      ]
    },
    'ona-tili': {
      title: '📖 Ona tili (8-sinf)',
      icon: '📖',
      time: 25,
      questions: [
        { question: 'Qo\'shma gap necha xil bo\'ladi?', answers: ['2', '3', '4', '5'], correct: 0 },
        { question: 'Bog\'lovchili qo\'shma gap turlari?', answers: ['2', '3', '4', '5'], correct: 1 },
        { question: 'Bog\'lovchisiz qo\'shma gap...', answers: ['tobeli', 'ergashgan', 'uyushiq', 'sodda'], correct: 0 },
        { question: 'Ergashgan gap...', answers: ['bosh gapga bog\'liq', 'mustaqil', 'sodda', 'qo\'shma'], correct: 0 },
        { question: 'Tobelik...', answers: ['bog\'lanish turi', 'gap turi', 'so\'z turkumi', 'qo\'shimcha'], correct: 0 },
        { question: 'Egalik qo\'shimchalari nechta?', answers: ['4', '5', '6', '7'], correct: 2 },
        { question: 'Kelishik qo\'shimchalari nechta?', answers: ['4', '5', '6', '7'], correct: 2 },
        { question: 'Qaratqich kelishigi qaysi?', answers: ['-ning', '-ni', '-ga', '-da'], correct: 0 },
        { question: 'Tushum kelishigi qaysi?', answers: ['-ning', '-ni', '-ga', '-da'], correct: 1 },
        { question: 'Jo\'nalish kelishigi qaysi?', answers: ['-ning', '-ni', '-ga', '-da'], correct: 2 }
      ]
    }
  },
  
  // ========== 8-B SINF TESTLARI ==========
  '8b': {
    'matematika': {
      title: '🔢 Matematika (8-sinf)',
      icon: '🔢',
      time: 35,
      questions: [
        { question: 'x² - 9 = 0 tenglamani yeching', answers: ['±2', '±3', '±4', '±5'], correct: 1 },
        { question: 'x² - 5x + 6 = 0 ildizlari?', answers: ['2 va 3', '1 va 6', '2 va 4', '3 va 4'], correct: 0 },
        { question: 'Kvadrat tenglama diskriminanti?', answers: ['D = b² - 4ac', 'D = b² + 4ac', 'D = 4ac - b²', 'D = b - 4ac'], correct: 0 },
        { question: 'Parabola uchi formulasi?', answers: ['x = -b/2a', 'x = b/2a', 'x = -b/a', 'x = b/a'], correct: 0 },
        { question: 'Funksiya nima?', answers: ['x va y orasidagi bog\'liqlik', 'sonlar', 'tenglamalar', 'tengsizliklar'], correct: 0 },
        { question: 'To\'g\'ri proporsionallik formulasi?', answers: ['y = kx', 'y = k/x', 'y = kx + b', 'y = x²'], correct: 0 },
        { question: 'Teskari proporsionallik?', answers: ['y = kx', 'y = k/x', 'y = kx + b', 'y = x²'], correct: 1 },
        { question: 'Chiziqli funksiya?', answers: ['y = kx + b', 'y = x²', 'y = k/x', 'y = |x|'], correct: 0 },
        { question: 'Arifmetik progressiya formulası?', answers: ['a_n = a₁ + (n-1)d', 'a_n = a₁ × qⁿ⁻¹', 'a_n = a₁ + d', 'a_n = a₁ × n'], correct: 0 },
        { question: 'Geometrik progressiya?', answers: ['a_n = a₁ + (n-1)d', 'a_n = a₁ × qⁿ⁻¹', 'a_n = a₁ + d', 'a_n = a₁ × n'], correct: 1 }
      ]
    },
    'kimyo': {
      title: '🧪 Kimyo (8-sinf)',
      icon: '🧪',
      time: 30,
      questions: [
        { question: 'Kislorodning valentligi?', answers: ['I', 'II', 'III', 'IV'], correct: 1 },
        { question: 'Vodorodning valentligi?', answers: ['I', 'II', 'III', 'IV'], correct: 0 },
        { question: 'Suv formulasi?', answers: ['H₂O', 'CO₂', 'O₂', 'N₂'], correct: 0 },
        { question: 'Natriy xlorid formulasi?', answers: ['NaCl', 'KCl', 'CaCl₂', 'MgCl₂'], correct: 0 },
        { question: 'Kislotalar ta\'mi?', answers: ['shirin', 'achchiq', 'nordon', 'tuzli'], correct: 2 },
        { question: 'Ishqorlar ta\'mi?', answers: ['shirin', 'achchiq', 'nordon', 'tuzli'], correct: 0 },
        { question: 'Lakmus kislotada qanday rang?', answers: ['ko\'k', 'qizil', 'sariq', 'yashil'], correct: 1 },
        { question: 'Fenolftalein ishqorda?', answers: ['rangsiz', 'qizil', 'ko\'k', 'sariq'], correct: 1 },
        { question: 'Metallar elektr tokini...', answers: ['o\'tkazadi', 'o\'tkazmaydi', 'yomon o\'tkazadi', 'faqat qizdirganda'], correct: 0 },
        { question: 'Nometallar...', answers: ['o\'tkazadi', 'o\'tkazmaydi', 'yaxshi o\'tkazadi', 'faqat qizdirganda'], correct: 1 }
      ]
    },
    'fizika': {
      title: '⚛️ Fizika (8-sinf)',
      icon: '⚛️',
      time: 30,
      questions: [
        { question: 'Elektr toki nima?', answers: ['Zaryadlangan zarrachalarning tartibli harakati', 'Elektronlarning xaotik harakati', 'Atomlarning tebranishi', 'Molekulalarning harakati'], correct: 0 },
        { question: 'Tok kuchi qanday harf bilan belgilanadi?', answers: ['U', 'I', 'R', 'P'], correct: 1 },
        { question: 'Kuchlanish formulasi?', answers: ['U = IR', 'I = U/R', 'R = U/I', 'P = UI'], correct: 0 },
        { question: 'Qarshilik birligi?', answers: ['Amper', 'Volt', 'Om', 'Vatt'], correct: 2 },
        { question: 'Om qonuni formulasi?', answers: ['I = U/R', 'U = IR', 'R = U/I', 'P = UI'], correct: 0 },
        { question: 'O\'tkazgichlar ketma-ket ulanganda...', answers: ['I = const', 'U = const', 'R = const', 'P = const'], correct: 0 },
        { question: 'O\'tkazgichlar parallel ulanganda...', answers: ['I = const', 'U = const', 'R = const', 'P = const'], correct: 1 },
        { question: 'Quvvat formulasi?', answers: ['P = UI', 'A = UIt', 'I = U/R', 'U = IR'], correct: 0 },
        { question: 'Ish formulasi?', answers: ['A = UIt', 'P = UI', 'I = U/R', 'U = IR'], correct: 0 },
        { question: 'Joul-Lens qonuni?', answers: ['Q = I²Rt', 'I = U/R', 'P = UI', 'U = IR'], correct: 0 }
      ]
    },
    'ona-tili': {
      title: '📖 Ona tili (8-sinf)',
      icon: '📖',
      time: 25,
      questions: [
        { question: 'Qo\'shma gap necha xil bo\'ladi?', answers: ['2', '3', '4', '5'], correct: 0 },
        { question: 'Bog\'lovchili qo\'shma gap turlari?', answers: ['2', '3', '4', '5'], correct: 1 },
        { question: 'Bog\'lovchisiz qo\'shma gap...', answers: ['tobeli', 'ergashgan', 'uyushiq', 'sodda'], correct: 0 },
        { question: 'Ergashgan gap...', answers: ['bosh gapga bog\'liq', 'mustaqil', 'sodda', 'qo\'shma'], correct: 0 },
        { question: 'Tobelik...', answers: ['bog\'lanish turi', 'gap turi', 'so\'z turkumi', 'qo\'shimcha'], correct: 0 },
        { question: 'Egalik qo\'shimchalari nechta?', answers: ['4', '5', '6', '7'], correct: 2 },
        { question: 'Kelishik qo\'shimchalari nechta?', answers: ['4', '5', '6', '7'], correct: 2 },
        { question: 'Qaratqich kelishigi qaysi?', answers: ['-ning', '-ni', '-ga', '-da'], correct: 0 },
        { question: 'Tushum kelishigi qaysi?', answers: ['-ning', '-ni', '-ga', '-da'], correct: 1 },
        { question: 'Jo\'nalish kelishigi qaysi?', answers: ['-ning', '-ni', '-ga', '-da'], correct: 2 }
      ]
    }
  },
  
  // ========== 9-A SINF TESTLARI ==========
  '9a': {
    'matematika': {
      title: '🔢 Matematika (9-sinf)',
      icon: '🔢',
      time: 40,
      questions: [
        { question: 'sin 30° = ?', answers: ['0', '1/2', '√2/2', '√3/2'], correct: 1 },
        { question: 'cos 60° = ?', answers: ['0', '1/2', '√2/2', '√3/2'], correct: 1 },
        { question: 'tg 45° = ?', answers: ['0', '1', '√3', '1/√3'], correct: 1 },
        { question: 'sin²α + cos²α = ?', answers: ['0', '1', '2', '-1'], correct: 1 },
        { question: 'Vektor uzunligi formulasi?', answers: ['√(x²+y²)', 'x²+y²', 'x+y', '√(x+y)'], correct: 0 },
        { question: 'Ikki vektor skalyar ko\'paytmasi?', answers: ['x₁x₂ + y₁y₂', 'x₁y₂ - x₂y₁', 'x₁/x₂', 'y₁/y₂'], correct: 0 },
        { question: 'Aylana uzunligi?', answers: ['2πR', 'πR²', 'πD', '2πD'], correct: 0 },
        { question: 'Doira yuzi?', answers: ['2πR', 'πR²', 'πD', '2πD'], correct: 1 },
        { question: 'Arifmetik progressiya yig\'indisi?', answers: ['S = (a₁+a_n)n/2', 'S = a₁ × n', 'S = a₁ + d', 'S = a₁ × qⁿ'], correct: 0 },
        { question: 'Geometrik progressiya yig\'indisi?', answers: ['S = a₁(1-qⁿ)/(1-q)', 'S = a₁ × n', 'S = a₁ + d', 'S = a₁ × qⁿ'], correct: 0 }
      ]
    },
    'fizika': {
      title: '⚛️ Fizika (9-sinf)',
      icon: '⚛️',
      time: 35,
      questions: [
        { question: 'Nyutonning 1-qonuni?', answers: ['F = ma', 'Inersiya qonuni', 'Ta\'sir va aks ta\'sir', 'Energiya saqlanish'], correct: 1 },
        { question: 'Nyutonning 2-qonuni?', answers: ['F = ma', 'Inersiya', 'Ta\'sir va aks ta\'sir', 'Energiya saqlanish'], correct: 0 },
        { question: 'Nyutonning 3-qonuni?', answers: ['F = ma', 'Inersiya', 'Ta\'sir va aks ta\'sir', 'Energiya saqlanish'], correct: 2 },
        { question: 'Impuls formulasi?', answers: ['p = mv', 'p = ma', 'p = Ft', 'p = mgh'], correct: 0 },
        { question: 'Energiya saqlanish qonuni?', answers: ['E = mc²', 'E₁ = E₂', 'F = ma', 'W = Fs'], correct: 1 },
        { question: 'Potensial energiya formulasi?', answers: ['E_p = mgh', 'E_k = mv²/2', 'E = mc²', 'W = Fs'], correct: 0 },
        { question: 'Kinetik energiya?', answers: ['E_p = mgh', 'E_k = mv²/2', 'E = mc²', 'W = Fs'], correct: 1 },
        { question: 'Quvvat formulasi?', answers: ['N = A/t', 'A = Fs', 'E = mc²', 'p = mv'], correct: 0 },
        { question: 'Tok kuchi formulasi?', answers: ['I = q/t', 'U = IR', 'R = U/I', 'P = UI'], correct: 0 },
        { question: 'Om qonuni?', answers: ['I = U/R', 'U = IR', 'R = U/I', 'P = UI'], correct: 0 }
      ]
    },
    'kimyo': {
      title: '🧪 Kimyo (9-sinf)',
      icon: '🧪',
      time: 30,
      questions: [
        { question: 'Mendeleyev jadvalida nechta element bor?', answers: ['98', '108', '118', '128'], correct: 2 },
        { question: 'D.I.Mendeleyev qanday qonunni kashf etgan?', answers: ['Davriy qonun', 'Saqlanish qonuni', 'Tortishish qonuni', 'Arximed qonuni'], correct: 0 },
        { question: 'Atomdagi protonlar soni...', answers: ['tartib raqamiga teng', 'neytronlar soniga teng', 'elektronlar soniga teng', 'A va C'], correct: 3 },
        { question: 'Izotoplar...', answers: ['protonlari har xil', 'neytronlari har xil', 'elektronlari har xil', 'hammasi har xil'], correct: 1 },
        { question: 'Kimyoviy bog\'lanish turlari?', answers: ['2', '3', '4', '5'], correct: 2 },
        { question: 'Kovalent bog\'lanish...', answers: ['elektron almashinadi', 'elektron beriladi', 'elektron olinadi', 'ionlar hosil bo\'ladi'], correct: 0 },
        { question: 'Ion bog\'lanish...', answers: ['elektron almashinadi', 'elektron beriladi va olinadi', 'umumiy elektron', 'vodorod bog\'i'], correct: 1 },
        { question: 'Oksidlanish darajasi nima?', answers: ['shartli zaryad', 'haqiqiy zaryad', 'atom massasi', 'valentlik'], correct: 0 },
        { question: 'Kislotali oksidlar...', answers: ['metallar bilan', 'nometallar bilan', 'asoslar bilan', 'tuzlar bilan'], correct: 1 },
        { question: 'Asosli oksidlar...', answers: ['metallar bilan', 'nometallar bilan', 'asoslar bilan', 'tuzlar bilan'], correct: 0 }
      ]
    }
  },
  
  // ========== 9-B SINF TESTLARI ==========
  '9b': {
    'matematika': {
      title: '🔢 Matematika (9-sinf)',
      icon: '🔢',
      time: 40,
      questions: [
        { question: 'sin 30° = ?', answers: ['0', '1/2', '√2/2', '√3/2'], correct: 1 },
        { question: 'cos 60° = ?', answers: ['0', '1/2', '√2/2', '√3/2'], correct: 1 },
        { question: 'tg 45° = ?', answers: ['0', '1', '√3', '1/√3'], correct: 1 },
        { question: 'sin²α + cos²α = ?', answers: ['0', '1', '2', '-1'], correct: 1 },
        { question: 'Vektor uzunligi formulasi?', answers: ['√(x²+y²)', 'x²+y²', 'x+y', '√(x+y)'], correct: 0 },
        { question: 'Ikki vektor skalyar ko\'paytmasi?', answers: ['x₁x₂ + y₁y₂', 'x₁y₂ - x₂y₁', 'x₁/x₂', 'y₁/y₂'], correct: 0 },
        { question: 'Aylana uzunligi?', answers: ['2πR', 'πR²', 'πD', '2πD'], correct: 0 },
        { question: 'Doira yuzi?', answers: ['2πR', 'πR²', 'πD', '2πD'], correct: 1 },
        { question: 'Arifmetik progressiya yig\'indisi?', answers: ['S = (a₁+a_n)n/2', 'S = a₁ × n', 'S = a₁ + d', 'S = a₁ × qⁿ'], correct: 0 },
        { question: 'Geometrik progressiya yig\'indisi?', answers: ['S = a₁(1-qⁿ)/(1-q)', 'S = a₁ × n', 'S = a₁ + d', 'S = a₁ × qⁿ'], correct: 0 }
      ]
    },
    'fizika': {
      title: '⚛️ Fizika (9-sinf)',
      icon: '⚛️',
      time: 35,
      questions: [
        { question: 'Nyutonning 1-qonuni?', answers: ['F = ma', 'Inersiya qonuni', 'Ta\'sir va aks ta\'sir', 'Energiya saqlanish'], correct: 1 },
        { question: 'Nyutonning 2-qonuni?', answers: ['F = ma', 'Inersiya', 'Ta\'sir va aks ta\'sir', 'Energiya saqlanish'], correct: 0 },
        { question: 'Nyutonning 3-qonuni?', answers: ['F = ma', 'Inersiya', 'Ta\'sir va aks ta\'sir', 'Energiya saqlanish'], correct: 2 },
        { question: 'Impuls formulasi?', answers: ['p = mv', 'p = ma', 'p = Ft', 'p = mgh'], correct: 0 },
        { question: 'Energiya saqlanish qonuni?', answers: ['E = mc²', 'E₁ = E₂', 'F = ma', 'W = Fs'], correct: 1 },
        { question: 'Potensial energiya formulasi?', answers: ['E_p = mgh', 'E_k = mv²/2', 'E = mc²', 'W = Fs'], correct: 0 },
        { question: 'Kinetik energiya?', answers: ['E_p = mgh', 'E_k = mv²/2', 'E = mc²', 'W = Fs'], correct: 1 },
        { question: 'Quvvat formulasi?', answers: ['N = A/t', 'A = Fs', 'E = mc²', 'p = mv'], correct: 0 },
        { question: 'Tok kuchi formulasi?', answers: ['I = q/t', 'U = IR', 'R = U/I', 'P = UI'], correct: 0 },
        { question: 'Om qonuni?', answers: ['I = U/R', 'U = IR', 'R = U/I', 'P = UI'], correct: 0 }
      ]
    },
    'kimyo': {
      title: '🧪 Kimyo (9-sinf)',
      icon: '🧪',
      time: 30,
      questions: [
        { question: 'Mendeleyev jadvalida nechta element bor?', answers: ['98', '108', '118', '128'], correct: 2 },
        { question: 'D.I.Mendeleyev qanday qonunni kashf etgan?', answers: ['Davriy qonun', 'Saqlanish qonuni', 'Tortishish qonuni', 'Arximed qonuni'], correct: 0 },
        { question: 'Atomdagi protonlar soni...', answers: ['tartib raqamiga teng', 'neytronlar soniga teng', 'elektronlar soniga teng', 'A va C'], correct: 3 },
        { question: 'Izotoplar...', answers: ['protonlari har xil', 'neytronlari har xil', 'elektronlari har xil', 'hammasi har xil'], correct: 1 },
        { question: 'Kimyoviy bog\'lanish turlari?', answers: ['2', '3', '4', '5'], correct: 2 },
        { question: 'Kovalent bog\'lanish...', answers: ['elektron almashinadi', 'elektron beriladi', 'elektron olinadi', 'ionlar hosil bo\'ladi'], correct: 0 },
        { question: 'Ion bog\'lanish...', answers: ['elektron almashinadi', 'elektron beriladi va olinadi', 'umumiy elektron', 'vodorod bog\'i'], correct: 1 },
        { question: 'Oksidlanish darajasi nima?', answers: ['shartli zaryad', 'haqiqiy zaryad', 'atom massasi', 'valentlik'], correct: 0 },
        { question: 'Kislotali oksidlar...', answers: ['metallar bilan', 'nometallar bilan', 'asoslar bilan', 'tuzlar bilan'], correct: 1 },
        { question: 'Asosli oksidlar...', answers: ['metallar bilan', 'nometallar bilan', 'asoslar bilan', 'tuzlar bilan'], correct: 0 }
      ]
    }
  },
  
  // ========== 10-A SINF TESTLARI ==========
  '10a': {
    'matematika': {
      title: '🔢 Matematika (10-sinf)',
      icon: '🔢',
      time: 45,
      questions: [
        { question: 'lim (x→0) sin x / x = ?', answers: ['0', '1', '∞', 'bilan'], correct: 1 },
        { question: 'Hosila nima?', answers: ['o\'zgarish tezligi', 'funksiya', 'limit', 'integral'], correct: 0 },
        { question: '(xⁿ)\' = ?', answers: ['nxⁿ⁻¹', 'xⁿ⁻¹', 'n/xⁿ⁻¹', 'xⁿ'], correct: 0 },
        { question: '(sin x)\' = ?', answers: ['cos x', '-cos x', 'sin x', '-sin x'], correct: 0 },
        { question: '(cos x)\' = ?', answers: ['cos x', '-cos x', 'sin x', '-sin x'], correct: 3 },
        { question: 'e^x ning hosilasi?', answers: ['e^x', 'xe^x⁻¹', 'ln x', '1/x'], correct: 0 },
        { question: 'ln x ning hosilasi?', answers: ['e^x', '1/x', 'x', 'ln x'], correct: 1 },
        { question: 'Funksiyaning ekstremum nuqtalari?', answers: ['hosila nolga teng', 'hosila mavjud emas', 'A va B', 'limit'], correct: 0 },
        { question: 'Integral nima?', answers: ['yig\'indi', 'hosilaga teskari', 'limit', 'funksiya'], correct: 1 },
        { question: '∫ xⁿ dx = ?', answers: ['xⁿ⁺¹/(n+1)+C', 'nxⁿ⁻¹', 'xⁿ+ C', 'nxⁿ⁺¹'], correct: 0 }
      ]
    },
    'fizika': {
      title: '⚛️ Fizika (10-sinf)',
      icon: '⚛️',
      time: 40,
      questions: [
        { question: 'Elektr maydon kuchlanganligi formulasi?', answers: ['E = F/q', 'E = kq/r²', 'E = U/d', 'Hammasi to\'g\'ri'], correct: 3 },
        { question: 'Kondensator sig\'imi formulasi?', answers: ['C = q/U', 'C = ε₀S/d', 'C = ε₀εS/d', 'Hammasi to\'g\'ri'], correct: 3 },
        { question: 'Magnit maydon induksiyasi birligi?', answers: ['Tesla', 'Veb', 'Gauss', 'Amper'], correct: 0 },
        { question: 'Elektromagnit induksiya qonuni kim tomonidan kashf etilgan?', answers: ['Faradey', 'Maksvell', 'Nyuton', 'Om'], correct: 0 },
        { question: 'O\'zgaruvchan tok chastotasi O\'zbekistonda?', answers: ['50 Hz', '60 Hz', '100 Hz', '220 Hz'], correct: 0 },
        { question: 'Transformator nima?', answers: ['kuchlanishni o\'zgartiradi', 'tokni o\'zgartiradi', 'quvvatni o\'zgartiradi', 'qarshilikni o\'zgartiradi'], correct: 0 },
        { question: 'Yorug\'lik dispersiyasi nima?', answers: ['ranglarga ajralishi', 'sinishi', 'qaytishi', 'yutilishi'], correct: 0 },
        { question: 'Linzaning optik kuchi birligi?', answers: ['Dioptriya', 'Metr', 'Santimetr', 'Vatt'], correct: 0 },
        { question: 'Yorug\'lik tezligi vakuumda?', answers: ['3·10⁸ m/s', '3·10⁵ m/s', '3·10⁶ m/s', '3·10⁷ m/s'], correct: 0 },
        { question: 'Foton energiyasi formulasi?', answers: ['E = hν', 'E = mc²', 'E = mv²/2', 'E = mgh'], correct: 0 }
      ]
    },
    'kimyo': {
      title: '🧪 Kimyo (10-sinf)',
      icon: '🧪',
      time: 35,
      questions: [
        { question: 'Organik birikmalar tarkibida qaysi element bo\'ladi?', answers: ['Uglerod', 'Kislorod', 'Vodorod', 'Azot'], correct: 0 },
        { question: 'Alkanlarning umumiy formulasi?', answers: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₊₁'], correct: 0 },
        { question: 'Alkenlarning umumiy formulasi?', answers: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₊₁'], correct: 1 },
        { question: 'Alkinlarning umumiy formulasi?', answers: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₊₁'], correct: 2 },
        { question: 'Benzol formulasi?', answers: ['C₆H₆', 'C₆H₁₂', 'C₆H₁₄', 'C₆H₁₀'], correct: 0 },
        { question: 'Spirtlarning funksional guruhi?', answers: ['-OH', '-COOH', '-CHO', '-NH₂'], correct: 0 },
        { question: 'Aldegidlarning funksional guruhi?', answers: ['-OH', '-COOH', '-CHO', '-NH₂'], correct: 2 },
        { question: 'Karbon kislotalarning funksional guruhi?', answers: ['-OH', '-COOH', '-CHO', '-NH₂'], correct: 1 },
        { question: 'Polimerlanish reaksiyasi nima?', answers: ['molekulalarning birikishi', 'molekulalarning parchalanishi', 'atomlarning almashinishi', 'ionlarning hosil bo\'lishi'], correct: 0 },
        { question: 'Esterlanish reaksiyasi natijasida nima hosil bo\'ladi?', answers: ['Efir', 'Spirt', 'Kislota', 'Aldegid'], correct: 0 }
      ]
    },
    'biologiya': {
      title: '🧬 Biologiya (10-sinf)',
      icon: '🧬',
      time: 35,
      questions: [
        { question: 'Hujayraning energiya ishlab chiqaruvchi organoidi?', answers: ['Mitoxondriya', 'Yadro', 'Ribosoma', 'Golji'], correct: 0 },
        { question: 'Fotosintez jarayoni qayerda sodir bo\'ladi?', answers: ['Xloroplast', 'Mitoxondriya', 'Yadro', 'Vakuola'], correct: 0 },
        { question: 'DNK tarkibida qanday qandlar bor?', answers: ['Dezoksiriboza', 'Riboza', 'Glyukoza', 'Fruktoza'], correct: 0 },
        { question: 'RNK tarkibida qanday qandlar bor?', answers: ['Dezoksiriboza', 'Riboza', 'Glyukoza', 'Fruktoza'], correct: 1 },
        { question: 'Genetika qonunlarini kim kashf etgan?', answers: ['Mendel', 'Darvin', 'Lamark', 'Pavlov'], correct: 0 },
        { question: 'Odamda nechta xromosoma bor?', answers: ['46', '48', '44', '42'], correct: 0 },
        { question: 'Ayol jinsiy xromosomalari?', answers: ['XX', 'XY', 'YY', 'XO'], correct: 0 },
        { question: 'Erkak jinsiy xromosomalari?', answers: ['XX', 'XY', 'YY', 'XO'], correct: 1 },
        { question: 'Oqsillar qanday monomerlardan tashkil topgan?', answers: ['Aminokislotalar', 'Nukleotidlar', 'Glyukoza', 'Yog\' kislotalari'], correct: 0 },
        { question: 'Vitaminlar qanday vazifani bajaradi?', answers: ['Moddalar almashinuvini tartibga soladi', 'Energiya beradi', 'Qurilish materiali', 'Himoya vazifasi'], correct: 0 }
      ]
    }
  },
  
  // ========== KOMBINATSION TEST (Barcha sinflar uchun) ==========
  'katta-test': {
    title: '🎯 Kombinatsion test',
    icon: '🎯',
    time: 60,
    questions: [
      { question: '5 + 7 = ?', answers: ['10', '11', '12', '13'], correct: 2 },
      { question: 'O\'zbek alifbosida nechta harf?', answers: ['28', '29', '30', '31'], correct: 1 },
      { question: '"Hello" meaning?', answers: ['Xayr', 'Salom', 'Rahmat', 'Kechirasiz'], correct: 1 },
      { question: 'Yorug\'lik tezligi?', answers: ['300 000 km/s', '150 000 km/s', '500 000 km/s', '1 000 000 km/s'], correct: 0 },
      { question: 'Suv formulasi?', answers: ['H₂O', 'CO₂', 'O₂', 'N₂'], correct: 0 },
      { question: 'Inson tanasida nechta suyak?', answers: ['106', '206', '306', '406'], correct: 1 },
      { question: '√144 = ?', answers: ['10', '11', '12', '13'], correct: 2 },
      { question: '"Kitob" so\'zida nechta harf?', answers: ['4', '5', '6', '7'], correct: 1 },
      { question: 'I ___ a student.', answers: ['am', 'is', 'are', 'be'], correct: 0 },
      { question: 'Kuch birligi?', answers: ['Nyuton', 'Joul', 'Vatt', 'Paskal'], correct: 0 },
      { question: 'Kislorodning belgisi?', answers: ['O', 'K', 'H', 'N'], correct: 0 },
      { question: 'Yurak qaysi sistemaga kiradi?', answers: ['Nerv', 'Qon aylanish', 'Nafas olish', 'Hazm qilish'], correct: 1 },
      { question: '3x + 5 = 20, x = ?', answers: ['3', '4', '5', '6'], correct: 2 },
      { question: 'Gap oxiriga qanday belgi qo\'yiladi?', answers: ['!', '?', '.', ','], correct: 2 },
      { question: 'What is "cat"?', answers: ['It', 'Mushuk', 'Sigir', 'Ot'], correct: 1 },
      { question: 'Suvning qaynash harorati?', answers: ['0°C', '50°C', '100°C', '200°C'], correct: 2 },
      { question: 'Natriy xlorid formulasi?', answers: ['NaCl', 'KCl', 'CaCl₂', 'MgCl₂'], correct: 0 },
      { question: 'Qonning rangini nima beradi?', answers: ['Gemoglobin', 'Plazma', 'Trombotsit', 'Leykotsit'], correct: 0 }
    ]
  }
};

// Test tizimi o'zgaruvchilari
let currentClass = '5';
let currentSubject = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let timer = null;
let timeLeft = 0;
let startTime = null;

// Sahifa yuklanganda
document.addEventListener('DOMContentLoaded', function() {
  loadSubjects('5');
});

// Sinf tanlash
function selectTestClass(classNum) {
  currentClass = classNum;
  
  // Tugmalarni yangilash
  document.querySelectorAll('.class-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const activeBtn = document.querySelector(`.class-btn[data-class="${classNum}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  // Fanlarni yuklash
  loadSubjects(classNum);
}

// Fanlarni yuklash (sinfga mos)
function loadSubjects(classNum) {
  const subjectsGrid = document.getElementById('subjects-grid');
  
  // Berilgan sinf uchun testlar mavjudligini tekshirish
  const classTests = testData[classNum] || {};
  
  let html = '';
  
  // Fanlar ro'yxati (faqat mavjud fanlar)
  const availableSubjects = [];
  
  if (classTests['matematika']) {
    availableSubjects.push({ 
      id: 'matematika', 
      name: 'Matematika', 
      icon: '🔢', 
      questions: classTests['matematika'].questions.length,
      time: classTests['matematika'].time,
      desc: `${getClassName(classNum)} uchun matematika testlari`
    });
  }
  
  if (classTests['ona-tili']) {
    availableSubjects.push({ 
      id: 'ona-tili', 
      name: 'Ona tili', 
      icon: '📖', 
      questions: classTests['ona-tili'].questions.length,
      time: classTests['ona-tili'].time,
      desc: `${getClassName(classNum)} uchun ona tili testlari`
    });
  }
  
  if (classTests['ingliz-tili']) {
    availableSubjects.push({ 
      id: 'ingliz-tili', 
      name: 'Ingliz tili', 
      icon: '🌍', 
      questions: classTests['ingliz-tili'].questions.length,
      time: classTests['ingliz-tili'].time,
      desc: `${getClassName(classNum)} uchun ingliz tili testlari`
    });
  }
  
  if (classTests['fizika']) {
    availableSubjects.push({ 
      id: 'fizika', 
      name: 'Fizika', 
      icon: '⚛️', 
      questions: classTests['fizika'].questions.length,
      time: classTests['fizika'].time,
      desc: `${getClassName(classNum)} uchun fizika testlari`
    });
  }
  
  if (classTests['kimyo']) {
    availableSubjects.push({ 
      id: 'kimyo', 
      name: 'Kimyo', 
      icon: '🧪', 
      questions: classTests['kimyo'].questions.length,
      time: classTests['kimyo'].time,
      desc: `${getClassName(classNum)} uchun kimyo testlari`
    });
  }
  
  if (classTests['biologiya']) {
    availableSubjects.push({ 
      id: 'biologiya', 
      name: 'Biologiya', 
      icon: '🧬', 
      questions: classTests['biologiya'].questions.length,
      time: classTests['biologiya'].time,
      desc: `${getClassName(classNum)} uchun biologiya testlari`
    });
  }
  
  // Kombinatsion test (har doim qo'shiladi)
  const kattaTest = testData['katta-test'];
  if (kattaTest) {
    availableSubjects.push({ 
      id: 'katta-test', 
      name: '🎯 Kombinatsion test', 
      icon: '🎯', 
      questions: kattaTest.questions.length,
      time: kattaTest.time,
      desc: `Barcha fanlardan ${kattaTest.questions.length} ta savol`,
      large: true
    });
  }
  
  // Agar hech qanday fan bo'lmasa
  if (availableSubjects.length === 0) {
    subjectsGrid.innerHTML = `
      <div style="text-align: center; padding: 50px;">
        <h3>📚 Bu sinf uchun testlar hozircha tayyorlanmoqda</h3>
        <p>Tez orada qo'shiladi!</p>
      </div>
    `;
    return;
  }
  
  // Fan kartochkalarini yaratish
  availableSubjects.forEach(subject => {
    html += `
      <div class="subject-card ${subject.large ? 'large-test' : ''}" onclick="selectSubject('${subject.id}')">
        <div class="subject-icon">${subject.icon}</div>
        <h3>${subject.name}</h3>
        <p>${subject.desc}</p>
        <div class="subject-info">
          <span class="questions">${subject.questions} ta savol</span>
          <span class="time">⏱️ ${subject.time} daqiqa</span>
        </div>
      </div>
    `;
  });
  
  subjectsGrid.innerHTML = html;
}

// Sinf nomini olish
function getClassName(classNum) {
  const classNames = {
    '5': '5-sinf',
    '6a': '6-A sinf',
    '6b': '6-B sinf',
    '7a': '7-A sinf',
    '7b': '7-B sinf',
    '8a': '8-A sinf',
    '8b': '8-B sinf',
    '9a': '9-A sinf',
    '9b': '9-B sinf',
    '10a': '10-A sinf'
  };
  return classNames[classNum] || classNum + '-sinf';
}

// Fanni tanlash
function selectSubject(subjectId) {
  currentSubject = subjectId;
  
  // Test selectionni yashirish, formani ko'rsatish
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
function submitStudentInfo(event) {
  event.preventDefault();
  
  const name = document.getElementById('student-name').value;
  const surname = document.getElementById('student-surname').value;
  
  if (!name || !surname) {
    alert('Iltimos, barcha maydonlarni to\'ldiring!');
    return;
  }
  
  // Testni boshlash
  startTest();
}

// Testni boshlash (sinf va fanga mos)
function startTest() {
  // Test ma'lumotlarini olish
  let test;
  if (currentSubject === 'katta-test') {
    test = testData['katta-test'];
  } else {
    test = testData[currentClass]?.[currentSubject];
  }
  
  if (!test) {
    alert('Test topilmadi!');
    return;
  }
  
  // O'zgaruvchilarni sozlash
  currentQuestionIndex = 0;
  userAnswers = new Array(test.questions.length).fill(undefined);
  timeLeft = test.time * 60;
  startTime = Date.now();
  
  // Test nomini o'rnatish
  document.getElementById('test-title').innerHTML = `${test.icon} ${test.title}`;
  
  // Taymerni boshlash
  startTimer();
  
  // Birinchi savolni ko'rsatish
  showQuestion();
  
  // Formani yashirish, testni ko'rsatish
  document.getElementById('student-info-form').style.display = 'none';
  document.getElementById('test-container').style.display = 'block';
}

// Taymer
function startTimer() {
  const timerElement = document.getElementById('timer');
  
  if (timer) clearInterval(timer);
  
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      finishTest();
      return;
    }
    
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerHTML = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    timeLeft--;
  }, 1000);
}

// Savolni ko'rsatish
function showQuestion() {
  let test;
  if (currentSubject === 'katta-test') {
    test = testData['katta-test'];
  } else {
    test = testData[currentClass]?.[currentSubject];
  }
  
  if (!test) return;
  
  const question = test.questions[currentQuestionIndex];
  const container = document.getElementById('question-container');
  
  let answersHtml = '';
  question.answers.forEach((answer, index) => {
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
      <div class="question-number">Savol ${currentQuestionIndex + 1} / ${test.questions.length}</div>
      <div class="question-text">${question.question}</div>
      <div class="answers-grid">
        ${answersHtml}
      </div>
    </div>
  `;
  
  // Progress barni yangilash
  updateProgress();
  
  // Navigatsiya tugmalarini yangilash
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
  let test;
  if (currentSubject === 'katta-test') {
    test = testData['katta-test'];
  } else {
    test = testData[currentClass]?.[currentSubject];
  }
  
  if (!test) return;
  
  const progress = ((currentQuestionIndex + 1) / test.questions.length) * 100;
  
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  
  if (progressFill) progressFill.style.width = `${progress}%`;
  if (progressText) progressText.innerHTML = `${currentQuestionIndex + 1}/${test.questions.length}`;
}

// Navigatsiyani yangilash
function updateNavigation() {
  let test;
  if (currentSubject === 'katta-test') {
    test = testData['katta-test'];
  } else {
    test = testData[currentClass]?.[currentSubject];
  }
  
  if (!test) return;
  
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const finishBtn = document.getElementById('finish-btn');
  
  if (prevBtn) prevBtn.disabled = currentQuestionIndex === 0;
  
  if (currentQuestionIndex === test.questions.length - 1) {
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
  let test;
  if (currentSubject === 'katta-test') {
    test = testData['katta-test'];
  } else {
    test = testData[currentClass]?.[currentSubject];
  }
  
  if (test && currentQuestionIndex < test.questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
}

// Testni tugatish
function finishTest() {
  if (timer) clearInterval(timer);
  
  let test;
  if (currentSubject === 'katta-test') {
    test = testData['katta-test'];
  } else {
    test = testData[currentClass]?.[currentSubject];
  }
  
  if (!test) return;
  
  let correctCount = 0;
  
  // Javoblarni tekshirish
  test.questions.forEach((question, index) => {
    if (userAnswers[index] === question.correct) {
      correctCount++;
    }
  });
  
  const total = test.questions.length;
  const percentage = Math.round((correctCount / total) * 100);
  const timeTaken = Math.floor((Date.now() - startTime) / 1000);
  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;
  const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
  // Natijalarni ko'rsatish
  showResults(correctCount, total, percentage, timeString);
}

// Natijalarni ko'rsatish
function showResults(correct, total, percentage, timeString) {
  // Asosiy ma'lumotlar
  const scorePercentage = document.getElementById('score-percentage');
  const correctCount = document.getElementById('correct-count');
  const totalCount = document.getElementById('total-count');
  const timeTaken = document.getElementById('time-taken');
  const scorePoints = document.getElementById('score-points');
  
  if (scorePercentage) scorePercentage.innerHTML = `${percentage}%`;
  if (correctCount) correctCount.innerHTML = correct;
  if (totalCount) totalCount.innerHTML = total;
  if (timeTaken) timeTaken.innerHTML = timeString;
  if (scorePoints) scorePoints.innerHTML = correct * 10;
  
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
function restartTest() {
  const resultsContainer = document.getElementById('results-container');
  if (resultsContainer) resultsContainer.style.display = 'none';
  startTest();
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
  currentQuestionIndex = 0;
  userAnswers = [];
}

// Chiqish
function exitTest() {
  if (confirm('Testni tark etishga ishonchingiz komilmi?')) {
    if (timer) clearInterval(timer);
    
    const testContainer = document.getElementById('test-container');
    const testSelection = document.getElementById('test-selection');
    
    if (testContainer) testContainer.style.display = 'none';
    if (testSelection) testSelection.style.display = 'block';
    
    currentSubject = null;
    currentQuestionIndex = 0;
    userAnswers = [];
  }
}

// Batafsil natijalar
function showDetailedResults() {
  let test;
  if (currentSubject === 'katta-test') {
    test = testData['katta-test'];
  } else {
    test = testData[currentClass]?.[currentSubject];
  }
  
  if (!test) return;
  
  let details = '═══════════════════════════════\n';
  details += '     BATAFSIL NATIJALAR\n';
  details += '═══════════════════════════════\n\n';
  
  test.questions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correct;
    
    details += `📌 Savol ${index + 1}: ${question.question}\n`;
    details += `   Sizning javobingiz: ${userAnswer !== undefined ? question.answers[userAnswer] : 'Javob berilmagan'}\n`;
    details += `   To'g'ri javob: ${question.answers[question.correct]}\n`;
    details += `   Natija: ${isCorrect ? '✅ TO\'G\'RI' : '❌ XATO'}\n`;
    details += '───────────────────────────────────\n';
  });
  
  alert(details);
}
