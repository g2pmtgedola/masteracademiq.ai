/* ==========================================================================
   DATA-FIZIK.JS — 100% BAHAN BUKU TEKS FIZIK TINGKATAN 4 KSSM
   Sumber Rujukan: https://online.anyflip.com/dsfoh/fupu/mobile/index.html
   Penerbit: Kementerian Pendidikan Malaysia (KPM)
   LENGKAP DENGAN NOTA, FORMULA, JALAN KIRA LANGKAH DEMI LANGKAH & SKEMA
   ========================================================================== */

const FIZIK_DATA = [
  {
    id: "fizik-bab1",
    babNum: "BAB 1",
    title: "PENGUKURAN",
    icon: "📏",
    anyflipPages: "Buku Teks Fizik Tingkatan 4 (Halaman 2 – 23)",
    synopsis: "Mempelajari kuantiti fizik (asas dan terbitan), kuantiti skalar dan vektor, imbuhan unit SI, penukaran unit bentuk piawai, analisis graf saintifik (kecerunan, luas bawah graf, ekstrapolasi), serta kejituan, kepersisan dan kepekaan alat pengukuran.",
    notes: [
      {
        subtopic: "1.1 Kuantiti Fizik, Kuantiti Asas & Kuantiti Terbitan",
        verbatim: [
          "DEFINISI KUANTITI FIZIK: Kuantiti yang boleh diukur.",
          "7 KUANTITI ASAS (Kuantiti yang tidak dapat diterbitkan daripada kuantiti fizik yang lain):",
          "1. Panjang (l) - Meter (m)",
          "2. Jisim (m) - Kilogram (kg)",
          "3. Masa (t) - Saat (s)",
          "4. Suhu termodinamik (T) - Kelvin (K)",
          "5. Arus elektrik (I) - Ampere (A)",
          "6. Keamatan berlilin (Iv) - Candela (cd)",
          "7. Kuantiti bahan (n) - Mol (mol)",
          "KUANTITI TERBITAN: Kuantiti fizik yang diterbitkan daripada gabungan kuantiti asas melalui operasi darab atau bahagi (atau kedua-duanya).",
          "- Contoh 1: Ketumpatan (ρ) = Jisim / Isi padu = kg / m³ = kg m⁻³",
          "- Contoh 2: Halaju (v) = Sesaran / Masa = m / s = m s⁻¹",
          "- Contoh 3: Daya (F) = Jisim × Pecutan = kg × (m s⁻²) = kg m s⁻² (atau Newton, N)",
          "- Contoh 4: Tekanan (P) = Daya / Luas = N / m² = kg m⁻¹ s⁻² (atau Pascal, Pa)"
        ],
        explanation: "Analisis dimensi membolehkan kita menyemak ketepatan sesuatu formula fizik. Kedua-dua belah persamaan mesti mempunyai unit asas yang homogen."
      },
      {
        subtopic: "1.2 Kuantiti Skalar & Kuantiti Vektor",
        verbatim: [
          "1. KUANTITI SKALAR: Kuantiti fizik yang mempunyai MAGNITUD SAHAJA.",
          "   Contoh: Jarak, laju, jisim, masa, suhu, kerja, tenaga, kuasa, ketumpatan, tekanan.",
          "2. KUANTITI VEKTOR: Kuantiti fizik yang mempunyai MAGNITUD DAN ARAH.",
          "   Contoh: Sesaran, halaju, pecutan, daya, momentum, berat, medan graviti.",
          "PERBEZAAN PENTING:",
          "- Jarak (Skalar): Jumlah panjang lintasan yang dilalui oleh objek (sentiasa positif).",
          "- Sesaran (Vektor): Jarak terpendek antara kedudukan awal ke kedudukan akhir pada arah tertentu."
        ],
        explanation: "Contoh: Sebuah kereta bergerak 4 km ke timur kemudian 3 km ke utara. Jarak = 4 + 3 = 7 km. Sesaran = √(4² + 3²) = 5 km pada arah Timur Laut (053.1°)."
      },
      {
        subtopic: "1.3 Penyiasatan Saintifik & Analisis Graf",
        verbatim: [
          "HUBUNGAN ANTARA DUA PEMBOLEH UBAH DARIPADA GRAF:",
          "1. Graf garis lurus melalui asalan (0,0): y berkadar terus dengan x (y ∝ x).",
          "2. Graf garis lurus dengan kecerunan positif tidak melalui asalan: y bertambah secara linear dengan x (y = mx + c).",
          "3. Graf garis lurus dengan kecerunan negatif: y berkurang secara linear dengan x (y = -mx + c).",
          "4. Graf lengkung hiperbola: y berkadar songsang dengan x (y ∝ 1/x).",
          "MAKLUMAT DARIPADA GRAF FIZIK:",
          "- Kecerunan graf (m) = Δy / Δx = (y₂ - y₁) / (x₂ - x₁).",
          "- Luas di bawah graf = Bentuk geometri (segi tiga: 1/2 × tapak × tinggi; segi empat: panjang × lebar; trapezium: 1/2 × (a + b) × h).",
          "- Interpolasi: Menentukan nilai pemboleh ubah di dalam julat titik eksperimen.",
          "- Ekstrapolasi: Memanjangkan garis graf untuk menentukan nilai pemboleh ubah di luar julat eksperimen (cth: pintasan paksi)."
        ],
        explanation: "Jika graf y melawan 1/x menghasilkan garis lurus melalui asalan, ini membuktikan y berkadar songsang dengan x (cth: Hukum Boyle)."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Tentukan Unit Asas bagi Kuantiti Terbitan",
        detail: "Tulis formula terbitan terlebih dahulu, gantikan setiap kuantiti dengan unit asas SI. Contoh: Tekanan P = F/A = (m x a) / A = (kg x m s⁻²) / m² = kg m⁻¹ s⁻².",
        tip: "Sentiasa bawa sebutan di bawah ke atas dengan menukar tanda kuasanya (cth: 1/m² menjadi m⁻²)."
      },
      {
        step: "Langkah 2",
        title: "Bezakan Kuantiti Skalar vs Vektor",
        detail: "Tanya diri anda: 'Adakah kuantiti ini memerlukan arah untuk diterangkan secara lengkap?' Jika ya (seperti tolak kereta ke kiri), ia ialah vektor. Jika tidak (seperti 5 kg gula), ia ialah skalar.",
        tip: "Vektor lazim: Sesaran, Halaju, Pecutan, Daya, Momentum, Berat (ingat akronim: S-H-P-D-M-B)."
      },
      {
        step: "Langkah 3",
        title: "Kira Kecerunan Graf Mengikut Kaedah Fizik SPM",
        detail: "Pilih dua titik pada garis penyuaian terbaik yang jaraknya melebihi separuh panjang garis graf. Lukis segi tiga kecerunan besar dan kira m = (y2 - y1) / (x2 - x1) berserta unit.",
        tip: "Jangan sesekali menggunakan titik data eksperimen asal sekiranya titik tersebut tidak berada tepat di atas garis lurus."
      },
      {
        step: "Langkah 4",
        title: "Tafsir Hubungan Graf Secara Tepat",
        detail: "Gunakan istilah piawai: 'berkadar terus' hanya jika garis lurus melalui asalan (0,0). Jika tidak melalui asalan, sebut 'bertambah secara linear'.",
        tip: "Jangan guna perkataan 'berkadar langsung'; istilah baku KPM ialah 'berkadar terus'."
      }
    ],
    keypoints: [
      { badge: "ASAS", term: "Kuantiti Asas", meaning: "Tujuh kuantiti fizik yang tidak boleh diterbitkan daripada kuantiti lain (Panjang, Jisim, Masa, Suhu, Arus, Keamatan Berlilin, Mol)." },
      { badge: "ARAH", term: "Kuantiti Vektor", meaning: "Kuantiti fizik yang mempunyai kedua-dua magnitud dan arah (cth: sesaran, daya, halaju)." },
      { badge: "GRAF", term: "Berkadar Terus", meaning: "Hubungan graf garis lurus yang bermula tepat dari asalan (0,0) di mana y/x = pemalar." },
      { badge: "KECERUNAN", term: "Kecerunan Graf (m)", meaning: "Kadar perubahan paksi menegak terhadap paksi mendatar: m = (y₂ - y₁) / (x₂ - x₁) berserta unitnya." },
      { badge: "EKSTRAPOLASI", term: "Ekstrapolasi Graf", meaning: "Kaedah memanjangkan garis graf melepasi titik data eksperimen untuk mencari pintasan paksi (cth: sifar mutlak -273°C)." }
    ],
    questions: [
      {
        q: "Antara kuantiti fizik berikut, yang manakah merupakan KUANTITI ASAS?",
        options: ["Daya", "Tenaga", "Suhu termodinamik", "Ketumpatan"],
        answer: 2,
        explanation: "Suhu termodinamik (unit Kelvin, K) ialah salah satu daripada 7 kuantiti asas SI."
      },
      {
        q: "Apakah unit asas SI bagi kuantiti terbitan Daya, F? [Formula: F = ma]",
        options: ["kg m s⁻¹", "kg m s⁻²", "kg m² s⁻²", "kg m⁻¹ s⁻²"],
        answer: 1,
        explanation: "F = m × a = (kg) × (m s⁻²) = kg m s⁻² (bersamaan dengan 1 Newton, N)."
      },
      {
        q: "Seorang pelari berlari mengelilingi sebuah trek bulat berjejari 14 meter sebanyak satu pusingan lengkap dan kembali ke titik permulaan. Berapakah sesaran pelari tersebut?",
        options: ["0 meter", "44 meter", "88 meter", "616 meter"],
        answer: 0,
        explanation: "Sesaran ialah jarak terpendek dari titik awal ke titik akhir. Kerana titik akhir sama dengan titik awal, sesaran = 0 m (walaupun jarak = 2πr = 88 m)."
      },
      {
        q: "Satu graf garis lurus mempunyai kecerunan negatif dan memotong paksi-y pada nilai c positif. Apakah hubungan antara y dan x?",
        options: [
          "y berkadar songsang dengan x",
          "y berkadar terus dengan x",
          "y berkurang secara linear dengan x",
          "y bertambah secara linear dengan x"
        ],
        answer: 2,
        explanation: "Persamaan garis lurus y = -mx + c mewakili hubungan 'y berkurang secara linear dengan x'."
      },
      {
        q: "Antara pasangan kuantiti berikut, yang manakah KEDUA-DUANYA merupakan kuantiti vektor?",
        options: ["Laju dan Jarak", "Halaju dan Daya", "Jisim dan Berat", "Masa dan Tekanan"],
        answer: 1,
        explanation: "Halaju dan daya kedua-duanya mempunyai magnitud dan arah, maka kedua-duanya ialah kuantiti vektor."
      }
    ],
    struktur: [
      {
        q: "Dalam satu eksperimen mengkaji hubungan antara rintangan dawai, R dengan panjang dawai, l, data yang diperoleh diplotkan pada graf R melawan l.\n(a) Nyatakan maksud kuantiti terbitan.\n(b) Jika graf R melawan l menghasilkan satu garis lurus yang melalui asalan (0,0), nyatakan hubungan fizik antara R dan l.\n(c) Kecerunan graf yang diperoleh ialah 2.5 Ω m⁻¹. Hitungkan rintangan dawai tersebut sekiranya panjang dawai ialah 4.0 meter.",
        skema: [
          "(a) Kuantiti terbitan ialah kuantiti fizik yang diterbitkan daripada gabungan kuantiti asas melalui operasi pendaraban atau pembahagian (atau kedua-duanya).",
          "(b) R berkadar terus dengan l (R ∝ l).",
          "(c) Jalan kira:\n- Persamaan garis lurus: R = m × l\n- R = 2.5 Ω m⁻¹ × 4.0 m = 10.0 Ω.\n- Jawapan: Rintangan dawai ialah 10.0 Ω."
        ]
      }
    ]
  },
  {
    id: "fizik-bab2",
    babNum: "BAB 2",
    title: "DAYA DAN GERAKAN I",
    icon: "🏎️",
    anyflipPages: "Buku Teks Fizik Tingkatan 4 (Halaman 26 – 77)",
    synopsis: "Menguasai mekanik Newton: formula gerakan linear (v = u + at, s = ut + 1/2 at²), analisis graf halaju-masa (kecerunan = pecutan, luas = sesaran), gerakan jatuh bebas (g = 9.81 m s⁻²), inersia, momentum dan keabadian momentum, Hukum Newton Kedua (F = ma), impuls dan daya impuls, serta berat (W = mg).",
    notes: [
      {
        subtopic: "2.1 Gerakan Linear & 4 Formula Gerakan Linear",
        verbatim: [
          "DEFINISI ISTILAH GERAKAN:",
          "- Laju (v): Kadar perubahan jarak (Skalar, unit m s⁻¹).",
          "- Halaju (v): Kadar perubahan sesaran (Vektor, unit m s⁻¹).",
          "- Pecutan (a): Kadar perubahan halaju (Vektor, unit m s⁻²). a = (v - u) / t.",
          "- Nyahpecutan: Pecutan bernilai negatif (halaju berkurang mengikut masa).",
          "4 PERSAMAAN GERAKAN LINEAR DENGAN PECUTAN MALAR:",
          "1. v = u + at",
          "2. s = ½ (u + v) t",
          "3. s = ut + ½ at²",
          "4. v² = u² + 2as",
          "*Petunjuk: u = halaju awal, v = halaju akhir, a = pecutan, t = masa, s = sesaran."
        ],
        explanation: "Pilih persamaan yang sesuai dengan menyemak kuantiti yang diberi (u, v, a, s, t) dan kuantiti yang tidak terlibat dalam soalan."
      },
      {
        subtopic: "2.2 Graf Gerakan Linear & Jatuh Bebas",
        verbatim: [
          "GRAF SESARAN-MASA (s melawan t):",
          "- Kecerunan graf = Halaju objek (v = Δs / Δt).",
          "- Garis mendatar = Objek pegun (halaju sifar).",
          "GRAF HALAJU-MASA (v melawan t):",
          "- Kecerunan graf = Pecutan objek (a = Δv / Δt).",
          "- Luas di bawah graf = Sesaran yang dilalui oleh objek (s).",
          "- Garis mendatar = Halaju seragam (pecutan sifar).",
          "GERAKAN JATUH BEBAS:",
          "- Jatuh bebas berlaku apabila sesuatu objek jatuh di bawah pengaruh DAYA GRAVITI SAHAJA (tiada rintangan udara / dalam vakum).",
          "- Semua objek yang jatuh bebas mengalami PECUTAN GRAVITI YANG SAMA, g = 9.81 m s⁻², tanpa dipengaruhi oleh jisim atau bentuk objek.",
          "- Objek yang dilontar ke atas: a = -g = -9.81 m s⁻² (nyahpecutan); pada titik tertinggi, halaju v = 0 m s⁻¹."
        ],
        explanation: "Dalam vakum, sehelai bulu burung dan seketul batu yang dilepaskan serentak dari ketinggian sama akan mendarat serentak kerana kedua-duanya memecut pada g = 9.81 m s-2."
      },
      {
        subtopic: "2.3 Inersia, Momentum & Prinsip Keabadian Momentum",
        verbatim: [
          "1. INERSIA & HUKUM GERAKAN NEWTON PERTAMA:",
          "- Inersia ialah kecenderungan suatu objek untuk kekal dalam keadaan pegun atau meneruskan gerakan dalam garis lurus dengan halaju malar jika tiada daya luar bertindak.",
          "- Jisim ialah ukuran inersia: Semakin besar jisim suatu objek, semakin besar inersianya.",
          "2. MOMENTUM (p):",
          "- Hasil darab antara jisim dan halaju: p = m × v (Unit: kg m s⁻¹ atau N s). Kuantiti vektor.",
          "3. PRINSIP KEABADIAN MOMENTUM:",
          "Jumlah momentum sebelum perlanggaran adalah sama dengan jumlah momentum selepas perlanggaran jika tiada sebarang daya luar bertindak ke atas sistem.",
          "- Perlanggaran Kenyal (Objek berpisah selepas perlanggaran):",
          "  m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
          "- Perlanggaran Tak Kenyal (Objek bercantum dan bergerak bersama):",
          "  m₁u₁ + m₂u₂ = (m₁ + m₂) v",
          "- Letupan (Objek pegun meletup ke arah bertentangan):",
          "  0 = m₁v₁ + m₂v₂   =>   m₁v₁ = -m₂v₂"
        ],
        explanation: "Contoh letupan: Apabila senapang ditembak, peluru bergerak ke hadapan dengan halaju tinggi manakala senapang tersentak ke belakang dengan halaju kecil (kerana jisim senapang jauh lebih besar)."
      },
      {
        subtopic: "2.4 Daya (F = ma), Impuls & Daya Impuls",
        verbatim: [
          "HUKUM GERAKAN NEWTON KEDUA:",
          "- Kadar perubahan momentum adalah berkadar terus dengan daya paduan dan bertindak pada arah daya tersebut.",
          "FORMULA DAYA: F = m × a  (F dalam Newton N, m dalam kg, a dalam m s⁻²).",
          "IMPULS (J):",
          "- Perubahan momentum: Impuls = F × t = mv - mu (Unit: N s atau kg m s⁻¹).",
          "DAYA IMPULS (F):",
          "- Kadar perubahan momentum dalam masa tindak balas yang singkat: F = (mv - mu) / t.",
          "- Hubungan: Daya impuls adalah berkadar songsang dengan masa impak (t).",
          "- Mengurangkan daya impuls: Panjangkan masa impak t (cth: tilam tebal acara lompat tinggi, bengkokkan lutut semasa mendarat, zon remuk kereta, beg udara keselamatan).",
          "- Meningkatkan daya impuls: Pendekkan masa impak t (cth: kepala tukul keluli keras, lesung batu, pemukul besbol padu)."
        ],
        explanation: "Beg udara dan zon remuk hadapan kereta memanjangkan masa hentaman semasa kemalangan, sekali gus mengurangkan daya impuls yang bertindak ke atas penumpang dan mengelakkan kecederaan maut."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Selesaikan Persamaan Gerakan Linear (Kaedah SUVAT)",
        detail: "Senaraikan 5 pemboleh ubah: s, u, v, a, t. Catatkan nilai yang diketahui dan tandakan '?' pada kuantiti yang dicari. Pilih 1 daripada 4 formula yang mengandungi pemboleh ubah tersebut.",
        tip: "Jika soalan kata 'bermula dari keadaan pegun', halaju awal u = 0. Jika 'berhenti', halaju akhir v = 0."
      },
      {
        step: "Langkah 2",
        title: "Tafsir Graf Halaju-Masa (v melawan t)",
        detail: "Kecerunan = Pecutan. Luas di bawah graf = Sesaran (pecahkan kepada bentuk segi tiga dan segi empat, kira luas setiap bentuk dan jumlahkan).",
        tip: "Jika graf berada di bawah paksi-t (halaju negatif), objek bergerak ke arah bertentangan."
      },
      {
        step: "Langkah 3",
        title: "Selesaikan Masalah Keabadian Momentum",
        detail: "Kenal pasti jenis: Kenyal (berasingan), Tak Kenyal (bercantum v sama), atau Letupan (awal pegun = 0). Ambil kira tanda arah: jika ke kanan positif (+), maka ke kiri negatif (-).",
        tip: "Arah halaju sangat penting! Jika objek bergerak ke kiri, masukkan tanda negatif (cth: u₂ = -4 m s⁻¹)."
      },
      {
        step: "Langkah 4",
        title: "Aplikasi Konsep Daya Impuls F = (mv - mu) / t",
        detail: "Untuk keselamatan: Panjangkan masa hentaman t -> kurangkan daya impuls F. Untuk impak maksimum: Pendekkan masa hentaman t -> tingkatkan daya impuls F.",
        tip: "Gunakan perkataan 'memanjangkan masa impak / hentaman' dalam jawapan kertas 2."
      }
    ],
    keypoints: [
      { badge: "FORMULA", term: "F = ma", meaning: "Hukum Newton Kedua; Daya paduan berkadar terus dengan hasil darab jisim dan pecutan objek." },
      { badge: "GRAVITI", term: "Jatuh Bebas (g)", meaning: "Gerakan objek di bawah tarikan graviti sahaja dengan pecutan malar g = 9.81 m s⁻² tanpa rintangan udara." },
      { badge: "KEABADIAN", term: "Momentum", meaning: "Jumlah momentum sebelum perlanggaran sentiasa sama dengan jumlah momentum selepas perlanggaran jika tiada daya luar." },
      { badge: "IMPULS", term: "Daya Impuls", meaning: "Kadar perubahan momentum F = (mv - mu) / t; berkadar songsang dengan masa tindakan tindak balas." },
      { badge: "BERAT", term: "W = mg", meaning: "Daya graviti yang bertindak ke atas sesuatu jisim objek (berbeza mengikut kekuatan medan graviti lokasi)." }
    ],
    questions: [
      {
        q: "Sebuah kereta memecut secara seragam daripada keadaan pegun sehingga mencapai halaju 20 m s⁻¹ dalam masa 5 saat. Berapakah jarak sesaran yang dilalui oleh kereta tersebut?",
        options: ["25 m", "50 m", "100 m", "200 m"],
        answer: 1,
        explanation: "Diberi u = 0, v = 20, t = 5. Gunakan formula s = ½(u + v)t = ½(0 + 20)(5) = ½(20)(5) = 50 m."
      },
      {
        q: "Seketul batu dilepaskan daripada puncak sebuah bangunan tinggi dan jatuh bebas ke tanah dalam masa 3.0 saat. Berapakah ketinggian bangunan tersebut? [g = 9.81 m s⁻²]",
        options: ["29.4 m", "44.1 m", "58.8 m", "88.2 m"],
        answer: 1,
        explanation: "Diberi u = 0, t = 3, a = g = 9.81. Gunakan s = ut + ½at² = 0 + ½(9.81)(3)² = ½(9.81)(9) = 44.15 m ≈ 44.1 m."
      },
      {
        q: "Troli A berjisim 2 kg bergerak dengan halaju 3 m s⁻¹ berlanggar dengan troli B berjisim 1 kg yang pegun. Selepas perlanggaran, kedua-dua troli bercantum dan bergerak bersama. Berapakah halaju sepunya kedua-dua troli tersebut?",
        options: ["1.0 m s⁻¹", "2.0 m s⁻¹", "3.0 m s⁻¹", "6.0 m s⁻¹"],
        answer: 1,
        explanation: "Gunakan keabadian momentum perlanggaran tak kenyal: m₁u₁ + m₂u₂ = (m₁ + m₂)v. (2)(3) + (1)(0) = (2 + 1)v  =>  6 = 3v  =>  v = 2.0 m s⁻¹."
      },
      {
        q: "Seorang penerjun payung terjun membengkokkan kakinya semasa mendarat di atas tanah. Mengapakah beliau berbuat demikian?",
        options: [
          "Untuk memendekkan masa impak supaya daya impuls berkurang",
          "Untuk memanjangkan masa impak supaya daya impuls berkurang",
          "Untuk menambahkan perubahan momentum badannya",
          "Untuk meningkatkan pecutan graviti ke atas badannya"
        ],
        answer: 1,
        explanation: "Membengkokkan kaki memanjangkan masa hentaman mendarat (t). Berdasarkan F = Δp / t, peningkatan t akan mengurangkan daya impuls F, mengelakkan tulang kaki daripada patah."
      },
      {
        q: "Sebuah kotak berjisim 4 kg ditarik di atas lantai licin oleh daya mendatar 18 N menentang daya geseran 6 N. Berapakah pecutan kotak tersebut?",
        options: ["1.5 m s⁻²", "3.0 m s⁻²", "4.5 m s⁻²", "6.0 m s⁻²"],
        answer: 1,
        explanation: "Daya paduan F = 18 N - 6 N = 12 N. Menggunakan F = ma: a = F / m = 12 / 4 = 3.0 m s⁻²."
      }
    ],
    struktur: [
      {
        q: "Sebuah kereta berjisim 1000 kg sedang bergerak dengan halaju 25 m s⁻¹ apabila pemandunya menekan brek kecemasan. Kereta tersebut berhenti sepenuhnya dalam masa 2.5 saat.\n(a) Nyatakan Hukum Gerakan Newton Kedua.\n(b) Hitungkan nyahpecutan kereta tersebut.\n(c) Hitungkan daya membrek yang bertindak ke atas kereta.\n(d) Terangkan peranan ciri keselamatan 'zon remuk' pada bahagian hadapan kereta dalam mengurangkan kecederaan penumpang semasa kemalangan.",
        skema: [
          "(a) Kadar perubahan momentum berkadar terus dengan daya paduan dan bertindak pada arah daya tersebut (F = ma).",
          "(b) u = 25 m s⁻¹, v = 0 m s⁻¹, t = 2.5 s.\na = (v - u) / t = (0 - 25) / 2.5 = -10 m s⁻².\nNyahpecutan kereta ialah 10 m s⁻².",
          "(c) F = ma = 1000 kg × (-10 m s⁻²) = -10,000 N.\nDaya membrek yang bertindak ialah 10,000 N (menentang arah gerakan).",
          "(d) Zon remuk mudah kemek semasa perlanggaran. Tindakan ini memanjangkan masa impak hentaman kereta (t bertambah). Berdasarkan formula daya impuls F = (mv - mu) / t, apabila masa impak t bertambah, daya impuls yang dialami oleh penumpang berkurang dengan ketara, sekali gus mengurangkan risiko kecederaan parah."
        ]
      }
    ]
  },
  {
    id: "fizik-bab3",
    babNum: "BAB 3",
    title: "KEGRAVITIAN",
    icon: "🛰️",
    anyflipPages: "Buku Teks Fizik Tingkatan 4 (Halaman 78 – 113)",
    synopsis: "Meneroka angkasa lepas melalui Hukum Kegravitian Semesta Newton (F = Gm1m2/r²), kekuatan medan graviti, daya memusat (F = mv²/r), 3 Hukum Kepler berkaitan orbit planet (T² ∝ r³), satelit geopegun vs bukan geopegun, dan halaju lepas bumi (v = √(2GM/r)).",
    notes: [
      {
        subtopic: "3.1 Hukum Kegravitian Semesta Newton & Medan Graviti",
        verbatim: [
          "HUKUM KEGRAVITIAN SEMESTA NEWTON:",
          "Daya graviti antara dua jasad adalah berkadar terus dengan hasil darab jisim kedua-dua jasad dan berkadar songsang dengan kuasa dua jarak di antara pusat jasad tersebut.",
          "FORMULA: F = (G × m₁ × m₂) / r²",
          "- F = Daya graviti antara dua jasad (N)",
          "- G = Pemalar Kegravitian Semesta = 6.67 × 10⁻¹¹ N m² kg⁻²",
          "- m₁, m₂ = Jisim jasad pertama dan jasad kedua (kg)",
          "- r = Jarak di antara pusat jasad pertama dan pusat jasad kedua (m)",
          "PECUTAN GRAVITI DI PERMUKAAN BUMI (g):",
          "g = (G × M) / R²",
          "- M = Jisim Bumi (5.97 × 10²⁴ kg), R = Jejari Bumi (6.37 × 10⁶ m).",
          "- Pada ketinggian h dari permukaan Bumi: r = R + h, maka g = GM / (R + h)²."
        ],
        explanation: "Daya tarikan graviti berkurangan mengikut hukum kuasa dua songsang. Jika jarak r digandakan dua kali, daya graviti menjadi 1/4 daripada nilai asal."
      },
      {
        subtopic: "3.2 Daya Memusat & 3 Hukum Kepler",
        verbatim: [
          "DAYA MEMUSAT DALAM GERAKAN MEMBULAT:",
          "- Jasad yang bergerak dalam orbit membulat sentiasa mengalami daya yang bertindak ke arah pusat bulatan, dipanggil DAYA MEMUSAT.",
          "- Formula: F = (m × v²) / r",
          "- Bagi satelit yang mengorbit bumi, daya graviti bertindak sebagai daya memusat: GMm/r² = mv²/r.",
          "3 HUKUM KEPLER MENGENAI GERAKAN PLANET:",
          "1. Hukum Kepler Pertama (Hukum Orbit): Semua planet bergerak dalam orbit berbentuk ELIPS dengan Matahari berada di salah satu fokusnya.",
          "2. Hukum Kepler Kedua (Hukum Luas): Garis yang menyambungkan planet dengan Matahari mencakupi LUAS YANG SAMA DALAM SELANG MASA YANG SAMA. (Planet bergerak lebih laju apabila berada dekat dengan Matahari/perihelion, dan lebih perlahan apabila jauh/aphelion).",
          "3. Hukum Kepler Ketiga (Hukum Tempoh): Kuasa dua tempoh orbit planet adalah berkadar terus dengan kuasa tiga jejari orbitnya.",
          "   Formula: T² ∝ r³   =>   (T₁² / r₁³) = (T₂² / r₂³)"
        ],
        explanation: "Hukum Kepler Ketiga membolehkan ahli astronomi mengira jarak sesuatu planet dari Matahari hanya dengan mengetahui tempoh masa planet itu melengkapkan satu orbit."
      },
      {
        subtopic: "3.3 Satelit Buatan Manusia & Halaju Lepas",
        verbatim: [
          "PERBANDINGAN SATELIT GEOPEGUN VS SATELIT BUKAN GEOPEGUN:",
          "1. Satelit Geopegun:",
          "- Tempoh orbit tepat 24 jam (sama dengan tempoh putaran Bumi pada paksinya).",
          "- Berada di atas titik geografi yang sama di atas garisan Khatulistiwa Bumi.",
          "- Arah putaran sama dengan arah putaran Bumi (Barat ke Timur).",
          "- Fungsi: Satelit komunikasi dan penyiaran (cth: MEASAT).",
          "2. Satelit Bukan Geopegun:",
          "- Tempoh orbit lebih pendek atau lebih panjang daripada 24 jam (lazimnya 1.5 hingga 4 jam).",
          "- Berada di atas titik geografi yang sentiasa berubah di permukaan Bumi.",
          "- Fungsi: Penderiaan jauh kaji cuaca, pemetaan GPS, fotografi satelit pengintip (cth: TiungSAT).",
          "HALAJU LEPAS (v):",
          "- Halaju minimum yang diperlukan oleh objek di permukaan Bumi untuk mengatasi daya graviti dan terlepas ke angkasa lepas tanpa kembali.",
          "- Formula: v = √(2GM / r) = √(2gr)",
          "- Nilai halaju lepas dari permukaan Bumi ≈ 11.2 km s⁻¹ (atau 11,200 m s⁻¹)."
        ],
        explanation: "Bumi dapat mengekalkan lapisan atmosferanya (gas O2 dan N2) kerana halaju molekul gas pada suhu atmosfera Bumi jauh lebih rendah daripada halaju lepas Bumi (11.2 km s-1)."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Kira Daya Graviti Menggunakan F = Gm1m2 / r²",
        detail: "Pastikan jarak r diukur dari PUSAT ke PUSAT. Jika objek berada pada ketinggian h di atas permukaan bumi berjejari R, gantikan r = (R + h).",
        tip: "Sentiasa tukar unit km kepada meter (darab 1000) sebelum menekan kalkulator."
      },
      {
        step: "Langkah 2",
        title: "Kira Halaju Linear Satelit v = √(GM / r)",
        detail: "Samakan Daya Graviti dengan Daya Memusat: GMm/r² = mv²/r -> potong m dan r -> v² = GM/r -> v = √(GM/r).",
        tip: "Perhatikan bahawa halaju orbit satelit TIDAK bergantung kepada jisim satelit (m), hanya bergantung kepada jisim Bumi (M) dan jejari orbit (r)."
      },
      {
        step: "Langkah 3",
        title: "Gunakan Formula Kepler Ketiga (T1² / r1³ = T2² / r2³)",
        detail: "Jika membandingkan dua planet yang mengorbit bintang yang sama, nisbah T²/r³ adalah malar. Susun formula untuk mencari T₂ atau r₂.",
        tip: "Unit tempoh T dan jejari r boleh dibiarkan dalam tahun dan km selagi unit kedua-dua planet adalah konsisten."
      },
      {
        step: "Langkah 4",
        title: "Bezakan Ciri Satelit Geopegun",
        detail: "Ingat 4 ciri utama: (1) Tempoh orbit = 24 jam (2) Kedudukan pegun di atas titik sama di Khatulistiwa (3) Arah barat ke timur (4) Ketinggian tetap ~35,786 km.",
        tip: "Piring astro di bumbung rumah sentiasa menghala ke arah tetap kerana menyasarkan satelit geopegun MEASAT."
      }
    ],
    keypoints: [
      { badge: "NEWTON", term: "Hukum Kegravitian Semesta", meaning: "F = Gm₁m₂ / r²; daya tarikan berkadar terus dengan hasil darab jisim dan berkadar songsang dengan kuasa dua jarak." },
      { badge: "MEMUSAT", term: "Daya Memusat", meaning: "F = mv² / r; daya yang bertindak ke arah pusat bulatan untuk mengekalkan objek dalam lintasan membulat." },
      { badge: "KEPLER", term: "Hukum Kepler Ketiga", meaning: "T² ∝ r³; kuasa dua tempoh orbit berkadar terus dengan kuasa tiga jejari orbit planet." },
      { badge: "ORBIT", term: "Satelit Geopegun", meaning: "Satelit dengan tempoh orbit tepat 24 jam yang kekal di atas kedudukan geografi yang sama di Khatulistiwa Bumi." },
      { badge: "LEPAS", term: "Halaju Lepas", meaning: "v = √(2GM / r); halaju minimum untuk jasad melepaskan diri daripada tarikan graviti planet ke angkasa lepas (11.2 km s⁻¹ bagi Bumi)." }
    ],
    questions: [
      {
        q: "Dua buah sfera masing-masing berjisim 50 kg dan 80 kg diletakkan pada jarak 2.0 meter di antara pusat masing-masing. Berapakah daya tarikan graviti antara kedua-dua sfera tersebut? [G = 6.67 × 10⁻¹¹ N m² kg⁻²]",
        options: ["6.67 × 10⁻⁸ N", "1.33 × 10⁻⁷ N", "2.67 × 10⁻⁷ N", "5.34 × 10⁻⁶ N"],
        answer: 0,
        explanation: "F = (G × m₁ × m₂) / r² = (6.67 × 10⁻¹¹ × 50 × 80) / (2.0)² = (2.668 × 10⁻⁷) / 4 = 6.67 × 10⁻⁸ N."
      },
      {
        q: "Sebuah planet mengorbit Matahari dalam lintasan elips. Berdasarkan Hukum Kepler Kedua, di manakah kedudukan planet tersebut apabila ia bergerak dengan kelajuan paling tinggi?",
        options: [
          "Pada titik paling dekat dengan Matahari (perihelion)",
          "Pada titik paling jauh dari Matahari (aphelion)",
          "Kelajuan planet adalah sentiasa malar di sepanjang orbit",
          "Pada titik tengah antara perihelion dan aphelion"
        ],
        answer: 0,
        explanation: "Hukum Kepler Kedua menyatakan luas sektor per masa adalah malar. Untuk mencakupi luas yang sama apabila jarak r lebih dekat, planet mesti bergerak dengan kelajuan paling laju di perihelion."
      },
      {
        q: "Antara pernyataan berikut, yang manakah BENAR mengenai satelit geopegun?",
        options: [
          "Mempunyai tempoh orbit 1.5 jam",
          "Kedudukannya sentiasa berubah di atas pelbagai benua",
          "Tempoh orbitnya ialah tepat 24 jam dan berada di atas Khatulistiwa Bumi",
          "Bergerak dari arah Timur ke Barat mengelilingi kutub Bumi"
        ],
        answer: 2,
        explanation: "Satelit geopegun mempunyai tempoh orbit 24 jam (sama dengan putaran Bumi) dan kekal di atas titik geografi yang sama di atas garisan Khatulistiwa."
      },
      {
        q: "Sekiranya jejari Bumi ialah R dan pecutan graviti di permukaan bumi ialah g. Berapakah pecutan graviti pada ketinggian h = R di atas permukaan bumi?",
        options: ["g / 2", "g / 4", "g / 8", "2g"],
        answer: 1,
        explanation: "Jarak dari pusat bumi r = R + h = R + R = 2R. Mengikut hukum kuasa dua songsang, g' = GM / (2R)² = GM / (4R²) = g / 4."
      },
      {
        q: "Halaju lepas dari permukaan Bumi ialah kira-kira 11.2 km s⁻¹. Apakah yang akan berlaku jika sebuah roket dilancarkan menegak dengan halaju 12.5 km s⁻¹?",
        options: [
          "Roket akan jatuh semula ke Bumi selepas bahan api habis",
          "Roket akan mengorbit Bumi sebagai satelit geopegun",
          "Roket akan melepaskan diri daripada tarikan graviti Bumi ke angkasa lepas",
          "Roket akan meletup akibat geseran atmosfera"
        ],
        answer: 2,
        explanation: "Kerana halaju pelancaran (12.5 km s⁻¹) melebihi halaju lepas Bumi (11.2 km s⁻¹), roket tersebut berjaya mengatasi tarikan graviti Bumi dan menuju ke angkasa lepas."
      }
    ],
    struktur: [
      {
        q: "Sebuah satelit komunikasi berjisim 1200 kg mengorbit Bumi pada ketinggian 35,786 km di atas permukaan Bumi. [Jisim Bumi M = 5.97 × 10²⁴ kg, Jejari Bumi R = 6.37 × 10⁶ m, G = 6.67 × 10⁻¹¹ N m² kg⁻²]\n(a) Nyatakan jenis satelit tersebut (geopegun atau bukan geopegun).\n(b) Hitungkan jejari orbit satelit, r dalam unit meter.\n(c) Hitungkan halaju linear satelit semasa mengorbit Bumi menggunakan formula v = √(GM / r).\n(d) Apakah yang akan berlaku kepada satelit tersebut sekiranya kelajuan linearnya berkurang secara mendadak?",
        skema: [
          "(a) Satelit geopegun (kerana berada pada ketinggian khas orbit geopegun 35,786 km).",
          "(b) Jejari orbit r = R + h = 6.37 × 10⁶ m + 35,786,000 m = 4.2156 × 10⁷ m (atau 42,156 km).",
          "(c) v = √(GM / r)\nv = √[ (6.67 × 10⁻¹¹ × 5.97 × 10²⁴) / (4.2156 × 10⁷) ]\nv = √[ (3.982 × 10¹⁴) / (4.2156 × 10⁷) ] = √(9.446 × 10⁶) = 3073.4 m s⁻¹ (kira-kira 3.07 km s⁻¹).",
          "(d) Daya memusat yang diperlukan (mv²/r) akan berkurangan. Oleh itu, daya tarikan graviti Bumi akan menjadi lebih kuat daripada daya memusat, menyebabkan satelit tersasar ke dalam orbit yang lebih rendah dan akhirnya jatuh menjunam memasuki atmosfera Bumi lalu terbakar."
        ]
      }
    ]
  },
  {
    id: "fizik-bab4",
    babNum: "BAB 4",
    title: "HABA",
    icon: "🌡️",
    anyflipPages: "Buku Teks Fizik Tingkatan 4 (Halaman 116 – 167)",
    synopsis: "Mengkaji pemindahan tenaga haba: Keseimbangan terma, Muatan Haba Tentu (Q = mcΔθ), Haba Pendam Tentu pelakuran dan pengewapan (Q = mL), serta 3 Hukum Gas utama (Hukum Boyle P1V1 = P2V2, Hukum Charles V1/T1 = V2/T2, Hukum Gay-Lussac P1/T1 = P2/T2, dan Hukum Gas Gabungan).",
    notes: [
      {
        subtopic: "4.1 Keseimbangan Terma & Termometer",
        verbatim: [
          "DEFINISI KESEIMBANGAN TERMA:",
          "Dua objek berada dalam keseimbangan terma apabila:",
          "1. KADAR PEMINDAHAN HABA BERSIH ANTARA DUA OBJEK ADALAH SIFAR.",
          "2. KEDUA-DUA OBJEK MEMPUNYAI SUHU YANG SAMA.",
          "APLIKASI DALAM TERMOMETER KLINIKAL:",
          "- Termometer diletakkan di bawah lidah pesakit.",
          "- Haba mengalir daripada badan pesakit ke termometer sehingga keseimbangan terma tercapai.",
          "- Suhu cecair merkuri dalam termometer sama dengan suhu badan pesakit.",
          "PENENTUKURAN TERMOMETER CECAIR DALAM KACA:",
          "- Takat ais (0°C): Aras cecair merkuri dalam ais melebur, l₀.",
          "- Takat stim (100°C): Aras cecair merkuri di atas air mendidih pada tekanan 1 atm, l₁₀₀.",
          "- Formula Suhu, θ = [ (l_θ - l₀) / (l₁₀₀ - l₀) ] × 100°C."
        ],
        explanation: "Walaupun haba masih dipindahkan antara dua objek pada keseimbangan terma, kadar pemindahan haba dari A ke B adalah sama tepat dengan kadar pemindahan haba dari B ke A, maka kadar bersihnya ialah sifar."
      },
      {
        subtopic: "4.2 Muatan Haba Tentu (Q = mcΔθ)",
        verbatim: [
          "DEFINISI MUATAN HABA TENTU (c):",
          "Kuantiti haba yang diperlukan untuk menaikkan suhu sebanyak 1°C (atau 1 K) bagi 1 kg jisim bahan tersebut.",
          "FORMULA: Q = m × c × Δθ",
          "- Q = Kuantiti haba yang diserap atau dibebaskan (Joule, J)",
          "- m = Jisim bahan (kg)",
          "- c = Muatan haba tentu bahan (J kg⁻¹ °C⁻¹ atau J kg⁻¹ K⁻¹)",
          "- Δθ = Perubahan suhu = θ_akhir - θ_awal (°C atau K)",
          "APLIKASI NILAI c TINGGI VS RENDAH:",
          "1. Nilai c Tinggi (cth: Air, c = 4,200 J kg⁻¹ °C⁻¹):",
          "   - Lambat panas dan lambat sejuk; boleh menyerap banyak haba dengan kenaikan suhu yang kecil.",
          "   - Aplikasi: Bahan penyejuk radiator enjin kereta, bayu laut dan bayu darat.",
          "2. Nilai c Rendah (cth: Logam kuprum/aluminium, c ≈ 390 - 900 J kg⁻¹ °C⁻¹):",
          "   - Cepat panas dan cepat sejuk; suhu naik dengan cepat apabila sedikit haba dibekalkan.",
          "   - Aplikasi: Dasar kuali memasak, tapak seterika elektrik."
        ],
        explanation: "Fenomena bayu laut pada waktu siang berlaku kerana daratan (pasir mempunyai nilai c rendah) menjadi panas lebih cepat daripada laut (air mempunyai c tinggi). Udara panas di darat naik ke atas dan udara sejuk dari laut bertiup ke darat."
      },
      {
        subtopic: "4.3 Haba Pendam Tentu (Q = mL)",
        verbatim: [
          "DEFINISI HABA PENDAM TENTU (L):",
          "Kuantiti haba yang diserap atau dibebaskan semasa perubahan fasa 1 kg bahan PADA SUHU MALAR.",
          "FORMULA: Q = m × L",
          "2 JENIS HABA PENDAM TENTU:",
          "1. Haba Pendam Tentu Pelakuran, L_f: Perubahan fasa antara pepejal dan cecair pada takat lebur.",
          "   - Haba diserap untuk mengatasi daya tarikan antara zarah pepejal membentuk cecair.",
          "2. Haba Pendam Tentu Pengewapan, L_v: Perubahan fasa antara cecair dan gas pada takat didih.",
          "   - Haba diserap untuk memutuskan ikatan antara zarah cecair sepenuhnya dan melakukan kerja menentang tekanan atmosfera.",
          "   - Nilai L_v sentiasa jauh lebih besar daripada L_f bagi bahan yang sama."
        ],
        explanation: "Apabila berpeluh, peluh menyerap haba pendam pengewapan daripada kulit kita untuk menyejat menjadi wap air, sekali gus menyejukkan badan kita dengan berkesan."
      },
      {
        subtopic: "4.4 Hukum-Hukum Gas (Boyle, Charles, Gay-Lussac)",
        verbatim: [
          "SUHU MUTLAK (KELVIN, K): T (K) = θ (°C) + 273. Sifar mutlak = 0 K = -273°C (tekanan dan tenaga kinetik zarah sifar).",
          "1. HUKUM BOYLE (Suhu T malar):",
          "- Tekanan P berkadar songsang dengan isi padu V: P ∝ 1/V.",
          "- Formula: P₁V₁ = P₂V₂",
          "2. HUKUM CHARLES (Tekanan P malar):",
          "- Isi padu V berkadar terus dengan suhu mutlak T: V ∝ T.",
          "- Formula: (V₁ / T₁) = (V₂ / T₂)",
          "3. HUKUM GAY-LUSSAC (Isi padu V malar):",
          "- Tekanan P berkadar terus dengan suhu mutlak T: P ∝ T.",
          "- Formula: (P₁ / T₁) = (P₂ / T₂)",
          "HUKUM GAS GABUNGAN:",
          "(P₁ × V₁) / T₁ = (P₂ × V₂) / T₂   *Suhu T MESTI dalam unit Kelvin (K)!"
        ],
        explanation: "Mengikut teori kinetik gas: Apabila suhu gas meningkat, zarah bergerak lebih laju dan berlanggar dengan dinding bekas dengan frekuensi dan daya yang lebih tinggi, meningkatkan tekanan."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Tentukan Formula Haba: Q = mcΔθ atau Q = mL",
        detail: "Semak sama ada terdapat perubahan suhu atau perubahan fasa: Jika SUHU BERUBAH -> guna Q = mcΔθ. Jika SUHU MALAR (lebur/didih) -> guna Q = mL.",
        tip: "Jika kuasa elektrik pembakar diberi (P watt dalam masa t saat): Tenaga elektrik E = Pt = Q."
      },
      {
        step: "Langkah 2",
        title: "Gunakan Prinsip Keabadian Tenaga Pemindahan Haba",
        detail: "Haba yang dibebaskan oleh objek panas = Haba yang diserap oleh objek sejuk (m₁c₁Δθ₁ = m₂c₂Δθ₂), dengan menganggap tiada kehilangan haba ke persekitaran.",
        tip: "Perubahan suhu Δθ sentiasa bernilai positif: (Suhu tinggi - Suhu rendah)."
      },
      {
        step: "Langkah 3",
        title: "Wajib Tukar Suhu kepada Kelvin bagi Hukum Gas!",
        detail: "Sentiasa tambah 273 pada suhu darjah Celsius: T (K) = θ (°C) + 273 sebelum dimasukkan ke dalam formula gas.",
        tip: "Kesilapan paling kerap murid SPM ialah memasukkan suhu dalam °C ke dalam formula Charles dan Gay-Lussac."
      },
      {
        step: "Langkah 4",
        title: "Kenal Pasti Hukum Gas yang Terlibat",
        detail: "Suhu malar = Hukum Boyle (P1V1 = P2V2). Tekanan malar = Hukum Charles (V1/T1 = V2/T2). Isi padu malar = Hukum Gay-Lussac (P1/T1 = P2/T2).",
        tip: "Ingat akronim: 'Bila Suhu Boyle Malar, Charles Tekan, Gay Isi padu'."
      }
    ],
    keypoints: [
      { badge: "KESEIMBANGAN", term: "Keseimbangan Terma", meaning: "Keadaan di mana kadar bersih pemindahan haba adalah sifar dan suhu kedua-dua objek adalah sama." },
      { badge: "Q = mcΔθ", term: "Muatan Haba Tentu (c)", meaning: "Haba yang diperlukan untuk menaikkan suhu 1 kg bahan sebanyak 1°C (Air = 4,200 J kg⁻¹ °C⁻¹)." },
      { badge: "Q = mL", term: "Haba Pendam Tentu (L)", meaning: "Haba yang diserap atau dibebaskan semasa perubahan keadaan fasa jirim pada suhu malar." },
      { badge: "BOYLE", term: "Hukum Boyle", meaning: "P₁V₁ = P₂V₂ pada suhu malar; tekanan berkadar songsang dengan isi padu gas." },
      { badge: "SIFAR MUTLAK", term: "0 Kelvin (-273°C)", meaning: "Suhu terendah secara teori di mana semua gerakan kinetik zarah dan tekanan gas menjadi sifar." }
    ],
    questions: [
      {
        q: "Berapakah kuantiti haba yang diperlukan untuk memanaskan 2.0 kg air daripada suhu 30°C kepada 80°C? [Muatan haba tentu air = 4,200 J kg⁻¹ °C⁻¹]",
        options: ["84,000 J", "210,000 J", "420,000 J", "672,000 J"],
        answer: 2,
        explanation: "Q = mcΔθ = 2.0 × 4200 × (80 - 30) = 2.0 × 4200 × 50 = 420,000 J (atau 420 kJ)."
      },
      {
        q: "Mengapakah air digunakan secara meluas sebagai cecair penyejuk dalam radiator enjin kereta?",
        options: [
          "Air mempunyai takat beku yang sangat tinggi",
          "Air mempunyai muatan haba tentu yang sangat tinggi",
          "Air tidak mengalirkan elektrik",
          "Air mempunyai ketumpatan yang paling rendah"
        ],
        answer: 1,
        explanation: "Air mempunyai muatan haba tentu yang tinggi (4,200 J kg⁻¹ °C⁻¹), membolehkannya menyerap kuantiti haba yang sangat besar daripada enjin dengan kenaikan suhu yang kecil."
      },
      {
        q: "Sebilangan gas terperangkap dalam picagari pada tekanan 100 kPa dengan isi padu 60 cm³. Jika omboh ditekan pada suhu malar sehingga isi padu menjadi 20 cm³, apakah tekanan gas yang baharu?",
        options: ["33.3 kPa", "150 kPa", "300 kPa", "600 kPa"],
        answer: 2,
        explanation: "Mengikut Hukum Boyle P₁V₁ = P₂V₂: (100 kPa)(60 cm³) = P₂(20 cm³)  =>  P₂ = 6000 / 20 = 300 kPa."
      },
      {
        q: "Satu sampel gas mempunyai isi padu 300 cm³ pada suhu 27°C. Berapakah isi padu gas tersebut pada suhu 127°C jika tekanannya dikekalkan malar?",
        options: ["100 cm³", "400 cm³", "600 cm³", "1411 cm³"],
        answer: 1,
        explanation: "Tukar suhu ke Kelvin: T₁ = 27 + 273 = 300 K; T₂ = 127 + 273 = 400 K. Guna Hukum Charles: V₁/T₁ = V₂/T₂ => 300 / 300 = V₂ / 400 => V₂ = 400 cm³."
      },
      {
        q: "Apakah yang berlaku kepada tenaga haba yang diserap oleh ketulan ais semasa melebur menjadi air pada takat leburnya 0°C?",
        options: [
          "Digunakan untuk menambahkan tenaga kinetik molekul ais",
          "Digunakan untuk memutuskan daya tarikan antara molekul ais tanpa menaikkan suhu",
          "Haba tersebut hilang ke persekitaran secara sinaran",
          "Digunakan untuk memecahkan atom hidrogen dan oksigen"
        ],
        answer: 1,
        explanation: "Haba pendam pelakuran yang diserap digunakan sepenuhnya untuk mengatasi daya tarikan antara molekul pepejal membentuk cecair, jadi tiada peningkatan tenaga kinetik (suhu malar 0°C)."
      }
    ],
    struktur: [
      {
        q: "Sebuah pemanas elektrik berkuasa 1000 W digunakan untuk mendidihkan 0.5 kg air pada takat didih 100°C sehingga bertukar menjadi stim sepenuhnya. [Haba pendam tentu pengewapan air Lv = 2.26 × 10⁶ J kg⁻¹]\n(a) Nyatakan maksud haba pendam tentu pengewapan.\n(b) Hitungkan kuantiti haba yang diperlukan untuk mengewapkan 0.5 kg air tersebut.\n(c) Hitungkan masa yang diambil oleh pemanas elektrik tersebut untuk menukarkan semua air kepada stim (anggap tiada kehilangan haba).\n(d) Mengapakah lecuran yang disebabkan oleh stim air 100°C adalah jauh lebih parah daripada lecuran oleh air mendidih 100°C?",
        skema: [
          "(a) Kuantiti tenaga haba yang diserap untuk menukarkan 1 kg bahan daripada cecair kepada gas pada takat didihnya tanpa perubahan suhu.",
          "(b) Q = m × L_v = 0.5 kg × (2.26 × 10⁶ J kg⁻¹) = 1.13 × 10⁶ J (atau 1,130,000 J).",
          "(c) Tenaga elektrik E = Kuasa (P) × masa (t). Kerana E = Q:\nP × t = Q  =>  1000 W × t = 1,130,000 J\nt = 1,130,000 / 1000 = 1130 saat (kira-kira 18.8 minit).",
          "(d) Walaupun kedua-duanya berada pada suhu yang sama (100°C), 1 kg stim mengandungi tenaga haba tambahan iaitu haba pendam tentu pengewapan (2.26 × 10⁶ J). Semasa stim terkena kulit, stim akan terkondensasi dan membebaskan kuantiti haba pendam yang sangat besar tersebut terus ke tisu kulit pesakit."
        ]
      }
    ]
  },
  {
    id: "fizik-bab5",
    babNum: "BAB 5",
    title: "GELOMBANG",
    icon: "🌊",
    anyflipPages: "Buku Teks Fizik Tingkatan 4 (Halaman 170 – 231)",
    synopsis: "Mengkaji perambatan gelombang: Gelombang melintang vs membujur, muka gelombang, formula laju gelombang (v = fλ), pelembapan dan resonans, 4 fenomena gelombang (pantulan, pembiasan, pembelauan, interferens konstruktif & destruktif λ = ax/D), serta spektrum gelombang elektromagnet.",
    notes: [
      {
        subtopic: "5.1 Asas Gelombang & Formula Gelombang (v = fλ)",
        verbatim: [
          "DEFINISI GELOMBANG: Gangguan yang merambat melalui suatu medium dan memindahkan TENAGA tanpa memindahkan jirim.",
          "2 JENIS GELOMBANG UTAMA:",
          "1. Gelombang Melintang: Zarah medium bergetar pada arah yang BERSUDUT TEGAK dengan arah perambatan gelombang (cth: gelombang air, gelombang cahaya, gelombang elektromagnet, tali bergetar).",
          "2. Gelombang Membujur: Zarah medium bergetar pada arah yang SELARI dengan arah perambatan gelombang, terdiri daripada mampatan dan renggangan (cth: gelombang bunyi, spring slinki ditolak-tarik).",
          "CIRI-CIRI GELOMBANG:",
          "- Amplitud (A): Sesaran maksimum zarah dari kedudukan keseimbangan (menggambarkan tenaga gelombang).",
          "- Tempoh (T): Masa yang diambil untuk satu ayunan lengkap (s).",
          "- Frekuensi (f): Bilangan ayunan lengkap sesaat (Hertz, Hz). f = 1 / T.",
          "- Panjang Gelombang (λ): Jarak di antara dua titik sefasa yang berturutan (cth: puncak ke puncak, atau mampatan ke mampatan) (m).",
          "FORMULA LAJU GELOMBANG: v = f × λ"
        ],
        explanation: "Laju perambatan gelombang bergantung pada sifat medium perambatan. Dalam air, laju gelombang berkurang apabila kedalaman air berkurangan."
      },
      {
        subtopic: "5.2 Pelembapan, Resonans & 4 Fenomena Gelombang",
        verbatim: [
          "PELEMBAPAN: Pengurangan amplitud ayunan sistem akibat kehilangan tenaga mengatasi rintangan geseran/udara (frekuensi kekal malar).",
          "RESONANS: Berlaku apabila suatu sistem ayunan dikenakan daya luar yang mempunyai FREKUENSI ASLI yang sama dengan sistem tersebut. Sistem akan berayun dengan AMPLITUD MAKSIMUM (cth: jambatan Tacoma Narrows runtuh, tala bunyi beresonans).",
          "4 FENOMENA GELOMBANG:",
          "1. Pantulan Gelombang: Gelombang melantul balik apabila menghentam halangan. Sudut tuju i = Sudut pantulan r. Frekuensi f, panjang gelombang λ, dan laju v TIDAK BERUBAH (arah sahaja berubah).",
          "2. Pembiasan Gelombang: Perubahan arah perambatan gelombang apabila merambat melalui medium berbeza kedalaman. Dari kawasan DALAM ke CETEK: Laju v berkurang, panjang gelombang λ berkurang, terbias mendekati garis normal (frekuensi f kekal malar).",
          "3. Pembelauan Gelombang: Penyebaran gelombang apabila melalui suatu celah kecil atau mengelilingi halangan. Corak pembelauan lebih ketara jika saiz celah kecil (saiz celah ≤ λ).",
          "4. Interferens Gelombang: Superposisi antara dua gelombang yang koheren (frekuensi sama dan beza fasa tetap).",
          "   - Interferens Konstruktif: Puncak + Puncak menghasilkan Antinod (amplitud maksimum).",
          "   - Interferens Destruktif: Puncak + Lembahan menghasilkan Nod (amplitud sifar).",
          "   - Formula Interferens: λ = (a × x) / D",
          "     *a = jarak antara 2 punca koheren, x = jarak antara 2 garis nod/antinod berturutan, D = jarak dari punca ke skrin."
        ],
        explanation: "Tanjung dan teluk di tepi pantai: Di teluk, gelombang air mencapah (pembelauan) dan tenaganya tersebar, menjadikan kawasan air di teluk tenang dan sesuai untuk aktiviti rekreasi."
      },
      {
        subtopic: "5.3 Spektrum Gelombang Elektromagnet",
        verbatim: [
          "CIRI-CIRI GELOMBANG ELEKTROMAGNET (EM):",
          "- Terdiri daripada ayunan medan elektrik dan medan magnet yang berserenjang antara satu sama lain.",
          "- Merupakan gelombang melintang.",
          "- Boleh merambat melalui VAKUM dengan kelajuan cahaya c = 3.0 × 10⁸ m s⁻¹.",
          "SUSUNAN SPEKTRUM EM (Frekuensi f menaik, Panjang gelombang λ menurun):",
          "1. Gelombang Radio: Frekuensi terendah, λ paling panjang. (Penyiaran radio dan TV).",
          "2. Gelombang Mikro: Komunikasi satelit, telefon bimbit, radar, ketuhar gelombang mikro.",
          "3. Sinaran Inframerah: Alat kawalan jauh TV, kamera pengimejan terma malam.",
          "4. Cahaya Nampak: Warna pelangi (Merah -> Jingga -> Kuning -> Hijau -> Biru -> Indigo -> Ungu).",
          "5. Sinaran Ultraungu (UV): Pemandulan kuman, pengesanan wang kertas palsu, sintesis vitamin D.",
          "6. Sinar-X: Radiografi perubatan memeriksa patah tulang, imbasan beg bagasi lapangan terbang.",
          "7. Sinar Gama: Frekuensi tertinggi, tenaga paling tinggi. Membunuh sel kanser (radioterapi), pemandulan makanan."
        ],
        explanation: "Gelombang elektromagnet tidak memerlukan medium jirim untuk merambat, membolehkan cahaya matahari dan isyarat radio dari kapal angkasa sampai ke Bumi merentasi ruang angkasa vakum."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Kira Laju Gelombang Menggunakan v = fλ",
        detail: "Kenal pasti nilai frekuensi f (Hz) dan panjang gelombang λ (m). Darabkan kedua-duanya untuk mendapatkan laju gelombang v dalam m s⁻¹.",
        tip: "Jika diberi graf sesaran-jarak, jarak satu gelombang lengkap (puncak ke puncak) ialah λ. Jika graf sesaran-masa, jarak satu ayunan ialah tempoh T, maka f = 1/T."
      },
      {
        step: "Langkah 2",
        title: "Hafal Perubahan Sifat Semasa Pembiasan Air",
        detail: "Kawasan dalam ke cetek: Laju v turun, panjang gelombang λ turun, bengkok ke arah normal. Frekuensi f sentiasa MALAR.",
        tip: "Ingat prinsip: Frekuensi gelombang hanya ditentukan oleh punca getaran asal, jadi f tidak pernah berubah semasa pembiasan."
      },
      {
        step: "Langkah 3",
        title: "Gunakan Formula Interferens Gelombang λ = ax / D",
        detail: "Susun pemboleh ubah: a = jarak celah, x = jarak pemisahan antinod, D = jarak ke skrin. Jika x bertambah, bermakna corak interferens semakin renggang.",
        tip: "Untuk menjadikan corak jalur interferens lebih jelas dan renggang (x bertambah): kurangkan jarak a, atau tambahkan jarak D, atau gunakan gelombang dengan λ lebih panjang."
      },
      {
        step: "Langkah 4",
        title: "Hafal Urutan Spektrum Gelombang Elektromagnet",
        detail: "Gunakan mnemonik: 'R-M-I-N-U-X-G' -> Radio, Mikro, Inframerah, Nampak, UV, X-ray, Gama.",
        tip: "Dari Radio ke Gama: Frekuensi f dan tenaga bertambah, tetapi panjang gelombang λ berkurang."
      }
    ],
    keypoints: [
      { badge: "FORMULA", term: "v = fλ", meaning: "Persamaan gelombang mengaitkan laju gelombang (v) dengan frekuensi (f) dan panjang gelombang (λ)." },
      { badge: "AMPLITUD", term: "Resonans", meaning: "Ayunan sistem pada frekuensi asli dengan amplitud maksimum akibat pemindahan tenaga optimum dari luar." },
      { badge: "INTERFERENS", term: "λ = ax / D", meaning: "Formula Young untuk menentukan panjang gelombang cahaya atau gelombang air melalui corak interferens." },
      { badge: "PEMBIASAN", term: "Kawasan Dalam vs Cetek", meaning: "Gelombang air merambat lebih laju di kawasan dalam berbanding kawasan cetek (v_dalam > v_cetek)." },
      { badge: "SPEKTRUM", term: "Kelajuan Gelombang EM", meaning: "Semua 7 gelombang elektromagnet bergerak pada kelajuan cahaya yang sama iaitu c = 3.0 × 10⁸ m s⁻¹ dalam vakum." }
    ],
    questions: [
      {
        q: "Satu sumber gelombang bergetar dengan frekuensi 50 Hz dan menghasilkan gelombang dengan panjang gelombang 0.4 meter. Berapakah laju perambatan gelombang tersebut?",
        options: ["12.5 m s⁻¹", "20.0 m s⁻¹", "50.4 m s⁻¹", "125.0 m s⁻¹"],
        answer: 1,
        explanation: "Gunakan formula v = f × λ = 50 Hz × 0.4 m = 20.0 m s⁻¹."
      },
      {
        q: "Gelombang air merambat dari kawasan air dalam ke kawasan air cetek. Antara kuantiti fizik berikut, yang manakah TIDAK BERUBAH?",
        options: ["Panjang gelombang", "Halaju gelombang", "Frekuensi gelombang", "Arah perambatan gelombang"],
        answer: 2,
        explanation: "Frekuensi gelombang ditentukan secara mutlak oleh punca getaran asal dan tidak berubah apabila medium perambatan berubah."
      },
      {
        q: "Dalam eksperimen dwi-celah Young menggunakan cahaya merah, jarak antara dua pinggir cerah berturutan ialah x. Apakah yang akan berlaku kepada nilai x jika cahaya merah digantikan dengan cahaya biru?",
        options: [
          "Nilai x berkurang kerana cahaya biru mempunyai panjang gelombang lebih pendek",
          "Nilai x bertambah kerana cahaya biru mempunyai frekuensi lebih rendah",
          "Nilai x tidak berubah",
          "Corak interferens hilang sepenuhnya"
        ],
        answer: 0,
        explanation: "Berdasarkan formula x = λD / a: Panjang gelombang cahaya biru (λ_biru) adalah lebih pendek daripada cahaya merah (λ_merah), maka pemisahan pinggir x akan berkurang."
      },
      {
        q: "Antara gelombang elektromagnet berikut, yang manakah mempunyai frekuensi paling tinggi dan kuasa penembusan paling besar?",
        options: ["Gelombang Mikro", "Sinaran Inframerah", "Sinaran Ultraungu", "Sinar Gama"],
        answer: 3,
        explanation: "Sinar gama mempunyai frekuensi tertinggi dan panjang gelombang terpendek dalam spektrum elektromagnet, memberikannya tenaga foton tertinggi."
      },
      {
        q: "Fenomena pembelauan gelombang air yang melalui suatu celah menjadi paling ketara apabila:",
        options: [
          "Lebar celah adalah jauh lebih besar daripada panjang gelombang",
          "Lebar celah adalah hampir sama atau lebih kecil daripada panjang gelombang",
          "Amplitud gelombang dikurangkan kepada sifar",
          "Gelombang merambat melalui kawasan yang sangat dalam"
        ],
        answer: 1,
        explanation: "Pembelauan ketara (penyebaran membulat) berlaku apabila saiz bukaan celah adalah lebih kecil daripada atau sama dengan panjang gelombang (a ≤ λ)."
      }
    ],
    struktur: [
      {
        q: "Satu eksperimen interferens gelombang bunyi dijalankan menggunakan dua pembesar suara koheren yang dipisahkan pada jarak a = 1.5 m. Seorang murid berjalan pada jarak tegak D = 6.0 m selari dengan pembesar suara dan mendengar bunyi kuat yang berturutan pada jarak pemisahan x = 1.4 m.\n(a) Apakah yang dimaksudkan dengan dua punca gelombang koheren?\n(b) Hitungkan panjang gelombang bagi gelombang bunyi tersebut menggunakan formula λ = ax / D.\n(c) Jika laju bunyi di udara ialah 340 m s⁻¹, hitungkan frekuensi bunyi yang dihasilkan oleh pembesar suara tersebut.\n(d) Terangkan mengapa murid mendengar bunyi kuat pada kedudukan antinod.",
        skema: [
          "(a) Dua punca gelombang yang mempunyai frekuensi yang sama dan beza fasa yang tetap.",
          "(b) λ = (a × x) / D\nλ = (1.5 m × 1.4 m) / 6.0 m = 2.1 / 6.0 = 0.35 meter.",
          "(c) v = f × λ  =>  f = v / λ\nf = 340 m s⁻¹ / 0.35 m = 971.4 Hz.",
          "(d) Pada kedudukan antinod, berlaku interferens membina (konstruktif). Dua gelombang bunyi yang tiba berada dalam fasa yang sama (puncak bertemu puncak / mampatan bertemu mampatan), menyebabkan superposisi gelombang menghasilkan gelombang paduan dengan amplitud maksimum yang didengar sebagai bunyi kuat."
        ]
      }
    ]
  },
  {
    id: "fizik-bab6",
    babNum: "BAB 6",
    title: "CAHAYA DAN OPTIK",
    icon: "🔭",
    anyflipPages: "Buku Teks Fizik Tingkatan 4 (Halaman 234 – 283)",
    synopsis: "Menguasai hukum pembiasan cahaya (Hukum Snell n1 sin θ1 = n2 sin θ2), indeks biasan (n = c/v = sin i / sin r = H/h), pantulan dalam penuh & sudut genting (sin c = 1/n), pembentukan imej kanta cembung & kanta cekung, formula kanta nipis (1/f = 1/u + 1/v), pembesaran linear (m = v/u), teleskop, mikroskop, dan cermin sfera.",
    notes: [
      {
        subtopic: "6.1 Pembiasan Cahaya & Indeks Biasan (n)",
        verbatim: [
          "HUKUM PEMBIASAN CAHAYA (HUKUM SNELL):",
          "1. Sinar tuju, sinar biasan dan garis normal pada titik tuju berada dalam satah yang sama.",
          "2. Nilai n₁ sin θ₁ = n₂ sin θ₂ adalah malar.",
          "DEFINISI INDEKS BIASAN (n):",
          "- Ukuran darjah pembengkokan sinar cahaya apabila merambat dari vakum/udara ke dalam suatu medium.",
          "4 FORMULA INDEKS BIASAN (n):",
          "1. Melalui Hukum Snell: n = sin i / sin r  (i dalam medium kurang tumpat/udara, r dalam medium lebih tumpat).",
          "2. Melalui Kelajuan Cahaya: n = c / v  (c = 3.0 × 10⁸ m s⁻¹ dalam vakum, v = kelajuan cahaya dalam medium).",
          "3. Melalui Dalam Nyata & Dalam Ketara: n = H / h  (H = dalam nyata, h = dalam ketara).",
          "4. Melalui Sudut Genting: n = 1 / sin c  (c = sudut genting medium).",
          "*Indeks biasan n TIDAK mempunyai unit dan nilainya sentiasa n ≥ 1.0."
        ],
        explanation: "Contoh: Ikan di dalam kolam air kelihatan lebih cetek daripada kedudukan sebenarnya kerana sinar cahaya dari ikan terbias menjauhi garis normal apabila keluar dari air (lebih tumpat) ke udara (kurang tumpat)."
      },
      {
        subtopic: "6.2 Pantulan Dalam Penuh & Sudut Genting (c)",
        verbatim: [
          "SUDUT GENTING (c):",
          "Sudut tuju dalam medium yang lebih tumpat optik apabila sudut biasan dalam medium kurang tumpat adalah bersamaan dengan 90°.",
          "FORMULA: sin c = 1 / n",
          "2 SYARAT BERLAKUNYA PANTULAN DALAM PENUH:",
          "1. Sinar cahaya mesti merambat dari medium LEBIH TUMPAT OPTIK ke medium KURANG TUMPAT OPTIK (cth: dari kaca ke udara, atau dari air ke udara).",
          "2. Sudut tuju (i) mesti LEBIH BESAR daripada sudut genting medium tersebut (i > c).",
          "APLIKASI PANTULAN DALAM PENUH:",
          "- Gentian Optik: Digunakan dalam kabel telekomunikasi berkelajuan tinggi dan endoskop perubatan (teras dalam berindeks biasan lebih tinggi disaluti pembalut berindeks biasan rendah).",
          "- Prisma Periskop & Binokular: Prisma kaca 45°-90°-45° (sudut genting kaca c = 42°) memantulkan cahaya 90° atau 180° tanpa kehilangan keamatan cahaya.",
          "- Kilauan Berlian: Berlian mempunyai indeks biasan sangat tinggi (n = 2.42) dan sudut genting sangat kecil (c = 24.4°), menyebabkan cahaya mengalami pantulan dalam penuh berkali-kali sebelum keluar.",
          "- Logamaya (Mirage): Fenomena optik di jalan raya panas akibat pembiasan berterusan dan pantulan dalam penuh lapisan udara berketumpatan berbeza."
        ],
        explanation: "Kelebihan prisma berbanding cermin satah: Prisma menghasilkan imej yang lebih cerah dan tiada pembentukan imej berganda (multiple reflections)."
      },
      {
        subtopic: "6.3 Kanta Cembung, Kanta Cekung & Formula Kanta Nipis",
        verbatim: [
          "2 JENIS KANTA NIPIS:",
          "1. Kanta Cembung (Kanta Penumpu): Bahagian tengah lebih tebal daripada bahagian tepi. Menumpukan sinar cahaya selari pada titik fokus F. Panjang fokus f POSITIF (+).",
          "2. Kanta Cekung (Kanta Pencapah): Bahagian tengah lebih nipis daripada bahagian tepi. Mencapahkan sinar cahaya seolah-olah berasal dari titik fokus F di belakang kanta. Panjang fokus f NEGATIF (-).",
          "FORMULA KANTA NIPIS: 1/f = 1/u + 1/v",
          "- f = Panjang fokus kanta (+ cembung, - cekung)",
          "- u = Jarak objek dari pusat optik kanta (sentiasa + untuk objek nyata)",
          "- v = Jarak imej dari pusat optik kanta (+ imej nyata songsang di belakang kanta, - imej maya tegak di hadapan kanta)",
          "FORMULA PEMBESARAN LINEAR (m):",
          "m = v / u = hᵢ / hₒ  (hᵢ = tinggi imej, hₒ = tinggi objek).",
          "6 KES IMEJ KANTA CEMBUNG (f):",
          "- u > 2f: Nyata, songsang, mengecil (Kamera digital, mata manusia).",
          "- u = 2f: Nyata, songsang, sama saiz (Mesin fotokopi).",
          "- f < u < 2f: Nyata, songsang, membesar (Projektor slaid).",
          "- u = f: Maya, tegak, di infiniti (Lampu sorot).",
          "- u < f: Maya, tegak, membesar (Kanta pembesar, cermin mikroskop)."
        ],
        explanation: "Kanta cekung sentiasa membentuk imej yang sama sifat untuk sebarang kedudukan objek: MAYA, TEGAK, dan MENGECIL."
      },
      {
        subtopic: "6.4 Peralatan Optik: Teleskop Astronomi & Mikroskop Majmuk",
        verbatim: [
          "1. TELESKOP ASTRONOMI (Melihat objek jauh di angkasa):",
          "- Terdiri daripada DUA kanta cembung: Kanta Objek (fₒ panjang) dan Kanta Mata (fₑ pendek).",
          "- Syarat reka bentuk: fₒ > fₑ.",
          "- Pelarasan Normal: Jarak pemisahan antara dua kanta L = fₒ + fₑ.",
          "- Pembesaran Teleskop: M = fₒ / fₑ.",
          "- Sifat imej akhir: Maya, songsang, membesar pada infiniti.",
          "2. MIKROSKOP MAJMUK (Melihat objek seni mikroskopik):",
          "- Terdiri daripada DUA kanta cembung dengan panjang fokus sangat pendek.",
          "- Syarat reka bentuk: fₒ < fₑ.",
          "- Kedudukan objek: Diletakkan pada fₒ < u < 2fₒ untuk menghasilkan imej pertama yang nyata, songsang dan membesar.",
          "- Jarak pemisahan antara kanta: L > fₒ + fₑ.",
          "- Sifat imej akhir: Maya, songsang, sangat membesar."
        ],
        explanation: "Dalam teleskop, kanta objek mempunyai diameter bukaan yang besar untuk mengumpul sebanyak mungkin cahaya daripada bintang malap di angkasa."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Selesaikan Masalah Kanta Menggunakan 1/f = 1/u + 1/v",
        detail: "Tulis tanda konvensyen dengan betul: Kanta cembung f = (+), Kanta cekung f = (-). Imej nyata v = (+), Imej maya v = (-). Cari nilai yang tidak diketahui.",
        tip: "Sentiasa semak unit: Jika f dan u dalam cm, jawapan v juga mesti dalam cm."
      },
      {
        step: "Langkah 2",
        title: "Kira Indeks Biasan daripada Sudut Genting n = 1 / sin c",
        detail: "Tekan kalkulator: sin c = 1 / n  =>  c = sin⁻¹(1 / n). Contoh Kaca n = 1.50 -> sin c = 1 / 1.50 = 0.6667 -> c = 41.8° ≈ 42°.",
        tip: "Jika sudut tuju i melebihi 42° dalam kaca, pantulan dalam penuh berlaku (tiada sinar terbias keluar ke udara)."
      },
      {
        step: "Langkah 3",
        title: "Lukis 3 Sinar Utama Gambar Rajah Sinar Kanta",
        detail: "Sinar 1: Selari dengan paksi utama, terbias melalui titik fokus F. Sinar 2: Melalui pusat optik O secara lurus tanpa terbias. Sinar 3: Melalui titik fokus F, terbias selari dengan paksi utama.",
        tip: "Titik persilangan ketiga-tiga garis sinar ialah kedudukan kepala imej."
      },
      {
        step: "Langkah 4",
        title: "Bezakan Susunan Kanta Teleskop vs Mikroskop",
        detail: "Teleskop: Kanta objek berfokus panjang fₒ > fₑ, jarak kanta L = fₒ + fₑ. Mikroskop: Kanta objek berfokus pendek fₒ < fₑ, jarak kanta L > fₒ + fₑ.",
        tip: "Ingat rumus pembesaran teleskop astronomi: M = fₒ / fₑ."
      }
    ],
    keypoints: [
      { badge: "HUKUM SNELL", term: "n = sin i / sin r", meaning: "Nisbah sinus sudut tuju kepada sinus sudut biasan adalah malar dan bersamaan indeks biasan medium." },
      { badge: "PANTULAN PENUH", term: "Sudut Genting (c)", meaning: "sin c = 1 / n; sudut tuju dalam medium lebih tumpat apabila sudut biasan r = 90°." },
      { badge: "KANTA NIPIS", term: "1/f = 1/u + 1/v", meaning: "Formula kanta optik mengaitkan panjang fokus f, jarak objek u, dan jarak imej v." },
      { badge: "PEMBESARAN", term: "m = v / u", meaning: "Nisbah jarak imej kepada jarak objek atau nisbah ketinggian imej kepada ketinggian objek." },
      { badge: "TELESKOP", term: "Pelarasan Normal", meaning: "Jarak pemisahan antara kanta objek dan kanta mata teleskop tepat bersamaan L = fₒ + fₑ." }
    ],
    questions: [
      {
        q: "Satu sinar cahaya merambat dari udara ke dalam blok kaca dengan sudut tuju 30°. Jika indeks biasan kaca ialah 1.50, berapakah sudut biasan cahaya dalam kaca tersebut?",
        options: ["19.5°", "28.1°", "45.0°", "48.6°"],
        answer: 0,
        explanation: "Gunakan n = sin i / sin r => 1.50 = sin 30° / sin r => sin r = 0.50 / 1.50 = 0.3333 => r = sin⁻¹(0.3333) = 19.47° ≈ 19.5°."
      },
      {
        q: "Satu objek diletakkan pada jarak 15 cm di hadapan sebuah kanta cembung yang mempunyai panjang fokus 10 cm. Apakah ciri-ciri imej yang terbentuk?",
        options: [
          "Maya, tegak, mengecil",
          "Nyata, songsang, membesar",
          "Nyata, songsang, mengecil",
          "Maya, tegak, membesar"
        ],
        answer: 1,
        explanation: "Diberi f = 10 cm, 2f = 20 cm. Kedudukan objek u = 15 cm berada di antara f dan 2f (f < u < 2f). Sifat imej bagi kes ini ialah nyata, songsang, dan membesar."
      },
      {
        q: "Indeks biasan bagi intan berlian ialah 2.42. Berapakah sudut genting bagi intan berlian tersebut?",
        options: ["24.4°", "30.0°", "42.0°", "48.8°"],
        answer: 0,
        explanation: "sin c = 1 / n = 1 / 2.42 = 0.4132 => c = sin⁻¹(0.4132) = 24.41° ≈ 24.4°."
      },
      {
        q: "Sebuah kanta pembesar menggunakan kanta cembung dengan panjang fokus f = 5 cm. Di manakah kedudukan objek yang mesti diletakkan supaya kanta tersebut berfungsi sebagai kanta pembesar?",
        options: ["u < 5 cm", "u = 5 cm", "5 cm < u < 10 cm", "u > 10 cm"],
        answer: 0,
        explanation: "Kanta pembesar memerlukan imej yang maya, tegak, dan diperbesarkan. Ini hanya tercapai apabila objek diletakkan di dalam panjang fokus kanta, iaitu u < f (u < 5 cm)."
      },
      {
        q: "Sebuah teleskop astronomi dalam pelarasan normal menggunakan kanta objek berpanjang fokus 80 cm dan kanta mata berpanjang fokus 5 cm. Berapakah jarak pemisahan antara kedua-dua kanta tersebut dan kuasa pembesarannya?",
        options: [
          "Jarak = 85 cm, Pembesaran = 16 kali",
          "Jarak = 75 cm, Pembesaran = 16 kali",
          "Jarak = 85 cm, Pembesaran = 400 kali",
          "Jarak = 400 cm, Pembesaran = 16 kali"
        ],
        answer: 0,
        explanation: "Jarak kanta L = fₒ + fₑ = 80 cm + 5 cm = 85 cm. Pembesaran M = fₒ / fₑ = 80 / 5 = 16 kali."
      }
    ],
    struktur: [
      {
        q: "Satu objek setinggi 4.0 cm diletakkan pada jarak u = 30.0 cm di hadapan sebuah kanta cembung dengan panjang fokus f = 20.0 cm.\n(a) Nyatakan definisi panjang fokus bagi kanta cembung.\n(b) Hitungkan jarak imej, v menggunakan formula kanta nipis 1/f = 1/u + 1/v.\n(c) Hitungkan pembesaran linear, m dan ketinggian imej yang terhasil.\n(d) Nyatakan TIGA ciri imej yang terbentuk.",
        skema: [
          "(a) Jarak antara pusat optik kanta dengan titik fokus F kanta di mana sinar-sinar selari dengan paksi utama ditumpukan.",
          "(b) 1/f = 1/u + 1/v\n1/20 = 1/30 + 1/v\n1/v = 1/20 - 1/30 = (3 - 2) / 60 = 1/60\nv = +60.0 cm.\nJarak imej ialah 60.0 cm di belakang kanta.",
          "(c) Pembesaran linear m = v / u = 60.0 / 30.0 = 2.0 kali.\nTinggi imej hᵢ = m × hₒ = 2.0 × 4.0 cm = 8.0 cm.",
          "(d) Tiga ciri imej: Nyata, Songsang, dan Membesar (Diperbesarkan)."
        ]
      }
    ]
  }
];
