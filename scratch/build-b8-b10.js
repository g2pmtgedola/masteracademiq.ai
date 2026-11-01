const fs = require('fs');

// BAB 8: PILIHAN RAYA
const b8 = {
  id: "bab8",
  babNum: "BAB 8",
  title: "PILIHAN RAYA",
  icon: "🗳️",
  anyflipPages: "Buku Teks Sejarah Tingkatan 4 KSSM (Halaman 196 – 213)",
  synopsis: "Bab ini membincangkan sejarah perkembangan pilihan raya di Persekutuan Tanah Melayu bermula dari peringkat majlis perbandaran (Georgetown 1951, KL 1952) dan negeri 1954, proses pelaksanaan Pilihan Raya Umum Majlis Perundangan Persekutuan (MPP) Pertama pada 27 Julai 1955 (penetapan sempadan, pendaftaran pemilih, penamaan calon, kempen, dan pengundian), kemenangan besar Parti Perikatan (51 daripada 52 kerusi), pembentukan Majlis Perundangan Persekutuan, serta peranan Kabinet Pertama yang diketuai oleh Tunku Abdul Rahman sebagai Ketua Menteri.",
  notes: [
    {
      subtopic: "8.1 Perkembangan Pilihan Raya di Persekutuan Tanah Melayu",
      summary: "Pilihan raya diperkenalkan secara berperingkat sebagai asas amalan demokrasi berparlimen bermula di peringkat Majlis Perbandaran George Town (1951), Majlis Perbandaran Kuala Lumpur (1952), dan pilihan raya peringkat negeri pada tahun 1954.",
      verbatim: [
        "Pilihan Raya Majlis Perbandaran George Town (Disember 1951): Pilihan raya pertama diadakan untuk memilih 9 orang ahli majlis. Parti Radikal memenangi 5 kerusi.",
        "Pilihan Raya Majlis Perbandaran Kuala Lumpur (Februari 1952): Kerjasama ad-hoc UMNO Bahagian Kuala Lumpur (Dato' Abdul Razak & Yahya Abdul Razak) dan MCA Selangor (Kolonel H.S. Lee) memenangi 9 daripada 12 kerusi yang dipertandingkan.",
        "Pilihan Raya Peringkat Negeri (1954): Parti Perikatan memenangi 226 daripada 268 kerusi di seluruh negeri, membuktikan sokongan menyeluruh rakyat kepada kerjasama antara kaum.",
        "Kepentingan Pilihan Raya Tempatan: Memberi pendedahan awal dan kesedaran sivik kepada rakyat tentang proses demokrasi dan hak memilih wakil rakyat."
      ],
      explanation: "Kejayaan siri pilihan raya tempatan ini meyakinkan pihak British bahawa rakyat Persekutuan Tanah Melayu sudah bersedia sepenuhnya untuk mengadakan Pilihan Raya Umum peringkat kebangsaan."
    },
    {
      subtopic: "8.2 Proses Pilihan Raya Umum Pertama",
      summary: "Pilihan Raya Umum Majlis Perundangan Persekutuan (MPP) diadakan pada 27 Julai 1955 melibatkan persediaan rapi undang-undang, persempadanan kawasan, pendaftaran pengundi, hari penamaan calon, kempen, dan hari mengundi.",
      verbatim: [
        "Jawatankuasa Pilihan Raya: Dibentuk untuk mengkaji dan membuat cadangan penentuan kerusi (Suruhanjaya Rang Undang-Undang Pilihan Raya diluluskan Ogos 1954).",
        "Penetapan Sempadan Kawasan: T.E. Smith dilantik sebagai Penyelia Pilihan Raya. 52 kawasan pilihan raya persekutuan diwujudkan.",
        "Pendaftaran Pengundi: Seramai 1,280,000 orang pemilih mendaftar (84.2% Melayu, 11.2% Cina, 4.6% India).",
        "Penamaan Calon (15 Jun 1955): Seramai 129 calon bertanding mewakili pelbagai parti politik (Perikatan, Parti Negara, PAS, Persatuan Melayu Perak, Persatuan Kebangsaan Perak, Parti Buruh) dan calon Bebas.",
        "Kempen Pilihan Raya: Berlangsung selama 45 hari menggunakan poster, risalah, siaran radio, dan rapat umum.",
        "Keputusan Pilihan Raya (27 Julai 1955): Parti Perikatan mencapai kemenangan cemerlang dengan menyapu bersih 51 daripada 52 kerusi yang dipertandingkan, manakala 1 kerusi dimenangi oleh PAS di Kerian, Perak."
      ],
      explanation: "Kemenangan mutlak 51 kerusi membuktikan rakyat memberikan mandat penuh kepada Parti Perikatan untuk menuntut kemerdekaan daripada British."
    },
    {
      subtopic: "8.3 Penubuhan Majlis Perundangan Persekutuan",
      summary: "Kemenangan Parti Perikatan membawa kepada pembentukan Majlis Perundangan Persekutuan (MPP) yang dianggotai 52 ahli dipilih melalui pilihan raya dan ahli dilantik mewakili pelbagai sektor.",
      verbatim: [
        "Struktur Anggota MPP 1955: Mengandungi 52 ahli yang dipilih oleh rakyat dan 46 ahli yang dilantik oleh Pesuruhjaya Tinggi British (mewakili kepentingan perdagangan, perladangan, perlombongan, kesatuan sekerja, dan kaum minoriti).",
        "Perasmian MPP: Dirasmikan oleh Pesuruhjaya Tinggi British, Sir Donald MacGillivray pada 31 Ogos 1955 di Dewan Tunku Abdul Rahman, Jalan Ampang, Kuala Lumpur.",
        "Ucapan Tunku Abdul Rahman: Menegaskan bahawa MPP yang baharu ini bukan lagi sebuah majlis penjajah, sebaliknya permulaan kepada sebuah kerajaan yang dipilih oleh rakyat dan berjanji mencapai kemerdekaan dengan aman."
      ],
      explanation: "Pembentukan MPP 1955 merupakan langkah penting ke arah peralihan kuasa daripada pentadbiran birokrasi kolonial kepada wakil sah rakyat tempatan."
    },
    {
      subtopic: "8.4 Peranan Kabinet Pertama",
      summary: "Kabinet Pertama Persekutuan Tanah Melayu dibentuk pada 1 Ogos 1955 diketuai oleh Tunku Abdul Rahman sebagai Ketua Menteri bersama 10 orang menteri tempatan pelbagai kaum.",
      verbatim: [
        "Barisan Kabinet Pertama: Tunku Abdul Rahman Putra Al-Haj (Ketua Menteri & Menteri Dalam Negeri), Dato' Abdul Razak Hussein (Menteri Pelajaran), Dato' Sulaiman Dato' Abdul Rahman (Menteri Kerajaan Tempatan, Perumahan dan Kerja Raya), Kolonel H.S. Lee (Menteri Pengangkutan), V.T. Sambanthan (Menteri Buruh), Dr. Ismail Abdul Rahman (Menteri Hasil Bumi), Ong Yoke Lin (Menteri Pos dan Telekom), Abdul Aziz Ishak (Menteri Pertanian).",
        "Peranan Utama Kabinet: Membincangkan soal keselamatan dalam negeri dan pertahanan, menyusun perkhidmatan awam dengan menggantikan pegawai British dengan anak tempatan (proses Malayanisasi), serta menuntut rundingan kemerdekaan segera ke London.",
        "Misi Kemerdekaan: Tunku Abdul Rahman mengetuai rombongan kemerdekaan ke London pada Januari 1956 bagi memulakan rundingan perjanjian kemerdekaan dengan Pejabat Tanah Jajahan British."
      ],
      explanation: "Kejayaan Kabinet Pertama membuktikan keupayaan, kewibawaan, dan kematangan barisan pemimpin berbilang kaum mentadbir negara berdaulat dengan cemerlang."
    }
  ],
  steps: [
    {
      step: "Langkah 1",
      title: "Pilihan Raya Majlis Perbandaran KL 1952",
      detail: "UMNO dan MCA membentuk kerjasama strategik julung kali dan memenangi 9 daripada 12 kerusi, menjadi pelopor Parti Perikatan.",
      tip: "Pilihan Raya KL 1952 mengasaskan formula permuafakatan kaum."
    },
    {
      step: "Langkah 2",
      title: "Pendaftaran Pengundi & Penamaan Calon 1955",
      detail: "Seramai 1.28 juta rakyat mendaftar sebagai pengundi dan 129 calon dinamakan di 52 kawasan parlimen persekutuan.",
      tip: "Persempadanan 52 kawasan diselia oleh T.E. Smith."
    },
    {
      step: "Langkah 3",
      title: "Kemenangan Bergaya Parti Perikatan 51/52 Kerusi",
      detail: "Pada 27 Julai 1955, Parti Perikatan memperoleh mandat mutlak rakyat dengan memenangi 51 daripada 52 kerusi yang dipertandingkan.",
      tip: "Hanya satu kerusi terlepas iaitu kepada calon PAS di Kerian, Perak."
    },
    {
      step: "Langkah 4",
      title: "Pembentukan Kabinet Pertama Tunku Abdul Rahman",
      detail: "Tunku Abdul Rahman dilantik sebagai Ketua Menteri pertama mengetuai kabinet menteri berbilang kaum bagi merundingkan kemerdekaan di London.",
      tip: "Kabinet Pertama mengangkat sumpah pada Ogos 1955."
    }
  ],
  keypoints: [
    { term: "Pilihan Raya 1955", meaning: "Pilihan Raya Umum Majlis Perundangan Persekutuan Pertama diadakan pada 27 Julai 1955.", badge: "Peristiwa Penting" },
    { term: "51 daripada 52 Kerusi", meaning: "Jumlah kerusi yang dimenangi Parti Perikatan sekali gus memberikan mandat menuntut kemerdekaan.", badge: "Fakta Pilihan Raya" },
    { term: "T.E. Smith", meaning: "Penyelia Pilihan Raya Persekutuan yang menguruskan persempadanan 52 kawasan pilihan raya 1955.", badge: "Tokoh Pentadbiran" },
    { term: "Ketua Menteri", meaning: "Jawatan tertinggi yang disandang Tunku Abdul Rahman dalam Kabinet Pertama Persekutuan Tanah Melayu 1955.", badge: "Jawatan Pemimpin" },
    { term: "Malayanisasi", meaning: "Dasar menggantikan pegawai pentadbir British dengan pegawai tempatan dalam sektor perkhidmatan awam.", badge: "Dasar Pentadbiran" }
  ],
  questions: [
    {
      q: "Berapakah jumlah kerusi yang dimenangi oleh Parti Perikatan dalam Pilihan Raya Umum Majlis Perundangan Persekutuan 1955?",
      options: ["30 daripada 52 kerusi", "45 daripada 52 kerusi", "51 daripada 52 kerusi", "Kesemua 52 kerusi"],
      answer: 2,
      explanation: "Parti Perikatan memenangi 51 kerusi manakala satu kerusi dimenangi oleh calon PAS di kawasan Kerian, Perak."
    },
    {
      q: "Siapakah pegawai British yang dilantik menjadi Penyelia Pilihan Raya bagi Pilihan Raya Persekutuan Tanah Melayu 1955?",
      options: ["Sir Donald MacGillivray", "T.E. Smith", "Sir Gerald Templer", "Ralph Hone"],
      answer: 1,
      explanation: "T.E. Smith bertanggungjawab menyelia pendaftaran pengundi dan menetapkan sempadan 52 kawasan pilihan raya."
    },
    {
      q: "Siapakah yang dilantik memegang jawatan Ketua Menteri Persekutuan Tanah Melayu yang pertama pada tahun 1955?",
      options: ["Dato' Onn Jaafar", "Tunku Abdul Rahman Putra Al-Haj", "Dato' Abdul Razak Hussein", "Tan Cheng Lock"],
      answer: 1,
      explanation: "Tunku Abdul Rahman dilantik sebagai Ketua Menteri mengetuai barisan Kabinet Pertama."
    },
    {
      q: "Apakah portfolio kementerian yang dipegang oleh Dato' Abdul Razak Hussein dalam Kabinet Pertama 1955?",
      options: ["Menteri Pengangkutan", "Menteri Pelajaran", "Menteri Buruh", "Menteri Kesihatan"],
      answer: 1,
      explanation: "Dato' Abdul Razak Hussein menjadi Menteri Pelajaran pertama dan merangka Penyata Razak 1956."
    },
    {
      q: "Apakah kepentingan utama kemenangan Parti Perikatan dalam Pilihan Raya 1955 terhadap perjuangan kemerdekaan negara?",
      options: ["Memberi mandat mutlak kepada pemimpin tempatan untuk berunding kemerdekaan dengan kerajaan British", "Menyebabkan British membubarkan Majlis Raja-Raja", "Membatalkan undang-undang darurat secara serta-merta", "Menghapuskan perlembagaan bertulis"],
      answer: 0,
      explanation: "Mandat rakyat yang padu membuktikan keabsahan Parti Perikatan menuntut kemerdekaan penuh di London."
    }
  ],
  struktur: [
    {
      q: "Pilihan Raya Majlis Perundangan Persekutuan 1955 merupakan titik tolak penting ke arah pembentukan kerajaan berparlimen sendiri di Tanah Melayu.\n(a) Nyatakan dua syarat kelayakan untuk menjadi pengundi dalam Pilihan Raya 1955.\n(b) Jelaskan dua peranan penting yang dipikul oleh Kabinet Pertama pimpinan Tunku Abdul Rahman.\n(c) Mengapakah amalan pilihan raya telus penting dalam mengekalkan kestabilan sesebuah negara berdemokrasi?",
      skema: [
        "(a) Warganegara Persekutuan Tanah Melayu / Berumur 21 tahun ke atas / Bermastautin di Tanah Melayu sekurang-kurangnya 6 bulan [Mana-mana 2, 2m].",
        "(b) 1. Menggantikan pegawai-pegawai British dalam jabatan perkhidmatan awam dengan anak tempatan (proses Malayanisasi) [1m]. 2. Menyelaras dasar pertahanan dan keselamatan dalam negeri serta membentuk rombongan merundingkan kemerdekaan ke London [1m].",
        "(c) Pilihan raya yang telus menjamin hak rakyat memilih pemimpin secara bebas, mengelakkan konflik perebutan kuasa yang menggugat kestabilan politik, memberikan mandat moral yang sah kepada pemerintah untuk menggubal dasar kemakmuran, dan memupuk keyakinan pelabur antarabangsa [2m]."
      ]
    }
  ]
};

