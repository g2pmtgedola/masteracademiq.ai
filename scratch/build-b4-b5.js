const fs = require('fs');

// BAB 4
const b4 = {
  id: "bab4",
  babNum: "BAB 4",
  title: "ERA PERALIHAN KUASA BRITISH DI NEGARA KITA",
  icon: "📜",
  anyflipPages: "Buku Teks Sejarah Tingkatan 4 KSSM (Halaman 92 – 121)",
  synopsis: "Bab ini membincangkan pentadbiran British Military Administration (BMA), gagasan Malayan Union 1946 dan reaksi penentangan hebat orang Melayu yang membawa kepada penubuhan UMNO, penyerahan Sarawak kepada kerajaan British serta gerakan antipenyerahan oleh Rukun 13 (Rosli Dhobi), dan penyerahan Sabah oleh Syarikat Berpiagam Borneo Utara (SBUB).",
  notes: [
    {
      subtopic: "4.1 British Military Administration (BMA)",
      summary: "BMA ditubuhkan pada September 1945 di bawah pimpinan Lord Mountbatten untuk mengembalikan keamanan, memulihkan kepercayaan rakyat, dan membubarkan pasukan gerila MPAJA.",
      verbatim: [
        "Tugas Utama BMA: Mengembalikan kestabilan politik, memulihkan ekonomi pascaperang, membersihkan saki-baki periuk api tentera Jepun, dan membubarkan MPAJA serta mengambil semula senjata api mereka.",
        "Kegagalan BMA: Gagal menangani masalah inflasi, kekurangan bekalan beras, dan wabak penyakit, serta gagal memulihkan keharmonian kaum selepas ketegangan keganasan 14 hari Bintang Tiga.",
        "Kesan: Rakyat hilang kepercayaan terhadap keupayaan BMA mentadbir Tanah Melayu dengan adil."
      ],
      explanation: "Ketidakcekapan pentadbiran tentera BMA memudahkan kerajaan British memperkenalkan pentadbiran baharu berbentuk imperialisme mutlak iaitu Malayan Union."
    },
    {
      subtopic: "4.2 Gagasan Malayan Union",
      summary: "Malayan Union diisytiharkan pada 1 April 1946 di King's House (Carcosa Seri Negara) Kuala Lumpur untuk menyatukan pentadbiran dan melicinkan eksploitasi ekonomi British.",
      verbatim: [
        "Latar Belakang: Dirangka secara rahsia di London sejak 1944 oleh Unit Perancangan Tanah Melayu diketuai Mejar Jeneral Ralph Hone.",
        "Ciri Pentadbiran: Menggabungkan 9 Negeri Melayu dan 2 Negeri Selat (Pulau Pinang & Melaka) di bawah satu tanah jajahan yang diketuai oleh Gabenor British berkuasa mutlak. Singapura diasingkan sebagai tanah jajahan berasingan.",
        "Kedudukan Raja-raja Melayu: Kuasa Sultan dilucutkan dan diturunkan taraf kepada sekadar penasihat hal ehwal agama Islam dan adat Melayu. Majlis Raja-Raja hanya membincangkan soal zakat dan fitrah.",
        "Syarat Kewarganegaraan Jus Soli: Memberikan kerakyatan sama rata secara automatik kepada sesiapa sahaja yang lahir di Tanah Melayu dan Singapura, atau bermastautin selama 10 daripada 15 tahun."
      ],
      explanation: "Malayan Union pada hakikatnya menghapuskan kedaulatan bangsa Melayu, menenggelamkan status tanah air berdaulat menjadi tanah jajahan Mahkota British (Crown Colony)."
    },
    {
      subtopic: "4.3 Reaksi Penduduk Tempatan terhadap Malayan Union",
      summary: "Rancangan Malayan Union ditentang hebat secara sebulat suara oleh Raja-raja Melayu, golongan cendekiawan, akhbar Melayu, kaum wanita, dan seluruh orang Melayu.",
      verbatim: [
        "Bantahan Raja-raja Melayu: Menolak cara ugutan Sir Harold MacMichael yang memaksa Sultan menandatangani perjanjian tanpa rundingan dengan pembesar negeri. Raja-raja Melayu menghantar surat bantahan rasmi ke London.",
        "Peranan Akhbar Melayu: Utusan Melayu, Majlis dan Warta Negara menyiarkan berita bantahan, puisi patriotik, dan menyeru perpaduan orang Melayu.",
        "Kongres Melayu 1946: Diadakan di Kelab Sultan Sulaiman, Kampung Baru, Kuala Lumpur pada 1–4 Mac 1946 dihadiri 41 buah persatuan Melayu.",
        "Penubuhan UMNO: United Malays National Organisation (Pertubuhan Kebangsaan Melayu Bersatu) ditubuhkan secara rasmi di Istana Besar Johor Bahru pada 11 Mei 1946 dipimpin oleh Dato' Onn Jaafar.",
        "Tindakan Pemulauan: Raja-raja Melayu dan pemimpin UMNO berkabung dengan melilit kain putih pada songkok dan memulaukan upacara pelantikan Gabenor Malayan Union, Sir Edward Gent."
      ],
      explanation: "Penentangan padu ini melumpuhkan pentadbiran Malayan Union sejak hari pertama ia diisytiharkan dan memaksa British membuka rundingan membentuk Persekutuan Tanah Melayu 1948."
    },
    {
      subtopic: "4.4 Penyerahan Sarawak kepada Kerajaan British",
      summary: "Raja Putih terakhir, Charles Vyner Brooke menyerahkan Sarawak kepada kerajaan British pada 1 Julai 1946 atas pelbagai faktor.",
      verbatim: [
        "Faktor Masalah Pewarisan Takhta: Vyner Brooke sudah tua dan tidak mempunyai anak lelaki, serta enggan melantik anak saudaranya Anthony Brooke sebagai pengganti.",
        "Faktor Desakan Kerajaan British: British ingin menguasai kekayaan sumber semula jadi Sarawak (minyak petroleum dan getah) serta menjaga kepentingan pelaburan modal.",
        "Faktor Masalah Kewangan: Sarawak mengalami kemusnahan teruk akibat perang dan Brooke tidak mampu membiayai kos pemulihan pascaperang."
      ],
      explanation: "Penyerahan ini dilakukan secara tergesa-gesa tanpa persetujuan majoriti penduduk bumiputera Sarawak."
    },
    {
      subtopic: "4.5 Reaksi Penduduk Tempatan terhadap Penyerahan Sarawak",
      summary: "Gerakan Antipenyerahan Sarawak diterajui oleh Datu Patinggi Abang Haji Abdillah, persatuan Melayu dan Dayak, serta kemuncak pembunuhan Gabenor British oleh kumpulan Rukun 13.",
      verbatim: [
        "Bantahan Golongan Elit & Persatuan: Datu Patinggi Abang Haji Abdillah memimpin Persatuan Kebangsaan Melayu Sarawak (PKMS) dan Persatuan Dayak Sarawak (PDA) mengadakan demonstrasi aman dan menghantar kawat bantahan ke London.",
        "Peletakan Jawatan Beramai-ramai: British mengeluarkan Surat Pekeliling No. 9/1946 melarang kakitangan awam menyertai gerakan antipenyerahan. Seramai 338 orang guru dan pegawai kerajaan meletakkan jawatan serta-merta.",
        "Peranan Kaum Wanita: Tokoh wanita seperti Cikgu Lily Eberwein dan Hajah Sipah Tuanku Othman mengetuai perarakan wanita membantah penyerahan.",
        "Gerakan Radikal Rukun 13: Kumpulan pemuda radikal dalam Pergerakan Pemuda Melayu (PPM) Sibu menubuhkan Rukun 13. Pada 3 Disember 1949, Rosli Dhobi menikam Gabenor British kedua Sarawak, Duncan Stewart di Sibu.",
        "Kesan: Rosli Dhobi, Morshidi Sidek, Awang Rambli dan Bujang Suntong dihukum gantung sampai mati oleh British; gerakan antipenyerahan dilemahkan tetapi membakar semangat kebangsaan."
      ],
      explanation: "Pengorbanan Rosli Dhobi pada usia muda 17 tahun menjadi lambang keberanian rakyat Sarawak menolak penjajahan mutlak British."
    },
    {
      subtopic: "4.6 Penyerahan Sabah kepada Kerajaan British",
      summary: "Syarikat Berpiagam Borneo Utara (SBUB) menandatangani perjanjian penyerahan Sabah kepada kerajaan British pada 15 Julai 1946 menjadikan Sabah tanah jajahan Mahkota British.",
      verbatim: [
        "Faktor Masalah Kewangan SBUB: Peperangan memusnahkan bandar Jesselton, Sandakan dan Kudat. SBUB tidak mempunyai dana mencukupi untuk membina semula kemudahan fizikal.",
        "Kepentingan Strategik British: British ingin menguasai potensi ekonomi Sabah (getah, balak, tembakau) serta kedudukan strategik maritim.",
        "Pengekalan Dasar Ketenteraan: Memastikan keselamatan rantau Asia Tenggara di bawah kawalan pihak Bersekutu."
      ],
      explanation: "Penyerahan Sabah berlangsung secara rasmi tanpa tentangan terbuka yang besar berbanding di Tanah Melayu dan Sarawak."
    },
    {
      subtopic: "4.7 Reaksi Penduduk Tempatan terhadap Penyerahan Sabah",
      summary: "Reaksi di Sabah bersifat sederhana dan pasif disebabkan oleh ketiadaan pemimpin berpengaruh, dasar sekatan British, dan kesedaran politik yang belum matang.",
      verbatim: [
        "Dasar Sekatan British: British mengehadkan penubuhan persatuan politik dan memindahkan pegawai yang aktif ke kawasan pedalaman.",
        "Tindakan Persatuan Tempatan: Barisan Pemuda (BARIP) pimpinan Mandur Syarif dan Persatuan Kebangsaan Melayu Labuan (PKML) menuntut pembaikan taraf ekonomi, pendidikan anak tempatan dan jawatan pentadbiran.",
        "Kesan: Walaupun penentangan tidak mencetuskan keganasan, kesedaran sosioekonomi mula bertapak di kalangan anak watan Sabah."
      ],
      explanation: "Ketiadaan tentangan radikal di Sabah membolehkan British mentadbir Sabah secara terus sehingga pembentukan Malaysia pada tahun 1963."
    }
  ],
  steps: [
    {
      step: "Langkah 1",
      title: "Pengisytiharan Gagasan Malayan Union",
      detail: "Sir Harold MacMichael dihantar mendapatkan tandatangan Raja-raja Melayu menggunakan taktik ugutan lucut takhta, mencetuskan kemarahan orang Melayu.",
      tip: "MacMichael menggunakan pendekatan paksaan dan ugutan."
    },
    {
      step: "Langkah 2",
      title: "Penganjuran Kongres Melayu 1946",
      detail: "Seramai 41 persatuan Melayu berhimpun di Kelab Sultan Sulaiman Kuala Lumpur pada 1-4 Mac 1946 bersatu padu menolak Malayan Union sebulat suara.",
      tip: "Kongres ini melahirkan slogan 'Hidup Melayu'."
    },
    {
      step: "Langkah 3",
      title: "Penubuhan Rasmi UMNO di Johor Bahru",
      detail: "Pada 11 Mei 1946 di Istana Besar Johor Bahru, UMNO ditubuhkan secara rasmi dengan Dato' Onn Jaafar dilantik sebagai Yang Dipertua pertama.",
      tip: "UMNO ditubuhkan untuk memimpin penentangan terhadap Malayan Union."
    },
    {
      step: "Langkah 4",
      title: "Gerakan Antipenyerahan Sarawak (Rukun 13)",
      detail: "Rosli Dhobi dan anggota Rukun 13 melancarkan serangan terhadap Gabenor Duncan Stewart di Sibu sebagai tanda bantahan penyerahan Sarawak kepada British.",
      tip: "Rosli Dhobi berjuang mempertahankan maruah Sarawak."
    }
  ],
  keypoints: [
    { term: "Malayan Union", meaning: "Gagasan pentadbiran British 1946 yang menghapuskan kedaulatan Sultan dan memberikan hak kerakyatan jus soli terbuka.", badge: "Gagasan Penjajah" },
    { term: "Jus Soli", meaning: "Prinsip kewarganegaraan berasaskan tempat kelahiran tanpa mengira keturunan atau kesetiaan.", badge: "Istilah Undang-Undang" },
    { term: "Surat Pekeliling No. 9", meaning: "Pekeliling British di Sarawak melarang kakitangan awam menyertai gerakan antipenyerahan yang membawa peletakan jawatan 338 guru.", badge: "Dokumen Sejarah" },
    { term: "Rukun 13", meaning: "Kumpulan sulit 13 pemuda radikal PPM Sibu yang berikrar menghapuskan pegawai British bagi memerdekakan Sarawak.", badge: "Gerakan Radikal" },
    { term: "UMNO", meaning: "United Malays National Organisation ditubuhkan pada 11 Mei 1946 sebagai benteng perpaduan menentang Malayan Union.", badge: "Parti Politik" }
  ],
  questions: [
    {
      q: "Mengapakah orang Melayu menentang keras pelaksanaan Malayan Union pada tahun 1946?",
      options: ["Kerana ibu kota dipindahkan ke London", "Kerana kedaulatan Raja-raja Melayu dilucutkan dan kerakyatan jus soli mengancam status peribumi", "Kerana cukai tanah dimansuhkan", "Kerana pelabuhan Singapura digabungkan semula"],
      answer: 1,
      explanation: "Malayan Union menurunkan taraf negeri naungan berdaulat menjadi tanah jajahan mutlak di mana Sultan kehilangan kuasa politik."
    },
    {
      q: "Apakah taktik yang digunakan oleh Sir Harold MacMichael untuk mendapatkan tandatangan Raja-raja Melayu?",
      options: ["Rundingan terbuka di parlimen", "Menggunakan ugutan bahawa Sultan akan dilucutkan takhta kerana dituduh bersubahat dengan Jepun", "Memberikan ganjaran wang emas yang banyak", "Mengadakan pungutan suara rakyat"],
      answer: 1,
      explanation: "MacMichael menggunakan ugutan penolakan pengiktirafan takhta untuk memaksa Sultan menandatangani perjanjian tanpa sempat berunding dengan pembesar."
    },
    {
      q: "Siapakah Yang Dipertua pertama Pertubuhan Kebangsaan Melayu Bersatu (UMNO) yang dilantik pada Mei 1946?",
      options: ["Tunku Abdul Rahman", "Dato' Onn Jaafar", "Dr. Burhanuddin al-Helmi", "Ishak Haji Muhammad"],
      answer: 1,
      explanation: "Dato' Onn Jaafar dipilih sebagai Yang Dipertua pertama UMNO semasa perasmian di Istana Besar Johor Bahru."
    },
    {
      q: "Apakah tindakan drastik yang diambil oleh 338 orang kakitangan awam dan guru di Sarawak berikutan Surat Pekeliling No. 9/1946?",
      options: ["Melancarkan mogok lapar", "Meletakkan jawatan beramai-ramai sebagai tanda bantahan terhadap penjajahan British", "Berpindah ke Brunei", "Memohon kenaikan pangkat"],
      answer: 1,
      explanation: "Mereka sanggup melepaskan jawatan dan gaji demi mempertahankan maruah Sarawak menentang penyerahan kepada British."
    },
    {
      q: "Apakah matlamat utama penubuhan kumpulan sulit Rukun 13 di Sarawak?",
      options: ["Mengumpul dana membina sekolah", "Menghapuskan pegawai tinggi British bagi membatalkan penyerahan Sarawak", "Menyusun pertandingan sukan", "Membeli ladang getah"],
      answer: 1,
      explanation: "Rukun 13 ditubuhkan oleh anggota Pergerakan Pemuda Melayu (PPM) Sibu untuk melancarkan tindakan radikal membunuh pegawai British."
    }
  ],
  struktur: [
    {
      q: "Pengenalan Malayan Union pada 1 April 1946 telah membangkitkan gelombang penentangan terbesar orang Melayu dalam sejarah tanah air.\n(a) Nyatakan dua ciri utama Malayan Union dari aspek pentadbiran dan kewarganegaraan.\n(b) Jelaskan dua bentuk tindakan yang diambil oleh orang Melayu untuk menentang Malayan Union.\n(c) Apakah iktibar daripada kejayaan orang Melayu menumbangkan Malayan Union yang boleh diterapkan oleh generasi masa kini?",
      skema: [
        "(a) 1. Pentadbiran diketuai oleh Gabenor British berkuasa mutlak dan kuasa Sultan dilucutkan [1m]. 2. Syarat kewarganegaraan secara terbuka berasaskan prinsip jus soli [1m].",
        "(b) 1. Mengadakan demonstrasi bantahan secara aman, menyuarakan kritikan menerusi akhbar tempatan, dan menghantar telegram bantahan ke London [1m]. 2. Menubuhkan UMNO pada Mei 1946 untuk menyatukan seluruh persatuan Melayu memulaukan pelantikan Gabenor British [1m].",
        "(c) Iktibar utama ialah perpaduan erat merentas perbezaan pendapat adalah kunci kejayaan mempertahankan hak dan kedaulatan tanah air. Tindakan berorganisasi secara berhemah dan kebijaksanaan diplomasi mampu menumpaskan kuasa besar tanpa pertumpahan darah [2m]."
      ]
    }
  ]
};

