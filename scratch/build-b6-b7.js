const fs = require('fs');

// BAB 6: ANCAMAN KOMUNIS DAN PERISYTIHARAN DARURAT
const b6 = {
  id: "bab6",
  babNum: "BAB 6",
  title: "ANCAMAN KOMUNIS DAN PERISYTIHARAN DARURAT",
  icon: "🛡️",
  anyflipPages: "Buku Teks Sejarah Tingkatan 4 KSSM (Halaman 144 – 169)",
  synopsis: "Bab ini menjelaskan kemasukan fahaman komunis dari China dan Indonesia, penubuhan PKM 1930, ancaman keganasan komunis selepas Perang Dunia Kedua (peristiwa Sungai Siput 1948), pengisytiharan darurat oleh Sir Edward Gent, langkah-langkah komprehensif membanteras komunis (Penguatkuasaan Undang-Undang Darurat, Pasukan Keselamatan, Pendaftaran Kad Pengenalan, Rancangan Briggs & Kampung Baru, Tawaran Pengampunan, Kempen Bulan Melawan Penjahat, Perang Saraf oleh Sir Gerald Templer, Rundingan Baling 1955), serta kesan darurat terhadap politik, ekonomi dan sosial negara sehingga penamatan darurat pada 31 Julai 1960.",
  notes: [
    {
      subtopic: "6.1 Kemasukan Pengaruh Komunis di Negara Kita",
      summary: "Ideologi komunisme diasaskan oleh Karl Marx dan Friedrich Engels. Fahaman ini menyusup masuk ke Tanah Melayu melalui dua saluran utama iaitu cawangan parti Kuomintang (KMT) dari China dan pemimpin Parti Komunis Indonesia (PKI).",
      verbatim: [
        "Pengaruh Komunis dari China: Cawangan Parti Kuomintang (KMT) ditubuhkan di Tanah Melayu sejak 1912. Selepas perpecahan KMT dan Parti Komunis China (PKC), ejen PKC menubuhkan Main School di bawah Parti Komunis Nanyang (NCB) pada 1926.",
        "Penubuhan PKM: Pada 30 April 1930, Parti Komunis Malaya (PKM) ditubuhkan di Kuala Pilah, Negeri Sembilan di bawah naungan Comintern (Komunis Antarabangsa) dengan sokongan Ho Chi Minh.",
        "Pengaruh Komunis dari Indonesia: Pemimpin PKI seperti Tan Malaka, Alimin, Musso dan Subakat menyebarkan fahaman komunis di Seberang Perai, Pulau Pinang, Perak dan Johor selepas pemberontakan PKI di Jawa gagal pada 1926.",
        "Strategi PKM: Menyusup ke dalam kesatuan sekerja (GLU - General Labour Union), sekolah vernakular Cina, dan menerbitkan risalah propaganda anti-British."
      ],
      explanation: "Kemasukan ideologi radikal ini membawa ancaman kepada kestabilan sosioekonomi Tanah Melayu kerana memperjuangkan penubuhan Republik Komunis Malaya melalui kekerasan."
    },
    {
      subtopic: "6.2 Ancaman Komunis di Negara Kita",
      summary: "PKM memulakan pemberontakan bersenjata secara terbuka selepas Persidangan Pemuda Komunis Asia di Calcutta pada 1948, menyasarkan pembunuhan peladang Eropah, sabotaj ekonomi, dan keganasan terhadap orang awam.",
      verbatim: [
        "Pencetus Pengisytiharan Darurat: Pada 16 Jun 1948, tiga orang pengurus ladang getah berbangsa Eropah dibunuh oleh komunis di Sungai Siput, Perak (Arthur Walker, John Allison, Ian Christian).",
        "Pengisytiharan Darurat: Pesuruhjaya Tinggi British, Sir Edward Gent mengisytiharkan darurat di seluruh Perak dan Johor pada 16 Jun 1948, dan diperluaskan ke seluruh Tanah Melayu pada 18 Jun 1948.",
        "Bentuk Ancaman & Keganasan: PKM merosakkan ladang getah dan lombong bijih timah, membakar kenderaan awam, mengebom landasan kereta api, mengancam keselamatan pasukan keselamatan, serta menubuhkan unit Min Yuen untuk memeras bekalan makanan dan ubat-ubatan daripada penduduk luar bandar."
      ],
      explanation: "Keganasan komunis melumpuhkan sumber pendapatan negara dan menyebabkan penderitaan rakyat jelata yang hidup dalam ketakutan."
    },
    {
      subtopic: "6.3 Usaha Menangani Ancaman Komunis",
      summary: "Kerajaan British dan Tanah Melayu melaksanakan pelbagai langkah ketenteraan, pentadbiran, perundangan, dan perang saraf yang menyeluruh untuk menghapuskan komunis.",
      verbatim: [
        "Penguatkuasaan Undang-Undang Darurat: Menahan sesiapa yang disyaki tanpa perbicaraan, mengenakan perintah berkurung, dan mengharamkan PKM serta parti politik berhaluan kiri.",
        "Pemerkasaan Pasukan Keselamatan: Menambah kekuatan Polis Persekutuan (Special Constables, Police Field Force, Flying Squad), Angkatan Tentera (Rejimen Askar Melayu Diraja, tentera Komanwel), dan Pasukan Pengawal Kampung (Home Guard).",
        "Pendaftaran Kebangsaan & Kad Pengenalan: Memperkenalkan sistem pendaftaran kad pengenalan wajib pada Julai 1948 untuk mengawal pergerakan penduduk dan mengenal pasti anasir subversif.",
        "Rancangan Briggs (1950): Dilancarkan oleh Sir Harold Briggs dengan memindahkan 400,000 penduduk setinggan luar bandar ke 'Kampung Baru' (New Village) yang dipagari kawat berduri dan dikawal ketat untuk memutuskan rantaian bekalan makanan kepada Min Yuen.",
        "Tawaran Pengampunan: Mengedarkan 40 juta risalah pengampunan melalui udara menyeru pengganas komunis menyerah diri.",
        "Kempen Bulan Melawan Penjahat (1950): Menggerakkan 500,000 rakyat pelbagai kaum mendaftar secara sukarela membantu pasukan keselamatan.",
        "Perang Saraf (Sir Gerald Templer, 1952): Memenangi 'hati dan fikiran' (hearts and minds) rakyat melalui pelonggaran syarat kewarganegaraan, pilihan raya majlis bandaran, pemansuhan perintah berkurung secara berperingkat (zon putih & zon hitam), dan ganjaran tunai penangkapan pemimpin PKM.",
        "Rundingan Baling (28–29 Disember 1955): Pertemuan di Sekolah Rendah Baling, Kedah antara Tunku Abdul Rahman, Tan Cheng Lock, David Marshall dengan Chin Peng (Setiausaha Agung PKM). Rundingan gagal kerana Chin Peng menolak pembubaran PKM dan enggan meletakkan senjata."
      ],
      explanation: "Kejayaan menggabungkan tindakan ketenteraan dengan pendekatan psikologi memenangi hati rakyat mematahkan kekuatan PKM sehingga terpaksa berundur ke sempadan Thailand."
    },
    {
      subtopic: "6.4 Kesan Zaman Darurat terhadap Negara Kita",
      summary: "Zaman darurat selama 12 tahun (1948–1960) memberikan impak yang mendalam terhadap aspek politik, ekonomi, dan sosiobudaya negara.",
      verbatim: [
        "Kesan Politik: Mempercepat proses berkerajaan sendiri dan kemerdekaan kerana British sedar hanya negara merdeka berpadu mampu menentang pengaruh komunis. Menggalakkan penubuhan parti MCA pada 1949 oleh Tan Cheng Lock untuk membela kebajikan orang Cina di Kampung Baru.",
        "Kesan Ekonomi: Kos perbelanjaan ketenteraan yang tinggi (mencecah $250,000 hingga $300,000 sehari) membantutkan pembangunan infrastruktur awam dan kebajikan rakyat.",
        "Kesan Sosioekonomi: Penduduk Kampung Baru menghadapi kawalan ketat catuan beras (Food Denial Campaign), kemusnahan harta benda, trauma peperangan, dan terkorbannya ramai perajurit dan orang awam.",
        "Penamatan Darurat: Pada 31 Julai 1960, Yang di-Pertuan Agong mengisytiharkan penamatan undang-undang darurat secara rasmi di seluruh Persekutuan Tanah Melayu."
      ],
      explanation: "Zaman darurat membangkitkan keazaman padu rakyat berbilang kaum untuk berganding bahu membina negara berdaulat yang bebas daripada ancaman anasir luar."
    }
  ],
  steps: [
    {
      step: "Langkah 1",
      title: "Peristiwa Pembunuhan di Sungai Siput 1948",
      detail: "PKM membunuh tiga pengurus ladang berbangsa Eropah di Sungai Siput, memaksa Sir Edward Gent mengisytiharkan Darurat pada 18 Jun 1948.",
      tip: "Peristiwa Sungai Siput = Titik tolak bermulanya Perisytiharan Darurat."
    },
    {
      step: "Langkah 2",
      title: "Pelaksanaan Rancangan Briggs & Kampung Baru",
      detail: "Sir Harold Briggs memindahkan ratusan ribu penduduk luar bandar ke Kampung Baru bagi memutuskan talian hayat bekalan makanan komunis (Min Yuen).",
      tip: "Rancangan Briggs melumpuhkan sokongan logistik gerila PKM."
    },
    {
      step: "Langkah 3",
      title: "Strategi Perang Saraf Sir Gerald Templer",
      detail: "Templer memperkenalkan konsep 'memenangi hati dan fikiran rakyat' dengan membezakan Kawasan Hitam dan Kawasan Putih serta melonggarkan syarat kerakyatan.",
      tip: "Kawasan Putih bebas perintah berkurung kerana bersih daripada komunis."
    },
    {
      step: "Langkah 4",
      title: "Rundingan Baling & Pengisytiharan Tamat Darurat",
      detail: "Tunku Abdul Rahman mengadakan Rundingan Baling 1955 dengan Chin Peng. Darurat ditamatkan secara rasmi pada 31 Julai 1960.",
      tip: "Darurat berlangsung selama 12 tahun (1948–1960)."
    }
  ],
  keypoints: [
    { term: "Min Yuen", meaning: "Rangkaian sulit komunis dalam kalangan orang awam untuk mengintip dan membekalkan makanan serta ubat kepada pengganas PKM.", badge: "Organisasi Komunis" },
    { term: "Rancangan Briggs", meaning: "Rancangan penempatan semula 400,000 penduduk setinggan ke Kampung Baru berpagar untuk memotong bekalan makanan PKM.", badge: "Strategi Keselamatan" },
    { term: "Perang Saraf", meaning: "Kempen psikologi pimpinan Sir Gerald Templer untuk memenangi hati dan keyakinan rakyat menentang komunis.", badge: "Taktik Psikologi" },
    { term: "Kawasan Putih", meaning: "Kawasan yang diisytiharkan bebas daripada sebarang ancaman pengganas komunis dan ditarik balik sekatan darurat.", badge: "Zon Keselamatan" },
    { term: "Rundingan Baling", meaning: "Pertemuan bersejarah pada 28-29 Disember 1955 antara Tunku Abdul Rahman dengan Chin Peng yang berakhir tanpa persetujuan.", badge: "Rundingan Bersejarah" }
  ],
  questions: [
    {
      q: "Apakah peristiwa utama yang menyebabkan Sir Edward Gent mengisytiharkan Undang-Undang Darurat pada Jun 1948?",
      options: ["Pembunuhan tiga orang pengurus ladang getah Eropah di Sungai Siput, Perak", "Penenggelaman kapal perang British di Selat Melaka", "Pemberontakan petani di Pasir Puteh", "Pemulauan cukai oleh peniaga di Singapura"],
      answer: 0,
      explanation: "Pembunuhan tiga pengurus ladang di Sungai Siput oleh komunis mencetuskan pengisytiharan darurat serta-merta."
    },
    {
      q: "Apakah objektif utama penubuhan 'Kampung Baru' di bawah Rancangan Briggs 1950?",
      options: ["Memajukan sektor pertanian komersial", "Memutuskan hubungan dan bekalan makanan daripada Min Yuen kepada komunis di hutan", "Menempatkan pelancong asing", "Mendirikan pusat kilang getah baharu"],
      answer: 1,
      explanation: "Dengan memindahkan penduduk pinggir hutan ke kawasan berpagar, Min Yuen tidak lagi dapat menghantar bekalan makanan kepada gerila komunis."
    },
    {
      q: "Siapakah Pesuruhjaya Tinggi British yang melancarkan pendekatan 'Perang Saraf' untuk memenangi hati dan fikiran rakyat?",
      options: ["Sir Harold MacMichael", "Sir Edward Gent", "Sir Gerald Templer", "Sir Malcolm MacDonald"],
      answer: 2,
      explanation: "Sir Gerald Templer menekankan kempen psikologi, ganjaran wang, dan pelonggaran syarat kerakyatan untuk memenangi sokongan rakyat."
    },
    {
      q: "Mengapakah Rundingan Baling pada 28–29 Disember 1955 menemui jalan buntu?",
      options: ["Kerana Chin Peng enggan membubarkan PKM dan menolak penyerahan senjata tanpa syarat", "Kerana Tunku Abdul Rahman membatalkan rundingan di saat akhir", "Kerana campur tangan tentera Jepun", "Kerana masalah bahasa penterjemah"],
      answer: 0,
      explanation: "Tunku Abdul Rahman tegas menolak tuntutan Chin Peng agar PKM diiktiraf sebagai parti politik yang sah."
    },
    {
      q: "Bilakah tarikh Undang-Undang Darurat ditamatkan secara rasmi di Persekutuan Tanah Melayu?",
      options: ["31 Ogos 1957", "31 Julai 1960", "16 September 1963", "13 Mei 1969"],
      answer: 1,
      explanation: "Darurat ditamatkan secara rasmi pada 31 Julai 1960 selepas 12 tahun ancaman komunis berjaya dilumpuhkan."
    }
  ],
  struktur: [
    {
      q: "Ancaman keganasan Parti Komunis Malaya (PKM) telah mencetuskan Zaman Darurat di Tanah Melayu dari tahun 1948 hingga 1960.\n(a) Nyatakan dua kaedah keganasan yang dilakukan oleh pengganas komunis untuk menggugat kestabilan negara.\n(b) Jelaskan bagaimana strategi 'Rancangan Briggs' berjaya melemahkan pergerakan komunis di dalam hutan.\n(c) Pada pandangan anda, apakah kepentingan memelihara keamanan negara daripada sebarang bentuk fahaman pelampau?",
      skema: [
        "(a) 1. Membunuh pengurus ladang getah dan pelombong bijih timah [1m]. 2. Mensabotaj kemudahan awam seperti meletupkan jambatan, rel kereta api dan membakar kenderaan [1m].",
        "(b) Rancangan Briggs menempatkan semula 400,000 penduduk pinggir hutan ke 'Kampung Baru' yang dikawal ketat oleh kawat berduri dan rondaan tentera. Langkah ini memutuskan bekalan makanan, ubat-ubatan dan maklumat daripada Min Yuen kepada gerila komunis, menyebabkan mereka kebuluran dan terpaksa keluar dari hutan menyerah diri [2m].",
        "(c) Keamanan amat bernilai kerana ia menjamin kestabilan sosioekonomi, menarik pelaburan domestik dan antarabangsa, membolehkan anak bangsa menuntut ilmu tanpa rasa takut, dan memastikan kesinambungan tamadun serta kedaulatan tanah air tidak tergadai [2m]."
      ]
    }
  ]
};