// BAB 9: PERLEMBAGAAN PERSEKUTUAN TANAH MELAYU 1957
const b9 = {
  id: "bab9",
  babNum: "BAB 9",
  title: "PERLEMBAGAAN PERSEKUTUAN TANAH MELAYU 1957",
  icon: "📜",
  anyflipPages: "Buku Teks Sejarah Tingkatan 4 KSSM (Halaman 216 – 231)",
  synopsis: "Bab ini merangkumi misi Rundingan Kemerdekaan ke London (Januari 1956), pemeteraian Perjanjian London 8 Februari 1956 yang menetapkan tarikh kemerdekaan 31 Ogos 1957, pengumuman rasmi di Padang Bandar Hilir Melaka, penubuhan dan peranan Suruhanjaya Perlembagaan Persekutuan Tanah Melayu (Suruhanjaya Reid), proses penerimaan 131 memorandum pelbagai kaum, perangkaan draf perlembagaan berasaskan pakatan murni, serta pengesahan teras Perjanjian Persekutuan Tanah Melayu 1957 (Raja Berperlembagaan, Demokrasi Berparlimen, Kedudukan Istimewa Melayu dan Hak Sah Kaum Lain, Agama Islam, Bahasa Melayu, dan Kewarganegaraan).",
  notes: [
    {
      subtopic: "9.1 Usaha Rundingan Kemerdekaan",
      summary: "Pada 1 Januari 1956, rombongan kemerdekaan Tanah Melayu berangkat ke London diketuai Tunku Abdul Rahman bersama 4 wakil Raja-raja Melayu dan 4 wakil Parti Perikatan.",
      verbatim: [
        "Wakil Rombongan ke London: Wakil Raja-raja Melayu (Dato' Panglima Bukit Gantang Haji Abdul Wahab, Encik Abdul Aziz Abdul Majid, Dato' Mohd Seth Mohammad Said, Dato' Nik Ahmad Kamil); Wakil Parti Perikatan (Tunku Abdul Rahman, Dato' Abdul Razak Hussein, H.S. Lee, Dr. Ismail Abdul Rahman).",
        "Perjanjian London (8 Februari 1956): Ditandatangani di Lancaster House, London antara Tunku Abdul Rahman dan Alan Lennox-Boyd (Setiausaha Tanah Jajahan British). Menetapkan tarikh kemerdekaan pada 31 Ogos 1957 dan pembentukan suruhanjaya bebas merangka perlembagaan.",
        "Pengumuman Kemerdekaan di Melaka (20 Februari 1956): Tunku Abdul Rahman disambut ribuan rakyat di Padang Bandar Hilir, Melaka dan mengumumkan tarikh rasmi kemerdekaan 31 Ogos 1957 disambut laungan keramat 'Merdeka'."
      ],
      explanation: "Permuafakatan erat antara Raja-raja Melayu dan pemimpin Perikatan memudahkan proses rundingan di London sehingga British bersetuju memberikan kemerdekaan tanpa pertumpahan darah."
    },
    {
      subtopic: "9.2 Peranan Suruhanjaya Perlembagaan Persekutuan Tanah Melayu",
      summary: "Suruhanjaya Reid ditubuhkan pada Mac 1956 diketuai Lord Reid dengan anggota pakar undang-undang Komanwel untuk merangka perlembagaan sebuah negara merdeka.",
      verbatim: [
        "Anggota Suruhanjaya Reid: Lord Reid (Pengerusi - Britain), Sir Ivor Jennings (Britain), Sir William McKell (Australia), B. Malik (India), dan Hakim Abdul Hamid (Pakistan).",
        "Tugas Suruhanjaya: Memeriksa isu-isu perlembagaan di seluruh Tanah Melayu, menerima memorandum pelbagai pihak (sebanyak 131 memorandum bertulis diterima daripada raja, persatuan dan individu), serta mengadakan 118 sesi perjumpaan dan pendengaran awam.",
        "Terma Rujukan: Membentuk kerajaan persekutuan yang kukuh, memelihara kedudukan Raja-raja Melayu sebagai Raja Berperlembagaan, menjamin kedudukan istimewa orang Melayu dan hak sah kaum lain, serta mewujudkan satu rupa bangsa kerakyatan yang sama."
      ],
      explanation: "Keahlian pakar luar negara memastikan sebuah draf perlembagaan yang bebas, adil, seimbang, dan menepati piawaian perundangan antarabangsa."
    },
    {
      subtopic: "9.3 Draf Perlembagaan Persekutuan Tanah Melayu",
      summary: "Suruhanjaya Reid menerbitkan draf perlembagaan pada Februari 1957 yang kemudiannya dibahaskan oleh Majlis Raja-Raja, UMNO, MCA, MIC dan diluluskan oleh MPP.",
      verbatim: [
        "Penerimaan & Perbahasan: Terdapat perbezaan pandangan mengenai isu kewarganegaraan jus soli, kedudukan bahasa Melayu dan agama Islam. Pemimpin Parti Perikatan mengadakan rundingan pakatan murni untuk mencari titik persefahaman.",
        "Cadangan Balas Parti Perikatan: Mengekalkan prinsip jus soli bersyarat, mengiktiraf Islam sebagai agama Persekutuan tetapi agama lain bebas diamalkan, serta menetapkan Bahasa Melayu sebagai bahasa kebangsaan rasmi dengan tempoh peralihan 10 tahun bagi bahasa Inggeris.",
        "Kelulusan: Draf perlembagaan yang dipinda diluluskan sebulat suara oleh Majlis Perundangan Persekutuan pada 27 Ogos 1957."
      ],
      explanation: "Penggubalan draf ini merupakan contoh terbaik permuafakatan dan tolak ansur luhur antara pelbagai kaum demi masa depan sebuah negara yang berdaulat."
    },
    {
      subtopic: "9.4 Perjanjian Persekutuan Tanah Melayu",
      summary: "Perjanjian Persekutuan Tanah Melayu 1957 ditandatangani oleh Raja-raja Melayu dan Pesuruhjaya Tinggi British pada 5 Ogos 1957, melahirkan Perlembagaan Merdeka 1957 dengan lima tonggak utama.",
      verbatim: [
        "Tonggak 1 - Raja Berperlembagaan dan Demokrasi Berparlimen: Yang di-Pertuan Agong dilantik sebagai Ketua Utama Negara bergilir setiap 5 tahun dalam kalangan sembilan Raja-raja Melayu.",
        "Tonggak 2 - Agama Islam: Diisytiharkan sebagai agama bagi Persekutuan, namun agama-agama lain boleh diamalkan dengan aman dan damai.",
        "Tonggak 3 - Bahasa Kebangsaan: Bahasa Melayu diiktiraf sebagai bahasa kebangsaan dan bahasa rasmi negara.",
        "Tonggak 4 - Kedudukan Istimewa Orang Melayu & Kepentingan Sah Kaum Lain: Yang di-Pertuan Agong bertanggungjawab memelihara kedudukan istimewa orang Melayu dan kaum bumiputera serta hak sah kaum bukan Melayu.",
        "Tonggak 5 - Kewarganegaraan: Diberikan melalui tiga cara: Kuat kuasa undang-undang, Pendaftaran (syarat dilonggarkan bagi bukan Melayu yang lahir di Tanah Melayu), dan Naturalisasi/Kemasukan."
      ],
      explanation: "Perlembagaan Persekutuan Tanah Melayu 1957 menjadi dokumen undang-undang tertinggi yang menjamin kedaulatan negara, keadilan sosial, dan hak asasi seluruh warganegara."
    }
  ],
  steps: [
    {
      step: "Langkah 1",
      title: "Misi Rombongan Kemerdekaan ke London 1956",
      detail: "Tunku Abdul Rahman memimpin rombongan 4 wakil Raja Melayu dan 4 wakil Perikatan menandatangani Perjanjian London menetapkan Merdeka 31 Ogos 1957.",
      tip: "Perjanjian London ditandatangani di Lancaster House."
    },
    {
      step: "Langkah 2",
      title: "Pengumuman Tarikh Merdeka di Bandar Hilir Melaka",
      detail: "Pada 20 Februari 1956, Tunku mengumumkan tarikh rasmi kemerdekaan kepada lebih 100,000 rakyat di Padang Bandar Hilir, Melaka.",
      tip: "Rakyat menyumbang barang kemas bagi membiayai rombongan ke London."
    },
    {
      step: "Langkah 3",
      title: "Rundingan Draf Suruhanjaya Reid 1956–1957",
      detail: "Lord Reid meneliti 131 memorandum bertulis daripada segenap lapisan masyarakat untuk merangka perlembagaan bebas.",
      tip: "Suruhanjaya Reid dianggotai 5 hakim Komanwel."
    },
    {
      step: "Langkah 4",
      title: "Pemeteraian Perjanjian PTM 5 Ogos 1957",
      detail: "Raja-raja Melayu dan British menandatangani Perjanjian Persekutuan Tanah Melayu 1957 mengesahkan Perlembagaan Merdeka.",
      tip: "Perlembagaan ini berkuat kuasa secara rasmi pada 31 Ogos 1957."
    }
  ],
  keypoints: [
    { term: "Perjanjian London 1956", meaning: "Perjanjian yang menetapkan 31 Ogos 1957 sebagai tarikh rasmi kemerdekaan Persekutuan Tanah Melayu.", badge: "Perjanjian Antarabangsa" },
    { term: "Suruhanjaya Reid", meaning: "Suruhanjaya bebas 5 pakar undang-undang Komanwel pimpinan Lord Reid yang merangka Perlembagaan PTM 1957.", badge: "Suruhanjaya Perlembagaan" },
    { term: "Yang di-Pertuan Agong", meaning: "Ketua Utama Negara bagi Persekutuan Tanah Melayu yang dipilih bergilir 5 tahun sekali oleh Majlis Raja-Raja.", badge: "Institusi Beraja" },
    { term: "Pakatan Murni", meaning: "Persetujuan tolak ansur antara UMNO, MCA dan MIC dalam memuktamadkan isu kewarganegaraan, bahasa, dan agama.", badge: "Permuafakatan Kaum" },
    { term: "Jus Soli Bersyarat", meaning: "Pemberian kewarganegaraan berasaskan kelahiran di Tanah Melayu dengan syarat ibu bapa telah bermastautin sah.", badge: "Syarat Kerakyatan" }
  ],
  questions: [
    {
      q: "Bilakah Perjanjian Kemerdekaan Tanah Melayu (Perjanjian London) ditandatangani di Lancaster House, London?",
      options: ["1 Januari 1956", "8 Februari 1956", "20 Februari 1956", "31 Ogos 1957"],
      answer: 1,
      explanation: "Perjanjian London ditandatangani pada 8 Februari 1956 antara Tunku Abdul Rahman dan Setiausaha Tanah Jajahan British."
    },
    {
      q: "Di manakah lokasi Tunku Abdul Rahman membuat pengumuman tarikh kemerdekaan sekembalinya dari London?",
      options: ["Stadium Merdeka, Kuala Lumpur", "Padang Bandar Hilir, Melaka", "Istana Negara, Kuala Lumpur", "Padang Kelab Selangor"],
      answer: 1,
      explanation: "Tunku mengumumkan tarikh keramat 31 Ogos 1957 di Padang Bandar Hilir, Melaka pada 20 Februari 1956."
    },
    {
      q: "Siapakah tokoh yang mempengerusikan Suruhanjaya Perlembagaan Persekutuan Tanah Melayu pada tahun 1956?",
      options: ["Sir Donald MacGillivray", "Lord Reid", "Sir Ivor Jennings", "Malcolm MacDonald"],
      answer: 1,
      explanation: "Suruhanjaya Reid dipengerusikan oleh Lord Reid, seorang hakim Mahkamah Rayuan Britain yang berpengaruh."
    },
    {
      q: "Berapakah jumlah memorandum bertulis yang diterima oleh Suruhanjaya Reid daripada pelbagai pihak dan pertubuhan?",
      options: ["52 memorandum", "118 memorandum", "131 memorandum", "226 memorandum"],
      answer: 2,
      explanation: "Sebanyak 131 memorandum bertulis diterima daripada Raja-raja Melayu, parti politik, persatuan perniagaan dan individu."
    },
    {
      q: "Berdasarkan Perlembagaan 1957, bagaimanakah pelantikan jawatan Yang di-Pertuan Agong dilaksanakan?",
      options: ["Dipilih melalui pilihan raya umum oleh rakyat", "Dipilih secara bergilir setiap 5 tahun oleh Majlis Raja-Raja dalam kalangan sembilan Raja Melayu", "Dilantik oleh Pesuruhjaya Tinggi British seumur hidup", "Diwarisi turun-temurun oleh Kesultanan Johor"],
      answer: 1,
      explanation: "Yang di-Pertuan Agong dipilih secara bergilir selama tempoh lima tahun oleh sembilan Raja-raja Melayu."
    }
  ],
  struktur: [
    {
      q: "Penggubalan Perlembagaan Persekutuan Tanah Melayu 1957 berasaskan semangat tolak ansur dan pakatan murni antara kaum.\n(a) Namakan dua negara Komanwel yang menghantar pakar undang-undang menyertai Suruhanjaya Reid.\n(b) Terangkan dua perkara utama yang dipersetujui dalam Perjanjian Persekutuan Tanah Melayu 1957 berkaitan kedudukan Islam dan bahasa kebangsaan.\n(c) Mengapakah perlembagaan dianggap sebagai undang-undang tertinggi yang wajib dipatuhi oleh seluruh warganegara?",
      skema: [
        "(a) Britain / Australia / India / Pakistan [Mana-mana 2 negara, 2m].",
        "(b) 1. Islam diisytiharkan sebagai agama Persekutuan, manakala agama-agama lain bebas diamalkan dengan damai [1m]. 2. Bahasa Melayu diiktiraf sebagai bahasa kebangsaan dan bahasa rasmi negara dengan tempoh penggunaan bahasa Inggeris selama 10 tahun pascamerdeka [1m].",
        "(c) Perlembagaan menjadi rujukan tertinggi yang mengawal kuasa pemerintah daripada bertindak zalim, menjamin hak asasi dan keselamatan setiap rakyat secara adil, mengekalkan kestabilan undang-undang negara, dan mengelakkan huru-hara serta anarki [2m]."
      ]
    }
  ]
};

