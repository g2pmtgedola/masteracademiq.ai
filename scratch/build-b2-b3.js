const fs = require('fs');

const b2 = {
  id: "bab2",
  babNum: "BAB 2",
  title: "KEBANGKITAN NASIONALISME",
  icon: "🔥",
  anyflipPages: "Buku Teks Sejarah Tingkatan 4 KSSM (Halaman 22 – 47)",
  synopsis: "Bab ini mengupas maksud nasionalisme menurut tokoh-tokoh sejarawan, perkembangan idea nasionalisme di Barat (England, Amerika, Perancis), kebangkitan nasionalisme di Asia (India, China, Uthmaniyah/Mesir, Jepun), nasionalisme di Asia Tenggara (Filipina, Burma, Vietnam, Indonesia, Thailand), serta perkembangan dan faktor kemunculan gerakan nasionalisme di Tanah Melayu dari aspek agama, penulisan kreatif, akhbar dan persatuan.",
  notes: [
    {
      subtopic: "2.1 Maksud Nasionalisme",
      summary: "Nasionalisme bermaksud perasaan cinta yang mendalam terhadap bangsa dan negara, kesedaran untuk mencapai kemerdekaan serta membebaskan diri daripada cengkaman penjajah.",
      verbatim: [
        "Pandangan Tokoh Sejarah: Hans Kohn menyatakan nasionalisme ialah kesetiaan tertinggi manusia kepada negara bangsanya.",
        "Profesor William R. Roff: Kesedaran dan ketegasan diri orang Melayu dizahirkan melalui perasaan terancam terhadap kepentingan ekonomi dan kedudukan politik mereka.",
        "Dato' Onn Jaafar: Mengajak orang Melayu menzahirkan suatu bangsa yang lebih tegap dan kuat serta bangkit mempertahankan kedaulatan tanah air.",
        "Dr. Burhanuddin al-Helmi: Menegaskan nasionalisme Melayu berasaskan persatuan yang kukuh untuk menuntut kemerdekaan mutlak dengan pegangan adil dan saksama.",
        "Profesor Emeritus Tan Sri Dr. Khoo Kay Kim: Nasionalisme di Tanah Melayu merujuk kepada perjuangan orang Melayu mendapatkan kembali kedudukan unggul dalam negara sendiri."
      ],
      explanation: "Definisi nasionalisme berbeza mengikut konteks zaman dan latar belakang sejarah, namun terasnya sentiasa berpaksikan kecintaan kepada tanah air dan penentangan terhadap penjajahan asing."
    },
    {
      subtopic: "2.2 Perkembangan Idea Nasionalisme di Barat",
      summary: "Nasionalisme di Barat bermula daripada penentangan terhadap pemerintahan beraja mutlak dan penindasan kuasa penjajah: Revolusi Keagungan (England), Revolusi Amerika, dan Revolusi Perancis.",
      verbatim: [
        "Revolusi Keagungan (Glorious Revolution 1688) di England: Berlaku penentangan terhadap pemerintahan Raja James II yang mengabaikan parlimen. Mary II dan William of Orange menaiki takhta dan menandatangani 'Bill of Rights' mewujudkan Raja Berperlembagaan.",
        "Revolusi Amerika (1776): Penentangan 13 koloni British di Amerika terhadap Akta Gula, Akta Setem dan Akta Teh dengan slogan 'Tiada cukai tanpa perwakilan'. Thomas Jefferson mengisytiharkan Deklarasi Kemerdekaan Amerika 1776.",
        "Revolusi Perancis (1789): Dipelopori oleh pemikir seperti Jean Jacques Rousseau (teori Kontrak Sosial). Rakyat bangkit menentang kezaliman Raja Louis XVI dan golongan bangsawan. Mengisytiharkan Deklarasi Hak Asasi Manusia dengan prinsip Kebebasan, Persamaan dan Persaudaraan (Liberte, Egalite, Fraternite)."
      ],
      explanation: "Revolusi Barat menyebarkan idea kedaulatan rakyat, hak asasi individu, dan sistem pemerintahan berperlembagaan ke seluruh dunia termasuk ke negara-negara Asia."
    },
    {
      subtopic: "2.3 Perkembangan Nasionalisme di Asia",
      summary: "Gerakan kebangkitan rakyat di Asia didorong oleh keinginan membebaskan negara daripada penjajahan Barat dan memodenkan negara sendiri: India, China, Uthmaniyah/Mesir, dan Jepun.",
      verbatim: [
        "India: Bermula dengan Dahagi India 1857 menentang Syarikat Hindia Timur Inggeris (SHTI). Tokoh seperti Bal Gangadhar Tilak dan Mahatma Gandhi (mengamalkan konsep satyagraha iaitu perjuangan tanpa keganasan) memimpin Kongres Kebangsaan India (INC).",
        "China: Dipimpin oleh Dr. Sun Yat Sen menentang kelemahan Dinasti Manchu dan campur tangan kuasa Barat berasaskan Tiga Prinsip Rakyat (San Min Chu-i: Nasionalisme, Demokrasi, dan Kebajikan Sosial) yang membawa kepada Revolusi 1911.",
        "Empayar Uthmaniyah & Mesir: Gerakan Pan-Islamisme dipelopori oleh Sayyid Jamal al-Din al-Afghani mengajak umat Islam bersatu menentang penjajahan Barat. Gerakan Islah di Mesir oleh Muhammad Abduh menyeru pemulihan ajaran Islam sebenar.",
        "Jepun: Maharaja Meiji melancarkan Pemulihan Meiji 1868 untuk memodenkan ekonomi, pendidikan dan ketenteraan mengikut model Barat berlandaskan slogan 'Semangat Jepun, Teknologi Barat', menjadikan Jepun kuasa imperialis Asia."
      ],
      explanation: "Kejayaan Jepun menewaskan empayar Rusia dalam Perang Rusia-Jepun 1905 membakar semangat nasionalis di seluruh Asia bahawa bangsa Asia mampu mengalahkan kuasa besar Eropah."
    },
    {
      subtopic: "2.4 Perkembangan Nasionalisme di Asia Tenggara",
      summary: "Nasionalisme di Asia Tenggara berkembang di Filipina, Burma (Myanmar), Vietnam, Indonesia, dan Thailand untuk menolak penjajahan dan memelihara kedaulatan bangsa.",
      verbatim: [
        "Filipina: Jose Rizal memulakan Gerakan Propaganda melalui Liga Filipina menuntut hak sama rata. Andres Bonifacio menubuhkan Katipunan untuk melancarkan revolusi bersenjata menentang Sepanyol. Emilio Aguinaldo mengisytiharkan kemerdekaan Filipina 1898.",
        "Burma (Myanmar): Golongan sami Buddha menubuhkan Persatuan Belia Buddha (YMBA) pada 1906 menggunakan isu Kasut (memakai kasut di pagoda) untuk membangkitkan nasionalisme. Golongan Thakin (Revolusi Pelajar) dipimpin Aung San menuntut kemerdekaan.",
        "Vietnam: Dipelopori oleh Phan Boi Chau melalui pertubuhan Viet Nam Quang Phuc Hoi dan kemudiannya Ho Chi Minh menubuhkan Parti Komunis Vietnam menentang penjajah Perancis.",
        "Indonesia: Raden Adjeng Kartini memperjuangkan pendidikan wanita. Pertubuhan Sarekat Islam dan Parti Nasional Indonesia (PNI) pimpinan Soekarno memperjuangkan kemerdekaan melalui 'Sumpah Pemuda' 1928 (Satu Tanah Air, Satu Bangsa, Satu Bahasa).",
        "Thailand: Nasionalisme bersifat unik kerana tidak dijajah kuasa Barat. Dipimpin oleh Raja Chulalongkorn (Rama V) melalui pemodenan birokrasi dan Revolusi 1932 oleh Nai Pridi Phanomyong yang menukar monarki mutlak kepada monarki berperlembagaan."
      ],
      explanation: "Perjuangan nasionalis Asia Tenggara menentang penjajah Barat (Sepanyol/Amerika di Filipina, British di Burma, Perancis di Vietnam, Belanda di Indonesia) menyemarakkan lagi kesedaran politik di Tanah Melayu."
    },
    {
      subtopic: "2.5 Kesedaran Nasionalisme di Negara Kita",
      summary: "Kesedaran awal di Tanah Melayu bermula sejak zaman Kesultanan Melayu Melaka (menentang Portugis), perjuangan Sultan Kedah, Tok Janggut, Mat Salleh, Rentap dan Dato' Bahaman.",
      verbatim: [
        "Sultan Mahmud Shah memimpin serangan berulang kali terhadap Portugis di Melaka untuk memulihkan kedaulatan.",
        "Sultan Abdullah Mukarram Shah (Kedah) menentang penipuan Francis Light dan SHTI untuk mempertahankan Pulau Pinang.",
        "Perjuangan tokoh tempatan menentang campur tangan British: Dol Said di Naning, Rentap di Sarawak, Mat Salleh di Sabah, Tok Janggut di Kelantan, dan Haji Abdul Rahman Limbong di Terengganu.",
        "Perjuangan tokoh tempatan ini menjadi pemangkin kepada kebangkitan nasionalisme moden berorganisasi pada awal abad ke-20."
      ],
      explanation: "Walaupun penentangan bersenjata peringkat awal bersifat setempat, ia membuktikan bahawa rakyat tempatan tidak pernah rela menerima penjajahan asing."
    },
    {
      subtopic: "2.6 Faktor Kemunculan Gerakan Nasionalisme",
      summary: "Gerakan nasionalisme abad ke-20 didorong oleh enam faktor utama: Peranan Agama, Penulisan Kreatif, Media Cetak, Sistem Pendidikan, Kemunculan Golongan Intelektual, dan Pengaruh Luar.",
      verbatim: [
        "Peranan Agama: Gerakan Islah dipelopori Kaum Muda menyedarkan masyarakat kembali kepada al-Quran dan Hadis serta memajukan ekonomi dan pendidikan.",
        "Penulisan Kreatif: Novel (cth: Hikayat Faridah Hanom oleh Ahmad Rashid Talu, Putera Gunung Tahan oleh Ishak Haji Muhammad / Pak Sako) meniup semangat cinta akan tanah air.",
        "Media Cetak: Akhbar dan majalah seperti Utusan Melayu, Lembaga Malaya, Majlis, Warta Malaya dan Al-Ikhwan menyuarakan penderitaan rakyat dan mengkritik dasar British.",
        "Sistem Pendidikan: Maktab Perguruan Sultan Idris (MPSI) melahirkan guru-guru berjiwa pejuang kemerdekaan.",
        "Golongan Intelektual: Golongan berpendidikan agama (Kaum Muda), berpendidikan Melayu (lepasan MPSI), dan berpendidikan Inggeris (lepasan MCKK) memimpin persatuan masyarakat.",
        "Pengaruh Luar: Kejayaan Jepun mengalahkan Rusia 1905, Revolusi China 1911, dan perjuangan kemerdekaan India dan Indonesia membuka mata masyarakat tempatan."
      ],
      explanation: "Faktor-faktor ini berinteraksi mencetuskan kebangkitan intelektual yang mengubah pendekatan perjuangan daripada penentangan senjata kepada wacana minda dan persatuan politik."
    },
    {
      subtopic: "2.7 Perkembangan Nasionalisme",
      summary: "Perjuangan nasionalisme diterajui oleh tiga golongan utama: Intelektual Berpendidikan Agama (Kaum Muda), Berpendidikan Melayu, dan Berpendidikan Inggeris melalui pelbagai saluran.",
      verbatim: [
        "Intelektual Agama: Dipelopori Sheikh Muhammad Tahir Jalaluddin, Syed Sheikh al-Hadi dan Haji Abbas Mohd Taha. Menerbitkan majalah Al-Imam dan Neracha serta menubuhkan madrasah moden (Madrasah al-Masyhur di Pulau Pinang).",
        "Intelektual Melayu: Tokoh guru seperti Za'ba, Harun Aminurrashid, dan Abdul Hadi Hassan di MPSI membentuk Kesatuan Melayu Muda (KMM) pada 1938 dipimpin Ibrahim Haji Yaakob yang memperjuangkan kemerdekaan melalui gagasan 'Melayu Raya'.",
        "Intelektual Inggeris: Tokoh lepasan MCKK seperti Raja Chulan, Mohammad Eunos Abdullah dan Dato' Onn Jaafar menubuhkan Kesatuan Melayu Singapura (KMS) 1926 dan persatuan negeri-negeri Melayu bagi menuntut hak pendidikan dan peluang pekerjaan dalam pentadbiran kerajaan.",
        "Peranan Wanita: Tokoh seperti Zainun Sulaiman (Ibu Zain), Shamsiah Fakeh, dan Siti Rahmah Kassim membangkitkan kesedaran wanita dalam pendidikan dan politik kemerdekaan."
      ],
      explanation: "Kepelbagaian saluran ini menunjukkan bahawa gerakan nasionalisme telah disertai oleh segenap lapisan masyarakat merentas latar belakang pendidikan dan gender."
    },
    {
      subtopic: "2.8 Kesan Perkembangan Nasionalisme",
      summary: "Gerakan nasionalisme membawa kesan mendalam terhadap politik (peningkatan tuntutan kemerdekaan), ekonomi (penubuhan persatuan ekonomi Melayu), dan sosial (kemajuan pendidikan wanita dan persuratan).",
      verbatim: [
        "Kesan Politik: British melantik orang Melayu ke dalam Majlis Mesyuarat Persekutuan (Federal Council), meningkatkan tuntutan desentralisasi kuasa, serta kemunculan parti-parti politik awal.",
        "Kesan Ekonomi: Masyarakat Melayu menubuhkan syarikat bekerjasama dan tabung bantuan pelajar miskin untuk mengimbangi penguasaan ekonomi penjajah dan imigran.",
        "Kesan Sosial: Perkembangan pesat pendidikan untuk kaum wanita, penerbitan buku ilmiah, dan kesedaran memartabatkan bahasa Melayu sebagai bahasa perpaduan."
      ],
      explanation: "Kesedaran nasionalisme ini meletakkan tapak yang sangat kukuh kepada kebangkitan gerakan menentang Malayan Union selepas Perang Dunia Kedua."
    }
  ],
  steps: [
    {
      step: "Langkah 1",
      title: "Penyebaran Gerakan Islah oleh Kaum Muda",
      detail: "Sheikh Muhammad Tahir Jalaluddin dan Syed Sheikh al-Hadi menerbitkan majalah Al-Imam pada 1906 di Singapura menyuntik kesedaran agama dan kemajuan sains.",
      tip: "Al-Imam = Pelopor akhbar Islah pertama di Tanah Melayu."
    },
    {
      step: "Langkah 2",
      title: "Peranan Guru dan Penuntut MPSI",
      detail: "Maktab Perguruan Sultan Idris (MPSI) di Tanjung Malim menjadi pusat wacana pemikiran nasionalisme Melayu melalui penulisan novel dan persatuan sastera.",
      tip: "MPSI digelar 'The Cradle of Malay Nationalism'."
    },
    {
      step: "Langkah 3",
      title: "Penubuhan Kesatuan Melayu Singapura (KMS) 1926",
      detail: "Mohammad Eunos Abdullah menubuhkan KMS untuk memperjuangkan kebajikan orang Melayu dalam pentadbiran British dan menuntut penubuhan Kampung Melayu.",
      tip: "KMS = Persatuan sosio-politik Melayu pertama."
    },
    {
      step: "Langkah 4",
      title: "Penubuhan Kesatuan Melayu Muda (KMM) 1938",
      detail: "Ibrahim Haji Yaakob dan Ishak Haji Muhammad menubuhkan KMM, pertubuhan politik radikal pertama menuntut kemerdekaan mutlak daripada British melalui konsep Melayu Raya.",
      tip: "KMM bekerjasama dengan Jepun untuk mengusir British."
    }
  ],
  keypoints: [
    { term: "Nasionalisme", meaning: "Perasaan cinta yang mendalam terhadap bangsa dan negara serta azam memperjuangkan kemerdekaan.", badge: "Konsep Utama" },
    { term: "Kaum Muda", meaning: "Golongan intelektual agama berpendidikan Timur Tengah yang memperjuangkan Gerakan Islah.", badge: "Intelektual" },
    { term: "Satyagraha", meaning: "Prinsip perjuangan tanpa keganasan yang dipelopori oleh Mahatma Gandhi di India.", badge: "Fakta Antarabangsa" },
    { term: "San Min Chu-i", meaning: "Tiga Prinsip Rakyat ciptaan Dr. Sun Yat Sen: Nasionalisme, Demokrasi, dan Kebajikan Sosial.", badge: "Tokoh Asia" },
    { term: "Melayu Raya", meaning: "Gagasan penyatuan Tanah Melayu dengan Indonesia yang diperjuangkan oleh Kesatuan Melayu Muda (KMM).", badge: "Gagasan Politik" }
  ],
  questions: [
    {
      q: "Apakah matlamat utama perjuangan Mahatma Gandhi di India melalui konsep Satyagraha?",
      options: ["Melancarkan revolusi bersenjata", "Menentang penjajah British tanpa menggunakan keganasan", "Menubuhkan empayar tentera Hindu", "Menolak pemodenan sains Barat"],
      answer: 1,
      explanation: "Satyagraha berpegang kepada kebenaran dan ketabahan menentang ketidakadilan tanpa mengangkat senjata."
    },
    {
      q: "Apakah peranan utama majalah 'Al-Imam' yang diterbitkan di Singapura pada tahun 1906?",
      options: ["Menyebarkan fesyen Barat", "Menyebarkan idea Gerakan Islah dan mengajak umat Islam maju berlandaskan al-Quran dan Hadis", "Membantu pihak British memungut cukai", "Menyokong dasar imigrasi terbuka"],
      answer: 1,
      explanation: "Al-Imam dipelopori Kaum Muda untuk menyedarkan umat Islam tentang peri pentingnya kemajuan pendidikan dan pemurnian ajaran Islam."
    },
    {
      q: "Mengapakah Maktab Perguruan Sultan Idris (MPSI) dianggap sebagai 'Cradle of Malay Nationalism'?",
      options: ["Kerana membina senjata tradisional", "Kerana melahirkan ramai guru berpendidikan yang meniupkan api perjuangan kemerdekaan", "Kerana ditadbir sepenuhnya oleh Raja-raja Melayu", "Kerana menjadi pangkalan tentera darat"],
      answer: 1,
      explanation: "MPSI di Tanjung Malim melahirkan tokoh-tokoh penulis dan pemimpin politik seperti Za'ba, Harun Aminurrashid dan Ibrahim Haji Yaakob."
    },
    {
      q: "Apakah tuntutan utama Gerakan Propaganda pimpinan Jose Rizal di Filipina?",
      options: ["Penyatuan Filipina dengan Sepanyol sebagai sebuah wilayah dan hak sama rata", "Perang gerila di kawasan pergunungan", "Penyingkiran semua bangsa Eropah", "Pemisahan pulau Mindanao"],
      answer: 0,
      explanation: "Jose Rizal menuntut Filipina dijadikan wilayah Sepanyol dengan hak sama rata bagi bangsa Filipina sebelum Katipunan mengangkat senjata."
    },
    {
      q: "Apakah slogan yang digunakan dalam Revolusi Amerika 1776 menentang pengenaan cukai oleh British?",
      options: ["Darah dan Besi", "Tiada cukai tanpa perwakilan", "Kemerdekaan atau Maut", "Asia untuk Orang Asia"],
      answer: 1,
      explanation: "Penduduk 13 koloni Amerika menentang Parlimen British dengan slogan 'No taxation without representation'."
    }
  ],
  struktur: [
    {
      q: "Gerakan Islah yang dipelopori oleh Kaum Muda telah membawa nafas baharu kepada perjuangan nasionalisme di Tanah Melayu pada awal abad ke-20.\n(a) Namakan dua orang tokoh pelopor Kaum Muda di Tanah Melayu.\n(b) Jelaskan dua saluran yang digunakan oleh Kaum Muda untuk menyebarkan idea mereka.\n(c) Mengapakah golongan muda hari ini perlu mencontohi semangat nasionalis awal dalam mempertahankan kedaulatan negara?",
      skema: [
        "(a) Sheikh Muhammad Tahir Jalaluddin / Syed Sheikh al-Hadi / Haji Abbas Mohd Taha [Mana-mana 2, 2m].",
        "(b) 1. Menerbitkan akhbar dan majalah seperti Al-Imam, Neracha, dan Al-Ikhwan [1m]. 2. Menubuhkan madrasah moden seperti Madrasah al-Masyhur di Pulau Pinang untuk mendidik anak bangsa [1m].",
        "(c) Golongan muda perlu mencontohi semangat ini kerana mereka merupakan benteng pewaris negara. Penguasaan ilmu pengetahuan, integriti yang tinggi, dan kecintaan patriotik yang mendalam dapat mengelakkan negara dijajah semula dari segi pemikiran dan ekonomi [2m]."
      ]
    }
  ]
};

