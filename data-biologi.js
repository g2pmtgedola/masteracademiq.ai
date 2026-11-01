/* ==========================================================================
   DATA-BIOLOGI.JS — 100% BAHAN BUKU TEKS BIOLOGI TINGKATAN 4 KSSM
   Sumber: https://online.anyflip.com/gzctj/nnvp/mobile/index.html
   Tema 1: Asas Biologi (Bab 1 - 7)
   Tema 2: Fisiologi Manusia dan Haiwan (Bab 8 - 15)
   ========================================================================== */

const BIOLOGI_DATA = [
  {
    "id": "bio-bab1",
    "babNum": "BAB 1",
    "title": "PENGENALAN KEPADA BIOLOGI DAN PERATURAN MAKMAL",
    "icon": "🔬",
    "anyflipPages": "Halaman 2 – 20 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Biologi merupakan kajian terperinci tentang organisma hidup, interaksi antara hidupan dengan persekitaran, serta sumbangannya dalam pelbagai bidang moden seperti bioteknologi, perubatan dan pertanian. Bab ini memupuk amalan keselamatan makmal yang ketat, pengurusan sisa biologi mengikut kategori SOP, kaedah komunikasi data saintifik, serta langkah-langkah penyiasatan saintifik berlandaskan disiplin sains.",
    "notes": [
      {
        "subtopic": "1.1 Bidang Biologi dan Kerjaya",
        "summary": "Biologi berasal daripada perkataan Yunani 'bios' (kehidupan) dan 'logos' (kajian). Merangkumi bidang zoologi, botani, mikrobiologi, fisiologi, genetik, dan ekologi.",
        "points": [
          "Biologi menghubungkan sains tulen dengan aplikasi harian: bioteknologi perubatan (cth: terapi gen dan penghasilan insulin rekombinan), bioteknologi pertanian (cth: tanaman rintang perosak), dan nanoteknologi biologi.",
          "Kerjaya berkaitan biologi merangkumi doktor perubatan, ahli mikrobiologi, saintis bioperubatan, ahli genetik, pegawai pertanian, dan penyelidik marin."
        ],
        "verbatim": [
          "Biologi menghubungkan sains tulen dengan aplikasi harian: bioteknologi perubatan (cth: terapi gen dan penghasilan insulin rekombinan), bioteknologi pertanian (cth: tanaman rintang perosak), dan nanoteknologi biologi.",
          "Kerjaya berkaitan biologi merangkumi doktor perubatan, ahli mikrobiologi, saintis bioperubatan, ahli genetik, pegawai pertanian, dan penyelidik marin."
        ],
        "explanation": "Biologi berasal daripada perkataan Yunani 'bios' (kehidupan) dan 'logos' (kajian). Merangkumi bidang zoologi, botani, mikrobiologi, fisiologi, genetik, dan ekologi."
      },
      {
        "subtopic": "1.2 Keselamatan dan Peraturan dalam Makmal Biologi",
        "summary": "Peralatan perlindungan diri (PPE) dan pengurusan sisa biologi secara sistematik mengikut Kategori A, B, C, dan D.",
        "points": [
          "Peralatan Perlindungan Diri (PPE): Kot makmal, sarung tangan nitril/lateks, cermin mata keselamatan (gogal), topeng muka, dan kasut bertutup penuh.",
          "Stesen Keselamatan Makmal: Kebuk wasap (mengendalikan bahan meruap/beracun), kabinet aliran lamina (mengelakkan kontaminasi kultur mikroorganisma), pancuran kecemasan, dan pencuci mata.",
          "Kategori Pengurusan Bahan Sisa Biologi:\n  • Kategori A (Sisa tajam: picagari, jarum, bilah skalpel) -> Dimasukkan ke dalam bekas sisa tajam khas tahan bocor, tidak diautoklaf.\n  • Kategori B (Sisa tidak tajam: sarung tangan, piring petri, kertas turas terpakai) -> Dibungkus dalam beg plastik biobahaya, diautoklaf pada suhu 121°C tekanan 15 psi selama 20 minit, dimasukkan ke dalam tong biobahaya.\n  • Kategori C (Bangkai haiwan uji kaji, organ, tisu) -> Dibungkus rapi dalam beg biobahaya, disejukbekukan sebelum dilupuskan oleh perkhidmatan berlesen.\n  • Kategori D (Bendalir biologi: darah, serum, kultur cecair) -> Dinyahkontaminasi secara autoklaf atau peluntur 10% sebelum dialirkan ke sistem pembetungan.",
          "Pelan Tindakan Kemalangan: Tumpahan merkuri (tabur serbuk sulfur untuk mengikat wap toksik, laporkan kepada bomba), tumpahan asid/alkali pekat (hadang kawasan, neutralkan dengan serbuk penaik untuk asid atau asid borik untuk alkali, bilas air)."
        ],
        "verbatim": [
          "Peralatan Perlindungan Diri (PPE): Kot makmal, sarung tangan nitril/lateks, cermin mata keselamatan (gogal), topeng muka, dan kasut bertutup penuh.",
          "Stesen Keselamatan Makmal: Kebuk wasap (mengendalikan bahan meruap/beracun), kabinet aliran lamina (mengelakkan kontaminasi kultur mikroorganisma), pancuran kecemasan, dan pencuci mata.",
          "Kategori Pengurusan Bahan Sisa Biologi:\n  • Kategori A (Sisa tajam: picagari, jarum, bilah skalpel) -> Dimasukkan ke dalam bekas sisa tajam khas tahan bocor, tidak diautoklaf.\n  • Kategori B (Sisa tidak tajam: sarung tangan, piring petri, kertas turas terpakai) -> Dibungkus dalam beg plastik biobahaya, diautoklaf pada suhu 121°C tekanan 15 psi selama 20 minit, dimasukkan ke dalam tong biobahaya.\n  • Kategori C (Bangkai haiwan uji kaji, organ, tisu) -> Dibungkus rapi dalam beg biobahaya, disejukbekukan sebelum dilupuskan oleh perkhidmatan berlesen.\n  • Kategori D (Bendalir biologi: darah, serum, kultur cecair) -> Dinyahkontaminasi secara autoklaf atau peluntur 10% sebelum dialirkan ke sistem pembetungan.",
          "Pelan Tindakan Kemalangan: Tumpahan merkuri (tabur serbuk sulfur untuk mengikat wap toksik, laporkan kepada bomba), tumpahan asid/alkali pekat (hadang kawasan, neutralkan dengan serbuk penaik untuk asid atau asid borik untuk alkali, bilas air)."
        ],
        "explanation": "Peralatan perlindungan diri (PPE) dan pengurusan sisa biologi secara sistematik mengikut Kategori A, B, C, dan D."
      },
      {
        "subtopic": "1.3 Berkomunikasi dalam Biologi & 1.4 Penyiasatan Saintifik",
        "summary": "Prinsip melukis rajah biologi, membina graf garis lurus/histogram, dan 11 langkah penyiasatan saintifik.",
        "points": [
          "Ciri-ciri Lukisan Biologi: Garisan tidak putus-putus (solid lines), tidak berbayang (no shading), skala/pembesaran dinyatakan, label mendatar dengan garis penunjuk lurus tanpa bersilang.",
          "11 Langkah Penyiasatan Saintifik: 1. Mengenal pasti masalah -> 2. Membina hipotesis -> 3. Mengenal pasti pemboleh ubah (manipulasi, bergerak balas, dimalarkan) -> 4. Merancang eksperimen -> 5. Menjalankan eksperimen -> 6. Mengumpul data -> 7. Menganalisis data -> 8. Mentafsir data -> 9. Membuat kesimpulan -> 10. Menulis laporan."
        ],
        "verbatim": [
          "Ciri-ciri Lukisan Biologi: Garisan tidak putus-putus (solid lines), tidak berbayang (no shading), skala/pembesaran dinyatakan, label mendatar dengan garis penunjuk lurus tanpa bersilang.",
          "11 Langkah Penyiasatan Saintifik: 1. Mengenal pasti masalah -> 2. Membina hipotesis -> 3. Mengenal pasti pemboleh ubah (manipulasi, bergerak balas, dimalarkan) -> 4. Merancang eksperimen -> 5. Menjalankan eksperimen -> 6. Mengumpul data -> 7. Menganalisis data -> 8. Mentafsir data -> 9. Membuat kesimpulan -> 10. Menulis laporan."
        ],
        "explanation": "Prinsip melukis rajah biologi, membina graf garis lurus/histogram, dan 11 langkah penyiasatan saintifik."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Klasifikasi Sisa Biologi Mengikut Kategori SOP",
        "detail": "Asingkan bahan sisa makmal kepada 4 kategori rasmi: Kategori A (Sisa Tajam: picagari, jarum, skalpel), Kategori B (Sisa Tidak Tajam: piring petri, sarung tangan kultur), Kategori C (Bangkai Haiwan makmal), dan Kategori D (Cecair Kultur/Darah).",
        "tip": "Kategori A wajib dimasukkan ke dalam bekas kuning kalis bocor tanpa membuka jarum."
      },
      {
        "step": "Langkah 2",
        "title": "Pelupusan Selamat dan Rawatan Autoklaf",
        "detail": "Bungkus sisa kultur mikroorganisma Kategori B dalam beg plastik biobahaya tahan haba. Autoklaf pada suhu 121°C dan tekanan 15 psi selama 20 minit untuk mematikan semua spora sebelum dilupuskan secara selamat.",
        "tip": "Autoklaf menggunakan wap panas bertekanan tinggi bagi pensterilan mikrob 100%."
      },
      {
        "step": "Langkah 3",
        "title": "Prosedur Kecemasan Tumpahan Merkuri Termometer",
        "detail": "Maklumkan guru/pembantu makmal serta-merta, jadikan kawasan larangan, dan taburkan serbuk sulfur di atas tumpahan merkuri untuk membentuk sebatian merkuri sulfida yang tidak meruap. Hubungi pihak BOMBA (HAZMAT) jika tumpahan berisiko.",
        "tip": "Jangan sekali-kali menyentuh titisan merkuri dengan tangan kerana ia meruap menjadi gas bertoksik tinggi."
      }
    ],
    "keypoints": [
      {
        "term": "Autoklaf",
        "meaning": "Alat pensterilan bertekanan tinggi yang memanaskan wap sehingga 121°C pada 15 psi untuk mematikan semua mikroorganisma dan spora.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Sisa Kategori A",
        "meaning": "Bahan sisa biologi tajam seperti picagari, jarum suntikan, bilah skalpel yang wajib dimasukkan ke dalam bekas sisa tajam khas.",
        "badge": "Istilah SPM"
      },
      {
        "term": "Kebuk Wasap (Fume Hood)",
        "meaning": "Alat pengudaraan khas untuk mengendalikan bahan kimia meruap, beracun, mudah terbakar atau menghakis.",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Kabinet Aliran Lamina",
        "meaning": "Alat makmal yang membekalkan udara terturas bebas habuk dan mikrob untuk mengelakkan kontaminasi semasa inokulasi kultur sel.",
        "badge": "Mekanisme"
      },
      {
        "term": "Hipotesis Saintifik",
        "meaning": "Pernyataan tentatif yang menghubungkaitkan pemboleh ubah dimanipulasi dengan pemboleh ubah bergerak balas yang boleh diuji kebenarannya.",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Manakah antara berikut merupakan kaedah yang betul untuk melupuskan bangkai tikus yang telah dibedah dalam makmal biologi?",
        "options": [
          "Dibuang ke dalam sinki dengan air mengalir",
          "Dibungkus rapi dalam beg biobahaya, disejukbekukan dan dilupuskan oleh pihak berkuasa",
          "Dibakar di tapak pelupusan sampah terbuka",
          "Ditanam terus di padang sekolah"
        ],
        "answer": 1,
        "explanation": "Bangkai haiwan uji kaji tergolong dalam Bahan Sisa Kategori C yang mesti dibungkus dalam beg biobahaya, disejukbekukan dan dilupuskan mengikut SOP pelupusan sisa biobahaya berlesen."
      },
      {
        "q": "Apakah fungsi utama menaburkan serbuk sulfur ke atas tumpahan merkuri daripada termometer yang pecah?",
        "options": [
          "Mempercepatkan penyejatan merkuri ke udara",
          "Mengikat merkuri membentuk merkuri sulfida yang tidak meruap",
          "Meneutralkan asid merkuri yang menghakis",
          "Mengubah merkuri menjadi cecair tidak berwarna"
        ],
        "answer": 1,
        "explanation": "Serbuk sulfur bertindak balas dengan merkuri membentuk merkuri(II) sulfida, menghalang pembebasan wap merkuri toksik ke atmosfera makmal."
      },
      {
        "q": "Antara ciri lukisan biologi berikut, yang manakah mematuhi piawaian disiplin saintifik KSSM?",
        "options": [
          "Menggunakan lorekan tebal untuk menunjukkan bayang",
          "Garis penunjuk label mestilah bersilang-silang",
          "Garisan struktur yang jelas, bersambung dan tidak berbayang",
          "Label ditulis condong mengikut sudut objek"
        ],
        "answer": 2,
        "explanation": "Lukisan biologi mestilah menggunakan garisan tajam, bersambung (tidak berbulu), tidak mempunyai bayang/lorekan, dan garis penunjuk mestilah lurus serta tidak bersilang."
      },
      {
        "q": "Apakah parameter piawai pensterilan menggunakan autoklaf untuk menyahkontaminasi sisa Kategori B?",
        "options": [
          "100°C selama 5 minit pada tekanan atmosfera",
          "121°C pada tekanan 15 psi selama 20 minit",
          "80°C selama 1 jam pada tekanan vakum",
          "200°C selama 10 minit tanpa tekanan"
        ],
        "answer": 1,
        "explanation": "Pensterilan autoklaf piawai memerlukan suhu 121°C pada tekanan 15 psi (103 kPa) selama 20 minit bagi memastikan endospora bakteria termusnah sepenuhnya."
      },
      {
        "q": "Seorang murid ingin mengkaji kesan kepekatan larutan sukrosa terhadap peratus perubahan jisim silinder ubi kentang. Apakah pemboleh ubah dimanipulasi?",
        "options": [
          "Jisim asal silinder ubi kentang",
          "Kepekatan larutan sukrosa",
          "Peratus perubahan jisim silinder ubi kentang",
          "Suhu persekitaran bilik"
        ],
        "answer": 1,
        "explanation": "Pemboleh ubah dimanipulasi ialah faktor yang sengaja diubah oleh penyiasat, iaitu kepekatan larutan sukrosa yang berbeza-beza."
      }
    ],
    "struktur": [
      {
        "q": "Rajah menunjukkan tumpahan cecair kultur bakteria di atas meja makmal. Huraikan 4 langkah Prosedur Operasi Standard (SOP) yang wajib dilaksanakan oleh murid untuk membersihkan tumpahan tersebut dengan selamat.",
        "skema": [
          "1. Maklumkan kepada guru atau pembantu makmal dengan serta-merta [1m].",
          "2. Jadikan kawasan tumpahan sebagai kawasan larangan bagi mengelakkan sentuhan atau penyebaran mikrob [1m].",
          "3. Tuangkan larutan disinfektan (seperti natrium hipoklorit 10%) mengelilingi dan ke atas kawasan tumpahan serta biarkan selama sekurang-kurangnya 10–15 minit untuk menyahaktifkan bakteria [1m].",
          "4. Tutup dan lap tumpahan menggunakan kertas turas/kertas penyerap, kemudian buang kertas tersebut ke dalam beg sisa biobahaya Kategori B untuk diautoklaf [1m]."
        ]
      }
    ]
  },
  {
    "id": "bio-bab2",
    "babNum": "BAB 2",
    "title": "BIOLOGI SEL DAN ORGANISASI SEL",
    "icon": "🧫",
    "anyflipPages": "Halaman 22 – 42 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Sel merupakan unit asas kehidupan bagi semua hidupan. Bab ini membincangkan struktur ultra sel haiwan dan sel tumbuhan, fungsi setiap organel bermembran dan tidak bermembran, proses hidup organisma unisel (Amoeba sp. dan Paramecium sp.), pengkhususan sel dalam organisma multisel, serta pembentukan aras organisasi daripada sel kepada sistem dan organisma lengkap.",
    "notes": [
      {
        "subtopic": "2.1 Struktur dan Fungsi Sel & Organel",
        "summary": "Organel sel haiwan dan tumbuhan serta peranan biokimia masing-masing.",
        "points": [
          "Nukleus: Organel terbesar dilingkungi membran nukleus berlapis dua, mengandungi nukleoplasma, nukleolus (sintesis ribosom) dan kromatin (membawa DNA pengendali aktiviti sel).",
          "Mitokondrion: Organel berbentuk rod dengan membran luar licin dan membran dalam berlipat-lipat (krista). Merupakan 'kilang tenaga sel' tempat berlakunya respirasi sel untuk menghasilkan ATP.",
          "Kloroplas: Khusus dalam sel tumbuhan, mengandungi klorofil dalam tilakoid (grana) dan stroma untuk menyerap cahaya matahari bagi fotosintesis.",
          "Jalinan Endoplasma Kasar (JEK): Mempunyai ribosom melekat pada permukaannya; mengangkut protein yang disintesis oleh ribosom.",
          "Jalinan Endoplasma Licin (JEL): Tidak berbintil ribosom; mensintesis lipid, fosfolipid, steroid, dan detoksifikasi dadah/racun metabolik.",
          "Jasad Golgi: Memproses, mengubah suai, membungkus, dan mengangkut protein/glikoprotein ke bahagian sel lain atau dirembes keluar melalui vesikel rembesan.",
          "Lisosom: Kantung bermembran tunggal mengandungi enzim hidrolitik (lisozim) untuk mencernakan bahan asing, bakteria fagositosit, dan organel yang rosak (autofagi).",
          "Ribosom: Organel seni tidak bermembran, tapak sintesis protein.",
          "Vakuol: Vakuol pusat besar dalam tumbuhan diselaputi tonoplas mengandungi sap sel yang memberi kesegahan; vakuol mengecut dalam protozoa untuk pengosmoregulasian.",
          "Sentriol: Hanya wujud dalam sel haiwan, membentuk gentian gelendong semasa pembahagian sel.",
          "Dinding Sel: Lapisan selulosa tegar di luar membran plasma tumbuhan; memberi bentuk tetap dan sokongan mekanikal."
        ],
        "verbatim": [
          "Nukleus: Organel terbesar dilingkungi membran nukleus berlapis dua, mengandungi nukleoplasma, nukleolus (sintesis ribosom) dan kromatin (membawa DNA pengendali aktiviti sel).",
          "Mitokondrion: Organel berbentuk rod dengan membran luar licin dan membran dalam berlipat-lipat (krista). Merupakan 'kilang tenaga sel' tempat berlakunya respirasi sel untuk menghasilkan ATP.",
          "Kloroplas: Khusus dalam sel tumbuhan, mengandungi klorofil dalam tilakoid (grana) dan stroma untuk menyerap cahaya matahari bagi fotosintesis.",
          "Jalinan Endoplasma Kasar (JEK): Mempunyai ribosom melekat pada permukaannya; mengangkut protein yang disintesis oleh ribosom.",
          "Jalinan Endoplasma Licin (JEL): Tidak berbintil ribosom; mensintesis lipid, fosfolipid, steroid, dan detoksifikasi dadah/racun metabolik.",
          "Jasad Golgi: Memproses, mengubah suai, membungkus, dan mengangkut protein/glikoprotein ke bahagian sel lain atau dirembes keluar melalui vesikel rembesan.",
          "Lisosom: Kantung bermembran tunggal mengandungi enzim hidrolitik (lisozim) untuk mencernakan bahan asing, bakteria fagositosit, dan organel yang rosak (autofagi).",
          "Ribosom: Organel seni tidak bermembran, tapak sintesis protein.",
          "Vakuol: Vakuol pusat besar dalam tumbuhan diselaputi tonoplas mengandungi sap sel yang memberi kesegahan; vakuol mengecut dalam protozoa untuk pengosmoregulasian.",
          "Sentriol: Hanya wujud dalam sel haiwan, membentuk gentian gelendong semasa pembahagian sel.",
          "Dinding Sel: Lapisan selulosa tegar di luar membran plasma tumbuhan; memberi bentuk tetap dan sokongan mekanikal."
        ],
        "explanation": "Organel sel haiwan dan tumbuhan serta peranan biokimia masing-masing."
      },
      {
        "subtopic": "2.2 Proses Hidup Organisma Unisel",
        "summary": "Amoeba sp. dan Paramecium sp. menjalankan semua fungsi hidup dalam satu sel tunggal.",
        "points": [
          "Pergerakan: Amoeba sp. bergerak menggunakan pseudopodium (kaki palsu melalui aliran ameboid endoplasma); Paramecium sp. menggunakan pukulan silium beritma.",
          "Pemakanan: Amoeba sp. makan secara fagositosis (pseudopodium mengepung zarah makanan -> membentuk vakuol makanan -> bercantum dengan lisosom -> dicerna enzim hidrolisis); Paramecium sp. mengalirkan makanan ke alur lisan menggunakan silium.",
          "Pengosmoregulasian: Hidup dalam air tawar (larutan hipotonik), air meresap masuk secara osmosis. Vakuol mengecut mengumpul air berlebihan, mengembang ke saiz maksimum, dan mengecut untuk menyingkirkan air keluar sel bagi mengelakkan sel meletus.",
          "Pembiakan: Keadaan sesuai secara aseks (belahan dedua); keadaan buruk secara pembentukan spora (Amoeba sp.) atau konjugasi seksual (Paramecium sp.)."
        ],
        "verbatim": [
          "Pergerakan: Amoeba sp. bergerak menggunakan pseudopodium (kaki palsu melalui aliran ameboid endoplasma); Paramecium sp. menggunakan pukulan silium beritma.",
          "Pemakanan: Amoeba sp. makan secara fagositosis (pseudopodium mengepung zarah makanan -> membentuk vakuol makanan -> bercantum dengan lisosom -> dicerna enzim hidrolisis); Paramecium sp. mengalirkan makanan ke alur lisan menggunakan silium.",
          "Pengosmoregulasian: Hidup dalam air tawar (larutan hipotonik), air meresap masuk secara osmosis. Vakuol mengecut mengumpul air berlebihan, mengembang ke saiz maksimum, dan mengecut untuk menyingkirkan air keluar sel bagi mengelakkan sel meletus.",
          "Pembiakan: Keadaan sesuai secara aseks (belahan dedua); keadaan buruk secara pembentukan spora (Amoeba sp.) atau konjugasi seksual (Paramecium sp.)."
        ],
        "explanation": "Amoeba sp. dan Paramecium sp. menjalankan semua fungsi hidup dalam satu sel tunggal."
      },
      {
        "subtopic": "2.3 Pengkhususan Sel & 2.4 Aras Organisasi",
        "summary": "Penyesuaian sel multisel dan hierarki: Sel -> Tisu -> Organ -> Sistem -> Organisma.",
        "points": [
          "Sel Khusus Haiwan: Sel darah merah (dwicekung, tiada nukleus untuk muatkan lebih hemoglobin), sel sperma (ekor flagelum berenang, banyak mitokondrion membekalkan tenaga), sel saraf (akson panjang menyalurkan impuls).",
          "Sel Khusus Tumbuhan: Sel mesofil palisad (tersusun rapat menegak, padat kloroplas memaksimumkan penyerapan cahaya), sel rerambut akar (unjuran panjang luas permukaan serap air/garam mineral), salur xilem (tiub berongga berdinding lignin mengangkut air), tiub tapis floem (mengangkut sukrosa secara translokasi).",
          "Aras Organisasi Haiwan: Tisu epitelium, tisu otot (licin, rangka, kardium), tisu saraf, dan tisu penghubung (darah, tulang, rawan, adipos)."
        ],
        "verbatim": [
          "Sel Khusus Haiwan: Sel darah merah (dwicekung, tiada nukleus untuk muatkan lebih hemoglobin), sel sperma (ekor flagelum berenang, banyak mitokondrion membekalkan tenaga), sel saraf (akson panjang menyalurkan impuls).",
          "Sel Khusus Tumbuhan: Sel mesofil palisad (tersusun rapat menegak, padat kloroplas memaksimumkan penyerapan cahaya), sel rerambut akar (unjuran panjang luas permukaan serap air/garam mineral), salur xilem (tiub berongga berdinding lignin mengangkut air), tiub tapis floem (mengangkut sukrosa secara translokasi).",
          "Aras Organisasi Haiwan: Tisu epitelium, tisu otot (licin, rangka, kardium), tisu saraf, dan tisu penghubung (darah, tulang, rawan, adipos)."
        ],
        "explanation": "Penyesuaian sel multisel dan hierarki: Sel -> Tisu -> Organ -> Sistem -> Organisma."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Kemotaksis & Fagositosis Amoeba sp.",
        "detail": "Amoeba sp. mengesan zarah makanan (seperti bakteria) melalui ransangan kimia dan menghulurkan unjuran pseudopodium (kaki palsu sitoplasma) untuk melingkungi dan mengepung makanan tersebut.",
        "tip": "Pseudopodium dibentuk oleh pengaliran endoplasma dan ektoplasma."
      },
      {
        "step": "Langkah 2",
        "title": "Pencernaan Intrasel oleh Enzim Lisosom",
        "detail": "Hujung pseudopodium bertemu dan bercantum membentuk kantung vakuol makanan. Organel lisosom mendekati vakuol makanan lalu bergabung dan membebaskan enzim lisozim (hidrolisis) bagi mencerna bakteria kepada molekul ringkas.",
        "tip": "Nutrien tercerna meresap ke sitoplasma, sisa tidak tercerna dibuang secara eksositosis."
      },
      {
        "step": "Langkah 3",
        "title": "Pengosmoregulasian Vakuol Mengecut (Paramecium sp.)",
        "detail": "Air tawar persekitaran yang hipotonik meresap masuk ke sel secara osmosis berterusan. Air berlebihan dikumpulkan ke dalam vakuol mengecut sehingga mengembang ke saiz maksimum, lalu mengecut memancutkan air keluar.",
        "tip": "Pengosmoregulasian mengelakkan organisma unisel air tawar daripada meletus (lisis)."
      }
    ],
    "keypoints": [
      {
        "term": "Tonoplas",
        "meaning": "Membran separa telap yang menyelaputi vakuol pusat dalam sel tumbuhan.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Fagositosis",
        "meaning": "Proses pemakanan sel di mana sel mengepung dan menelan zarah pepejal membentuk vakuol makanan untuk dicernakan oleh lisosom.",
        "badge": "Istilah SPM"
      },
      {
        "term": "Vakuol Mengecut",
        "meaning": "Organel pengosmoregulasian dalam protozoa air tawar yang mengawal atur kandungan air sel melalui pengecutan berkala.",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Jasad Golgi",
        "meaning": "Timbunan kantung pipih bermembran yang menerima protein daripada JEK, mengubah suai menjadi glikoprotein, dan membungkusnya ke dalam vesikel rembesan.",
        "badge": "Mekanisme"
      },
      {
        "term": "Sel Mesofil Palisad",
        "meaning": "Sel tumbuhan berbentuk silinder tegak di bahagian atas daun yang padat dengan kloroplas bagi memaksimumkan fotosintesis.",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Kepadatan mitokondrion yang tinggi dijumpai dalam jenis sel manusia yang manakah?",
        "options": [
          "Sel darah merah dan sel kulit",
          "Sel sperma dan sel otot penerbangan burung",
          "Sel tulang dan sel adipos",
          "Sel rambut dan sel kuku"
        ],
        "answer": 1,
        "explanation": "Sel sperma memerlukan banyak tenaga ATP untuk pergerakan flagelum ke tiub Falopio, dan sel otot penerbangan burung memerlukan banyak tenaga untuk pengecutan otot berterusan."
      },
      {
        "q": "Apakah yang akan berlaku kepada Amoeba sp. sekiranya dipindahkan dari air tawar ke dalam air laut berkepekatan garam tinggi?",
        "options": [
          "Kadar pengecutan vakuol mengecut meningkat mendadak",
          "Kadar pengecutan vakuol mengecut berkurang atau berhenti",
          "Amoeba sp. akan membengkak dan meletus",
          "Amoeba sp. membentuk vakuol mengecut baharu yang lebih besar"
        ],
        "answer": 1,
        "explanation": "Air laut adalah hipertonik berbanding sitoplasma Amoeba sp. Air meresap keluar dari sel secara osmosis, menyebabkan vakuol mengecut tidak lagi perlu mengumpul dan menyingkirkan air berlebihan."
      },
      {
        "q": "Kerosakan pada organel Jasad Golgi dalam sel pankreas akan mengakibatkan kegagalan dalam proses:",
        "options": [
          "Sintesis rantai polipeptida oleh asid amino",
          "Penguraian glukosa semasa respirasi anaerob",
          "Pengubahsuaian, pembungkusan dan perembesan enzim pencernaan/insulin",
          "Pengecutan gentian gelendong semasa mitosis"
        ],
        "answer": 2,
        "explanation": "Jasad Golgi bertanggungjawab mengubah suai protein daripada JEK menjadi enzim aktif atau hormon (seperti insulin) dan membungkusnya ke dalam vesikel rembesan."
      },
      {
        "q": "Antara penyesuaian berikut, yang manakah membolehkan sel darah merah matang mengangkut oksigen dengan kecekapan maksimum?",
        "options": [
          "Mempunyai nukleus besar dan banyak mitokondrion",
          "Bentuk dwicekung tanpa nukleus bagi meningkatkan nisbah luas permukaan kepada isi padu",
          "Dinding selulosa tebal untuk menahan tekanan darah tinggi",
          "Mempunyai flagelum panjang untuk berenang pantas dalam plasma darah"
        ],
        "answer": 1,
        "explanation": "Bentuk cakera dwicekung menambah luas permukaan resapan gas, dan ketiadaan nukleus menyediakan lebih banyak ruang untuk memuatkan molekul hemoglobin."
      },
      {
        "q": "Apakah fungsi utama tonoplas dalam sel tumbuhan?",
        "options": [
          "Mensintesis dinding selulosa",
          "Mengawal pergerakan bahan keluar masuk vakuol dan mengekalkan kesegahan sel",
          "Menghasilkan tenaga ATP melalui fotofosforilasi",
          "Mengawal pembahagian kromosom semasa meiosis"
        ],
        "answer": 1,
        "explanation": "Tonoplas ialah membran separa telap yang mengelilingi vakuol pusat tumbuhan, mengekalkan tekanan osmosis dan kesegahan sap sel."
      }
    ],
    "struktur": [
      {
        "q": "Rajah menunjukkan laluan sintesis dan perembesan enzim ekstrasel dalam sel manusia.\n(a) Terangkan peranan Ribosom, Jalinan Endoplasma Kasar (JEK) dan Jasad Golgi dalam proses penghasilan enzim tersebut.\n(b) Ramalkan apa yang berlaku sekiranya vesikel angkutan gagal bercantum dengan Jasad Golgi.",
        "skema": [
          "(a) Ribosom mensintesis rantai polipeptida/protein mengikut arahan mRNA [1m]. Protein masuk ke dalam lumen Jalinan Endoplasma Kasar (JEK) untuk diangkut dan dibungkus ke dalam vesikel angkutan [1m]. Vesikel angkutan bertunas dan bercantum dengan Jasad Golgi, di mana protein diubah suai menjadi enzim aktif, dibungkus ke dalam vesikel rembesan dan dirembes keluar sel secara eksositosis [2m].",
          "(b) Enzim tidak dapat diubah suai atau dimatangkan, dan tidak dapat dibungkus untuk dirembeskan keluar sel [1m]."
        ]
      }
    ]
  },
  {
    "id": "bio-bab3",
    "babNum": "BAB 3",
    "title": "PERGERAKAN BAHAN MERENTASI MEMBRAN PLASMA",
    "icon": "💧",
    "anyflipPages": "Halaman 44 – 66 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Membran plasma adalah struktur dinamik separa telap yang mengatur pertukaran bahan antara persekitaran dalaman sel dengan bendalir luar sel. Bab ini menghuraikan Model Mozek Bendalir, perbezaan antara pengangkutan pasif (resapan ringkas, osmosis, resapan berbantu) dengan pengangkutan aktif, kesan larutan hipotonik, hipertonik dan isotonik terhadap sel haiwan dan tumbuhan, serta aplikasi fenomena ini dalam teknologi perubatan dan pengawetan makanan.",
    "notes": [
      {
        "subtopic": "3.1 Struktur Membran Plasma (Model Mozek Bendalir)",
        "summary": "Dwilapisan fosfolipid berorientasi dengan protein terapung dan kolesterol.",
        "points": [
          "Dwilapisan Fosfolipid: Setiap molekul fosfolipid terdiri daripada kepala berkutub yang bersifat hidrofilik (tertarik kepada air) menghadap luar dan dalam sel, serta ekor tidak berkutub bersifat hidrofobik (menolak air) menghadap ke arah dalam dwilapisan.",
          "Protein Membran: Protein liang (mempunyai liang hidrofilik terbuka membenarkan ion larut air melaluinya) dan Protein pembawa (mempunyai tapak pengikatan spesifik yang mengalami perubahan konformasi).",
          "Komponen Lain: Kolesterol (menjadikan dwilapisan lebih stabil, anjal, dan kurang telap kepada bahan larut air pada suhu badan); Glikoprotein dan Glikolipid (rantai karbohidrat bertindak sebagai tapak reseptor hormon dan pengenalan sel).",
          "Sifat Membran: Membran plasma bersifat separa telap (ketelapan memilih), hanya membenarkan molekul kecil tidak berkutub (seperti O₂, CO₂, asid lemak) dan air melaluinya secara bebas."
        ],
        "verbatim": [
          "Dwilapisan Fosfolipid: Setiap molekul fosfolipid terdiri daripada kepala berkutub yang bersifat hidrofilik (tertarik kepada air) menghadap luar dan dalam sel, serta ekor tidak berkutub bersifat hidrofobik (menolak air) menghadap ke arah dalam dwilapisan.",
          "Protein Membran: Protein liang (mempunyai liang hidrofilik terbuka membenarkan ion larut air melaluinya) dan Protein pembawa (mempunyai tapak pengikatan spesifik yang mengalami perubahan konformasi).",
          "Komponen Lain: Kolesterol (menjadikan dwilapisan lebih stabil, anjal, dan kurang telap kepada bahan larut air pada suhu badan); Glikoprotein dan Glikolipid (rantai karbohidrat bertindak sebagai tapak reseptor hormon dan pengenalan sel).",
          "Sifat Membran: Membran plasma bersifat separa telap (ketelapan memilih), hanya membenarkan molekul kecil tidak berkutub (seperti O₂, CO₂, asid lemak) dan air melaluinya secara bebas."
        ],
        "explanation": "Dwilapisan fosfolipid berorientasi dengan protein terapung dan kolesterol."
      },
      {
        "subtopic": "3.2 Konsep Pergerakan Bahan Merentasi Membran",
        "summary": "Pengangkutan Pasif (tanpa tenaga ATP) vs Pengangkutan Aktif (menggunakan tenaga ATP).",
        "points": [
          "Resapan Ringkas: Pergerakan molekul kecil larut lipid/gas dari kawasan berkepekatan tinggi ke kawasan berkepekatan rendah menuruni kecerunan kepekatan sehingga keseimbangan dinamik tercapai (cth: pertukaran O₂ dan CO₂ di alveolus).",
          "Osmosis: Resapan bersih molekul air dari kawasan keupayaan air tinggi (larutan cair) ke kawasan keupayaan air rendah (larutan pekat) merentasi membran telap memilih.",
          "Resapan Berbantu: Pergerakan molekul besar larut air (glukosa, asid amino) atau ion merentasi membran menuruni kecerunan kepekatan dengan bantuan protein pembawa atau protein liang tanpa tenaga metabolik.",
          "Pengangkutan Aktif: Pergerakan bahan merentasi membran plasma menentang kecerunan kepekatan (dari kepekatan rendah ke tinggi), memerlukan tenaga ATP dan protein pembawa (cth: Pam Natrium-Kalium dalam sel saraf dan penyerapan glukosa dalam vilus usus)."
        ],
        "verbatim": [
          "Resapan Ringkas: Pergerakan molekul kecil larut lipid/gas dari kawasan berkepekatan tinggi ke kawasan berkepekatan rendah menuruni kecerunan kepekatan sehingga keseimbangan dinamik tercapai (cth: pertukaran O₂ dan CO₂ di alveolus).",
          "Osmosis: Resapan bersih molekul air dari kawasan keupayaan air tinggi (larutan cair) ke kawasan keupayaan air rendah (larutan pekat) merentasi membran telap memilih.",
          "Resapan Berbantu: Pergerakan molekul besar larut air (glukosa, asid amino) atau ion merentasi membran menuruni kecerunan kepekatan dengan bantuan protein pembawa atau protein liang tanpa tenaga metabolik.",
          "Pengangkutan Aktif: Pergerakan bahan merentasi membran plasma menentang kecerunan kepekatan (dari kepekatan rendah ke tinggi), memerlukan tenaga ATP dan protein pembawa (cth: Pam Natrium-Kalium dalam sel saraf dan penyerapan glukosa dalam vilus usus)."
        ],
        "explanation": "Pengangkutan Pasif (tanpa tenaga ATP) vs Pengangkutan Aktif (menggunakan tenaga ATP)."
      },
      {
        "subtopic": "3.3 Kesan Larutan terhadap Sel Haiwan dan Sel Tumbuhan",
        "summary": "Tindak balas sel dalam larutan hipotonik, hipertonik, dan isotonik.",
        "points": [
          "Sel Haiwan (Eritrosit):\n  • Dalam larutan hipotonik (air suling): Air meresap masuk secara osmosis -> sel mengembang dan meletus (Hemolisis).\n  • Dalam larutan hipertonik (garam pekat): Air meresap keluar secara osmosis -> sel mengecut dan membentuk lekukan berkedut (Krenasi).\n  • Dalam larutan isotonik (0.9% NaCl): Pergerakan bersih air sifar, bentuk dwicekung normal kekal.",
          "Sel Tumbuhan:\n  • Dalam larutan hipotonik: Air meresap masuk ke vakuol -> vakuol membesar menolak sitoplasma dan membran plasma ke dinding sel -> sel menjadi Segah (tekanan segah memberi sokongan mekanikal tumbuhan herba).\n  • Dalam larutan hipertonik: Air meresap keluar dari vakuol -> sitoplasma mengecut dan membran plasma tertarik menjauhi dinding sel -> Plasmolisis (pokok layu).\n  • Apabila sel yang terplasmolisis dipindahkan segera ke air suling: Air meresap masuk semula -> sel pulih kesegahan -> Deplasmolisis."
        ],
        "verbatim": [
          "Sel Haiwan (Eritrosit):\n  • Dalam larutan hipotonik (air suling): Air meresap masuk secara osmosis -> sel mengembang dan meletus (Hemolisis).\n  • Dalam larutan hipertonik (garam pekat): Air meresap keluar secara osmosis -> sel mengecut dan membentuk lekukan berkedut (Krenasi).\n  • Dalam larutan isotonik (0.9% NaCl): Pergerakan bersih air sifar, bentuk dwicekung normal kekal.",
          "Sel Tumbuhan:\n  • Dalam larutan hipotonik: Air meresap masuk ke vakuol -> vakuol membesar menolak sitoplasma dan membran plasma ke dinding sel -> sel menjadi Segah (tekanan segah memberi sokongan mekanikal tumbuhan herba).\n  • Dalam larutan hipertonik: Air meresap keluar dari vakuol -> sitoplasma mengecut dan membran plasma tertarik menjauhi dinding sel -> Plasmolisis (pokok layu).\n  • Apabila sel yang terplasmolisis dipindahkan segera ke air suling: Air meresap masuk semula -> sel pulih kesegahan -> Deplasmolisis."
        ],
        "explanation": "Tindak balas sel dalam larutan hipotonik, hipertonik, dan isotonik."
      },
      {
        "subtopic": "3.4 Aplikasi dalam Kehidupan Harian",
        "summary": "Tiub dialisis, minuman isotonik rehidrasi, dan pengawetan makanan berkepekatan tinggi.",
        "points": [
          "Pengawetan Makanan: Penggunaan kepekatan garam atau gula yang sangat tinggi (cth: ikan masin, jem buah). Larutan hipertonik menyebabkan air meresap keluar daripada sel bakteria/kulat secara osmosis -> bakteria terhidrasi dan mati, menghalang pereputan.",
          "Mesin Hemodialisis: Menggunakan tiub selofan separa telap untuk menapis urea dan garam berlebihan daripada darah pesakit kegagalan ginjal.",
          "Minuman Isotonik: Mengandungi kepekatan elektrolit dan gula sama dengan cecair badan bagi memulihkan bendalir dan elektrolit atlet dengan pantas."
        ],
        "verbatim": [
          "Pengawetan Makanan: Penggunaan kepekatan garam atau gula yang sangat tinggi (cth: ikan masin, jem buah). Larutan hipertonik menyebabkan air meresap keluar daripada sel bakteria/kulat secara osmosis -> bakteria terhidrasi dan mati, menghalang pereputan.",
          "Mesin Hemodialisis: Menggunakan tiub selofan separa telap untuk menapis urea dan garam berlebihan daripada darah pesakit kegagalan ginjal.",
          "Minuman Isotonik: Mengandungi kepekatan elektrolit dan gula sama dengan cecair badan bagi memulihkan bendalir dan elektrolit atlet dengan pantas."
        ],
        "explanation": "Tiub dialisis, minuman isotonik rehidrasi, dan pengawetan makanan berkepekatan tinggi."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Penyediaan Eksperimen Sap Sel Tumbuhan",
        "detail": "Sediakan siri kepekatan sukrosa: 0.0 M (air suling), 0.1 M, 0.2 M, 0.3 M, 0.4 M, 0.5 M dan 0.6 M. Potong silinder ubi kentang seragam sepanjang 5 cm menggunakan pengorek gabus, lap dengan kertas turas, dan timbang jisim awal (m₁).",
        "tip": "Gunakan pengorek gabus berdiameter sama untuk memastikan luas permukaan kentang seragam."
      },
      {
        "step": "Langkah 2",
        "title": "Pengiraan Peratus Perubahan Jisim",
        "detail": "Selepas direndam selama 30 minit dalam larutan masing-masing, lap cecair pada permukaan silinder kentang dan timbang jisim akhir (m₂). Hitung peratus perubahan jisim dengan rumus: [(m₂ - m₁) / m₁] × 100%.",
        "tip": "Jisim bertambah = larutan hipotonik; jisim berkurang = larutan hipertonik (plasmolisis)."
      },
      {
        "step": "Langkah 3",
        "title": "Penentuan Titik Isotonik daripada Graf",
        "detail": "Plotkan graf peratus perubahan jisim melawan kepekatan larutan sukrosa. Titik di mana garis graf memotong paksi kepekatan (peratus perubahan jisim = 0%) mewakili kepekatan sap sel sebenar silinder kentang.",
        "tip": "Pada titik isotonik, kadar pergerakan air keluar dan masuk sel adalah sama (keseimbangan dinamik)."
      },
      {
        "step": "Langkah 4",
        "title": "Mekanisme Tindakan Pam Natrium-Kalium",
        "detail": "Tiga ion Na⁺ mengikat pada tapak spesifik protein pembawa. Hidrolisis ATP memfosforilasikan protein, mengubah bentuknya lalu melepaskan 3 ion Na⁺ keluar sel. Seterusnya 2 ion K⁺ mengikat dan dipam masuk ke sitoplasma.",
        "tip": "Pengangkutan aktif bergerak melawan kecerunan kepekatan dan wajib memerlukan tenaga ATP."
      }
    ],
    "keypoints": [
      {
        "term": "Model Mozek Bendalir",
        "meaning": "Model struktur membran plasma di mana molekul protein terapung secara bebas seperti corak mozek di dalam lapisan dwi-fosfolipid bendalir yang dinamik.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Hemolisis",
        "meaning": "Peristiwa pecahnya membran sel darah merah akibat kemasukan air secara osmosis apabila berada dalam larutan hipotonik.",
        "badge": "Istilah SPM"
      },
      {
        "term": "Krenasi",
        "meaning": "Keadaan sel haiwan mengecut dan berkedut akibat kehilangan air secara osmosis dalam larutan hipertonik.",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Plasmolisis",
        "meaning": "Pengecutan sitoplasma dan penarikan membran plasma menjauhi dinding sel tumbuhan akibat kehilangan air dalam larutan hipertonik.",
        "badge": "Mekanisme"
      },
      {
        "term": "Tekanan Segah",
        "meaning": "Tekanan bendalir dalam vakuol sel tumbuhan yang menolak membran plasma ke dinding sel, memberikan sokongan kepada tumbuhan tidak berkayu.",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Rajah menunjukkan sebatang pokok keembung yang layu setelah dibaja dengan kuantiti baja kimia yang berlebihan. Mengapakah tumbuhan tersebut layu?",
        "options": [
          "Baja kimia meresap masuk dan meracuni kloroplas sel daun",
          "Air tanah menjadi hipertonik terhadap sap sel akar, menyebabkan air meresap keluar akar secara osmosis",
          "Baja menyumbat salur floem menghalang translokasi makanan",
          "Kadar fotosintesis meningkat melebihi kadar respirasi pokok"
        ],
        "answer": 1,
        "explanation": "Kepekatan baja larut tinggi menjadikan air tanah hipertonik kepada sap sel akar. Air meresap keluar dari sel akar secara osmosis, sel kehilangan kesegahan (terplasmolisis) dan tumbuhan layu."
      },
      {
        "q": "Manakah antara molekul berikut merentasi membran plasma secara resapan ringkas melalui dwilapisan fosfolipid?",
        "options": [
          "Molekul glukosa dan ion kalsium (Ca²⁺)",
          "Gas oksigen (O₂), karbon dioksida (CO₂), dan asid lemak",
          "Molekul asid amino dan ion natrium (Na⁺)",
          "Molekul sukrosa dan enzim pepsin"
        ],
        "answer": 1,
        "explanation": "Molekul kecil tidak berkutub dan bahan larut lipid seperti O₂, CO₂, asid lemak, dan gliserol dapat meresap merentasi dwilapisan fosfolipid secara resapan ringkas."
      },
      {
        "q": "Apakah perbezaan utama antara resapan berbantu dengan pengangkutan aktif?",
        "options": [
          "Resapan berbantu memerlukan ATP, manakala pengangkutan aktif tidak memerlukan tenaga",
          "Resapan berbantu menuruni kecerunan kepekatan, manakala pengangkutan aktif menentang kecerunan kepekatan menggunakan ATP",
          "Resapan berbantu hanya berlaku dalam sel mati, pengangkutan aktif dalam sel hidup",
          "Resapan berbantu tidak melibatkan protein pembawa"
        ],
        "answer": 1,
        "explanation": "Resapan berbantu ialah pengangkutan pasif menuruni kecerunan kepekatan tanpa tenaga, manakala pengangkutan aktif mengangkut bahan melawan kecerunan kepekatan dengan penggunaan tenaga ATP."
      },
      {
        "q": "Jika sel darah merah direndam dalam larutan natrium klorida 0.1% (air suling mengandungi 0.0% garam, plasma darah normal 0.9%), apakah perubahan fizikal yang diperhatikan?",
        "options": [
          "Sel darah merah mengecut dan mengalami krenasi",
          "Sel darah merah mengembang dan akhirnya meletus (hemolisis)",
          "Tiada perubahan kerana sel dilindungi oleh dinding sel",
          "Sel darah merah membentuk spora perlindungan"
        ],
        "answer": 1,
        "explanation": "Larutan 0.1% NaCl adalah hipotonik berbanding bendalir dalaman sel darah merah (0.9% NaCl). Air meresap masuk secara osmosis sehingga membran plasma yang nipis meletus (hemolisis)."
      },
      {
        "q": "Bagaimanakah kaedah merendam mangga muda dalam larutan gula pekat membolehkan buah tersebut tahan lama tanpa rosak?",
        "options": [
          "Gula membekalkan tenaga kepada enzim buah",
          "Larutan gula pekat adalah hipertonik, menyebabkan bakteria dan kulat kehilangan air secara osmosis lalu mati",
          "Gula menutup liang stoma pada kulit buah mangga",
          "Larutan gula mematikan sel tumbuhan mangga sepenuhnya"
        ],
        "answer": 1,
        "explanation": "Larutan gula pekat bersifat hipertonik. Air di dalam sel mikroorganisma perosak (bakteria/kulat) akan meresap keluar secara osmosis, menyebabkan mikroorganisma terhidrasi dan tidak dapat membiak."
      }
    ],
    "struktur": [
      {
        "q": "Satu eksperimen dijalankan menggunakan tiub Visking yang diisi dengan larutan kanji 10% dan ampaian glukosa 20%, kemudian direndam di dalam bikar berisi air suling selama 40 minit.\n(a) Terangkan keputusan ujian iodin dan ujian Benedict ke atas air dalam bikar selepas 40 minit.\n(b) Nyatakan analogi sifat tiub Visking dengan membran plasma.",
        "skema": [
          "(a) Ujian iodin ke atas air bikar kekal perang (negatif) kerana molekul kanji bersaiz terlalu besar untuk merentasi liang halus tiub Visking [2m]. Ujian Benedict ke atas air bikar membentuk mendakan merah bata (positif) kerana molekul glukosa bersaiz kecil dan berupaya meresap merentasi tiub Visking menuruni kecerunan kepekatan [2m].",
          "(b) Tiub Visking bertindak sebagai membran telap memilih (separa telap) yang membenarkan bahan bersaiz molekul kecil melaluinya tetapi menahan bahan bersaiz besar [1m]."
        ]
      }
    ]
  },
  {
    "id": "bio-bab4",
    "babNum": "BAB 4",
    "title": "KOMPOSISI KIMIA DALAM SEL",
    "icon": "🧪",
    "anyflipPages": "Halaman 68 – 82 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Semua hidupan terbina daripada sebatian organik dan tak organik yang memainkan peranan biokimia penting dalam sel. Bab ini merangkumi ciri keistimewaan air, struktur dan fungsi karbohidrat (monosakarida, disakarida, polisakarida), protein (asid amino, struktur primer hingga kuaterner), lipid (lemak tepu vs tak tepu), dan asid nukleik (DNA dan RNA) sebagai pembawa maklumat genetik sel.",
    "notes": [
      {
        "subtopic": "4.1 Air",
        "summary": "Sifat unik molekul air yang membolehkannya bertindak sebagai medium biokimia utama hidupan.",
        "points": [
          "Kekutuban Air: Molekul air (H₂O) ialah molekul berkutub di mana atom oksigen lebih elektronegatif berbanding atom hidrogen, menghasilkan ikatan hidrogen antara molekul air.",
          "Daya Lekitan dan Daya Lekapan: Daya lekitan (tarikan sesama molekul air) dan daya lekapan (tarikan molekul air ke dinding xilem) membolehkan air bergerak berterusan dalam tiub xilem (tindakan kapilari).",
          "Muatan Haba Tentu Tinggi: Air memerlukan 4.2 kJ kg⁻¹ °C⁻¹ tenaga haba untuk menaikkan suhu 1 kg air sebanyak 1°C; bertindak sebagai penstabil suhu badan dan habitat akuatik.",
          "Pelarut Semesta: Melarutkan bahan terlarut berkutub dan ionik bagi memudahkan tindak balas metabolik dan pengangkutan nutrien dalam darah."
        ],
        "verbatim": [
          "Kekutuban Air: Molekul air (H₂O) ialah molekul berkutub di mana atom oksigen lebih elektronegatif berbanding atom hidrogen, menghasilkan ikatan hidrogen antara molekul air.",
          "Daya Lekitan dan Daya Lekapan: Daya lekitan (tarikan sesama molekul air) dan daya lekapan (tarikan molekul air ke dinding xilem) membolehkan air bergerak berterusan dalam tiub xilem (tindakan kapilari).",
          "Muatan Haba Tentu Tinggi: Air memerlukan 4.2 kJ kg⁻¹ °C⁻¹ tenaga haba untuk menaikkan suhu 1 kg air sebanyak 1°C; bertindak sebagai penstabil suhu badan dan habitat akuatik.",
          "Pelarut Semesta: Melarutkan bahan terlarut berkutub dan ionik bagi memudahkan tindak balas metabolik dan pengangkutan nutrien dalam darah."
        ],
        "explanation": "Sifat unik molekul air yang membolehkannya bertindak sebagai medium biokimia utama hidupan."
      },
      {
        "subtopic": "4.2 Karbohidrat",
        "summary": "Sebatian organik mengandungi C, H, dan O dalam nisbah 1:2:1 (Cₙ(H₂O)ₙ).",
        "points": [
          "Monosakarida (Gula Ringkas): Glukosa (gula respirasi sel), Fruktosa (gula buah paling manis), Galaktosa (gula susu). Semuanya gula penurun.",
          "Disakarida: Terbentuk melalui proses kondensasi dua monosakarida dengan penyingkiran satu molekul air (ikatan glikosidik):\n  • Maltosa = Glukosa + Glukosa (gula gandum)\n  • Sukrosa = Glukosa + Fruktosa (gula tebu bukan penurun)\n  • Laktosa = Glukosa + Galaktosa (gula susu mamalia)\n  Hidrolisis disakarida dengan penambahan air menguraikannya kembali kepada monosakarida.",
          "Polisakarida: Polimer hasil kondensasi beratus-ratus glukosa:\n  • Kanji: Simpanan karbohidrat utama dalam tumbuhan (amilosa & amilopektin).\n  • Glikogen: Simpanan karbohidrat dalam hati dan otot haiwan ('kanji haiwan').\n  • Selulosa: Komponen gentian utama dinding sel tumbuhan, memberikan kekuatan struktur (tidak dapat dicerna manusia, bertindak sebagai serat)."
        ],
        "verbatim": [
          "Monosakarida (Gula Ringkas): Glukosa (gula respirasi sel), Fruktosa (gula buah paling manis), Galaktosa (gula susu). Semuanya gula penurun.",
          "Disakarida: Terbentuk melalui proses kondensasi dua monosakarida dengan penyingkiran satu molekul air (ikatan glikosidik):\n  • Maltosa = Glukosa + Glukosa (gula gandum)\n  • Sukrosa = Glukosa + Fruktosa (gula tebu bukan penurun)\n  • Laktosa = Glukosa + Galaktosa (gula susu mamalia)\n  Hidrolisis disakarida dengan penambahan air menguraikannya kembali kepada monosakarida.",
          "Polisakarida: Polimer hasil kondensasi beratus-ratus glukosa:\n  • Kanji: Simpanan karbohidrat utama dalam tumbuhan (amilosa & amilopektin).\n  • Glikogen: Simpanan karbohidrat dalam hati dan otot haiwan ('kanji haiwan').\n  • Selulosa: Komponen gentian utama dinding sel tumbuhan, memberikan kekuatan struktur (tidak dapat dicerna manusia, bertindak sebagai serat)."
        ],
        "explanation": "Sebatian organik mengandungi C, H, dan O dalam nisbah 1:2:1 (Cₙ(H₂O)ₙ)."
      },
      {
        "subtopic": "4.3 Protein & 4.4 Lipid",
        "summary": "Polimer asid amino dan sebatian hidrofobik trigliserida.",
        "points": [
          "Protein: Terbina daripada C, H, O, N (kadangkala S dan P). Monomer ialah asid amino yang dihubungkan oleh ikatan peptida melalui kondensasi.",
          "Struktur Protein: Struktur Primer (urutan linear asid amino), Struktur Sekunder (heliks-α atau kepingan berlipat-β ikatan hidrogen), Struktur Tertier (lipatan 3D globular seperti enzim dan antibodi ikatan disulfida/hidrogen/ionik), Struktur Kuaterner (gabungan dua atau lebih rantai polipeptida seperti hemoglobin).",
          "Lipid: Sebatian tak berkutub larut pelarut organik (alkohol/eter), mengandungi C, H, O. Lemak terbentuk daripada 1 gliserol + 3 asid lemak (ikatan ester).",
          "Perbezaan Lemak Tepu vs Lemak Tak Tepu:\n  • Lemak Tepu: Rantai asid lemak hanya ikatan tunggal (C-C), bilangan atom H maksimum, takat lebur tinggi, pepejal pada suhu bilik (cth: mentega, lemak daging).\n  • Lemak Tak Tepu: Mempunyai sekurang-kurangnya satu ikatan ganda dua (C=C), takat lebur rendah, cecair pada suhu bilik (cth: minyak zaitun, minyak ikan omega-3)."
        ],
        "verbatim": [
          "Protein: Terbina daripada C, H, O, N (kadangkala S dan P). Monomer ialah asid amino yang dihubungkan oleh ikatan peptida melalui kondensasi.",
          "Struktur Protein: Struktur Primer (urutan linear asid amino), Struktur Sekunder (heliks-α atau kepingan berlipat-β ikatan hidrogen), Struktur Tertier (lipatan 3D globular seperti enzim dan antibodi ikatan disulfida/hidrogen/ionik), Struktur Kuaterner (gabungan dua atau lebih rantai polipeptida seperti hemoglobin).",
          "Lipid: Sebatian tak berkutub larut pelarut organik (alkohol/eter), mengandungi C, H, O. Lemak terbentuk daripada 1 gliserol + 3 asid lemak (ikatan ester).",
          "Perbezaan Lemak Tepu vs Lemak Tak Tepu:\n  • Lemak Tepu: Rantai asid lemak hanya ikatan tunggal (C-C), bilangan atom H maksimum, takat lebur tinggi, pepejal pada suhu bilik (cth: mentega, lemak daging).\n  • Lemak Tak Tepu: Mempunyai sekurang-kurangnya satu ikatan ganda dua (C=C), takat lebur rendah, cecair pada suhu bilik (cth: minyak zaitun, minyak ikan omega-3)."
        ],
        "explanation": "Polimer asid amino dan sebatian hidrofobik trigliserida."
      },
      {
        "subtopic": "4.5 Asid Nukleik (DNA dan RNA)",
        "summary": "Polimer nukleotida penyimpan kod genetik hidupan.",
        "points": [
          "Struktur Nukleotida: Mengandungi gula pentosa (deoksiribosa dalam DNA, ribosa dalam RNA), kumpulan fosfat, dan bes bernitrogen.",
          "Bes Bernitrogen DNA: Adenina (A), Guanina (G), Sitosina (C), Timina (T). Pasangan bes berpadanan: A berpasangan dengan T (2 ikatan hidrogen), C berpasangan dengan G (3 ikatan hidrogen).",
          "DNA vs RNA:\n  • DNA: Heliks ganda dua bebenang antiselari, gula deoksiribosa, bes A, T, C, G; terletak di dalam nukleus, kloroplas, dan mitokondrion.\n  • RNA: Bebenang tunggal lebih pendek, gula ribosa, bes A, Urasil (U), C, G; terlibat dalam penterjemahan kod genetik kepada protein di sitoplasma (mRNA, tRNA, rRNA)."
        ],
        "verbatim": [
          "Struktur Nukleotida: Mengandungi gula pentosa (deoksiribosa dalam DNA, ribosa dalam RNA), kumpulan fosfat, dan bes bernitrogen.",
          "Bes Bernitrogen DNA: Adenina (A), Guanina (G), Sitosina (C), Timina (T). Pasangan bes berpadanan: A berpasangan dengan T (2 ikatan hidrogen), C berpasangan dengan G (3 ikatan hidrogen).",
          "DNA vs RNA:\n  • DNA: Heliks ganda dua bebenang antiselari, gula deoksiribosa, bes A, T, C, G; terletak di dalam nukleus, kloroplas, dan mitokondrion.\n  • RNA: Bebenang tunggal lebih pendek, gula ribosa, bes A, Urasil (U), C, G; terlibat dalam penterjemahan kod genetik kepada protein di sitoplasma (mRNA, tRNA, rRNA)."
        ],
        "explanation": "Polimer nukleotida penyimpan kod genetik hidupan."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Tindak Balas Kondensasi (Sintesis Karbohidrat & Lipid)",
        "detail": "Dua molekul monosakarida bergabung dengan menyingkirkan satu molekul air (H₂O) untuk membentuk ikatan kovalen glikosidik. Contoh: Glukosa + Fruktosa → Sukrosa + H₂O.",
        "tip": "Satu molekul air disingkirkan bagi setiap pembentukan satu ikatan baru."
      },
      {
        "step": "Langkah 2",
        "title": "Tindak Balas Hidrolisis (Penguraian Molekul Kompleks)",
        "detail": "Molekul polimer diuraikan kepada monomer ringkas melalui penambahan satu molekul air dan bantuan enzim pencernaan spesifik. Contoh: Penguraian maltosa kepada dua glukosa oleh enzim maltase.",
        "tip": "Hidrolisis memecahkan ikatan glikosidik, ikatan peptida, dan ikatan ester."
      },
      {
        "step": "Langkah 3",
        "title": "Pembentukan Ikatan Peptida dalam Protein",
        "detail": "Kumpulan amino (-NH₂) satu asid amino bertindak balas dengan kumpulan karboksil (-COOH) asid amino lain menghasilkan ikatan peptida (-CO-NH-) dan membebaskan air, membentuk rantai polipeptida.",
        "tip": "Protein memiliki struktur primer, sekunder (heliks-α/lembaran-β), tertier, dan kuaterner."
      }
    ],
    "keypoints": [
      {
        "term": "Ikatan Peptida",
        "meaning": "Ikatan kovalen yang terbentuk antara kumpulan amino (-NH₂) satu asid amino dengan kumpulan karboksil (-COOH) asid amino bersebelahan melalui tindak balas kondensasi.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Gula Penurun",
        "meaning": "Gula yang berupaya menurunkan kuprum(II) sulfat biru kepada mendakan merah bata kuprum(I) oksida dalam ujian Benedict (cth: semua monosakarida serta maltosa dan laktosa).",
        "badge": "Istilah SPM"
      },
      {
        "term": "Ikatan Ester",
        "meaning": "Ikatan kimia yang terbentuk antara satu molekul gliserol dengan tiga molekul asid lemak dalam molekul trigliserida.",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Heliks Ganda Dua",
        "meaning": "Bentuk struktur molekul DNA yang terdiri daripada dua bebenang polinukleotida berpintal secara antiselari dan dihubungkan oleh ikatan hidrogen pasangan bes berpadanan.",
        "badge": "Mekanisme"
      },
      {
        "term": "Asid Amino Perlu",
        "meaning": "Asid amino yang tidak boleh disintesis oleh tubuh badan manusia sendiri dan wajib diperoleh daripada pemakanan harian (9 jenis asid amino).",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Antara karbohidrat berikut, yang manakah BUKAN gula penurun dalam ujian Benedict?",
        "options": [
          "Glukosa",
          "Maltosa",
          "Sukrosa",
          "Fruktosa"
        ],
        "answer": 2,
        "explanation": "Sukrosa ialah disakarida bukan penurun kerana kumpulan karbonil penurunnya terikat dalam pembentukan ikatan glikosidik antara glukosa dan fruktosa."
      },
      {
        "q": "Apakah jenis ikatan yang menghubungkan pasangan bes bernitrogen berpadanan antara dua bebenang DNA?",
        "options": [
          "Ikatan peptida",
          "Ikatan fosfodiester",
          "Ikatan hidrogen",
          "Ikatan glikosidik"
        ],
        "answer": 2,
        "explanation": "Pasangan bes berpadanan (A-T mempunyai 2 ikatan hidrogen; G-C mempunyai 3 ikatan hidrogen) dihubungkan oleh ikatan hidrogen yang stabil tetapi mudah dibuka semasa replikasi DNA."
      },
      {
        "q": "Manakah antara berikut menerangkan ciri asid lemak tak tepu?",
        "options": [
          "Mengandungi sekurang-kurangnya satu ikatan ganda dua antara atom karbon dan berbentuk cecair pada suhu bilik",
          "Mempunyai bilangan atom hidrogen maksimum dan takat lebur tinggi",
          "Hanya didapati daripada sumber lemak haiwan darat",
          "Menyebabkan penyumbatan plak kolesterol secara terus dalam salur arteri"
        ],
        "answer": 0,
        "explanation": "Asid lemak tak tepu mempunyai ikatan ganda dua (C=C), tidak tepu dengan atom H, mempunyai takat lebur rendah dan wujud sebagai minyak cecair pada suhu bilik."
      },
      {
        "q": "Tindakan kapilari yang membolehkan air bergerak berterusan dari akar ke daun tumbuhan berpunca daripada gabungan daya:",
        "options": [
          "Daya lekitan dan daya graviti",
          "Daya lekapan dan daya keapungan",
          "Daya lekitan sesama molekul air dan daya lekapan ke dinding xilem",
          "Daya elektrostatik membran plasma"
        ],
        "answer": 2,
        "explanation": "Daya lekitan (ikatan hidrogen sesama molekul air) menghasilkan turus air berterusan, manakala daya lekapan mengikat air ke dinding selulosa xilem, membolehkan tindakan kapilari berlaku."
      },
      {
        "q": "Struktur hemoglobin manusia yang terdiri daripada empat rantai polipeptida (dua rantai alfa dan dua rantai beta) serta kumpulan hem diklasifikasikan sebagai struktur protein tahap:",
        "options": [
          "Primer",
          "Sekunder",
          "Tertier",
          "Kuaterner"
        ],
        "answer": 3,
        "explanation": "Struktur kuaterner melibatkan penggabungan dua atau lebih rantai polipeptida tertier membentuk satu kompleks protein berfungsi yang besar seperti hemoglobin."
      }
    ],
    "struktur": [
      {
        "q": "Rajah menunjukkan sebahagian daripada molekul DNA.\n(a) Namakan tiga komponen asas yang membentuk satu unit nukleotida DNA.\n(b) Jika satu bebenang DNA mempunyai jujukan bes 5'-A-T-G-C-C-A-3', tuliskan jujukan bes pada bebenang pelengkapnya dan terangkan peraturan pasangan bes berpadanan.",
        "skema": [
          "(a) 1. Kumpulan fosfat [1m], 2. Gula deoksiribosa [1m], 3. Bes bernitrogen (Adenina / Timina / Guanina / Sitosina) [1m].",
          "(b) Jujukan bebenang pelengkap: 3'-T-A-C-G-G-T-5' [1m]. Menurut peraturan Chargaff / pasangan bes berpadanan, Adenina (A) sentiasa berpasangan dengan Timina (T) melalui 2 ikatan hidrogen, dan Guanina (G) sentiasa berpasangan dengan Sitosina (C) melalui 3 ikatan hidrogen [1m]."
        ]
      }
    ]
  },
  {
    "id": "bio-bab5",
    "babNum": "BAB 5",
    "title": "METABOLISME DAN ENZIM",
    "icon": "⚡",
    "anyflipPages": "Halaman 84 – 96 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Metabolisme merangkumi kesemua tindak balas biokimia dalam sel hidup. Enzim merupakan mangkin biologi protein yang mempercepatkan tindak balas metabolik dengan merendahkan tenaga pengaktifan. Bab ini menerangkan mekanisme tindakan enzim berpandukan hipotesis 'Mangga dan Kunci', faktor-faktor fiziko-kimia yang mempengaruhi kadar tindak balas enzim (suhu, pH, kepekatan substrat, kepekatan enzim), serta aplikasi enzim dalam industri moden.",
    "notes": [
      {
        "subtopic": "5.1 Metabolisme dan Ciri Umum Enzim",
        "summary": "Anabolisme vs Katabolisme, sifat protein enzim dan tenaga pengaktifan (Eₐ).",
        "points": [
          "Metabolisme: Terbahagi kepada Anabolisme (tindak balas membina molekul kompleks daripada molekul ringkas, memerlukan tenaga, cth: fotosintesis) dan Katabolisme (tindak balas mengurai molekul kompleks kepada molekul ringkas, membebaskan tenaga, cth: respirasi sel).",
          "Tenaga Pengaktifan (Eₐ): Tenaga minimum yang diperlukan untuk memulakan tindak balas kimia. Enzim merendahkan tenaga pengaktifan, membolehkan tindak balas berlaku dengan cepat pada suhu badan 37°C.",
          "Ciri Umum Enzim: Enzim ialah protein yang bertindak sebagai mangkin organik; bertindak secara spesifik (satu enzim satu substrat); tidak musnah pada akhir tindak balas dan boleh digunakan semula; tindak balasnya berbalik (A + B ⇌ C + D); diperlukan dalam kuantiti kecil sahaja."
        ],
        "verbatim": [
          "Metabolisme: Terbahagi kepada Anabolisme (tindak balas membina molekul kompleks daripada molekul ringkas, memerlukan tenaga, cth: fotosintesis) dan Katabolisme (tindak balas mengurai molekul kompleks kepada molekul ringkas, membebaskan tenaga, cth: respirasi sel).",
          "Tenaga Pengaktifan (Eₐ): Tenaga minimum yang diperlukan untuk memulakan tindak balas kimia. Enzim merendahkan tenaga pengaktifan, membolehkan tindak balas berlaku dengan cepat pada suhu badan 37°C.",
          "Ciri Umum Enzim: Enzim ialah protein yang bertindak sebagai mangkin organik; bertindak secara spesifik (satu enzim satu substrat); tidak musnah pada akhir tindak balas dan boleh digunakan semula; tindak balasnya berbalik (A + B ⇌ C + D); diperlukan dalam kuantiti kecil sahaja."
        ],
        "explanation": "Anabolisme vs Katabolisme, sifat protein enzim dan tenaga pengaktifan (Eₐ)."
      },
      {
        "subtopic": "5.2 Mekanisme 'Mangga dan Kunci' & Faktor Mempengaruhi Enzim",
        "summary": "Tapak aktif spesifik enzim dan pengaruh suhu, pH, kepekatan substrat dan kepekatan enzim.",
        "points": [
          "Hipotesis 'Mangga dan Kunci': Substrat diumpamakan sebagai anak kunci manakala tapak aktif enzim sebagai mangga. Substrat berpadu dengan tapak aktif membentuk kompleks enzim-substrat -> tindak balas berlaku -> hasil tindak balas terbebas, meninggalkan enzim dalam bentuk asal.",
          "Kesan Suhu: Suhu meningkat -> tenaga kinetik molekul bertambah -> frekuensi perlanggaran berkesan meningkat -> kadar tindak balas meningkat sehingga suhu optimum (37°C). Melebihi 40°C-60°C, ikatan hidrogen dan disulfida terputus -> tapak aktif berubah bentuk -> Enzim ternyahasli (kehilangan fungsi mangkin secara kekal).",
          "Kesan pH: Setiap enzim mempunyai pH optimum (cth: Pepsin pH 1.5–2.0 dalam perut asid, Saliva amilase pH 6.8–7.0 dalam mulut, Tripsin pH 8.0–8.5 dalam usus beralkali). Perubahan drastik nilai pH mengubah cas ionik pada tapak aktif dan menyebabkan penyahaslian.",
          "Kesan Kepekatan Substrat: Kepekatan substrat meningkat -> kadar tindak balas meningkat sehingga mencapai kadar maksimum (V_max). Selepas takat tepu, kadar menjadi malar kerana semua tapak aktif enzim telah tepu dengan substrat (enzim menjadi faktor pengehad).",
          "Kesan Kepekatan Enzim: Kadar meningkat berkadaran terus selagi terdapat lebihan molekul substrat."
        ],
        "verbatim": [
          "Hipotesis 'Mangga dan Kunci': Substrat diumpamakan sebagai anak kunci manakala tapak aktif enzim sebagai mangga. Substrat berpadu dengan tapak aktif membentuk kompleks enzim-substrat -> tindak balas berlaku -> hasil tindak balas terbebas, meninggalkan enzim dalam bentuk asal.",
          "Kesan Suhu: Suhu meningkat -> tenaga kinetik molekul bertambah -> frekuensi perlanggaran berkesan meningkat -> kadar tindak balas meningkat sehingga suhu optimum (37°C). Melebihi 40°C-60°C, ikatan hidrogen dan disulfida terputus -> tapak aktif berubah bentuk -> Enzim ternyahasli (kehilangan fungsi mangkin secara kekal).",
          "Kesan pH: Setiap enzim mempunyai pH optimum (cth: Pepsin pH 1.5–2.0 dalam perut asid, Saliva amilase pH 6.8–7.0 dalam mulut, Tripsin pH 8.0–8.5 dalam usus beralkali). Perubahan drastik nilai pH mengubah cas ionik pada tapak aktif dan menyebabkan penyahaslian.",
          "Kesan Kepekatan Substrat: Kepekatan substrat meningkat -> kadar tindak balas meningkat sehingga mencapai kadar maksimum (V_max). Selepas takat tepu, kadar menjadi malar kerana semua tapak aktif enzim telah tepu dengan substrat (enzim menjadi faktor pengehad).",
          "Kesan Kepekatan Enzim: Kadar meningkat berkadaran terus selagi terdapat lebihan molekul substrat."
        ],
        "explanation": "Tapak aktif spesifik enzim dan pengaruh suhu, pH, kepekatan substrat dan kepekatan enzim."
      },
      {
        "subtopic": "5.3 Aplikasi Enzim dalam Industri Harian",
        "summary": "Penggunaan bioteknologi enzim dalam industri pemakanan, fabrik dan perubatan.",
        "points": [
          "Protease: Digunakan dalam serbuk pencuci pakaian biologi untuk menanggalkan kotoran protein darah/telur, dan melembutkan daging dalam industri makanan.",
          "Pektinase dan Selulase: Mengekstrak dan menjernihkan jus buah-buahan secara komersial serta biobatu mencuci kain seluar jeans.",
          "Laktase: Menghasilkan susu bebas laktosa bagi individu yang mengalami intoleransi laktosa.",
          "Zimase (daripada yis): Menapai gula menjadi etanol dalam pembuatan bir dan wain.",
          "Lipase: Menghasilkan keju dan mencerna gris lemak dalam industri penapisan minyak."
        ],
        "verbatim": [
          "Protease: Digunakan dalam serbuk pencuci pakaian biologi untuk menanggalkan kotoran protein darah/telur, dan melembutkan daging dalam industri makanan.",
          "Pektinase dan Selulase: Mengekstrak dan menjernihkan jus buah-buahan secara komersial serta biobatu mencuci kain seluar jeans.",
          "Laktase: Menghasilkan susu bebas laktosa bagi individu yang mengalami intoleransi laktosa.",
          "Zimase (daripada yis): Menapai gula menjadi etanol dalam pembuatan bir dan wain.",
          "Lipase: Menghasilkan keju dan mencerna gris lemak dalam industri penapisan minyak."
        ],
        "explanation": "Penggunaan bioteknologi enzim dalam industri pemakanan, fabrik dan perubatan."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Model Mangga dan Kunci (Kompleks Enzim-Substrat)",
        "detail": "Molekul substrat mempunyai bentuk tiga dimensi yang sepadan tepat (komplementari) dengan tapak aktif molekul enzim. Substrat mengikat pada tapak aktif membentuk Kompleks Enzim-Substrat.",
        "tip": "Enzim bertindak secara spesifik; satu enzim hanya memangkin satu jenis substrat sahaja."
      },
      {
        "step": "Langkah 2",
        "title": "Penurunan Tenaga Pengaktifan (Eₐ)",
        "detail": "Pengikatan substrat pada tapak aktif menstabilkan keadaan peralihan dan merendahkan tenaga pengaktifan yang diperlukan untuk memulakan pemecahan atau pembentukan ikatan kimia.",
        "tip": "Kadar tindak balas dipercepatkan sehingga jutaan kali tanpa meningkatkan suhu sel."
      },
      {
        "step": "Langkah 3",
        "title": "Pembebasan Hasil & Penggunaan Semula Enzim",
        "detail": "Substrat ditukarkan kepada produk tindak balas baharu yang kemudiannya berpisah daripada tapak aktif enzim. Bentuk tapak aktif enzim kekal tidak berubah dan sedia memproses substrat seterusnya.",
        "tip": "Enzim tidak musnah pada akhir tindak balas dan hanya diperlukan dalam kuantiti kecil."
      }
    ],
    "keypoints": [
      {
        "term": "Tenaga Pengaktifan",
        "meaning": "Tenaga minimum yang diperlukan oleh molekul bahan tindak balas untuk memecahkan ikatan dan memulakan sesuatu tindak balas kimia.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Tapak Aktif",
        "meaning": "Kawasan spesifik pada permukaan molekul enzim yang mempunyai bentuk pelengkap dengan substrat untuk membolehkan pengikatan kimia berlaku.",
        "badge": "Istilah SPM"
      },
      {
        "term": "Penyahaslian Enzim",
        "meaning": "Kerosakan struktur tertier 3D enzim akibat suhu tinggi melebihi 60°C atau pH ekstrem sehingga tapak aktif hilang keupayaan mengikat substrat secara kekal.",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Enzim Intrasel",
        "meaning": "Enzim yang disintesis di dalam sel untuk digunakan dalam sel itu sendiri (cth: enzim heksokinase semasa glikolisis di sitoplasma).",
        "badge": "Mekanisme"
      },
      {
        "term": "Enzim Ekstrasel",
        "meaning": "Enzim yang disintesis di dalam sel tetapi dirembeskan keluar sel untuk berfungsi di luar (cth: enzim tripsin dirembes oleh pankreas ke duodenum).",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Apakah yang berlaku kepada molekul enzim apabila dipanaskan melebihi 60°C?",
        "options": [
          "Enzim membeku dan boleh aktif semula apabila disejukkan",
          "Ikatan kimia struktur tertier terputus menyebabkan tapak aktif termusnah (ternyahasli)",
          "Kadar tindak balas enzim menjadi dua kali ganda lebih pantas",
          "Substrat bertukar menjadi enzim"
        ],
        "answer": 1,
        "explanation": "Suhu tinggi melebihi 60°C membekalkan tenaga haba berlebihan yang memutuskan ikatan hidrogen dan ionik, menyebabkan struktur 3D enzim musnah dan ternyahasli secara kekal."
      },
      {
        "q": "Enzim pepsin di dalam jus gastrik perut bertindak secara optimum pada nilai pH:",
        "options": [
          "pH 1.5 – 2.0 (sangat berasid)",
          "pH 7.0 (neutral)",
          "pH 8.5 (beralkali)",
          "pH 12.0 (sangat beralkali)"
        ],
        "answer": 0,
        "explanation": "Pepsin dirembeskan dalam perut yang mengandungi asid hidroklorik pekat dan berfungsi optimum pada julat pH 1.5 hingga 2.0 untuk mencernakan protein."
      },
      {
        "q": "Mengapakah kadar tindak balas enzim mencapai tahap mendatar (malar) pada kepekatan substrat yang sangat tinggi?",
        "options": [
          "Enzim telah kehabisan tenaga ATP",
          "Semua tapak aktif enzim telah tepu dengan molekul substrat (enzim menjadi faktor pengehad)",
          "Substrat telah ternyahasli",
          "Hasil tindak balas memusnahkan enzim"
        ],
        "answer": 1,
        "explanation": "Pada kepekatan substrat yang tinggi, semua tapak aktif molekul enzim telah diisi oleh substrat pada bila-bila masa (takat tepu). Penambahan substrat tidak lagi dapat meningkatkan kadar tindak balas."
      },
      {
        "q": "Enzim manakah yang digunakan dalam industri pemprosesan jus buah untuk menjernihkan jus dan memecahkan dinding sel buah?",
        "options": [
          "Amilase",
          "Pektinase",
          "Renin",
          "Zimase"
        ],
        "answer": 1,
        "explanation": "Pektinase mencernakan pektin dalam dinding sel tumbuhan dan jus buah, membantu membebaskan lebih banyak jus serta menjadikan jus buah jernih secara komersial."
      },
      {
        "q": "Apakah peranan utama enzim dalam mempercepatkan sesuatu tindak balas biokimia badan?",
        "options": [
          "Menaikkan suhu badan organisma",
          "Merendahkan tenaga pengaktifan tindak balas",
          "Mengubah hasil tindak balas menjadi asid",
          "Menghasilkan lebih banyak molekul substrat"
        ],
        "answer": 1,
        "explanation": "Enzim bertindak sebagai mangkin biologi yang merendahkan tenaga pengaktifan (Eₐ), membolehkan tindak balas metabolik berlaku dengan pantas pada suhu sel hidup."
      }
    ],
    "struktur": [
      {
        "q": "Graf menunjukkan kesan suhu terhadap kadar tindak balas enzim amilase liur.\n(a) Terangkan keadaan graf dari suhu 10°C ke 37°C.\n(b) Terangkan apakah yang berlaku kepada enzim pada suhu 60°C dan hubung kaitkan dengan kadar tindak balas.",
        "skema": [
          "(a) Dari 10°C ke 37°C, kadar tindak balas meningkat kerana peningkatan tenaga kinetik molekul enzim dan substrat [1m]. Frekuensi perlanggaran berkesan antara tapak aktif enzim dengan molekul substrat bertambah sehingga mencapai kadar maksimum pada suhu optimum 37°C [2m].",
          "(b) Pada 60°C, kadar tindak balas menurun mendadak ke sifar [1m]. Haba berlebihan memutuskan ikatan hidrogen dalam molekul protein enzim, memusnahkan struktur 3D dan tapak aktif enzim (enzim ternyahasli). Substrat tidak lagi dapat berpadu dengan tapak aktif [2m]."
        ]
      }
    ]
  },
  {
    "id": "bio-bab6",
    "babNum": "BAB 6",
    "title": "PEMBAHAGIAN SEL",
    "icon": "🧬",
    "anyflipPages": "Halaman 98 – 118 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Pembahagian sel memastikan pewarisan bahan genetik dan kelangsungan hidup organisma. Bab ini membincangkan Kitar Sel (Fasa Interfasa G1, S, G2 dan Fasa M), peringkat-peringkat Mitosis (Profasa, Metafasa, Anafasa, Telofasa) dan Sitokinesis, proses Meiosis I dan Meiosis II dalam menghasilkan gamet haploid berserta pindah silang yang menjana variasi, serta implikasi kegagalan kawalan pembahagian sel (kanser dan keabnormalan kromosom seperti Sindrom Down).",
    "notes": [
      {
        "subtopic": "6.1 Kitar Sel dan Fasa Interfasa",
        "summary": "Kitaran sel eukariot merangkumi Interfasa (90% tempoh masa) dan Fasa M.",
        "points": [
          "Fasa G₁ (Pertumbuhan Pertama): Sel membesar secara aktif, mensintesis protein dan organel baharu (seperti mitokondrion dan jasad Golgi), kadar metabolisme tinggi.",
          "Fasa S (Sintesis DNA): Replikasi DNA berlaku. Setiap kromosom mengganda menghasilkan dua kromatid kembar seiras yang terikat pada sentromer.",
          "Fasa G₂ (Pertumbuhan Kedua): Sel terus membesar, mengumpul tenaga ATP dan mensintesis mikrotubul/gentian gelendong sebagai persediaan pembahagian fasa M.",
          "Fasa M: Melibatkan Mitosis (pembahagian nukleus) diikuti oleh Sitokinesis (pembahagian sitoplasma)."
        ],
        "verbatim": [
          "Fasa G₁ (Pertumbuhan Pertama): Sel membesar secara aktif, mensintesis protein dan organel baharu (seperti mitokondrion dan jasad Golgi), kadar metabolisme tinggi.",
          "Fasa S (Sintesis DNA): Replikasi DNA berlaku. Setiap kromosom mengganda menghasilkan dua kromatid kembar seiras yang terikat pada sentromer.",
          "Fasa G₂ (Pertumbuhan Kedua): Sel terus membesar, mengumpul tenaga ATP dan mensintesis mikrotubul/gentian gelendong sebagai persediaan pembahagian fasa M.",
          "Fasa M: Melibatkan Mitosis (pembahagian nukleus) diikuti oleh Sitokinesis (pembahagian sitoplasma)."
        ],
        "explanation": "Kitaran sel eukariot merangkumi Interfasa (90% tempoh masa) dan Fasa M."
      },
      {
        "subtopic": "6.2 Mitosis dan Sitokinesis",
        "summary": "Pembahagian nukleus sel soma menghasilkan 2 sel anak seiras secara genetik (2n → 2n).",
        "points": [
          "Profasa: Kromatin menebal dan memendek menjadi kromosom kelihatan jelas; sentriol bergerak ke kutub bertentangan; gentian gelendong mula terbentuk; nukleolus dan membran nukleus terurai.",
          "Metafasa: Kromosom tersusun sebaris pada satah khatulistiwa; gentian gelendong melekat pada sentromer setiap kromatid kembar.",
          "Anafasa: Sentromer membahagi dua; gentian gelendong memendek menarik kromatid kembar berpisah ke kutub bertentangan; kromatid kini dikenali sebagai kromosom anak.",
          "Telofasa: Kromosom anak sampai ke kutub sel; kromosom menyahkondensasi menjadi benang kromatin halus; membran nukleus dan nukleolus terbentuk semula; gentian gelendong lenyap.",
          "Sitokinesis:\n  • Sel Haiwan: Membran plasma mencerut ke dalam di bahagian tengah membentuk alur pembahagian sehingga sel terputus dua.\n  • Sel Tumbuhan: Vesikel daripada jasad Golgi bergabung membentuk plat sel di satah khatulistiwa, membesar ke luar membentuk dinding sel baharu.",
          "Kepentingan Mitosis: Tumbesaran organisma multisel, penggantian sel rosak/mati (cth: sel kulit, eritrosit), penyembuhan luka, dan pembiakan aseks (cth: pertunasan yis, pembiakan vegetatif)."
        ],
        "verbatim": [
          "Profasa: Kromatin menebal dan memendek menjadi kromosom kelihatan jelas; sentriol bergerak ke kutub bertentangan; gentian gelendong mula terbentuk; nukleolus dan membran nukleus terurai.",
          "Metafasa: Kromosom tersusun sebaris pada satah khatulistiwa; gentian gelendong melekat pada sentromer setiap kromatid kembar.",
          "Anafasa: Sentromer membahagi dua; gentian gelendong memendek menarik kromatid kembar berpisah ke kutub bertentangan; kromatid kini dikenali sebagai kromosom anak.",
          "Telofasa: Kromosom anak sampai ke kutub sel; kromosom menyahkondensasi menjadi benang kromatin halus; membran nukleus dan nukleolus terbentuk semula; gentian gelendong lenyap.",
          "Sitokinesis:\n  • Sel Haiwan: Membran plasma mencerut ke dalam di bahagian tengah membentuk alur pembahagian sehingga sel terputus dua.\n  • Sel Tumbuhan: Vesikel daripada jasad Golgi bergabung membentuk plat sel di satah khatulistiwa, membesar ke luar membentuk dinding sel baharu.",
          "Kepentingan Mitosis: Tumbesaran organisma multisel, penggantian sel rosak/mati (cth: sel kulit, eritrosit), penyembuhan luka, dan pembiakan aseks (cth: pertunasan yis, pembiakan vegetatif)."
        ],
        "explanation": "Pembahagian nukleus sel soma menghasilkan 2 sel anak seiras secara genetik (2n → 2n)."
      },
      {
        "subtopic": "6.3 Meiosis dan Pembentukan Gamet",
        "summary": "Pembahagian sel pembiakan menghasilkan 4 sel gamet haploid tak seiras (2n → n).",
        "points": [
          "Meiosis I (Pengurangan bilangan kromosom dari diploid 2n ke haploid n):\n  • Profasa I: Kromosom homolog berpasangan (sinapsis) membentuk bivalen/tetrad. Pindah silang berlaku pada kiasma di mana pertukaran segmen bahan genetik berlaku (sumber variasi genetik!).\n  • Metafasa I: Pasangan kromosom homolog tersusun di satah khatulistiwa secara rawak (penyusunan bebas).\n  • Anafasa I: Kromosom homolog berpisah dan ditarik ke kutub bertentangan (kromatid kembar masih terikat pada sentromer).\n  • Telofasa I: Terbentuk dua sel anak haploid (n).",
          "Meiosis II (Menyerupai mitosis tetapi bermula dengan sel haploid):\n  • Profasa II, Metafasa II, Anafasa II (kromatid kembar berpisah), Telofasa II.\n  • Menghasilkan 4 sel anak gamet haploid (n) yang berbeza secara genetik antara satu sama lain dan berbeza daripada sel induk.",
          "Perbezaan Mitosis vs Meiosis:\n  • Mitosis berlaku dalam sel soma, 1 kali pembahagian, tiada pindah silang, hasilkan 2 sel diploid (2n) seiras genetik.\n  • Meiosis berlaku dalam sel gonad (testis/ovari/anter), 2 kali pembahagian, ada pindah silang, hasilkan 4 sel haploid (n) bervariasi."
        ],
        "verbatim": [
          "Meiosis I (Pengurangan bilangan kromosom dari diploid 2n ke haploid n):\n  • Profasa I: Kromosom homolog berpasangan (sinapsis) membentuk bivalen/tetrad. Pindah silang berlaku pada kiasma di mana pertukaran segmen bahan genetik berlaku (sumber variasi genetik!).\n  • Metafasa I: Pasangan kromosom homolog tersusun di satah khatulistiwa secara rawak (penyusunan bebas).\n  • Anafasa I: Kromosom homolog berpisah dan ditarik ke kutub bertentangan (kromatid kembar masih terikat pada sentromer).\n  • Telofasa I: Terbentuk dua sel anak haploid (n).",
          "Meiosis II (Menyerupai mitosis tetapi bermula dengan sel haploid):\n  • Profasa II, Metafasa II, Anafasa II (kromatid kembar berpisah), Telofasa II.\n  • Menghasilkan 4 sel anak gamet haploid (n) yang berbeza secara genetik antara satu sama lain dan berbeza daripada sel induk.",
          "Perbezaan Mitosis vs Meiosis:\n  • Mitosis berlaku dalam sel soma, 1 kali pembahagian, tiada pindah silang, hasilkan 2 sel diploid (2n) seiras genetik.\n  • Meiosis berlaku dalam sel gonad (testis/ovari/anter), 2 kali pembahagian, ada pindah silang, hasilkan 4 sel haploid (n) bervariasi."
        ],
        "explanation": "Pembahagian sel pembiakan menghasilkan 4 sel gamet haploid tak seiras (2n → n)."
      },
      {
        "subtopic": "6.4 Isu Pembahagian Sel terhadap Kesihatan Manusia",
        "summary": "Kanser akibat mitosis tak terkawal dan keabnormalan kromosom akibat tak disjungsi.",
        "points": [
          "Kanser: Mutasi pada gen pengawal kitar sel (onkogen) akibat pendedahan karsinogen (asap rokok, sinaran UV, sinar-X) menyebabkan sel membahagi secara mitosis berterusan tanpa kawalan membentuk tumor. Tumor malignan merebak ke tisu lain melalui salur darah/limfa (metastasis).",
          "Tak Disjungsi (Nondisjunction): Kegagalan kromosom homolog atau kromatid kembar berpisah semasa Anafasa I atau Anafasa II.\n  • Sindrom Down (Trisomi 21): Gamet mempunyai 24 kromosom (ekstra kromosom 21) disenyawakan menghasilkan zigot dengan 47 kromosom (45 + XY atau 45 + XX). Ciri: mata sepet, batang hidung lepek, lidah terjelir, kerencatan mental.\n  • Sindrom Turner (44 + XO = 45 kromosom, perempuan mandul ketiadaan satu kromosom X).\n  • Sindrom Klinefelter (44 + XXY = 47 kromosom, lelaki dengan ciri kewanitaan dan mandul)."
        ],
        "verbatim": [
          "Kanser: Mutasi pada gen pengawal kitar sel (onkogen) akibat pendedahan karsinogen (asap rokok, sinaran UV, sinar-X) menyebabkan sel membahagi secara mitosis berterusan tanpa kawalan membentuk tumor. Tumor malignan merebak ke tisu lain melalui salur darah/limfa (metastasis).",
          "Tak Disjungsi (Nondisjunction): Kegagalan kromosom homolog atau kromatid kembar berpisah semasa Anafasa I atau Anafasa II.\n  • Sindrom Down (Trisomi 21): Gamet mempunyai 24 kromosom (ekstra kromosom 21) disenyawakan menghasilkan zigot dengan 47 kromosom (45 + XY atau 45 + XX). Ciri: mata sepet, batang hidung lepek, lidah terjelir, kerencatan mental.\n  • Sindrom Turner (44 + XO = 45 kromosom, perempuan mandul ketiadaan satu kromosom X).\n  • Sindrom Klinefelter (44 + XXY = 47 kromosom, lelaki dengan ciri kewanitaan dan mandul)."
        ],
        "explanation": "Kanser akibat mitosis tak terkawal dan keabnormalan kromosom akibat tak disjungsi."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Profasa I Meiosis: Pindah Silang & Sinapsis",
        "detail": "Kromosom homolog berpasangan membentuk bivalen melalui sinapsis. Kromatid bukan saudara bersilang pada kiasma dan bertukar segmen bahan genetik (pindah silang), menghasilkan kombinasi gen baharu.",
        "tip": "Pindah silang merupakan punca utama variasi genetik dalam organisma membiak secara seks."
      },
      {
        "step": "Langkah 2",
        "title": "Metafasa I & Penyusunan Bebas Kromosom",
        "detail": "Pasangan kromosom homolog tersusun secara rawak di satah khatulistiwa sel. Gentian gelendong dari kedua-dua kutub melekat pada sentromer setiap kromosom homolog.",
        "tip": "Penyusunan bebas kromosom homolog menambah lagi variasi gamet yang terhasil."
      },
      {
        "step": "Langkah 3",
        "title": "Anafasa & Pengasingan Bahan Genetik",
        "detail": "Gentian gelendong memendek menarik kromosom homolog ke kutub sel bertentangan (pada Meiosis I sentromer belum membelah; sentromer hanya membelah pada Anafasa Mitosis & Anafasa II).",
        "tip": "Pengasingan tidak lengkap boleh menyebabkan peristiwa tak disjungsi (cth: Sindrom Down)."
      },
      {
        "step": "Langkah 4",
        "title": "Telofasa & Sitokinesis",
        "detail": "Membran nukleus terbentuk semula mengelilingi kromosom di setiap kutub. Sitoplasma membahagi menghasilkan 2 sel anak diploid (Mitosis) atau 4 sel anak haploid (Meiosis).",
        "tip": "Sitokinesis sel haiwan membentuk alur pembahagian; sel tumbuhan membentuk plat sel."
      }
    ],
    "keypoints": [
      {
        "term": "Sinapsis",
        "meaning": "Proses perpasangan kromosom homolog secara membujur semasa Profasa I meiosis.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Kiasma",
        "meaning": "Titik persilangan fizikal antara kromatid bukan kembar kromosom homolog tempat berlakunya pertukaran segmen DNA (pindah silang).",
        "badge": "Istilah SPM"
      },
      {
        "term": "Kromatid Kembar",
        "meaning": "Dua salinan seiras satu kromosom yang terhasil melalui replikasi DNA dalam fasa S dan bercantum pada sentromer.",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Tak Disjungsi",
        "meaning": "Kegagalan kromosom homolog berpisah semasa Anafasa I atau kromatid kembar berpisah semasa Anafasa II, menghasilkan gamet dengan bilangan kromosom abnormal (n+1 atau n-1).",
        "badge": "Mekanisme"
      },
      {
        "term": "Metastasis",
        "meaning": "Penyebaran sel-sel kanser dari tumor primer ke bahagian tubuh yang lain melalui aliran darah atau sistem limfa.",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Pada fasa kitar sel manakah proses replikasi molekul DNA berlaku?",
        "options": [
          "Fasa G₁",
          "Fasa S (Sintesis)",
          "Fasa G₂",
          "Fasa Telofasa"
        ],
        "answer": 1,
        "explanation": "Replikasi DNA berlaku secara khusus dalam Fasa S (Synthesis phase) Interfasa, menggandakan kandungan DNA sebelum sel membahagi."
      },
      {
        "q": "Apakah peristiwa penting yang berlaku semasa Profasa I meiosis yang menghasilkan variasi genetik dalam kalangan anak?",
        "options": [
          "Pembelahan sentromer",
          "Pindah silang antara kromatid bukan kembar kromosom homolog",
          "Sitokinesis plat sel",
          "Penguraian nukleolus"
        ],
        "answer": 1,
        "explanation": "Pindah silang (crossing over) di kiasma semasa Profasa I menukarkan segmen genetik antara kromatid bukan kembar, menghasilkan kombinasi gen baharu (rekombinasi)."
      },
      {
        "q": "Seorang individu mempunyai 47 kromosom dalam setiap sel somanya dengan kehadiran tiga kromosom pada nombor 21. Apakah keadaan genetik individu ini?",
        "options": [
          "Sindrom Klinefelter",
          "Sindrom Turner",
          "Sindrom Down (Trisomi 21)",
          "Anemia sel sabit"
        ],
        "answer": 2,
        "explanation": "Sindrom Down berlaku akibat kegagalan pasangan kromosom ke-21 berpisah semasa meiosis (tak disjungsi), menghasilkan tiga kromosom 21 (trisomi 21) dengan jumlah 47 kromosom."
      },
      {
        "q": "Apakah perbezaan utama sitokinesis antara sel haiwan dengan sel tumbuhan?",
        "options": [
          "Sel haiwan membentuk plat sel, sel tumbuhan membentuk alur pembahagian",
          "Sel haiwan membentuk alur pembahagian melalui pencerutan membran plasma, sel tumbuhan membentuk plat sel daripada vesikel jasad Golgi",
          "Sel tumbuhan membahagi sebelum mitosis tamat",
          "Sel haiwan tidak mengalami sitokinesis"
        ],
        "answer": 1,
        "explanation": "Dinding sel selulosa tumbuhan yang tegar menghalang pencerutan membran. Oleh itu, plat sel dibina di tengah sel tumbuhan melalui percantuman vesikel jasad Golgi."
      },
      {
        "q": "Jika bilangan kromosom diploid (2n) bagi lalat buah ialah 8, berapakah bilangan kromosom dalam sel sperma dan sel kulit lalat tersebut?",
        "options": [
          "Sel sperma = 8, Sel kulit = 8",
          "Sel sperma = 4, Sel kulit = 8",
          "Sel sperma = 8, Sel kulit = 4",
          "Sel sperma = 16, Sel kulit = 8"
        ],
        "answer": 1,
        "explanation": "Sel sperma ialah gamet haploid (n = 4) yang dihasilkan melalui meiosis, manakala sel kulit ialah sel soma diploid (2n = 8) yang terhasil melalui mitosis."
      }
    ],
    "struktur": [
      {
        "q": "Rajah menunjukkan satu peringkat pembahagian sel di mana kromatid kembar sedang berpisah dan ditarik ke kutub bertentangan.\n(a) Kenal pasti peringkat pembahagian sel tersebut dan nyatakan sama ada ia berlaku dalam mitosis atau meiosis I.\n(b) Terangkan kesan terhadap bilangan kromosom sel anak sekiranya satu daripada kromatid kembar gagal berpisah semasa peringkat ini.",
        "skema": [
          "(a) Peringkat Anafasa (Mitosis) atau Anafasa II (Meiosis II) [1m]. Kromatid kembar berpisah pada sentromer dan ditarik oleh gentian gelendong yang memendek [1m].",
          "(b) Fenomena ini dikenali sebagai tak disjungsi (nondisjunction) [1m]. Satu sel anak akan menerima kromosom berlebihan (n+1 atau 2n+1) manakala satu lagi sel anak kekurangan satu kromosom (n-1 atau 2n-1) [1m]. Keadaan ini membawa kepada keabnormalan genetik seperti Sindrom Down atau Sindrom Turner sekiranya gamet tersebut disenyawakan [1m]."
        ]
      }
    ]
  },
  {
    "id": "bio-bab7",
    "babNum": "BAB 7",
    "title": "RESPIRASI SEL",
    "icon": "🫁",
    "anyflipPages": "Halaman 120 – 134 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Respirasi sel membekalkan tenaga ATP untuk mengekalkan semua aktiviti biokimia organisma hidup. Bab ini memperincikan respirasi aerob (glikolisis dan pengoksidaan piruvat dalam mitokondrion), serta fermentasi alkohol (pada yis dan tumbuhan) dan fermentasi asid laktik (pada sel otot manusia dan bakteria Lactobacillus), berserta konsep hutang oksigen semasa senaman cergas.",
    "notes": [
      {
        "subtopic": "7.1 Penghasilan Tenaga & Respirasi Aerob",
        "summary": "Penguraian lengkap glukosa dengan kehadiran oksigen menghasilkan 2898 kJ (38 ATP).",
        "points": [
          "Peranan ATP: Adenosina trifosfat (ATP) ialah pembawa tenaga segera sel. Apabila ikatan fosfat terminal dihidrolisiskan: ATP → ADP + Pᵢ + 30.5 kJ mol⁻¹.",
          "Respirasi Aerob: Penguraian glukosa secara lengkap dengan kehadiran oksigen:\n  C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 2898 kJ (38 ATP)",
          "Peringkat Respirasi Aerob:\n  • Glikolisis: Berlaku dalam sitoplasma tanpa oksigen. 1 molekul glukosa (6C) dipecahkan kepada 2 molekul piruvat (3C), menghasilkan 2 ATP bersih dan 2 NADH.\n  • Pengoksidaan Piruvat & Kitar Krebs: Berlaku di dalam matriks mitokondrion. Piruvat dioksidakan sepenuhnya membebaskan CO₂, H₂O, dan menjana tenaga melalui rantai pengangkutan elektron (krista mitokondrion) menghasilkan 36 ATP lagi."
        ],
        "verbatim": [
          "Peranan ATP: Adenosina trifosfat (ATP) ialah pembawa tenaga segera sel. Apabila ikatan fosfat terminal dihidrolisiskan: ATP → ADP + Pᵢ + 30.5 kJ mol⁻¹.",
          "Respirasi Aerob: Penguraian glukosa secara lengkap dengan kehadiran oksigen:\n  C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 2898 kJ (38 ATP)",
          "Peringkat Respirasi Aerob:\n  • Glikolisis: Berlaku dalam sitoplasma tanpa oksigen. 1 molekul glukosa (6C) dipecahkan kepada 2 molekul piruvat (3C), menghasilkan 2 ATP bersih dan 2 NADH.\n  • Pengoksidaan Piruvat & Kitar Krebs: Berlaku di dalam matriks mitokondrion. Piruvat dioksidakan sepenuhnya membebaskan CO₂, H₂O, dan menjana tenaga melalui rantai pengangkutan elektron (krista mitokondrion) menghasilkan 36 ATP lagi."
        ],
        "explanation": "Penguraian lengkap glukosa dengan kehadiran oksigen menghasilkan 2898 kJ (38 ATP)."
      },
      {
        "subtopic": "7.2 Fermentasi (Respirasi Anaerob)",
        "summary": "Penguraian glukosa tak lengkap tanpa oksigen atau oksigen terhad menghasilkan sedikit tenaga (2 ATP).",
        "points": [
          "Fermentasi Alkohol (Yis & Tumbuhan Banjir):\n  • Glukosa diuraikan kepada etanol, karbon dioksida dan 210 kJ (2 ATP):\n    C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + 210 kJ (2 ATP)\n  • Aplikasi: Yis Saccharomyces cerevisiae dalam pembuatan roti (gas CO₂ menaikkan adunan doh, etanol meruap semasa membakar) dan pembuatan minuman beralkohol/wain.",
          "Fermentasi Asid Laktik (Sel Otot Manusia & Bakteria Lactobacillus):\n  • Glukosa diuraikan kepada asid laktik dan 150 kJ (2 ATP) tanpa pembebasan CO₂:\n    C₆H₁₂O₆ → 2 Asid Laktik (C₃H₆O₃) + 150 kJ (2 ATP)\n  • Aplikasi Industri: Bakteria Lactobacillus memfermentasikan laktosa susu menghasilkan asid laktik yang menggumpalkan kasein susu untuk membuat dadih (yogurt) dan keju."
        ],
        "verbatim": [
          "Fermentasi Alkohol (Yis & Tumbuhan Banjir):\n  • Glukosa diuraikan kepada etanol, karbon dioksida dan 210 kJ (2 ATP):\n    C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + 210 kJ (2 ATP)\n  • Aplikasi: Yis Saccharomyces cerevisiae dalam pembuatan roti (gas CO₂ menaikkan adunan doh, etanol meruap semasa membakar) dan pembuatan minuman beralkohol/wain.",
          "Fermentasi Asid Laktik (Sel Otot Manusia & Bakteria Lactobacillus):\n  • Glukosa diuraikan kepada asid laktik dan 150 kJ (2 ATP) tanpa pembebasan CO₂:\n    C₆H₁₂O₆ → 2 Asid Laktik (C₃H₆O₃) + 150 kJ (2 ATP)\n  • Aplikasi Industri: Bakteria Lactobacillus memfermentasikan laktosa susu menghasilkan asid laktik yang menggumpalkan kasein susu untuk membuat dadih (yogurt) dan keju."
        ],
        "explanation": "Penguraian glukosa tak lengkap tanpa oksigen atau oksigen terhad menghasilkan sedikit tenaga (2 ATP)."
      },
      {
        "subtopic": "7.3 Hutang Oksigen dalam Otot Manusia",
        "summary": "Mekanisme keletihan otot semasa larian pecut 100 meter dan pemulihan oksigen.",
        "points": [
          "Semasa Senaman Cergas (Cth: Lari Pecut 100m): Permintaan oksigen oleh sel otot rangka melebihi bekalan oksigen yang dapat dihantar oleh sistem peredaran darah. Otot berada dalam keadaan kekurangan oksigen.",
          "Pembentukan Hutang Oksigen: Sel otot beralih kepada fermentasi asid laktik untuk membekalkan ATP segera. Pengumpulan asid laktik dalam tisu otot menyebabkan kekejangan otot (kram) dan kelesuan otot.",
          "Pembayaran Hutang Oksigen: Selepas larian berhenti, atlet bernafas secara dalam dan tercungap-cungap untuk menyedut lebih banyak oksigen. Oksigen berlebihan ini digunakan untuk mengoksidakan asid laktik di dalam hati:\n  • Kira-kira 1/6 asid laktik dioksidakan menjadi CO₂, H₂O dan tenaga.\n  • Baki 5/6 asid laktik ditukarkan semula menjadi glukosa dan disimpan sebagai glikogen di hati. Apabila semua asid laktik disingkirkan, hutang oksigen telah dibayar penuh."
        ],
        "verbatim": [
          "Semasa Senaman Cergas (Cth: Lari Pecut 100m): Permintaan oksigen oleh sel otot rangka melebihi bekalan oksigen yang dapat dihantar oleh sistem peredaran darah. Otot berada dalam keadaan kekurangan oksigen.",
          "Pembentukan Hutang Oksigen: Sel otot beralih kepada fermentasi asid laktik untuk membekalkan ATP segera. Pengumpulan asid laktik dalam tisu otot menyebabkan kekejangan otot (kram) dan kelesuan otot.",
          "Pembayaran Hutang Oksigen: Selepas larian berhenti, atlet bernafas secara dalam dan tercungap-cungap untuk menyedut lebih banyak oksigen. Oksigen berlebihan ini digunakan untuk mengoksidakan asid laktik di dalam hati:\n  • Kira-kira 1/6 asid laktik dioksidakan menjadi CO₂, H₂O dan tenaga.\n  • Baki 5/6 asid laktik ditukarkan semula menjadi glukosa dan disimpan sebagai glikogen di hati. Apabila semua asid laktik disingkirkan, hutang oksigen telah dibayar penuh."
        ],
        "explanation": "Mekanisme keletihan otot semasa larian pecut 100 meter dan pemulihan oksigen."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Glikolisis dalam Sitoplasma (Tanpa Oksigen)",
        "detail": "Satu molekul glukosa 6-karbon diuraikan kepada dua molekul asid piruvat 3-karbon melalui siri tindak balas enzim di sitoplasma, menghasilkan keuntungan bersih 2 molekul ATP dan 2 NADH.",
        "tip": "Glikolisis berlaku dalam kedua-dua respirasi aerob dan fermentasi."
      },
      {
        "step": "Langkah 2",
        "title": "Pengoksidaan Piruvat & Kitar Krebs (Mitokondrion)",
        "detail": "Sekiranya terdapat bekalan O₂, piruvat diangkut ke matriks mitokondrion dan ditukarkan kepada Asetil-KoA, membebaskan CO₂ dan memasuki Kitar Krebs untuk menghasilkan pembawa elektron NADH dan FADH₂.",
        "tip": "Mitokondrion digelar pusat jana kuasa sel kerana sintesis ATP terbesar berlaku di sini."
      },
      {
        "step": "Langkah 3",
        "title": "Fosforilasi Oksidatif & Rantaian Pengangkutan Elektron",
        "detail": "Elektron bertenaga tinggi dialirkan merentasi protein membran dalam mitokondrion memacu sintesis kira-kira 34-36 ATP. Oksigen bertindak sebagai penerima elektron dan proton terakhir menghasilkan molekul air (H₂O).",
        "tip": "Persamaan penuh respirasi aerob: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 2898 kJ (38 ATP)."
      },
      {
        "step": "Langkah 4",
        "title": "Pembayaran Hutang Oksigen Selepas Senaman Cergas",
        "detail": "Semasa lari pecut, otot menghasilkan asid laktik melalui fermentasi. Selepas berlari, pernafasan laju dan dalam membekalkan oksigen tambahan untuk mengoksidakan asid laktik di hepar menjadi CO₂ dan air atau glukosa.",
        "tip": "Hutang oksigen lunas apabila kepekatan asid laktik darah kembali normal."
      }
    ],
    "keypoints": [
      {
        "term": "ATP (Adenosina Trifosfat)",
        "meaning": "Molekul penyimpan tenaga universal yang membebaskan tenaga segera apabila ikatan fosfatnya dihidrolisiskan.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Glikolisis",
        "meaning": "Peringkat awal respirasi sel dalam sitoplasma yang memecahkan satu molekul glukosa (6C) kepada dua molekul piruvat (3C) tanpa memerlukan oksigen.",
        "badge": "Istilah SPM"
      },
      {
        "term": "Fermentasi",
        "meaning": "Penguraian glukosa secara tidak lengkap dalam keadaan ketiadaan oksigen atau oksigen terhad, membebaskan kuantiti tenaga yang sedikit (2 ATP).",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Hutang Oksigen",
        "meaning": "Kuantiti oksigen tambahan yang diperlukan oleh tubuh selepas aktiviti cergas untuk mengoksidakan asid laktik yang terkumpul di dalam sel otot dan hati.",
        "badge": "Mekanisme"
      },
      {
        "term": "Asid Laktik",
        "meaning": "Hasil sampingan fermentasi dalam sel otot manusia yang menyebabkan kelesuan, kesakitan dan kekejangan otot.",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Berapakah jumlah molekul ATP bersih yang dihasilkan daripada satu molekul glukosa melalui proses respirasi aerob lengkap berbanding fermentasi?",
        "options": [
          "Aerob = 2 ATP, Fermentasi = 38 ATP",
          "Aerob = 38 ATP, Fermentasi = 2 ATP",
          "Aerob = 4 ATP, Fermentasi = 4 ATP",
          "Aerob = 100 ATP, Fermentasi = 0 ATP"
        ],
        "answer": 1,
        "explanation": "Respirasi aerob menguraikan glukosa secara lengkap menghasilkan 38 ATP (2898 kJ), manakala fermentasi hanya menghasilkan 2 ATP bersih (150–210 kJ) melalui glikolisis."
      },
      {
        "q": "Apakah fungsi utama organisma yis Saccharomyces cerevisiae dalam proses pembuatan roti?",
        "options": [
          "Menghasilkan asid laktik untuk memutihkan tepung",
          "Membebaskan gas karbon dioksida (CO₂) yang memerangkap gelembung udara dan menaikkan adunan roti",
          "Menghasilkan etanol sebagai bahan pengawet",
          "Menguraikan gluten menjadi gula ringkas"
        ],
        "answer": 1,
        "explanation": "Semasa fermentasi alkohol oleh yis, gas CO₂ yang dibebaskan mengembang dan menaikkan doh roti, menjadikannya gebu dan lembut. Etanol meruap semasa proses pembakaran."
      },
      {
        "q": "Mengapakah seorang pelari pecut 100 meter terus bernafas dengan laju dan dalam selepas melintasi garisan penamat?",
        "options": [
          "Untuk meningkatkan suhu badannya",
          "Untuk menyedut oksigen berlebihan bagi mengoksidakan asid laktik terkumpul di hati (membayar hutang oksigen)",
          "Untuk mengeluarkan semua gas oksigen daripada peparu",
          "Untuk menghalang glukosa daripada diserap semula"
        ],
        "answer": 1,
        "explanation": "Pernafasan tercungap-cungap membekalkan oksigen tambahan untuk 'membayar hutang oksigen', iaitu mengoksidakan asid laktik di dalam hati menjadi CO₂, H₂O dan glukosa."
      },
      {
        "q": "Tumbuhan padi yang hidup di dalam sawah bertakung air dapat bertahan daripada lemas kerana berupaya menjalankan:",
        "options": [
          "Respirasi aerob berkadar tinggi menggunakan udara air",
          "Fermentasi alkohol dan mempunyai enzim alkohol dehidrogenase yang menguraikan etanol toksik",
          "Fotosintesis tanpa cahaya pada waktu malam",
          "Penyerapan oksigen melalui kutikel berlilin"
        ],
        "answer": 1,
        "explanation": "Sel akar pokok padi menjalankan fermentasi alkohol dalam keadaan anaerob bertakung air dan mempunyai toleransi tinggi terhadap etanol serta enzim alkohol dehidrogenase untuk menguraikan etanol."
      },
      {
        "q": "Persamaan perkataan berikut mewakili satu proses respirasi:\nGlukosa -> Asid Laktik + 150 kJ tenaga\nDi manakah proses ini berlaku dalam tubuh manusia?",
        "options": [
          "Dalam sel darah merah semasa berehat",
          "Dalam sel otot rangka semasa aktiviti cergas kekurangan oksigen",
          "Di dalam sel neuron otak",
          "Di dalam lumen usus kecil semasa pencernaan"
        ],
        "answer": 1,
        "explanation": "Semasa senaman intensiti tinggi (seperti larian pecut), sel otot rangka mengalami kekurangan oksigen sementara dan menjalankan fermentasi asid laktik untuk membekalkan ATP pantas."
      }
    ],
    "struktur": [
      {
        "q": "Satu eksperimen dijalankan untuk mengkaji fermentasi yis dalam larutan glukosa yang telah dididihkan dan disejukkan, dengan lapisan minyak parafin diletakkan di atas larutan tersebut.\n(a) Nyatakan tujuan mendidihkan larutan glukosa dan meletakkan lapisan minyak parafin.\n(b) Terangkan perubahan yang dapat diperhatikan pada air kapur dalam tabung uji bersebelahan selepas 1 jam.",
        "skema": [
          "(a) Mendidihkan larutan glukosa menyingkirkan semua oksigen terlarut di dalam air [1m]. Lapisan minyak parafin menghalang oksigen atmosfera daripada melarut semula ke dalam larutan glukosa, bagi memastikan keadaan anaerob [1m].",
          "(b) Air kapur menjadi keruh [1m]. Yis menjalankan fermentasi alkohol tanpa oksigen dan membebaskan gas karbon dioksida (CO₂) yang bertindak balas dengan kalsium hidroksida membentuk mendakan putih kalsium karbonat [2m]."
        ]
      }
    ]
  },
  {
    "id": "bio-bab8",
    "babNum": "BAB 8",
    "title": "SISTEM RESPIRASI DALAM MANUSIA DAN HAIWAN",
    "icon": "🫁",
    "anyflipPages": "Halaman 136 – 152 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Sistem respirasi memastikan pertukaran gas oksigen dan karbon dioksida berlaku secara efisien antara organisma dengan persekitarannya. Bab ini membandingkan penyesuaian struktur respirasi serangga (sistem trakea), ikan (insang dengan pertukaran arus bertentangan), katak (kulit luar lembap dan peparu), serta manusia (alveolus peparu), mekanisme pernafasan berdasarkan tekanan dan isi padu toraks, pertukaran dan pengangkutan gas dalam darah, serta penyakit sistem pernafasan manusia.",
    "notes": [
      {
        "subtopic": "8.1 Sistem Respirasi Haiwan dan Manusia",
        "summary": "Penyesuaian permukaan respirasi: nisbah luas permukaan/isi padu (J/I) besar, nipis setebal satu sel, sentiasa lembap, jaringan kapilari darah padat.",
        "points": [
          "Serangga: Sistem trakea terdiri daripada liang spirakel berinjap di toraks/abdomen -> trakea bercabang ke trakeol halus sentiasa berisi cecair respirasi -> gas O₂ meresap terus ke dalam sel tisu badan tanpa sistem peredaran darah.",
          "Ikan: Insang dilindungi operkulum. Setiap insang terdiri daripada lengkung insang, filamen insang dengan unjuran lamela nipis yang banyak. Sistem Pertukaran Arus Bertentangan (Countercurrent exchange): Aliran darah dalam kapilari lamela mengalir dalam arah bertentangan dengan aliran air, mengekalkan kecerunan kepekatan O₂ sepanjang lamela dan membolehkan lebih 80% O₂ terlarut diserap.",
          "Katak (Amfibia): Kulit luar sentiasa lembap diselaputi lendir (respirasi kulit) kaya jaring kapilari darah semasa berehat; peparu ringkas berdinding nipis dan berlipat-lipat semasa aktif.",
          "Manusia: Alveolus berbilang juta dalam peparu menyediakan luas permukaan resapan yang sangat besar, dinding setebal satu sel epitelium skuamosa, lapisan lembap melarutkan gas, dikelilingi jaring kapilari darah padat."
        ],
        "verbatim": [
          "Serangga: Sistem trakea terdiri daripada liang spirakel berinjap di toraks/abdomen -> trakea bercabang ke trakeol halus sentiasa berisi cecair respirasi -> gas O₂ meresap terus ke dalam sel tisu badan tanpa sistem peredaran darah.",
          "Ikan: Insang dilindungi operkulum. Setiap insang terdiri daripada lengkung insang, filamen insang dengan unjuran lamela nipis yang banyak. Sistem Pertukaran Arus Bertentangan (Countercurrent exchange): Aliran darah dalam kapilari lamela mengalir dalam arah bertentangan dengan aliran air, mengekalkan kecerunan kepekatan O₂ sepanjang lamela dan membolehkan lebih 80% O₂ terlarut diserap.",
          "Katak (Amfibia): Kulit luar sentiasa lembap diselaputi lendir (respirasi kulit) kaya jaring kapilari darah semasa berehat; peparu ringkas berdinding nipis dan berlipat-lipat semasa aktif.",
          "Manusia: Alveolus berbilang juta dalam peparu menyediakan luas permukaan resapan yang sangat besar, dinding setebal satu sel epitelium skuamosa, lapisan lembap melarutkan gas, dikelilingi jaring kapilari darah padat."
        ],
        "explanation": "Penyesuaian permukaan respirasi: nisbah luas permukaan/isi padu (J/I) besar, nipis setebal satu sel, sentiasa lembap, jaringan kapilari darah padat."
      },
      {
        "subtopic": "8.2 Mekanisme Pernafasan Manusia",
        "summary": "Tindakan otot interkosta dan diafragma mengikut Hukum Boyle (Isi padu berkadar songsang dengan tekanan).",
        "points": [
          "Tarikan Nafas (Inhalasi):\n  • Otot interkosta luar mengecut, otot interkosta dalam mengendur -> Sangkar rusuk bergerak ke atas dan ke luar.\n  • Otot diafragma mengecut -> Diafragma mendatar dan bergerak ke bawah.\n  • Isi padu rongga toraks bertambah -> Tekanan udara dalam alveolus menurun (di bawah tekanan atmosfera).\n  • Udara atmosfera dipaksa masuk ke dalam peparu.",
          "Hembusan Nafas (Ekshalasi):\n  • Otot interkosta luar mengendur, otot interkosta dalam mengecut -> Sangkar rusuk bergerak ke bawah dan ke dalam.\n  • Otot diafragma mengendur -> Diafragma melengkung ke atas berbentuk kubah.\n  • Isi padu rongga toraks berkurang -> Tekanan udara dalam alveolus meningkat (melebihi tekanan atmosfera).\n  • Udara dipaksa keluar dari peparu."
        ],
        "verbatim": [
          "Tarikan Nafas (Inhalasi):\n  • Otot interkosta luar mengecut, otot interkosta dalam mengendur -> Sangkar rusuk bergerak ke atas dan ke luar.\n  • Otot diafragma mengecut -> Diafragma mendatar dan bergerak ke bawah.\n  • Isi padu rongga toraks bertambah -> Tekanan udara dalam alveolus menurun (di bawah tekanan atmosfera).\n  • Udara atmosfera dipaksa masuk ke dalam peparu.",
          "Hembusan Nafas (Ekshalasi):\n  • Otot interkosta luar mengendur, otot interkosta dalam mengecut -> Sangkar rusuk bergerak ke bawah dan ke dalam.\n  • Otot diafragma mengendur -> Diafragma melengkung ke atas berbentuk kubah.\n  • Isi padu rongga toraks berkurang -> Tekanan udara dalam alveolus meningkat (melebihi tekanan atmosfera).\n  • Udara dipaksa keluar dari peparu."
        ],
        "explanation": "Tindakan otot interkosta dan diafragma mengikut Hukum Boyle (Isi padu berkadar songsang dengan tekanan)."
      },
      {
        "subtopic": "8.3 Pengangkutan Gas dalam Darah & 8.4 Isu Kesihatan",
        "summary": "Pengangkutan O₂ sebagai oksihemoglobin, pengangkutan CO₂ sebagai ion bikarbonat, dan patologi peparu.",
        "points": [
          "Pengangkutan Oksigen: Dalam kapilari alveolus dengan tekanan separa O₂ tinggi, oksigen bergabung dengan hemoglobin membentuk Oksihemoglobin:\n  Hb + 4O₂ ⇌ Hb(O₂)₄. Di tisu respirasi dengan pO₂ rendah, oksihemoglobin terurai membebaskan O₂ ke sel tisu.",
          "Pengangkutan Karbon Dioksida: CO₂ diangkut melalui 3 cara:\n  • 70% sebagai ion bikarbonat (HCO₃⁻) dalam plasma darah (dibantu oleh enzim karbonik anhidrase dalam eritrosit).\n  • 23% terikat pada hemoglobin sebagai Karbaminohemoglobin (HbCO₂).\n  • 7% terlarut dalam plasma darah sebagai asid karbonik (H₂CO₃).",
          "Penyakit Respirasi:\n  • Emfisema: Dinding alveolus rosak dan hilang keanjalan akibat asap rokok, mengurangkan luas permukaan pertukaran gas.\n  • Bronkitis Kronik: Keradangan pada bronkus dengan penghasilan mukus berlebihan dan silium rosak.\n  • Asma: Kekejangan otot dinding bronkiol dan keradangan mukosa menyempitkan laluan udara."
        ],
        "verbatim": [
          "Pengangkutan Oksigen: Dalam kapilari alveolus dengan tekanan separa O₂ tinggi, oksigen bergabung dengan hemoglobin membentuk Oksihemoglobin:\n  Hb + 4O₂ ⇌ Hb(O₂)₄. Di tisu respirasi dengan pO₂ rendah, oksihemoglobin terurai membebaskan O₂ ke sel tisu.",
          "Pengangkutan Karbon Dioksida: CO₂ diangkut melalui 3 cara:\n  • 70% sebagai ion bikarbonat (HCO₃⁻) dalam plasma darah (dibantu oleh enzim karbonik anhidrase dalam eritrosit).\n  • 23% terikat pada hemoglobin sebagai Karbaminohemoglobin (HbCO₂).\n  • 7% terlarut dalam plasma darah sebagai asid karbonik (H₂CO₃).",
          "Penyakit Respirasi:\n  • Emfisema: Dinding alveolus rosak dan hilang keanjalan akibat asap rokok, mengurangkan luas permukaan pertukaran gas.\n  • Bronkitis Kronik: Keradangan pada bronkus dengan penghasilan mukus berlebihan dan silium rosak.\n  • Asma: Kekejangan otot dinding bronkiol dan keradangan mukosa menyempitkan laluan udara."
        ],
        "explanation": "Pengangkutan O₂ sebagai oksihemoglobin, pengangkutan CO₂ sebagai ion bikarbonat, dan patologi peparu."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Mekanisme Tarikan Nafas (Inspirasi Manusia)",
        "detail": "Otot interkosta luar mengecut (otot dalam mengendur), sangkar rusuk dinaikkan ke atas dan ke luar. Otot diafragma mengecut dan mendatar. Isi padu toraks bertambah, tekanan berkurang, udara atmosfera ditekan masuk.",
        "tip": "Udara bergerak dari kawasan bertekanan tinggi (atmosfera) ke kawasan bertekanan rendah (peparu)."
      },
      {
        "step": "Langkah 2",
        "title": "Mekanisme Hembusan Nafas (Ekspirasi Manusia)",
        "detail": "Otot interkosta luar mengendur, sangkar rusuk menurun ke bawah dan ke dalam. Diafragma mengendur melengkung ke atas (kubah). Isi padu rongga toraks mengecil, tekanan meningkat memaksa udara keluar alveolus.",
        "tip": "Ekspirasi normal ialah proses pasif manakala ekspirasi cergas ialah proses aktif."
      },
      {
        "step": "Langkah 3",
        "title": "Sistem Pertukaran Arus Bertentangan dalam Insang Ikan",
        "detail": "Air beroksigen mengalir merentasi lamela insang dalam arah bertentangan dengan aliran darah di dalam kapilari insang. Kecerunan kepekatan O₂ kekal di sepanjang lamela membolehkan 80-85% oksigen diserap.",
        "tip": "Aliran bertentangan jauh lebih cekap berbanding aliran searah."
      },
      {
        "step": "Langkah 4",
        "title": "Pengangkutan Karbon Dioksida dalam Darah",
        "detail": "70% CO₂ diangkut dalam bentuk ion bikarbonat (HCO₃⁻) di dalam plasma darah (dibantu enzim karbonik anhidrase dalam eritrosit), 23% terikat pada hemoglobin sebagai karbaminohemoglobin, dan 7% larut dalam plasma.",
        "tip": "Di kapilari alveolus, ion bikarbonat ditukarkan semula kepada gas CO₂ untuk dihembus keluar."
      }
    ],
    "keypoints": [
      {
        "term": "Trakeol",
        "meaning": "Cabang paling halus dalam sistem trakea serangga yang bersentuhan terus dengan sel badan untuk pertukaran gas respirasi.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Alveolus",
        "meaning": "Kantung udara mikroskopik dalam peparu mamalia yang berdinding setebal satu sel dan dikelilingi kapilari darah untuk pertukaran gas.",
        "badge": "Istilah SPM"
      },
      {
        "term": "Pertukaran Arus Bertentangan",
        "meaning": "Mekanisme pengaliran air dan darah dalam arah bertentangan merentasi lamela insang bagi memaksimumkan resapan oksigen.",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Oksihemoglobin",
        "meaning": "Sebatian tidak stabil berwarna merah terang yang terbentuk apabila molekul oksigen mengikat pada hemoglobin dalam sel darah merah.",
        "badge": "Mekanisme"
      },
      {
        "term": "Emfisema",
        "meaning": "Penyakit respirasi kronik di mana dinding alveolus musnah dan hilang keanjalan akibat bahan toksik dalam asap rokok, menyebabkan sesak nafas.",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Bagaimanakah gas oksigen dihantar ke sel-sel tisu badan pada seekor belalang (serangga)?",
        "options": [
          "Diangkut oleh sel darah merah berhemoglobin melalui jantung",
          "Meresap terus dari trakeol halus berisi cecair ke dalam sel badan tanpa bantuan sistem peredaran",
          "Melalui bukaan kulit berlendir secara osmosis",
          "Diangkut melalui cecair limfa dalam salur tertutup"
        ],
        "answer": 1,
        "explanation": "Sistem peredaran darah serangga tidak mengangkut gas respirasi. O₂ meresap terus dari trakeol yang bersentuhan rapat dengan membran sel tisu badan."
      },
      {
        "q": "Antara pergerakan berikut, yang manakah berlaku semasa proses menarik nafas (inhalasi) pada manusia?",
        "options": [
          "Otot diafragma mengendur melengkung ke atas",
          "Otot interkosta luar mengecut dan diafragma mendatar ke bawah",
          "Isi padu rongga toraks berkurang",
          "Tekanan udara dalam peparu meningkat melebihi atmosfera"
        ],
        "answer": 1,
        "explanation": "Semasa inhalasi, otot interkosta luar mengecut (menaikkan sangkar rusuk) dan otot diafragma mengecut (mendatar ke bawah), menambah isi padu toraks dan menurunkan tekanan udara peparu."
      },
      {
        "q": "Bentuk utama pengangkutan gas karbon dioksida di dalam darah manusia ialah sebagai:",
        "options": [
          "Gas karbon dioksida terlarut bebas dalam plasma (90%)",
          "Ion bikarbonat (HCO₃⁻) dalam plasma darah (kira-kira 70%)",
          "Karbaminohemoglobin dalam eritrosit (100%)",
          "Gelembung gas karbon monoksida"
        ],
        "answer": 1,
        "explanation": "Kira-kira 70% karbon dioksida ditukarkan oleh enzim karbonik anhidrase di dalam eritrosit menjadi ion bikarbonat (HCO₃⁻) yang diangkut di dalam plasma darah."
      },
      {
        "q": "Mengapakah sistem pertukaran arus bertentangan pada insang ikan jauh lebih cekap berbanding aliran sehala selari?",
        "options": [
          "Memperlahankan aliran air supaya ikan boleh tidur",
          "Mengekalkan kecerunan kepekatan oksigen yang berterusan di sepanjang keseluruhan lamela insang",
          "Menghalang garam laut daripada meresap ke dalam darah ikan",
          "Menghasilkan haba badan untuk ikan"
        ],
        "answer": 1,
        "explanation": "Aliran air dan darah yang bertentangan memastikan air sentiasa mempunyai kepekatan O₂ lebih tinggi berbanding darah di setiap titik pertemuan, membolehkan penyerapan O₂ berterusan sehingga 80%."
      },
      {
        "q": "Seorang perokok tegar mengalami kesukaran bernafas dan batuk kronik. Ujian biopsi menunjukkan dinding alveolus peparunya telah koyak dan membentuk rongga besar yang kurang anjal. Apakah penyakit ini?",
        "options": [
          "Asma",
          "Emfisema",
          "Pneumonia bakteria",
          "Tuberkulosis"
        ],
        "answer": 1,
        "explanation": "Emfisema dicirikan oleh kemusnahan berperingkat dinding alveolus akibat tar dan asap rokok, mengurangkan luas permukaan resapan gas dan menyebabkan sesak nafas kronik."
      }
    ],
    "struktur": [
      {
        "q": "Rajah menunjukkan struktur satu alveolus yang dikelilingi oleh jaring kapilari darah manusia.\n(a) Nyatakan dua ciri penyesuaian alveolus yang membolehkan pertukaran gas berlaku secara efisien.\n(b) Terangkan bagaimana gas karbon dioksida meresap dari darah ke dalam alveolus untuk dihembus keluar.",
        "skema": [
          "(a) 1. Dinding alveolus sangat nipis, setebal satu sel epitelium skuamosa untuk memendekkan jarak resapan gas [1m]. 2. Lapisan dinding alveolus sentiasa lembap bagi melarutkan gas respirasi [1m]. 3. Dikelilingi oleh jaring kapilari darah yang padat untuk mengekalkan kecerunan resapan [1m] (pilih mana-mana 2).",
          "(b) Tekanan separa karbon dioksida (pCO₂) di dalam kapilari darah lebih tinggi daripada tekanan separa karbon dioksida di dalam alveolus [1m]. Ion bikarbonat (HCO₃⁻) diubah semula menjadi gas CO₂ di dalam eritrosit, dan CO₂ meresap menuruni kecerunan tekanan separa merentasi dinding kapilari dan dinding alveolus ke dalam rongga alveolus untuk disingkirkan semasa hembusan nafas [2m]."
        ]
      }
    ]
  },
  {
    "id": "bio-bab9",
    "babNum": "BAB 9",
    "title": "NUTRISI DAN SISTEM PENCERNAAN MANUSIA",
    "icon": "🥗",
    "anyflipPages": "Halaman 154 – 176 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Sistem pencernaan memecahkan molekul makanan kompleks kepada unit ringkas yang boleh diserap dan diasimilasikan oleh sel badan. Bab ini membincangkan pencernaan fizikal dan kimia di mulut, perut, duodenum dan ileum, peranan jus pencernaan dan enzim, penyesuaian vilus usus kecil untuk penyerapan nutrien, peranan hati dalam asimilasi dan detoksifikasi, serta penyahtinjaan dan isu kesihatan berkaitan nutrisi.",
    "notes": [
      {
        "subtopic": "9.1 Sistem Pencernaan & 9.2 Proses Pencernaan",
        "summary": "Pencernaan fizikal (kunyahan & peristalsis) dan pencernaan kimia oleh enzim.",
        "points": [
          "Mulut: Gigi mengunyah makanan (pencernaan fizikal), kelenjar liur merembeskan amilase liur (pH 6.5–7.5) yang mencernakan Kanji kepada Maltosa. Makanan dibentuk menjadi bolus.",
          "Perut: Kelenjar gastrik merembeskan Jus Gastrik mengandungi:\n  • Asid hidroklorik (HCl, pH 1.5–2.0): Membunuh bakteria, menyediakan medium asid optimum untuk enzim pepsin, dan menghentikan tindakan amilase liur.\n  • Enzim Pepsin: Menghidrolisis Protein kepada Polipeptida.\n  • Enzim Renin: Menggumpalkan kaseinogen susu menjadi kasein tak larut untuk dicerna pepsin.\n  Bolus bercampur asid membentuk kim separa cecair melalui tindakan peristalsis otot perut.",
          "Duodenum: Menerima hempedu daripada pundi hempedu dan jus pankreas daripada pankreas:\n  • Hempedu (dihasilkan hati): Meneutralkan asid kim (pH 7.6–8.6) dan mengemulsikan lipid menjadi titisan halus (menambah luas permukaan).\n  • Jus Pankreas: Amilase pankreas (Kanji -> Maltosa), Tripsin (Polipeptida -> Peptida), Lipase (Lipid -> Asid lemak + Gliserol).",
          "Ileum (Usus Kecil): Kelenjar usus merembeskan enzim:\n  • Maltase (Maltosa -> 2 Glukosa), Sukrase (Sukrosa -> Glukosa + Fruktosa), Laktase (Laktosa -> Glukosa + Galaktosa), Peptidase/Erepsin (Peptida -> Asid amino)."
        ],
        "verbatim": [
          "Mulut: Gigi mengunyah makanan (pencernaan fizikal), kelenjar liur merembeskan amilase liur (pH 6.5–7.5) yang mencernakan Kanji kepada Maltosa. Makanan dibentuk menjadi bolus.",
          "Perut: Kelenjar gastrik merembeskan Jus Gastrik mengandungi:\n  • Asid hidroklorik (HCl, pH 1.5–2.0): Membunuh bakteria, menyediakan medium asid optimum untuk enzim pepsin, dan menghentikan tindakan amilase liur.\n  • Enzim Pepsin: Menghidrolisis Protein kepada Polipeptida.\n  • Enzim Renin: Menggumpalkan kaseinogen susu menjadi kasein tak larut untuk dicerna pepsin.\n  Bolus bercampur asid membentuk kim separa cecair melalui tindakan peristalsis otot perut.",
          "Duodenum: Menerima hempedu daripada pundi hempedu dan jus pankreas daripada pankreas:\n  • Hempedu (dihasilkan hati): Meneutralkan asid kim (pH 7.6–8.6) dan mengemulsikan lipid menjadi titisan halus (menambah luas permukaan).\n  • Jus Pankreas: Amilase pankreas (Kanji -> Maltosa), Tripsin (Polipeptida -> Peptida), Lipase (Lipid -> Asid lemak + Gliserol).",
          "Ileum (Usus Kecil): Kelenjar usus merembeskan enzim:\n  • Maltase (Maltosa -> 2 Glukosa), Sukrase (Sukrosa -> Glukosa + Fruktosa), Laktase (Laktosa -> Glukosa + Galaktosa), Peptidase/Erepsin (Peptida -> Asid amino)."
        ],
        "explanation": "Pencernaan fizikal (kunyahan & peristalsis) dan pencernaan kimia oleh enzim."
      },
      {
        "subtopic": "9.3 Penyerapan & 9.4 Asimilasi Nutrien",
        "summary": "Struktur vilus untuk penyerapan dan laluan nutrien ke hati melalui vena porta hepar.",
        "points": [
          "Penyesuaian Vilus Ileum: Lipatan berjuta vilus dan mikrovilus menghasilkan luas permukaan penyerapan yang amat besar, dinding epitelium setebal satu sel, jaringan kapilari darah menyerap nutrien larut air, dan salur lakteal di tengah menyerap nutrien larut lipid.",
          "Laluan Penyerapan Nutrien:\n  • Ke dalam Kapilari Darah: Glukosa, fruktosa, galaktosa, asid amino, vitamin B & C, serta air -> diangkut oleh Vena Porta Hepar terus ke Hati.\n  • Ke dalam Lakteal: Asid lemak, gliserol, dan vitamin larut lemak (A, D, E, K) bergabung membentuk titisan kilomikron -> diangkut oleh Sistem Limfa melalui duktus toraks ke Vena Subklavia Kiri masuk ke aliran darah.",
          "Peranan Hati dalam Asimilasi:\n  • Metabolisme Glukosa: Menukarkan glukosa berlebihan kepada glikogen untuk disimpan (dirangsang oleh hormon insulin).\n  • Penyahaminaan: Menguraikan asid amino berlebihan menjadi urea (disingkirkan oleh ginjal) dan asid keto (ditukarkan kepada glukosa).\n  • Detoksifikasi: Menyahtoksik racun, dadah dan alkohol dalam darah."
        ],
        "verbatim": [
          "Penyesuaian Vilus Ileum: Lipatan berjuta vilus dan mikrovilus menghasilkan luas permukaan penyerapan yang amat besar, dinding epitelium setebal satu sel, jaringan kapilari darah menyerap nutrien larut air, dan salur lakteal di tengah menyerap nutrien larut lipid.",
          "Laluan Penyerapan Nutrien:\n  • Ke dalam Kapilari Darah: Glukosa, fruktosa, galaktosa, asid amino, vitamin B & C, serta air -> diangkut oleh Vena Porta Hepar terus ke Hati.\n  • Ke dalam Lakteal: Asid lemak, gliserol, dan vitamin larut lemak (A, D, E, K) bergabung membentuk titisan kilomikron -> diangkut oleh Sistem Limfa melalui duktus toraks ke Vena Subklavia Kiri masuk ke aliran darah.",
          "Peranan Hati dalam Asimilasi:\n  • Metabolisme Glukosa: Menukarkan glukosa berlebihan kepada glikogen untuk disimpan (dirangsang oleh hormon insulin).\n  • Penyahaminaan: Menguraikan asid amino berlebihan menjadi urea (disingkirkan oleh ginjal) dan asid keto (ditukarkan kepada glukosa).\n  • Detoksifikasi: Menyahtoksik racun, dadah dan alkohol dalam darah."
        ],
        "explanation": "Struktur vilus untuk penyerapan dan laluan nutrien ke hati melalui vena porta hepar."
      },
      {
        "subtopic": "9.5 Penyahtinjaan & Isu Kesihatan Nutrisi",
        "summary": "Fungsi kolon usus besar, pembentukan tinja, sembelit, dan gangguan pemakanan.",
        "points": [
          "Kolon (Usus Besar): Penyerapan semula air (kira-kira 90%) dan garam mineral; fermentasi sisa oleh bakteria simbiotik menghasilkan vitamin K dan vitamin B12.",
          "Penyahtinjaan: Bahan tidak tercerna (selulosa/serat, bakteria mati, pigmen hempedu) membentuk tinja yang disimpan sementara dalam rektum sebelum disingkirkan melalui dubur.",
          "Isu Pemakanan & Kesihatan:\n  • Sembelit: Kurang serat dan air dalam gizi, peristalsis perlahan menyebabkan air diserap terlalu banyak, tinja menjadi keras dan kering.\n  • Obesiti: Pengambilan kalori melebihi penggunaan tenaga, lemak berlebihan disimpan dalam tisu adipos.\n  • Anoreksia Nervosa: Gangguan psikologi di mana individu mengelak daripada makan kerana ketakutan melampau terhadap kegemukan.\n  • Bulimia Nervosa: Tabiat makan berlebihan secara kompulsif diikuti dengan pemuntahan secara paksa."
        ],
        "verbatim": [
          "Kolon (Usus Besar): Penyerapan semula air (kira-kira 90%) dan garam mineral; fermentasi sisa oleh bakteria simbiotik menghasilkan vitamin K dan vitamin B12.",
          "Penyahtinjaan: Bahan tidak tercerna (selulosa/serat, bakteria mati, pigmen hempedu) membentuk tinja yang disimpan sementara dalam rektum sebelum disingkirkan melalui dubur.",
          "Isu Pemakanan & Kesihatan:\n  • Sembelit: Kurang serat dan air dalam gizi, peristalsis perlahan menyebabkan air diserap terlalu banyak, tinja menjadi keras dan kering.\n  • Obesiti: Pengambilan kalori melebihi penggunaan tenaga, lemak berlebihan disimpan dalam tisu adipos.\n  • Anoreksia Nervosa: Gangguan psikologi di mana individu mengelak daripada makan kerana ketakutan melampau terhadap kegemukan.\n  • Bulimia Nervosa: Tabiat makan berlebihan secara kompulsif diikuti dengan pemuntahan secara paksa."
        ],
        "explanation": "Fungsi kolon usus besar, pembentukan tinja, sembelit, dan gangguan pemakanan."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Pencernaan Enzimatik di Salur Alimentari",
        "detail": "Amilase air liur mencerna kanji ke maltosa di mulut. Pepsin mencerna protein ke polipeptida dalam keadaan asid HCl di perut. Di duodenum, tripsin, amilase pankreas dan lipase melengkapkan pencernaan kimia.",
        "tip": "Garam hempedu dari pundi hempedu mengemulsikan lipid kepada titisan halus (pencernaan fizikal)."
      },
      {
        "step": "Langkah 2",
        "title": "Penyerapan Nutrien di Vilus & Lakteal Ileum",
        "detail": "Glukosa, galaktosa, asid amino, dan vitamin larut air diserap ke dalam kapilari darah vilus. Asid lemak, gliserol, dan vitamin larut lemak (A, D, E, K) bergabung membentuk titisan kilomikron lalu masuk ke lakteal.",
        "tip": "Lapisan epitelium vilus setebal satu sel dan mempunyai mikrovilus untuk memaksimumkan luas permukaan."
      },
      {
        "step": "Langkah 3",
        "title": "Laluan Vena Porta Hepar ke Hati",
        "detail": "Kapilari darah dari semua vilus bergabung menjadi satu salur darah utama iaitu vena porta hepar yang menghantar nutrien tercerna terus ke hepar untuk asimilasi, penyimpanan glikogen dan penyahtoksin racun.",
        "tip": "Lakteal mengalirkan lipid ke sistem limfa sebelum bergabung ke vena subklavia kiri."
      },
      {
        "step": "Langkah 4",
        "title": "Asimilasi Selular & Pembentukan Tinja",
        "detail": "Glukosa digunakan oleh sel untuk respirasi membina ATP; asid amino membina protein protoplasma dan enzim sel. Air dan mineral diserap semula di kolon; sisa tidak hadam dipadatkan menjadi tinja untuk nyahtinja.",
        "tip": "Kekurangan serat dalam diet melambatkan peristalsis usus menyebabkan sembelit."
      }
    ],
    "keypoints": [
      {
        "term": "Peristalsis",
        "meaning": "Pengecutan dan pengenduran otot licin secara beritma berselang-seli di sepanjang salur pencernaan untuk menolak bolus makanan ke hadapan.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Lakteal",
        "meaning": "Salur limfa halus di bahagian tengah setiap vilus yang berfungsi menyerap asid lemak, gliserol dan vitamin larut lemak (A, D, E, K).",
        "badge": "Istilah SPM"
      },
      {
        "term": "Vena Porta Hepar",
        "meaning": "Salur darah utama yang mengangkut darah kaya nutrien larut air secara terus dari vilus usus kecil ke hati.",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Penyahaminaan",
        "meaning": "Proses pemecahan lebihan asid amino oleh sel hati untuk menyingkirkan kumpulan amino (-NH₂) menjadi sebatian toksik ammonia yang kemudian ditukarkan kepada urea.",
        "badge": "Mekanisme"
      },
      {
        "term": "Asimilasi",
        "meaning": "Proses penggunaan molekul nutrien ringkas yang diserap oleh sel-sel badan untuk membina sebatian kompleks atau membebaskan tenaga.",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Nutrien manakah yang diserap secara khusus ke dalam lakteal vilus usus kecil dan bukannya ke dalam kapilari darah?",
        "options": [
          "Glukosa dan galaktosa",
          "Asid amino dan vitamin C",
          "Asid lemak, gliserol dan vitamin larut lemak (A, D, E, K)",
          "Ion kalsium dan air"
        ],
        "answer": 2,
        "explanation": "Asid lemak dan gliserol bergabung semula membentuk titisan lipid halus di dalam sel epitelium vilus dan diserap ke dalam salur lakteal sistem limfa."
      },
      {
        "q": "Apakah peranan utama cecair hempedu yang dirembeskan oleh pundi hempedu ke dalam duodenum?",
        "options": [
          "Menghidrolisiskan kanji menjadi maltosa",
          "Meneutralkan asid hidroklorik kim dan mengemulsikan lipid menjadi titisan halus",
          "Membunuh bakteria menggunakan asid hidroklorik",
          "Mencernakan protein menjadi asid amino"
        ],
        "answer": 1,
        "explanation": "Hempedu beralkali meneutralkan asid kim dari perut dan garam hempedu mengemulsikan lemak menjadi titisan mikroskopik untuk menambah luas permukaan tindakan enzim lipase."
      },
      {
        "q": "Seorang pesakit mengalami masalah hati kronik (sirosis hati). Antara fungsi metabolik berikut, yang manakah akan terjejas paling teruk?",
        "options": [
          "Penyerapan air dalam usus besar",
          "Penyahaminaan asid amino berlebihan dan penghasilan garam hempedu",
          "Pencernaan kanji di dalam mulut",
          "Pengecutan otot rektum"
        ],
        "answer": 1,
        "explanation": "Hati bertanggungjawab menghasilkan hempedu dan menjalankan proses penyahaminaan asid amino berlebihan menjadi urea. Kerosakan hati menjejaskan kedua-dua fungsi penting ini."
      },
      {
        "q": "Enzim pepsin di dalam perut memerlukan kehadiran bahan X untuk berfungsi secara aktif. Apakah bahan X?",
        "options": [
          "Natrium hidrogen karbonat",
          "Asid hidroklorik (HCl)",
          "Garam hempedu",
          "Enzim amilase"
        ],
        "answer": 1,
        "explanation": "Asid hidroklorik merendahkan pH perut ke julat 1.5–2.0 yang optimum untuk mengaktifkan pepsinogen menjadi enzim pepsin aktif dan membunuh patogen dalam makanan."
      },
      {
        "q": "Kekurangan pengambilan serat (pelawas) dan air yang kronik dalam gizi harian boleh menyebabkan:",
        "options": [
          "Gastritis akut",
          "Sembelit akibat pergerakan peristalsis usus besar yang terlalu perlahan",
          "Anoreksia nervosa",
          "Kekurangan vitamin A"
        ],
        "answer": 1,
        "explanation": "Serat menyerap air dan menambah saiz tinja, merangsang peristalsis kolon. Kekurangan serat melambatkan pergerakan tinja, menyebabkan air diserap berlebihan dan tinja menjadi keras (sembelit)."
      }
    ],
    "struktur": [
      {
        "q": "Rajah menunjukkan struktur satu vilus dalam usus kecil manusia yang terdiri daripada sel epitelium, kapilari darah, dan lakteal.\n(a) Terangkan dua penyesuaian vilus untuk memaksimumkan kadar penyerapan nutrien.\n(b) Terangkan perbezaan laluan pengangkutan glukosa berbanding asid lemak selepas diserap oleh sel epitelium vilus.",
        "skema": [
          "(a) 1. Dinding sel epitelium vilus sangat nipis, setebal satu sel untuk memendekkan jarak resapan nutrien ke dalam salur darah/lakteal [1m]. 2. Mempunyai banyak unjuran mikrovilus pada permukaan sel epitelium yang meningkatkan nisbah luas permukaan kepada isi padu untuk penyerapan pantas [1m].",
          "(b) Glukosa diserap ke dalam kapilari darah dan diangkut melalui vena porta hepar terus ke hati [1m]. Asid lemak meresap ke dalam lakteal, diangkut melalui salur limfa ke duktus toraks dan memasuki sistem peredaran darah pada vena subklavia kiri [2m]."
        ]
      }
    ]
  },
  {
    "id": "bio-bab10",
    "babNum": "BAB 10",
    "title": "PENGANGKUTAN DALAM MANUSIA DAN HAIWAN",
    "icon": "❤️",
    "anyflipPages": "Halaman 178 – 202 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Sistem peredaran darah mengangkut oksigen, nutrien, hormon dan antibodi ke seluruh sel badan serta menyingkirkan bahan kumuh metabolik. Bab ini membincangkan perbandingan sistem peredaran terbuka dan tertutup (serangga, ikan, amfibia, mamalia), anatomi jantung dan salur darah manusia, mekanisme denyutan jantung dan pembekuan darah, kumpulan darah ABO dan faktor Rhesus, serta peranan sistem limfa dan penyakit kardiovaskular.",
    "notes": [
      {
        "subtopic": "10.1 Sistem Peredaran Organisma & 10.2 Sistem Peredaran Manusia",
        "summary": "Peredaran terbuka serangga, tunggal ikan, ganda dua manusia, dan struktur jantung 4 ruang.",
        "points": [
          "Jenis Sistem Peredaran:\n  • Terbuka (Serangga): Jantung mengepam hemolimfa ke dalam rongga hemocoel membasahi sel badan secara terus.\n  • Tertutup Tunggal (Ikan): Jantung 2 ruang (1 atrium, 1 ventrikel). Darah mengalir melalui jantung hanya sekali dalam satu peredaran lengkap (Jantung -> Insang -> Tisu badan -> Jantung).\n  • Tertutup Ganda Dua Lengkap (Manusia & Mamalia): Jantung 4 ruang (2 atrium, 2 ventrikel berasingan sepenuhnya). Darah melalui jantung dua kali: Peredaran Pulmonari (Jantung -> Peparu -> Jantung) dan Peredaran Sistemik (Jantung -> Seluruh badan -> Jantung). Tiada percampuran darah beroksigen dan terdeoksigen.",
          "Struktur Jantung Manusia:\n  • Atrium Kanan: Menerima darah terdeoksigen dari seluruh badan melalui Vena Kava.\n  • Ventrikel Kanan: Dinding otot sederhana tebal, mengepam darah ke peparu melalui Arteri Pulmonari.\n  • Atrium Kiri: Menerima darah beroksigen dari peparu melalui Vena Pulmonari.\n  • Ventrikel Kiri: Mempunyai dinding otot paling tebal untuk menghasilkan tekanan tinggi mengepam darah beroksigen ke seluruh badan melalui Aorta.\n  • Injap Jantung: Injap Trikuspid (antara atrium kanan & ventrikel kanan), Injap Bikuspid (antara atrium kiri & ventrikel kiri), Injap Sabit (di pangkal aorta dan arteri pulmonari) menghalang aliran balik darah."
        ],
        "verbatim": [
          "Jenis Sistem Peredaran:\n  • Terbuka (Serangga): Jantung mengepam hemolimfa ke dalam rongga hemocoel membasahi sel badan secara terus.\n  • Tertutup Tunggal (Ikan): Jantung 2 ruang (1 atrium, 1 ventrikel). Darah mengalir melalui jantung hanya sekali dalam satu peredaran lengkap (Jantung -> Insang -> Tisu badan -> Jantung).\n  • Tertutup Ganda Dua Lengkap (Manusia & Mamalia): Jantung 4 ruang (2 atrium, 2 ventrikel berasingan sepenuhnya). Darah melalui jantung dua kali: Peredaran Pulmonari (Jantung -> Peparu -> Jantung) dan Peredaran Sistemik (Jantung -> Seluruh badan -> Jantung). Tiada percampuran darah beroksigen dan terdeoksigen.",
          "Struktur Jantung Manusia:\n  • Atrium Kanan: Menerima darah terdeoksigen dari seluruh badan melalui Vena Kava.\n  • Ventrikel Kanan: Dinding otot sederhana tebal, mengepam darah ke peparu melalui Arteri Pulmonari.\n  • Atrium Kiri: Menerima darah beroksigen dari peparu melalui Vena Pulmonari.\n  • Ventrikel Kiri: Mempunyai dinding otot paling tebal untuk menghasilkan tekanan tinggi mengepam darah beroksigen ke seluruh badan melalui Aorta.\n  • Injap Jantung: Injap Trikuspid (antara atrium kanan & ventrikel kanan), Injap Bikuspid (antara atrium kiri & ventrikel kiri), Injap Sabit (di pangkal aorta dan arteri pulmonari) menghalang aliran balik darah."
        ],
        "explanation": "Peredaran terbuka serangga, tunggal ikan, ganda dua manusia, dan struktur jantung 4 ruang."
      },
      {
        "subtopic": "10.3 Mekanisme Denyutan Jantung & 10.4 Pembekuan Darah",
        "summary": "Perentak nodus sinoatrium (SAN) dan lata enzim pembekuan darah.",
        "points": [
          "Mekanisme Denyutan Jantung:\n  1. Nodus Sinoatrium (SAN, perentak jantung semula jadi) menjana impuls elektrik -> merebak merentasi kedua-dua atrium -> atrium mengecut serentak (sistol atrium).\n  2. Impuls sampai ke Nodus Atrioventrikel (AVN) -> dialirkan melalui Berkas His dan Gentian Purkinje ke apeks jantung.\n  3. Ventrikel mengecut serentak dari bawah ke atas (sistol ventrikel) -> Injap trikuspid dan bikuspid tertutup rapat menghasilkan bunyi 'LUB'.\n  4. Ventrikel mengendur (diastol) -> Injap sabit tertutup rapat menghasilkan bunyi 'DUB'.",
          "Mekanisme Pembekuan Darah:\n  1. Salur darah terluka -> Platlet bergumpal pada luka dan membebaskan enzim Trombokinase (Tromboplastin).\n  2. Trombokinase dengan kehadiran ion kalsium (Ca²⁺) dan Vitamin K memangkin penukaran Protrombin (protein plasma tidak aktif) kepada Trombin (enzim aktif).\n  3. Trombin memangkin penukaran Fibrinogen (protein plasma larut) kepada Fibrin (jaringan bebenang tak larut).\n  4. Jaringan fibrin memerangkap sel darah merah membentuk bekuan darah (keruping) untuk menutup luka dan menghalang pendarahan lanjut serta jangkitan patogen."
        ],
        "verbatim": [
          "Mekanisme Denyutan Jantung:\n  1. Nodus Sinoatrium (SAN, perentak jantung semula jadi) menjana impuls elektrik -> merebak merentasi kedua-dua atrium -> atrium mengecut serentak (sistol atrium).\n  2. Impuls sampai ke Nodus Atrioventrikel (AVN) -> dialirkan melalui Berkas His dan Gentian Purkinje ke apeks jantung.\n  3. Ventrikel mengecut serentak dari bawah ke atas (sistol ventrikel) -> Injap trikuspid dan bikuspid tertutup rapat menghasilkan bunyi 'LUB'.\n  4. Ventrikel mengendur (diastol) -> Injap sabit tertutup rapat menghasilkan bunyi 'DUB'.",
          "Mekanisme Pembekuan Darah:\n  1. Salur darah terluka -> Platlet bergumpal pada luka dan membebaskan enzim Trombokinase (Tromboplastin).\n  2. Trombokinase dengan kehadiran ion kalsium (Ca²⁺) dan Vitamin K memangkin penukaran Protrombin (protein plasma tidak aktif) kepada Trombin (enzim aktif).\n  3. Trombin memangkin penukaran Fibrinogen (protein plasma larut) kepada Fibrin (jaringan bebenang tak larut).\n  4. Jaringan fibrin memerangkap sel darah merah membentuk bekuan darah (keruping) untuk menutup luka dan menghalang pendarahan lanjut serta jangkitan patogen."
        ],
        "explanation": "Perentak nodus sinoatrium (SAN) dan lata enzim pembekuan darah."
      },
      {
        "subtopic": "10.5 Kumpulan Darah ABO & Faktor Rhesus",
        "summary": "Keserasian pendermaan darah dan ketidakserasian faktor Rhesus pada kehamilan.",
        "points": [
          "Sistem ABO:\n  • Kumpulan A: Antigen A pada eritrosit, Antibodi Anti-B dalam plasma.\n  • Kumpulan B: Antigen B pada eritrosit, Antibodi Anti-A dalam plasma.\n  • Kumpulan AB: Antigen A dan B, TIADA antibodi (Penerima Universal).\n  • Kumpulan O: Tiada antigen, mempunyai Antibodi Anti-A dan Anti-B (Penderma Universal).\n  Ketidakserasian darah menyebabkan aglutinasi (penggumpalan eritrosit) yang menyumbat salur darah dan membawa maut.",
          "Faktor Rhesus (Rh):\n  • Individu Rh⁺ mempunyai antigen D; individu Rh⁻ tiada antigen D.\n  • Bahaya Kehamilan: Jika ibu Rh⁻ mengandungkan anak pertama Rh⁺, semasa kelahiran darah bayi bercampur dengan darah ibu, merangsang ibu menghasilkan antibodi anti-D.\n  • Pada kehamilan kedua dengan anak Rh⁺, antibodi anti-D ibu yang kecil merentasi plasenta dan memusnahkan sel darah merah fetus -> menyebabkan Eritroblastosis Fetalis (bayi mengalami anemia teruk, kerosakan otak atau kematian)."
        ],
        "verbatim": [
          "Sistem ABO:\n  • Kumpulan A: Antigen A pada eritrosit, Antibodi Anti-B dalam plasma.\n  • Kumpulan B: Antigen B pada eritrosit, Antibodi Anti-A dalam plasma.\n  • Kumpulan AB: Antigen A dan B, TIADA antibodi (Penerima Universal).\n  • Kumpulan O: Tiada antigen, mempunyai Antibodi Anti-A dan Anti-B (Penderma Universal).\n  Ketidakserasian darah menyebabkan aglutinasi (penggumpalan eritrosit) yang menyumbat salur darah dan membawa maut.",
          "Faktor Rhesus (Rh):\n  • Individu Rh⁺ mempunyai antigen D; individu Rh⁻ tiada antigen D.\n  • Bahaya Kehamilan: Jika ibu Rh⁻ mengandungkan anak pertama Rh⁺, semasa kelahiran darah bayi bercampur dengan darah ibu, merangsang ibu menghasilkan antibodi anti-D.\n  • Pada kehamilan kedua dengan anak Rh⁺, antibodi anti-D ibu yang kecil merentasi plasenta dan memusnahkan sel darah merah fetus -> menyebabkan Eritroblastosis Fetalis (bayi mengalami anemia teruk, kerosakan otak atau kematian)."
        ],
        "explanation": "Keserasian pendermaan darah dan ketidakserasian faktor Rhesus pada kehamilan."
      },
      {
        "subtopic": "10.6 Sistem Limfa & Penyakit Kardiovaskular",
        "summary": "Pembentukan limfa, pengembalian cecair tisu, nodus limfa, dan aterosklerosis.",
        "points": [
          "Pembentukan Cecair Tisu dan Limfa: Tekanan hidrostatik tinggi di hujung arteriol kapilari darah menolak bendalir plasma darah (tanpa eritrosit dan protein besar) keluar ke ruang antara sel membentuk Cecair Tisu.\nKira-kira 85% cecair tisu diserap semula ke kapilari vena; baki 15% meresap ke dalam kapilari limfa dan dikenali sebagai Limfa.\nLimfa mengalir melalui salur limfa, ditapis oleh Nodus Limfa (mengandungi makrofaj dan limfosit memusnahkan bakteria), dan dikembalikan ke sistem darah melalui Duktus Toraks ke Vena Subklavia Kiri.",
          "Penyakit Kardiovaskular:\n  • Aterosklerosis: Pembentukan plak kolesterol dan lipid pada lumen arteri menyempitkan laluan darah dan menaikkan tekanan darah.\n  • Arteriosklerosis: Pengerasan dinding arteri akibat mendapan kalsium menyebabkan kehilangan keanjalan salur darah.\n  • Infarksi Miokardium (Serangan Jantung): Sumbatan arteri koronari oleh bekuan darah (trombus) menghentikan bekalan O₂ kepada otot jantung."
        ],
        "verbatim": [
          "Pembentukan Cecair Tisu dan Limfa: Tekanan hidrostatik tinggi di hujung arteriol kapilari darah menolak bendalir plasma darah (tanpa eritrosit dan protein besar) keluar ke ruang antara sel membentuk Cecair Tisu.\nKira-kira 85% cecair tisu diserap semula ke kapilari vena; baki 15% meresap ke dalam kapilari limfa dan dikenali sebagai Limfa.\nLimfa mengalir melalui salur limfa, ditapis oleh Nodus Limfa (mengandungi makrofaj dan limfosit memusnahkan bakteria), dan dikembalikan ke sistem darah melalui Duktus Toraks ke Vena Subklavia Kiri.",
          "Penyakit Kardiovaskular:\n  • Aterosklerosis: Pembentukan plak kolesterol dan lipid pada lumen arteri menyempitkan laluan darah dan menaikkan tekanan darah.\n  • Arteriosklerosis: Pengerasan dinding arteri akibat mendapan kalsium menyebabkan kehilangan keanjalan salur darah.\n  • Infarksi Miokardium (Serangan Jantung): Sumbatan arteri koronari oleh bekuan darah (trombus) menghentikan bekalan O₂ kepada otot jantung."
        ],
        "explanation": "Pembentukan limfa, pengembalian cecair tisu, nodus limfa, dan aterosklerosis."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Kitar Pengecutan Jantung (Sistol & Diastol)",
        "detail": "Nodus sinoatrium (perentak jantung) menjana impuls elektrik menyebabkan kedua-dua atrium mengecut (sistol atrium). Impuls dialirkan ke nodus atrioventrikel, berkas His dan gentian Purkinje menyebabkan ventrikel mengecut (sistol ventrikel).",
        "tip": "Injap trikuspid & bikuspid tertutup menghasilkan bunyi 'LUB'; injap sabit tertutup menghasilkan 'DUB'."
      },
      {
        "step": "Langkah 2",
        "title": "Mekanisme Pembekuan Darah (Lata Biokimia)",
        "detail": "Salur darah tercedera menyebabkan platlet pecah membebaskan enzim trombokinase. Trombokinase bersama ion kalsium (Ca²⁺) dan Vitamin K menukar protrombin tidak aktif kepada trombin aktif. Trombin menukar fibrinogen larut kepada bebenang fibrin tak larut.",
        "tip": "Jalinan fibrin memerangkap sel darah merah menutup luka dan menghalang pendarahan maut."
      },
      {
        "step": "Langkah 3",
        "title": "Pembentukan Bendalir Tisu (Interstis)",
        "detail": "Tekanan hidrostatik tinggi di hujung arteriol kapilari menolak sebahagian plasma keluar ke ruang antara sel. Sel darah merah, platlet dan protein plasma besar tidak dapat menembusi dinding kapilari dan kekal di dalam.",
        "tip": "Bendalir tisu membasahi sel untuk membolehkan pertukaran gas dan nutrien berlaku."
      },
      {
        "step": "Langkah 4",
        "title": "Pengaliran Limfa ke Sistem Peredaran Darah",
        "detail": "Kira-kira 85% bendalir tisu diserap semula ke kapilari darah venul; baki 15% meresap ke kapilari limfa menjadi bendalir limfa. Limfa dialirkan melalui nodus limfa dan kembali ke sistem darah melalui vena subklavia kiri dan kanan.",
        "tip": "Penyumbatan salur limfa oleh cacing filaria menyebabkan penyakit untut (filariasis / edema)."
      }
    ],
    "keypoints": [
      {
        "term": "Nodus Sinoatrium (SAN)",
        "meaning": "Sekelompok sel otot kardium khusus di dinding atrium kanan yang bertindak sebagai perentak jantung semula jadi menjana impuls denyutan jantung.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Fibrin",
        "meaning": "Protein bebenang tidak larut yang membentuk jaringan perangkap sel darah merah semasa proses pembekuan darah.",
        "badge": "Istilah SPM"
      },
      {
        "term": "Eritroblastosis Fetalis",
        "meaning": "Keadaan hemolitik yang mengancam nyawa fetus Rh⁺ dalam kandungan kedua ibu Rh⁻ akibat kemasukan antibodi anti-D ibu merentasi plasenta.",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Lakteal Limfa",
        "meaning": "Salur limfa halus yang menyerap semula 15% bendalir tisu berlebihan untuk dikembalikan ke sistem peredaran darah vena.",
        "badge": "Mekanisme"
      },
      {
        "term": "Aterosklerosis",
        "meaning": "Pemendapan plak kolesterol dan lemak pada dinding dalam arteri yang menyempitkan lumen dan meningkatkan risiko serangan jantung.",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Mengapakah dinding ventrikel kiri jantung manusia jauh lebih tebal dan berotot berbanding dinding ventrikel kanan?",
        "options": [
          "Untuk menahan suhu darah yang lebih panas dari peparu",
          "Untuk menghasilkan daya pengecutan dan tekanan hidrostatik tinggi bagi mengepam darah ke seluruh tubuh badan",
          "Kerana ventrikel kiri mengandungi lebih banyak darah berbanding ventrikel kanan",
          "Untuk menyimpan darah beroksigen dalam tempoh lama"
        ],
        "answer": 1,
        "explanation": "Ventrikel kiri perlu mengepam darah ke seluruh badan (peredaran sistemik) yang mempunyai rintangan vaskular tinggi, memerlukan tekanan yang jauh lebih kuat berbanding ventrikel kanan yang hanya mengepam ke peparu."
      },
      {
        "q": "Apakah peranan ion Kalsium (Ca²⁺) dan Vitamin K dalam mekanisme pembekuan darah?",
        "options": [
          "Menghasilkan bebenang fibrin secara terus tanpa enzim",
          "Bertindak sebagai kofaktor penting untuk mengaktifkan enzim trombokinase menukarkan protrombin kepada trombin",
          "Mencerna bakteria di tapak luka",
          "Memecahkan bekuan darah selepas luka sembuh"
        ],
        "answer": 1,
        "explanation": "Ion Ca²⁺ dan Vitamin K diperlukan oleh trombokinase untuk memangkin penukaran protrombin tidak aktif kepada enzim trombin aktif."
      },
      {
        "q": "Seorang pesakit berdarah kumpulan B memerlukan pemindahan darah kecemasan. Kumpulan darah penderma manakah yang selamat untuk diterima oleh pesakit ini?",
        "options": [
          "Hanya kumpulan A dan AB",
          "Hanya kumpulan B dan O",
          "Hanya kumpulan AB dan O",
          "Hanya kumpulan A dan O"
        ],
        "answer": 1,
        "explanation": "Individu berdarah B mempunyai antibodi Anti-A dalam plasmanya. Mereka boleh menerima darah kumpulan B (antigen serasi) dan kumpulan O (tiada antigen A atau B)."
      },
      {
        "q": "Apakah punca utama berlakunya penyakit Eritroblastosis Fetalis pada anak kedua?",
        "options": [
          "Ibu Rh⁺ mengandungkan anak Rh⁻",
          "Ibu Rh⁻ mengandungkan anak kedua Rh⁺ selepas menghasilkan antibodi anti-D semasa kelahiran anak pertama",
          "Bapa berdarah kumpulan O dan ibu kumpulan AB",
          "Kekurangan asid folik semasa kehamilan"
        ],
        "answer": 1,
        "explanation": "Pada kehamilan anak kedua Rh⁺, antibodi anti-D yang sedia ada dalam plasma ibu Rh⁻ akan merentasi plasenta dan memusnahkan sel darah merah fetus Rh⁺."
      },
      {
        "q": "Ke manakah cecair limfa dalam duktus toraks disalurkan semula ke dalam sistem peredaran darah manusia?",
        "options": [
          "Vena kava superior",
          "Vena subklavia kiri",
          "Arteri pulmonari",
          "Vena porta hepar"
        ],
        "answer": 1,
        "explanation": "Duktus toraks menyalurkan semula kandungan limfa ke dalam aliran darah melalui Vena Subklavia Kiri, mengekalkan isi padu darah normal tubuh."
      }
    ],
    "struktur": [
      {
        "q": "Rajah menunjukkan graf kitar jantung manusia yang melibatkan sistol dan diastol ventrikel.\n(a) Terangkan apa yang menyebabkan bunyi denyutan jantung pertama ('LUB') dan bunyi kedua ('DUB').\n(b) Terangkan kesan pembentukan plak aterosklerosis dalam arteri koronari terhadap fungsi otot kardium jantung.",
        "skema": [
          "(a) Bunyi 'LUB' terhasil apabila injap trikuspid dan bikuspid tertutup serentak semasa sistol (pengecutan) ventrikel [1m]. Bunyi 'DUB' terhasil apabila injap sabit di pangkal aorta dan arteri pulmonari tertutup serentak semasa diastol (pengenduran) ventrikel [1m].",
          "(b) Pembentukan plak kolesterol menyempitkan lumen arteri koronari dan mengurangkan aliran darah beroksigen ke tisu otot kardium [1m]. Kekurangan oksigen dan glukosa menyebabkan sel otot kardium mengalami iskemia dan mati, membawa kepada infarksi miokardium (serangan jantung) [2m]."
        ]
      }
    ]
  },
  {
    "id": "bio-bab11",
    "babNum": "BAB 11",
    "title": "KEIMUNAN MANUSIA",
    "icon": "🛡️",
    "anyflipPages": "Halaman 204 – 220 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Sistem keimunan melindungi tubuh daripada pencerobohan patogen penyakit. Bab ini membincangkan tiga barisan pertahanan badan (fizikal, fagositosis, dan keimunan adaptif sel B dan sel T), tindakan antibodi spesifik memusnahkan antigen, empat jenis keimunan (keimunan aktif semula jadi, keimunan aktif buatan, keimunan pasif semula jadi, dan keimunan pasif buatan), graf kepekatan antibodi aras keimunan, serta isu berkaitan Sindrom Kurang Daya Tahan Melawan Penyakit (HIV/AIDS).",
    "notes": [
      {
        "subtopic": "11.1 Tiga Barisan Pertahanan Badan",
        "summary": "Pertahanan bukan spesifik (Barisan Pertama & Kedua) dan pertahanan spesifik (Barisan Ketiga).",
        "points": [
          "Barisan Pertahanan Pertama (Fizikal & Kimia - Bukan Spesifik):\n  • Kulit: Lapisan keratin tegar kalis air, perembesan sebum (asid lemak membantutkan bakteria) dan peluh (mengandungi enzim lisozim memusnahkan dinding sel bakteria).\n  • Membran Mukus: Melapisi salur pernafasan merembeskan mukus memerangkap habuk/mikrob; silium menyapu mukus ke farinks.\n  • Asid Hidroklorik (HCl) dalam perut memusnahkan patogen makanan.\n  • Enzim Lisozim dalam air mata, air liur dan mukus memecahkan dinding sel bakteria.",
          "Barisan Pertahanan Kedua (Dalaman - Bukan Spesifik):\n  • Fagositosis: Leukosit neutrofil dan monosit/makrofaj mengepung, menelan dan mencerna patogen menggunakan enzim hidrolisis lisosom.\n  • Demam: Meningkatkan suhu badan untuk merencat pembiakan bakteria dan meningkatkan aktiviti fagositosis.\n  • Keradangan: Tisu rosak membebaskan histamin -> vasodilatasi kapilari dan peningkatan ketelapan salur darah -> lebih banyak fagosit dan cecair pembeku tiba di tapak luka.",
          "Barisan Pertahanan Ketiga (Spesifik - Sistem Keimunan Adaptif):\n  • Melibatkan Limfosit T (menyerang sel yang dijangkiti dan merangsang limfosit B) dan Limfosit B (membahagi menghasilkan sel plasma yang merembeskan antibodi spesifik dan sel memori)."
        ],
        "verbatim": [
          "Barisan Pertahanan Pertama (Fizikal & Kimia - Bukan Spesifik):\n  • Kulit: Lapisan keratin tegar kalis air, perembesan sebum (asid lemak membantutkan bakteria) dan peluh (mengandungi enzim lisozim memusnahkan dinding sel bakteria).\n  • Membran Mukus: Melapisi salur pernafasan merembeskan mukus memerangkap habuk/mikrob; silium menyapu mukus ke farinks.\n  • Asid Hidroklorik (HCl) dalam perut memusnahkan patogen makanan.\n  • Enzim Lisozim dalam air mata, air liur dan mukus memecahkan dinding sel bakteria.",
          "Barisan Pertahanan Kedua (Dalaman - Bukan Spesifik):\n  • Fagositosis: Leukosit neutrofil dan monosit/makrofaj mengepung, menelan dan mencerna patogen menggunakan enzim hidrolisis lisosom.\n  • Demam: Meningkatkan suhu badan untuk merencat pembiakan bakteria dan meningkatkan aktiviti fagositosis.\n  • Keradangan: Tisu rosak membebaskan histamin -> vasodilatasi kapilari dan peningkatan ketelapan salur darah -> lebih banyak fagosit dan cecair pembeku tiba di tapak luka.",
          "Barisan Pertahanan Ketiga (Spesifik - Sistem Keimunan Adaptif):\n  • Melibatkan Limfosit T (menyerang sel yang dijangkiti dan merangsang limfosit B) dan Limfosit B (membahagi menghasilkan sel plasma yang merembeskan antibodi spesifik dan sel memori)."
        ],
        "explanation": "Pertahanan bukan spesifik (Barisan Pertama & Kedua) dan pertahanan spesifik (Barisan Ketiga)."
      },
      {
        "subtopic": "11.2 Tindakan Antibodi terhadap Antigen",
        "summary": "5 mekanisme antibodi: Aglutinasi, Peneutralan, Pemendakan, Pengopsonan, dan Penguraian (Lisis).",
        "points": [
          "Aglutinasi: Antibodi menggumpalkan patogen pembawa antigen bersama-sama supaya mudah diperangkap dan dimusnahkan oleh sel fagosit.",
          "Peneutralan: Antibodi mengikat pada toksin yang dihasilkan oleh bakteria, meneutralkan sifat toksik racun tersebut sebelum memudaratkan sel.",
          "Pemendakan: Antibodi mengikat pada antigen larut membentuk kompleks tidak larut (mendakan) yang mudah disingkirkan oleh fagosit.",
          "Pengopsonan: Antibodi bertindak sebagai penanda (opsonin) yang mengikat pada antigen bakteria, memudahkan fagosit mengenali dan memakannya.",
          "Penguraian (Lisis): Antibodi bergabung dengan antigen dan mengaktifkan protein pelengkap yang menebuk liang pada membran sel bakteria sehingga bakteria lisis dan pecah."
        ],
        "verbatim": [
          "Aglutinasi: Antibodi menggumpalkan patogen pembawa antigen bersama-sama supaya mudah diperangkap dan dimusnahkan oleh sel fagosit.",
          "Peneutralan: Antibodi mengikat pada toksin yang dihasilkan oleh bakteria, meneutralkan sifat toksik racun tersebut sebelum memudaratkan sel.",
          "Pemendakan: Antibodi mengikat pada antigen larut membentuk kompleks tidak larut (mendakan) yang mudah disingkirkan oleh fagosit.",
          "Pengopsonan: Antibodi bertindak sebagai penanda (opsonin) yang mengikat pada antigen bakteria, memudahkan fagosit mengenali dan memakannya.",
          "Penguraian (Lisis): Antibodi bergabung dengan antigen dan mengaktifkan protein pelengkap yang menebuk liang pada membran sel bakteria sehingga bakteria lisis dan pecah."
        ],
        "explanation": "5 mekanisme antibodi: Aglutinasi, Peneutralan, Pemendakan, Pengopsonan, dan Penguraian (Lisis)."
      },
      {
        "subtopic": "11.3 Jenis-Jenis Keimunan & Graf Aras Keimunan",
        "summary": "Keimunan Aktif vs Keimunan Pasif (Semula Jadi dan Buatan).",
        "points": [
          "Keimunan Aktif Semula Jadi: Diperoleh apabila seseorang sembuh daripada jangkitan penyakit (cth: demam campak). Badan menghasilkan antibodi sendiri dan sel memori yang memberikan perlindungan jangka panjang / seumur hidup.",
          "Keimunan Aktif Buatan: Diperoleh melalui suntikan Vaksin (patogen dilemahkan, mati atau toksin dinyahaslikan). Merangsang limfosit menghasilkan antibodi. Dos penggalak (booster) diperlukan untuk meningkatkan aras antibodi melebihi aras keimunan bagi perlindungan berpanjangan.",
          "Keimunan Pasif Semula Jadi: Bayi menerima antibodi sedia ada daripada ibu melalui plasenta semasa dalam kandungan dan melalui kolostrum (susu awal ibu). Memberikan perlindungan serta-merta tetapi bersifat sementara (beberapa bulan) kerana tiada sel memori dihasilkan.",
          "Keimunan Pasif Buatan: Diperoleh melalui suntikan Antiserum (plasma darah mengandungi antibodi sedia ada, cth: antitetanus, antivenom ular). Memberi perlindungan serta-merta semasa kecemasan, tetapi antibodi terurai selepas beberapa minggu (tiada perlindungan jangka panjang)."
        ],
        "verbatim": [
          "Keimunan Aktif Semula Jadi: Diperoleh apabila seseorang sembuh daripada jangkitan penyakit (cth: demam campak). Badan menghasilkan antibodi sendiri dan sel memori yang memberikan perlindungan jangka panjang / seumur hidup.",
          "Keimunan Aktif Buatan: Diperoleh melalui suntikan Vaksin (patogen dilemahkan, mati atau toksin dinyahaslikan). Merangsang limfosit menghasilkan antibodi. Dos penggalak (booster) diperlukan untuk meningkatkan aras antibodi melebihi aras keimunan bagi perlindungan berpanjangan.",
          "Keimunan Pasif Semula Jadi: Bayi menerima antibodi sedia ada daripada ibu melalui plasenta semasa dalam kandungan dan melalui kolostrum (susu awal ibu). Memberikan perlindungan serta-merta tetapi bersifat sementara (beberapa bulan) kerana tiada sel memori dihasilkan.",
          "Keimunan Pasif Buatan: Diperoleh melalui suntikan Antiserum (plasma darah mengandungi antibodi sedia ada, cth: antitetanus, antivenom ular). Memberi perlindungan serta-merta semasa kecemasan, tetapi antibodi terurai selepas beberapa minggu (tiada perlindungan jangka panjang)."
        ],
        "explanation": "Keimunan Aktif vs Keimunan Pasif (Semula Jadi dan Buatan)."
      },
      {
        "subtopic": "11.4 Isu Kesihatan Berkaitan Keimunan (HIV/AIDS)",
        "summary": "Pemusnahan limfosit T pembantu oleh virus HIV melemahkan keseluruhan sistem imun.",
        "points": [
          "Virus Kurang Daya Tahan Manusia (HIV): Menyerang dan memusnahkan sel Limfosit T pembantu (CD4⁺ T-cells) yang merupakan komander utama mengaktifkan limfosit B dan fagosit.",
          "AIDS (Sindrom Kurang Daya Tahan Melawan Penyakit): Fasa akhir jangkitan HIV di mana bilangan limfosit T merosot teruk. Sistem imun runtuh, menyebabkan pesakit terdedah kepada jangkitan oportunistik (seperti tuberkulosis, radang paru-paru pneumocystis, kanser sarkoma Kaposi) yang membawa maut.",
          "Penularan: Hubungan seksual tanpa perlindungan, perkongsian jarum suntikan tercemar, pemindahan darah tercemar, dan penularan daripada ibu positif HIV kepada fetus semasa hamil atau menyusu."
        ],
        "verbatim": [
          "Virus Kurang Daya Tahan Manusia (HIV): Menyerang dan memusnahkan sel Limfosit T pembantu (CD4⁺ T-cells) yang merupakan komander utama mengaktifkan limfosit B dan fagosit.",
          "AIDS (Sindrom Kurang Daya Tahan Melawan Penyakit): Fasa akhir jangkitan HIV di mana bilangan limfosit T merosot teruk. Sistem imun runtuh, menyebabkan pesakit terdedah kepada jangkitan oportunistik (seperti tuberkulosis, radang paru-paru pneumocystis, kanser sarkoma Kaposi) yang membawa maut.",
          "Penularan: Hubungan seksual tanpa perlindungan, perkongsian jarum suntikan tercemar, pemindahan darah tercemar, dan penularan daripada ibu positif HIV kepada fetus semasa hamil atau menyusu."
        ],
        "explanation": "Pemusnahan limfosit T pembantu oleh virus HIV melemahkan keseluruhan sistem imun."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Pertahanan Barisan Pertama & Kedua (Tidak Spesifik)",
        "detail": "Kulit dan membran mukus bertindak sebagai halangan fizikal dan kimia menghalang kemasukan patogen. Jika patogen berjaya menembusi luka, neutrofil dan makrofaj menjalankan fagositosis untuk menelan patogen.",
        "tip": "Tindak balas keradangan (inflamasi) meningkatkan aliran darah dan fagosit ke kawasan jangkitan."
      },
      {
        "step": "Langkah 2",
        "title": "Gerak Balas Spesifik Limfosit T & B",
        "detail": "Makrofaj mempamerkan antigen mikrob mengaktifkan Limfosit T Pembantu. Sel T merangsang Limfosit B membahagi kepada sel plasma (yang merembeskan antibodi spesifik) dan sel B memori.",
        "tip": "Antibodi mempunyai tapak pengikatan komplementari yang sepadan khusus dengan antigen tertentu sahaja."
      },
      {
        "step": "Langkah 3",
        "title": "Mekanisme Pemusnahan Antigen oleh Antibodi",
        "detail": "Antibodi memusnahkan antigen melalui 5 kaedah utama: Pengaglutinan (menggumpalkan mikrob), Neutralisasi (meneutralkan toksin), Pengendapan (memendapkan antigen larut), Opsonisasi (menandakan mikrob untuk fagosit), dan Penguraian (lisis dinding bakteria).",
        "tip": "Singkatan mudah ingatan kaedah antibodi: A-N-P-O-L."
      },
      {
        "step": "Langkah 4",
        "title": "Keimunan Aktif vs Keimunan Pasif",
        "detail": "Keimunan aktif buatan diperoleh melalui suntikan vaksin (antigen mati/dilemahkan) yang merangsang sel memori menghasilkan perlindungan berkekalan. Keimunan pasif buatan menggunakan antiserum sedia ada untuk rawatan kecemasan segera tanpa sel memori.",
        "tip": "Dos penggalak (booster) melonjakkan aras antibodi jauh melepasi aras keimunan."
      }
    ],
    "keypoints": [
      {
        "term": "Antigen",
        "meaning": "Bahan asing (lazimnya protein pada permukaan mikrob atau toksin) yang merangsang gerak balas sistem keimunan badan untuk menghasilkan antibodi.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Antibodi",
        "meaning": "Protein globular spesifik (imunoglobulin) yang dirembeskan oleh sel plasma limfosit B untuk mengikat dan meneutralkan antigen spesifik.",
        "badge": "Istilah SPM"
      },
      {
        "term": "Vaksin",
        "meaning": "Ampaian patogen yang telah dilemahkan atau dimatikan yang disuntik untuk merangsang badan menghasilkan antibodi dan sel memori tanpa menyebabkan penyakit.",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Antiserum",
        "meaning": "Serum darah yang mengandungi antibodi tulen sedia ada yang disuntik untuk memberikan perlindungan segera terhadap toksin atau penyakit maut.",
        "badge": "Mekanisme"
      },
      {
        "term": "Aras Keimunan",
        "meaning": "Kepekatan minimum antibodi di dalam darah yang diperlukan oleh tubuh untuk mencegah jangkitan sesuatu penyakit secara berkesan.",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Seorang lelaki terpijak paku berkarat dan dihantar ke hospital. Doktor menyuntik antiserum antitetanus ke dalam badannya. Apakah jenis keimunan yang diperoleh lelaki tersebut?",
        "options": [
          "Keimunan aktif semula jadi",
          "Keimunan aktif buatan",
          "Keimunan pasif semula jadi",
          "Keimunan pasif buatan"
        ],
        "answer": 3,
        "explanation": "Antiserum mengandungi antibodi sedia ada yang disuntik ke dalam badan untuk melawan toksin tetanus serta-merta, memberikan keimunan pasif buatan."
      },
      {
        "q": "Mengapakah suntikan dos penggalak (booster dose) diperlukan dalam program pemvaksinan keimunan aktif buatan?",
        "options": [
          "Untuk membunuh bakteria yang tertinggal dalam badan",
          "Untuk merangsang sel memori menghasilkan aras antibodi yang jauh lebih tinggi melebihi aras keimunan bagi tempoh lama",
          "Untuk mencairkan darah pesakit",
          "Untuk mengurangkan suhu demam"
        ],
        "answer": 1,
        "explanation": "Dos pertama hanya merangsang pembentukan sedikit antibodi di bawah aras keimunan. Dos penggalak mencetuskan tindak balas sekunder oleh sel memori menghasilkan antibodi yang melimpah dan tahan lama."
      },
      {
        "q": "Mekanisme tindakan antibodi di mana antibodi mengikat pada patogen dan menggumpalkannya bersama untuk memudahkan fagositosis dipanggil:",
        "options": [
          "Peneutralan",
          "Aglutinasi",
          "Pengopsonan",
          "Lisis"
        ],
        "answer": 1,
        "explanation": "Aglutinasi ialah penggumpalan antigen/patogen oleh antibodi dwitapak, memudahkan fagosit mengepung dan memusnahkan mikrob secara beramai-ramai."
      },
      {
        "q": "Bagaimanakah seorang bayi yang baru lahir memperoleh keimunan pasif semula jadi daripada ibunya?",
        "options": [
          "Melalui pemindahan darah semasa pembedahan",
          "Melalui antibodi yang merentasi plasenta semasa kehamilan dan melalui kolostrum susu ibu",
          "Melalui suntikan vaksin Hepatitis B di hospital",
          "Melalui penghasilan antibodi sendiri oleh sumsum tulang bayi"
        ],
        "answer": 1,
        "explanation": "Antibodi ibu merentasi plasenta ke dalam peredaran darah fetus dan diserap melalui susu kolostrum, memberikan keimunan pasif semula jadi kepada bayi."
      },
      {
        "q": "Virus HIV berbahaya kepada sistem badan manusia kerana virus ini memusnahkan secara khusus:",
        "options": [
          "Sel darah merah (eritrosit)",
          "Sel Limfosit T pembantu (CD4⁺)",
          "Sel platlet pembeku darah",
          "Sel epitelium kulit"
        ],
        "answer": 1,
        "explanation": "HIV menyasarkan dan membiak di dalam sel limfosit T pembantu, melumpuhkan pusat komunikasi sistem keimunan dan membawa kepada sindrom AIDS."
      }
    ],
    "struktur": [
      {
        "q": "Rajah menunjukkan graf kepekatan antibodi dalam darah bagi dua individu, X yang menerima suntikan vaksin dan Y yang menerima suntikan antiserum.\n(a) Nyatakan perbezaan masa yang diambil oleh individu X dan individu Y untuk mencapai aras keimunan.\n(b) Terangkan mengapa perlindungan yang diperoleh individu X tahan lama berbanding individu Y.",
        "skema": [
          "(a) Individu X (vaksin) mengambil masa beberapa hari atau minggu untuk mencapai aras keimunan secara perlahan [1m]. Individu Y (antiserum) mencapai aras keimunan dengan serta-merta sejurus selepas suntikan diberikan [1m].",
          "(b) Individu X menghasilkan antibodinya sendiri melalui gerak balas limfosit dan menghasilkan sel memori yang berupaya mengingati antigen untuk menghasilkan antibodi pantas pada masa hadapan [2m]. Individu Y hanya menerima antibodi luar tanpa rangsangan limfosit badan, tiada sel memori dihasilkan, dan antibodi luar tersebut akan dinyahkan oleh badan selepas beberapa minggu [2m]."
        ]
      }
    ]
  },
  {
    "id": "bio-bab12",
    "babNum": "BAB 12",
    "title": "KOORDINASI DAN GERAK BALAS DALAM MANUSIA",
    "icon": "🧠",
    "anyflipPages": "Halaman 222 – 244 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Koordinasi badan membolehkan hidupan mengesan rangsangan dan menghasilkan gerak balas yang tepat untuk kemandirian. Bab ini menerangkan sistem saraf (otak, saraf tunjang, neuron deria, perantaraan dan motor, sinaps kimia dan arka refleks), sistem endokrin (kelenjar pituitari, tiroid, adrenal, pankreas, gonad dan hormon masing-masing), perbandingan kawalan saraf vs endokrin, serta isu kesihatan seperti Parkinson, Alzheimer dan ketagihan dadah.",
    "notes": [
      {
        "subtopic": "12.1 Konsep Koordinasi & 12.2 Sistem Saraf Manusia",
        "summary": "Laluan rangsangan -> reseptor -> pusat integrasi -> efektor -> gerak balas.",
        "points": [
          "Komponen Koordinasi: Rangsangan (dalaman/luaran) dikesan oleh Reseptor deria -> mencetuskan impuls saraf -> dihantar ke Pusat Integrasi (Otak/Saraf Tunjang) -> impuls dihantar ke Efektor (otot/kelenjar) -> menghasilkan Gerak Balas.",
          "Bahagian Otak Manusia:\n  • Serebrum: Bahagian terbesar; mengawal pemikiran sedar, intelek, pertuturan, emosi, ingatan, dan pergerakan otot terkawal.\n  • Serebelum: Mengawal koordinasi pengecutan otot, mengekalkan postur dan keseimbangan badan.\n  • Medula Oblongata: Mengawal tindakan luar kawal autonomi asas hidup (kadar denyutan jantung, pernafasan, peristalsis, tekanan darah, refleks muntah/batuk).\n  • Hipotalamus: Pusat kawalan homeostasis (mengawal atur suhu badan, tekanan osmosis darah, lapar, dahaga) dan mengawal kelenjar pituitari.",
          "Saraf Tunjang: Menghubungkan otak dengan saraf periferi dan mengawal tindakan refleks pantas."
        ],
        "verbatim": [
          "Komponen Koordinasi: Rangsangan (dalaman/luaran) dikesan oleh Reseptor deria -> mencetuskan impuls saraf -> dihantar ke Pusat Integrasi (Otak/Saraf Tunjang) -> impuls dihantar ke Efektor (otot/kelenjar) -> menghasilkan Gerak Balas.",
          "Bahagian Otak Manusia:\n  • Serebrum: Bahagian terbesar; mengawal pemikiran sedar, intelek, pertuturan, emosi, ingatan, dan pergerakan otot terkawal.\n  • Serebelum: Mengawal koordinasi pengecutan otot, mengekalkan postur dan keseimbangan badan.\n  • Medula Oblongata: Mengawal tindakan luar kawal autonomi asas hidup (kadar denyutan jantung, pernafasan, peristalsis, tekanan darah, refleks muntah/batuk).\n  • Hipotalamus: Pusat kawalan homeostasis (mengawal atur suhu badan, tekanan osmosis darah, lapar, dahaga) dan mengawal kelenjar pituitari.",
          "Saraf Tunjang: Menghubungkan otak dengan saraf periferi dan mengawal tindakan refleks pantas."
        ],
        "explanation": "Laluan rangsangan -> reseptor -> pusat integrasi -> efektor -> gerak balas."
      },
      {
        "subtopic": "12.3 Struktur Neuron, Sinaps & Arka Refleks",
        "summary": "3 jenis neuron, transmisi neurotransmiter merentasi celah sinaps, dan arka refleks 3-neuron.",
        "points": [
          "Jenis Neuron:\n  • Neuron Deria (Aferen): Membawa impuls dari reseptor ke saraf tunjang/otak. Badan sel terletak di ganglion akar dorsal saraf tunjang.\n  • Neuron Perantaraan (Geganti/Interneuron): Menghubungkan neuron deria dengan neuron motor di dalam jirim kelabu saraf tunjang.\n  • Neuron Motor (Eferen): Membawa impuls dari saraf tunjang/otak ke efektor (otot mengecut atau kelenjar merembes). Mempunyai akson panjang dan salut mielin tebal.\n  • Salut Mielin: Penebat lipid yang mempercepatkan pengaliran impuls saraf melalui konduksi saltatori (melompat dari satu Nodus Ranvier ke nodus seterusnya).",
          "Sinaps: Jurang mikroskopik antara terminal akson satu neuron dengan dendrit neuron seterusnya. Apabila impuls tiba, vesikel sinaps membebaskan Neurotransmiter (cth: Asetilkolina, Dopamin, Serotonin) ke celah sinaps melalui eksositosis -> neurotransmiter meresap dan mengikat pada reseptor membran pascasinaps -> mencetuskan impuls saraf baharu.",
          "Arka Refleks (Sentuhan Objek Panas): Reseptor haba kulit dikesan -> impuls dihantar melalui Neuron Deria ke saraf tunjang -> merentasi sinaps ke Neuron Perantaraan -> merentasi sinaps ke Neuron Motor -> Efektor (otot biseps lengan) mengecut menarik tangan serta-merta tanpa menunggu pemprosesan sedar otak."
        ],
        "verbatim": [
          "Jenis Neuron:\n  • Neuron Deria (Aferen): Membawa impuls dari reseptor ke saraf tunjang/otak. Badan sel terletak di ganglion akar dorsal saraf tunjang.\n  • Neuron Perantaraan (Geganti/Interneuron): Menghubungkan neuron deria dengan neuron motor di dalam jirim kelabu saraf tunjang.\n  • Neuron Motor (Eferen): Membawa impuls dari saraf tunjang/otak ke efektor (otot mengecut atau kelenjar merembes). Mempunyai akson panjang dan salut mielin tebal.\n  • Salut Mielin: Penebat lipid yang mempercepatkan pengaliran impuls saraf melalui konduksi saltatori (melompat dari satu Nodus Ranvier ke nodus seterusnya).",
          "Sinaps: Jurang mikroskopik antara terminal akson satu neuron dengan dendrit neuron seterusnya. Apabila impuls tiba, vesikel sinaps membebaskan Neurotransmiter (cth: Asetilkolina, Dopamin, Serotonin) ke celah sinaps melalui eksositosis -> neurotransmiter meresap dan mengikat pada reseptor membran pascasinaps -> mencetuskan impuls saraf baharu.",
          "Arka Refleks (Sentuhan Objek Panas): Reseptor haba kulit dikesan -> impuls dihantar melalui Neuron Deria ke saraf tunjang -> merentasi sinaps ke Neuron Perantaraan -> merentasi sinaps ke Neuron Motor -> Efektor (otot biseps lengan) mengecut menarik tangan serta-merta tanpa menunggu pemprosesan sedar otak."
        ],
        "explanation": "3 jenis neuron, transmisi neurotransmiter merentasi celah sinaps, dan arka refleks 3-neuron."
      },
      {
        "subtopic": "12.4 Sistem Endokrin & Perbandingan dengan Sistem Saraf",
        "summary": "Kelenjar tanpa salur merembeskan hormon ke dalam darah.",
        "points": [
          "Kelenjar Endokrin Utama:\n  • Kelenjar Pituitari ('Kelenjar Induk'): Merembeskan GH (hormon pertumbuhan), TSH (merangsang tiroid), ACTH (merangsang adrenal), ADH (penyerapan air di ginjal), Oksitosin (pengecutan rahim), FSH & LH (mengawal kitar haid/gametogenesis).\n  • Kelenjar Tiroid: Merembeskan Tiroksina (mengawal atur kadar metabolisme badan dan perkembangan mental).\n  • Kelenjar Adrenal: Merembeskan Adrenalina (menyediakan badan untuk situasi cemas 'lawan atau lari' - menaikkan kadar denyutan jantung, glukosa darah dan pernafasan) dan Aldosteron (penyerapan garam di ginjal).\n  • Pankreas: Sel Islet Langerhans merembeskan Insulin (menurunkan aras glukosa darah dengan menukarkannya kepada glikogen) dan Glukagon (menaikkan aras glukosa darah dengan menguraikan glikogen di hati).\n  • Ovari (Estrogen & Progesteron) dan Testis (Testosteron).",
          "Perbandingan Saraf vs Endokrin:\n  • Sistem Saraf: Isyarat elektrik (impuls), penghantaran sangat pantas melalui gentian saraf, sasaran setempat spesifik, kesan gerak balas serta-merta dan berbalik singkat.\n  • Sistem Endokrin: Isyarat kimia (hormon), penghantaran perlahan melalui aliran darah, sasaran meluas (organ sasaran), kesan berterusan dan tahan lama."
        ],
        "verbatim": [
          "Kelenjar Endokrin Utama:\n  • Kelenjar Pituitari ('Kelenjar Induk'): Merembeskan GH (hormon pertumbuhan), TSH (merangsang tiroid), ACTH (merangsang adrenal), ADH (penyerapan air di ginjal), Oksitosin (pengecutan rahim), FSH & LH (mengawal kitar haid/gametogenesis).\n  • Kelenjar Tiroid: Merembeskan Tiroksina (mengawal atur kadar metabolisme badan dan perkembangan mental).\n  • Kelenjar Adrenal: Merembeskan Adrenalina (menyediakan badan untuk situasi cemas 'lawan atau lari' - menaikkan kadar denyutan jantung, glukosa darah dan pernafasan) dan Aldosteron (penyerapan garam di ginjal).\n  • Pankreas: Sel Islet Langerhans merembeskan Insulin (menurunkan aras glukosa darah dengan menukarkannya kepada glikogen) dan Glukagon (menaikkan aras glukosa darah dengan menguraikan glikogen di hati).\n  • Ovari (Estrogen & Progesteron) dan Testis (Testosteron).",
          "Perbandingan Saraf vs Endokrin:\n  • Sistem Saraf: Isyarat elektrik (impuls), penghantaran sangat pantas melalui gentian saraf, sasaran setempat spesifik, kesan gerak balas serta-merta dan berbalik singkat.\n  • Sistem Endokrin: Isyarat kimia (hormon), penghantaran perlahan melalui aliran darah, sasaran meluas (organ sasaran), kesan berterusan dan tahan lama."
        ],
        "explanation": "Kelenjar tanpa salur merembeskan hormon ke dalam darah."
      },
      {
        "subtopic": "12.5 Isu Kesihatan Sistem Saraf",
        "summary": "Penyakit neurodegeneratif dan kesan penyalahgunaan dadah.",
        "points": [
          "Penyakit Parkinson: Kemerosotan sel saraf di bahagian otak yang menghasilkan neurotransmiter Dopamin. Menyebabkan tangan menggeletar (tremor), otot tegang dan pergerakan perlahan.",
          "Penyakit Alzheimer: Kehilangan sel neuron otak dan kemerosotan tisu serebrum akibat pembentukan plak protein beta-amiloid. Menyebabkan kehilangan memori, kekeliruan mental dan perubahan tingkah laku.",
          "Kesan Dadah Terhadap Sistem Saraf: Dadah perangsang (cth: amfetamin, kokain) meningkatkan aktiviti neurotransmiter, manakala dadah penenang (cth: heroin, barbiturat) merencat penghantaran impuls sinaps, melambatkan gerak balas dan membawa kepada ketagihan kronik."
        ],
        "verbatim": [
          "Penyakit Parkinson: Kemerosotan sel saraf di bahagian otak yang menghasilkan neurotransmiter Dopamin. Menyebabkan tangan menggeletar (tremor), otot tegang dan pergerakan perlahan.",
          "Penyakit Alzheimer: Kehilangan sel neuron otak dan kemerosotan tisu serebrum akibat pembentukan plak protein beta-amiloid. Menyebabkan kehilangan memori, kekeliruan mental dan perubahan tingkah laku.",
          "Kesan Dadah Terhadap Sistem Saraf: Dadah perangsang (cth: amfetamin, kokain) meningkatkan aktiviti neurotransmiter, manakala dadah penenang (cth: heroin, barbiturat) merencat penghantaran impuls sinaps, melambatkan gerak balas dan membawa kepada ketagihan kronik."
        ],
        "explanation": "Penyakit neurodegeneratif dan kesan penyalahgunaan dadah."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Pencetusan Impuls Saraf & Potensi Tindakan",
        "detail": "Rangsangan deria mengganggu keupayaan rehat membran neuron (-70 mV). Saluran ion Na⁺ terbuka membenarkan ion Na⁺ meluru masuk ke dalam akson menyebabkan bahagian dalam akson menjadi positif (+30 mV, penyahkutuban).",
        "tip": "Salut mielin membolehkan impuls melompat pantas antara nodus Ranvier secara konduksi saltatori."
      },
      {
        "step": "Langkah 2",
        "title": "Transmisi Impuls Merentasi Celah Sinaps",
        "detail": "Impuls tiba di tombol sinaps menyebabkan vesikel sinaps bercantum dengan membran prasinaps dan merembeskan neurotransmiter (cth: asetilkolina) ke celah sinaps melalui eksositosis. Bahan ini meresap mengikat reseptor neuron pascasinaps.",
        "tip": "Mitokondrion banyak di tombol sinaps untuk membekalkan ATP sintesis neurotransmiter."
      },
      {
        "step": "Langkah 3",
        "title": "Laluan Arka Refleks Tiga Neuron",
        "detail": "Reseptor sakit mengesan rangsangan panas → Impuls dihantar sepanjang Neuron Deria → Masuk saraf tunjang melalui akar dorsal → Merentasi celah sinaps ke Neuron Perantaraan → Merentasi sinaps kedua ke Neuron Motor melalui akar ventral → Efektor otot mengecut serta-merta.",
        "tip": "Refleks saraf tunjang bertindak secara automatik dan pantas tanpa menunggu arahan sedar otak."
      },
      {
        "step": "Langkah 4",
        "title": "Koordinasi Endokrin & Kawalan Hormon",
        "detail": "Hipotalamus merangsang kelenjar pituitari (kelenjar induk) merembeskan hormon tropik (seperti TSH, ACTH, ADH, FSH) ke dalam aliran darah untuk merangsang kelenjar sasaran menghasilkan hormon fisiologi.",
        "tip": "Gerak balas hormon lebih lambat daripada gerak balas saraf tetapi kesannya bertahan lebih lama."
      }
    ],
    "keypoints": [
      {
        "term": "Neurotransmiter",
        "meaning": "Bahan kimia biokimia (seperti asetilkolina dan dopamin) yang disimpan dalam vesikel sinaps untuk memindahkan impuls saraf merentasi celah sinaps.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Salut Mielin",
        "meaning": "Lapisan penebat lipid yang menyaluti akson neuron untuk melindungi gentian saraf dan membolehkan impuls melompat laju secara konduksi saltatori.",
        "badge": "Istilah SPM"
      },
      {
        "term": "Arka Refleks",
        "meaning": "Laluan transmisi impuls saraf yang paling pendek dari reseptor ke efektor untuk menghasilkan gerak balas refleks luar kawal yang serta-merta.",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Kelenjar Induk (Master Gland)",
        "meaning": "Gelaran kepada kelenjar pituitari kerana merembeskan pelbagai hormon tropik yang mengawal atur rembesan kelenjar endokrin lain.",
        "badge": "Mekanisme"
      },
      {
        "term": "Penyakit Parkinson",
        "meaning": "Penyakit saraf kronik akibat kekurangan rembesan neurotransmiter dopamin di otak yang membawa kepada gegaran otot tidak terkawal.",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Bahagian otak manusia manakah yang bertanggungjawab mengawal keseimbangan badan dan koordinasi pengecutan otot rangka semasa menunggang basikal?",
        "options": [
          "Serebrum",
          "Serebelum",
          "Medula oblongata",
          "Hipotalamus"
        ],
        "answer": 1,
        "explanation": "Serebelum berfungsi menyelaras pergerakan motor halus, mengekalkan postur tubuh dan keseimbangan badan semasa pergerakan kompleks."
      },
      {
        "q": "Apakah peranan utama neurotransmiter di celah sinaps sistem saraf?",
        "options": [
          "Membekalkan tenaga ATP kepada gentian otot",
          "Memindahkan isyarat impuls saraf secara kimia dari membran prasinaps ke reseptor pascasinaps",
          "Menebat akson daripada kehilangan haba",
          "Menghasilkan sel darah putih"
        ],
        "answer": 1,
        "explanation": "Oleh sebab impuls elektrik tidak dapat melompat merentasi jurang fizikal celah sinaps, bahan kimia neurotransmiter dibebaskan untuk merangsang penjanaan impuls baharu pada neuron penerima."
      },
      {
        "q": "Seorang lelaki terserempak dengan seekor anjing garang. Jantungnya berdegup kencang, pernafasannya laju dan anak matanya membesar. Hormon manakah yang bertanggungjawab menghasilkan gerak balas ini?",
        "options": [
          "Insulin",
          "Tiroksina",
          "Adrenalina",
          "Melatonin"
        ],
        "answer": 2,
        "explanation": "Hormon adrenalina dirembeskan oleh medula adrenal semasa situasi cemas ('lawan atau lari'), meningkatkan kadar glukosa darah, kadar denyutan jantung dan pengudaraan peparu."
      },
      {
        "q": "Kekurangan hormon insulin yang dirembeskan oleh sel beta Islet Langerhans dalam pankreas akan mengakibatkan:",
        "options": [
          "Penyakit goiter",
          "Penyakit kencing manis (Diabetes melitus)",
          "Penyakit kerdil (Dwarfism)",
          "Kekejangan otot"
        ],
        "answer": 1,
        "explanation": "Insulin berfungsi menurunkan aras glukosa darah dengan merangsang penukaran glukosa kepada glikogen di hati. Kekurangan insulin menyebabkan Diabetes melitus (glukosa darah tinggi)."
      },
      {
        "q": "Laluan arka refleks bagi sentakan lutut (knee-jerk reflex) adalah unik kerana:",
        "options": [
          "Melibatkan otak besar serebrum",
          "Merupakan refleks monosinaps yang hanya melibatkan dua neuron (Neuron Deria dan Neuron Motor) tanpa neuron perantaraan",
          "Tidak memerlukan efektor otot",
          "Hanya berlaku semasa tidur"
        ],
        "answer": 1,
        "explanation": "Refleks sentakan lutut ialah refleks regangan otot 2-neuron (monosinaptik) di mana neuron deria bersinaps secara terus dengan neuron motor di saraf tunjang tanpa interneuron."
      }
    ],
    "struktur": [
      {
        "q": "Rajah menunjukkan struktur satu sinaps antara hujung akson prasinaps dengan dendrit pascasinaps.\n(a) Huraikan bagaimana impuls saraf dipindahkan merentasi celah sinaps.\n(b) Terangkan mengapa pengaliran impuls saraf di celah sinaps hanya berlaku dalam satu arah sahaja.",
        "skema": [
          "(a) Apabila impuls tiba di bonggol sinaps, ion kalsium (Ca²⁺) meresap masuk merangsang vesikel sinaps bercantum dengan membran prasinaps [1m]. Neurotransmiter (cth: asetilkolina) dibebaskan ke dalam celah sinaps secara eksositosis dan meresap merentasi celah sinaps [1m]. Neurotransmiter mengikat pada protein reseptor spesifik pada membran pascasinaps, membuka saluran ion dan mencetuskan potensi tindakan / impuls saraf baharu [1m].",
          "(b) Vesikel sinaps yang mengandungi neurotransmiter hanya terdapat pada bonggol prasinaps, manakala protein reseptor spesifik hanya terdapat pada membran pascasinaps [2m]."
        ]
      }
    ]
  },
  {
    "id": "bio-bab13",
    "babNum": "BAB 13",
    "title": "HOMEOSTASIS DAN SISTEM URINARI MANUSIA",
    "icon": "💧",
    "anyflipPages": "Halaman 246 – 264 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Homeostasis mengekalkan kestabilan persekitaran dalaman badan (suhu, glukosa darah, tekanan osmosis darah) melalui mekanisme suap balik negatif. Bab ini membincangkan pengawalaturan suhu badan dan glukosa, struktur ginjal dan nefron, proses pembentukan air kencing (ultraturasan, penyerapan semula, rembesan), kawal atur tekanan osmosis darah oleh hormon ADH dan Aldosteron, serta rawatan hemodialisis bagi kegagalan ginjal.",
    "notes": [
      {
        "subtopic": "13.1 Konsep Homeostasis & Pengawalaturan Badan",
        "summary": "Mekanisme suap balik negatif mengembalikan parameter badan yang menyimpang ke julat normal.",
        "points": [
          "Prinsip Suap Balik Negatif: Apabila nilai faktor fizikal/kimia persekitaran dalaman menyimpang daripada aras normal, mekanisme pembetulan diaktifkan untuk mengembalikan nilai ke aras julat normal.",
          "Kawal Atur Suhu Badan (Termoregulasi):\n  • Suhu Meningkat (Hari Panas): Termoreseptor kulit dan hipotalamus terangsang -> Vasodilatasi arteriol kulit (lebih banyak darah mengalir ke permukaan menyingkirkan haba secara radiasi), kelenjar peluh merembeskan peluh (penyejatan menyerap haba pendam), otot erektor mengendur (bulu roma condong ke kulit), kadar metabolisme dan rembesan tiroksina berkurang.\n  • Suhu Menurun (Hari Sejuk): Vasokonstriksi arteriol kulit (kurangkan kehilangan haba), kelenjar peluh tidak aktif, otot erektor mengecut (bulu roma tegak memerangkap lapisan udara penebat), otot rangka mengecut dan mengendur secara pantas (menggigil menghasilkan haba), rembesan tiroksina dan adrenalina meningkat memacu metabolisme haba.",
          "Kawal Atur Aras Glukosa Darah:\n  • Glukosa Tinggi (Selepas Makan): Sel beta pankreas merembeskan Insulin -> merangsang sel hati dan otot menyerap glukosa dan menukarkannya kepada glikogen (glikogenesis) -> aras glukosa turun ke normal (90 mg/100 ml).\n  • Glukosa Rendah (Berpuasa): Sel alfa pankreas merembeskan Glukagon -> merangsang hati menguraikan glikogen kepada glukosa (glikogenolisis) -> aras glukosa naik ke normal."
        ],
        "verbatim": [
          "Prinsip Suap Balik Negatif: Apabila nilai faktor fizikal/kimia persekitaran dalaman menyimpang daripada aras normal, mekanisme pembetulan diaktifkan untuk mengembalikan nilai ke aras julat normal.",
          "Kawal Atur Suhu Badan (Termoregulasi):\n  • Suhu Meningkat (Hari Panas): Termoreseptor kulit dan hipotalamus terangsang -> Vasodilatasi arteriol kulit (lebih banyak darah mengalir ke permukaan menyingkirkan haba secara radiasi), kelenjar peluh merembeskan peluh (penyejatan menyerap haba pendam), otot erektor mengendur (bulu roma condong ke kulit), kadar metabolisme dan rembesan tiroksina berkurang.\n  • Suhu Menurun (Hari Sejuk): Vasokonstriksi arteriol kulit (kurangkan kehilangan haba), kelenjar peluh tidak aktif, otot erektor mengecut (bulu roma tegak memerangkap lapisan udara penebat), otot rangka mengecut dan mengendur secara pantas (menggigil menghasilkan haba), rembesan tiroksina dan adrenalina meningkat memacu metabolisme haba.",
          "Kawal Atur Aras Glukosa Darah:\n  • Glukosa Tinggi (Selepas Makan): Sel beta pankreas merembeskan Insulin -> merangsang sel hati dan otot menyerap glukosa dan menukarkannya kepada glikogen (glikogenesis) -> aras glukosa turun ke normal (90 mg/100 ml).\n  • Glukosa Rendah (Berpuasa): Sel alfa pankreas merembeskan Glukagon -> merangsang hati menguraikan glikogen kepada glukosa (glikogenolisis) -> aras glukosa naik ke normal."
        ],
        "explanation": "Mekanisme suap balik negatif mengembalikan parameter badan yang menyimpang ke julat normal."
      },
      {
        "subtopic": "13.2 Sistem Urinari & Struktur Nefron",
        "summary": "Anatomi ginjal dan unit penuras mikroskopik nefron.",
        "points": [
          "Struktur Ginjal: Korteks (bahagian luar), Medula (bahagian dalam berbentuk piramid), Pelvis ginjal (mengumpul air kencing), Ureter membawa air kencing ke Pundi Kencing.",
          "Struktur Nefron (Unit Berfungsi Ginjal):\n  • Kapsul Bowman: Kantung cawan di korteks yang menyelaputi gumpalan kapilari darah Glomerulus.\n  • Tubul Berliku Proksimal: Salur berliku pertama di korteks, tapak utama penyerapan semula.\n  • Liku Henle: Tiub berbentuk 'U' yang menjunam ke dalam medula (cabang menurun telap air, cabang menaik telap garam).\n  • Tubul Berliku Distal: Salur berliku kedua di korteks, tapak rembesan bahan kumuh dan kawal atur elektrolit.\n  • Tubul Pengumpul: Menerima hasil turasan dari beberapa nefron, menyalurkan air kencing ke pelvis ginjal."
        ],
        "verbatim": [
          "Struktur Ginjal: Korteks (bahagian luar), Medula (bahagian dalam berbentuk piramid), Pelvis ginjal (mengumpul air kencing), Ureter membawa air kencing ke Pundi Kencing.",
          "Struktur Nefron (Unit Berfungsi Ginjal):\n  • Kapsul Bowman: Kantung cawan di korteks yang menyelaputi gumpalan kapilari darah Glomerulus.\n  • Tubul Berliku Proksimal: Salur berliku pertama di korteks, tapak utama penyerapan semula.\n  • Liku Henle: Tiub berbentuk 'U' yang menjunam ke dalam medula (cabang menurun telap air, cabang menaik telap garam).\n  • Tubul Berliku Distal: Salur berliku kedua di korteks, tapak rembesan bahan kumuh dan kawal atur elektrolit.\n  • Tubul Pengumpul: Menerima hasil turasan dari beberapa nefron, menyalurkan air kencing ke pelvis ginjal."
        ],
        "explanation": "Anatomi ginjal dan unit penuras mikroskopik nefron."
      },
      {
        "subtopic": "13.3 Proses Pembentukan Air Kencing & Pengosmokawalaturan",
        "summary": "Ultraturasan, Penyerapan Semula, Rembesan, dan peranan hormon ADH serta Aldosteron.",
        "points": [
          "1. Ultraturasan (di Kapsul Bowman):\n  • Diameter arteriol aferen yang membawa darah masuk lebih besar daripada diameter arteriol eferen yang membawa darah keluar -> menghasilkan Tekanan Hidrostatik Darah Sangat Tinggi dalam glomerulus.\n  • Bendalir plasma darah ditapis merentasi membran asas dinding kapilari ke dalam kapsul Bowman membentuk Hasil Turasan Glomerulus (mengandungi air, glukosa, asid amino, urea, garam mineral).\n  • Sel darah merah, platlet dan protein plasma besar (seperti albumin) TIDAK dituras kerana saiz molekulnya terlalu besar.",
          "2. Penyerapan Semula:\n  • Di Tubul Berliku Proksimal: 100% glukosa dan asid amino diserap semula ke dalam kapilari darah secara pengangkutan aktif; kebanyakan ion Na⁺ diserap secara aktif, ion Cl⁻ dan molekul air diserap semula secara osmosis (kira-kira 65-80%).\n  • Di Liku Henle: Penyerapan semula air secara osmosis di cabang menurun dan ion Na⁺/Cl⁻ secara aktif di cabang menaik.\n  • Di Tubul Berliku Distal: Penyerapan semula air dan garam dikawal oleh hormon.",
          "3. Rembesan (di Tubul Berliku Distal & Pengumpul):\n  • Bahan kumuh seperti urea, asid urik, kreatinin, ion H⁺, ion K⁺, toksin dan ubat disingkirkan dari kapilari peritubul ke dalam lumen tubul secara pengangkutan aktif dan resapan untuk mengekalkan pH darah (7.35–7.45).",
          "4. Pengosmokawalaturan Tekanan Osmosis Darah:\n  • Tekanan Osmosis Darah Meningkat (Kurang minum air / banyak berpeluh): Osmoreseptor hipotalamus dirangsang -> Kelenjar Pituitari Posterior merembeskan lebih banyak Hormon Antidiuresis (ADH) ke dalam darah -> Dinding tubul berliku distal dan tubul pengumpul menjadi LEBIH TELAP kepada air -> Lebih banyak air diserap semula ke dalam darah -> Air kencing dihasilkan dalam isi padu sedikit dan pekat.\n  • Tekanan Osmosis Darah Menurun (Minum banyak air): Kurang ADH dirembeskan -> Dinding tubul menjadi KURANG TELAP kepada air -> Kurang air diserap semula -> Air kencing terhasil dalam isi padu banyak dan cair."
        ],
        "verbatim": [
          "1. Ultraturasan (di Kapsul Bowman):\n  • Diameter arteriol aferen yang membawa darah masuk lebih besar daripada diameter arteriol eferen yang membawa darah keluar -> menghasilkan Tekanan Hidrostatik Darah Sangat Tinggi dalam glomerulus.\n  • Bendalir plasma darah ditapis merentasi membran asas dinding kapilari ke dalam kapsul Bowman membentuk Hasil Turasan Glomerulus (mengandungi air, glukosa, asid amino, urea, garam mineral).\n  • Sel darah merah, platlet dan protein plasma besar (seperti albumin) TIDAK dituras kerana saiz molekulnya terlalu besar.",
          "2. Penyerapan Semula:\n  • Di Tubul Berliku Proksimal: 100% glukosa dan asid amino diserap semula ke dalam kapilari darah secara pengangkutan aktif; kebanyakan ion Na⁺ diserap secara aktif, ion Cl⁻ dan molekul air diserap semula secara osmosis (kira-kira 65-80%).\n  • Di Liku Henle: Penyerapan semula air secara osmosis di cabang menurun dan ion Na⁺/Cl⁻ secara aktif di cabang menaik.\n  • Di Tubul Berliku Distal: Penyerapan semula air dan garam dikawal oleh hormon.",
          "3. Rembesan (di Tubul Berliku Distal & Pengumpul):\n  • Bahan kumuh seperti urea, asid urik, kreatinin, ion H⁺, ion K⁺, toksin dan ubat disingkirkan dari kapilari peritubul ke dalam lumen tubul secara pengangkutan aktif dan resapan untuk mengekalkan pH darah (7.35–7.45).",
          "4. Pengosmokawalaturan Tekanan Osmosis Darah:\n  • Tekanan Osmosis Darah Meningkat (Kurang minum air / banyak berpeluh): Osmoreseptor hipotalamus dirangsang -> Kelenjar Pituitari Posterior merembeskan lebih banyak Hormon Antidiuresis (ADH) ke dalam darah -> Dinding tubul berliku distal dan tubul pengumpul menjadi LEBIH TELAP kepada air -> Lebih banyak air diserap semula ke dalam darah -> Air kencing dihasilkan dalam isi padu sedikit dan pekat.\n  • Tekanan Osmosis Darah Menurun (Minum banyak air): Kurang ADH dirembeskan -> Dinding tubul menjadi KURANG TELAP kepada air -> Kurang air diserap semula -> Air kencing terhasil dalam isi padu banyak dan cair."
        ],
        "explanation": "Ultraturasan, Penyerapan Semula, Rembesan, dan peranan hormon ADH serta Aldosteron."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Ultraturasan di Kapsul Bowman Ginjal",
        "detail": "Diameter arteriol eferen yang lebih kecil berbanding arteriol aferen mewujudkan tekanan hidrostatik darah yang tinggi dalam glomerulus. Plasma darah dituras merentasi dinding glomerulus ke kapsul Bowman membentuk hasil turasan glomerulus.",
        "tip": "Sel darah merah, platlet dan protein plasma besar tidak terturas keluar."
      },
      {
        "step": "Langkah 2",
        "title": "Penyerapan Semula Pilihan di Nefron",
        "detail": "100% glukosa dan asid amino diserap semula secara pengangkutan aktif di tubul berliku proksimal. Ion natrium dan klorida diserap di liku Henle. Air diserap secara osmosis di tubul pengumpul di bawah kawalan hormon ADH.",
        "tip": "Kehadiran glukosa dalam air kencing menandakan penyakit Diabetes Melitus (kencing manis)."
      },
      {
        "step": "Langkah 3",
        "title": "Rembesan Bahan Kumuh & Pengosmoregulasian",
        "detail": "Urea, asid urik, ion hidrogen (H⁺), ammonia dan dadah dirembeskan secara aktif dari kapilari peritubul ke dalam lumen tubul berliku distal untuk mengawal atur keseimbangan pH darah dan kepekatan ion.",
        "tip": "Air kencing yang terhasil mengalir ke pelvis ginjal, ureter, pundi kencing dan uretra."
      },
      {
        "step": "Langkah 4",
        "title": "Mekanisme Suap Balik Negatif Tekanan Osmotik Darah",
        "detail": "Kekurangan air mengaktifkan osmoreseptor hipotalamus merangsang pituitari posterior merembeskan lebih ADH. Tubul pengumpul menjadi lebih telap kepada air, lebih banyak air diserap semula, menghasilkan air kencing sedikit dan pekat.",
        "tip": "Sebaliknya jika terlebih minum air, rembesan ADH direncat menghasilkan air kencing cair dan banyak."
      }
    ],
    "keypoints": [
      {
        "term": "Homeostasis",
        "meaning": "Pengekalan persekitaran dalaman organisma (suhu, aras glukosa, pH, tekanan osmosis) dalam keadaan julat dinamik yang seimbang dan malar.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Ultraturasan",
        "meaning": "Proses penurasan bendalir plasma darah di bawah tekanan hidrostatik tinggi glomerulus merentasi dinding Kapsul Bowman membentuk hasil turasan glomerulus.",
        "badge": "Istilah SPM"
      },
      {
        "term": "Hormon ADH (Vasopresin)",
        "meaning": "Hormon yang dirembeskan oleh pituitari posterior yang meningkatkan ketelapan tubul berliku distal dan tubul pengumpul terhadap penyerapan semula air.",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Hasil Turasan Glomerulus",
        "meaning": "Bendalir yang dituras masuk ke dalam kapsul Bowman mengandungi air, glukosa, asid amino, urea dan garam tanpa sel darah merah dan protein plasma.",
        "badge": "Mekanisme"
      },
      {
        "term": "Hemodialisis",
        "meaning": "Rawatan perubatan mencuci darah pesakit kegagalan ginjal menggunakan mesin dialisis dan tiub separa telap untuk menyingkirkan sisa urea dan bendalir berlebihan.",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Manakah antara komponen darah berikut TIDAK AKAN dijumpai dalam hasil turasan glomerulus seorang individu yang sihat?",
        "options": [
          "Glukosa dan asid amino",
          "Urea dan garam mineral",
          "Eritrosit (sel darah merah) dan protein plasma besar",
          "Molekul air dan ion natrium"
        ],
        "answer": 2,
        "explanation": "Sel darah merah dan protein plasma terlalu besar untuk menembusi liang membran asas glomerulus semasa ultraturasan, maka ia kekal di dalam kapilari darah."
      },
      {
        "q": "Seorang murid minum dua liter air selepas kelas sukan. Bagaimanakah rembesan hormon ADH dan ciri air kencing yang dihasilkan oleh murid tersebut?",
        "options": [
          "Rembesan ADH meningkat, air kencing pekat dan sedikit",
          "Rembesan ADH berkurang, air kencing cair dan banyak",
          "Rembesan ADH berkurang, air kencing mengandungi glukosa",
          "Rembesan ADH meningkat, air kencing tiada urea"
        ],
        "answer": 1,
        "explanation": "Minum banyak air merendahkan tekanan osmosis darah. Hipotalamus mengurangkan rembesan ADH, menjadikan tubul pengumpul kurang telap kepada air, menghasilkan air kencing banyak dan cair."
      },
      {
        "q": "Di manakah berlakunya penyerapan semula 100% molekul glukosa dan asid amino dalam nefron ginjal?",
        "options": [
          "Kapsul Bowman",
          "Tubul berliku proksimal",
          "Cabang menurun liku Henle",
          "Tubul pengumpul"
        ],
        "answer": 1,
        "explanation": "Semua glukosa dan asid amino diserap semula ke dalam kapilari darah secara pengangkutan aktif secara khusus di tubul berliku proksimal."
      },
      {
        "q": "Kehadiran molekul glukosa di dalam air kencing seseorang pesakit merupakan petunjuk klinikal bagi penyakit:",
        "options": [
          "Diabetes insipidus",
          "Diabetes melitus (Kencing manis)",
          "Penyakit batu karang",
          "Anemia kronik"
        ],
        "answer": 1,
        "explanation": "Dalam Diabetes melitus, aras glukosa darah terlalu tinggi melebihi kapasiti maksimum pengangkut di tubul berliku proksimal, menyebabkan lebihan glukosa melimpah keluar ke dalam air kencing."
      },
      {
        "q": "Apakah tindak balas arteriol kulit manusia apabila terdedah kepada persekitaran sejuk?",
        "options": [
          "Mengalami vasodilatasi untuk membebaskan lebih banyak haba",
          "Mengalami vasokonstriksi untuk mengurangkan pengaliran darah ke permukaan kulit dan mengekalkan haba",
          "Mengeluarkan peluh pekat",
          "Meningkatkan pembentukan air kencing"
        ],
        "answer": 1,
        "explanation": "Dalam persekitaran sejuk, arteriol kulit mengecut (vasokonstriksi), mengurangkan aliran darah ke kapilari berhampiran permukaan kulit bagi meminimumkan kehilangan haba melalui radiasi."
      }
    ],
    "struktur": [
      {
        "q": "Rajah menunjukkan struktur satu nefron ginjal manusia.\n(a) Terangkan bagaimana tekanan hidrostatik tinggi dijana di dalam glomerulus untuk proses ultraturasan.\n(b) Terangkan kesan terhadap penghasilan air kencing sekiranya seseorang mengalami mutasi genetik yang merosakkan reseptor hormon ADH pada sel tubul pengumpul.",
        "skema": [
          "(a) Diameter arteriol aferen yang membawa darah masuk ke glomerulus adalah lebih besar daripada diameter arteriol eferen yang membawa darah keluar [1m]. Perbezaan diameter ini mencipta rintangan aliran darah tinggi yang menjana tekanan hidrostatik darah yang tinggi di dalam glomerulus untuk menolak bendalir menembusi dinding kapilari ke kapsul Bowman [2m].",
          "(b) Sel tubul pengumpul tidak dapat bergerak balas terhadap hormon ADH, menyebabkan membran tubul kekal tidak telap kepada air [1m]. Air tidak dapat diserap semula ke dalam darah, menghasilkan isi padu air kencing yang sangat banyak dan sangat cair (keadaan Diabetes insipidus), dan pesakit akan kerap merasa dahaga melampau dan terhidrasi [2m]."
        ]
      }
    ]
  },
  {
    "id": "bio-bab14",
    "babNum": "BAB 14",
    "title": "SOKONGAN DAN PERGERAKAN DALAM MANUSIA DAN HAIWAN",
    "icon": "🦴",
    "anyflipPages": "Halaman 266 – 284 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Sistem rangka dan otot membolehkan organisma mengekalkan bentuk badan, melindungi organ dalaman, dan melakukan lokomosi. Bab ini merangkumi tiga jenis rangka hidupan (hidrostatik, rangka luar, rangka dalam), sistem rangka manusia (rangka paksi dan rangka apendaj), struktur sendi sinovia dan tisu penghubung (rawan, ligamen, tendon), tindakan otot berantagonis dalam pergerakan lengan manusia, mekanisme lokomosi haiwan (cacing tanah, belalang, burung, ikan), serta isu kesihatan sistem muskuloskeletal (osteoporosis, artritis, skoliosis).",
    "notes": [
      {
        "subtopic": "14.1 Jenis Sistem Rangka & 14.2 Sistem Rangka Manusia",
        "summary": "Rangka hidrostatik, rangka luar kitin, endoskeleton, dan 206 tulang rangka manusia.",
        "points": [
          "Jenis Rangka Hidupan:\n  • Rangka Hidrostatik: Cecair selom bertekanan dalam badan haiwan invertebrata lembut (cth: cacing tanah, obor-obor).\n  • Rangka Luar (Eksoskeleton): Kutikel berlilin keras daripada bahan kitin pada artropoda/serangga. Perlu mengalami ekdisis (penyalinan kulit berkala) untuk membolehkan tumbesaran.\n  • Rangka Dalam (Endoskeleton): Tulang dan rawan di dalam tubuh haiwan vertebrata (termasuk manusia).",
          "Rangka Paksi Manusia (80 Tulang):\n  • Tengkorak: Kranium melindungi otak dan tulang muka melindungi organ deria.\n  • Turus Vertebra: 33 ruas vertebra (7 Serviks termasuk Atlas & Aksis, 12 Toraks bersendi dengan rusuk, 5 Lumbar paling besar menampung berat badan, 5 Sakrum bercantum, 4 Koksiks bercantum).\n  • Sangkar Rusuk: 12 pasang rusuk (7 pasang rusuk benar, 3 pasang rusuk palsu, 2 pasang rusuk melayang) dan Sternum, melindungi jantung dan peparu.",
          "Rangka Apendaj Manusia (126 Tulang):\n  • Lengkungan Pektoral (klavikel & skapula) dan Anggota Hadapan (humerus, radius, ulna, karpus, metakarpus, falanks).\n  • Lengkungan Pelvis (ilium, iskium, pubis bercantum) dan Anggota Belakang (femur tulang terpanjang, patela, tibia, fibula, tarsus, metatarsus, falanks)."
        ],
        "verbatim": [
          "Jenis Rangka Hidupan:\n  • Rangka Hidrostatik: Cecair selom bertekanan dalam badan haiwan invertebrata lembut (cth: cacing tanah, obor-obor).\n  • Rangka Luar (Eksoskeleton): Kutikel berlilin keras daripada bahan kitin pada artropoda/serangga. Perlu mengalami ekdisis (penyalinan kulit berkala) untuk membolehkan tumbesaran.\n  • Rangka Dalam (Endoskeleton): Tulang dan rawan di dalam tubuh haiwan vertebrata (termasuk manusia).",
          "Rangka Paksi Manusia (80 Tulang):\n  • Tengkorak: Kranium melindungi otak dan tulang muka melindungi organ deria.\n  • Turus Vertebra: 33 ruas vertebra (7 Serviks termasuk Atlas & Aksis, 12 Toraks bersendi dengan rusuk, 5 Lumbar paling besar menampung berat badan, 5 Sakrum bercantum, 4 Koksiks bercantum).\n  • Sangkar Rusuk: 12 pasang rusuk (7 pasang rusuk benar, 3 pasang rusuk palsu, 2 pasang rusuk melayang) dan Sternum, melindungi jantung dan peparu.",
          "Rangka Apendaj Manusia (126 Tulang):\n  • Lengkungan Pektoral (klavikel & skapula) dan Anggota Hadapan (humerus, radius, ulna, karpus, metakarpus, falanks).\n  • Lengkungan Pelvis (ilium, iskium, pubis bercantum) dan Anggota Belakang (femur tulang terpanjang, patela, tibia, fibula, tarsus, metatarsus, falanks)."
        ],
        "explanation": "Rangka hidrostatik, rangka luar kitin, endoskeleton, dan 206 tulang rangka manusia."
      },
      {
        "subtopic": "14.3 Sendi Sinovia & Tisu Sokongan",
        "summary": "Sendi bebas bergerak, ligamen, tendon, rawan, dan bendalir sinovia.",
        "points": [
          "Sendi Sinovia (Sendi Bergerak Bebas):\n  • Sendi Engsel: Membenarkan pergerakan pada satu satah sahaja (cth: sendi siku dan sendi lutut).\n  • Sendi Lesung (Ball-and-Socket): Membenarkan pergerakan putaran bebas dalam semua satah (cth: sendi bahu antara humerus dengan skapula, sendi punggung antara femur dengan pelvis).",
          "Tisu Berkaitan Sendi:\n  • Tulang Rawan (Kartilaj): Melapisi hujung tulang; bertindak sebagai kusyen penyerap hentakan dan mengurangkan geseran semasa pergerakan sendi.\n  • Cecair Sinovia: Cecair pelincir yang dirembeskan oleh membran sinovia untuk melincirkan pergerakan sendi.\n  • Ligamen: Tisu penghubung kenyal, kuat dan anjal yang menyambungkan Tulang kepada Tulang; memegang sendi pada kedudukannya dan menghalang kehelan.\n  • Tendon: Tisu penghubung tidak anjal dan sangat kuat (kaya gentian kolagen) yang menyambungkan Otot Rangka kepada Tulang; memindahkan daya tarikan pengecutan otot ke tulang."
        ],
        "verbatim": [
          "Sendi Sinovia (Sendi Bergerak Bebas):\n  • Sendi Engsel: Membenarkan pergerakan pada satu satah sahaja (cth: sendi siku dan sendi lutut).\n  • Sendi Lesung (Ball-and-Socket): Membenarkan pergerakan putaran bebas dalam semua satah (cth: sendi bahu antara humerus dengan skapula, sendi punggung antara femur dengan pelvis).",
          "Tisu Berkaitan Sendi:\n  • Tulang Rawan (Kartilaj): Melapisi hujung tulang; bertindak sebagai kusyen penyerap hentakan dan mengurangkan geseran semasa pergerakan sendi.\n  • Cecair Sinovia: Cecair pelincir yang dirembeskan oleh membran sinovia untuk melincirkan pergerakan sendi.\n  • Ligamen: Tisu penghubung kenyal, kuat dan anjal yang menyambungkan Tulang kepada Tulang; memegang sendi pada kedudukannya dan menghalang kehelan.\n  • Tendon: Tisu penghubung tidak anjal dan sangat kuat (kaya gentian kolagen) yang menyambungkan Otot Rangka kepada Tulang; memindahkan daya tarikan pengecutan otot ke tulang."
        ],
        "explanation": "Sendi bebas bergerak, ligamen, tendon, rawan, dan bendalir sinovia."
      },
      {
        "subtopic": "14.4 Mekanisme Pergerakan Otot Antagonistik & Lokomosi Haiwan",
        "summary": "Tindakan pasangan otot berlawanan pada manusia dan adaptasi lokomosi haiwan.",
        "points": [
          "Otot Antagonistik pada Lengan Manusia:\n  • Membengkokkan Lengan (Fleksi): Otot Biseps mengecut manakala Otot Triseps mengendur -> Tendon biseps menarik tulang radius ke atas -> Lengan dibengkokkan.\n  • Meluruskan Lengan (Ekstensi): Otot Triseps mengecut manakala Otot Biseps mengendur -> Tendon triseps menarik tulang ulna ke bawah -> Lengan diluruskan.",
          "Lokomosi Haiwan:\n  • Cacing Tanah: Gelombang peristalsis pengecutan otot melingkar (badan memanjang & menipis) dan otot membujur (badan memendek & menebal) secara berselang-seli dibantu oleh cengkaman keta.\n  • Burung (Penerbangan): Pasangan otot pektoralis major mengecut (menarik sayap ke bawah menghasilkan daya tujah ke atas) dan pektoralis minor mengecut (menaikkan sayap ke atas); tulang berongga (pneumatik) dan sternum berkunas (keel).\n  • Ikan: Pengecutan otot miotom berbentuk 'W' berselang-seli di kedua-dua sisi badan menghasilkan daya tujah air ke hadapan dibantu sirip kaudal."
        ],
        "verbatim": [
          "Otot Antagonistik pada Lengan Manusia:\n  • Membengkokkan Lengan (Fleksi): Otot Biseps mengecut manakala Otot Triseps mengendur -> Tendon biseps menarik tulang radius ke atas -> Lengan dibengkokkan.\n  • Meluruskan Lengan (Ekstensi): Otot Triseps mengecut manakala Otot Biseps mengendur -> Tendon triseps menarik tulang ulna ke bawah -> Lengan diluruskan.",
          "Lokomosi Haiwan:\n  • Cacing Tanah: Gelombang peristalsis pengecutan otot melingkar (badan memanjang & menipis) dan otot membujur (badan memendek & menebal) secara berselang-seli dibantu oleh cengkaman keta.\n  • Burung (Penerbangan): Pasangan otot pektoralis major mengecut (menarik sayap ke bawah menghasilkan daya tujah ke atas) dan pektoralis minor mengecut (menaikkan sayap ke atas); tulang berongga (pneumatik) dan sternum berkunas (keel).\n  • Ikan: Pengecutan otot miotom berbentuk 'W' berselang-seli di kedua-dua sisi badan menghasilkan daya tujah air ke hadapan dibantu sirip kaudal."
        ],
        "explanation": "Tindakan pasangan otot berlawanan pada manusia dan adaptasi lokomosi haiwan."
      },
      {
        "subtopic": "14.5 Isu Kesihatan Sistem Muskuloskeletal",
        "summary": "Osteoporosis, osteomalasia, artritis, dan skoliosis.",
        "points": [
          "Osteoporosis: Kehilangan jisim dan ketumpatan tulang, menjadikan tulang poros, rapuh dan mudah patah. Lazim dialami oleh wanita pascamonopaus akibat penurunan aras hormon estrogen dan kekurangan kalsium serta vitamin D.",
          "Osteomalasia (Dewasa) / Riket (Kanak-kanak): Kelembutan tulang akibat kekurangan kalsium, fosforus atau vitamin D, menyebabkan tulang kaki membengkok membentuk huruf 'O' atau 'X'.",
          "Artritis (Osteoartritis & Reumatoid Artritis): Hakisan tulang rawan pada sendi dan kekurangan cecair sinovia menyebabkan geseran tulang-ke-tulang, radang, sakit dan sendi bengkak kaku.",
          "Skoliosis: Keadaan tulang belakang membengkok ke sisi membentuk lengkung huruf 'S' atau 'C'."
        ],
        "verbatim": [
          "Osteoporosis: Kehilangan jisim dan ketumpatan tulang, menjadikan tulang poros, rapuh dan mudah patah. Lazim dialami oleh wanita pascamonopaus akibat penurunan aras hormon estrogen dan kekurangan kalsium serta vitamin D.",
          "Osteomalasia (Dewasa) / Riket (Kanak-kanak): Kelembutan tulang akibat kekurangan kalsium, fosforus atau vitamin D, menyebabkan tulang kaki membengkok membentuk huruf 'O' atau 'X'.",
          "Artritis (Osteoartritis & Reumatoid Artritis): Hakisan tulang rawan pada sendi dan kekurangan cecair sinovia menyebabkan geseran tulang-ke-tulang, radang, sakit dan sendi bengkak kaku.",
          "Skoliosis: Keadaan tulang belakang membengkok ke sisi membentuk lengkung huruf 'S' atau 'C'."
        ],
        "explanation": "Osteoporosis, osteomalasia, artritis, dan skoliosis."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Anatomi Tulang & Struktur Sendi Bergerak",
        "detail": "Sendi engsel siku menghubungkan tulang humerus pada lengan atas dengan tulang radius dan ulna pada lengan bawah. Ligamen menyambungkan tulang kepada tulang, tendon menyambungkan otot kepada tulang, dan rawan mengurangkan geseran.",
        "tip": "Cecair sinovia melincirkan sendi dan membekalkan nutrien kepada sel rawan."
      },
      {
        "step": "Langkah 2",
        "title": "Tindakan Berpasangan Antagonistik Membengkokkan Lengan",
        "detail": "Otot biseps mengecut manakala otot triseps mengendur secara serentak. Daya tarikan otot biseps dipindahkan melalui tendon ke tulang radius, menarik lengan bawah ke atas membengkokkan sendi siku (fleksi).",
        "tip": "Otot rangka hanya mampu menarik apabila mengecut, ia tidak boleh menolak."
      },
      {
        "step": "Langkah 3",
        "title": "Tindakan Meluruskan Lengan (Ekstensi)",
        "detail": "Otot triseps mengecut manakala otot biseps mengendur. Daya tarikan tendon triseps menarik tulang ulna ke bawah, meluruskan lengan kembali kepada kedudukan asal.",
        "tip": "Kedua-dua otot bertindak secara berlawanan untuk menghasilkan satu pergerakan lengkap."
      },
      {
        "step": "Langkah 4",
        "title": "Mekanisme Pergerakan Ikan & Burung",
        "detail": "Ikan bergerak dengan pengecutan berselang-seli pasangan blok otot miotom di kiri dan kanan kolum vertebra. Burung terbang dengan tindakan antagonistik otot pektoralis major (tarik sayap ke bawah) dan pektoralis minor (angkat sayap).",
        "tip": "Bentuk badan larus pada ikan dan burung mengurangkan rintangan bendalir/udara."
      }
    ],
    "keypoints": [
      {
        "term": "Otot Antagonistik",
        "meaning": "Sepasang otot rangka yang bertindak secara berlawanan; apabila satu otot mengecut, pasangannya akan mengendur untuk menghasilkan pergerakan sendi.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Tendon",
        "meaning": "Tisu penghubung bergentian kolagen tebal yang kuat dan tidak anjal yang menyambungkan otot rangka kepada tulang.",
        "badge": "Istilah SPM"
      },
      {
        "term": "Ligamen",
        "meaning": "Tisu penghubung bergentian elastik yang kuat dan kenyal yang menyambungkan tulang kepada tulang pada sendi untuk memberi kestabilan.",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Sendi Sinovia",
        "meaning": "Sendi bergerak bebas yang diselaputi kapsul sendi dan dilincirkan oleh cecair sinovia serta dilindungi rawan pada hujung tulang.",
        "badge": "Mekanisme"
      },
      {
        "term": "Osteoporosis",
        "meaning": "Penyakit kemerosotan kepadatan mineral tulang yang menyebabkan tulang menjadi poros, rapuh dan mudah retak atau patah.",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Apakah fungsi utama tisu ligamen pada sendi lutut manusia?",
        "options": [
          "Menghubungkan otot biseps femoris ke tulang patela",
          "Menyambungkan tulang femur kepada tulang tibia serta menghalang kehelan sendi",
          "Merembeskan cecair sinovia pelincir",
          "Menyerap hentakan dan mengelakkan geseran tulang"
        ],
        "answer": 1,
        "explanation": "Ligamen ialah tisu bergentian kuat dan kenyal yang menyambungkan tulang kepada tulang, memegang sendi bersama dan mengawal julat pergerakan sendi."
      },
      {
        "q": "Semasa pergerakan membengkokkan lengan (fleksi), apakah keadaan otot biseps dan triseps?",
        "options": [
          "Biseps mengecut, triseps mengendur",
          "Biseps mengendur, triseps mengecut",
          "Kedua-dua biseps dan triseps mengecut serentak",
          "Kedua-dua biseps dan triseps mengendur serentak"
        ],
        "answer": 0,
        "explanation": "Otot bertindak secara berpasangan antagonistik. Untuk membengkokkan lengan, otot biseps mengecut menarik radius ke atas manakala otot triseps mengendur."
      },
      {
        "q": "Mengapakah wanita yang telah putus haid (menopaus) mempunyai risiko yang lebih tinggi untuk menghidap penyakit osteoporosis?",
        "options": [
          "Pengambilan kalsium terhenti secara semula jadi",
          "Penurunan mendadak aras hormon estrogen yang penting dalam merangsang penyerapan dan pemendapan kalsium ke dalam tulang",
          "Peningkatan mendadak hormon tiroksina",
          "Otot rangka berhenti mengecut"
        ],
        "answer": 1,
        "explanation": "Hormon estrogen merangsang pemendapan kalsium dalam tulang. Selepas menopaus, aras estrogen merosot tajam, mempercepatkan kehilangan jisim tulang dan menyebabkan osteoporosis."
      },
      {
        "q": "Bagaimanakah cacing tanah memanjangkan segmen badannya semasa bergerak ke hadapan?",
        "options": [
          "Otot membujur mengecut dan otot melingkar mengendur",
          "Otot melingkar mengecut manakala otot membujur mengendur, menolak bendalir selom ke hadapan",
          "Menggunakan sirip kaudal untuk menolak tanah",
          "Keta menarik badan secara pasif"
        ],
        "answer": 1,
        "explanation": "Pengecutan otot melingkar mengenakan tekanan ke atas cecair selom hidrostatik, menjadikan segmen cacing menipis dan memanjang ke hadapan."
      },
      {
        "q": "Seorang warga emas mengadu sakit dan bengkak pada sendi lututnya apabila berjalan. Pemeriksaan X-ray menunjukkan tulang rawannya telah haus dan jarak antara tulang femur dan tibia menyempit. Apakah penyakit ini?",
        "options": [
          "Osteoartritis",
          "Skoliosis",
          "Distrofi otot",
          "Riket"
        ],
        "answer": 0,
        "explanation": "Osteoartritis berpunca daripada kemerosotan dan kehausan rawan sendi akibat penuaan, menyebabkan geseran tulang-ke-tulang yang menyakitkan."
      }
    ],
    "struktur": [
      {
        "q": "Rajah menunjukkan sendi siku manusia yang melibatkan humerus, radius, ulna, otot biseps, triseps, dan tendon.\n(a) Nyatakan fungsi tisu tendon dalam membolehkan pergerakan lengan berlaku dan terangkan mengapa tendon mestilah bersifat tidak anjal.\n(b) Terangkan apa yang berlaku kepada pergerakan lengan sekiranya tendon yang menyambungkan otot biseps ke tulang radius terkoyak.",
        "skema": [
          "(a) Tendon berfungsi menyambungkan otot rangka kepada tulang [1m]. Tendon mestilah bersifat tidak anjal supaya daya tarikan yang dijana oleh pengecutan otot dapat dipindahkan secara terus dan efisien kepada tulang tanpa pembaziran tenaga regangan [2m].",
          "(b) Daya tarikan daripada pengecutan otot biseps tidak dapat dipindahkan ke tulang radius [1m]. Oleh itu, tulang radius tidak dapat ditarik ke atas dan lengan tidak dapat dibengkokkan (fleksi terjejas) [1m]."
        ]
      }
    ]
  },
  {
    "id": "bio-bab15",
    "babNum": "BAB 15",
    "title": "PEMBIAKAN SEKS, PERKEMBANGAN DAN PERTUMBUHAN DALAM MANUSIA DAN HAIWAN",
    "icon": "👶",
    "anyflipPages": "Halaman 286 – 314 (Buku Teks Biologi Tingkatan 4 KSSM)",
    "synopsis": "Pembiakan seks mengekalkan kesinambungan spesies dan menghasilkan variasi genetik. Bab ini menghuraikan sistem pembiakan lelaki dan perempuan, gametogenesis (spermatogenesis dalam testis dan oogenesis dalam ovari), peranan 4 hormon utama kitar haid (FSH, Estrogen, LH, Progesteron), persenyawaan dan perkembangan fetus manusia, peranan plasenta, pembentukan kembar seiras vs tak seiras, rawatan kemandulan (IVF), serta lengkung pertumbuhan manusia dan serangga.",
    "notes": [
      {
        "subtopic": "15.1 Sistem Pembiakan & 15.2 Gametogenesis",
        "summary": "Spermatogenesis berterusan menghasilkan 4 sperma vs Oogenesis menghasilkan 1 ovum berfungsi.",
        "points": [
          "Sistem Pembiakan Lelaki: Testis (menghasilkan sperma & hormon testosteron), Epididimis (mematangkan sperma), Vas Deferens (mengangkut sperma), Vesikel Semen & Kelenjar Prostat (merembeskan bendalir nutrien alkali semen).",
          "Sistem Pembiakan Perempuan: Ovari (menghasilkan oosit sekunder, estrogen & progesteron), Tiub Falopio (tapak persenyawaan), Uterus (tapak penempelan dan perkembangan embrio), Serviks, Faraj.",
          "Spermatogenesis (dalam Tubul Seminiferus Testis):\n  • Sel germa primordium membahagi secara mitosis membentuk Spermatogonium (2n).\n  • Spermatogonium membesar menjadi Spermatosit Primer (2n).\n  • Meiosis I menghasilkan 2 Spermatosit Sekunder (n).\n  • Meiosis II menghasilkan 4 Spermatid (n).\n  • Spermatid menjalani pembezaan (membentuk kepala nukleus, akrosom dan ekor flagelum) menjadi 4 Sel Sperma (n) matang.",
          "Oogenesis (dalam Ovari):\n  • Semasa perkembangan fetus perempuan: Oogonium (2n) membahagi secara mitosis membentuk Oosit Primer (2n) yang terhenti pada peringkat Profasa I meiosis.\n  • Bermula baligh, setiap kitar haid satu oosit primer menyambung Meiosis I membentuk satu Oosit Sekunder (n) besar dan satu Jasad Kutub Pertama (n) kecil.\n  • Oosit sekunder memulakan Meiosis II tetapi terhenti pada peringkat Metafasa II dan diovulasikan ke tiub Falopio.\n  • Meiosis II hanya lengkap sekiranya persenyawaan oleh sperma berlaku, menghasilkan satu Ovum (n) matang dan satu Jasad Kutub Kedua (n)."
        ],
        "verbatim": [
          "Sistem Pembiakan Lelaki: Testis (menghasilkan sperma & hormon testosteron), Epididimis (mematangkan sperma), Vas Deferens (mengangkut sperma), Vesikel Semen & Kelenjar Prostat (merembeskan bendalir nutrien alkali semen).",
          "Sistem Pembiakan Perempuan: Ovari (menghasilkan oosit sekunder, estrogen & progesteron), Tiub Falopio (tapak persenyawaan), Uterus (tapak penempelan dan perkembangan embrio), Serviks, Faraj.",
          "Spermatogenesis (dalam Tubul Seminiferus Testis):\n  • Sel germa primordium membahagi secara mitosis membentuk Spermatogonium (2n).\n  • Spermatogonium membesar menjadi Spermatosit Primer (2n).\n  • Meiosis I menghasilkan 2 Spermatosit Sekunder (n).\n  • Meiosis II menghasilkan 4 Spermatid (n).\n  • Spermatid menjalani pembezaan (membentuk kepala nukleus, akrosom dan ekor flagelum) menjadi 4 Sel Sperma (n) matang.",
          "Oogenesis (dalam Ovari):\n  • Semasa perkembangan fetus perempuan: Oogonium (2n) membahagi secara mitosis membentuk Oosit Primer (2n) yang terhenti pada peringkat Profasa I meiosis.\n  • Bermula baligh, setiap kitar haid satu oosit primer menyambung Meiosis I membentuk satu Oosit Sekunder (n) besar dan satu Jasad Kutub Pertama (n) kecil.\n  • Oosit sekunder memulakan Meiosis II tetapi terhenti pada peringkat Metafasa II dan diovulasikan ke tiub Falopio.\n  • Meiosis II hanya lengkap sekiranya persenyawaan oleh sperma berlaku, menghasilkan satu Ovum (n) matang dan satu Jasad Kutub Kedua (n)."
        ],
        "explanation": "Spermatogenesis berterusan menghasilkan 4 sperma vs Oogenesis menghasilkan 1 ovum berfungsi."
      },
      {
        "subtopic": "15.3 Kitar Haid dan Peranan Hormon",
        "summary": "Kitaran 28 hari yang dikawal oleh paksi hipotalamus-pituitari-ovari.",
        "points": [
          "Fasa Kitar Haid (Purata 28 Hari):\n  • Hari 1–5 (Fasa Haid): Aras progesteron dan estrogen merosot -> lapisan endometrium runtuh bersama darah disingkirkan.\n  • Hari 6–13 (Fasa Perkembangan Folikel): Kelenjar pituitari merembeskan Hormon Perangsang Folikel (FSH) -> merangsang folikel ovari berkembang. Folikel merembeskan Estrogen yang membaiki dan menebalkan dinding endometrium.\n  • Hari 14 (Ovulasi): Aras estrogen tinggi mencetuskan lonjakan Hormon Peluteinan (LH) -> folikel Graaf matang meletus membebaskan oosit sekunder ke tiub Falopio (Ovulasi).\n  • Hari 15–28 (Fasa Luteal): Sisa folikel membentuk Korpus Luteum yang merembeskan Progesteron dan Estrogen. Progesteron merangsang penebalan lanjut endometrium menjadi tebal, kaya salur darah dan berlendir bagi persediaan penempelan embrio.\n  • Jika tiada persenyawaan: Korpus luteum merosot -> aras progesteron jatuh menjunam -> kitar haid berulang semula."
        ],
        "verbatim": [
          "Fasa Kitar Haid (Purata 28 Hari):\n  • Hari 1–5 (Fasa Haid): Aras progesteron dan estrogen merosot -> lapisan endometrium runtuh bersama darah disingkirkan.\n  • Hari 6–13 (Fasa Perkembangan Folikel): Kelenjar pituitari merembeskan Hormon Perangsang Folikel (FSH) -> merangsang folikel ovari berkembang. Folikel merembeskan Estrogen yang membaiki dan menebalkan dinding endometrium.\n  • Hari 14 (Ovulasi): Aras estrogen tinggi mencetuskan lonjakan Hormon Peluteinan (LH) -> folikel Graaf matang meletus membebaskan oosit sekunder ke tiub Falopio (Ovulasi).\n  • Hari 15–28 (Fasa Luteal): Sisa folikel membentuk Korpus Luteum yang merembeskan Progesteron dan Estrogen. Progesteron merangsang penebalan lanjut endometrium menjadi tebal, kaya salur darah dan berlendir bagi persediaan penempelan embrio.\n  • Jika tiada persenyawaan: Korpus luteum merosot -> aras progesteron jatuh menjunam -> kitar haid berulang semula."
        ],
        "explanation": "Kitaran 28 hari yang dikawal oleh paksi hipotalamus-pituitari-ovari."
      },
      {
        "subtopic": "15.4 Perkembangan Fetus, Plasenta & Pembentukan Kembar",
        "summary": "Persenyawaan di tiub Falopio, peranan plasenta, kembar seiras vs tak seiras.",
        "points": [
          "Persenyawaan dan Perkembangan:\n  • Persenyawaan berlaku di satu pertiga tiub Falopio (sperma bercantum dengan ovum membentuk Zigot diploid 2n).\n  • Zigot membahagi secara mitosis (pembelahan) membentuk Morula (bebola sel pepejal) -> Blastosista (bebola sel berongga) yang menempel pada dinding endometrium (Penempelan).\n  • Blastosista berkembang menjadi Embrio dan seterusnya Fetus.",
          "Fungsi Plasenta dan Tali Pusat:\n  • Plasenta: Tapak pertukaran bahan antara darah ibu dengan darah fetus tanpa percampuran fizikal darah (menghalang sel darah bertekanan tinggi ibu merosakkan kapilari fetus halus, dan menghalang aglutinasi jika kumpulan darah berbeza).\n  • Meresapkan O₂, glukosa, asid amino, antibodi daripada darah ibu ke fetus; menyingkirkan $CO_2$ dan urea daripada fetus ke ibu.\n  • Plasenta juga bertindak sebagai kelenjar endokrin sementara merembeskan progesteron bermula bulan ke-3 kehamilan.",
          "Pembentukan Kembar:\n  • Kembar Seiras (Monozigot): 1 ovum disenyawakan oleh 1 sperma -> 1 zigot membahagi dua embrio berasingan -> berkongsi 1 plasenta, jantina sama, rupa paras dan kandungan genetik 100% seiras.\n  • Kembar Tak Seiras (Dizigot): 2 ovum berasingan diovulasikan dan disenyawakan oleh 2 sperma berbeza -> 2 zigot berasingan -> 2 plasenta berasingan, jantina boleh sama atau berbeza, kandungan genetik berbeza seperti adik-beradik biasa.\n  • Kembar Siam: Pembahagian blastosista kembar seiras tidak berlaku sepenuhnya, menyebabkan bayi melekat pada bahagian tubuh tertentu."
        ],
        "verbatim": [
          "Persenyawaan dan Perkembangan:\n  • Persenyawaan berlaku di satu pertiga tiub Falopio (sperma bercantum dengan ovum membentuk Zigot diploid 2n).\n  • Zigot membahagi secara mitosis (pembelahan) membentuk Morula (bebola sel pepejal) -> Blastosista (bebola sel berongga) yang menempel pada dinding endometrium (Penempelan).\n  • Blastosista berkembang menjadi Embrio dan seterusnya Fetus.",
          "Fungsi Plasenta dan Tali Pusat:\n  • Plasenta: Tapak pertukaran bahan antara darah ibu dengan darah fetus tanpa percampuran fizikal darah (menghalang sel darah bertekanan tinggi ibu merosakkan kapilari fetus halus, dan menghalang aglutinasi jika kumpulan darah berbeza).\n  • Meresapkan O₂, glukosa, asid amino, antibodi daripada darah ibu ke fetus; menyingkirkan $CO_2$ dan urea daripada fetus ke ibu.\n  • Plasenta juga bertindak sebagai kelenjar endokrin sementara merembeskan progesteron bermula bulan ke-3 kehamilan.",
          "Pembentukan Kembar:\n  • Kembar Seiras (Monozigot): 1 ovum disenyawakan oleh 1 sperma -> 1 zigot membahagi dua embrio berasingan -> berkongsi 1 plasenta, jantina sama, rupa paras dan kandungan genetik 100% seiras.\n  • Kembar Tak Seiras (Dizigot): 2 ovum berasingan diovulasikan dan disenyawakan oleh 2 sperma berbeza -> 2 zigot berasingan -> 2 plasenta berasingan, jantina boleh sama atau berbeza, kandungan genetik berbeza seperti adik-beradik biasa.\n  • Kembar Siam: Pembahagian blastosista kembar seiras tidak berlaku sepenuhnya, menyebabkan bayi melekat pada bahagian tubuh tertentu."
        ],
        "explanation": "Persenyawaan di tiub Falopio, peranan plasenta, kembar seiras vs tak seiras."
      },
      {
        "subtopic": "15.5 Isu Kesihatan Pembiakan & 15.6 Pertumbuhan Organisma",
        "summary": "Kemandulan & IVF, lengkung pertumbuhan sigmoid mamalia vs tangga ekdisis serangga.",
        "points": [
          "Kemandulan dan Teknologi Pembiakan:\n  • Rawatan Bayi Tabung Uji (IVF - In Vitro Fertilisation): Oosit matang disedut keluar dari ovari dan disenyawakan dengan sperma di dalam piring kultur kaca makmal. Embrio yang berkembang kemudiannya dimasukkan ke dalam uterus ibu untuk penempelan.",
          "Lengkung Pertumbuhan:\n  • Manusia & Tumbuhan: Lengkung Pertumbuhan Sigmoid (bentuk 'S') merangkumi Fasa Permulaan (pertumbuhan perlahan), Fasa Eksponen (pertumbuhan pesat), Fasa Pertumbuhan Perlahan, Fasa Matang (pertumbuhan sifar), dan Fasa Penuaan.\n  • Serangga (Rangka Luar): Lengkung Pertumbuhan Berbentuk Tangga. Eksoskeleton kitin tegar tidak boleh meregang. Pertumbuhan saiz hanya berlaku secara mendadak semasa Ekdisis (penyalinan kulit) di mana serangga menyedut udara untuk mengembangkan rangka luar baharu yang masih lembut sebelum mengeras."
        ],
        "verbatim": [
          "Kemandulan dan Teknologi Pembiakan:\n  • Rawatan Bayi Tabung Uji (IVF - In Vitro Fertilisation): Oosit matang disedut keluar dari ovari dan disenyawakan dengan sperma di dalam piring kultur kaca makmal. Embrio yang berkembang kemudiannya dimasukkan ke dalam uterus ibu untuk penempelan.",
          "Lengkung Pertumbuhan:\n  • Manusia & Tumbuhan: Lengkung Pertumbuhan Sigmoid (bentuk 'S') merangkumi Fasa Permulaan (pertumbuhan perlahan), Fasa Eksponen (pertumbuhan pesat), Fasa Pertumbuhan Perlahan, Fasa Matang (pertumbuhan sifar), dan Fasa Penuaan.\n  • Serangga (Rangka Luar): Lengkung Pertumbuhan Berbentuk Tangga. Eksoskeleton kitin tegar tidak boleh meregang. Pertumbuhan saiz hanya berlaku secara mendadak semasa Ekdisis (penyalinan kulit) di mana serangga menyedut udara untuk mengembangkan rangka luar baharu yang masih lembut sebelum mengeras."
        ],
        "explanation": "Kemandulan & IVF, lengkung pertumbuhan sigmoid mamalia vs tangga ekdisis serangga."
      }
    ],
    "steps": [
      {
        "step": "Langkah 1",
        "title": "Spermatogenesis & Oogenesis",
        "detail": "Spermatogenesis di tubul seminiferus testis menghasilkan 4 sel sperma haploid (n) aktif daripada satu spermatogonium (2n). Oogenesis di ovari menghasilkan 1 oosit sekunder (n) bernutrien tinggi dan 3 jasad kutub yang merosot.",
        "tip": "Oogenesis bermula sejak dalam kandungan ibu dan hanya tamat sepenuhnya selepas persenyawaan."
      },
      {
        "step": "Langkah 2",
        "title": "Kitar Haid & Interaksi Hormon Wanita",
        "detail": "Hari 1-5: Haid. Hari 6-13: FSH merangsang folikel menghasilkan estrogen untuk menebalkan endometrium. Hari 14: Lonjakan hormon LH mencetuskan ovulasi. Hari 15-24: Korpus luteum merembeskan progesteron untuk mematangkan dinding uterus.",
        "tip": "Jika tiada persenyawaan, korpus luteum merosot, progesteron jatuh menjunam memulakan haid semula."
      },
      {
        "step": "Langkah 3",
        "title": "Persenyawaan & Penempelan Blastosista",
        "detail": "Persenyawaan berlaku apabila kepala sperma menembusi membran oosit sekunder di ampula tiub Falopio membentuk zigot diploid (2n). Zigot membahagi secara mitosis membentuk morula dan blastosista yang menempel di endometrium berdarah kaya nutrien.",
        "tip": "Blastosista merembeskan hormon hCG untuk mengekalkan fungsi korpus luteum merembes progesteron."
      },
      {
        "step": "Langkah 4",
        "title": "Peranan Plasenta & Tali Pusat Fetus",
        "detail": "Plasenta menghubungkan fetus dengan dinding uterus ibu tanpa percampuran darah secara langsung. Ia membekalkan gas O₂, glukosa, asid amino dan antibodi ibu serta menyerap bahan kumuh urea dan CO₂ fetus.",
        "tip": "Darah ibu dan janin dipisahkan untuk melindungi kapilari fetus daripada tekanan darah tinggi ibu."
      }
    ],
    "keypoints": [
      {
        "term": "Spermatogenesis",
        "meaning": "Proses pembentukan sel sperma haploid daripada spermatogonium diploid di dalam tubul seminiferus testis melalui mitosis dan meiosis.",
        "badge": "Konsep Utama"
      },
      {
        "term": "Oogenesis",
        "meaning": "Proses pembentukan ovum haploid daripada oogonium diploid di dalam ovari yang bermula semasa peringkat fetus dan hanya lengkap selepas persenyawaan.",
        "badge": "Istilah SPM"
      },
      {
        "term": "Ovulasi",
        "meaning": "Pembebasan oosit sekunder dari folikel Graaf ovari yang matang ke tiub Falopio pada hari ke-14 kitar haid akibat lonjakan hormon LH.",
        "badge": "Fakta Kunci"
      },
      {
        "term": "Plasenta",
        "meaning": "Organ sementara yang terbentuk daripada tisu ibu dan fetus untuk pertukaran gas, nutrien, antibodi dan bahan kumuh antara ibu dan fetus tanpa percampuran darah.",
        "badge": "Mekanisme"
      },
      {
        "term": "Ekdisis",
        "meaning": "Proses penyalinan rangka luar kitin pada serangga dan artropoda secara berkala untuk membolehkan pertumbuhan saiz badan berlaku.",
        "badge": "Aplikasi Silibus"
      }
    ],
    "questions": [
      {
        "q": "Hormon manakah yang mengalami lonjakan kepekatan mendadak pada hari ke-13 hingga ke-14 kitar haid yang mencetuskan proses ovulasi?",
        "options": [
          "Hormon Perangsang Folikel (FSH)",
          "Hormon Peluteinan (LH)",
          "Progesteron",
          "Oksitosin"
        ],
        "answer": 1,
        "explanation": "Peningkatan aras estrogen yang tinggi merangsang kelenjar pituitari anterior merembeskan hormon LH secara mendadak (lonjakan LH), yang memecahkan folikel Graaf dan membebaskan oosit sekunder (ovulasi)."
      },
      {
        "q": "Mengapakah darah ibu tidak bercampur secara terus dengan darah fetus di dalam plasenta?",
        "options": [
          "Untuk mengelakkan darah fetus membeku",
          "Kerana tekanan darah ibu yang tinggi boleh memecahkan kapilari darah fetus yang halus dan mengelakkan aglutinasi jika kumpulan darah berbeza",
          "Kerana darah ibu mengandungi urea berkepekatan toksik",
          "Untuk menghalang hormon ibu sampai ke fetus"
        ],
        "answer": 1,
        "explanation": "Pemisahan fizikal oleh membran plasenta melindungi salur darah fetus daripada tekanan tinggi darah ibu serta menghalang penggumpalan darah (aglutinasi) sekiranya kumpulan darah ABO/Rhesus ibu dan fetus berbeza."
      },
      {
        "q": "Kembar seiras terbentuk daripada:",
        "options": [
          "Dua ovum berasingan disenyawakan oleh dua sperma berbeza",
          "Satu ovum disenyawakan oleh dua sperma serentak",
          "Satu ovum disenyawakan oleh satu sperma membentuk satu zigot yang kemudiannya membahagi kepada dua embrio berasingan",
          "Persenyawaan tanpa penglibatan sperma"
        ],
        "answer": 2,
        "explanation": "Kembar seiras terhasil daripada satu zigot tunggal (monozigot) hasil persenyawaan satu ovum dan satu sperma yang membahagi dua secara mitosis pada peringkat awal blastosista, menghasilkan dua individu seiras genetik."
      },
      {
        "q": "Apakah perbezaan utama hasil akhir antara spermatogenesis dengan oogenesis pada manusia?",
        "options": [
          "Spermatogenesis menghasilkan 1 sperma, oogenesis menghasilkan 4 ovum",
          "Spermatogenesis menghasilkan 4 sperma berfungsi, manakala oogenesis menghasilkan 1 ovum berfungsi dan 3 jasad kutub yang merosot",
          "Spermatogenesis berlaku dalam ovari, oogenesis dalam testis",
          "Spermatogenesis hanya berlaku sebelum kelahiran"
        ],
        "answer": 1,
        "explanation": "Spermatogenesis membahagi secara sitokinesis sama menghasilkan 4 sel sperma haploid aktif. Oogenesis membahagi secara tidak sama menghasilkan hanya 1 ovum kaya sitoplasma dan nutrien serta jasad kutub yang merosot."
      },
      {
        "q": "Mengapakah lengkung pertumbuhan serangga seperti belalang berbentuk tangga dan bukannya sigmoid?",
        "options": [
          "Kerana serangga bernafas melalui trakea",
          "Kerana rangka luar kitin yang keras dan tegar tidak boleh meregang, maka pertumbuhan saiz hanya berlaku secara berkala semasa ekdisis (penyalinan kulit)",
          "Kerana serangga tidak mempunyai sistem saraf",
          "Kerana suhu badan serangga berubah-ubah"
        ],
        "answer": 1,
        "explanation": "Eksoskeleton kitin yang keras mengehadkan pertambahan saiz. Pertumbuhan badan hanya boleh berlaku secara mendadak semasa fasa ekdisis apabila rangka luar baharu yang lembut disalin sebelum mengeras."
      }
    ],
    "struktur": [
      {
        "q": "Rajah menunjukkan graf perubahan aras hormon pituitari (FSH dan LH) serta hormon ovari (Estrogen dan Progesteron) sepanjang kitar haid 28 hari.\n(a) Terangkan peranan hormon Estrogen dalam fasa sebelum ovulasi (Hari 6–13).\n(b) Terangkan apa yang berlaku kepada korpus luteum dan ketebalan endometrium sekiranya persenyawaan ovum TIDAK berlaku pada hari ke-14.",
        "skema": [
          "(a) Estrogen membaiki, memulihkan dan merangsang penebalan dinding endometrium uterus selepas haid [1m]. Aras estrogen yang tinggi pada hari ke-12 hingga 13 merangsang kelenjar pituitari untuk merembeskan lonjakan hormon LH bagi mencetuskan ovulasi [1m].",
          "(b) Korpus luteum akan merosot dan berhenti merembeskan hormon progesteron dan estrogen [1m]. Kemerosotan mendadak aras progesteron menyebabkan salur darah endometrium mengecut, tisu endometrium runtuh dan disingkirkan bersama darah sebagai haid bermula hari ke-28 [2m]."
        ]
      }
    ]
  }
];