// BAB 7: USAHA KE ARAH KEMERDEKAAN
const b7 = {
  id: "bab7",
  babNum: "BAB 7",
  title: "USAHA KE ARAH KEMERDEKAAN",
  icon: "🕊️",
  anyflipPages: "Buku Teks Sejarah Tingkatan 4 KSSM (Halaman 172 – 193)",
  synopsis: "Bab ini mengupas perkembangan idea negara merdeka melalui pertubuhan politik awal (Kesatuan Melayu Muda, PKMM, API, AWAS, Pergerakan Pemuda Melayu, UMNO, MCA, MIC, PAS, IMP), penubuhan Jawatankuasa Hubungan Antara Kaum (CLC) 1949 untuk menyelesaikan isu sensitif politik dan ekonomi, pembentukan Sistem Ahli 1951 sebagai latihan berkerajaan sendiri, evolusi Sistem Pendidikan Kebangsaan (Barnes, Fenn-Wu, Ordinan Pelajaran 1952, Penyata Razak 1956), serta penubuhan dan kerjasama parti politik menerusi Pakatan Perikatan.",
  notes: [
    {
      subtopic: "7.1 Latar Belakang Idea Negara Merdeka",
      summary: "Idea pembinaan negara merdeka dipelopori oleh pelbagai pertubuhan politik dengan visi yang berbeza, merangkumi gagasan Melayu Raya, negara sosialis, negara Islam, dan kemerdekaan berasaskan perpaduan kaum.",
      verbatim: [
        "Kesatuan Melayu Muda (KMM - 1938): Dipimpin Ibrahim Haji Yaakob memperjuangkan kemerdekaan melalui konsep 'Melayu Raya' menyatukan Tanah Melayu dan Indonesia.",
        "Parti Kebangsaan Melayu Malaya (PKMM - 1945): Dipimpin Dr. Burhanuddin al-Helmi dan Ishak Haji Muhammad memperjuangkan 'Melayu Raya' serta konsep kebangsaan terbuka berdaulat.",
        "Angkatan Pemuda Insaf (API - 1946): Dipimpin Ahmad Boestamam dengan slogan 'Merdeka dengan Darah' memperjuangkan kemerdekaan secara revolusi rakyat.",
        "Angkatan Wanita Sedar (AWAS - 1946): Dipimpin Shamsiah Fakeh memperjuangkan hak wanita dan kemerdekaan Tanah Melayu daripada penjajahan.",
        "Pergerakan Pemuda Melayu (PPM - Sibu 1946): Menentang penyerahan Sarawak kepada Mahkota British demi kedaulatan tanah air.",
        "Pertubuhan Kebangsaan Melayu Bersatu (UMNO - 1946): Dipimpin Dato' Onn Jaafar menentang Malayan Union dengan slogan 'Hidup Melayu' dan kemudiannya ditukar kepada 'Merdeka' oleh Tunku Abdul Rahman pada 1951.",
        "Parti Kebangsaan Melayu Labuan (PKML - 1946): Dipimpin Tengku Noordin memperjuangkan kemerdekaan Sabah dan Labuan.",
        "Malayan Indian Congress (MIC - 1946): Ditubuhkan oleh John Thivy menjaga kepentingan masyarakat India dan menyokong kemerdekaan Tanah Melayu.",
        "Malayan Chinese Association (MCA - 1949): Ditubuhkan oleh Tan Cheng Lock menjaga kebajikan masyarakat Cina dan berganding bahu menentang komunis.",
        "Parti Islam Se-Tanah Melayu (PAS - 1951): Dipimpin Haji Ahmad Fuad Hassan menegakkan negara Islam berlandaskan syariat.",
        "Independence of Malaya Party (IMP - 1951): Ditubuhkan oleh Dato' Onn Jaafar yang mengasaskan idea perpaduan kebangsaan tanpa mengira kaum."
      ],
      explanation: "Kepelbagaian haluan ini membuktikan kesedaran politik yang semakin mekar dan matang dalam kalangan seluruh rakyat di Tanah Melayu, Sabah dan Sarawak."
    },
    {
      subtopic: "7.2 Jawatankuasa Hubungan Antara Kaum (CLC)",
      summary: "Ditubuhkan pada Januari 1949 di Pulau Pinang dianggotai pemimpin pelbagai kaum untuk menyelesaikan isu sensitif politik, ekonomi, dan perkauman demi mewujudkan persefahaman nasional.",
      verbatim: [
        "Penubuhan CLC (Communities Liaison Committee): Dipengerusikan oleh E.E.C. Thuraisingham, dengan Dato' Onn Jaafar (wakil Melayu) dan Tan Cheng Lock (wakil Cina) di bawah inisiatif Malcolm MacDonald.",
        "Isu Politik & Pilihan Raya: Bersetuju mengadakan pilihan raya secara berperingkat ke arah pemerintahan sendiri.",
        "Isu Kedudukan Istimewa Orang Melayu: Bersetuju hak istimewa orang Melayu diakui kerana status peribumi, di samping hak sah kaum bukan Melayu diiktiraf.",
        "Isu Kedudukan Ekonomi Bumiputera: Bersetuju menubuhkan RIDA (Rural and Industrial Development Authority) pada 1950 dipengerusikan Dato' Onn Jaafar untuk membantu taraf ekonomi orang Melayu di luar bandar.",
        "Isu Kewarganegaraan: Bersetuju melonggarkan syarat kewarganegaraan kepada kaum bukan Melayu bagi memupuk kesetiaan kepada Tanah Melayu.",
        "Isu Pendidikan: Bersetuju menubuhkan sistem pendidikan seragam berasaskan bahasa kebangsaan untuk memupuk perpaduan nasional."
      ],
      explanation: "CLC memainkan peranan penting sebagai medan diplomasi meja bulat terawal yang merapatkan jurang prejudis antara kaum."
    },
    {
      subtopic: "7.3 Sistem Ahli",
      summary: "Sistem Ahli diperkenalkan oleh British pada Januari 1951 di bawah Sir Henry Gurney sebagai latihan amali berkerajaan sendiri kepada para pemimpin tempatan mentadbir portfolio kementerian.",
      verbatim: [
        "Ciri-ciri Sistem Ahli: Bertaraf seperti 'Menteri', memegang portfolio pentadbiran (cth: Hal Ehwal Dalam Negeri, Pelajaran, Kesihatan), dilantik oleh Pesuruhjaya Tinggi British dengan persetujuan Majlis Raja-Raja, dan bertanggungjawab mencadangkan undang-undang berkaitan jabatannya.",
        "Anggota Sistem Ahli 1951: Dato' Onn Jaafar (Ahli Hal Ehwal Dalam Negeri), E.E.C. Thuraisingham (Ahli Pelajaran), Tunku Yaacob ibni Sultan Abdul Hamid (Ahli Pertanian dan Perhutanan), Dr. Lee Tiang Keng (Ahli Kesihatan), Dato' Mahmud Mat (Ahli Tanah, Lombong dan Perhubungan).",
        "Kepentingan Sistem Ahli: Menjadi tapak latihan asas melatih pemimpin tempatan mengendalikan jentera birokrasi moden, mengurangkan pergantungan kepada pegawai British, serta memupuk semangat kerjasama kabinet antara pelbagai kaum."
      ],
      explanation: "Sistem Ahli membuktikan kematangan anak watan dalam memikul tanggungjawab mentadbir negara ke arah kemerdekaan."
    },
    {
      subtopic: "7.4 Sistem Pendidikan Kebangsaan",
      summary: "Pendidikan menjadi instrumen utama membina perpaduan. Pelbagai jawatankuasa ditubuhkan untuk merangka kurikulum seragam menggantikan sistem pendidikan vernakular yang berasingan.",
      verbatim: [
        "Laporan Barnes 1951: Mengesyorkan satu corak sekolah rendah kebangsaan menggunakan Bahasa Melayu atau Bahasa Inggeris sebagai bahasa pengantar, manakala sekolah Cina dan Tamil dimansuhkan (ditentang oleh masyarakat Cina).",
        "Laporan Fenn-Wu 1951: Meneliti pandangan kaum Cina, mengiktiraf bahasa Cina tidak boleh dihapuskan dan sekolah vernakular Cina perlu diteruskan selari dengan kurikulum kebangsaan.",
        "Ordinan Pelajaran 1952: Meluluskan dua jenis sekolah rendah (Bahasa Melayu dan Bahasa Inggeris), namun gagal dilaksanakan sepenuhnya akibat masalah kekangan kewangan dan tentangan kaum.",
        "Penyata Razak 1956: Dipengerusikan Dato' Abdul Razak Hussein (Menteri Pelajaran pertama). Mengesyorkan: Sistem persekolahan yang sama untuk semua, Bahasa Melayu sebagai bahasa kebangsaan dan bahasa pengantar utama, kurikulum dan peperiksaan yang seragam, serta penubuhan Sekolah Umum (bahasa pengantar Melayu) dan Sekolah Jenis Umum (bahasa pengantar Cina/Tamil/Inggeris).",
        "Kesan Penyata Razak: Menjadi teras asas Akta Pelajaran 1961 dan Sistem Pendidikan Kebangsaan sehingga hari ini."
      ],
      explanation: "Penyata Razak 1956 berjaya mengimbangi aspirasi memartabatkan Bahasa Melayu sebagai bahasa perpaduan dengan memelihara warisan budaya kaum-kaum lain."
    },
    {
      subtopic: "7.5 Penubuhan Parti Politik",
      summary: "Kemunculan pelbagai parti politik mencerminkan kepelbagaian fahaman ideologi yang kemudiannya berkembang menjadi model perkongsian kuasa menerusi Parti Perikatan.",
      verbatim: [
        "Kerjasama Awal UMNO-MCA (1952): Ditubuhkan secara ad-hoc oleh Tunku Abdul Rahman dan Dato' Abdul Razak bersama Kolonel H.S. Lee untuk menghadapi Pilihan Raya Majlis Perbandaran Kuala Lumpur 1952, memenangi 9 daripada 12 kerusi.",
        "Penyertaan MIC (1954): Dipimpin V.T. Sambanthan, MIC menyertai Parti Perikatan menjadikan Perikatan gabungan tiga kaum terbesar di Tanah Melayu.",
        "Manifesto Parti Perikatan: Memperjuangkan kemerdekaan dalam masa empat tahun, mewujudkan perpaduan kaum, memelihara kedudukan Raja-raja Melayu, dan menjaga hak asasi rakyat.",
        "Konvensyen Kebangsaan: Kerjasama Perikatan membuktikan kepada kerajaan British bahawa penduduk Tanah Melayu mampu bersatu padu dan layak diberi kemerdekaan."
      ],
      explanation: "Model kerjasama Parti Perikatan menjadi tonggak utama kestabilan politik Malaysia moden dan formula kejayaan kemerdekaan 1957."
    }
  ],
  steps: [
    {
      step: "Langkah 1",
      title: "Penubuhan Jawatankuasa Hubungan Kaum (CLC) 1949",
      detail: "Pemimpin pelbagai kaum berunding meja bulat menyelesaikan isu kerakyatan, ekonomi Melayu (penubuhan RIDA), dan sistem pendidikan kebangsaan.",
      tip: "CLC memulakan tradisi rundingan tolak ansur antara kaum."
    },
    {
      step: "Langkah 2",
      title: "Pelaksanaan Sistem Ahli 1951",
      detail: "Sir Henry Gurney melantik tokoh tempatan menerajui portfolio kementerian bagi melatih pentadbiran berkerajaan sendiri.",
      tip: "Dato' Onn Jaafar dilantik sebagai Ahli Hal Ehwal Dalam Negeri."
    },
    {
      step: "Langkah 3",
      title: "Penggubalan Penyata Razak 1956",
      detail: "Dato' Abdul Razak Hussein merangka sistem persekolahan seragam dengan Bahasa Melayu sebagai bahasa pengantar kebangsaan.",
      tip: "Penyata Razak menjadi asas Akta Pelajaran kebangsaan."
    },
    {
      step: "Langkah 4",
      title: "Pembentukan Gabungan Parti Perikatan (UMNO-MCA-MIC)",
      detail: "Kerjasama UMNO-MCA dalam PRU Perbandaran KL 1952 diperluaskan dengan kemasukan MIC 1954 membentuk gabungan Perikatan yang mantap.",
      tip: "Perikatan menang besar dengan slogan kemerdekaan berpadu."
    }
  ],
  keypoints: [
    { term: "CLC", meaning: "Communities Liaison Committee 1949 dipengerusikan E.E.C. Thuraisingham untuk membina persefahaman antara kaum.", badge: "Jawatankuasa Kaum" },
    { term: "RIDA", meaning: "Rural and Industrial Development Authority 1950 dipengerusikan Dato' Onn Jaafar untuk memajukan taraf ekonomi orang Melayu luar bandar.", badge: "Agensi Pembangunan" },
    { term: "Sistem Ahli", meaning: "Sistem latihan pentadbiran berkerajaan sendiri 1951 di mana tokoh tempatan mengetuai portfolio kementerian.", badge: "Latihan Pentadbiran" },
    { term: "Penyata Razak 1956", meaning: "Laporan pendidikan kebangsaan yang menetapkan Bahasa Melayu sebagai bahasa pengantar dan sukatan kurikulum seragam.", badge: "Dasar Pendidikan" },
    { term: "Parti Perikatan", meaning: "Gabungan politik UMNO, MCA dan MIC yang mengamalkan prinsip perkongsian kuasa dan toleransi kaum.", badge: "Pakatan Politik" }
  ],
  questions: [
    {
      q: "Apakah peranan utama Jawatankuasa Hubungan Antara Kaum (CLC) yang ditubuhkan pada tahun 1949?",
      options: ["Menetapkan sempadan negeri-negeri Melayu", "Menyelesaikan isu-isu sensitif berkaitan politik, ekonomi, dan kerakyatan antara kaum", "Membeli senjata perang daripada Komanwel", "Menghapuskan bahasa ibunda vernakular"],
      answer: 1,
      explanation: "CLC ditubuhkan untuk mencari titik persefahaman dan tolak ansur politik antara pemimpin pelbagai kaum."
    },
    {
      q: "Siapakah tokoh yang dilantik sebagai Pengerusi pertama Lembaga Pembangunan Industri Desa (RIDA) pada tahun 1950?",
      options: ["Tunku Abdul Rahman", "Dato' Onn Jaafar", "Tan Cheng Lock", "Dr. Burhanuddin al-Helmi"],
      answer: 1,
      explanation: "Dato' Onn Jaafar mempengerusikan RIDA untuk membangunkan ekonomi dan perniagaan masyarakat luar bandar."
    },
    {
      q: "Apakah matlamat utama British memperkenalkan Sistem Ahli pada tahun 1951?",
      options: ["Melatih pemimpin tempatan dalam amalan pentadbiran kerajaan ke arah berkerajaan sendiri", "Menggantikan peranan Yang di-Pertuan Agong", "Memaksa rakyat membayar cukai berganda", "Mengawal media akhbar tempatan"],
      answer: 0,
      explanation: "Sistem Ahli memberi latihan dan pendedahan kepada pemimpin tempatan untuk mengendalikan kementerian sebelum merdeka."
    },
    {
      q: "Apakah cadangan utama Penyata Razak 1956 yang menjadi asas sistem pendidikan kebangsaan Malaysia?",
      options: ["Mengutamakan bahasa Inggeris sebagai bahasa tunggal di universiti", "Mewujudkan kurikulum seragam dan menetapkan Bahasa Melayu sebagai bahasa kebangsaan utama", "Memisahkan sekolah mengikut agama", "Memansuhkan peperiksaan awam kebangsaan"],
      answer: 1,
      explanation: "Penyata Razak menekankan kurikulum seragam berorientasikan negara ini dengan Bahasa Melayu sebagai teras perpaduan."
    },
    {
      q: "Apakah faktor kejayaan gabungan UMNO dan MCA dalam Pilihan Raya Majlis Perbandaran Kuala Lumpur 1952?",
      options: ["Pakatan murni perkongsian calon dan sokongan padu pengundi berbilang kaum", "Bantuan kewangan daripada Bank Dunia", "Ketiadaan parti lawan lain yang bertanding", "Campur tangan tentera British di pusat undi"],
      answer: 0,
      explanation: "Kerjasama strategik UMNO dan MCA memenangi 9 daripada 12 kerusi kerana menggembleng sokongan kedua-dua kaum terbesar."
    }
  ],
  struktur: [
    {
      q: "Usaha ke arah kemerdekaan menuntut kebijaksanaan pemimpin tempatan mengadakan tolak ansur politik dan membentuk sistem perundangan yang harmoni.\n(a) Namakan dua portfolio kementerian yang dipegang oleh pemimpin tempatan dalam Sistem Ahli 1951.\n(b) Terangkan dua cadangan Penyata Razak 1956 dalam usaha memupuk perpaduan murid pelbagai kaum.\n(c) Mengapakah sistem pendidikan kebangsaan yang seragam penting dalam melahirkan warga Malaysia yang patriotik?",
      skema: [
        "(a) Ahli Hal Ehwal Dalam Negeri (Dato' Onn Jaafar) / Ahli Pelajaran (E.E.C. Thuraisingham) / Ahli Kesihatan (Dr. Lee Tiang Keng) [Mana-mana 2 jawatan/tokoh, 2m].",
        "(b) 1. Mewujudkan satu sistem sukatan pelajaran (kurikulum) dan peperiksaan yang seragam untuk semua sekolah di seluruh negara [1m]. 2. Menjadikan Bahasa Melayu sebagai bahasa pengantar utama di samping membenarkan bahasa ibunda kaum lain di Sekolah Jenis Umum [1m].",
        "(c) Pendidikan yang seragam memupuk nilai kebersamaan, menghapuskan jurang prasangka kaum sejak usia muda, membina identiti nasional berlandaskan rasa bangga terhadap sejarah dan bahasa kebangsaan, serta menjamin keharmonian masa depan negara [2m]."
      ]
    }
  ]
};

fs.writeFileSync('c:/antigravity3/scratch/b6.json', JSON.stringify(b6, null, 2), 'utf8');
fs.writeFileSync('c:/antigravity3/scratch/b7.json', JSON.stringify(b7, null, 2), 'utf8');
console.log('Bab 6 & 7 saved successfully.');
