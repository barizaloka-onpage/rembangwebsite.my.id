<script lang="ts">
	let activeFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		activeFaq = activeFaq === index ? null : index;
	}

	const siteUrl = 'https://rembangwebsite.my.id/universitas-ut-rembang';
	const metaTitle = 'Universitas Terbuka (UT) Rembang: Program Studi, Biaya, & Cara Daftar PTN';
	const metaDesc = 'Informasi lengkap Universitas Terbuka (UT) di Kabupaten Rembang. Pilihan kuliah Perguruan Tinggi Negeri (PTN) fleksibel tanpa tes masuk, akreditasi Unggul/A, pilihan jurusan S1/S2, dan panduan pendaftaran.';

	const jurusans = [
		{
			fakultas: 'FHISIP (Fakultas Hukum, Ilmu Sosial & Ilmu Politik)',
			warna: 'from-blue-600 to-indigo-700',
			icon: '⚖️',
			prodi: [
				'S1 Ilmu Hukum (Akreditasi Unggul)',
				'S1 Ilmu Administrasi Negara',
				'S1 Ilmu Komunikasi',
				'S1 Ilmu Pemerintahan',
				'S1 Sosiologi',
				'S1 Perpustakaan & Kearsipan',
				'D4 Kearsipan'
			]
		},
		{
			fakultas: 'FEB (Fakultas Ekonomi & Bisnis)',
			warna: 'from-emerald-600 to-teal-700',
			icon: '📈',
			prodi: [
				'S1 Manajemen (Akreditasi Unggul)',
				'S1 Akuntansi (Akreditasi Unggul)',
				'S1 Ekonomi Pembangunan',
				'S1 Ekonomi Syariah',
				'S1 Pariwisata'
			]
		},
		{
			fakultas: 'FKIP (Fakultas Keguruan & Ilmu Pendidikan)',
			warna: 'from-amber-600 to-orange-700',
			icon: '🎓',
			prodi: [
				'S1 PGSD (Pendidikan Guru Sekolah Dasar)',
				'S1 PGPAUD (Pendidikan Guru PAUD)',
				'S1 Pendidikan Bahasa & Sastra Indonesia',
				'S1 Pendidikan Bahasa Inggris',
				'S1 Pendidikan Matematika',
				'S1 Pendidikan Biologi / Fisika / Kimia'
			]
		},
		{
			fakultas: 'FST (Fakultas Sains & Teknologi)',
			warna: 'from-cyan-600 to-blue-700',
			icon: '💻',
			prodi: [
				'S1 Sistem Informasi',
				'S1 Statisika',
				'S1 Agribisnis (Bidang Minat Penyuluhan Pertanian/Perikanan)',
				'S1 Matematika',
				'S1 Biologi',
				'S1 Perencanaan Wilayah dan Kota (PWK)'
			]
		}
	];

	const keunggulan = [
		{
			judul: 'Perguruan Tinggi Negeri (PTN-BH) Resmi',
			deskripsi: 'Universitas Terbuka adalah PTN ke-45 di Indonesia. Ijazahnya diakui penuh secara resmi oleh Kementerian Pendidikan, BKN untuk pendaftaran CPNS/PPPK, BUMN, serta instansi swasta.',
			icon: '🏛️'
		},
		{
			judul: 'Fleksibilitas Waktu (Bisa Kuliah Sambil Kerja)',
			deskripsi: 'Sangat cocok untuk karyawan, perangkat desa, guru honorer, wirausaha, maupun fresh graduate di Rembang yang ingin meraih gelar sarjana tanpa terikat jam kelas tatap muka harian.',
			icon: '⏰'
		},
		{
			judul: 'Tanpa Tes Masuk & Bebas Uang Gedung (SPI)',
			deskripsi: 'Masuk UT tidak menggunakan ujian seleksi ketat (SNBP/SNBT). Bebas biaya uang gedung (SPI), biaya pangkal, atau sumbangan operasional. Cukup melampirkan ijazah SMA/SMK/MA/D3.',
			icon: '💰'
		},
		{
			judul: 'Biaya Kuliah Sangat Terjangkau',
			deskripsi: 'Sistem biaya kuliah (SPP) berkisar mulai dari Rp 1.300.000 hingga Rp 1.900.000 per semester (sudah termasuk modul bahan ajar cetak/digital lengkap).',
			icon: '🏷️'
		},
		{
			judul: 'Jalur Rekognisi Pembelajaran Lampau (RPL)',
			deskripsi: 'Bagi lulusan D1/D2/D3 atau yang memiliki pengalaman kerja/kuliah sebelumnya, nilai mata kuliah dapat dikonversi sehingga durasi kuliah S1 bisa lebih singkat.',
			icon: '⚡'
		},
		{
			judul: 'Dukungan Sentra Layanan (SALUT / Pokjar) Rembang',
			deskripsi: 'Mahasiswa di Kabupaten Rembang mendapatkan bantuan administrasi, orientasi studi, tutorial tatap muka, hingga pengurusan ijazah secara lebih dekat dan terarah.',
			icon: '📍'
		}
	];

	const faqList = [
		{
			q: 'Apakah ijazah lulusan UT Rembang diakui untuk mendaftar CPNS dan PPPK?',
			a: 'Sangat diakui! Universitas Terbuka (UT) adalah Perguruan Tinggi Negeri (PTN) berbadan hukum resmi pemerintah Indonesia. Seluruh program studinya terakreditasi BAN-PT (Banyak yang berakreditasi A dan Unggul). Ribuan lulusan UT terbukti lolos seleksi CPNS, PPPK, TNI/Polri, BUMN, dan perusahaan swasta nasional.'
		},
		{
			q: 'Apakah ada ujian seleksi masuk kuliah di UT Rembang?',
			a: 'Tidak ada ujian tes seleksi masuk. Penerimaan mahasiswa baru UT dilakukan berdasarkan kelengkapan berkas administrasi dan ijazah SLTA (SMA/SMK/MA/Paket C) atau ijazah diploma (D1/D2/D3 untuk jalur RPL).'
		},
		{
			q: 'Bagaimana sistem perkuliahan di UT Rembang?',
			a: 'UT menerapkan sistem Pendidikan Jarak Jauh (PJJ). Pembelajaran dilakukan melalui Tutorial Online (Tuton) via LMS E-Learning, Tutorial Web (Tuweb), dan Tutorial Tatap Muka (TTM). Mahasiswa dapat belajar mandiri menggunakan modul cetak dan bahan ajar digital kapan saja dan di mana saja.'
		},
		{
			q: 'Berapa biaya kuliah per semester di UT Rembang?',
			a: 'Biaya kuliah di UT menggunakan sistem SIPAS (Sistem Paket Semester) atau Non-SIPAS. Untuk skema SIPAS Non-TTM berkisar antara Rp 1.300.000,- hingga Rp 1.900.000,- per semester. Biaya ini sudah mencakup seluruh biaya SKS dan buku modul materi kuliah tanpa ada tambahan biaya gedung.'
		},
		{
			q: 'Di mana alamat layanan UT atau Pokjar / SALUT di Kabupaten Rembang?',
			a: 'Mahasiswa Rembang dilayani oleh UPBJJ-UT Semarang bekerja sama dengan Pokjar/SALUT setempat di Kabupaten Rembang. Mahasiswa bisa mengurus administrasi pendaftaran, penyerahan modul, dan informasi perkuliahan secara langsung di Sentra Layanan UT (SALUT) Rembang atau melalui portal online admisi-sia.ut.ac.id.'
		},
		{
			q: 'Apakah batas usia pendaftar dibatasi di UT?',
			a: 'Tidak ada batasan usia maupun batasan tahun lulus ijazah di UT. Prinsip UT adalah "Open University" (Pendidikan Terbuka untuk Semua). Siapa saja, baik yang baru lulus sekolah maupun yang sudah lama berkerja, memiliki hak yang sama untuk berkuliah.'
		}
	];
