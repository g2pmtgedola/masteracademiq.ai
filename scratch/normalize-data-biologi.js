const fs = require('fs');

const content = fs.readFileSync('c:/antigravity3/data-biologi.js', 'utf8');
const data = eval(content + '; BIOLOGI_DATA;');

const biologySteps = {
  "bio-bab1": [
    {
      step: "Langkah 1",
      title: "Klasifikasi Sisa Biologi Mengikut Kategori SOP",
      detail: "Asingkan bahan sisa makmal kepada 4 kategori rasmi: Kategori A (Sisa Tajam: picagari, jarum, skalpel), Kategori B (Sisa Tidak Tajam: piring petri, sarung tangan kultur), Kategori C (Bangkai Haiwan makmal), dan Kategori D (Cecair Kultur/Darah).",
      tip: "Kategori A wajib dimasukkan ke dalam bekas kuning kalis bocor tanpa membuka jarum."
    },
    {
      step: "Langkah 2",
      title: "Pelupusan Selamat dan Rawatan Autoklaf",
      detail: "Bungkus sisa kultur mikroorganisma Kategori B dalam beg plastik biobahaya tahan haba. Autoklaf pada suhu 121°C dan tekanan 15 psi selama 20 minit untuk mematikan semua spora sebelum dilupuskan secara selamat.",
      tip: "Autoklaf menggunakan wap panas bertekanan tinggi bagi pensterilan mikrob 100%."
    },
    {
      step: "Langkah 3",
      title: "Prosedur Kecemasan Tumpahan Merkuri Termometer",
      detail: "Maklumkan guru/pembantu makmal serta-merta, jadikan kawasan larangan, dan taburkan serbuk sulfur di atas tumpahan merkuri untuk membentuk sebatian merkuri sulfida yang tidak meruap. Hubungi pihak BOMBA (HAZMAT) jika tumpahan berisiko.",
      tip: "Jangan sekali-kali menyentuh titisan merkuri dengan tangan kerana ia meruap menjadi gas bertoksik tinggi."
    }
  ],
  "bio-bab2": [
    {
      step: "Langkah 1",
      title: "Kemotaksis & Fagositosis Amoeba sp.",
      detail: "Amoeba sp. mengesan zarah makanan (seperti bakteria) melalui ransangan kimia dan menghulurkan unjuran pseudopodium (kaki palsu sitoplasma) untuk melingkungi dan mengepung makanan tersebut.",
      tip: "Pseudopodium dibentuk oleh pengaliran endoplasma dan ektoplasma."
    },
    {
      step: "Langkah 2",
      title: "Pencernaan Intrasel oleh Enzim Lisosom",
      detail: "Hujung pseudopodium bertemu dan bercantum membentuk kantung vakuol makanan. Organel lisosom mendekati vakuol makanan lalu bergabung dan membebaskan enzim lisozim (hidrolisis) bagi mencerna bakteria kepada molekul ringkas.",
      tip: "Nutrien tercerna meresap ke sitoplasma, sisa tidak tercerna dibuang secara eksositosis."
    },
    {
      step: "Langkah 3",
      title: "Pengosmoregulasian Vakuol Mengecut (Paramecium sp.)",
      detail: "Air tawar persekitaran yang hipotonik meresap masuk ke sel secara osmosis berterusan. Air berlebihan dikumpulkan ke dalam vakuol mengecut sehingga mengembang ke saiz maksimum, lalu mengecut memancutkan air keluar.",
      tip: "Pengosmoregulasian mengelakkan organisma unisel air tawar daripada meletus (lisis)."
    }
  ],
  "bio-bab3": [
    {
      step: "Langkah 1",
      title: "Penyediaan Eksperimen Sap Sel Tumbuhan",
      detail: "Sediakan siri kepekatan sukrosa: 0.0 M (air suling), 0.1 M, 0.2 M, 0.3 M, 0.4 M, 0.5 M dan 0.6 M. Potong silinder ubi kentang seragam sepanjang 5 cm menggunakan pengorek gabus, lap dengan kertas turas, dan timbang jisim awal (m₁).",
      tip: "Gunakan pengorek gabus berdiameter sama untuk memastikan luas permukaan kentang seragam."
    },
    {
      step: "Langkah 2",
      title: "Pengiraan Peratus Perubahan Jisim",
      detail: "Selepas direndam selama 30 minit dalam larutan masing-masing, lap cecair pada permukaan silinder kentang dan timbang jisim akhir (m₂). Hitung peratus perubahan jisim dengan rumus: [(m₂ - m₁) / m₁] × 100%.",
      tip: "Jisim bertambah = larutan hipotonik; jisim berkurang = larutan hipertonik (plasmolisis)."
    },
    {
      step: "Langkah 3",
      title: "Penentuan Titik Isotonik daripada Graf",
      detail: "Plotkan graf peratus perubahan jisim melawan kepekatan larutan sukrosa. Titik di mana garis graf memotong paksi kepekatan (peratus perubahan jisim = 0%) mewakili kepekatan sap sel sebenar silinder kentang.",
      tip: "Pada titik isotonik, kadar pergerakan air keluar dan masuk sel adalah sama (keseimbangan dinamik)."
    },
    {
      step: "Langkah 4",
      title: "Mekanisme Tindakan Pam Natrium-Kalium",
      detail: "Tiga ion Na⁺ mengikat pada tapak spesifik protein pembawa. Hidrolisis ATP memfosforilasikan protein, mengubah bentuknya lalu melepaskan 3 ion Na⁺ keluar sel. Seterusnya 2 ion K⁺ mengikat dan dipam masuk ke sitoplasma.",
      tip: "Pengangkutan aktif bergerak melawan kecerunan kepekatan dan wajib memerlukan tenaga ATP."
    }
  ],
  "bio-bab4": [
    {
      step: "Langkah 1",
      title: "Tindak Balas Kondensasi (Sintesis Karbohidrat & Lipid)",
      detail: "Dua molekul monosakarida bergabung dengan menyingkirkan satu molekul air (H₂O) untuk membentuk ikatan kovalen glikosidik. Contoh: Glukosa + Fruktosa → Sukrosa + H₂O.",
      tip: "Satu molekul air disingkirkan bagi setiap pembentukan satu ikatan baru."
    },
    {
      step: "Langkah 2",
      title: "Tindak Balas Hidrolisis (Penguraian Molekul Kompleks)",
      detail: "Molekul polimer diuraikan kepada monomer ringkas melalui penambahan satu molekul air dan bantuan enzim pencernaan spesifik. Contoh: Penguraian maltosa kepada dua glukosa oleh enzim maltase.",
      tip: "Hidrolisis memecahkan ikatan glikosidik, ikatan peptida, dan ikatan ester."
    },
    {
      step: "Langkah 3",
      title: "Pembentukan Ikatan Peptida dalam Protein",
      detail: "Kumpulan amino (-NH₂) satu asid amino bertindak balas dengan kumpulan karboksil (-COOH) asid amino lain menghasilkan ikatan peptida (-CO-NH-) dan membebaskan air, membentuk rantai polipeptida.",
      tip: "Protein memiliki struktur primer, sekunder (heliks-α/lembaran-β), tertier, dan kuaterner."
    }
  ],
  "bio-bab5": [
    {
      step: "Langkah 1",
      title: "Model Mangga dan Kunci (Kompleks Enzim-Substrat)",
      detail: "Molekul substrat mempunyai bentuk tiga dimensi yang sepadan tepat (komplementari) dengan tapak aktif molekul enzim. Substrat mengikat pada tapak aktif membentuk Kompleks Enzim-Substrat.",
      tip: "Enzim bertindak secara spesifik; satu enzim hanya memangkin satu jenis substrat sahaja."
    },
    {
      step: "Langkah 2",
      title: "Penurunan Tenaga Pengaktifan (Eₐ)",
      detail: "Pengikatan substrat pada tapak aktif menstabilkan keadaan peralihan dan merendahkan tenaga pengaktifan yang diperlukan untuk memulakan pemecahan atau pembentukan ikatan kimia.",
      tip: "Kadar tindak balas dipercepatkan sehingga jutaan kali tanpa meningkatkan suhu sel."
    },
    {
      step: "Langkah 3",
      title: "Pembebasan Hasil & Penggunaan Semula Enzim",
      detail: "Substrat ditukarkan kepada produk tindak balas baharu yang kemudiannya berpisah daripada tapak aktif enzim. Bentuk tapak aktif enzim kekal tidak berubah dan sedia memproses substrat seterusnya.",
      tip: "Enzim tidak musnah pada akhir tindak balas dan hanya diperlukan dalam kuantiti kecil."
    }
  ],
  "bio-bab6": [
    {
      step: "Langkah 1",
      title: "Profasa I Meiosis: Pindah Silang & Sinapsis",
      detail: "Kromosom homolog berpasangan membentuk bivalen melalui sinapsis. Kromatid bukan saudara bersilang pada kiasma dan bertukar segmen bahan genetik (pindah silang), menghasilkan kombinasi gen baharu.",
      tip: "Pindah silang merupakan punca utama variasi genetik dalam organisma membiak secara seks."
    },
    {
      step: "Langkah 2",
      title: "Metafasa I & Penyusunan Bebas Kromosom",
      detail: "Pasangan kromosom homolog tersusun secara rawak di satah khatulistiwa sel. Gentian gelendong dari kedua-dua kutub melekat pada sentromer setiap kromosom homolog.",
      tip: "Penyusunan bebas kromosom homolog menambah lagi variasi gamet yang terhasil."
    },
    {
      step: "Langkah 3",
      title: "Anafasa & Pengasingan Bahan Genetik",
      detail: "Gentian gelendong memendek menarik kromosom homolog ke kutub sel bertentangan (pada Meiosis I sentromer belum membelah; sentromer hanya membelah pada Anafasa Mitosis & Anafasa II).",
      tip: "Pengasingan tidak lengkap boleh menyebabkan peristiwa tak disjungsi (cth: Sindrom Down)."
    },
    {
      step: "Langkah 4",
      title: "Telofasa & Sitokinesis",
      detail: "Membran nukleus terbentuk semula mengelilingi kromosom di setiap kutub. Sitoplasma membahagi menghasilkan 2 sel anak diploid (Mitosis) atau 4 sel anak haploid (Meiosis).",
      tip: "Sitokinesis sel haiwan membentuk alur pembahagian; sel tumbuhan membentuk plat sel."
    }
  ],
  "bio-bab7": [
    {
      step: "Langkah 1",
      title: "Glikolisis dalam Sitoplasma (Tanpa Oksigen)",
      detail: "Satu molekul glukosa 6-karbon diuraikan kepada dua molekul asid piruvat 3-karbon melalui siri tindak balas enzim di sitoplasma, menghasilkan keuntungan bersih 2 molekul ATP dan 2 NADH.",
      tip: "Glikolisis berlaku dalam kedua-dua respirasi aerob dan fermentasi."
    },
    {
      step: "Langkah 2",
      title: "Pengoksidaan Piruvat & Kitar Krebs (Mitokondrion)",
      detail: "Sekiranya terdapat bekalan O₂, piruvat diangkut ke matriks mitokondrion dan ditukarkan kepada Asetil-KoA, membebaskan CO₂ dan memasuki Kitar Krebs untuk menghasilkan pembawa elektron NADH dan FADH₂.",
      tip: "Mitokondrion digelar pusat jana kuasa sel kerana sintesis ATP terbesar berlaku di sini."
    },
    {
      step: "Langkah 3",
      title: "Fosforilasi Oksidatif & Rantaian Pengangkutan Elektron",
      detail: "Elektron bertenaga tinggi dialirkan merentasi protein membran dalam mitokondrion memacu sintesis kira-kira 34-36 ATP. Oksigen bertindak sebagai penerima elektron dan proton terakhir menghasilkan molekul air (H₂O).",
      tip: "Persamaan penuh respirasi aerob: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 2898 kJ (38 ATP)."
    },
    {
      step: "Langkah 4",
      title: "Pembayaran Hutang Oksigen Selepas Senaman Cergas",
      detail: "Semasa lari pecut, otot menghasilkan asid laktik melalui fermentasi. Selepas berlari, pernafasan laju dan dalam membekalkan oksigen tambahan untuk mengoksidakan asid laktik di hepar menjadi CO₂ dan air atau glukosa.",
      tip: "Hutang oksigen lunas apabila kepekatan asid laktik darah kembali normal."
    }
  ],
  "bio-bab8": [
    {
      step: "Langkah 1",
      title: "Mekanisme Tarikan Nafas (Inspirasi Manusia)",
      detail: "Otot interkosta luar mengecut (otot dalam mengendur), sangkar rusuk dinaikkan ke atas dan ke luar. Otot diafragma mengecut dan mendatar. Isi padu toraks bertambah, tekanan berkurang, udara atmosfera ditekan masuk.",
      tip: "Udara bergerak dari kawasan bertekanan tinggi (atmosfera) ke kawasan bertekanan rendah (peparu)."
    },
    {
      step: "Langkah 2",
      title: "Mekanisme Hembusan Nafas (Ekspirasi Manusia)",
      detail: "Otot interkosta luar mengendur, sangkar rusuk menurun ke bawah dan ke dalam. Diafragma mengendur melengkung ke atas (kubah). Isi padu rongga toraks mengecil, tekanan meningkat memaksa udara keluar alveolus.",
      tip: "Ekspirasi normal ialah proses pasif manakala ekspirasi cergas ialah proses aktif."
    },
    {
      step: "Langkah 3",
      title: "Sistem Pertukaran Arus Bertentangan dalam Insang Ikan",
      detail: "Air beroksigen mengalir merentasi lamela insang dalam arah bertentangan dengan aliran darah di dalam kapilari insang. Kecerunan kepekatan O₂ kekal di sepanjang lamela membolehkan 80-85% oksigen diserap.",
      tip: "Aliran bertentangan jauh lebih cekap berbanding aliran searah."
    },
    {
      step: "Langkah 4",
      title: "Pengangkutan Karbon Dioksida dalam Darah",
      detail: "70% CO₂ diangkut dalam bentuk ion bikarbonat (HCO₃⁻) di dalam plasma darah (dibantu enzim karbonik anhidrase dalam eritrosit), 23% terikat pada hemoglobin sebagai karbaminohemoglobin, dan 7% larut dalam plasma.",
      tip: "Di kapilari alveolus, ion bikarbonat ditukarkan semula kepada gas CO₂ untuk dihembus keluar."
    }
  ],
  "bio-bab9": [
    {
      step: "Langkah 1",
      title: "Pencernaan Enzimatik di Salur Alimentari",
      detail: "Amilase air liur mencerna kanji ke maltosa di mulut. Pepsin mencerna protein ke polipeptida dalam keadaan asid HCl di perut. Di duodenum, tripsin, amilase pankreas dan lipase melengkapkan pencernaan kimia.",
      tip: "Garam hempedu dari pundi hempedu mengemulsikan lipid kepada titisan halus (pencernaan fizikal)."
    },
    {
      step: "Langkah 2",
      title: "Penyerapan Nutrien di Vilus & Lakteal Ileum",
      detail: "Glukosa, galaktosa, asid amino, dan vitamin larut air diserap ke dalam kapilari darah vilus. Asid lemak, gliserol, dan vitamin larut lemak (A, D, E, K) bergabung membentuk titisan kilomikron lalu masuk ke lakteal.",
      tip: "Lapisan epitelium vilus setebal satu sel dan mempunyai mikrovilus untuk memaksimumkan luas permukaan."
    },
    {
      step: "Langkah 3",
      title: "Laluan Vena Porta Hepar ke Hati",
      detail: "Kapilari darah dari semua vilus bergabung menjadi satu salur darah utama iaitu vena porta hepar yang menghantar nutrien tercerna terus ke hepar untuk asimilasi, penyimpanan glikogen dan penyahtoksin racun.",
      tip: "Lakteal mengalirkan lipid ke sistem limfa sebelum bergabung ke vena subklavia kiri."
    },
    {
      step: "Langkah 4",
      title: "Asimilasi Selular & Pembentukan Tinja",
      detail: "Glukosa digunakan oleh sel untuk respirasi membina ATP; asid amino membina protein protoplasma dan enzim sel. Air dan mineral diserap semula di kolon; sisa tidak hadam dipadatkan menjadi tinja untuk nyahtinja.",
      tip: "Kekurangan serat dalam diet melambatkan peristalsis usus menyebabkan sembelit."
    }
  ],
  "bio-bab10": [
    {
      step: "Langkah 1",
      title: "Kitar Pengecutan Jantung (Sistol & Diastol)",
      detail: "Nodus sinoatrium (perentak jantung) menjana impuls elektrik menyebabkan kedua-dua atrium mengecut (sistol atrium). Impuls dialirkan ke nodus atrioventrikel, berkas His dan gentian Purkinje menyebabkan ventrikel mengecut (sistol ventrikel).",
      tip: "Injap trikuspid & bikuspid tertutup menghasilkan bunyi 'LUB'; injap sabit tertutup menghasilkan 'DUB'."
    },
    {
      step: "Langkah 2",
      title: "Mekanisme Pembekuan Darah (Lata Biokimia)",
      detail: "Salur darah tercedera menyebabkan platlet pecah membebaskan enzim trombokinase. Trombokinase bersama ion kalsium (Ca²⁺) dan Vitamin K menukar protrombin tidak aktif kepada trombin aktif. Trombin menukar fibrinogen larut kepada bebenang fibrin tak larut.",
      tip: "Jalinan fibrin memerangkap sel darah merah menutup luka dan menghalang pendarahan maut."
    },
    {
      step: "Langkah 3",
      title: "Pembentukan Bendalir Tisu (Interstis)",
      detail: "Tekanan hidrostatik tinggi di hujung arteriol kapilari menolak sebahagian plasma keluar ke ruang antara sel. Sel darah merah, platlet dan protein plasma besar tidak dapat menembusi dinding kapilari dan kekal di dalam.",
      tip: "Bendalir tisu membasahi sel untuk membolehkan pertukaran gas dan nutrien berlaku."
    },
    {
      step: "Langkah 4",
      title: "Pengaliran Limfa ke Sistem Peredaran Darah",
      detail: "Kira-kira 85% bendalir tisu diserap semula ke kapilari darah venul; baki 15% meresap ke kapilari limfa menjadi bendalir limfa. Limfa dialirkan melalui nodus limfa dan kembali ke sistem darah melalui vena subklavia kiri dan kanan.",
      tip: "Penyumbatan salur limfa oleh cacing filaria menyebabkan penyakit untut (filariasis / edema)."
    }
  ],
  "bio-bab11": [
    {
      step: "Langkah 1",
      title: "Pertahanan Barisan Pertama & Kedua (Tidak Spesifik)",
      detail: "Kulit dan membran mukus bertindak sebagai halangan fizikal dan kimia menghalang kemasukan patogen. Jika patogen berjaya menembusi luka, neutrofil dan makrofaj menjalankan fagositosis untuk menelan patogen.",
      tip: "Tindak balas keradangan (inflamasi) meningkatkan aliran darah dan fagosit ke kawasan jangkitan."
    },
    {
      step: "Langkah 2",
      title: "Gerak Balas Spesifik Limfosit T & B",
      detail: "Makrofaj mempamerkan antigen mikrob mengaktifkan Limfosit T Pembantu. Sel T merangsang Limfosit B membahagi kepada sel plasma (yang merembeskan antibodi spesifik) dan sel B memori.",
      tip: "Antibodi mempunyai tapak pengikatan komplementari yang sepadan khusus dengan antigen tertentu sahaja."
    },
    {
      step: "Langkah 3",
      title: "Mekanisme Pemusnahan Antigen oleh Antibodi",
      detail: "Antibodi memusnahkan antigen melalui 5 kaedah utama: Pengaglutinan (menggumpalkan mikrob), Neutralisasi (meneutralkan toksin), Pengendapan (memendapkan antigen larut), Opsonisasi (menandakan mikrob untuk fagosit), dan Penguraian (lisis dinding bakteria).",
      tip: "Singkatan mudah ingatan kaedah antibodi: A-N-P-O-L."
    },
    {
      step: "Langkah 4",
      title: "Keimunan Aktif vs Keimunan Pasif",
      detail: "Keimunan aktif buatan diperoleh melalui suntikan vaksin (antigen mati/dilemahkan) yang merangsang sel memori menghasilkan perlindungan berkekalan. Keimunan pasif buatan menggunakan antiserum sedia ada untuk rawatan kecemasan segera tanpa sel memori.",
      tip: "Dos penggalak (booster) melonjakkan aras antibodi jauh melepasi aras keimunan."
    }
  ],
  "bio-bab12": [
    {
      step: "Langkah 1",
      title: "Pencetusan Impuls Saraf & Potensi Tindakan",
      detail: "Rangsangan deria mengganggu keupayaan rehat membran neuron (-70 mV). Saluran ion Na⁺ terbuka membenarkan ion Na⁺ meluru masuk ke dalam akson menyebabkan bahagian dalam akson menjadi positif (+30 mV, penyahkutuban).",
      tip: "Salut mielin membolehkan impuls melompat pantas antara nodus Ranvier secara konduksi saltatori."
    },
    {
      step: "Langkah 2",
      title: "Transmisi Impuls Merentasi Celah Sinaps",
      detail: "Impuls tiba di tombol sinaps menyebabkan vesikel sinaps bercantum dengan membran prasinaps dan merembeskan neurotransmiter (cth: asetilkolina) ke celah sinaps melalui eksositosis. Bahan ini meresap mengikat reseptor neuron pascasinaps.",
      tip: "Mitokondrion banyak di tombol sinaps untuk membekalkan ATP sintesis neurotransmiter."
    },
    {
      step: "Langkah 3",
      title: "Laluan Arka Refleks Tiga Neuron",
      detail: "Reseptor sakit mengesan rangsangan panas → Impuls dihantar sepanjang Neuron Deria → Masuk saraf tunjang melalui akar dorsal → Merentasi celah sinaps ke Neuron Perantaraan → Merentasi sinaps kedua ke Neuron Motor melalui akar ventral → Efektor otot mengecut serta-merta.",
      tip: "Refleks saraf tunjang bertindak secara automatik dan pantas tanpa menunggu arahan sedar otak."
    },
    {
      step: "Langkah 4",
      title: "Koordinasi Endokrin & Kawalan Hormon",
      detail: "Hipotalamus merangsang kelenjar pituitari (kelenjar induk) merembeskan hormon tropik (seperti TSH, ACTH, ADH, FSH) ke dalam aliran darah untuk merangsang kelenjar sasaran menghasilkan hormon fisiologi.",
      tip: "Gerak balas hormon lebih lambat daripada gerak balas saraf tetapi kesannya bertahan lebih lama."
    }
  ],
  "bio-bab13": [
    {
      step: "Langkah 1",
      title: "Ultraturasan di Kapsul Bowman Ginjal",
      detail: "Diameter arteriol eferen yang lebih kecil berbanding arteriol aferen mewujudkan tekanan hidrostatik darah yang tinggi dalam glomerulus. Plasma darah dituras merentasi dinding glomerulus ke kapsul Bowman membentuk hasil turasan glomerulus.",
      tip: "Sel darah merah, platlet dan protein plasma besar tidak terturas keluar."
    },
    {
      step: "Langkah 2",
      title: "Penyerapan Semula Pilihan di Nefron",
      detail: "100% glukosa dan asid amino diserap semula secara pengangkutan aktif di tubul berliku proksimal. Ion natrium dan klorida diserap di liku Henle. Air diserap secara osmosis di tubul pengumpul di bawah kawalan hormon ADH.",
      tip: "Kehadiran glukosa dalam air kencing menandakan penyakit Diabetes Melitus (kencing manis)."
    },
    {
      step: "Langkah 3",
      title: "Rembesan Bahan Kumuh & Pengosmoregulasian",
      detail: "Urea, asid urik, ion hidrogen (H⁺), ammonia dan dadah dirembeskan secara aktif dari kapilari peritubul ke dalam lumen tubul berliku distal untuk mengawal atur keseimbangan pH darah dan kepekatan ion.",
      tip: "Air kencing yang terhasil mengalir ke pelvis ginjal, ureter, pundi kencing dan uretra."
    },
    {
      step: "Langkah 4",
      title: "Mekanisme Suap Balik Negatif Tekanan Osmotik Darah",
      detail: "Kekurangan air mengaktifkan osmoreseptor hipotalamus merangsang pituitari posterior merembeskan lebih ADH. Tubul pengumpul menjadi lebih telap kepada air, lebih banyak air diserap semula, menghasilkan air kencing sedikit dan pekat.",
      tip: "Sebaliknya jika terlebih minum air, rembesan ADH direncat menghasilkan air kencing cair dan banyak."
    }
  ],
  "bio-bab14": [
    {
      step: "Langkah 1",
      title: "Anatomi Tulang & Struktur Sendi Bergerak",
      detail: "Sendi engsel siku menghubungkan tulang humerus pada lengan atas dengan tulang radius dan ulna pada lengan bawah. Ligamen menyambungkan tulang kepada tulang, tendon menyambungkan otot kepada tulang, dan rawan mengurangkan geseran.",
      tip: "Cecair sinovia melincirkan sendi dan membekalkan nutrien kepada sel rawan."
    },
    {
      step: "Langkah 2",
      title: "Tindakan Berpasangan Antagonistik Membengkokkan Lengan",
      detail: "Otot biseps mengecut manakala otot triseps mengendur secara serentak. Daya tarikan otot biseps dipindahkan melalui tendon ke tulang radius, menarik lengan bawah ke atas membengkokkan sendi siku (fleksi).",
      tip: "Otot rangka hanya mampu menarik apabila mengecut, ia tidak boleh menolak."
    },
    {
      step: "Langkah 3",
      title: "Tindakan Meluruskan Lengan (Ekstensi)",
      detail: "Otot triseps mengecut manakala otot biseps mengendur. Daya tarikan tendon triseps menarik tulang ulna ke bawah, meluruskan lengan kembali kepada kedudukan asal.",
      tip: "Kedua-dua otot bertindak secara berlawanan untuk menghasilkan satu pergerakan lengkap."
    },
    {
      step: "Langkah 4",
      title: "Mekanisme Pergerakan Ikan & Burung",
      detail: "Ikan bergerak dengan pengecutan berselang-seli pasangan blok otot miotom di kiri dan kanan kolum vertebra. Burung terbang dengan tindakan antagonistik otot pektoralis major (tarik sayap ke bawah) dan pektoralis minor (angkat sayap).",
      tip: "Bentuk badan larus pada ikan dan burung mengurangkan rintangan bendalir/udara."
    }
  ],
  "bio-bab15": [
    {
      step: "Langkah 1",
      title: "Spermatogenesis & Oogenesis",
      detail: "Spermatogenesis di tubul seminiferus testis menghasilkan 4 sel sperma haploid (n) aktif daripada satu spermatogonium (2n). Oogenesis di ovari menghasilkan 1 oosit sekunder (n) bernutrien tinggi dan 3 jasad kutub yang merosot.",
      tip: "Oogenesis bermula sejak dalam kandungan ibu dan hanya tamat sepenuhnya selepas persenyawaan."
    },
    {
      step: "Langkah 2",
      title: "Kitar Haid & Interaksi Hormon Wanita",
      detail: "Hari 1-5: Haid. Hari 6-13: FSH merangsang folikel menghasilkan estrogen untuk menebalkan endometrium. Hari 14: Lonjakan hormon LH mencetuskan ovulasi. Hari 15-24: Korpus luteum merembeskan progesteron untuk mematangkan dinding uterus.",
      tip: "Jika tiada persenyawaan, korpus luteum merosot, progesteron jatuh menjunam memulakan haid semula."
    },
    {
      step: "Langkah 3",
      title: "Persenyawaan & Penempelan Blastosista",
      detail: "Persenyawaan berlaku apabila kepala sperma menembusi membran oosit sekunder di ampula tiub Falopio membentuk zigot diploid (2n). Zigot membahagi secara mitosis membentuk morula dan blastosista yang menempel di endometrium berdarah kaya nutrien.",
      tip: "Blastosista merembeskan hormon hCG untuk mengekalkan fungsi korpus luteum merembes progesteron."
    },
    {
      step: "Langkah 4",
      title: "Peranan Plasenta & Tali Pusat Fetus",
      detail: "Plasenta menghubungkan fetus dengan dinding uterus ibu tanpa percampuran darah secara langsung. Ia membekalkan gas O₂, glukosa, asid amino dan antibodi ibu serta menyerap bahan kumuh urea dan CO₂ fetus.",
      tip: "Darah ibu dan janin dipisahkan untuk melindungi kapilari fetus daripada tekanan darah tinggi ibu."
    }
  ]
};