// BAB 10: PEMASYHURAN KEMERDEKAAN
const b10 = {
  id: "bab10",
  babNum: "BAB 10",
  title: "PEMASYHURAN KEMERDEKAAN",
  icon: "🎆",
  anyflipPages: "Buku Teks Sejarah Tingkatan 4 KSSM (Halaman 234 – 253)",
  synopsis: "Bab ini mengupas maksud kemerdekaan menurut pandangan tokoh tempatan dan antarabangsa, persediaan rapi menyambut pemasyhuran (Jawatankuasa Persediaan Fizikal & Jawatankuasa Sambutan, Stadium Merdeka, Lagu Negaraku, Bendera Kebangsaan, Bunga Kebangsaan), detik bersejarah malam 30 Ogos 1957 di Padang Kelab Selangor (penurunan Union Jack dan pengibaran bendera Persekutuan), peristiwa pagi 31 Ogos 1957 di Stadium Merdeka (penyerahan Watikah Pemasyhuran Kemerdekaan, 7 kali laungan MERDEKA oleh Tunku, azan, dan tembakan 21 meriam), kesan kemerdekaan dari segi politik, ekonomi dan sosial, serta prinsip kedaulatan negara berdaulat.",
  notes: [
    {
      subtopic: "10.1 Pengertian Kemerdekaan",
      summary: "Kemerdekaan bermaksud bebas daripada sebarang cengkaman penjajahan asing, memiliki kedaulatan memerintah sendiri, dan hak menentukan hala tuju masa depan bangsa.",
      verbatim: [
        "Sayyid Jamal al-Din al-Afghani: Menegaskan kemerdekaan membolehkan umat Islam bersatu menentang pencerobohan penjajah dan memulihkan maruah.",
        "Mahatma Gandhi: Kemerdekaan merangkumi kebebasan daripada kemiskinan dan ketidakadilan, mewujudkan kehidupan aman tanpa keganasan.",
        "Nelson Mandela: Kemerdekaan bukan sekadar menanggalkan belenggu rantai, sebaliknya hidup dalam cara yang menghormati dan memajukan kebebasan orang lain.",
        "Soekarno: Kemerdekaan ibarat sebuah jambatan emas untuk membawa rakyat ke arah masyarakat adil, makmur dan sentosa.",
        "Tunku Abdul Rahman: Kemerdekaan ibarat tempat perhentian dalam perjalanan yang jauh untuk membina sebuah negara baharu yang berdaulat, bersatu padu, dan sejahtera."
      ],
      explanation: "Kemerdekaan bukan sekadar bebas dari belenggu fizikal kolonialisme, malah merangkumi kedaulatan jiwa, pemikiran merdeka, dan jati diri kebangsaan."
    },
    {
      subtopic: "10.2 Persediaan Menyambut Pemasyhuran Kemerdekaan",
      summary: "Kerajaan menubuhkan Jawatankuasa Pusat Perayaan Merdeka dipengerusikan Tunku Abdul Rahman, dipecahkan kepada Jawatankuasa Persediaan Fizikal dan Jawatankuasa Sambutan.",
      verbatim: [
        "Persediaan Fizikal: Pembinaan Stadium Merdeka dirangka oleh Tunku Abdul Rahman dan direka oleh arkitek S.E. Jewkes, siap dalam tempoh 11 bulan dengan kos $2.3 juta.",
        "Lagu Kebangsaan 'Negaraku': Berasal daripada melodi lagu 'Terang Bulan' (lagu kebangsaan negeri Perak). Lirik ditulis oleh Saiful Bahri yang mencerminkan kesetiaan dan kemakmuran.",
        "Bendera Persekutuan Tanah Melayu: Reka bentuk asal oleh Mohamed Hamzah (arkitek JKR Johor) dengan 11 jalur merah putih dan bulan bintang berlatar biru.",
        "Jata Negara & Bunga Kebangsaan: Jata Negara direka memperlihatkan lambang sembilan negeri Melayu dan Negeri Selat dengan cogan kata 'Bersekutu Bertambah Mutu'. Bunga Raya dipilih sebagai bunga kebangsaan pada 1960.",
        "Pakaian Khas Kemerdekaan: Tunku Abdul Rahman mereka pakaian khas 'Muskat' iaitu baju potongan leher cekak musang bersulam benang emas dipadankan tengkolok solek Dendang Tak Sudah."
      ],
      explanation: "Persediaan rapi ini menonjolkan lambang-lambang kebesaran identiti watan yang menyatukan seluruh rakyat di bawah satu panji kedaulatan."
    },
    {
      subtopic: "10.3 Detik Pemasyhuran Kemerdekaan Negara",
      summary: "Detik bersejarah kemerdekaan berlangsung melalui dua fasa iaitu malam 30 Ogos 1957 di Padang Kelab Selangor dan pagi 31 Ogos 1957 di Stadium Merdeka.",
      verbatim: [
        "Malam 30 Ogos 1957 (Padang Kelab Selangor): Tepat jam 11:58 malam, lampu dipadamkan sehingga seluruh padang bergelap gelita. Jam 12:00 tengah malam, lampu dinyalakan semula diiringi sorakan gemuruh. Bendera Union Jack diturunkan oleh Tahir Abdul Majid manakala bendera Persekutuan Tanah Melayu dinaikkan diiringi lagu Negaraku untuk kali pertama secara rasmi. Tunku dianugerahi gelaran 'Bapa Kemerdekaan'.",
        "Pagi 31 Ogos 1957 (Stadium Merdeka): Dihadiri lebih 20,000 rakyat, Raja-raja Melayu, dan tetamu kehormat antarabangsa dari 30 buah negara. Duke of Gloucester (wakil Ratu Elizabeth II) menyerahkan Watikah Pemasyhuran Kemerdekaan kepada Tunku Abdul Rahman.",
        "Laungan Keramat 'MERDEKA!': Tunku membacakan teks Pemasyhuran Kemerdekaan dalam tulisan Jawi lalu melaungkan perkataan 'MERDEKA!' sebanyak tujuh kali disahut dengan penuh gema oleh seluruh rakyat.",
        "Tembakan Meriam & Azan: Diikuti dengan 21 das tembakan meriam tanda penghormatan sebuah negara berdaulat, laungan azan oleh Ustaz Hassan Azhari tanda kesyukuran, dan lagu kebangsaan Negaraku dimainkan."
      ],
      explanation: "Peristiwa agung ini menandakan berakhirnya era penjajahan Barat selama 446 tahun di Tanah Melayu dan bermulanya fajar kedaulatan negara merdeka."
    },
    {
      subtopic: "10.4 Kesan Kemerdekaan terhadap Negara Kita",
      summary: "Kemerdekaan memberikan impak menyeluruh ke atas landskap politik antarabangsa, pertumbuhan ekonomi nasional, dan pembangunan sosial rakyat berbilang kaum.",
      verbatim: [
        "Kesan Politik: Pengamalan sistem Demokrasi Berparlimen dan Raja Berperlembagaan; Tunku Abdul Rahman dilantik Perdana Menteri pertama; Tuanku Abdul Rahman (Yang di-Pertuan Besar Negeri Sembilan) dipilih sebagai Yang di-Pertuan Agong pertama; Tanah Melayu diterima menjadi ahli ke-82 Pertubuhan Bangsa-Bangsa Bersatu (PBB) pada 17 September 1957 dan menyertai Komanwel.",
        "Kesan Ekonomi: Pelancaran Rancangan Malaya Pertama (1956–1960) untuk membangunkan sektor luar bandar; penubuhan FELDA (Lembaga Kemajuan Tanah Persekutuan) pada 1956 untuk membasmi kemiskinan dan membuka tanah rancangan baharu; penubuhan Bank Negara Tanah Melayu pada 1959.",
        "Kesan Sosial: Penubuhan Dewan Bahasa dan Pustaka (DBP) pada 1956 untuk memartabatkan bahasa Melayu; pelaksanaan Penyata Razak 1956; pembinaan hospital dan klinik desa; serta kemudahan bekalan elektrik dan air bersih ke kampung-kampung."
      ],
      explanation: "Kemerdekaan membolehkan kerajaan menumpukan sepenuh hasil kekayaan bumi untuk pembangunan kesejahteraan rakyat sendiri tanpa dieksploitasi penjajah."
    },
    {
      subtopic: "10.5 Prinsip Kedaulatan Persekutuan Tanah Melayu",
      summary: "Kedaulatan Persekutuan Tanah Melayu berpaksikan lima prinsip utama yang menjadi asas pertahanan dan integriti negara berdaulat.",
      verbatim: [
        "Wilayah Pengaruh: Mempunyai sempadan kawasan pemerintahan yang sah dan diiktiraf di peringkat antarabangsa (merangkumi 11 negeri di Semenanjung Tanah Melayu pada 1957).",
        "Kerajaan yang Sah: Dipilih secara demokratik melalui mandat pilihan raya yang adil berlandaskan Perlembagaan Persekutuan.",
        "Kedaulatan Undang-Undang: Perlembagaan sebagai undang-undang tertinggi yang menjamin ketenteraman awam dan perlindungan hak asasi seluruh rakyat.",
        "Rakyat: Penduduk setia yang terikat dengan undang-undang negara, memiliki satu identiti kebangsaan dan berkhidmat membela kedaulatan tanah air.",
        "Pengiktirafan Antarabangsa: Diterima sebagai anggota sah masyarakat dunia, menjalin hubungan diplomatik diplomatik antarabangsa, dan mempertahankan kedaulatan daripada campur tangan kuasa asing."
      ],
      explanation: "Prinsip-prinsip ini wajib dipertahankan oleh setiap generasi warganegara agar kedaulatan dan maruah tanah air sentiasa terpelihara sampai bila-bila."
    }
  ],
  steps: [
    {
      step: "Langkah 1",
      title: "Pembinaan Lambang Kebangsaan & Stadium Merdeka",
      detail: "Stadium Merdeka disiapkan dalam tempoh 11 bulan. Lagu Negaraku, bendera kebangsaan dan pakaian Muskat disediakan.",
      tip: "Stadium Merdeka direka khas oleh jurutera S.E. Jewkes."
    },
    {
      step: "Langkah 2",
      title: "Detik Jam 12 Malam 30 Ogos di Kelab Selangor",
      detail: "Lampu dipadamkan, Union Jack diturunkan, dan bendera Persekutuan Tanah Melayu dinaikkan menandakan penamatan era kolonial.",
      tip: "Tahir Abdul Majid menurunkan bendera Union Jack."
    },
    {
      step: "Langkah 3",
      title: "Istiadat Pemasyhuran di Stadium Merdeka 31 Ogos",
      detail: "Duke of Gloucester menyerahkan Watikah Kemerdekaan kepada Tunku. Tunku melaungkan 'MERDEKA!' sebanyak 7 kali.",
      tip: "Laungan Merdeka 7 kali melambangkan kegemilangan kemerdekaan."
    },
    {
      step: "Langkah 4",
      title: "Pengiktirafan PBB & Pembangunan Berdikari",
      detail: "Tanah Melayu diterima sebagai anggota PBB ke-82 dan melancarkan Rancangan Malaya Pertama serta FELDA.",
      tip: "Kemasukan PBB pada 17 September 1957 mengesahkan kedaulatan dunia."
    }
  ],
  keypoints: [
    { term: "Pemasyhuran Kemerdekaan", meaning: "Pengisytiharan rasmi kemerdekaan Persekutuan Tanah Melayu pada 31 Ogos 1957 di Stadium Merdeka.", badge: "Peristiwa Bersejarah" },
    { term: "Watikah Kemerdekaan", meaning: "Dokumen penyerahan kuasa kedaulatan daripada Ratu Elizabeth II kepada Persekutuan Tanah Melayu.", badge: "Dokumen Negara" },
    { term: "Stadium Merdeka", meaning: "Stadium bersejarah mercu tanda kemerdekaan yang dibina khusus untuk upacara pemasyhuran 31 Ogos 1957.", badge: "Mercu Tanda" },
    { term: "FELDA", meaning: "Lembaga Kemajuan Tanah Persekutuan ditubuhkan 1956 untuk membuka tanah pertanian dan meningkatkan taraf hidup rakyat.", badge: "Agensi Kemakmuran" },
    { term: "Anggota PBB ke-82", meaning: "Pengiktirafan antarabangsa kepada Persekutuan Tanah Melayu sebagai sebuah negara berdaulat pada September 1957.", badge: "Diplomasi Dunia" }
  ],
  questions: [
    {
      q: "Siapakah arkitek yang mereka bentuk Stadium Merdeka bagi upacara pemasyhuran kemerdekaan negara pada tahun 1957?",
      options: ["S.E. Jewkes", "Mohamed Hamzah", "Saiful Bahri", "A.C. Normal"],
      answer: 0,
      explanation: "Stadium Merdeka direka bentuk oleh jurutera dan arkitek Jabatan Kerja Raya, S.E. Jewkes atas ilham Tunku Abdul Rahman."
    },
    {
      q: "Apakah yang berlaku tepat pada jam 12:00 tengah malam 30 Ogos 1957 di Padang Kelab Selangor?",
      options: ["Pilihan raya persekutuan dimulakan", "Bendera Union Jack diturunkan dan bendera Persekutuan Tanah Melayu dinaikkan diiringi lagu Negaraku", "Perjanjian London ditandatangani", "Stadium Merdeka dirasmikan"],
      answer: 1,
      explanation: "Penurunan Union Jack dan pengibaran bendera Persekutuan menandakan tamatnya penjajahan British secara simbolik di Tanah Melayu."
    },
    {
      q: "Berapa kalikah Tunku Abdul Rahman melaungkan perkataan 'MERDEKA!' di Stadium Merdeka pada pagi 31 Ogos 1957?",
      options: ["3 kali", "5 kali", "7 kali", "10 kali"],
      answer: 2,
      explanation: "Tunku melaungkan perkataan keramat 'MERDEKA!' sebanyak tujuh kali yang disambut guruh oleh seluruh hadirin."
    },
    {
      q: "Siapakah yang melaungkan azan sejurus selepas pemasyhuran kemerdekaan dibacakan di Stadium Merdeka sebagai tanda kesyukuran?",
      options: ["Ustaz Hassan Azhari", "Dato' Onn Jaafar", "Sheikh Tahir Jalaluddin", "Mufti Selangor"],
      answer: 0,
      explanation: "Ustaz Hassan Azhari melaungkan azan di Stadium Merdeka menandakan kesyukuran lahirnya sebuah negara Islam berdaulat."
    },
    {
      q: "Apakah peranan utama agensi FELDA yang ditubuhkan pada tahun 1956 selepas kemerdekaan?",
      options: ["Membeli pesawat pejuang baharu", "Membuka tanah pertanian rancangan baharu untuk membasmi kemiskinan masyarakat luar bandar", "Menguruskan pilihan raya umum", "Mencetak mata wang ringgit"],
      answer: 1,
      explanation: "FELDA ditubuhkan untuk meningkatkan taraf ekonomi orang Melayu dan penduduk luar bandar melalui skim penempatan tanah rancangan."
    }
  ],
  struktur: [
    {
      q: "Detik 31 Ogos 1957 merupakan saat paling bersejarah apabila lahirnya sebuah negara merdeka dan berdaulat bernama Persekutuan Tanah Melayu.\n(a) Namakan wakil Ratu Elizabeth II yang menyerahkan Watikah Kemerdekaan kepada Tunku Abdul Rahman.\n(b) Jelaskan dua kesan kemerdekaan terhadap perkembangan sosial dan pendidikan negara.\n(c) Sebagai generasi pewaris kemerdekaan, bagaimanakah anda memainkan peranan untuk mengekalkan kedaulatan negara pada alaf moden ini?",
      skema: [
        "(a) Duke of Gloucester [1m].",
        "(b) 1. Penubuhan Dewan Bahasa dan Pustaka (DBP) untuk memartabatkan Bahasa Melayu sebagai bahasa perpaduan dan ilmu [1m]. 2. Pelaksanaan dasar pendidikan kebangsaan melalui Penyata Razak 1956 yang menyediakan peluang persekolahan seragam kepada semua kaum [1m].",
        "(c) Memainkan peranan dengan menuntut ilmu setinggi mungkin dalam bidang sains dan teknologi, memupuk semangat perpaduan merentas kaum dengan menolak fitnah di media sosial, mengamalkan prinsip Rukun Negara, dan bersedia menyumbang bakti demi kemakmuran dan kedaulatan tanah air tercinta [2m]."
      ]
    }
  ]
};

fs.writeFileSync('c:/antigravity3/scratch/b8.json', JSON.stringify(b8, null, 2), 'utf8');
fs.writeFileSync('c:/antigravity3/scratch/b9.json', JSON.stringify(b9, null, 2), 'utf8');
fs.writeFileSync('c:/antigravity3/scratch/b10.json', JSON.stringify(b10, null, 2), 'utf8');
console.log('Bab 8, 9 & 10 saved successfully.');
