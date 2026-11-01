const fs = require('fs');

const SEJARAH_DATA = [
  {
    id: "bab1",
    babNum: "BAB 1",
    title: "WARISAN NEGARA BANGSA",
    icon: "🏛️",
    anyflipPages: "Buku Teks Sejarah Tingkatan 4 KSSM (Halaman 4 – 19)",
    synopsis: "Bab ini membincangkan asas pembentukan negara bangsa kerajaan Alam Melayu sebelum kedatangan Barat, ciri-ciri keunggulan negara bangsa Kesultanan Melayu Melaka, sistem pentadbiran Pembesar Empat Lipatan, Hukum Kanun Melaka dan Undang-Undang Laut Melaka, serta konsep hubungan timbal balik antara pemerintah dan rakyat.",
    notes: [
      {
        subtopic: "1.1 Latar Belakang Negara Bangsa Sebelum Kedatangan Barat",
        summary: "Asas negara bangsa telah bertapak kukuh di Alam Melayu melalui kerajaan Funan, Champa, Srivijaya, Angkor, Majapahit, Kedah Tua dan Gangga Negara dengan ciri raja, undang-undang, wilayah pengaruh dan rakyat.",
        verbatim: [
          "Ciri-ciri negara bangsa kerajaan Alam Melayu merangkumi: Raja (tonggak utama yang dianggap suci dan ditaati), Undang-undang (panduan pentadbiran bagi menjamin kesejahteraan), Wilayah Pengaruh (kawasan rakyat menerima pemerintahan raja), dan Rakyat (penduduk yang setia serta tidak menderhaka).",
          "Kerajaan Srivijaya meneruskan warisan negara bangsa dengan sistem pentadbiran yang mantap dan upacara persetiaan seperti meminum air sumpah di Telaga Batu.",
          "Kesultanan Melayu Melaka menyerap ciri-ciri negara bangsa Srivijaya dan memperkukuhnya dengan nilai Islam dan tradisi Melayu."
        ],
        explanation: "Konsep negara bangsa di Alam Melayu berkembang secara beransur-ansur berabad-abad lamanya sebelum kedatangan penjajah Barat. Hubungan taat setia rakyat kepada raja dan pematuhan undang-undang bertulis membuktikan wujudnya peradaban politik yang sangat tinggi."
      },
      {
        subtopic: "1.2 Ciri-ciri Negara Bangsa Kesultanan Melayu Melaka",
        summary: "Kesultanan Melayu Melaka (KMM) mempunyai enam ciri utama negara bangsa yang tersusun: Kerajaan, Rakyat, Kedaulatan, Wilayah Pengaruh, Undang-undang, dan Lambang Kebesaran.",
        verbatim: [
          "Kerajaan: Wujud hasil sistem pemerintahan beraja yang dibantu oleh Pembesar Empat Lipatan.",
          "Rakyat: Terdiri daripada orang Melayu dan Orang Laut yang setia mematuhi undang-undang serta mengakui kekuasaan Sultan.",
          "Kedaulatan: Lambang kekuasaan tertinggi sultan untuk mengawal wilayah dan rakyat tanpa telunjuk kuasa asing.",
          "Wilayah Pengaruh: Kawasan luas merangkumi Semenanjung Tanah Melayu dan pantai timur Sumatera hasil penaklukan, naungan dan perkahwinan.",
          "Undang-undang: Hukum Kanun Melaka dan Undang-Undang Laut Melaka menjadi teras kestabilan masyarakat.",
          "Lambang Kebesaran: Identiti kedaulatan seperti nobat, keris diraja, cap mohor, warna kuning, dan regalia."
        ],
        explanation: "Keenam-enam ciri ini menjadikan Kesultanan Melayu Melaka empayar yang berwibawa, dihormati oleh kuasa antarabangsa seperti Dinasti Ming (China) dan kerajaan Ryukyu, serta menjadi model pembentukan kerajaan-kerajaan Melayu selepasnya seperti Johor-Riau."
      },
      {
        subtopic: "1.3 Keunggulan Sistem Pentadbiran dan Undang-Undang",
        summary: "KMM mengamalkan Sistem Pembesar Empat Lipatan yang teratur dan dua sumber perundangan bertulis bertaraf antarabangsa iaitu Hukum Kanun Melaka dan Undang-Undang Laut Melaka.",
        verbatim: [
          "Sistem Pembesar Empat Lipatan: Sultan dibantu oleh Bendahara (penasihat utama, ketua pentadbir, pemangku raja), Penghulu Bendahari (mengurus perbendaharaan dan hasil cukai), Temenggung (ketua polis dan keselamatan kota Melaka), serta Laksamana (panglima angkatan tentera laut).",
          "Kawasan Pegangan & Pemakanan: Sultan mengurniakan kawasan pentadbiran kepada pembesar untuk memungut cukai bagi membiayai pentadbiran dan keselamatan.",
          "Hukum Kanun Melaka (44 Fasal): Mengandungi peruntukan jenayah (hukuman bunuh bagi membunuh tanpa titah), bidang kuasa sultan dan pembesar, hukum kekeluargaan Islam, serta larangan riba dan penipuan dalam perniagaan.",
          "Undang-Undang Laut Melaka (25 Fasal): Dicipta oleh nakhoda ternama (Nakhoda Jenal, Diri, Sahak) merangkumi peranan nakhoda (raja di laut), tatatertib pelayaran, disiplin anak kapal, keselamatan kargo dan kadar cukai perniagaan maritim."
        ],
        explanation: "Sistem pentadbiran yang berstruktur dan perundangan yang berasaskan hukum syarak serta adat tempatan memastikan pelabuhan Melaka aman, bebas lanun, dan menjadi emporium perdagangan terkemuka dunia di Selat Melaka."
      },
      {
        subtopic: "1.4 Peranan Pemerintah dan Rakyat",
        summary: "Hubungan timbal balik (dua hala) antara golongan pemerintah (Sultan dan Pembesar) dengan golongan diperintah (Rakyat dan Hamba) berlandaskan konsep waadat dan kesetiaan mutlak.",
        verbatim: [
          "Golongan Pemerintah: Terdiri daripada Sultan, kerabat diraja, bangsawan dan pembesar yang bertanggungjawab menjaga keselamatan, menegakkan keadilan, dan memelihara kebajikan rakyat.",
          "Golongan Diperintah: Rakyat merdeka (petani, pedagang, nelayan, tukang) dan golongan hamba (hamba raja, hamba berhutang, hamba abdi) yang memberi taat setia, mematuhi undang-undang, serta menyumbang tenaga kerah (membina istana/benteng) dan menyertai angkatan perang.",
          "Konsep Waadat: Perjanjian suci antara Demang Lebar Daun (mewakili rakyat) dan Sang Sapurba (mewakili raja). Rakyat berjanji setia selagi raja tidak menzalimi mereka.",
          "Konsep Tulah: Bencana atau kecelakaan yang dipercayai menimpa sesiapa yang menderhaka kepada titah perintah raja."
        ],
        explanation: "Hubungan simbiosis ini mewujudkan perpaduan dan persefahaman sosial yang kukuh. Pemerintah menyediakan payung perlindungan dan kemakmuran, manakala rakyat menyokong kekuasaan takhta secara setia dan padu."
      }
    ],
    steps: [
      {
        step: "Langkah 1",
        title: "Peristiwa Termeterainya Waadat",
        detail: "Demang Lebar Daun mewakili rakyat berikrar setia kepada Sang Sapurba dengan syarat raja tidak menghina rakyat dengan kata-kata keji dan tidak menzalimi mereka.",
        tip: "Waadat = Kontrak sosial pertama dalam sejarah Tamadun Melayu."
      },
      {
        step: "Langkah 2",
        title: "Pemberian Kawasan Pegangan",
        detail: "Sultan mengurniakan kawasan pegangan kepada Bendahara, Temenggung, Penghulu Bendahari dan Laksamana sebagai ganjaran kesetiaan dan sumber hasil pentadbiran.",
        tip: "Kawasan pemakanan diberikan kepada pembesar peringkat bawahan."
      },
      {
        step: "Langkah 3",
        title: "Penguatkuasaan Hukum Kanun Melaka",
        detail: "Semua undang-undang dibacakan dan dikuatkuasakan di balairung istana dan seluruh wilayah taklukan untuk memastikan hukuman adil mengikut syariat Islam dan adat Temenggung.",
        tip: "Hukum Kanun Melaka mengandungi 44 Fasal."
      },
      {
        step: "Langkah 4",
        title: "Pengurusan Pelabuhan Berpandukan Undang-Undang Laut",
        detail: "Nakhoda kapal menguatkuasakan Undang-Undang Laut Melaka ke atas anak kapal, pedagang dan penumpang bagi menjamin keselamatan perairan Selat Melaka.",
        tip: "Nakhoda diibaratkan sebagai 'raja di laut'."
      }
    ],
    keypoints: [
      { term: "Waadat", meaning: "Perjanjian taat setia dua hala antara golongan pemerintah (Sang Sapurba) dengan golongan rakyat (Demang Lebar Daun).", badge: "Konsep Utama" },
      { term: "Tulah", meaning: "Kecelakaan atau malapetaka yang dipercayai menimpa mana-mana rakyat yang menderhaka kepada Sultan.", badge: "Istilah SPM" },
      { term: "Kawasan Pegangan", meaning: "Kawasan atau daerah yang dikurniakan oleh Sultan kepada Pembesar Berempat untuk ditadbir dan dipungut hasil cukai.", badge: "Fakta Kunci" },
      { term: "Hukum Kanun Melaka", meaning: "Kitab undang-undang bertulis KMM 44 fasal yang mengandungi hukum Islam, jenayah, kekeluargaan, dan adat pelabuhan.", badge: "Undang-Undang" },
      { term: "Pembesar Empat Lipatan", meaning: "Hierarki pentadbiran KMM diketuai Bendahara, Penghulu Bendahari, Temenggung dan Laksamana.", badge: "Struktur Pentadbiran" }
    ],
    questions: [
      {
        q: "Antara berikut, yang manakah merupakan ciri negara bangsa yang diwarisi oleh Kesultanan Melayu Melaka daripada kerajaan Alam Melayu sebelumnya?",
        options: ["Sistem Parlimen Berperlembagaan", "Raja, undang-undang, wilayah pengaruh dan rakyat", "Pengasingan kuasa kehakiman mutlak", "Amalan pilihan raya berkala"],
        answer: 1,
        explanation: "Kerajaan Alam Melayu seperti Srivijaya telah mewariskan ciri asas iaitu raja yang berdaulat, undang-undang, wilayah pengaruh, dan rakyat yang setia."
      },
      {
        q: "Apakah peranan utama Penghulu Bendahari dalam Sistem Pembesar Empat Lipatan di Melaka?",
        options: ["Panglima tertinggi angkatan tentera laut", "Ketua polis dan penjaga keselamatan kota", "Ketua pentadbir perbendaharaan dan pemungut hasil cukai", "Penterjemah surat diplomatik raja"],
        answer: 2,
        explanation: "Penghulu Bendahari menguruskan kewangan empayar, syahbandar pelabuhan, dan perbendaharaan kerajaan Melaka."
      },
      {
        q: "Apakah kepentingan konsep 'Waadat' dalam konteks sosiopolitik Kesultanan Melayu Melaka?",
        options: ["Menetapkan sempadan tanah jajahan dengan Siam", "Mengikat persefahaman dua hala antara pemerintah yang adil dengan rakyat yang setia", "Membahagikan kuasa antara Bendahara dengan Laksamana", "Menyeragamkan kadar tukaran mata wang emas"],
        answer: 1,
        explanation: "Waadat ialah kontrak sosial antara Demang Lebar Daun dengan Sang Sapurba yang menjamin rakyat taat selagi pemerintah bertindak adil."
      },
      {
        q: "Berdasarkan Fasal 1 Undang-Undang Laut Melaka, nakhoda kapal diibaratkan sebagai apa semasa berada di lautan?",
        options: ["Sebagai hamba sahaya", "Sebagai saudagar bebas", "Sebagai raja dalam kapalnya", "Sebagai pembantu syahbandar"],
        answer: 2,
        explanation: "Fasal 1 menyatakan bahawa nakhoda diibaratkan sebagai raja dan titahnya wajib dipatuhi oleh seluruh anak kapal dan penumpang."
      },
      {
        q: "Apakah yang membuktikan bahawa Kesultanan Melayu Melaka mempunyai kedaulatan yang diiktiraf di peringkat antarabangsa?",
        options: ["Pengiktirafan daripada Dinasti Ming (China) dan penghantaran utusan diplomatik", "Ketiadaan saingan daripada kerajaan Majapahit", "Penggunaan senjata api buatan Portugis", "Pemilikan pulau rempah di Maluku"],
        answer: 0,
        explanation: "Pengiktirafan Maharaja China (Dinasti Ming) melalui utusan Laksamana Yin Qing dan Zheng He mengesahkan kedaulatan antarabangsa Melaka."
      }
    ],
    struktur: [
      {
        q: "Rajah menunjukkan hierarki Sistem Pembesar Empat Lipatan Kesultanan Melayu Melaka.\n(a) Namakan dua jawatan pembesar utama yang menganggotai Pembesar Empat Lipatan.\n(b) Jelaskan dua peranan Temenggung dalam pentadbiran Kesultanan Melayu Melaka.\n(c) Mengapakah ketaatan rakyat kepada pemerintah penting dalam menjamin kestabilan negara pada hari ini?",
        skema: [
          "(a) Bendahara / Penghulu Bendahari / Temenggung / Laksamana [Mana-mana 2 jawatan, 2m].",
          "(b) 1. Bertindak sebagai ketua polis dan pengawal keselamatan di kota dan daratan Melaka [1m]. 2. Memeriksa pasar dan mengawasi penjara serta keselamatan pedagang luar [1m].",
          "(c) Ketaatan rakyat melahirkan perpaduan nasional tanpa rusuhan kaum, mengekalkan keamanan politik yang menarik pelabur asing, dan membolehkan program pembangunan negara dilaksanakan dengan lancar berteraskan prinsip Rukun Negara [2m]."
        ]
      }
    ]
  }
];

console.log('Template ready, building all 10 chapters...');