const badgeOptions = ["Konsep Utama", "Istilah SPM", "Fakta Kunci", "Mekanisme", "Aplikasi Silibus"];

// Update all 15 chapters
data.forEach((bab, idx) => {
  // 1. Set steps
  if (biologySteps[bab.id]) {
    bab.steps = biologySteps[bab.id];
  }

  // 2. Normalize keypoints
  if (bab.keypoints) {
    bab.keypoints.forEach((kp, kpIdx) => {
      if (!kp.badge) {
        kp.badge = badgeOptions[kpIdx % badgeOptions.length];
      }
    });
  }

  // 3. Normalize struktur skema to array
  if (bab.struktur) {
    bab.struktur.forEach((s) => {
      if (typeof s.skema === 'string') {
        s.skema = s.skema
          .split('\n')
          .map((l) => l.trim())
          .filter(Boolean);
      }
    });
  }

  // 4. Ensure notes have verbatim & explanation
  if (bab.notes) {
    bab.notes.forEach((n) => {
      if (!n.verbatim && n.points) n.verbatim = n.points;
      if (!n.explanation && n.summary) n.explanation = n.summary;
    });
  }
});

const header = `/* ==========================================================================
   DATA-BIOLOGI.JS — 100% BAHAN BUKU TEKS BIOLOGI TINGKATAN 4 KSSM
   Sumber: https://online.anyflip.com/gzctj/nnvp/mobile/index.html
   Tema 1: Asas Biologi (Bab 1 - 7)
   Tema 2: Fisiologi Manusia dan Haiwan (Bab 8 - 15)
   ========================================================================== */

const BIOLOGI_DATA = `;

const updatedFileContent = header + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('c:/antigravity3/data-biologi.js', updatedFileContent, 'utf8');
console.log('Successfully updated and normalized data-biologi.js!');
