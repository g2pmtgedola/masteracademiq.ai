/* ==========================================================================
   DATA-KIMIA.JS — 100% BAHAN BUKU TEKS KIMIA TINGKATAN 4 KSSM
   Sumber Rujukan: https://online.anyflip.com/dsfoh/vsrg/mobile/index.html
   Penerbit: Kementerian Pendidikan Malaysia (KPM)
   LENGKAP DENGAN NOTA, PERSAMAAN KIMIA, JALAN KIRA MOL & SKEMA LENGKAP
   ========================================================================== */

const KIMIA_DATA = [
  {
    id: "kimia-bab1",
    babNum: "BAB 1",
    title: "PENGENALAN KEPADA KIMIA",
    icon: "⚗️",
    anyflipPages: "Buku Teks Kimia Tingkatan 4 (Halaman 2 – 21)",
    synopsis: "Meneroka maksud kimia, perkembangan dan sumbangannya dalam industri makanan, perubatan, dan pertanian, kaedah penyiasatan saintifik, serta pengurusan dan pengendalian radas dan bahan kimia di makmal secara selamat.",
    notes: [
      {
        subtopic: "1.1 Perkembangan Bidang Kimia dan Kepentingan dalam Kehidupan",
        verbatim: [
          "DEFINISI KIMIA: Bidang sains yang mengkaji struktur, sifat, komposisi dan interaksi antara jirim.",
          "BAHAN KIMIA LAZIM DALAM KEHIDUPAN:",
          "1. Makanan: Pengawet (natrium benzoat), perisa (mononatrium glutamat / MSG), pewarna (tartrazina), antioksidan (asid askorbik).",
          "2. Perubatan: Antibiotik (penisilin), analgesik (parasetamol, aspirin), antiseptik (alkohol isopropil, iodin).",
          "3. Pertanian: Baja kimia (urea, ammonium nitrat), racun perosak (insektisida, herbisida).",
          "4. Industri: Polimer sintetik (plastik polietilena), cat, detergen, aloi keluli.",
          "KERJAYA DALAM KIMIA: Ahli kimia, jurutera kimia, ahli farmasi, saintis forensik, ahli biokimia, pakar nutrisi."
        ],
        explanation: "Kimia berasal daripada perkataan Arab 'al-kimiya'. Memahami interaksi zarah membolehkan manusia mencipta bahan baharu seperti bateri ion litium dan bahan biodegradasi."
      },
      {
        subtopic: "1.2 Penyiasatan Saintifik dalam Kimia",
        verbatim: [
          "LANGKAH DALAM KAEDAH SAINTIFIK:",
          "1. Membuat pemerhatian: Mengumpul maklumat menggunakan deria atau alat pengukuran.",
          "2. Membuat inferens: Kesimpulan awal yang munasabah untuk menerangkan pemerhatian.",
          "3. Mengenal pasti masalah: Mengemukakan soalan saintifik yang boleh diuji.",
          "4. Membuat hipotesis: Pernyataan umum tentang hubungan antara pemboleh ubah dimanipulasi dan pemboleh ubah bergerak balas.",
          "5. Mengenal pasti pemboleh ubah: Dimanipulasi (diubah), bergerak balas (diperhatikan/diukur), dimalarkan (ditetapkan).",
          "6. Mengawal pemboleh ubah dan merancang eksperimen.",
          "7. Mengumpul, mentafsir data, dan membuat kesimpulan."
        ],
        explanation: "Hipotesis mestilah boleh diuji melalui eksperimen terkawal di mana hanya satu pemboleh ubah dimanipulasikan pada satu masa."
      },
      {
        subtopic: "1.3 Pengurusan & Keselamatan di Makmal Kimia",
        verbatim: [
          "ALAT PERLINDUNGAN DIRI: Gogal (melindungi mata), topeng muka, sarung tangan nitril/getah, baju makmal, kasut bertutup.",
          "RADAS KESELAMATAN KHAS:",
          "- Kebuk wasap (Fume chamber): Menjalankan eksperimen yang membebaskan gas beracun, meruap atau menghakis (cth: gas klorin, nitrogen dioksida).",
          "- Pancuran kecemasan (Safety shower): Membilas bahan kimia yang tertumpah pada badan.",
          "- Pembasuh mata (Eyewash station): Membilas mata yang terkena percikan bahan kimia.",
          "PENGURUSAN SISA KIMIA:",
          "- Kategori A (Sisa tajam): Picagari, jarum, bilah skalpel dimasukkan ke dalam bekas sisa tajam khas.",
          "- Kategori B (Sisa tidak tajam): Sarung tangan, kertas turas dibungkus dalam beg plastik biobahaya.",
          "- Kategori C (Bangkai/organ): Dibalut dan disejukbekukan.",
          "- Kategori D (Sisa cecair organik/pelarut): Dikumpulkan dalam botol sisa berlabel khas mengikut jenis pelarut.",
          "PROSEDUR TUMPAHAN MERKURI:",
          "1. Maklumkan kepada guru/pembantu makmal serta-merta.",
          "2. Jadikan kawasan tumpahan kawasan larangan.",
          "3. Tabur serbuk sulfur untuk menutup tumpahan merkuri (merkuri bertindak balas dengan sulfur membentuk merkuri(II) sulfida yang tidak meruap).",
          "4. Hubungi pihak bomba untuk tindakan pelupusan lanjut."
        ],
        explanation: "Wap merkuri sangat toksik dan boleh merosakkan sistem saraf. Serbuk sulfur menyerap merkuri dan menghalang pembauran gas toksik ke udara."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Kenal Pasti Simbol Bahaya Bahan Kimia",
        detail: "Semak label botol reagen sebelum digunakan: Menghakis (asid/alkali pekat), Toksik (merkuri, sianida), Mudah terbakar (etanol, aseton), Merengsa (ammonia), dan Mengoksida (kalium manganat(VII)).",
        tip: "Sentiasa baca label botol reagen sekurang-kurangnya dua kali sebelum menuang cecair."
      },
      {
        step: "Langkah 2",
        title: "Gunakan Kebuk Wasap untuk Bahan Meruap",
        detail: "Nyalakan suis pengekstrak kebuk wasap, laraskan tingkap kaca pada ketinggian dada, dan kendalikan bromin pekat atau asid nitrik di bahagian dalam kebuk.",
        tip: "Jangan sekali-kali menghidu gas secara langsung dari mulut tabung uji; halakan wap secara melayang dengan tapak tangan (wafting)."
      },
      {
        step: "Langkah 3",
        title: "Prosedur Kecemasan Percikan Bahan Kimia",
        detail: "Sekiranya terkena kulit, basuh segera di bawah aliran air paip selama sekurang-kurangnya 15 minit. Jika terkena mata, gunakan pembasuh mata dengan kelopak mata dibuka luas.",
        tip: "Tanggalkan pakaian makmal yang tercemar semasa berada di bawah pancuran kecemasan."
      },
      {
        step: "Langkah 4",
        title: "Pelupusan Sisa Kimia Mengikut Kategori",
        detail: "Asid dan alkali cair dineutralkan sebelum dialirkan ke dalam sinki dengan air mengalir deras. Logam berat dan pelarut organik wajib dibuang ke dalam botol sisa berasingan.",
        tip: "Jangan sekali-kali menuang pelarut organik mudah terbakar ke dalam sinki makmal."
      }
    ],
    keypoints: [
      { badge: "ISTILAH WAJIB", term: "Kimia", meaning: "Bidang sains yang mengkaji struktur, sifat, komposisi dan interaksi antara jirim." },
      { badge: "ALAT KHAS", term: "Kebuk Wasap", meaning: "Alat makmal berventilasi khas untuk menjalankan eksperimen yang membebaskan gas beracun, meruap atau menghakis." },
      { badge: "KECEMASAN", term: "Tumpahan Merkuri", meaning: "Perlu ditaburi serbuk sulfur dengan serta-merta untuk membentuk sebatian tidak meruap sebelum dibersihkan oleh pihak bomba." },
      { badge: "KATEGORI SISA", term: "Sisa Kategori A", meaning: "Sisa bahan tajam seperti picagari, jarum, dan kaca pecah yang mesti dilupuskan dalam bekas khas tahan tebuk." },
      { badge: "PROSEDUR", term: "Kaedah Saintifik", meaning: "Kaedah sistematik menyelesaikan masalah merangkumi pemerhatian, hipotesis, kawalan pemboleh ubah, eksperimen dan kesimpulan." }
    ],
    questions: [
      {
        q: "Antara bahan kimia berikut, yang manakah digunakan sebagai bahan pengawet dalam industri pemprosesan makanan?",
        options: ["Natrium benzoat", "Tartrazina", "Mononatrium glutamat", "Asid askorbik"],
        answer: 0,
        explanation: "Natrium benzoat ialah bahan pengawet yang menghalang pertumbuhan bakteria dan kulat dalam makanan bertin dan sos."
      },
      {
        q: "Sekiranya berlaku tumpahan merkuri daripada termometer yang pecah di atas meja makmal, apakah tindakan awal yang paling tepat?",
        options: [
          "Membasuh meja dengan air sabun dan mop lantai",
          "Menabur serbuk sulfur ke atas tumpahan merkuri serta-merta",
          "Menyedut titisan merkuri menggunakan picagari plastik",
          "Memanaskan kawasan tumpahan supaya merkuri tersejat keluar"
        ],
        answer: 1,
        explanation: "Serbuk sulfur bertindak balas dengan merkuri membentuk merkuri(II) sulfida pepejal, menghalang merkuri daripada meruap menjadi gas toksik."
      },
      {
        q: "Eksperimen yang melibatkan pembebasan gas klorin atau gas bromin pekat mesti dijalankan di dalam:",
        options: ["Pancuran kecemasan", "Kebuk wasap", "Ketuhar makmal", "Bilik gelap"],
        answer: 1,
        explanation: "Kebuk wasap dilengkapi dengan kipas penyedut udara khas untuk menyerap dan menyingkirkan gas beracun dan menghakis ke luar makmal secara selamat."
      },
      {
        q: "Seorang murid ingin mengkaji kesan luas permukaan marmar terhadap kadar tindak balas dengan asid hidroklorik. Apakah pemboleh ubah dimanipulasikan?",
        options: ["Isi padu asid hidroklorik", "Saiz ketulan marmar", "Masa tindak balas", "Suhu bilik"],
        answer: 1,
        explanation: "Saiz ketulan marmar (ketulan besar vs serbuk hancur) diubah secara sengaja, maka ia merupakan pemboleh ubah dimanipulasi."
      },
      {
        q: "Antara berikut, manakah kerjaya yang mengaplikasikan pengetahuan kimia secara langsung?",
        options: ["Ahli Geologi", "Ahli Farmasi", "Jurutera Sivil", "Arkitek Landskap"],
        answer: 1,
        explanation: "Ahli farmasi mengkaji struktur kimia ubat-ubatan, interaksi kimia ubat dengan reseptor badan, dan dos sintesis ubat."
      }
    ],
    struktur: [
      {
        q: "Seorang murid sedang memanaskan serbuk plumbum(II) nitrat dalam tabung uji dan terhidu gas perang beracun nitrogen dioksida yang terbebas. Terangkan DUA langkah keselamatan yang wajar diambil semasa menjalankan eksperimen ini dan SATU tindakan kecemasan jika murid mengalami sesak nafas.",
        skema: [
          "Langkah keselamatan 1: Eksperimen pemanasan plumbum(II) nitrat mesti dijalankan di dalam kebuk wasap (fume chamber) yang berfungsi.",
          "Langkah keselamatan 2: Murid perlu memakai gogal keselamatan dan topeng muka khas penapis gas serta menghalakan mulut tabung uji menjauhi diri dan rakan.",
          "Tindakan kecemasan: Bawa murid yang terhidu gas ke kawasan lapang dengan udara segar serta-merta, longgarkan pakaian yang ketat, dan dapatkan rawatan perubatan kecemasan."
        ]
      }
    ]
  },
  {
    id: "kimia-bab2",
    babNum: "BAB 2",
    title: "JIRIM DAN STRUKTUR ATOM",
    icon: "⚛️",
    anyflipPages: "Buku Teks Kimia Tingkatan 4 (Halaman 24 – 41)",
    synopsis: "Mengkaji teori kinetik jirim, perubahan keadaan jirim, lengkung pemanasan dan penyejukan (takat lebur dan beku), sejarah perkembangan model atom oleh 5 saintis terkemuka, struktur zarah subatom (p, n, e), serta isotop dan peranannya.",
    notes: [
      {
        subtopic: "2.1 Konsep Asas Jirim & Perubahan Keadaan Jirim",
        verbatim: [
          "DEFINISI JIRIM: Sebarang bahan yang mempunyai jisim dan memenuhi ruang.",
          "TEORI KINETIK JIRIM:",
          "- Jirim terdiri daripada zarah-zarah halus dan diskret.",
          "- Zarah-zarah sentiasa bergerak secara rawak dan berlanggar antara satu sama lain.",
          "PERBANDINGAN 3 KEADAAN JIRIM:",
          "1. Pepejal: Susunan sangat rapat, teratur padat, zarah bergetar dan berputar pada kedudukan tetap. Daya tarikan sangat kuat. Tenaga kinetik rendah.",
          "2. Cecair: Susunan rapat tetapi tidak teratur, zarah menggelongsor antara satu sama lain. Daya tarikan kuat tetapi lemah berbanding pepejal. Tenaga kinetik sederhana.",
          "3. Gas: Zarah berjauhan antara satu sama lain, rawak, bergerak bebas dengan kelajuan tinggi. Daya tarikan sangat lemah (hampir sifar). Tenaga kinetik sangat tinggi.",
          "LENGKUNG PEMANASAN:",
          "- Semasa takat lebur atau takat didih dicapai, suhu kekal malar (garis mendatar).",
          "- Sebab suhu malar: Tenaga haba yang diserap digunakan untuk mengatasi daya tarikan antara zarah sehingga keadaan jirim bertukar sepenuhnya (tiada kenaikan tenaga kinetik zarah).",
          "LENGKUNG PENYEJUKAN:",
          "- Semasa pembekuan atau kondensasi, suhu kekal malar.",
          "- Sebab suhu malar: Tenaga haba yang hilang ke persekitaran diimbangi tepat oleh tenaga haba yang dibebaskan apabila zarah-zarah tertarik antara satu sama lain."
        ],
        explanation: "Penyejukan lampau (supercooling) boleh berlaku jika cecair tidak dikacau berterusan semasa penyejukan, menyebabkan suhu turun di bawah takat beku sebelum naik semula ke takat beku sebenar."
      },
      {
        subtopic: "2.2 Perkembangan Sejarah Model Atom",
        verbatim: [
          "KRONOLOGI 5 MODEL ATOM:",
          "1. John Dalton (1805): Atom ialah bebola pejal kecil yang tidak boleh dibahagi, dicipta atau dimusnahkan.",
          "2. J.J. Thomson (1897): Menemui ELEKTRON (zarah bercas negatif). Model 'puding plum': Sfera bercas positif dengan elektron bertaburan di dalamnya.",
          "3. Ernest Rutherford (1911): Menemui PROTON dan NUKLEUS melalui eksperimen pembelauan zarah alfa ke atas kerajang emas. Nukleus kecil bercas positif berada di pusat atom, dikelilingi elektron.",
          "4. Niels Bohr (1913): Elektron bergerak mengelilingi nukleus dalam PETALA tertentu pada aras tenaga tetap.",
          "5. James Chadwick (1932): Menemui NEUTRON (zarah neutral dalam nukleus dengan jisim hampir sama dengan proton). Menyempurnakan model atom moden."
        ],
        explanation: "Model atom moden mengandungi nukleus padat (proton + neutron) di pusat atom dengan elektron mengorbit dalam petala-petala tenaga."
      },
      {
        subtopic: "2.3 Struktur Atom & Nombor Nukleon",
        verbatim: [
          "ZARAH SUBATOM: Proton (p, cas +1, jisim 1), Neutron (n, cas 0, jisim 1), Elektron (e, cas -1, jisim 1/1840).",
          "SIMBOL PERWAKILAN PIAWAI UNSUR: ᴬ_Z X",
          "- X = Simbol kimia unsur",
          "- Z = Nombor Proton (bilangan proton dalam nukleus atom)",
          "- A = Nombor Nukleon (jumlah bilangan proton dan neutron dalam nukleus = p + n)",
          "ATOM NEUTRAL: Bilangan elektron = Bilangan proton (Cas keseluruhan = 0).",
          "SUSUNAN ELEKTRON:",
          "- Petala pertama: Maksimum 2 elektron (susunan duplet).",
          "- Petala kedua: Maksimum 8 elektron (susunan oktet).",
          "- Petala ketiga: Maksimum 8 elektron (bagi 20 unsur pertama).",
          "- Elektron Valens: Bilangan elektron pada petala terluar sesuatu atom (menentukan sifat kimia unsur)."
        ],
        explanation: "Nombor proton ialah nombor pengenalan unik bagi setiap unsur kimia. Tiada dua unsur berbeza yang berkongsi nombor proton yang sama."
      },
      {
        subtopic: "2.4 Isotop & Pengiraannya",
        verbatim: [
          "DEFINISI ISOTOP: Atom-atom bagi unsur yang sama yang mempunyai bilangan proton yang sama tetapi bilangan neutron yang berbeza (nombor nukleon berbeza).",
          "SIFAT ISOTOP:",
          "- Sifat Kimia: SAMA (kerana mempunyai bilangan elektron valens yang sama).",
          "- Sifat Fizik: BERBEZA sedikit (seperti ketumpatan, takat lebur dan takat didih kerana jisimnya berbeza).",
          "FORMULA JISIM ATOM RELATIF ISOTOP:",
          "JAR = Σ (% kelimpahan semula jadi × Jisim isotop) / 100",
          "KEGUNAAN ISOTOP DALAM KEHIDUPAN:",
          "- Kobalt-60: Rawatan radioterapi membunuh sel kanser; pemandulan alatan perubatan.",
          "- Karbon-14: Pentarikhan radiokarbon untuk menganggar usia fosil dan artifak purba.",
          "- Iodin-131: Rawatan penyakit kelenjar tiroid (goiter).",
          "- Natrium-24: Mengesan kebocoran paip bawah tanah.",
          "- Fosforus-32: Mengkaji kadar penyerapan baja fosfat oleh tumbuhan.",
          "- Uranium-235: Bahan api penjanaan tenaga elektrik dalam reaktor nuklear."
        ],
        explanation: "Klorin wujud sebagai dua isotop semula jadi: Cl-35 (75%) dan Cl-37 (25%). JAR Klorin = [(75 × 35) + (25 × 37)] / 100 = 35.5."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Tentukan Bilangan Proton, Elektron dan Neutron",
        detail: "Daripada simbol ᴬ_Z X, Nombor Proton = Z, Bilangan Elektron (atom neutral) = Z, Bilangan Neutron = A - Z.",
        tip: "Sentiasa tolak Nombor Nukleon (atas) dengan Nombor Proton (bawah) untuk mendapat bilangan neutron: n = A - Z."
      },
      {
        step: "Langkah 2",
        title: "Tuliskan Susunan Elektron Atom",
        detail: "Isi elektron mengikut kapasiti petala: Petala 1 muat 2 elektron, Petala 2 muat 8 elektron, Petala 3 muat 8 elektron. Contoh Atom Natrium (Z = 11) -> 2.8.1.",
        tip: "Elektron pada petala paling luar ialah elektron valens (cth: 2.8.1 mempunyai 1 elektron valens)."
      },
      {
        step: "Langkah 3",
        title: "Tafsirkan Graf Lengkung Pemanasan / Penyejukan",
        detail: "Bahagian condong menunjukkan peningkatan/penurunan tenaga kinetik zarah (suhu berubah). Bahagian mendatar menunjukkan perubahan fasa keadaan jirim (suhu malar).",
        tip: "Semasa mendatar pada takat lebur, wujud campuran pepejal dan cecair serentak."
      },
      {
        step: "Langkah 4",
        title: "Kira Jisim Atom Relatif Isotop",
        detail: "Darabkan setiap peratus kelimpahan dengan nombor jisim isotopnya, jumlahkan hasil darab, kemudian bahagikan dengan 100.",
        tip: "Jawapan JAR bagi isotop biasanya bukan nombor bulat (contoh Klorin = 35.5, Kuprum = 63.5)."
      }
    ],
    keypoints: [
      { badge: "DEFINISI", term: "Isotop", meaning: "Atom-atom bagi unsur yang sama dengan bilangan proton sama tetapi bilangan neutron berbeza." },
      { badge: "ZARAH", term: "Neutron", meaning: "Zarah subatom neutral bercas sifar dalam nukleus yang ditemui oleh James Chadwick pada tahun 1932." },
      { badge: "SUHU MALAR", term: "Takat Lebur", meaning: "Suhu tetap di mana pepejal bertukar menjadi cecair pada tekanan atmosfera tertentu; haba diserap mengatasi daya antara zarah." },
      { badge: "PENENTU", term: "Elektron Valens", meaning: "Bilangan elektron di petala terluar atom yang menentukan sifat tindak balas kimia sesuatu unsur." },
      { badge: "PERUBATAN", term: "Kobalt-60", meaning: "Isotop radioaktif yang memancarkan sinar gama untuk membunuh sel kanser dalam radioterapi." }
    ],
    questions: [
      {
        q: "Siapakah saintis yang menemui zarah neutron yang bercas neutral di dalam nukleus atom?",
        options: ["John Dalton", "J.J. Thomson", "Ernest Rutherford", "James Chadwick"],
        answer: 3,
        explanation: "James Chadwick membuktikan kewujudan zarah neutron yang neutral dengan jisim hampir sama dengan proton pada tahun 1932."
      },
      {
        q: "Atom Magnesium mempunyai simbol ²⁴₁₂Mg. Berapakah bilangan proton, elektron, dan neutron dalam atom magnesium tersebut?",
        options: [
          "12 proton, 12 elektron, 12 neutron",
          "12 proton, 12 elektron, 24 neutron",
          "24 proton, 12 elektron, 12 neutron",
          "12 proton, 24 elektron, 12 neutron"
        ],
        answer: 0,
        explanation: "Nombor proton Z = 12 (maka proton = 12, elektron = 12). Bilangan neutron n = A - Z = 24 - 12 = 12."
      },
      {
        q: "Semasa pemanasan naftalena pepejal sehingga melebur menjadi cecair, mengapakah suhu kekal malar pada 80°C?",
        options: [
          "Tiada haba diserap oleh naftalena pada ketika itu",
          "Tenaga haba yang diserap digunakan untuk mengatasi daya tarikan antara molekul naftalena",
          "Zarah naftalena berhenti bergetar dan bergerak",
          "Haba hilang ke persekitaran pada kadar lebih cepat daripada penyerapan"
        ],
        answer: 1,
        explanation: "Pada takat lebur, tenaga haba diserap untuk memutuskan atau mengatasi daya tarikan antara zarah, jadi tiada kenaikan tenaga kinetik dan suhu kekal malar."
      },
      {
        q: "Unsur Kuprum wujud semula jadi sebagai dua isotop iaitu ⁶³Cu (kelimpahan 70%) dan ⁶⁵Cu (kelimpahan 30%). Apakah Jisim Atom Relatif bagi Kuprum?",
        options: ["63.0", "63.6", "64.0", "64.5"],
        answer: 1,
        explanation: "JAR = [(70 × 63) + (30 × 65)] / 100 = [4410 + 1950] / 100 = 6360 / 100 = 63.6."
      },
      {
        q: "Antara isotop berikut, yang manakah digunakan untuk menentukan usia fosil dan artifak purba arkeologi?",
        options: ["Iodin-131", "Kobalt-60", "Karbon-14", "Natrium-24"],
        answer: 2,
        explanation: "Karbon-14 mengalami pereputan radioaktif secara malar dan digunakan dalam teknik pentarikhan radiokarbon untuk mengukur usia fosil purba."
      }
    ],
    struktur: [
      {
        q: "Atom Klorin mempunyai nombor proton 17 dan nombor nukleon 35.\n(a) Tuliskan susunan elektron bagi atom klorin.\n(b) Nyatakan bilangan elektron valens dan ramalkan cas bagi ion klorida yang terbentuk.\n(c) Terangkan mengapa Klorin-35 dan Klorin-37 mempunyai sifat kimia yang sama tetapi takat didih yang berbeza.",
        skema: [
          "(a) Susunan elektron klorin: 2.8.7.",
          "(b) Bilangan elektron valens = 7. Cas ion klorida ialah -1 (ion Cl⁻) kerana atom klorin menerima 1 elektron untuk mencapai susunan elektron oktet yang stabil 2.8.8.",
          "(c) Sifat kimia adalah sama kerana kedua-dua isotop mempunyai susunan elektron dan bilangan elektron valens yang sama (iaitu 7). Sifat fizik seperti takat didih berbeza kerana Klorin-37 mempunyai jisim molekul yang lebih besar (lebih banyak neutron), menjadikan daya tarikan van der Waals antara molekulnya lebih kuat."
        ]
      }
    ]
  },
  {
    id: "kimia-bab3",
    babNum: "BAB 3",
    title: "KONSEP MOL, FORMULA DAN PERSAMAAN KIMIA",
    icon: "⚖️",
    anyflipPages: "Buku Teks Kimia Tingkatan 4 (Halaman 44 – 75)",
    synopsis: "Menguasai konsep teras stoikiometri kimia: Jisim Atom Relatif (JAR), Jisim Molekul Relatif (JMR), pemalar Avogadro NA, hubungan mol dengan jisim, bilangan zarah dan isi padu molar gas, formula empirik & molekul, serta imbangan persamaan kimia.",
    notes: [
      {
        subtopic: "3.1 Jisim Atom Relatif (JAR) & Jisim Molekul Relatif (JMR)",
        verbatim: [
          "PIAWAI JISIM ATOM: Karbon-12 dipilih sebagai piawai antarabangsa kerana merupakan pepejal yang stabil dan mudah dikendalikan.",
          "DEFINISI JAR: Jisim purata satu atom unsur berbanding dengan 1/12 kali jisim satu atom karbon-12.",
          "DEFINISI JMR: Jisim purata satu molekul sebatian berbanding dengan 1/12 kali jisim satu atom karbon-12.",
          "JMR / JISIM FORMULA RELATIF (JFR) = Hasil tambah JAR semua atom dalam satu formula sebatian.",
          "CONTOH PENGIRAAN JMR:",
          "- Air, H₂O: (2 × 1) + (1 × 16) = 18",
          "- Karbon dioksida, CO₂: (1 × 12) + (2 × 16) = 44",
          "- Kalsium karbonat, CaCO₃: (1 × 40) + (1 × 12) + (3 × 16) = 100",
          "- Kuprum(II) sulfat terhidrat, CuSO₄·5H₂O: 64 + 32 + (4 × 16) + 5(18) = 160 + 90 = 250"
        ],
        explanation: "Jisim Atom Relatif dan Jisim Molekul Relatif ialah nilai perbandingan nisbah, oleh itu kedua-duanya TIDAK MEMPUNYAI UNIT."
      },
      {
        subtopic: "3.2 Konsep Mol, Bilangan Zarah & Isi Padu Molar Gas",
        verbatim: [
          "DEFINISI MOL: Kuantiti bahan yang mengandungi bilangan zarah yang sama dengan bilangan atom dalam 12 g karbon-12.",
          "PEMALAR AVOGADRO (N_A): 6.02 × 10²³ mol⁻¹.",
          "RUMUS PENTING HUBUNGAN MOL (n):",
          "1. Hubungan dengan Bilangan Zarah: Bilangan Zarah = Bilangan Mol (n) × 6.02 × 10²³",
          "2. Hubungan dengan Jisim: Jisim (g) = Bilangan Mol (n) × Jisim Molar (g mol⁻¹)",
          "   *Jisim Molar mempunyai nilai berangka sama dengan JAR / JMR tetapi berunit g mol⁻¹.",
          "3. Hubungan dengan Isi Padu Gas:",
          "   Isi Padu Gas (dm³) = Bilangan Mol (n) × Isi Padu Molar",
          "   - Pada Keadaan Piawai (STP): Isi Padu Molar = 22.4 dm³ mol⁻¹",
          "   - Pada Keadaan Bilik (RTP): Isi Padu Molar = 24.0 dm³ mol⁻¹",
          "   *Ingatan Unit: 1 dm³ = 1000 cm³."
        ],
        explanation: "1 mol sebarang gas pada keadaan bilik sentiasa memenuhi ruang 24 dm³ (atau 24,000 cm³), tidak kira sama ada gas itu hidrogen H2 yang ringan atau karbon dioksida CO2 yang tumpat."
      },
      {
        subtopic: "3.3 Formula Empirik & Formula Molekul",
        verbatim: [
          "DEFINISI FORMULA EMPIRIK: Formula kimia yang menunjukkan nisbah teringkas bilangan atom setiap unsur dalam sesuatu sebatian.",
          "DEFINISI FORMULA MOLEKUL: Formula kimia yang menunjukkan bilangan sebenar atom setiap unsur dalam satu molekul sebatian.",
          "HUBUNGAN FORMULA: Formula Molekul = (Formula Empirik)ₙ , di mana n ialah integer positif.",
          "KAEDAH PENENTUAN FORMULA EMPIRIK MAKMAL:",
          "1. Kaedah Mangkuk Pijar: Untuk logam yang lebih reaktif daripada hidrogen (cth: Magnesium Oksida, MgO). Pita magnesium dibakar dalam mangkuk pijar bertutup yang dibuka sekali-sekala untuk membenarkan oksigen masuk.",
          "2. Kaedah Tiub Pembakaran Gas Hidrogen Kering: Untuk oksida logam yang kurang reaktif daripada hidrogen (cth: Kuprum(II) Oksida CuO, Plumbum(II) Oksida PbO). Gas hidrogen kering dialirkan ke atas serbuk oksida logam yang dipanaskan untuk menurunkan oksida kepada logam tulen."
        ],
        explanation: "Contoh: Glukosa mempunyai formula molekul C6H12O6. Nisbah teringkas C:H:O ialah 1:2:1, maka formula empiriknya ialah CH2O dengan n = 6."
      },
      {
        subtopic: "3.4 Persamaan Kimia & Pengiraan Stoikiometri",
        verbatim: [
          "PERSAMAAN KIMIA SEIMBANG: Bilangan atom setiap jenis unsur di sebelah kiri (bahan tindak balas) mesti sama dengan di sebelah kanan (hasil tindak balas).",
          "LANGKAH STOIKIOMETRI PENYELESAIAN MASALAH:",
          "Langkah 1: Tulis persamaan kimia seimbang.",
          "Langkah 2: Tukarkan kuantiti bahan yang diberi kepada bilangan mol: n = jisim / jisim molar (atau V / 24).",
          "Langkah 3: Gunakan nisbah pekali mol daripada persamaan kimia seimbang untuk mencari mol bahan yang dicari.",
          "Langkah 4: Tukarkan nilai mol tersebut kepada unit jawapan akhir yang dikehendaki (jisim / isi padu)."
        ],
        explanation: "Hukum Keabadian Jisim menyatakan jirim tidak boleh dicipta atau dimusnahkan. Maka bilangan atom sebelum dan selepas tindak balas sentiasa sama."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Kira Bilangan Mol Bahan (n)",
        detail: "Gunakan jambatan mol: Jika diberi jisim -> n = jisim / molar mass. Jika diberi isi padu gas -> n = isi padu / 24 dm³. Jika diberi bilangan zarah -> n = zarah / 6.02x10²³.",
        tip: "Pastikan unit isi padu gas ditukar kepada dm³ (bahagi 1000 jika dalam cm³) sebelum dibahagikan dengan 24 atau 22.4."
      },
      {
        step: "Langkah 2",
        title: "Bina Jadual Formula Empirik 4 Baris",
        detail: "Baris 1: Unsur terlibat | Baris 2: Jisim (g) atau peratus (%) | Baris 3: Bilangan mol (jisim/JAR) | Baris 4: Nisbah mol teringkas (bahagi dengan nilai mol terkecil).",
        tip: "Jika nisbah berakhir dengan 1.5, darabkan semua nisbah dengan 2 untuk menjadikannya integer nombor bulat."
      },
      {
        step: "Langkah 3",
        title: "Imbangkan Persamaan Kimia",
        detail: "Kira bilangan atom setiap unsur di kiri dan kanan. Laraskan pekali di hadapan formula kimia (jangan sesekali ubah nombor subskrip dalam formula).",
        tip: "Imbangkan atom logam dahulu, diikuti bukan logam, kemudian atom hidrogen dan oksigen paling akhir."
      },
      {
        step: "Langkah 4",
        title: "Selesaikan Masalah Stoikiometri Berangka",
        detail: "Bandingkan nisbah mol pekali: Contoh jika 2 mol Mg menghasilkan 2 mol MgO (nisbah 1:1), maka 0.5 mol Mg akan menghasilkan tepat 0.5 mol MgO.",
        tip: "Tuliskan jalan kerja lajur demi lajur untuk mengelakkan kesilapan unit."
      }
    ],
    keypoints: [
      { badge: "PEMALAR", term: "Pemalar Avogadro (N_A)", meaning: "6.02 × 10²³ mol⁻¹; bilangan zarah (atom, molekul, ion) yang terkandung dalam satu mol bahan." },
      { badge: "VOLUME", term: "Isi Padu Molar Gas", meaning: "24 dm³ mol⁻¹ pada keadaan bilik (RTP) dan 22.4 dm³ mol⁻¹ pada keadaan piawai (STP)." },
      { badge: "FORMULA", term: "Formula Empirik", meaning: "Formula kimia yang menunjukkan nisbah teringkas nombor bulat bagi atom setiap unsur dalam sebatian." },
      { badge: "HUBUNGAN", term: "Formula Molekul", meaning: "(Formula Empirik)ₙ di mana nilai n = Jisim Molekul Relatif / Jisim Formula Empirik." },
      { badge: "HUKUM", term: "Keabadian Jisim", meaning: "Jumlah jisim bahan tindak balas sentiasa sama dengan jumlah jisim hasil tindak balas dalam sistem tertutup." }
    ],
    questions: [
      {
        q: "Berapakah bilangan molekul yang terkandung di dalam 0.5 mol gas oksigen, O₂? [Pemalar Avogadro = 6.02 × 10²³ mol⁻¹]",
        options: ["3.01 × 10²³", "6.02 × 10²³", "1.204 × 10²⁴", "1.505 × 10²³"],
        answer: 0,
        explanation: "Bilangan molekul = mol × N_A = 0.5 × 6.02 × 10²³ = 3.01 × 10²³ molekul."
      },
      {
        q: "Berapakah isi padu yang dipenuhi oleh 4.4 g gas karbon dioksida, CO₂ pada keadaan bilik? [JAR: C = 12, O = 16; Isi padu molar = 24 dm³ mol⁻¹]",
        options: ["1.2 dm³", "2.4 dm³", "4.4 dm³", "24.0 dm³"],
        answer: 1,
        explanation: "Jisim molar CO₂ = 12 + 2(16) = 44 g mol⁻¹. Bilangan mol n = 4.4 / 44 = 0.1 mol. Isi padu = n × 24 dm³ = 0.1 × 24 = 2.4 dm³."
      },
      {
        q: "Suatu sebatian hidrokarbon mengandungi 85.7% karbon dan 14.3% hidrogen mengikut jisim. Apakah formula empiriknya? [JAR: H = 1, C = 12]",
        options: ["CH", "CH₂", "CH₃", "C₂H₅"],
        answer: 1,
        explanation: "Mol C = 85.7 / 12 = 7.14 mol. Mol H = 14.3 / 1 = 14.3 mol. Nisbah C:H = (7.14/7.14) : (14.3/7.14) = 1 : 2. Maka formula empirik ialah CH₂."
      },
      {
        q: "Antara oksida logam berikut, yang manakah formula empiriknya TIDAK SESUAI ditentukan menggunakan mangkuk pijar di udara?",
        options: ["Magnesium oksida", "Aluminium oksida", "Zink oksida", "Kuprum(II) oksida"],
        answer: 3,
        explanation: "Kuprum kurang reaktif daripada hidrogen. Kuprum(II) oksida ditentukan menggunakan tiub pembakaran dengan mengalirkan gas hidrogen kering."
      },
      {
        q: "Berdasarkan persamaan kimia: 2Mg + O₂ -> 2MgO. Berapakah jisim magnesium oksida yang terhasil apabila 6.0 g magnesium terbakar lengkap dalam oksigen? [JAR: Mg = 24, O = 16]",
        options: ["5.0 g", "8.0 g", "10.0 g", "12.0 g"],
        answer: 2,
        explanation: "Mol Mg = 6.0 / 24 = 0.25 mol. Daripada persamaan: 2 mol Mg -> 2 mol MgO (nisbah 1:1). Maka mol MgO = 0.25 mol. Jisim MgO = 0.25 × (24 + 16) = 0.25 × 40 = 10.0 g."
      }
    ],
    struktur: [
      {
        q: "Dalam satu eksperimen untuk menentukan formula empirik kuprum oksida, gas hidrogen kering dialirkan ke atas 7.95 g serbuk kuprum oksida yang dipanaskan kuat dalam tiub kaca pembakaran. Selepas tindak balas selesai dan disejukkan, baki pepejal perang kuprum tulen yang diperoleh ialah 6.35 g. [JAR: Cu = 63.5, O = 16]\n(a) Berapakah jisim oksigen yang telah bertindak balas?\n(b) Hitungkan formula empirik bagi kuprum oksida tersebut dengan jalan kerja lengkap.\n(c) Mengapakah gas hidrogen mesti dibiarkan terus mengalir semasa radas sedang menyejuk?",
        skema: [
          "(a) Jisim oksigen = Jisim kuprum oksida - Jisim kuprum = 7.95 g - 6.35 g = 1.60 g.",
          "(b) Jalan kerja nisbah mol:\n- Mol Cu = 6.35 / 63.5 = 0.10 mol.\n- Mol O = 1.60 / 16.0 = 0.10 mol.\n- Nisbah mol Cu : O = 0.10 / 0.10 : 0.10 / 0.10 = 1 : 1.\n- Maka, formula empirik sebatian ialah CuO [Kuprum(II) oksida].",
          "(c) Untuk mengelakkan kuprum pepejal yang masih panas daripada bertindak balas semula dengan oksigen di udara sekeliling membentuk kuprum oksida semula."
        ]
      }
    ]
  },
  {
    id: "kimia-bab4",
    babNum: "BAB 4",
    title: "JADUAL BERKALA UNSUR",
    icon: "🗺️",
    anyflipPages: "Buku Teks Kimia Tingkatan 4 (Halaman 78 – 107)",
    synopsis: "Mengkaji susunan unsur dalam Jadual Berkala Unsur moden mengikut tertib nombor proton menaik, pembahagian mengikut Kumpulan dan Kala, ciri-ciri istimewa Gas Adi (Kumpulan 18), Logam Alkali (Kumpulan 1), Halogen (Kumpulan 17), Unsur Kala 3, dan Unsur Peralihan.",
    notes: [
      {
        subtopic: "4.1 Prinsip Susunan Jadual Berkala Unsur Moden",
        verbatim: [
          "PRINSIP ASAS: Unsur disusun mengikut tertib pertambahan NOMBOR PROTON dari kiri ke kanan.",
          "KUMPULAN (Lajur Menegak, 1 hingga 18):",
          "- Ditentukan oleh BILANGAN ELEKTRON VALENS di petala terluar.",
          "- Unsur dengan 1 atau 2 elektron valens berada dalam Kumpulan 1 dan 2.",
          "- Unsur dengan 3 hingga 8 elektron valens berada dalam Kumpulan (bilangan elektron valens + 10). Contoh: 7 elektron valens = Kumpulan 17.",
          "- Unsur dalam Kumpulan yang sama mempunyai SIFAT KIMIA YANG SERUPA kerana mempunyai bilangan elektron valens yang sama.",
          "KALA (Baris Mendatar, 1 hingga 7):",
          "- Ditentukan oleh BILANGAN PETALA BERISI ELEKTRON dalam atom.",
          "- Contoh: Natrium (2.8.1) mempunyai 3 petala berisi elektron -> Kala 3."
        ],
        explanation: "Henry Moseley menyusun jadual berkala berdasarkan nombor proton melalui kajian spektrum sinar-X, membetulkan kelemahan jadual Mendeleev terdahulu."
      },
      {
        subtopic: "4.2 Unsur Kumpulan 18 (Gas Adi)",
        verbatim: [
          "AHLI KUMPULAN 18: Helium (He), Neon (Ne), Argon (Ar), Kripton (Kr), Ksenon (Xe), Radon (Rn).",
          "SIFAT KIMIA: Sangat lengai secara kimia (tidak reaktif). Wujud sebagai gas MONOATOM.",
          "SEBAB TIDAK REAKTIF: Atom gas adi telah mencapai susunan elektron DUPLET (Helium, 2) atau OKTET (Ne, Ar, Kr, Xe, Rn, 8) yang sangat stabil. Atom tidak perlu menderma, menerima atau berkongsi elektron.",
          "KEGUNAAN GAS ADI:",
          "- Helium: Mengisi belon kaji cuaca dan kapal udara (ringan dan tidak mudah terbakar).",
          "- Neon: Mengisi lampu papan iklan bernyala jingga-kemerahan.",
          "- Argon: Mengisi mentol filamen elektrik untuk mengelakkan filamen tungsten terbakar.",
          "- Kripton: Digunakan dalam lampu kilat kamera berkelajuan tinggi dan laser.",
          "- Radon: Rawatan radioterapi membunuh sel kanser."
        ],
        explanation: "Gas adi tidak membentuk sebatian dalam keadaan bilik kerana tenaga yang diperlukan untuk memecahkan susunan oktet yang stabil adalah terlampau tinggi."
      },
      {
        subtopic: "4.3 Unsur Kumpulan 1 (Logam Alkali)",
        verbatim: [
          "AHLI KUMPULAN 1: Litium (Li), Natrium (Na), Kalium (K), Rubidium (Rb), Sesium (Cs), Fransium (Fr).",
          "SIFAT FIZIK: Logam lembut berwana kelabu berkilat, boleh dipotong dengan pisau, ketumpatan rendah, takat lebur rendah berbanding logam lain.",
          "SIFAT KIMIA & TINDAK BALAS (Menderma 1 elektron valens membentuk ion M⁺):",
          "1. Tindak balas dengan Air: Membebaskan gas hidrogen dan membentuk larutan hidroksida beralkali.",
          "   2Na + 2H₂O -> 2NaOH + H₂",
          "2. Tindak balas dengan Gas Oksigen: Membentuk oksida logam pepejal putih.",
          "   4Na + O₂ -> 2Na₂O",
          "3. Tindak balas dengan Gas Klorin: Membentuk klorida logam pepejal putih.",
          "   2Na + Cl₂ -> 2NaCl",
          "TREND KEREAKTIFAN MENURUNI KUMPULAN 1: KEREAKTIFAN MENINGKAT.",
          "Penerangan Sebab:",
          "- Saiz jejari atom semakin bertambah (bilangan petala bertambah).",
          "- Elektron valens berada semakin jauh dari nukleus bercas positif.",
          "- Daya tarikan elektrostatik nukleus ke atas elektron valens semakin lemah.",
          "- Atom semakin mudah melepaskan elektron valens tunggal tersebut untuk mencapai susunan oktet."
        ],
        explanation: "Kalium bertindak balas jauh lebih cergas dan meletup dengan nyalaan ungu-lilac berbanding Litium yang hanya mendidih perlahan di atas permukaan air."
      },
      {
        subtopic: "4.4 Unsur Kumpulan 17 (Halogen) & Unsur Peralihan",
        verbatim: [
          "AHLI KUMPULAN 17: Fluorin (F₂), Klorin (Cl₂), Bromin (Br₂), Iodin (I₂), Astatin (At₂).",
          "SIFAT KIMIA: Wujud sebagai molekul DWIKUTUB/DWIATOM (cth: Cl₂). Menerima 1 elektron membentuk ion halida (X⁻).",
          "TREND KEREAKTIFAN MENURUNI KUMPULAN 17: KEREAKTIFAN MENURUN.",
          "Penerangan Sebab:",
          "- Saiz atom bertambah, petala terluar semakin jauh dari nukleus.",
          "- Daya tarikan nukleus untuk menarik satu elektron masuk ke dalam petala terluar menjadi semakin lemah.",
          "- Keelektronegatifan atom berkurang menuruni kumpulan.",
          "UNSUR PERALIHAN (Blok d antara Kumpulan 2 dan 13):",
          "CIRI-CIRI ISTIMEWA UNSUR PERALIHAN:",
          "1. Mempunyai lebih daripada satu nombor pengoksidaan (cth: Fe²⁺ dan Fe³⁺, Cu⁺ dan Cu²⁺).",
          "2. Membentuk sebatian dan ion berwarna (Fe²⁺ hijau, Fe³⁺ perang, Cu²⁺ biru, MnO₄⁻ ungu).",
          "3. Bertindak sebagai MANGKIN berkesan dalam industri (Besi dalam Proses Haber, Vanadium(V) oksida V₂O₅ dalam Proses Sentuh, Nikel/Platinum dalam penghidrogenan marjerin).",
          "4. Berkeupayaan membentuk ion kompleks (cth: [Fe(CN)₆]³⁻)."
        ],
        explanation: "Klorin berwarna gas kuning kehijauan, Bromin cecair perang kemerahan, dan Iodin pepejal kelabu kehitaman yang memejawap menghasilkan wap ungu."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Tentukan Kumpulan & Kala daripada Susunan Elektron",
        detail: "Contoh Atom X dengan nombor proton 17: Susunan elektron = 2.8.7. Bilangan petala = 3 (maka Kala 3). Elektron valens = 7 (maka Kumpulan 7 + 10 = Kumpulan 17).",
        tip: "Ingat formula: Jika elektron valens 3 hingga 8, tambah 10 untuk menentukan nombor Kumpulan."
      },
      {
        step: "Langkah 2",
        title: "Terangkan Perubahan Kereaktifan Kumpulan 1",
        detail: "Gunakan 4 kata kunci: (1) Saiz atom bertambah (2) Jarak elektron valens ke nukleus bertambah (3) Daya tarikan nukleus makin lemah (4) Lebih mudah menderma elektron.",
        tip: "Kereaktifan Kumpulan 1 meningkat ke bawah: Li < Na < K < Rb < Cs."
      },
      {
        step: "Langkah 3",
        title: "Terangkan Perubahan Kereaktifan Kumpulan 17",
        detail: "Gunakan 4 kata kunci terbalik: (1) Saiz atom bertambah (2) Jarak petala luar ke nukleus bertambah (3) Daya tarikan nukleus makin lemah (4) Lebih sukar menarik elektron.",
        tip: "Kereaktifan Kumpulan 17 menurun ke bawah: F > Cl > Br > I."
      },
      {
        step: "Langkah 4",
        title: "Kenal Pasti 4 Ciri Khas Unsur Peralihan",
        detail: "Semak ciri: Berbilang nombor pengoksidaan, sebatian berwarna, bertindak sebagai mangkin industri, dan membentuk ion kompleks.",
        tip: "Zink (Zn) dan Skandium (Sc) bukan unsur peralihan sejati kerana tidak menunjukkan nombor pengoksidaan berbilang."
      }
    ],
    keypoints: [
      { badge: "LENGKAP", term: "Susunan Oktet", meaning: "Susunan lapan elektron pada petala terluar yang memberikan kestabilan kimia maksimum seperti Gas Adi." },
      { badge: "KUMPULAN 1", term: "Logam Alkali", meaning: "Logam lembut yang sangat reaktif bertindak balas dengan air menghasilkan larutan hidroksida dan gas hidrogen." },
      { badge: "KUMPULAN 17", term: "Halogen", meaning: "Unsur bukan logam wujud sebagai molekul dwiatom yang mempunyai keelektronegatifan tinggi." },
      { badge: "KALA 3", term: "Oksida Amfoterik", meaning: "Aluminium oksida (Al₂O₃) yang boleh bertindak balas dengan kedua-dua asid dan alkali membentuk garam dan air." },
      { badge: "INDUSTRI", term: "Mangkin Kimia", meaning: "Unsur peralihan seperti Besi (Proses Haber) dan Vanadium(V) oksida (Proses Sentuh) mempercepatkan kadar tindak balas." }
    ],
    questions: [
      {
        q: "Unsur X mempunyai susunan elektron 2.8.8.2. Di manakah kedudukan unsur X dalam Jadual Berkala Unsur?",
        options: ["Kumpulan 2, Kala 4", "Kumpulan 4, Kala 2", "Kumpulan 2, Kala 8", "Kumpulan 12, Kala 4"],
        answer: 0,
        explanation: "Unsur X mempunyai 2 elektron valens (Kumpulan 2) dan 4 petala berisi elektron (Kala 4). Unsur ini ialah Kalsium."
      },
      {
        q: "Antara gas adi berikut, yang manakah digunakan untuk mengisi mentol filamen elektrik bagi mencegah filamen tungsten daripada terbakar?",
        options: ["Helium", "Neon", "Argon", "Kripton"],
        answer: 2,
        explanation: "Gas Argon tidak reaktif dan lengai, maka ia melindungi filamen tungsten yang panas daripada bertindak balas dengan oksigen."
      },
      {
        q: "Mengapakah kereaktifan logam Kumpulan 1 semakin meningkat apabila menuruni kumpulan?",
        options: [
          "Daya tarikan elektrostatik antara nukleus dan elektron valens semakin lemah",
          "Bilangan elektron valens semakin bertambah",
          "Ketumpatan atom semakin berkurang",
          "Elektron valens semakin tertarik kuat ke arah nukleus"
        ],
        answer: 0,
        explanation: "Apabila menuruni Kumpulan 1, saiz atom bertambah menyebabkan elektron valens semakin jauh dari nukleus, menjadikannya sangat mudah didermakan."
      },
      {
        q: "Antara pernyataan berikut, yang manakah BENAR mengenai sifat unsur peralihan?",
        options: [
          "Mempunyai takat lebur yang sangat rendah berbanding Kumpulan 1",
          "Membentuk sebatian yang sentiasa tidak berwarna",
          "Menunjukkan pelbagai nombor pengoksidaan dalam sebatian",
          "Merupakan penebat haba dan elektrik yang baik"
        ],
        answer: 2,
        explanation: "Unsur peralihan mempunyai ciri khas iaitu berbilang nombor pengoksidaan (contoh: Besi(II) dan Besi(III))."
      },
      {
        q: "Aluminium oksida, Al₂O₃, dikelaskan sebagai oksida amfoterik kerana ia berupaya untuk:",
        options: [
          "Larut dalam air menghasilkan larutan neutral",
          "Bertindak balas dengan asid sahaja",
          "Bertindak balas dengan kedua-dua asid dan alkali membentuk garam",
          "Menghalang semua tindak balas redoks"
        ],
        answer: 2,
        explanation: "Oksida amfoterik seperti Al₂O₃ mempunyai sifat dwifungsi: bertindak sebagai bes dengan asid, dan bertindak sebagai asid dengan alkali."
      }
    ],
    struktur: [
      {
        q: "Jadual menunjukkan nombor proton bagi tiga unsur dalam Kala 3: Natrium (11), Aluminium (13), dan Klorin (17).\n(a) Tuliskan susunan elektron bagi atom Natrium dan atom Klorin.\n(b) Bandingkan saiz jejari atom Natrium dengan atom Klorin dan terangkan perbezaannya.\n(c) Huraikan pemerhatian apabila seketul natrium kecil dimasukkan ke dalam bekas berisi air dan tuliskan persamaan kimianya.",
        skema: [
          "(a) Natrium: 2.8.1 | Klorin: 2.8.7.",
          "(b) Saiz jejari atom Natrium lebih besar daripada atom Klorin. Penerangan: Kedua-dua unsur mempunyai 3 petala berisi elektron, tetapi Klorin mempunyai nombor proton (muatan nukleus positif) yang lebih tinggi (+17 berbanding +11). Daya tarikan elektrostatik nukleus Klorin ke atas elektron adalah lebih kuat, menarik petala elektron lebih rapat ke arah nukleus.",
          "(c) Pemerhatian: Natrium bergerak pantas di atas permukaan air dengan desiran 'hissing', mencair menjadi bebola perak berkilat, dan melepaskan gas hidrogen. Persamaan kimia seimbang: 2Na + 2H₂O -> 2NaOH + H₂."
        ]
      }
    ]
  },
  {
    id: "kimia-bab5",
    babNum: "BAB 5",
    title: "IKATAN KIMIA",
    icon: "🔗",
    anyflipPages: "Buku Teks Kimia Tingkatan 4 (Halaman 110 – 133)",
    synopsis: "Mengkaji pembentukan sebatian untuk mencapai susunan duplet/oktet stabil: Ikatan Ion (pemindahan elektron), Ikatan Kovalen (perkongsian elektron), Ikatan Hidrogen, Ikatan Datif, Ikatan Logam, serta perbandingan sifat fizik antara sebatian ion dan kovalen.",
    notes: [
      {
        subtopic: "5.1 Pembentukan Ikatan Ion & Ikatan Kovalen",
        verbatim: [
          "TUJUAN PEMBENTUKAN IKATAN: Atom bergabung antara satu sama lain untuk mencapai susunan elektron DUPLET atau OKTET yang stabil seperti gas adi.",
          "1. IKATAN ION (Logam + Bukan Logam):",
          "- Melibatkan PEMINDAHAN ELEKTRON daripada atom logam kepada atom bukan logam.",
          "- Atom logam menderma elektron membentuk KATION (ion positif).",
          "- Atom bukan logam menerima elektron membentuk ANION (ion negatif).",
          "- Kation dan anion ditarik bersama oleh DAYA TARIKAN ELEKTROSTATIK YANG KUAT.",
          "- Contoh: Natrium klorida (NaCl), Magnesium oksida (MgO).",
          "2. IKATAN KOVALEN (Bukan Logam + Bukan Logam):",
          "- Melibatkan PERKONGSIAN ELEKTRON antara atom bukan logam.",
          "- Jenis ikatan kovalen:",
          "  a. Ikatan Tunggal: Berkongsi 1 pasang elektron (cth: H₂, Cl₂, HCl, H₂O, CH₄).",
          "  b. Ikatan Ganda Dua: Berkongsi 2 pasang elektron (cth: O₂, CO₂).",
          "  c. Ikatan Ganda Tiga: Berkongsi 3 pasang elektron (cth: N₂)."
        ],
        explanation: "Daya tarikan elektrostatik antara ion bercas bertentangan dalam kekisi hablur sebatian ion adalah sangat kukuh berbanding daya tarikan van der Waals antara molekul kovalen."
      },
      {
        subtopic: "5.2 Ikatan Hidrogen, Ikatan Datif & Ikatan Logam",
        verbatim: [
          "1. IKATAN HIDROGEN:",
          "- Daya tarikan antara atom hidrogen yang terikat dengan atom yang sangat elektronegatif (iaitu Fluorin, Oksigen, atau Nitrogen — F, O, N) dengan pasangan elektron bebas pada atom F, O, N molekul lain.",
          "- Kesan Ikatan Hidrogen: Takat didih air (H₂O, 100°C) jauh lebih tinggi berbanding hidrogen sulfida (H₂S, -60°C) walaupun H₂S mempunyai jisim molekul lebih besar.",
          "- Peranan dalam kehidupan: Rambut melekat semasa basah; struktur heliks ganda dua DNA distabilkan oleh ikatan hidrogen.",
          "2. IKATAN DATIF (IKATAN KOORDINAT):",
          "- Sejenis ikatan kovalen di mana SEPASANG ELEKTRON YANG DIKONGSI BERASAL DARIPADA SATU ATOM SAHAJA.",
          "- Contoh pembentukan ion hidronium, H₃O⁺: Molekul H₂O menyumbangkan sepasang elektron bebas kepada ion H⁺.",
          "- Contoh pembentukan ion ammonium, NH₄⁺: Molekul NH₃ menyumbangkan sepasang elektron bebas kepada ion H⁺.",
          "3. IKATAN LOGAM:",
          "- Daya tarikan elektrostatik antara 'LAUTAN ELEKTRON' yang dinyahsetempatkan dengan ion logam bercas positif.",
          "- Menerangkan mengapa logam merupakan konduktor elektrik dan haba yang sangat baik serta boleh ditempa (malleable)."
        ],
        explanation: "Dalam ikatan logam, elektron valens bebas bergerak di seluruh kekisi logam (dinyahsetempatkan). Pergerakan elektron ini membolehkan arus elektrik mengalir dengan lancar."
      },
      {
        subtopic: "5.3 Perbandingan Sifat Fizik Sebatian Ion & Sebatian Kovalen",
        verbatim: [
          "1. TAKAT LEBUR & TAKAT DIDIH:",
          "- Sebatian Ion: TINGGI (banyak tenaga haba diperlukan untuk memutuskan daya tarikan elektrostatik yang kuat antara ion).",
          "- Sebatian Kovalen: RENDAH (sedikit tenaga haba diperlukan untuk mengatasi daya tarikan van der Waals yang lemah antara molekul).",
          "2. KEKONDUKSIAN ELEKTRIK:",
          "- Sebatian Ion: Tidak mengalirkan elektrik dalam keadaan PEPEJAL (ion terikat kuat dalam kekisi, tidak bebas bergerak). Boleh mengalirkan elektrik dalam keadaan LEBURAN dan LARUTAN AKUEUS (ion bebas bergerak membawa cas).",
          "- Sebatian Kovalen: TIDAK mengalirkan elektrik dalam sebarang keadaan kerana terdiri daripada molekul neutral tanpa ion bebas.",
          "3. KETERLARUTAN:",
          "- Sebatian Ion: Biasanya larut dalam air, tetapi tidak larut dalam pelarut organik.",
          "- Sebatian Kovalen: Tidak larut dalam air, tetapi larut dalam pelarut organik (cth: eter, benzena, alkohol)."
        ],
        explanation: "Garam dapur (NaCl) melebur pada 801°C dan mengalirkan elektrik semasa lebur, manakala lilin parafin kovalen melebur pada ~55°C dan langsung tidak mengalirkan elektrik."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Tentukan Jenis Ikatan (Ion atau Kovalen)",
        detail: "Periksa jenis unsur: Logam + Bukan Logam = Ikatan Ion (pemindahan elektron). Bukan Logam + Bukan Logam = Ikatan Kovalen (perkongsian elektron).",
        tip: "Kumpulan 1, 2, 13 ialah logam penderma elektron; Kumpulan 15, 16, 17 ialah bukan logam penerima elektron."
      },
      {
        step: "Langkah 2",
        title: "Lukis Gambar Rajah Susunan Elektron Pembentukan",
        detail: "Bagi ikatan ion: Lukis kurungan segi empat [ ] dengan cas di luar kurungan atas kanan. Bagi ikatan kovalen: Lukis petala bertindih dengan elektron pangkah (x) dan titik (•).",
        tip: "Pastikan semua atom dalam sebatian mencapai 8 elektron valens (atau 2 bagi hidrogen)."
      },
      {
        step: "Langkah 3",
        title: "Kenal Pasti Ikatan Hidrogen (Syarat F-O-N)",
        detail: "Semak kehadiran atom Hidrogen yang terikat terus kepada atom Fluorin, Oksigen atau Nitrogen sahaja.",
        tip: "HF, H₂O, dan NH₃ membentuk ikatan hidrogen yang kuat; HCl dan H₂S TIDAK membentuk ikatan hidrogen."
      },
      {
        step: "Langkah 4",
        title: "Terangkan Kekonduksian Elektrik",
        detail: "Gunakan frasa tepat SPM: 'Ion-ion bebas bergerak membawa cas' untuk sebatian ion lebur/akueus; 'Tiada ion-ion bebas bergerak' untuk pepejal dan sebatian kovalen.",
        tip: "Jangan sesekali menulis 'elektron bebas bergerak' untuk sebatian ion; gunakan perkataan 'ion bebas bergerak'."
      }
    ],
    keypoints: [
      { badge: "ELEKTROSTATIK", term: "Ikatan Ion", meaning: "Daya tarikan elektrostatik yang kuat antara ion positif (kation) dan ion negatif (anion)." },
      { badge: "KONGSI", term: "Ikatan Kovalen", meaning: "Ikatan kimia yang terbentuk akibat perkongsian sepasang atau lebih elektron antara atom bukan logam." },
      { badge: "FON", term: "Ikatan Hidrogen", meaning: "Daya tarikan antara atom H dengan pasangan elektron bebas atom sangat elektronegatif iaitu F, O, atau N." },
      { badge: "SEPASANG", term: "Ikatan Datif", meaning: "Ikatan kovalen di mana kedua-dua elektron yang dikongsi disumbangkan oleh satu atom sahaja." },
      { badge: "LAUTAN", term: "Ikatan Logam", meaning: "Daya tarikan antara kation logam dengan lautan elektron valens yang dinyahsetempatkan." }
    ],
    questions: [
      {
        q: "Antara pasangan unsur berikut, yang manakah akan membentuk sebatian ion melalui pemindahan elektron?",
        options: ["Karbon dan Oksigen", "Natrium dan Klorin", "Hidrogen dan Klorin", "Nitrogen dan Hidrogen"],
        answer: 1,
        explanation: "Natrium ialah logam (menderma 1e⁻ membentuk Na⁺) dan Klorin ialah bukan logam (menerima 1e⁻ membentuk Cl⁻), menghasilkan sebatian ion NaCl."
      },
      {
        q: "Mengapakah air (H₂O) mempunyai takat didih yang luar biasa tinggi (100°C) berbanding hidrogen sulfida (H₂S, -60°C)?",
        options: [
          "Molekul air mempunyai ikatan kovalen ganda dua",
          "Antara molekul air wujud ikatan hidrogen yang kuat selain daya van der Waals",
          "Jisim molekul relatif air lebih besar daripada H₂S",
          "Air merupakan sebatian ion kekisi raksasa"
        ],
        answer: 1,
        explanation: "Ikatan hidrogen yang terbentuk antara atom H dan atom O yang sangat elektronegatif memerlukan tenaga haba yang tinggi untuk diputuskan."
      },
      {
        q: "Pembentukan ion ammonium, NH₄⁺ daripada molekul ammonia (NH₃) dan ion hidrogen (H⁺) melibatkan pembentukan:",
        options: ["Ikatan logam", "Ikatan ion", "Ikatan datif", "Ikatan hidrogen"],
        answer: 2,
        explanation: "Molekul NH₃ menderma sepasang elektron bebasnya kepada ion H⁺ yang tidak mempunyai elektron, membentuk ikatan datif/koordinat."
      },
      {
        q: "Antara bahan berikut, yang manakah boleh mengalirkan arus elektrik dalam keadaan leburan tetapi TIDAK dalam keadaan pepejal?",
        options: ["Plumbum(II) bromida", "Gula glukosa", "Logam kuprum", "Naftalena"],
        answer: 0,
        explanation: "Plumbum(II) bromida (PbBr₂) ialah sebatian ion. Dalam pepejal, ion terikat tegar; semasa lebur, ion-ion bebas bergerak membawa arus elektrik."
      },
      {
        q: "Apakah jenis ikatan yang membolehkan sebatian logam seperti kuprum ditempa menjadi wayar nipis tanpa patah?",
        options: ["Ikatan ion", "Ikatan kovalen", "Ikatan hidrogen", "Ikatan logam"],
        answer: 3,
        explanation: "Dalam ikatan logam, lapisan atom logam boleh menggelongsor di atas satu sama lain dalam lautan elektron tanpa memutuskan ikatan elektrostatik."
      }
    ],
    struktur: [
      {
        q: "Dua bahan berlabel Bahan X (Magnesium klorida, MgCl₂) dan Bahan Y (Tetraklorometana, CCl₄) diuji di makmal.\n(a) Nyatakan jenis ikatan kimia bagi Bahan X dan Bahan Y.\n(b) Terangkan perbezaan takat lebur antara Bahan X dan Bahan Y berdasarkan jenis ikatan masing-masing.\n(c) Huraikan pemerhatian kekonduksian elektrik Bahan X dalam keadaan pepejal berbanding keadaan leburan.",
        skema: [
          "(a) Bahan X (MgCl₂): Ikatan Ion | Bahan Y (CCl₄): Ikatan Kovalen.",
          "(b) Takat lebur Bahan X adalah sangat tinggi kerana ion Mg²⁺ dan Cl⁻ ditarik oleh daya tarikan elektrostatik yang sangat kuat dalam kekisi hablur, memerlukan tenaga haba yang banyak untuk mengatasinya. Takat lebur Bahan Y adalah rendah kerana molekul-molekul CCl₄ ditarik oleh daya tarikan van der Waals antara molekul yang lemah, memerlukan sedikit tenaga haba sahaja untuk memutuskannya.",
          "(c) Dalam keadaan pepejal, Bahan X tidak menyalakan mentol (tidak mengalirkan elektrik) kerana ion-ion Mg²⁺ dan Cl⁻ terikat pada kedudukan tetap dalam kekisi dan tidak bebas bergerak. Dalam keadaan leburan, Bahan X menyalakan mentol (mengalirkan elektrik) kerana kekisi ion telah runtuh dan ion-ion bebas bergerak membawa cas elektrik."
        ]
      }
    ]
  },
  {
    id: "kimia-bab6",
    babNum: "BAB 6",
    title: "ASID, BES DAN GARAM",
    icon: "🧪",
    anyflipPages: "Buku Teks Kimia Tingkatan 4 (Halaman 136 – 205)",
    synopsis: "Bab paling komprehensif merangkumi peranan air dalam keasidan/kealkalian, pengiraan pH, kepekatan larutan piawai (M = n/V), pencairan M1V1 = M2V2, pentitratan asid-bes (MaVa/MbVb = a/b), keterlarutan garam (SPA, PBC, PAH), penyediaan garam, dan analisis kualitatif kation/anion.",
    notes: [
      {
        subtopic: "6.1 Peranan Air & Nilai pH",
        verbatim: [
          "DEFINISI ASID: Bahan kimia yang mengion dalam air untuk menghasilkan ion hidrogen, H⁺ (atau ion hidronium, H₃O⁺).",
          "DEFINISI ALKALI: Bes yang larut dalam air dan mengion menghasilkan ion hidroksida, OH⁻.",
          "PERANAN PENTING AIR: Tanpa air, asid dan alkali hanya wujud sebagai molekul kovalen neutral dan TIDAK MENUNJUKKAN SIFAT ASID ATAU ALKALI (cth: asid etanoik glasial atau gas hidrogen klorida kering dalam pelarut organik tidak mengubah warna kertas litmus).",
          "SKALA DAN FORMULA pH:",
          "- pH = -log [H⁺]",
          "- pOH = -log [OH⁻]",
          "- pH + pOH = 14",
          "- Semakin tinggi kepekatan ion H⁺, semakin rendah nilai pH (semakin berasid).",
          "- Semakin tinggi kepekatan ion OH⁻, semakin tinggi nilai pH (semakin beralkali)."
        ],
        explanation: "Asid kuat (cth: HCl, HNO3, H2SO4) mengion lengkap 100% dalam air. Asid lemah (cth: CH3COOH) mengion separa menghasilkan kepekatan ion H+ yang rendah."
      },
      {
        subtopic: "6.2 Kepekatan, Larutan Piawai & Peneutralan",
        verbatim: [
          "FORMULA KEMOLARAN (M): M = n / V  atau  n = (M × V) / 1000",
          "- M = Kemolaran / kepekatan (mol dm⁻³)",
          "- V = Isi padu larutan dalam cm³ (dibahagi 1000 untuk tukar ke dm³)",
          "- n = Bilangan mol zat terlarut",
          "HUBUNGAN KEMOLARAN DENGAN KEPEKATAN (g dm⁻³):",
          "Kepekatan (g dm⁻³) = Kemolaran (mol dm⁻³) × Jisim Molar (g mol⁻¹)",
          "FORMULA PENCAIRAN (Menambah air tanpa mengubah mol zat):",
          "M₁V₁ = M₂V₂",
          "FORMULA PENTITRATAN ASID-BES (PENEUTRALAN):",
          "a Asid + b Alkali -> Garam + Air",
          "(Mₐ × Vₐ) / (M_b × V_b) = a / b"
        ],
        explanation: "Peneutralan ialah tindak balas antara ion H+ daripada asid dengan ion OH- daripada alkali untuk menghasilkan molekul air neutral: H+ + OH- -> H2O."
      },
      {
        subtopic: "6.3 Keterlarutan Garam & Kaedah Penyediaan",
        verbatim: [
          "HUKUM KETERLARUTAN GARAM DALAM AIR:",
          "1. Semua garam NITRAT (NO₃⁻) LARUT.",
          "2. Semua garam NATRIUM, KALIUM dan AMMONIUM (SPA) LARUT.",
          "3. Semua garam KLORIDA (Cl⁻) LARUT kecuali PAH: Plumbum(II) klorida (PbCl₂), Argentum klorida (AgCl), dan Merkuri klorida (Hg₂Cl₂). *PbCl₂ larut dalam air panas.",
          "4. Semua garam SULFAT (SO₄²⁻) LARUT kecuali PBC: Plumbum(II) sulfat (PbSO₄), Barium sulfat (BaSO₄), dan Kalsium sulfat (CaSO₄).",
          "5. Semua garam KARBONAT (CO₃²⁻) TIDAK LARUT kecuali garam SPA (Na₂CO₃, K₂CO₃, (NH₄)₂CO₃).",
          "KAEDAH PENYEDIAAN GARAM:",
          "- Garam Terlarutkan Bukan SPA: Tindak balas Asid + Logam Reaktif / Oksida Logam / Karbonat Logam berlebihan, turas, panaskan hasil turasan sehingga tepu, sejukkan untuk penghabluran.",
          "- Garam Terlarutkan SPA: Kaedah Pentitratan Asid-Bes menggunakan penunjuk kimia, ulang tanpa penunjuk, hablurkan.",
          "- Garam Tak Terlarutkan: Kaedah Pemendakan / Penguraian Ganda Dua (campur dua larutan garam terlarutkan, turas mendakan, basuh dengan air suling dan keringkan)."
        ],
        explanation: "Contoh: Untuk menyediakan Barium sulfat BaSO4 yang tak larut, campurkan larutan Barium klorida BaCl2 dengan larutan Natrium sulfat Na2SO4."
      },
      {
        subtopic: "6.4 Analisis Kualitatif Garam (Ujian Anion & Kation)",
        verbatim: [
          "UJIAN ANION:",
          "1. Karbonat, CO₃²⁻: Tambah asid cair -> Pembuakan gas CO₂ menukarkan air kapur menjadi keruh.",
          "2. Klorida, Cl⁻: Tambah HNO₃ cair + AgNO₃ -> Mendakan putih Argentum klorida (AgCl).",
          "3. Sulfat, SO₄²⁻: Tambah HCl cair + BaCl₂ -> Mendakan putih Barium sulfat (BaSO₄).",
          "4. Nitrat, NO₃⁻: Tambah H₂SO₄ cair + FeSO₄ + H₂SO₄ pekat perlahan-lahan di dinding tabung -> CINCIN PERANG terbentuk di sempadan dua cecair.",
          "UJIAN KATION DENGAN LARUTAN NaOH & LARUTAN NH₃:",
          "- Zink (Zn²⁺), Aluminium (Al³⁺), Plumbum (Pb²⁺): Mendakan putih larut dalam NaOH berlebihan.",
          "- Ion Zink (Zn²⁺) dibezakan kerana mendakan putihnya LARUT dalam larutan NH₃ berlebihan (Al³⁺ dan Pb²⁺ tidak larut dalam NH₃ berlebihan).",
          "- Ion Cu²⁺: Mendakan biru larut dalam NH₃ berlebihan membentuk larutan biru tua.",
          "- Ion Fe²⁺: Mendakan hijau kotor; Ion Fe³⁺: Mendakan perang."
        ],
        explanation: "Ujian cincin perang sangat spesifik untuk ion nitrat NO3- di mana kompleks nitrosilbesi(II) [Fe(H2O)5(NO)]2+ terbentuk pada lapisan sempadan."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Kira Kemolaran dan Pentitratan",
        detail: "Gunakan formula pentitratan: (Ma x Va) / (Mb x Vb) = a / b. Tuliskan persamaan kimia seimbang terlebih dahulu untuk mendapatkan nisbah pekali a dan b.",
        tip: "Pastikan nisbah asid diprotik seperti H₂SO₄ diambil kira: 1 mol H₂SO₄ bertindak balas dengan 2 mol NaOH (nisbah a/b = 1/2)."
      },
      {
        step: "Langkah 2",
        title: "Tentukan Keterlarutan Garam (Formula SPA, PAH, PBC)",
        detail: "Semak nama garam: Nitrat sentiasa larut. SPA sentiasa larut. Klorida larut kecuali PAH (Pb, Ag, Hg). Sulfat larut kecuali PBC (Pb, Ba, Ca). Karbonat tak larut kecuali SPA.",
        tip: "Jika garam tak terlarutkan, gunakan kaedah tindak balas pemendakan (campurkan dua larutan akueus garam larut)."
      },
      {
        step: "Langkah 3",
        title: "Hafal Aliran Ujian Kation Menggunakan NaOH dan NH₃",
        detail: "Titiskan sedikit larutan NaOH sehingga mendakan terbentuk, perhatikan warna. Tambah berlebihan. Ulangi prosedur menggunakan larutan ammonia NH₃.",
        tip: "Hanya ion Zn²⁺ yang menghasilkan mendakan putih yang larut dalam KEDUA-DUA larutan NaOH dan NH₃ berlebihan."
      },
      {
        step: "Langkah 4",
        title: "Lakukan Ujian Pengesahan Anion Spesifik",
        detail: "CO₃²⁻ guna air kapur. Cl⁻ guna AgNO₃ (mendakan putih). SO₄²⁻ guna BaCl₂ (mendakan putih). NO₃⁻ guna FeSO₄ + H₂SO₄ pekat (cincin perang).",
        tip: "Pastikan asid nitrik HNO₃ ditambah sebelum AgNO₃ untuk menyingkirkan sebarang ion karbonat yang mengganggu."
      }
    ],
    keypoints: [
      { badge: "ION H+", term: "Asid", meaning: "Bahan kimia yang mengion dalam air menghasilkan ion hidrogen H⁺ (atau ion hidronium H₃O⁺)." },
      { badge: "TITRATION", term: "Peneutralan", meaning: "Tindak balas antara asid dan bes menghasilkan garam dan air: H⁺ + OH⁻ -> H₂O." },
      { badge: "INGATAN", term: "Garam SPA", meaning: "Semua garam yang mengandungi ion Natrium, Kalium, dan Ammonium adalah 100% terlarutkan dalam air." },
      { badge: "TAK LARUT", term: "Garam PAH & PBC", meaning: "PbCl₂, AgCl (Klorida tak larut) dan PbSO₄, BaSO₄, CaSO₄ (Sulfat tak larut)." },
      { badge: "PENGESAHAN", term: "Cincin Perang", meaning: "Ujian pengesahan khas bagi ion Nitrat (NO₃⁻) menggunakan larutan ferum(II) sulfat dan asid sulfurik pekat." }
    ],
    questions: [
      {
        q: "Gas hidrogen klorida kering dilarutkan ke dalam metilbenzena (pelarut organik). Mengapakah larutan tersebut TIDAK menunjukkan sifat asid dan tidak menukarkan warna kertas litmus biru?",
        options: [
          "Gas hidrogen klorida telah bertindak balas dengan metilbenzena",
          "Tanpa air, hidrogen klorida kekal wujud sebagai molekul kovalen neutral dan tidak mengion menghasilkan ion H⁺",
          "Metilbenzena meneutralkan ion hidrogen yang terhasil",
          "Kertas litmus hanya bertindak balas dengan asid pekat"
        ],
        answer: 1,
        explanation: "Air amat diperlukan untuk membolehkan molekul asid mengion menghasilkan ion hidrogen H⁺ yang bertanggungjawab ke atas sifat asid."
      },
      {
        q: "Berapakah isi padu asid sulfurik H₂SO₄ 0.5 mol dm⁻³ yang diperlukan untuk meneutralkan dengan tepat 25.0 cm³ larutan natrium hidroksida NaOH 1.0 mol dm⁻³? [Persamaan: H₂SO₄ + 2NaOH -> Na₂SO₄ + 2H₂O]",
        options: ["12.5 cm³", "25.0 cm³", "50.0 cm³", "100.0 cm³"],
        answer: 0,
        explanation: "Gunakan (Ma × Va) / (Mb × Vb) = 1 / 2. (0.5 × Va) / (1.0 × 25) = 1 / 2  =>  Va = (25 × 1) / (0.5 × 2) = 25 / 1.0 = 25 / 2 = 12.5 cm³."
      },
      {
        q: "Antara garam berikut, yang manakah merupakan garam TAK TERLARUTKAN dalam air?",
        options: ["Kalium karbonat", "Plumbum(II) sulfat", "Zink klorida", "Kuprum(II) nitrat"],
        answer: 1,
        explanation: "Plumbum(II) sulfat, PbSO₄ (kumpulan PBC) ialah garam sulfat tak terlarutkan."
      },
      {
        q: "Satu larutan garam menghasilkan mendakan putih apabila ditambah sedikit larutan natrium hidroksida, NaOH. Mendakan putih tersebut larut dalam NaOH berlebihan dan juga larut dalam larutan ammonia, NH₃ berlebihan. Kation tersebut ialah:",
        options: ["Al³⁺", "Pb²⁺", "Zn²⁺", "Mg²⁺"],
        answer: 2,
        explanation: "Ion zink Zn²⁺ adalah satu-satunya kation yang mendakan putihnya larut dalam kedua-dua larutan NaOH berlebihan dan larutan NH₃ berlebihan."
      },
      {
        q: "Ujian cincin perang dijalankan ke atas suatu larutan garam X dan cincin perang terbentuk. Kehadiran anion apakah yang disahkan?",
        options: ["Ion Klorida, Cl⁻", "Ion Sulfat, SO₄²⁻", "Ion Karbonat, CO₃²⁻", "Ion Nitrat, NO₃⁻"],
        answer: 3,
        explanation: "Ujian cincin perang menggunakan FeSO₄ dan H₂SO₄ pekat adalah ujian pengesahan khusus untuk ion nitrat, NO₃⁻."
      }
    ],
    struktur: [
      {
        q: "Seorang murid dikehendaki menyediakan garam Barium sulfat, BaSO₄ di makmal.\n(a) Nyatakan sama ada garam Barium sulfat larut atau tidak larut dalam air.\n(b) Cadangkan DUA larutan akueus garam yang boleh digunakan untuk menyediakan Barium sulfat tersebut.\n(c) Tuliskan persamaan ion bagi tindak balas pemendakan yang berlaku.\n(d) Huraikan secara ringkas langkah-langkah untuk memperoleh hablur garam BaSO₄ yang kering dan tulen.",
        skema: [
          "(a) Barium sulfat ialah garam tak terlarutkan dalam air (garam tidak larut PBC).",
          "(b) Larutan Barium klorida, BaCl₂ (atau Barium nitrat, Ba(NO₃)₂) dan Larutan Natrium sulfat, Na₂SO₄ (atau Asid sulfurik cair, H₂SO₄).",
          "(c) Persamaan ion: Ba²⁺(ak) + SO₄²⁻(ak) -> BaSO₄(p).",
          "(d) Campurkan kedua-dua larutan akueus tersebut ke dalam bikar dan kacau. Turas campuran menggunakan kertas turas dan corong turas untuk mengasingkan mendakan BaSO₄. Basuh mendakan pada kertas turas dengan air suling untuk menyingkirkan sebarang bendasing. Keringkan mendakan di antara dua keping kertas turas."
        ]
      }
    ]
  },
  {
    id: "kimia-bab7",
    babNum: "BAB 7",
    title: "KADAR TINDAK BALAS",
    icon: "⏱️",
    anyflipPages: "Buku Teks Kimia Tingkatan 4 (Halaman 208 – 233)",
    synopsis: "Menganalisis kadar tindak balas (cepat vs perlahan), penentuan kadar purata dan kadar pada masa tertentu (kecerunan tangen graf), 5 faktor mempengaruhi kadar (saiz, kepekatan, suhu, mangkin, tekanan), serta Teori Perlanggaran dan tenaga pengaktifan (Ea).",
    notes: [
      {
        subtopic: "7.1 Pengenalan Kadar Tindak Balas & Pengiraannya",
        verbatim: [
          "DEFINISI KADAR TINDAK BALAS: Perubahan kuantiti bahan tindak balas atau hasil tindak balas per unit masa.",
          "KADAR TINDAK BALAS CEPAT VS PERLAHAN:",
          "- Cepat: Pembakaran gas metana, letupan mercun, tindak balas asid dengan logam reaktif (berlaku dalam beberapa saat).",
          "- Perlahan: Pengaratan besi, penapaian glukosa, fotosintesis (mengambil masa berhari-hari atau berbulan-bulan).",
          "PENGIRAAN KADAR TINDAK BALAS:",
          "1. Kadar Tindak Balas Purata = Jumlah perubahan kuantiti / Jumlah masa yang diambil",
          "2. Kadar Tindak Balas pada Masa Tertentu (t):",
          "   - Dilukis tangen pada graf isi padu gas melawan masa pada masa t.",
          "   - Kadar = Kecerunan tangen = Δy / Δx = (V₂ - V₁) / (t₂ - t₁)."
        ],
        explanation: "Semasa tindak balas berlangsung, kepekatan bahan semakin berkurang menyebabkan kadar tindak balas semakin perlahan sehingga akhirnya menjadi sifar (graf mendatar)."
      },
      {
        subtopic: "7.2 Faktor yang Mempengaruhi Kadar Tindak Balas",
        verbatim: [
          "5 FAKTOR MEMPENGARUHI KADAR TINDAK BALAS:",
          "1. Saiz Bahan Tindak Balas (Pepejal): Semakin kecil saiz bahan pepejal, semakin besar jumlah luas permukaan yang terdedah, semakin tinggi kadar tindak balas.",
          "2. Kepekatan (Larutan): Semakin tinggi kepekatan larutan, semakin banyak bilangan zarah per unit isi padu, semakin tinggi kadar tindak balas.",
          "3. Suhu (Larutan): Semakin tinggi suhu, semakin tinggi tenaga kinetik zarah, zarah bergerak lebih laju, semakin tinggi kadar tindak balas.",
          "4. Kehadiran Mangkin: Mangkin menyediakan LALUAN ALTERNATIF DENGAN TENAGA PENGAKTIFAN YANG LEBIH RENDAH (Eₐ), semakin tinggi kadar tindak balas.",
          "5. Tekanan (Gas): Semakin tinggi tekanan gas, zarah-zarah dimampatkan lebih rapat (bilangan zarah per unit isi padu bertambah), kadar meningkat."
        ],
        explanation: "Mangkin tidak diubah secara kimia pada akhir tindak balas dan jisim mangkin kekal sama sebelum dan selepas tindak balas."
      },
      {
        subtopic: "7.3 Teori Perlanggaran & Tenaga Pengaktifan (Ea)",
        verbatim: [
          "SYARAT PERLANGGARAN BERKESAN (TEORI PERLANGGARAN):",
          "Tindak balas kimia hanya berlaku jika zarah-zarah yang berlanggar memenuhi DUA syarat:",
          "1. Zarah berlanggar dengan ORIENTASI YANG BETUL.",
          "2. Zarah mempunyai TENAGA YANG SAMA ATAU MELEBIHI TENAGA PENGAKTIFAN (Eₐ).",
          "TENAGA PENGAKTIFAN (Eₐ): Tenaga minimum yang mesti dicapai oleh zarah-zarah yang berlanggar supaya tindak balas kimia dapat berlaku.",
          "FORMAT PENERANGAN SPM BERDASARKAN TEORI PERLANGGARAN:",
          "- Apabila [faktor dinaikkan], [huraian keadaan zarah].",
          "- FREKUENSI PERLANGGARAN antara zarah bertambah.",
          "- FREKUENSI PERLANGGARAN BERKESAN bertambah.",
          "- KADAR TINDAK BALAS MENINGKAT."
        ],
        explanation: "Peningkatan suhu sebanyak 10°C lazimnya menggandakan kadar tindak balas kerana lebih banyak zarah memperoleh tenaga kinetik melebihi tenaga pengaktifan Ea."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Kira Kecerunan Tangen pada Graf Isi Padu Gas",
        detail: "Lukiskan garis tangen lurus yang menyentuh lengkung pada masa t tertentu. Bina segi tiga bersudut tegak yang besar dan kira kecerunan m = (y2 - y1) / (x2 - x1).",
        tip: "Pastikan garis tangen menyentuh lengkung tepat pada satu titik sahaja tanpa memotong lengkung graf."
      },
      {
        step: "Langkah 2",
        title: "Tulis Penerangan Teori Perlanggaran untuk Kepekatan",
        detail: "Tulis mengikut turutan: (1) Bilangan zarah per unit isi padu bertambah (2) Frekuensi perlanggaran antara zarah bertambah (3) Frekuensi perlanggaran berkesan bertambah (4) Kadar tindak balas bertambah.",
        tip: "Sentiasa masukkan perkataan keramat 'per unit isi padu' untuk faktor kepekatan."
      },
      {
        step: "Langkah 3",
        title: "Tulis Penerangan Teori Perlanggaran untuk Suhu",
        detail: "Tulis: (1) Zarah menyerap tenaga haba bertukar ke tenaga kinetik (2) Zarah bergerak lebih laju (3) Lebih banyak zarah capai tenaga melebihi Ea (4) Frekuensi perlanggaran berkesan bertambah.",
        tip: "Faktor suhu melibatkan 'tenaga kinetik zarah', bukan bilangan zarah per isi padu."
      },
      {
        step: "Langkah 4",
        title: "Tulis Penerangan Teori Perlanggaran untuk Mangkin",
        detail: "Tulis: (1) Mangkin menyediakan laluan alternatif (2) Laluan alternatif mempunyai tenaga pengaktifan (Ea) lebih rendah (3) Lebih banyak zarah berjaya melepasi Ea (4) Frekuensi perlanggaran berkesan bertambah.",
        tip: "Lukis rajah profil tenaga untuk menunjukkan aras puncak Ea yang lebih rendah dengan kehadiran mangkin."
      }
    ],
    keypoints: [
      { badge: "DEFINISI", term: "Kadar Tindak Balas", meaning: "Perubahan kuantiti bahan atau hasil tindak balas per unit masa (cth: cm³ s⁻¹ atau g s⁻¹)." },
      { badge: "MINIMUM", term: "Tenaga Pengaktifan (Ea)", meaning: "Tenaga minimum yang mesti diatasi oleh zarah-zarah yang berlanggar agar tindak balas kimia berlaku." },
      { badge: "FAKTOR", term: "Keluasan Permukaan", meaning: "Semakin kecil saiz pepejal, semakin besar jumlah luas permukaan terdedah untuk perlanggaran zarah." },
      { badge: "TEORI", term: "Perlanggaran Berkesan", meaning: "Perlanggaran zarah dengan orientasi yang tepat dan tenaga kinetik sama atau melebihi Ea." },
      { badge: "FUNGSI", term: "Peranan Mangkin", meaning: "Mempercepatkan kadar tindak balas dengan menyediakan laluan alternatif bertenaga pengaktifan lebih rendah." }
    ],
    questions: [
      {
        q: "Antara tindak balas berikut, yang manakah mempunyai kadar tindak balas yang paling tinggi pada suhu bilik?",
        options: [
          "Pengaratan paku besi di udara lembap",
          "Fotosintesis tumbuhan hijau",
          "Pembakaran gas butana dalam dapur gas",
          "Penapaian larutan glukosa oleh yis"
        ],
        answer: 2,
        explanation: "Pembakaran gas butana berlaku serta-merta dalam beberapa saat dan merupakan tindak balas sangat cepat."
      },
      {
        q: "Ketulan zink bertindak balas dengan asid hidroklorik berlebihan menghasilkan gas hidrogen. Kaedah manakah yang akan MENINGKATKAN kadar tindak balas tersebut?",
        options: [
          "Menggantikan ketulan zink dengan serbuk zink berjisim sama",
          "Menurunkan suhu larutan asid hidroklorik",
          "Menambah air suling ke dalam larutan asid",
          "Menggunakan kelalang kon yang bersaiz lebih besar"
        ],
        answer: 0,
        explanation: "Serbuk zink mempunyai jumlah luas permukaan terdedah yang jauh lebih besar berbanding ketulan zink, meningkatkan frekuensi perlanggaran berkesan."
      },
      {
        q: "Bagaimanakah kehadiran mangkin seperti Mangan(IV) oksida, MnO₂ mempercepatkan penguraian hidrogen peroksida, H₂O₂?",
        options: [
          "Meningkatkan tenaga kinetik molekul hidrogen peroksida",
          "Menyediakan laluan tindak balas alternatif dengan tenaga pengaktifan yang lebih rendah",
          "Menambahkan bilangan molekul hidrogen peroksida dalam larutan",
          "Meningkatkan suhu campuran tindak balas secara mendadak"
        ],
        answer: 1,
        explanation: "Mangkin merendahkan halangan tenaga pengaktifan (Ea) dengan menyediakan laluan alternatif, membolehkan lebih banyak zarah berlanggar secara berkesan."
      },
      {
        q: "Dalam satu eksperimen, 50.0 cm³ gas hidrogen dikumpulkan dalam masa 25 saat daripada tindak balas asid dan pita magnesium. Apakah kadar tindak balas purata eksperimen tersebut?",
        options: ["0.5 cm³ s⁻¹", "2.0 cm³ s⁻¹", "25.0 cm³ s⁻¹", "50.0 cm³ s⁻¹"],
        answer: 1,
        explanation: "Kadar purata = Jumlah isi padu gas / Masa = 50.0 cm³ / 25 s = 2.0 cm³ s⁻¹."
      },
      {
        q: "Mengapakah makanan yang disimpan di dalam peti sejuk tahan lebih lama daripada makanan yang dibiarkan di atas meja dapur?",
        options: [
          "Suhu rendah menghentikan perlanggaran antara molekul sepenuhnya",
          "Suhu rendah merendahkan tenaga kinetik bakteria dan enzim, mengurangkan frekuensi perlanggaran berkesan",
          "Peti sejuk mengandungi gas lengai yang menghalang penguraian",
          "Kepekatan oksigen di dalam peti sejuk adalah sifar"
        ],
        answer: 1,
        explanation: "Pada suhu rendah, tenaga kinetik zarah berkurang dan enzim bakteria menjadi kurang aktif, maka kadar kerosakan makanan menjadi sangat perlahan."
      }
    ],
    struktur: [
      {
        q: "Dua set eksperimen dijalankan untuk menyiasat faktor yang mempengaruhi kadar tindak balas antara kalsium karbonat, CaCO₃ dengan 50 cm³ asid hidroklorik, HCl 1.0 mol dm⁻³:\n- Set I: 5 g ketulan marmar bersaiz besar pada suhu 30°C.\n- Set II: 5 g serbuk marmar halus pada suhu 30°C.\n(a) Nyatakan pemboleh ubah dimanipulasikan dan pemboleh ubah dimalarkan dalam eksperimen ini.\n(b) Set eksperimen manakah yang mempunyai kadar tindak balas lebih tinggi? Terangkan jawapan anda berlandaskan Teori Perlanggaran.\n(c) Lakarkan lengkung graf isi padu gas karbon dioksida melawan masa bagi kedua-dua Set I dan Set II pada paksi yang sama.",
        skema: [
          "(a) Pemboleh ubah dimanipulasi: Saiz kalsium karbonat (luas permukaan marmar) | Pemboleh ubah dimalarkan: Kepekatan dan isi padu asid hidroklorik (atau suhu tindak balas).",
          "(b) Set II mempunyai kadar tindak balas yang lebih tinggi. Penerangan Teori Perlanggaran: Serbuk marmar halus dalam Set II mempunyai jumlah luas permukaan terdedah yang lebih besar berbanding ketulan marmar besar dalam Set I. Oleh itu, frekuensi perlanggaran antara zarah kalsium karbonat dengan ion hidrogen bertambah, menyebabkan frekuensi perlanggaran berkesan bertambah dan kadar tindak balas meningkat.",
          "(c) Huraian lakaran graf: Lengkung Set II lebih curam pada peringkat awal (menunjukkan kadar awal lebih cepat), tetapi kedua-dua lengkung Set I dan Set II mendatar pada aras isi padu maksimum gas yang sama kerana jisim bahan mengehad (CaCO₃) yang digunakan dalam kedua-dua set adalah sama iaitu 5 g."
        ]
      }
    ]
  },
  {
    id: "kimia-bab8",
    babNum: "BAB 8",
    title: "BAHAN BUATAN DALAM INDUSTRI",
    icon: "🏭",
    anyflipPages: "Buku Teks Kimia Tingkatan 4 (Halaman 236 – 261)",
    synopsis: "Mengkaji bahan buatan dalam industri pembuatan moden: komposisi dan kelebihan aloi berbanding logam tulen, 4 jenis kaca dan kegunaannya, seramik tradisional vs termaju, serta bahan komposit berteknologi tinggi (gentian kaca, konkrit bertetulang, gentian optik, kaca fotokromik, superkonduktor).",
    notes: [
      {
        subtopic: "8.1 Aloi dan Kepentingannya",
        verbatim: [
          "DEFINISI ALOI: Campuran dua atau lebih unsur di mana unsur utamanya ialah LOGAM.",
          "TUJUAN PENGALOIAN:",
          "1. Menambah kekuatan dan kekerasan logam tulen.",
          "2. Mencegah kakisan dan pengaratan.",
          "3. Membaiki rupa bentuk permukaan supaya lebih berkilat dan menarik.",
          "SUSUNAN ATOM MENERANGKAN MENGAPA ALOI LEBIH KERAS DARIPADA LOGAM TULEN:",
          "- Logam tulen: Terdiri daripada atom-atom bersaiz sama yang tersusun rapat dan teratur. Apabila daya dikenakan, lapisan atom mudah menggelongsor di atas satu sama lain (bersifat lembut dan mudah kemek).",
          "- Aloi: Atom unsur asing yang berlainan saiz mengganggu susunan atom logam tulen yang teratur. Lapisan atom menjadi SUKAR MENGGELONGSOR di atas satu sama lain apabila daya dikenakan.",
          "KOMPOSISI DAN KEGUNAAN ALOI UTAMA:",
          "- Keluli (Steel): 99% Besi, 1% Karbon -> Pembinaan jambatan, rangka bangunan, landasan kereta api.",
          "- Keluli Tahan Karat (Stainless Steel): 74% Besi, 18% Kromium, 8% Nikel -> Alatan pembedahan, kutleri sudu garpu.",
          "- Gangsa (Bronze): 90% Kuprum, 10% Timah -> Pingat, tugu peringatan, patung ukiran.",
          "- Loyang (Brass): 70% Kuprum, 30% Zink -> Alat muzik trompet, tombol pintu, kunci.",
          "- Duralumin: 95% Aluminium, 4% Kuprum, 1% Magnesium -> Badan kapal terbang (ringan dan sangat kuat).",
          "- Piuter (Pewter): 95% Timah, 3.5% Antimoni, 1.5% Kuprum -> Cenderamata, piala hiasan."
        ],
        explanation: "Duralumin mempunyai ketumpatan rendah seperti aluminium tetapi memiliki kekuatan mekanikal tinggi setanding keluli, menjadikannya pilihan utama industri penerbangan."
      },
      {
        subtopic: "8.2 Komposisi Kaca & Kegunaannya",
        verbatim: [
          "KOMPONEN UTAMA KACA: Silika / Silikon dioksida (SiO₂) daripada pasir.",
          "4 JENIS KACA UTAMA:",
          "1. Kaca Silika Terlakur: 100% SiO₂. Takat lebur sangat tinggi (~1700°C), rintangan haba tinggi, telus kepada sinaran UV. Digunakan untuk kanta teleskop dan radas makmal optik.",
          "2. Kaca Soda Kapur: SiO₂ + Na₂CO₃ + CaCO₃. Takat lebur rendah, mudah dibentuk, murah, tetapi mudah retak jika suhu berubah mendadak. Digunakan untuk botol kaca, cermin tingkap, mentol lampu.",
          "3. Kaca Borosilikat (Pyrex): SiO₂ + B₂O₃ (Boron oksida) + Na₂O. Pekali pengembangan terma sangat rendah, tahan haba dan tidak mudah retak akibat kejutan haba, rintangan kimia tinggi. Digunakan untuk radas memasak ketuhar dan bikar/kelalang makmal.",
          "4. Kaca Plumbum (Kaca Kristal): SiO₂ + PbO (Plumbum(II) oksida) + Na₂O. Indeks biasan tinggi (berkilau bersinar) dan ketumpatan tinggi, menyerap sinaran X. Digunakan untuk barang hiasan kristal, gelas berkualiti tinggi, dan cermin pelindung sinaran radioaktif."
        ],
        explanation: "Penambahan boron oksida (B2O3) dalam kaca borosilikat mengurangkan pengembangan terma kaca secara ketara, membolehkan bikar Pyrex dipanaskan terus di atas penunu Bunsen tanpa retak."
      },
      {
        subtopic: "8.3 Seramik & Bahan Komposit Berteknologi Tinggi",
        verbatim: [
          "1. SERAMIK (Bahan bukan organik dan bukan logam yang dikeraskan melalui pemanasan suhu tinggi):",
          "- Sifat: Sangat keras, tahan haba tinggi, penebat elektrik dan haba cemerlang, lengai terhadap bahan kimia, tetapi rapuh.",
          "- Seramik Tradisional: Diperbuat daripada tanah liat kaolin (cth: pasu bata, jubin lantai, tembikar).",
          "- Seramik Termaju: Diperbuat daripada sebatian oksida/karbida tulen seperti silikon karbida (cth: cakera brek kereta lumba, palam pencucuh, implan pergigian zirkonia).",
          "2. BAHAN KOMPOSIT (Gabungan dua atau lebih bahan dengan matriks dan pengukuh menghasilkan sifat unggul):",
          "- Konkrit Bertetulang: Simen/pasir (matriks) + Rod keluli (pengukuh) -> Menampung daya mampatan dan regangan tinggi untuk membina jambatan dan bangunan pencakar langit.",
          "- Gentian Kaca (Fiberglass): Polimer plastik (matriks) + Gentian kaca (pengukuh) -> Kuat, ringan, tidak berkarat; untuk topi keledar, tangki air, badan bot.",
          "- Gentian Optik: Gentian kaca silika teras dalam bersalut kaca luar berindeks biasan rendah -> Menghantar data jalur lebar berkelajuan cahaya melalui pantulan dalam penuh.",
          "- Kaca Fotokromik: Kaca biasa digabungkan dengan hablur argentum klorida (AgCl) -> Menjadi gelap secara automatik apabila terdedah kepada sinaran UV dan cerah semula di dalam bilik.",
          "- Superkonduktor: Aloi seramik kuprum oksida -> Mengalirkan arus elektrik tanpa sebarang rintangan pada suhu lampau sejuk; untuk keretapi Maglev dan mesin MRI perubatan."
        ],
        explanation: "Bahan komposit menggabungkan kelebihan terbaik kedua-dua bahan komponen sambil mengatasi kelemahan masing-masing, menjadikannya asas inovasi kejuruteraan aeroangkasa dan pembinaan moden."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Lukis dan Terangkan Susunan Atom Logam vs Aloi",
        detail: "Lukis bulatan atom logam tulen yang sama saiz tersusun teratur. Dalam aloi, masukkan bulatan saiz berbeza (lebih besar/kecil) yang mengganggu baris susunan teratur.",
        tip: "Gunakan kata kunci SPM: 'Atom unsur asing mengganggu susunan atom logam tulen yang teratur dan menghalang lapisan atom daripada mudah menggelongsor'."
      },
      {
        step: "Langkah 2",
        title: "Bezakan 4 Jenis Kaca Berdasarkan Komposisi & Sifat",
        detail: "Kaca Soda Kapur = Murah/botol | Kaca Borosilikat (B₂O₃) = Tahan haba/bikar Pyrex | Kaca Plumbum (PbO) = Kilauan kristal/pelindung sinaran | Silika Terlakur = Kanta UV/takat lebur tertinggi.",
        tip: "Radas makmal kaca sentiasa diperbuat daripada kaca borosilikat kerana pekali pengembangannya sangat rendah."
      },
      {
        step: "Langkah 3",
        title: "Kenal Pasti Bahan Komposit Matriks dan Pengukuh",
        detail: "Contoh Konkrit bertetulang: Matriks = konkrit (simen + pasir), Pengukuh = bar keluli. Gentian kaca: Matriks = plastik polimer, Pengukuh = kaca gentian.",
        tip: "Bahan pengukuh memberikan kekuatan tegangan tinggi kepada bahan matriks yang menampung beban."
      },
      {
        step: "Langkah 4",
        title: "Huraikan Mekanisme Kaca Fotokromik",
        detail: "Apabila sinaran UV memancar, ion Ag⁺ menerima elektron membentuk atom Ag pepejal yang menyerap cahaya (kaca menjadi gelap). Di tempat redup, proses berbalik (kaca jernih semula).",
        tip: "Kaca fotokromik sangat popular digunakan sebagai kanta cermin mata pintar yang bertukar menjadi cermin mata hitam di luar rumah."
      }
    ],
    keypoints: [
      { badge: "LOGAM", term: "Aloi", meaning: "Campuran dua atau lebih unsur dengan logam sebagai juzuk utama untuk menambah kekerasan dan rintangan kakisan." },
      { badge: "STRUKTUR", term: "Gelongsoran Lapisan Atom", meaning: "Dihalang dalam aloi akibat kehadiran atom unsur asing yang berlainan saiz mengganggu susunan kekisi teratur." },
      { badge: "PYREX", term: "Kaca Borosilikat", meaning: "Kaca mengandungi boron oksida yang mempunyai ketahanan haba tinggi dan pekali pengembangan sangat rendah." },
      { badge: "MODEN", term: "Seramik Termaju", meaning: "Seramik berasaskan sebatian tulen seperti zirkonia dan silikon karbida untuk komponen enjin dan implan perubatan." },
      { badge: "GABUNGAN", term: "Bahan Komposit", meaning: "Bahan baharu yang terhasil daripada gabungan dua atau lebih bahan berlainan fasa (matriks dan pengukuh) dengan sifat unggul." }
    ],
    questions: [
      {
        q: "Duralumin merupakan sejenis aloi yang terdiri daripada 95% aluminium, 4% kuprum, dan 1% magnesium. Apakah kelebihan utama duralumin yang menjadikannya bahan pilihan utama dalam pembuatan badan kapal terbang?",
        options: [
          "Takat lebur yang sangat rendah",
          "Ketumpatan yang rendah dan kekuatan mekanikal yang sangat tinggi",
          "Boleh menyerap sinaran radioaktif",
          "Mudah berkarat apabila terdedah kepada hujan"
        ],
        answer: 1,
        explanation: "Duralumin mempunyai gabungan sifat unik iaitu sangat ringan (ketumpatan rendah) tetapi memiliki ketahanan dan kekuatan tegangan yang sangat tinggi."
      },
      {
        q: "Radas makmal seperti bikar dan kelalang kon diperbuat daripada kaca borosilikat kerana kaca jenis ini:",
        options: [
          "Mempunyai takat lebur yang paling rendah dan murah",
          "Mempunyai pekali pengembangan terma yang sangat rendah dan tahan kejutan haba",
          "Mengandungi plumbum oksida yang membiaskan cahaya dengan berkilau",
          "Mudah larut dalam asid hidroklorik"
        ],
        answer: 1,
        explanation: "Kaca borosilikat mengandungi boron trioksida (B₂O₃) yang mengurangkan pengembangan terma, membolehkannya dipanaskan tanpa mudah retak."
      },
      {
        q: "Mengapakah keluli tahan karat lebih tahan kakisan dan pengaratan berbanding besi tulen?",
        options: [
          "Penambahan kromium membentuk lapisan kromium oksida perlindungan yang tidak telus pada permukaan",
          "Atom karbon memusnahkan semua elektron besi",
          "Keluli tahan karat tidak mengandungi sebarang atom besi",
          "Keluli tahan karat sentiasa berada dalam keadaan leburan"
        ],
        answer: 0,
        explanation: "Kromium bertindak balas dengan oksigen di udara membentuk lapisan nipis kromium oksida pasif yang menghalang pengaratan berterusan."
      },
      {
        q: "Bahan komposit kaca fotokromik menjadi gelap apabila terdedah kepada sinaran matahari kerana kehadiran:",
        options: ["Hablur argentum klorida (AgCl)", "Gentian kaca silika", "Zarah plumbum oksida", "Rod keluli karbon"],
        answer: 0,
        explanation: "Sinaran UV menguraikan hablur argentum klorida menghasilkan atom perak suram yang menghalang laluan cahaya lalu menggelapkan kanta."
      },
      {
        q: "Antara bahan komposit berikut, yang manakah digunakan dalam industri telekomunikasi moden untuk menghantar data internet berkelajuan tinggi melalui pantulan dalam penuh cahaya?",
        options: ["Konkrit bertetulang", "Gentian optik", "Gentian kaca", "Superkonduktor"],
        answer: 1,
        explanation: "Gentian optik diperbuat daripada kaca silika berketulenan tinggi yang menghantar isyarat data dalam bentuk gelombang cahaya berterusan."
      }
    ],
    struktur: [
      {
        q: "Satu eksperimen dijalankan untuk membandingkan kekerasan antara kuprum tulen dan aloi gangsa (90% kuprum, 10% timah) dengan menjatuhkan pemberat 1 kg ke atas bebola keluli di atas blok logam masing-masing.\n(a) Nyatakan blok logam manakah yang akan menghasilkan diameter lekuk yang lebih kecil. Jelaskan mengapa.\n(b) Lukiskan susunan atom bagi logam kuprum tulen dan susunan atom bagi aloi gangsa.\n(c) Terangkan perbezaan susunan atom tersebut dalam mempengaruhi sifat kekerasan aloi gangsa.",
        skema: [
          "(a) Blok aloi gangsa akan menghasilkan diameter lekuk yang lebih kecil kerana gangsa adalah lebih keras dan lebih kuat berbanding kuprum tulen.",
          "(b) Lakaran susunan atom: Kuprum tulen dilukis sebagai atom-atom bersaiz sama tersusun rapat dalam barisan teratur. Gangsa dilukis dengan atom timah yang bersaiz lebih besar diselitkan di antara atom-atom kuprum, mengganggu keteraturan susunan baris.",
          "(c) Dalam kuprum tulen, semua atom adalah bersaiz sama dan tersusun rapat secara teratur. Apabila daya dikenakan, lapisan atom mudah menggelongsor di atas satu sama lain menyebabkan lekuk yang besar. Dalam gangsa, kehadiran atom timah yang bersaiz lebih besar daripada atom kuprum mengganggu susunan atom yang teratur. Ini menyukarkan dan menghalang lapisan atom daripada menggelongsor di atas satu sama lain apabila daya dikenakan, menjadikan aloi gangsa lebih keras dan tahan ubah bentuk."
        ]
      }
    ]
  }
];