</script>

<svelte:head>
	<title>{metaTitle}</title>
	<meta name="description" content={metaDesc} />
	<link rel="canonical" href={siteUrl} />

	<!-- OpenGraph Metadata -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={metaTitle} />
	<meta property="og:description" content={metaDesc} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:site_name" content="Kabupaten Rembang - Portal Informasi" />
	<meta property="og:image" content="https://rembangwebsite.my.id/og-image.png" />

	<!-- Twitter Card Metadata -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={metaTitle} />
	<meta name="twitter:description" content={metaDesc} />
	<meta name="twitter:image" content="https://rembangwebsite.my.id/og-image.png" />

	<!-- Schema.org EducationalOrganization & Article -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Article",
		"headline": "${metaTitle}",
		"description": "${metaDesc}",
		"url": "${siteUrl}",
		"publisher": {
			"@type": "Organization",
			"name": "Kabupaten Rembang Portal",
			"logo": {
				"@type": "ImageObject",
				"url": "https://rembangwebsite.my.id/logo.png"
			}
		},
		"about": {
			"@type": "EducationalOrganization",
			"name": "Universitas Terbuka Rembang",
			"alternateName": "UT Rembang / SALUT Rembang",
			"url": "https://ut.ac.id"
		}
	}
	</script>`}
</svelte:head>

<!-- Breadcrumb -->
<div class="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-3">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<nav class="flex text-xs text-slate-600 dark:text-slate-400 gap-2 items-center">
			<a href="/" class="hover:text-blue-600 dark:hover:text-blue-400">Beranda</a>
			<span>/</span>
			<span class="text-slate-900 dark:text-white font-medium">Universitas Terbuka (UT) Rembang</span>
		</nav>
	</div>
</div>

<!-- Hero Banner -->
<section class="relative bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white py-16 sm:py-24 overflow-hidden">
	<div class="absolute inset-0 opacity-15 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:20px_20px]"></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl space-y-6">
			<div class="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-md">
				<span>🎓 Perguruan Tinggi Negeri (PTN-BH) di Rembang</span>
			</div>
			
			<h1 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
				Universitas Terbuka (UT) Rembang: 
				<span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
					Kuliah Fleksibel PTN Kualitas Terjamin
				</span>
			</h1>

			<p class="text-base sm:text-xl text-slate-300 leading-relaxed">
				Solusi tepat kuliah Perguruan Tinggi Negeri (PTN) bagi warga Kabupaten Rembang, karyawan, perangkat desa, guru, dan lulusan SMA/SMK dengan sistem Pendidikan Jarak Jauh (PJJ) tanpa tes masuk dan tanpa uang gedung.
			</p>

			<div class="flex flex-wrap gap-4 pt-2">
				<a
					href="#pendaftaran"
					class="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all hover:scale-105"
				>
					Cara Pendaftaran Online
					<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</a>
				<a
					href="#jurusan"
					class="inline-flex items-center rounded-xl bg-slate-800/90 border border-slate-700 px-6 py-3.5 text-sm font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
				>
					Lihat Pilihan Jurusan
				</a>
			</div>
		</div>

		<!-- Quick Metric Stats -->
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800">
			<div class="bg-slate-900/60 backdrop-blur-md rounded-xl p-4 border border-slate-800">
				<span class="block text-xs font-semibold text-blue-400 uppercase tracking-wider">Status Kampus</span>
				<span class="text-lg font-bold text-white">PTN-BH Resmi</span>
			</div>
			<div class="bg-slate-900/60 backdrop-blur-md rounded-xl p-4 border border-slate-800">
				<span class="block text-xs font-semibold text-blue-400 uppercase tracking-wider">Akreditasi</span>
				<span class="text-lg font-bold text-white">Unggul & A / B (BAN-PT)</span>
			</div>
			<div class="bg-slate-900/60 backdrop-blur-md rounded-xl p-4 border border-slate-800">
				<span class="block text-xs font-semibold text-blue-400 uppercase tracking-wider">Biaya Kuliah</span>
				<span class="text-lg font-bold text-white">Mulai ~1,3 Jt / Smstr</span>
			</div>
			<div class="bg-slate-900/60 backdrop-blur-md rounded-xl p-4 border border-slate-800">
				<span class="block text-xs font-semibold text-blue-400 uppercase tracking-wider">Uang Gedung (SPI)</span>
				<span class="text-lg font-bold text-emerald-400">Rp 0 (Tanpa SPI)</span>
			</div>
		</div>
	</div>
</section>

<!-- Content Container -->
<div class="py-12 bg-slate-50 dark:bg-slate-950">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<!-- Main Article Body -->
			<main class="lg:col-span-8 space-y-12">
				
				<!-- Overview Article Section -->
				<section class="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
					<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
						<span>📖</span> Mengenal Universitas Terbuka (UT) di Rembang
					</h2>

					<p class="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
						<strong>Universitas Terbuka (UT)</strong> merupakan Perguruan Tinggi Negeri (PTN) ke-45 di Indonesia yang didirikan oleh pemerintah pada tahun 1984 berdasarkan Keputusan Presiden RI Nomor 41 Tahun 1984. Saat ini UT telah berstatus sebagai <strong>PTN Berbadan Hukum (PTN-BH)</strong>, sejajar dengan kampus negeri ternama lainnya seperti UI, UGM, ITB, dan Undip.
					</p>

					<p class="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
						Bagi warga masyarakat di <strong>Kabupaten Rembang</strong>—mulai dari Kecamatan Rembang Kota, Lasem, Sulang, Sarang, Kragan, hingga wilayah pelosok pedesaan—UT hadir memberikan akses pendidikan tinggi yang berkualitas tinggi dan inklusif. Melalui keberadaan <strong>Sentra Layanan UT (SALUT) / Kelompok Belajar (Pokjar) Rembang</strong> di bawah naungan UPBJJ-UT Semarang, calon mahasiswa dapat dengan mudah mendaftar dan mengikuti perkuliahan tanpa perlu merantau atau meninggalkan pekerjaan harian.
					</p>

					<div class="bg-blue-50 dark:bg-blue-950/50 border-l-4 border-blue-600 p-5 rounded-r-xl space-y-2">
						<h3 class="font-bold text-blue-900 dark:text-blue-200 text-sm">💡 Mengapa Banyak Warga Rembang Memilih UT?</h3>
						<p class="text-xs sm:text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
							Masyarakat Rembang yang berprofesi sebagai Aparatur Sipil Negara (ASN), Pegawai Pemerintah dengan Perjanjian Kerja (PPPK), perangkat desa, guru honorer, wirausahawan, serta buruh pabrik kini bisa memperoleh ijazah S1/S2 resmi PTN untuk kenaikan jenjang karir dan pangkat tanpa mengganggu jam kerja formal.
						</p>
					</div>
				</section>

				<!-- Keunggulan UT -->
				<section class="space-y-6">
					<div class="border-b pb-4 border-slate-200 dark:border-slate-800">
						<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
							🌟 Keunggulan Utama Kuliah di UT Rembang
						</h2>
						<p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
							Kemudahan dan kepastian akademik yang ditawarkan Universitas Terbuka bagi seluruh calon mahasiswa.
						</p>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						{#each keunggulan as item}
							<div class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/50 transition-all space-y-3">
								<div class="text-3xl">{item.icon}</div>
								<h3 class="text-lg font-bold text-slate-900 dark:text-white">{item.judul}</h3>
								<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
									{item.deskripsi}
								</p>
							</div>
						{/each}
					</div>
				</section>

				<!-- Pilihan Jurusan / Program Studi -->
				<section id="jurusan" class="space-y-6 scroll-mt-24">
					<div class="border-b pb-4 border-slate-200 dark:border-slate-800">
						<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
							📚 Program Studi & Jurusan Pilihan di UT Rembang
						</h2>
						<p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
							Berbagai program studi jenjang S1 (Sarjana) dan Pascasarjana (Magister/Doktor) yang terakreditasi resmi BAN-PT.
						</p>
					</div>

					<div class="space-y-6">
						{#each jurusans as j}
							<div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
								<div class={`bg-gradient-to-r ${j.warna} px-6 py-4 text-white flex items-center gap-3`}>
									<span class="text-2xl">{j.icon}</span>
									<h3 class="font-bold text-base sm:text-lg">{j.fakultas}</h3>
								</div>
								<div class="p-6">
									<ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
										{#each j.prodi as p}
											<li class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
												<span class="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></span>
												<span>{p}</span>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						{/each}
					</div>
				</section>

				<!-- Skema Pembelajaran PJJ & Tutorial -->
				<section class="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
					<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
						<span>💻</span> Sistem Belajar Pembelajaran Jarak Jauh (PJJ)
					</h2>

					<p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
						Sistem pembelajaran di UT sangat fleksibel dan didukung oleh ekosistem digital mutakhir. Mahasiswa di Rembang dapat memilih atau mengombinasikan beberapa bentuk tutorial:
					</p>

					<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
						<div class="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
							<span class="text-xs font-bold uppercase text-blue-600 dark:text-blue-400">1. Tuton (Tutorial Online)</span>
							<h3 class="font-bold text-slate-900 dark:text-white text-sm">E-Learning UT</h3>
							<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
								Diskusi dan penugasan secara asinkronus melalui portal <code class="bg-slate-200 dark:bg-slate-700 px-1 rounded">elearning.ut.ac.id</code> yang bisa diakses 24 jam.
							</p>
						</div>
						<div class="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
							<span class="text-xs font-bold uppercase text-blue-600 dark:text-blue-400">2. Tuweb (Tutorial Web)</span>
							<h3 class="font-bold text-slate-900 dark:text-white text-sm">Virtual Class</h3>
							<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
								Tatap muka interaktif secara daring via Microsoft Teams / Zoom bersama dosen tutor profesional pada jadwal akhir pekan.
							</p>
						</div>
						<div class="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
							<span class="text-xs font-bold uppercase text-blue-600 dark:text-blue-400">3. TTM / Pokjar</span>
							<h3 class="font-bold text-slate-900 dark:text-white text-sm">Tatap Muka di Rembang</h3>
							<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
								Sesi kelas tatap muka langsung yang diselenggarakan di lokasi Pokjar / SALUT Rembang sesuai kesepakatan rombel mahasiswa.
							</p>
						</div>
					</div>
				</section>

				<!-- Panduan & Alur Pendaftaran -->
				<section id="pendaftaran" class="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-8 scroll-mt-24">
					<div>
						<span class="text-xs font-bold uppercase tracking-widest text-blue-300">Pendaftaran Mahasiswa Baru</span>
						<h2 class="text-2xl sm:text-3xl font-extrabold mt-1">
							📝 Syarat & Cara Mendaftar UT Rembang Online
						</h2>
						<p class="mt-2 text-sm text-blue-200">
							Pendaftaran mahasiswa baru dibuka 2 kali dalam setahun (Semester Genap & Semester Ganjil).
						</p>
					</div>

					<!-- Syarat Berkas -->
					<div class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 space-y-4">
						<h3 class="font-bold text-lg text-cyan-300 flex items-center gap-2">
							📌 Berkas Persyaratan Pendaftaran
						</h3>
						<ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
							<li class="flex items-center gap-2">
								<span class="text-emerald-400">✓</span> Scan KTP Asli / Surat Keterangan Dukcapil
							</li>
							<li class="flex items-center gap-2">
								<span class="text-emerald-400">✓</span> Scan Ijazah SMA/SMK/MA/Paket C Legalisir
							</li>
							<li class="flex items-center gap-2">
								<span class="text-emerald-400">✓</span> Pasfoto Terbaru Ukuran 3x4 (Background Merah/Biru)
							</li>
							<li class="flex items-center gap-2">
								<span class="text-emerald-400">✓</span> Formulir Tanda Tangan Mahasiswa (F-1E)
							</li>
							<li class="flex items-center gap-2 sm:col-span-2">
								<span class="text-emerald-400">✓</span> Transkrip Nilai & SK Kerja (Khusus Jalur RPL / Alih Jenjang D3 ke S1)
							</li>
						</ul>
					</div>

					<!-- Alur Pendaftaran Step by Step -->
					<div class="space-y-4">
						<h3 class="font-bold text-lg text-white">Alur Langkah Pendaftaran:</h3>
						<ol class="space-y-4 text-sm text-slate-300">
							<li class="flex gap-4 items-start">
								<span class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">1</span>
								<div>
									<strong class="text-white block">Akses Portal Registrasi SLA/SIA UT</strong>
									Buka situs resmi admisi UT di <a href="https://admisi-sia.ut.ac.id" target="_blank" rel="noopener noreferrer" class="text-cyan-300 underline font-semibold">admisi-sia.ut.ac.id</a> dan buat akun baru menggunakan email aktif.
								</div>
							</li>
							<li class="flex gap-4 items-start">
								<span class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">2</span>
								<div>
									<strong class="text-white block">Pilih Lokasi & Program Studi</strong>
									Pilih Wilayah UT Semarang, pilih Sentra Layanan UT (SALUT) atau Pokjar Kabupaten Rembang, serta tentukan Program Studi S1 yang diinginkan.
								</div>
							</li>
							<li class="flex gap-4 items-start">
								<span class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">3</span>
								<div>
									<strong class="text-white block">Unggah Berkas & Bayar Billing Pendaftaran</strong>
									Upload hasil scan berkas persyaratannya, lalu bayar biaya admisi pendaftaran (sekitar Rp 100.000,-) melalui Bank BRI, Mandiri, BTN, BNI, atau Minimarket (Indomaret/Alfamart).
								</div>
							</li>
							<li class="flex gap-4 items-start">
								<span class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">4</span>
								<div>
									<strong class="text-white block">Verifikasi & Pembayaran SPP Pertama</strong>
									Setelah berkas diverifikasi tim UT, Anda akan mendapatkan Nomor Induk Mahasiswa (NIM) dan lembar billing SPP semester pertama.
								</div>
							</li>
						</ol>
					</div>

					<div class="pt-4 text-center sm:text-left">
						<a
							href="https://admisi-sia.ut.ac.id"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 rounded-xl bg-cyan-400 text-slate-950 px-8 py-3.5 text-base font-extrabold hover:bg-cyan-300 transition-all shadow-lg"
						>
							Buka Portal Pendaftaran SIA UT &rarr;
						</a>
					</div>
				</section>

				<!-- FAQ Accordion -->
				<section class="space-y-6">
					<div class="border-b pb-4 border-slate-200 dark:border-slate-800">
						<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
							❓ Pertanyaan Sering Diajukan (FAQ) UT Rembang
						</h2>
						<p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
							Jawaban lengkap seputar keraguan umum pendaftaran dan perkuliahan di Universitas Terbuka.
						</p>
					</div>

					<div class="space-y-4">
						{#each faqList as faq, i}
							<div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all">
								<button
									type="button"
									onclick={() => toggleFaq(i)}
									class="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-base"
								>
									<span>{faq.q}</span>
									<span class="text-xl font-bold text-blue-600 ml-4">{activeFaq === i ? '−' : '+'}</span>
								</button>
								{#if activeFaq === i}
									<div class="px-6 pb-5 pt-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
										{faq.a}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</section>
			</main>

			<!-- Sidebar -->
			<aside class="lg:col-span-4 space-y-8">
				<!-- Layanan SALUT / Pokjar Rembang Card -->
				<div class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 sticky top-28">
					<div class="border-b pb-4 border-slate-100 dark:border-slate-800">
						<span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Layanan Mahasiswa</span>
						<h3 class="text-xl font-bold text-slate-900 dark:text-white mt-1">
							📍 Sentra Layanan UT Rembang
						</h3>
					</div>

					<div class="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
						<div>
							<strong class="text-slate-900 dark:text-white block">UPBJJ Pembina:</strong>
							<span>UT Semarang (Jawa Tengah)</span>
						</div>

						<div>
							<strong class="text-slate-900 dark:text-white block">Cakupan Wilayah Layanan:</strong>
							<span>Seluruh 14 Kecamatan Kabupaten Rembang (Rembang, Lasem, Sulang, Pamotan, Kragan, Sarang, Sedan, Sale, dll)</span>
						</div>

						<div>
							<strong class="text-slate-900 dark:text-white block">Website Resmi UT Central:</strong>
							<a href="https://ut.ac.id" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 underline block mt-0.5">
								https://ut.ac.id
							</a>
						</div>

						<div>
							<strong class="text-slate-900 dark:text-white block">Portal Pendaftaran:</strong>
							<a href="https://admisi-sia.ut.ac.id" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 underline block mt-0.5">
								https://admisi-sia.ut.ac.id
							</a>
						</div>

						<div>
							<strong class="text-slate-900 dark:text-white block">Portal E-Learning:</strong>
							<a href="https://elearning.ut.ac.id" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 underline block mt-0.5">
								https://elearning.ut.ac.id
							</a>
						</div>
					</div>

					<div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
						<a
							href="https://admisi-sia.ut.ac.id"
							target="_blank"
							rel="noopener noreferrer"
							class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-all"
						>
							Daftar Mahasiswa Baru &rarr;
						</a>
						<a
							href="/profil"
							class="w-full inline-flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 py-3 text-center text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
						>
							Kembali ke Profil Rembang
						</a>
					</div>
				</div>

				<!-- Quick Nav Artikel Lainnya Card -->
				<div class="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 shadow-md space-y-4">
					<h4 class="font-bold text-base text-cyan-300">
						🌐 Informasi Kabupaten Rembang
					</h4>
					<p class="text-xs text-slate-300 leading-relaxed">
						Temukan juga informasi sejarah R.A. Kartini, potensi 14 kecamatan, lokasi wisata pantai, dan kebudayaan batik Lasem.
					</p>
					<div class="flex flex-col gap-2 pt-2 text-xs font-medium">
						<a href="/profil" class="text-blue-300 hover:underline">→ Sejarah & Profil Kabupaten Rembang</a>
						<a href="/kecamatan" class="text-blue-300 hover:underline">→ Data 14 Kecamatan Rembang</a>
						<a href="/wisata" class="text-blue-300 hover:underline">→ Destinasi Wisata Rembang</a>
						<a href="/kuliner" class="text-blue-300 hover:underline">→ Kuliner Khas Rembang</a>
					</div>
				</div>
			</aside>
		</div>
	</div>
</div>