// BAB 3
const b3 = {
  id: "bab3",
  babNum: "BAB 3",
  title: "KONFLIK DUNIA DAN PENDUDUKAN JEPUN DI NEGARA KITA",
  icon: "⚔️",
  anyflipPages: "Buku Teks Sejarah Tingkatan 4 KSSM (Halaman 50 – 89)",
  synopsis: "Bab ini merangkumi latar belakang Perang Dunia Pertama dan Kedua di Eropah serta Asia Pasifik, faktor kedatangan tentera Jepun, dasar pendudukan tentera Jepun terhadap pentadbiran, ekonomi dan sosial, gerakan penentangan rakyat (Rejimen Askar Melayu, MPAJA, Force 136, Wataniah Pahang), perkembangan nasionalisme tempatan, dan keadaan huru-hara kekosongan kuasa selepas Jepun menyerah kalah.",
  notes: [
    {
      subtopic: "3.1 Nasionalisme di Negara Kita Sebelum Perang Dunia",
      summary: "Kesedaran awal dipengaruhi oleh penentangan terhadap British dan sokongan kepada Empayar Uthmaniyah yang dianggap pelindung kedaulatan umat Islam.",
      verbatim: [
        "Pengaruh Gerakan Pan-Islamisme: Perang Dunia Pertama menyaksikan sokongan orang Melayu kepada Empayar Uthmaniyah. British bimbang penentangan orang Melayu lalu memperkenalkan Enakmen Penerbitan Buku 1915 untuk menyekat pengaruh Islam anti-British.",
        "Penentangan Tok Janggut 1915 di Pasir Puteh, Kelantan: Berpunca daripada pengenalan sistem cukai British dan dipengaruhi oleh seruan jihad Empayar Uthmaniyah menentang pihak Bersekutu.",
        "Kesedaran Politik: Akhbar Melayu terus mengkritik dasar imperialisme British dan memupuk kesedaran mempertahankan tanah air."
      ],
      explanation: "British memandang serius kesetiaan orang Melayu kepada Khilafah Uthmaniyah dan bertindak mengetatkan kawalan politik serta undang-undang keselamatan."
    },
    {
      subtopic: "3.2 Latar Belakang Perang Dunia Pertama",
      summary: "Perang Dunia Pertama (1914–1918) berlaku akibat persaingan kuasa imperialis Barat, krisis pakatan ketenteraan (Pakatan Bertiga vs Kuasa Tengah), dan pembunuhan Archduke Franz Ferdinand.",
      verbatim: [
        "Faktor Pencetus: Persaingan imperialisme mendapatkan tanah jajahan, perlumbaan senjata, pembentukan Pakatan Bertiga (Britain, Perancis, Rusia) dan Kuasa Tengah (Jerman, Austria-Hungary, Empayar Uthmaniyah).",
        "Peristiwa Krisis Balkan: Pembunuhan Archduke Franz Ferdinand (Putera Mahkota Austria-Hungary) oleh pemuda Serbia di Sarajevo mencetuskan pengisytiharan perang pada 28 Julai 1914.",
        "Kesan Perang: Perjanjian Versailles 1919 yang mengenakan hukuman berat dan pampasan perang melampau ke atas Jerman, penubuhan Liga Bangsa-Bangsa, serta keruntuhan empayar beraja di Eropah."
      ],
      explanation: "Syarat Perjanjian Versailles yang menindas Jerman menyemai rasa tidak puas hati dan dendam yang akhirnya mencetuskan Perang Dunia Kedua dua dekad kemudian."
    },
    {
      subtopic: "3.3 Perang Dunia Kedua di Eropah",
      summary: "Perang Dunia Kedua (1939–1945) di Eropah tercetus akibat ketidakpuasan hati terhadap Perjanjian Versailles, kegagalan Liga Bangsa-Bangsa, dan kebangkitan ideologi Fasisme serta Nazisme.",
      verbatim: [
        "Kemunculan Fasisme di Itali (Benito Mussolini) dan Nazisme di Jerman (Adolf Hitler) yang mengagungkan bangsa Aryan dan melanggar Perjanjian Versailles.",
        "Pencetus Perang: Jerman melancarkan serangan kilat (Blitzkrieg) ke atas Poland pada 1 September 1939, menyebabkan Britain dan Perancis mengisytiharkan perang ke atas Jerman.",
        "Dua Pakatan: Kuasa Paksi (Jerman, Itali, Jepun) menentang Kuasa Bersekutu (Britain, Perancis, Soviet Union, Amerika Syarikat).",
        "Kekalahan Kuasa Paksi: Serangan tentera Bersekutu pada Hari-D (D-Day) di Normandy, Perancis pada 6 Jun 1944 dan penawanan Berlin oleh Soviet Union membawa kepada penyerahan kalah Jerman pada Mei 1945."
      ],
      explanation: "Perang ini melibatkan teknologi ketenteraan moden dan kemusnahan infrastruktur serta kehilangan jutaan nyawa di seluruh benua Eropah."
    },
    {
      subtopic: "3.4 Perang Dunia Kedua di Asia Pasifik",
      summary: "Perang di Asia Pasifik (1941–1945) berpunca daripada dasar imperialisme tentera Jepun untuk menguasai pasaran dan bahan mentah di bawah slogan Kawasan Kesemakmuran Bersama Asia Timur Raya.",
      verbatim: [
        "Dasar Perluasan Kuasa Jepun: Dipimpin oleh Jeneral Hideki Tojo akibat pertambahan penduduk dan keperluan mendesak terhadap petroleum, bijih timah dan getah.",
        "Sekatan Ekonomi: Kuasa Bersekutu (Amerika Syarikat, Britain, Belanda) mengenakan sekatan ekonomi terhadap Jepun berikutan pencerobohan Jepun ke atas China dan Indochina.",
        "Serangan Pearl Harbor: Jepun melancarkan serangan mengejut memusnahkan armada laut Amerika Syarikat di Pearl Harbor, Hawaii pada 7 Disember 1941.",
        "Kemaraan Pantas Jepun: Jepun menakluki Tanah Melayu, Singapura, Filipina, Burma dan Hindia Timur (Indonesia) dalam tempoh yang sangat singkat."
      ],
      explanation: "Serangan serentak Jepun melumpuhkan kubu pertahanan British di Singapura dan menamatkan mitos kekuatan kebal kuasa penjajah kulit putih di Asia Tenggara."
    },
    {
      subtopic: "3.5 Faktor Kedatangan Jepun ke Negara Kita",
      summary: "Jepun mendarat di Kota Bharu, Kelantan pada 8 Disember 1941 didorong oleh faktor eksploitasi ekonomi dan kepentingan pangkalan strategi ketenteraan.",
      verbatim: [
        "Eksploitasi Bahan Mentah: Menguasai bekalan getah dan bijih timah di Tanah Melayu serta minyak mentah di Miri dan Lutong, Sarawak bagi membiayai jentera industri perang Jepun.",
        "Kepentingan Strategik Tentera: Kedudukan geografi Tanah Melayu dan Singapura di persimpangan laluan perdagangan antarabangsa membuka jalan menguasai pangkalan tentera laut Bersekutu.",
        "Propaganda Menarik Hati Rakyat: Menggunakan slogan 'Asia untuk Orang Asia' dan 'Semangat Asia' serta gambaran Jepun sebagai pembela membebaskan bangsa Asia daripada penjajahan Barat."
      ],
      explanation: "Kejayaan Jepun menawan seluruh Semenanjung Tanah Melayu dalam masa 70 hari membuktikan perancangan rapi tentera Jepun menggunakan basikal dan bot laju."
    },
    {
      subtopic: "3.6 Dasar Pendudukan Jepun di Negara Kita",
      summary: "Jepun melaksanakan dasar ketenteraan yang ketat merangkumi pentadbiran Malai Baru, eksploitasi ekonomi sara diri, dan indoktrinasi budaya Jepun.",
      verbatim: [
        "Dasar Pentadbiran: Tanah Melayu dan Sumatera digabungkan di bawah pentadbiran tentera 'Malai Baru' berpusat di Singapura (Syonan-to). Empat negeri utara (Kedah, Perlis, Kelantan, Terengganu) diserahkan kepada Thailand sebagai ganjaran kerjasama.",
        "Dasar Ekonomi: Sistem ekonomi kawalan diperkenalkan. Mencetak 'wang pokok pisang' secara tidak terkawal menyebabkan inflasi teruk. Catuan makanan dikenakan dan rakyat terpaksa bergantung kepada ubi kayu.",
        "Dasar Sosial: Menutup sekolah Inggeris dan Cina, mewajibkan pembelajaran bahasa Jepun (Nippon-go), menyanyikan lagu Kimigayo, dan membongkok hormat ke arah Maharaja Jepun (Seikerei).",
        "Kezaliman Kempeitai: Pasukan polis tentera Jepun bertindak kejam menyeksa sesiapa yang disyaki menentang, terutamanya pembunuhan beramai-ramai orang Cina (Operasi Sook Ching)."
      ],
      explanation: "Penderitaan hidup, kekurangan zat makanan, dan kekejaman fizikal menyedarkan rakyat bahawa penjajahan Jepun jauh lebih zalim daripada pentadbiran British."
    },
    {
      subtopic: "3.7 Perjuangan Rakyat Menentang Pendudukan Jepun",
      summary: "Rakyat tempatan bangkit menentang Jepun secara bersenjata dan gerila: Rejimen Askar Melayu, MPAJA, Force 136, Wataniah Pahang, serta perjuangan individu.",
      verbatim: [
        "Rejimen Askar Melayu: Menunjukkan keberanian luar biasa mempertahankan benteng pertahanan terakhir di Pasir Panjang dan Bukit Candu, Singapura dipimpin oleh Leftenan Adnan Saidi yang gugur syahid.",
        "Malayan People's Anti-Japanese Army (MPAJA): Pasukan gerila pimpinan Parti Komunis Malaya (PKM) yang beroperasi dari dalam hutan dengan bantuan kewangan dan senjata daripada pihak Bersekutu.",
        "Force 136: Pasukan khas tentera Bersekutu yang dianggotai anak Melayu tempatan (seperti Mejar Tengku Mahmood Mahyiddeen, Kapten Ibrahim Ismail) yang menyusup masuk melalui kapal selam dan payung terjun.",
        "Pasukan Askar Melayu Setia & Wataniah Pahang: Gerila Melayu dipimpin Yeop Mahidin Mohamed Shariff bekerjasama dengan Force 136 menggempur tentera Jepun.",
        "Perjuangan Individu: Sybil Kathigasu (jururawat di Papan, Perak yang merawat gerila anti-Jepun secara rahsia) dan Gurchan Singh (Lion of Malaya menyebarkan risalah berita perang Bersekutu)."
      ],
      explanation: "Penentangan pelbagai lapisan masyarakat ini membangkitkan keperwiraan dan keyakinan bahawa rakyat tempatan mampu memegang senjata mempertahankan maruah tanah air."
    },
    {
      subtopic: "3.8 Perkembangan Gerakan Nasionalisme Tempatan dan Pendudukan Jepun",
      summary: "Pendudukan Jepun menyemarakkan lagi cita-cita kemerdekaan melalui penubuhan Kesatuan Rakyat Indonesia Semenanjung (KRIS) dan latihan ketenteraan Giyu Gun.",
      verbatim: [
        "Perkembangan KMM & KRIS: Pemimpin KMM seperti Ibrahim Haji Yaakob dan Dr. Burhanuddin al-Helmi bekerjasama dengan Soekarno menubuhkan KRIS untuk mencapai kemerdekaan bersama Indonesia melalui 'Melayu Raya'.",
        "Pasukan Separa Tentera: Pembentukan Giyu Gun (tentera sukarela) dan Giyu Tai (pengawal pantai) memberikan latihan ketenteraan taktikal kepada pemuda tempatan yang kelak digunakan menentang kembalinya British.",
        "Kebangkitan Nasionalisme Sarawak dan Sabah: Gerakan penentangan gerila tempatan seperti Pemberontakan Jesselton 1943 pimpinan Albert Kwok menentang kezaliman Jepun di Sabah."
      ],
      explanation: "Pengalaman mentadbir dan latihan senjata semasa era Jepun melenyapkan rasa rendah diri penduduk tempatan terhadap kekuasaan Barat."
    },
    {
      subtopic: "3.9 Keadaan Negara Kita Selepas Kekalahan Jepun",
      summary: "Pengguguran bom atom di Hiroshima dan Nagasaki menamatkan perang, mewujudkan kekosongan kuasa selama 14 hari yang dieksploitasi oleh Bintang Tiga (MPAJA).",
      verbatim: [
        "Kekalahan Jepun: Amerika Syarikat menggugurkan bom atom 'Little Boy' di Hiroshima (6 Ogos 1945) dan 'Fat Man' di Nagasaki (9 Ogos 1945). Maharaja Hirohito mengumumkan penyerahan kalah tanpa syarat pada 15 Ogos 1945.",
        "Kekosongan Kuasa 14 Hari: British lambat mendarat semula di Tanah Melayu mewujudkan tempoh anarki.",
        "Kekuasaan Bintang Tiga (MPAJA): Pasukan komunis Bintang Tiga keluar dari hutan dan menguasai bandar-bandar, balai polis dan pejabat pos selama 14 hari, melakukan pembunuhan kejam terhadap orang yang dianggap bersubahat dengan Jepun.",
        "Ketegangan Kaum dan Tindak Balas Orang Melayu: Keganasan Bintang Tiga mencetuskan konflik perkauman berdarah di Batu Pahat, Muar dan Sungai Manik. Orang Melayu bangkit mempertahankan diri dipimpin Kiai Salleh melalui gerakan Tentera Selempang Merah.",
        "Usaha Pemulihan Keamanan: Raja-raja Melayu dan pemimpin tempatan seperti Dato' Onn Jaafar berjaya mendamaikan perbalahan kaum dan meredakan ketegangan."
      ],
      explanation: "Tragedi 14 hari kekuasaan Bintang Tiga memberi pengajaran berharga tentang pentingnya memelihara keharmonian kaum dan menyedarkan orang Melayu akan bahaya ancaman komunis."
    }
  ],
  steps: [
    {
      step: "Langkah 1",
      title: "Pendaratan Pantas Tentera Jepun",
      detail: "Tentera Jepun pimpinan Leftenan Jeneral Tomoyuki Yamashita mendarat serentak di Singgora, Patani dan Kota Bharu pada 8 Disember 1941 menggunakan taktik basikal.",
      tip: "Tanah Melayu jatuh ke tangan Jepun dalam masa 70 hari."
    },
    {
      step: "Langkah 2",
      title: "Pertahanan Berani Rejimen Askar Melayu",
      detail: "Leftenan Adnan Saidi bersama pasukannya bertempur habis-habisan menentang kemaraan tentera Jepun di Bukit Candu, Pasir Panjang Singapura.",
      tip: "Bukit Candu = Simbol keberanian wira negara menentang penceroboh."
    },
    {
      step: "Langkah 3",
      title: "Operasi Gerila Rahsia Force 136",
      detail: "Anggota Force 136 disusup masuk ke Tanah Melayu untuk mengumpul maklumat perisikan, melatih pejuang gerila tempatan dan mensabotaj kubu tentera Jepun.",
      tip: "Force 136 bekerjasama rapat dengan Askar Melayu Setia."
    },
    {
      step: "Langkah 4",
      title: "Penyerahan Kalah Jepun & Pendaratan BMA",
      detail: "Selepas pengeboman Hiroshima dan Nagasaki, Jeneral Seishiro Itagaki menandatangani surat penyerahan kalah di Singapura pada 12 September 1945 di hadapan Lord Mountbatten.",
      tip: "British menubuhkan BMA untuk mengambil alih kuasa."
    }
  ],
  keypoints: [
    { term: "Kawasan Kesemakmuran Bersama Asia Timur Raya", meaning: "Rancangan imperialisme Jepun untuk menguasai pasaran dan bahan mentah negara-negara Asia Tenggara.", badge: "Dasar Jepun" },
    { term: "Malai Baru", meaning: "Nama pentadbiran tentera Jepun yang menggabungkan Tanah Melayu dan Sumatera di bawah satu pusat kuasa di Singapura.", badge: "Pentadbiran Jepun" },
    { term: "Kempeitai", meaning: "Pasukan polis rahsia tentera Jepun yang terkenal dengan kekejaman menyoal siasat dan menghukum musuh.", badge: "Pasukan Tentera" },
    { term: "Force 136", meaning: "Unit khas tentera Bersekutu yang bekerjasama dengan orang Melayu melancarkan perang gerila menentang Jepun.", badge: "Penentangan" },
    { term: "Bintang Tiga (MPAJA)", meaning: "Cawangan bersenjata PKM yang menguasai bandar selama 14 hari selepas Jepun menyerah kalah.", badge: "Konflik Kaum" }
  ],
  questions: [
    {
      q: "Apakah faktor utama yang mendorong pencerobohan tentera Jepun ke atas Tanah Melayu pada Disember 1941?",
      options: ["Menyebarkan agama Shinto", "Mendapatkan bekalan bahan mentah bijih timah dan getah serta menguasai pangkalan strategik", "Membantu Raja-raja Melayu mencapai kemerdekaan", "Membina empayar pertanian padi"],
      answer: 1,
      explanation: "Jepun memerlukan getah dan bijih timah bagi menjana industri ketenteraan mereka selepas dikenakan sekatan ekonomi oleh pihak Bersekutu."
    },
    {
      q: "Siapakah wira Rejimen Askar Melayu yang gugur mempertahankan Bukit Candu, Singapura daripada serangan tentera Jepun?",
      options: ["Leftenan Adnan Saidi", "Kapten Ibrahim Ismail", "Yeop Mahidin", "Rentap"],
      answer: 0,
      explanation: "Leftenan Adnan Saidi mempertahankan Bukit Candu dengan keberanian luar biasa sehingga titisan darah terakhir."
    },
    {
      q: "Apakah kesan daripada pengeluaran mata wang 'wang pokok pisang' secara tidak terkawal oleh pentadbiran Jepun?",
      options: ["Mata wang tempatan menjadi bertambah kukuh", "Berlaku inflasi teruk dan nilai mata wang menjunam jatuh", "Rakyat dapat membeli barang mewah dengan mudah", "Ekonomi Tanah Melayu mengatasi ekonomi Eropah"],
      answer: 1,
      explanation: "Pencetakan wang tanpa sandaran rizab menyebabkan hiperinflasi, barang makanan sukar didapati dan harga melambung tinggi."
    },
    {
      q: "Mengapakah berlaku kekosongan kuasa politik di Tanah Melayu selama kira-kira 14 hari pada Ogos 1945?",
      options: ["Kerana tentera Jepun bersembunyi di hutan", "Kerana tentera Jepun telah menyerah kalah tetapi tentera British lewat mendarat semula", "Kerana Raja-raja Melayu membubarkan kerajaan", "Kerana berlaku banjir besar di seluruh negara"],
      answer: 1,
      explanation: "Selepas penyerahan kalah Jepun pada 15 Ogos 1945, British hanya kembali pada awal September 1945 mewujudkan anarki selama dua minggu."
    },
    {
      q: "Apakah peranan utama jururawat Sybil Kathigasu semasa pendudukan tentera Jepun di Perak?",
      options: ["Membekalkan senjata berat kepada tentera Jepun", "Memberikan bantuan ubat-ubatan dan maklumat radio kepada pejuang gerila anti-Jepun secara rahsia", "Menjadi penterjemah rasmi Kempeitai", "Menyusun perbarisan sekolah"],
      answer: 1,
      explanation: "Sybil Kathigasu dan suaminya Dr. Abdon Clement merawat gerila anti-Jepun di klinik mereka di Papan, Perak serta mendengar siaran radio BBC secara sembunyi."
    }
  ],
  struktur: [
    {
      q: "Pendudukan tentera Jepun di Tanah Melayu (1941–1945) telah mendatangkan pelbagai kesengsaraan hidup kepada rakyat tempatan.\n(a) Nyatakan dua dasar ekonomi yang diperkenalkan oleh tentera Jepun.\n(b) Jelaskan dua penderitaan sosial yang dialami oleh penduduk tempatan sepanjang tempoh pendudukan Jepun.\n(c) Bagaimanakah pengalaman pendudukan Jepun mengajar rakyat Malaysia tentang peri pentingnya mempertahankan kedaulatan tanah air?",
      skema: [
        "(a) 1. Memperkenalkan sistem ekonomi kawalan / catuan makanan beras [1m]. 2. Mencetak mata wang pokok pisang tanpa kawalan sehingga mencetuskan inflasi teruk [1m].",
        "(b) 1. Mengalami kebuluran dan kekurangan zat makanan sehingga terpaksa memakan ubi kayu dan pisang [1m]. 2. Hidup dalam ketakutan akibat kezaliman dan penyeksaan kejam oleh polis rahsia Kempeitai [1m].",
        "(c) Pengalaman tersebut membuktikan bahawa nasib dan maruah bangsa tidak boleh diserahkan kepada belas kasihan kuasa asing. Rakyat berbilang kaum wajib bersatu padu, mengukuhkan pertahanan dan keselamatan negara, serta melengkapkan diri dengan ilmu moden agar tanah air tidak mudah dicerobohi lagi [2m]."
      ]
    }
  ]
};

fs.writeFileSync('c:/antigravity3/scratch/b2.json', JSON.stringify(b2, null, 2), 'utf8');
fs.writeFileSync('c:/antigravity3/scratch/b3.json', JSON.stringify(b3, null, 2), 'utf8');
console.log('Bab 2 & 3 saved.');