// BAB 5
const b5 = {
  id: "bab5",
  babNum: "BAB 5",
  title: "PERSEKUTUAN TANAH MELAYU 1948",
  icon: "🤝",
  anyflipPages: "Buku Teks Sejarah Tingkatan 4 KSSM (Halaman 124 – 141)",
  synopsis: "Bab ini mengupas latar belakang dan faktor pembentukan Persekutuan Tanah Melayu 1948 menggantikan Malayan Union, peranan Jawatankuasa Kerja, cadangan balas gabungan PUTERA-AMCJA menerusi Perlembagaan Rakyat, ciri-ciri terperinci PTM 1948 dari aspek pentadbiran, kuasa Raja-raja Melayu, perundangan dan kewarganegaraan, serta kesannya dalam merintis jalan kemerdekaan.",
  notes: [
    {
      subtopic: "5.1 Latar Belakang Penubuhan Persekutuan Tanah Melayu 1948",
      summary: "British menubuhkan Jawatankuasa Kerja pada Julai 1946 untuk merangka perjanjian baharu bersama Raja-raja Melayu dan UMNO, manakala gabungan PUTERA-AMCJA mengemukakan Perlembagaan Rakyat.",
      verbatim: [
        "Jawatankuasa Kerja 1946: Dianggotai oleh wakil Kerajaan British, empat orang wakil Raja-raja Melayu (cth: Dato' Hamzah Abdullah), dan dua wakil UMNO (Dato' Onn Jaafar dan Dato' Abdul Rahman Mohd Yassin).",
        "Tuntutan Jawatankuasa Kerja: Menolak prinsip Malayan Union, memulihkan kedaulatan Raja-raja Melayu, menjaga kedudukan istimewa orang Melayu, dan memperketatkan syarat kewarganegaraan.",
        "Gabungan PUTERA-AMCJA: Gabungan Pusat Tenaga Rakyat (PUTERA dipimpin Dr. Burhanuddin al-Helmi) dan All Malaya Council of Joint Action (AMCJA dipimpin Tan Cheng Lock) menolak Jawatankuasa Kerja kerana tiada wakil bukan Melayu dan radikal.",
        "Perlembagaan Rakyat 1947: Mengandungi 10 perkara utama termasuk: Tanah Melayu disatukan dengan Singapura, Bahasa Melayu bahasa kebangsaan rasmi, 'Melayu' menjadi nama kerakyatan tunggal, pertahanan di bawah kerajaan tempatan, dan bendera merah putih bersimbolkan 12 bintang."
      ],
      explanation: "Walaupun British menolak Perlembagaan Rakyat dan meneruskan PTM 1948, wacana ini membuktikan wujudnya kesedaran awal tentang konsep integrasi kaum dan kerakyatan bersama."
    },
    {
      subtopic: "5.2 Faktor Penubuhan Persekutuan Tanah Melayu 1948",
      summary: "PTM 1948 ditubuhkan hasil gabungan tiga faktor: Penentangan berterusan orang Melayu, Cadangan Raja-raja Melayu dan UMNO, serta Sokongan pegawai pentadbir British.",
      verbatim: [
        "Penentangan Orang Melayu terhadap Malayan Union: Bantahan berterusan menyebabkan Malayan Union tidak dapat dilaksanakan dengan licin dan menggugat kestabilan politik.",
        "Cadangan Raja-raja Melayu & UMNO: Pertemuan di Kuala Kangsar mencadangkan pembentukan persekutuan negeri-negeri Melayu, menuntut perjanjian baharu ditandatangani, dan taraf naungan dipulihkan.",
        "Sokongan Pentadbir British: Pegawai kanan British seperti Sir Malcolm MacDonald (Gabenor Jeneral) dan Sir Edward Gent menyedari dasar menindas orang Melayu akan menguntungkan pengaruh komunis, maka dasar diplomasi dan perkongsian kuasa diutamakan."
      ],
      explanation: "Kewijaksanaan rundingan dan diplomasi antara Raja-raja Melayu, UMNO dan pihak British berjaya mengubah pendirian kerajaan imperialis di London."
    },
    {
      subtopic: "5.3 Ciri-ciri Persekutuan Tanah Melayu 1948",
      summary: "Perjanjian PTM ditandatangani pada 21 Januari 1948 dan berkuat kuasa 1 Februari 1948 dengan empat ciri utama: Pentadbiran, Kuasa Raja-raja Melayu, Perundangan, dan Kewarganegaraan.",
      verbatim: [
        "Pentadbiran Persekutuan: Menggabungkan 9 Negeri Melayu dan 2 Negeri Selat (Melaka & Pulau Pinang) diketuai oleh Pesuruhjaya Tinggi British. Majlis Mesyuarat Kerajaan Persekutuan dibentuk.",
        "Kuasa Raja-raja Melayu: Majlis Raja-Raja diwujudkan semula dengan kuasa mengesahkan undang-undang persekutuan, meluluskan pelantikan jawatan kanan, dan memelihara kedudukan agama Islam.",
        "Perundangan: Majlis Perundangan Persekutuan (MPP) dipengerusikan oleh Pesuruhjaya Tinggi merangkumi 75 ahli yang membincangkan undang-undang peringkat persekutuan.",
        "Kewarganegaraan: Diperketatkan melalui dua kaedah: 1. Kuat Kuasa Undang-Undang (anak negeri dan rakyat British yang lahir di Negeri Selat); 2. Pendaftaran (bermastautin selama 15 tahun daripada 20 tahun sebelumnya, berkelakuan baik dan fasih berbahasa Melayu atau Inggeris)."
      ],
      explanation: "Ciri-ciri ini memulihkan kedaulatan tradisi beraja dan hak asal bangsa Melayu sambil tetap menyediakan mekanisme penyertaan bagi kaum imigran."
    },
    {
      subtopic: "5.4 Kesan Penubuhan Persekutuan Tanah Melayu 1948",
      summary: "Penubuhan PTM 1948 mengembalikan kedaulatan Sultan, mengiktiraf kedudukan istimewa orang Melayu, merintis kerjasama kaum (CLC), dan menjadi asas perlembagaan negara merdeka.",
      verbatim: [
        "Mengembalikan Kedaulatan Raja-raja Melayu: Status kedaulatan Sultan dan sempadan negeri-negeri Melayu dipulihkan sepenuhnya berbanding era Malayan Union.",
        "Menjaga Kedudukan Istimewa Orang Melayu: Fasal khusus dalam perjanjian memperuntukkan tanggungjawab Pesuruhjaya Tinggi memelihara kedudukan istimewa orang Melayu dan hak sah kaum lain.",
        "Membuka Ruang Kewarganegaraan: Orang bukan Melayu berpeluang menjadi warganegara sah Persekutuan Tanah Melayu melalui syarat pendaftaran yang teratur.",
        "Merintis Kerjasama Kaum: Menjadi batu asas kepada penubuhan Jawatankuasa Hubungan Antara Kaum (CLC) 1949 yang merintis jalan pakatan murni menuju kemerdekaan 1957."
      ],
      explanation: "PTM 1948 merupakan titik tolak terpenting dalam sejarah moden Malaysia yang membina kerangka asas kenegaraan yang kekal diamalkan sehingga hari ini."
    }
  ],
  steps: [
    {
      step: "Langkah 1",
      title: "Penubuhan Jawatankuasa Kerja Julai 1946",
      detail: "Raja-raja Melayu, UMNO dan British membentuk jawatankuasa khas di King's House Kuala Lumpur untuk merangka draf Persekutuan Tanah Melayu.",
      tip: "Jawatankuasa Kerja menolak konsep kesatuan mutlak Malayan Union."
    },
    {
      step: "Langkah 2",
      title: "Penentangan PUTERA-AMCJA & 'Hartal'",
      detail: "Gabungan PUTERA-AMCJA melancarkan Hartal (tutup kedai dan mogok umum) pada 20 Oktober 1947 di seluruh bandar utama bagi menolak draf PTM 1948.",
      tip: "Hartal 1947 melumpuhkan aktiviti ekonomi selama sehari."
    },
    {
      step: "Langkah 3",
      title: "Pemeteraian Perjanjian PTM 21 Januari 1948",
      detail: "Raja-raja Melayu dan Gabenor Malayan Union menandatangani Perjanjian Persekutuan Tanah Melayu di King's House Kuala Lumpur.",
      tip: "Perjanjian ini memansuhkan Malayan Union secara rasmi."
    },
    {
      step: "Langkah 4",
      title: "Kuat Kuasa Persekutuan Tanah Melayu 1 Februari 1948",
      detail: "Persekutuan Tanah Melayu berkuat kuasa secara rasmi, mengembalikan takhta dan kedaulatan Sultan serta menubuhkan Majlis Raja-Raja.",
      tip: "PTM 1948 menjadi asas perlembagaan Merdeka 1957."
    }
  ],
  keypoints: [
    { term: "Jawatankuasa Kerja 1946", meaning: "Jawatankuasa yang merangka Perjanjian PTM 1948 dianggotai wakil British, Raja-raja Melayu dan UMNO.", badge: "Jawatankuasa" },
    { term: "PUTERA-AMCJA", meaning: "Gabungan parti politik Melayu radikal dan bukan Melayu yang menolak PTM 1948 dan mengemukakan Perlembagaan Rakyat.", badge: "Pakatan Politik" },
    { term: "Perlembagaan Rakyat 1947", meaning: "Draf perlembagaan alternatif PUTERA-AMCJA yang mencadangkan perkataan 'Melayu' sebagai nama kewarganegaraan.", badge: "Dokumen Sejarah" },
    { term: "Majlis Raja-Raja", meaning: "Badan perlembagaan yang dipulihkan melalui PTM 1948 untuk memelihara hak kedaulatan Sultan.", badge: "Institusi Beraja" },
    { term: "Kewarganegaraan Pendaftaran", meaning: "Kaedah memperoleh kewarganegaraan PTM 1948 melalui syarat tempoh pemastautinan 15 tahun dan kelakuan baik.", badge: "Syarat Kerakyatan" }
  ],
  questions: [
    {
      q: "Apakah perbezaan utama antara pentadbiran Malayan Union 1946 dengan Persekutuan Tanah Melayu 1948?",
      options: ["Malayan Union diketuai Yang di-Pertuan Agong manakala PTM diketuai Gabenor", "Malayan Union menghapuskan kedaulatan Sultan manakala PTM 1948 memulihkan kedaulatan Raja-raja Melayu", "PTM 1948 menggabungkan Singapura manakala Malayan Union mengasingkannya", "PTM 1948 mengamalkan prinsip jus soli mutlak"],
      answer: 1,
      explanation: "PTM 1948 mengembalikan takhta, kedaulatan dan bidang kuasa Raja-raja Melayu serta menolak prinsip kesatuan mutlak Malayan Union."
    },
    {
      q: "Mengapakah gabungan PUTERA-AMCJA menentang draf penubuhan Persekutuan Tanah Melayu 1948?",
      options: ["Kerana tiada wakil bukan Melayu dan parti radikal dalam Jawatankuasa Kerja", "Kerana mereka menyokong penjajahan Jepun", "Kerana mereka mahu ibu kota dipindahkan ke Melaka", "Kerana mereka menentang sistem perbankan"],
      answer: 0,
      explanation: "PUTERA-AMCJA berasa diketepikan kerana Jawatankuasa Kerja hanya dianggotai wakil British, Raja-raja Melayu dan UMNO."
    },
    {
      q: "Apakah nama draf perlembagaan alternatif yang dicadangkan oleh gabungan PUTERA-AMCJA pada tahun 1947?",
      options: ["Perlembagaan Malayan Union", "Perlembagaan Rakyat", "Perlembagaan Persekutuan", "Watikah Merdeka"],
      answer: 1,
      explanation: "Perlembagaan Rakyat 1947 merupakan perlembagaan pertama yang dirangka sepenuhnya oleh penduduk tempatan pelbagai kaum."
    },
    {
      q: "Berapakah bilangan negeri yang bergabung membentuk Persekutuan Tanah Melayu pada 1 Februari 1948?",
      options: ["9 buah negeri", "11 buah negeri (9 Negeri Melayu dan 2 Negeri Selat)", "14 buah negeri", "13 buah negeri"],
      answer: 1,
      explanation: "PTM 1948 menggabungkan 9 Negeri-negeri Melayu serta Pulau Pinang dan Melaka (Singapura kekal terasing)."
    },
    {
      q: "Apakah kesan penubuhan PTM 1948 terhadap orang bukan Melayu di Tanah Melayu?",
      options: ["Semua orang bukan Melayu diusir keluar", "Membuka peluang kewarganegaraan secara sah melalui pendaftaran yang teratur", "Menghalang sebarang pemilikan perniagaan", "Menghapuskan sekolah vernakular"],
      answer: 1,
      explanation: "PTM 1948 memberi pengiktirafan kewarganegaraan secara teratur kepada orang bukan Melayu yang setia kepada tanah air."
    }
  ],
  struktur: [
    {
      q: "Perjanjian Persekutuan Tanah Melayu 1948 telah ditandatangani pada 21 Januari 1948 bagi menggantikan Malayan Union.\n(a) Namakan dua pihak tempatan yang menganggotai Jawatankuasa Kerja 1946.\n(b) Jelaskan dua kesan penubuhan Persekutuan Tanah Melayu 1948 terhadap sistem pentadbiran negara.\n(c) Mengapakah tolak ansur antara kaum penting dalam proses pembentukan sesebuah perlembagaan negara merdeka?",
      skema: [
        "(a) Wakil Raja-raja Melayu dan wakil UMNO [2m].",
        "(b) 1. Mengembalikan kedaulatan dan kuasa Raja-raja Melayu menerusi pembentukan Majlis Raja-Raja [1m]. 2. Mengiktiraf kedudukan istimewa orang Melayu di samping membuka ruang kewarganegaraan kepada kaum bukan Melayu [1m].",
        "(c) Tolak ansur penting untuk menjamin hak semua pihak terpelihara, mengelakkan konflik perkauman yang merugikan, mewujudkan keharmonian politik, dan membina rasa kepunyaan bersama terhadap negara berdaulat [2m]."
      ]
    }
  ]
};

fs.writeFileSync('c:/antigravity3/scratch/b4.json', JSON.stringify(b4, null, 2), 'utf8');
fs.writeFileSync('c:/antigravity3/scratch/b5.json', JSON.stringify(b5, null, 2), 'utf8');
console.log('Bab 4 & 5 saved.');
