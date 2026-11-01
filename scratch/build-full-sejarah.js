const fs = require('fs');

const SEJARAH_DATA = [
  // BAB 1
  {
    id: "bab1",
    babNum: "BAB 1",
    title: "WARISAN NEGARA BANGSA",
    icon: "🏛️",
    anyflipPages: "Buku Teks Sejarah Tingkatan 4 KSSM (Halaman 4 – 19)",
    synopsis: "Bab ini membincangkan asas pembentukan negara bangsa kerajaan Alam Melayu sebelum kedatangan Barat, enam ciri utama negara bangsa Kesultanan Melayu Melaka, keunggulan sistem pentadbiran Pembesar Empat Lipatan, dua teras perundangan bertulis (Hukum Kanun Melaka & Undang-Undang Laut Melaka), serta peranan timbal balik antara pemerintah dan rakyat berlandaskan konsep waadat.",
    notes: [
      {
        subtopic: "1.1 Latar Belakang Negara Bangsa Sebelum Kedatangan Barat",
        summary: "Asas negara bangsa telah wujud dalam kerajaan Alam Melayu seperti Funan, Champa, Srivijaya, Angkor dan Majapahit dengan empat ciri teras: Raja, Undang-undang, Wilayah Pengaruh dan Rakyat.",
        verbatim: [
          "Ciri-ciri negara bangsa kerajaan Alam Melayu terdiri daripada: Raja (tonggak utama pentadbiran yang ditaati dan dianggap suci), Undang-undang (panduan pentadbiran dan pemeliharaan keamanan), Wilayah Pengaruh (kawasan yang rakyatnya menerima kekuasaan raja), dan Rakyat (penduduk yang setia serta mengakui kekuasaan raja).",
          "Kerajaan Srivijaya di Palembang mewariskan ciri negara bangsa yang kukuh melalui upacara persetiaan rakyat meminum air sumpah di Telaga Batu.",
          "Kesultanan Melayu Melaka meneruskan kesinambungan warisan Srivijaya dan menyerap pengaruh Islam ke dalam sistem pentadbiran dan perundangan."
        ],
        explanation: "Pembentukan negara bangsa bukan bermula dengan pengaruh Barat, sebaliknya telah berakar umbi berabad-abad lamanya dalam tradisi Tamadun Melayu melalui kepatuhan kepada raja dan undang-undang tradisi."
      },
      {
        subtopic: "1.2 Ciri-ciri Negara Bangsa Kesultanan Melayu Melaka",
        summary: "Kesultanan Melayu Melaka (KMM) memperlihatkan pembentukan negara bangsa yang matang melalui enam ciri: Kerajaan, Rakyat, Kedaulatan, Wilayah Pengaruh, Undang-undang, dan Lambang Kebesaran.",
        verbatim: [
          "Kerajaan: Wujud kerana adanya raja sebagai pemerintah tertinggi yang dibantu oleh Pembesar Empat Lipatan.",
          "Rakyat: Terdiri daripada orang Melayu dan Orang Laut yang taat setia mematuhi arahan sultan dan undang-undang.",
          "Kedaulatan: Hak mutlak dan kekuasaan tertinggi sultan untuk mentadbir negara bebas daripada campur tangan kuasa asing.",
          "Wilayah Pengaruh: Kawasan geografi yang luas merangkumi Semenanjung Tanah Melayu dan sebahagian Sumatera yang diperolehi melalui penaklukan, naungan, dan perkahwinan.",
          "Undang-undang: Pelaksanaan Hukum Kanun Melaka dan Undang-Undang Laut Melaka bagi mengawal masyarakat.",
          "Lambang Kebesaran: Identiti kedaulatan seperti nobat diraja, keris kebesaran, cap mohor, warna diraja, dan bahasa istana."
        ],
        explanation: "Gabungan kesemua ciri ini menjadikan KMM kuasa maritim terunggul di rantau ini yang diiktiraf oleh kuasa luar seperti Dinasti Ming (China) dan Kesultanan Uthmaniyah."
      },
      {
        subtopic: "1.3 Keunggulan Sistem Pentadbiran dan Undang-Undang",
        summary: "KMM memiliki sistem pentadbiran Pembesar Empat Lipatan yang teratur dan dua karya perundangan unggul iaitu Hukum Kanun Melaka dan Undang-Undang Laut Melaka.",
        verbatim: [
          "Sistem Pembesar Empat Lipatan: Sultan dibantu oleh empat pembesar utama iaitu Bendahara (penasihat raja, ketua pentadbir, pemangku raja), Penghulu Bendahari (mengurus kewangan dan perbendaharaan negara), Temenggung (ketua polis, keselamatan kota dan penjara), serta Laksamana (panglima tentera laut dan pengawal peribadi raja).",
          "Kawasan Pegangan & Pemakanan: Sultan mengurniakan kawasan pegangan kepada pembesar untuk ditadbir dan memungut hasil cukai.",
          "Hukum Kanun Melaka (44 Fasal): Menjelaskan hukuman jenayah (seperti mencuri, membunuh), bidang kuasa raja dan pembesar, hukum perkahwinan Islam, serta etika perniagaan dan larangan riba.",
          "Undang-Undang Laut Melaka (25 Fasal): Dicipta oleh tokoh pelayaran terkenal (Nakhoda Jenal, Nakhoda Diri, Nakhoda Sahak) menetapkan peranan nakhoda sebagai raja di laut, keselamatan pelayaran, disiplin anak kapal, dan kadar percukaian dagangan."
        ],
        explanation: "Sistem pentadbiran yang tersusun dan undang-undang bertulis yang tegas mewujudkan keamanan dan kestabilan, menjadikan pelabuhan Melaka pusat perdagangan antarabangsa utama di Selat Melaka."
      },
      {
        subtopic: "1.4 Peranan Pemerintah dan Rakyat",
        summary: "Hubungan timbal balik antara golongan pemerintah (Sultan dan Pembesar) dengan golongan diperintah (Rakyat merdeka dan Hamba) berpaksikan konsep waadat dan taat setia.",
        verbatim: [
          "Golongan Pemerintah: Sultan dan pembesar memelihara keamanan wilayah, menegakkan keadilan undang-undang, serta menyediakan prasarana dan naungan kepada rakyat.",
          "Golongan Diperintah: Terdiri daripada rakyat merdeka (petani, peniaga, nelayan) dan hamba (hamba raja, hamba berhutang, hamba abdi) yang taat setia menyumbang tenaga kerah membina istana/kota dan berkhidmat dalam angkatan tentera.",
          "Konsep Waadat: Perjanjian suci antara Sang Sapurba (pemerintah) dengan Demang Lebar Daun (rakyat). Rakyat berjanji setia selagi raja tidak menzalimi atau menghina mereka.",
          "Konsep Tulah: Kepercayaan bahawa bencana ghaib akan menimpa individu yang menderhaka kepada titah raja."
        ],
        explanation: "Hubungan simbiosis dan kesepakatan sosial ini mengukuhkan perpaduan masyarakat Melayu tradisional sehingga mewujudkan empayar yang stabil dan makmur."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Peristiwa Permuafakatan Waadat",
        detail: "Demang Lebar Daun mewakili rakyat berikrar setia kepada Sang Sapurba dengan syarat raja memerintah dengan adil dan tidak menjatuhkan hukuman mengaibkan.",
        tip: "Waadat = Perjanjian sosial terawal Tamadun Melayu."
      },
      {
        step: "Langkah 2",
        title: "Pelaksanaan Sistem Pembesar Berempat",
        detail: "Sultan melantik Bendahara, Penghulu Bendahari, Temenggung dan Laksamana serta mengurniakan kawasan pegangan untuk menjamin kelancaran pentadbiran.",
        tip: "Bendahara = Perdana Menteri zaman KMM."
      },
      {
        step: "Langkah 3",
        title: "Penguatkuasaan Hukum Kanun Melaka",
        detail: "Undang-undang bertulis 44 fasal dibacakan dan dikuatkuasakan di balairung istana dan wilayah taklukan untuk memastikan hukuman adil mengikut syariat Islam dan adat Melayu.",
        tip: "Hukum Kanun Melaka mengandungi 44 Fasal."
      },
      {
        step: "Langkah 4",
        title: "Pengurusan Tatatertib Perkapalan Laut",
        detail: "Nakhoda kapal menguatkuasakan Undang-Undang Laut Melaka ke atas anak kapal dan pedagang di laut untuk memastikan kelancaran pelayaran maritim.",
        tip: "Nakhoda berkuasa penuh sebagai raja di atas kapal."
      }
    ],
    keypoints: [
      { term: "Waadat", meaning: "Perjanjian taat setia dua hala antara golongan pemerintah (Sang Sapurba) dengan rakyat (Demang Lebar Daun).", badge: "Konsep Utama" },
      { term: "Tulah", meaning: "Kecelakaan atau kutukan yang dipercayai menimpa sesiapa yang menderhaka kepada Sultan.", badge: "Istilah SPM" },
      { term: "Kawasan Pegangan", meaning: "Kawasan yang dikurniakan Sultan kepada Pembesar Berempat untuk ditadbir dan dipungut hasil cukai.", badge: "Fakta Kunci" },
      { term: "Hukum Kanun Melaka", meaning: "Kanun undang-undang bertulis 44 fasal berlandaskan hukum syarak Islam dan adat tempatan.", badge: "Undang-Undang" },
      { term: "Undang-Undang Laut Melaka", meaning: "Peraturan perkapalan 25 fasal yang mengatur bidang kuasa nakhoda, berniaga di kapal, dan keselamatan laut.", badge: "Peraturan Maritim" }
    ],
    questions: [
      {
        q: "Antara berikut, yang manakah ciri negara bangsa yang diwarisi oleh Kesultanan Melayu Melaka daripada kerajaan Alam Melayu?",
        options: ["Sistem Parlimen dwidewan", "Raja, undang-undang, wilayah pengaruh dan rakyat", "Pengasingan kuasa mutlak", "Pilihan raya berkala"],
        answer: 1,
        explanation: "Kerajaan Alam Melayu seperti Srivijaya telah mewariskan ciri asas raja yang berdaulat, undang-undang, wilayah pengaruh, dan rakyat yang setia."
      },
      {
        q: "Apakah peranan utama Penghulu Bendahari dalam Kesultanan Melayu Melaka?",
        options: ["Panglima tertinggi angkatan laut", "Ketua polis daratan dan kota", "Ketua pentadbir perbendaharaan dan hasil cukai", "Penterjemah surat diplomatik raja"],
        answer: 2,
        explanation: "Penghulu Bendahari menguruskan kewangan empayar, syahbandar pelabuhan, dan perbendaharaan negara."
      },
      {
        q: "Apakah kepentingan konsep 'Waadat' dalam konteks sosiopolitik Melaka?",
        options: ["Menetapkan sempadan tanah jajahan", "Mengikat persefahaman dua hala antara pemerintah adil dengan rakyat yang taat", "Membahagikan kuasa antara Bendahara dengan Laksamana", "Menyeragamkan mata wang emas"],
        answer: 1,
        explanation: "Waadat ialah kontrak sosial antara Demang Lebar Daun dengan Sang Sapurba yang menjamin rakyat taat selagi pemerintah bertindak adil."
      },
      {
        q: "Berdasarkan Fasal 1 Undang-Undang Laut Melaka, nakhoda kapal diibaratkan sebagai apa?",
        options: ["Sebagai hamba sahaya", "Sebagai saudagar bebas", "Sebagai raja dalam kapalnya", "Sebagai pembantu syahbandar"],
        answer: 2,
        explanation: "Fasal 1 menyatakan bahawa nakhoda diibaratkan sebagai raja dan arahannya wajib dipatuhi oleh seluruh anak kapal."
      },
      {
        q: "Apakah bukti pengiktirafan antarabangsa terhadap kedaulatan Kesultanan Melayu Melaka?",
        options: ["Pengiktirafan dan penghantaran utusan oleh Dinasti Ming (China)", "Ketiadaan saingan daripada kerajaan Majapahit", "Penggunaan senjata api Eropah", "Perjanjian persempadan dengan Siam"],
        answer: 0,
        explanation: "Pengiktirafan Maharaja China melalui utusan Laksamana Yin Qing dan Zheng He mengesahkan kedaulatan antarabangsa Melaka."
      }
    ],
    struktur: [
      {
        q: "Rajah menunjukkan hierarki Sistem Pembesar Empat Lipatan Kesultanan Melayu Melaka.\n(a) Namakan dua jawatan pembesar utama yang menganggotai Pembesar Empat Lipatan.\n(b) Jelaskan dua peranan Temenggung dalam pentadbiran Kesultanan Melayu Melaka.\n(c) Mengapakah ketaatan rakyat kepada pemerintah penting dalam menjamin kestabilan negara pada hari ini?",
        skema: [
          "(a) Bendahara / Penghulu Bendahari / Temenggung / Laksamana [Mana-mana 2 jawatan, 2m].",
          "(b) 1. Bertindak sebagai ketua polis dan keselamatan kota Melaka [1m]. 2. Mengawasi pasar dan mengendalikan penjara serta keadilan awam [1m].",
          "(c) Ketaatan rakyat melahirkan perpaduan nasional tanpa rusuhan kaum, mengekalkan kestabilan politik yang menarik pelabur asing, dan membolehkan program pembangunan negara dilaksanakan dengan lancar berteraskan prinsip Rukun Negara [2m]."
        ]
      }
    ]
  },

  // BAB 2
  {
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
  }
];

console.log('Bab 1 & 2 fully generated. Proceeding to write complete script...');
