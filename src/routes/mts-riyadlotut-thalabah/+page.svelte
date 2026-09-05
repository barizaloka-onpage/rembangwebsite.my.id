<script lang="ts">
	let activeFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		activeFaq = activeFaq === index ? null : index;
	}

	const siteUrl = 'https://rembangwebsite.my.id/mts-riyadlotut-thalabah';
	const officialUrl = 'https://mtsriyadl.sch.id/';
	const metaTitle = 'MTs. Riyadlotut Thalabah Sedan Rembang: Profil, Visi Misi, & E-PPDB';
	const metaDesc = 'Informasi lengkap MTs. Riyadlotut Thalabah Sedan, Kabupaten Rembang. Madrasah Tsanawiyah Terakreditasi A berakhlaq terpuji, religius, terampil, dan berwawasan lingkungan dengan program Sains Terintegrasi & Tahfidz.';

	const programUnggulan = [
		{
			nama: 'Kelas Unggulan Sains Terintegrasi',
			icon: '🔬',
			warna: 'from-emerald-600 to-teal-700',
			badge: 'Sains & Teknologi',
			deskripsi: 'Memadukan pembelajaran sains modern (Matematika, IPA, dan Teknologi Digital) dengan nilai-nilai keislaman dan riset ilmiah madrasah.'
		},
		{
			nama: 'Kelas Unggulan Tahfidz (Khusus Putri)',
			icon: '📖',
			warna: 'from-amber-600 to-orange-700',
			badge: 'Hafalan Al-Qur\'an',
			deskripsi: 'Program bimbingan intensif hafalan Al-Qur\'an 30 juz berpendampingan ustadzah pengampu, metode takrir harian, serta bimbingan sanad.'
		},
		{
			nama: 'Kelas Reguler Inklusi',
			icon: '🎓',
			warna: 'from-blue-600 to-indigo-700',
			badge: 'Nasional & Agamis',
			deskripsi: 'Kurikulum nasional (Kemendikbud & Kemenag) yang terstruktur dan responsif, diperkaya pendalaman kitab kuning dan penguatan akhlakul karimah.'
		}
	];

	const fasilitasList = [
		{
			nama: 'Auditorium Al Munawwir IVF',
			deskripsi: 'Gedung pertemuan utama serbaguna untuk kegiatan besar madrasah, pembukaan MATSAMA, seminar, dan peringatan hari besar.',
			icon: '🏛️'
		},
		{
			nama: 'Laboratorium Sains & Komputer',
			deskripsi: 'Fasilitas praktikum IPA dan laboratorium komputer multimedia untuk mendukung asesmen berbasis komputer serta olimpiade sains.',
			icon: '💻'
		},
		{
			nama: 'Perpustakaan Digital & Cetak',
			deskripsi: 'Koleksi literatur keislaman, kitab kuning, buku pelajaran umum, dan ensiklopedia pendukung literasi siswa.',
			icon: '📚'
		},
		{
			nama: 'Terintegrasi Pondok Pesantren',
			deskripsi: 'Lokasi madrasah terintegrasi langsung dengan asrama Pondok Pesantren Yayasan Riyadlotut Thalabah bagi siswa mukim.',
			icon: '🕌'
		},
		{
			nama: 'Sarana Olahraga & Seni',
			deskripsi: 'Lapangan olahraga serbaguna, peralatan seni rebana/hadroh, perlengkapan pramuka, dan tempat kreasi bakat siswa.',
			icon: '⚽'
		},
		{
			nama: 'Sistem E-PPDB Single Submission',
			deskripsi: 'Layanan pendaftaran siswa baru secara online yang mudah, cepat, dan akuntabel melalui sistem E-PPDB terpadu.',
			icon: '🌐'
		}
	];

	const ekskulList = [
		{ nama: 'Pramuka (Gugus Depan)', icon: '🏕️', ket: 'Berprestasi aktif dalam Jambore Ranting & Cabang Kabupaten Rembang.' },
		{ nama: 'IPNU & IPPNU', icon: '🌱', ket: 'Wadah organisasi dan kaderisasi pelajar Nahdlatul Ulama.' },
		{ nama: 'OSIM (Organisasi Siswa Intra Madrasah)', icon: '👑', ket: 'Melatih jiwa kepemimpinan, manajerial, dan tata kelola kegiatan siswa.' },
		{ nama: 'Seni Hadroh & Rebana', icon: '🥁', ket: 'Pelestarian seni musik Islami dan syiar sholawat madrasah.' },
		{ nama: 'Qira\'ah & MTQ', icon: '🎙️', ket: 'Bimbingan seni baca Al-Qur\'an tartil dan tilawah.' },
		{ nama: 'PMR & Paskibra', icon: '🚑', ket: 'Pembinaan kepedulian sosial, kesehatan, serta latihan kedisiplinan.' },
		{ nama: 'Klub Olahraga (Futsal, Voli, Pencak Silat)', icon: '🏆', ket: 'Mengasah kebugaran jasmani dan ketangkasan olahraga prestasi.' }
	];

	const faqList = [
		{
			q: 'Apa akreditasi resmi MTs. Riyadlotut Thalabah Sedan?',
			a: 'MTs. Riyadlotut Thalabah Sedan telah terakreditasi A (Unggul) dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M). Hal ini menjamin standar mutu kurikulum, sarana prasarana, tenaga pendidik, dan tata kelola pendidikan madrasah.'
		},
		{
			q: 'Apa saja program unggulan yang tersedia di madrasah ini?',
			a: 'Madrasah ini menawarkan tiga program utama: (1) Kelas Unggulan Sains Terintegrasi, (2) Kelas Unggulan Tahfidz khusus putri, dan (3) Kelas Reguler berbasis kurikulum nasional yang diperkaya nilai-nilai pesantren.'
		},
		{
			q: 'Apakah MTs. Riyadlotut Thalabah menyediakan fasilitas asrama / pesantren?',
			a: 'Ya. Kompleks madrasah terintegrasi langsung dengan unit Pondok Pesantren Yayasan Riyadlotut Thalabah di Sedan. Siswa yang berasal dari luar daerah atau yang ingin mendalami ilmu agama secara intensif dapat tinggal di asrama pesantren.'
		},
		{
			q: 'Bagaimana cara pendaftaran siswa baru (PMB / PPDB)?',
			a: 'Pendaftaran dapat dilakukan secara daring melalui sistem E-PPDB Single Submission di website resmi madrasah https://mtsriyadl.sch.id/ atau datang langsung ke Sekretariat PPDB MTs. Riyadlotut Thalabah di Sedan, Rembang.'
		},
		{
			q: 'Di mana alamat lengkap dan nomor kontak layanan madrasah?',
			a: 'MTs. Riyadlotut Thalabah berlokasi di Jl. Raya Sedan KM. 01, Desa Sidorejo, Kecamatan Sedan, Kabupaten Rembang, Jawa Tengah 59264. Anda dapat menghubungi layanan WhatsApp/Telepon di +62 811-256-301 atau email mtsriyadl@gmail.com.'
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
			"name": "MTs. Riyadlotut Thalabah Sedan",
			"alternateName": "MTs Riyadl Sedan",
			"identifier": "NPSN: 20364025",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Jl. Raya Sedan KM. 01, Desa Sidorejo",
				"addressLocality": "Sedan",
				"addressRegion": "Kabupaten Rembang, Jawa Tengah",
				"postalCode": "59264",
				"addressCountry": "ID"
			},
			"url": "${officialUrl}"
		}
	}
	</script>`}
</svelte:head>

<!-- Breadcrumb Navigation -->
<div class="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-3">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<nav class="flex text-xs text-slate-600 dark:text-slate-400 gap-2 items-center flex-wrap">
			<a href="/" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Beranda</a>
			<span>/</span>
			<a href="/kecamatan" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Kecamatan</a>
			<span>/</span>
			<a href="/kecamatan/sedan" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sedan</a>
			<span>/</span>
			<span class="text-slate-900 dark:text-white font-medium">MTs. Riyadlotut Thalabah</span>
		</nav>
	</div>
</div>

<!-- Hero Banner -->
<section class="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 sm:py-24 overflow-hidden">
	<div class="absolute inset-0 opacity-15 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:20px_20px]"></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl space-y-6">
			<div class="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
				<span>🏫 Madrasah Tsanawiyah Unggulan • Terakreditasi A</span>
			</div>

			<h1 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
				MTs. Riyadlotut Thalabah Sedan:
				<span class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
					Menjadi yang Terdepan & Berakhlak Mulia
				</span>
			</h1>

			<p class="text-base sm:text-xl text-slate-300 leading-relaxed">
				Terbentuknya kader muslim yang berakhlaq terpuji, religius, terampil, dan berwawasan lingkungan melalui perpaduan keimanan, pendidikan berbasis sains terintegrasi, serta tahfidzul Qur'an di Kabupaten Rembang.
			</p>

			<div class="flex flex-wrap gap-4 pt-2">
				<a
					href="#ppdb"
					class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 transition-all hover:scale-105"
				>
					Informasi E-PPDB Online
					<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</a>
				<a
					href="#program"
					class="inline-flex items-center rounded-xl bg-slate-800/90 border border-slate-700 px-6 py-3.5 text-sm font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
				>
					Program Unggulan
				</a>
				<a
					href={officialUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 rounded-xl bg-teal-500/20 border border-teal-400/30 px-5 py-3.5 text-sm font-bold text-teal-300 hover:bg-teal-500/30 transition-all"
				>
					Situs Resmi Web &rarr;
				</a>
			</div>
		</div>

		<!-- Quick Metric Stats -->
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800">
			<div class="bg-slate-900/60 backdrop-blur-md rounded-xl p-4 border border-slate-800">
				<span class="block text-xs font-semibold text-emerald-400 uppercase tracking-wider">Status Akreditasi</span>
				<span class="text-lg font-bold text-white">Akreditasi A (Unggul)</span>
			</div>
			<div class="bg-slate-900/60 backdrop-blur-md rounded-xl p-4 border border-slate-800">
				<span class="block text-xs font-semibold text-emerald-400 uppercase tracking-wider">NPSN Resmi</span>
				<span class="text-lg font-bold text-white">20364025</span>
			</div>
			<div class="bg-slate-900/60 backdrop-blur-md rounded-xl p-4 border border-slate-800">
				<span class="block text-xs font-semibold text-emerald-400 uppercase tracking-wider">Berdiri Sejak</span>
				<span class="text-lg font-bold text-white">1948 (Yayasan)</span>
			</div>
			<div class="bg-slate-900/60 backdrop-blur-md rounded-xl p-4 border border-slate-800">
				<span class="block text-xs font-semibold text-emerald-400 uppercase tracking-wider">Lokasi Madrasah</span>
				<span class="text-lg font-bold text-emerald-300">Sedan, Kab. Rembang</span>
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

				<!-- Overview Section -->
				<section class="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
					<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
						<span>📖</span> Profil & Sejarah MTs. Riyadlotut Thalabah Sedan
					</h2>

					<p class="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
						<strong>MTs. Riyadlotut Thalabah Sedan</strong> adalah salah satu sekolah menengah tingkat pertama berbasis madrasah keagamaan Islam paling terkemuka di wilayah timur Kabupaten Rembang. Berada di bawah naungan <strong>Yayasan Riyadlotut Thalabah Sedan</strong>, institusi ini telah melayani pendidikan generasi muda sejak didirikan oleh ulama kharismatik <strong>KH. Munawir</strong> dan <strong>KH. Mawardi</strong> pada tahun 1948.
					</p>

					<p class="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
						Nama <em>"Riyadlotut Thalabah"</em> berasal dari bahasa Arab yang mengandung makna <strong>"Taman Pelajar"</strong>. Berawal dari pengajaran ilmu-ilmu Al-Qur'an, tajwid, dan kitab kuning di lingkungan pesantren, kini MTs. Riyadlotut Thalabah menjelma menjadi madrasah modern terakreditasi <strong>A (Unggul)</strong> yang memadukan keunggulan sains modern, pendidikan keagamaan mendalam, serta kepedulian lingkungan hidup.
					</p>

					<div class="bg-emerald-50 dark:bg-emerald-950/50 border-l-4 border-emerald-600 p-5 rounded-r-xl space-y-2">
						<h3 class="font-bold text-emerald-900 dark:text-emerald-200 text-sm">💡 Slogan Utama & Prinsip Kerja</h3>
						<p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed">
							Madrasah ini memegang teguh motto <em>"Bekerja untuk hidup, bukan hidup untuk bekerja"</em>. Nilai ini ditanamkan kepada segenap civitas akademika agar setiap aktivitas belajar dan mengajar diniatkan sebagai ibadah serta pengabdian yang ikhlas bagi kemajuan umat dan bangsa.
						</p>
					</div>
				</section>

				<!-- Visi & Misi Section -->
				<section class="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
					<div class="border-b pb-4 border-slate-200 dark:border-slate-800">
						<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
							<span>🎯</span> Visi dan Misi Madrasah
						</h2>
					</div>

					<div class="bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-xl p-6 space-y-3 shadow-inner">
						<span class="text-xs font-bold uppercase tracking-widest text-emerald-300">Visi Utama</span>
						<blockquote class="text-lg sm:text-xl font-extrabold italic text-emerald-100">
							"Terbentuknya kader muslim yang berakhlaq terpuji, religius, terampil, dan berwawasan lingkungan."
						</blockquote>
						<p class="text-xs text-slate-300">Tagline Madrasah: <strong>Menjadi yang Terdepan dan Berakhlak</strong></p>
					</div>

					<div class="space-y-4 pt-2">
						<h3 class="font-bold text-slate-900 dark:text-white text-lg">Misi Pendidikan MTs. Riyadlotut Thalabah:</h3>
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
								<span class="text-emerald-600 dark:text-emerald-400 font-bold text-base">01. Pembentukan Akhlak</span>
								<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
									Menanamkan akidah Islam yang kokoh serta keteladanan moral (akhlaqul karimah) dalam kehidupan sehari-hari.
								</p>
							</div>
							<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
								<span class="text-emerald-600 dark:text-emerald-400 font-bold text-base">02. Mutu Akademik & Sains</span>
								<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
									Meningkatkan kualitas pembelajaran sains terintegrasi, literasi digital, dan prestasi kompetensi siswa.
								</p>
							</div>
							<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
								<span class="text-emerald-600 dark:text-emerald-400 font-bold text-base">03. Keterampilan & Wirausaha</span>
								<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
									Mengembangkan kecakapan hidup (life skills), kemandirian, dan jiwa kepemimpinan organisasi kesiswaan.
								</p>
							</div>
							<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
								<span class="text-emerald-600 dark:text-emerald-400 font-bold text-base">04. Berwawasan Lingkungan</span>
								<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
									Mewujudkan lingkungan belajar madrasah yang hijau, asri, bersih, sehat, dan berbudaya ramah lingkungan.
								</p>
							</div>
						</div>
					</div>
				</section>

				<!-- Program Unggulan Section -->
				<section id="program" class="space-y-6 scroll-mt-24">
					<div class="border-b pb-4 border-slate-200 dark:border-slate-800">
						<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
							🌟 Program Unggulan Pendidikan
						</h2>
						<p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
							Pilihan program belajar yang disesuaikan dengan minat, bakat, serta orientasi masa depan siswa.
						</p>
					</div>

					<div class="space-y-6">
						{#each programUnggulan as p}
							<div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:border-emerald-500/50 transition-all">
								<div class={`bg-gradient-to-r ${p.warna} px-6 py-4 text-white flex items-center justify-between`}>
									<div class="flex items-center gap-3">
										<span class="text-3xl">{p.icon}</span>
										<div>
											<h3 class="font-bold text-base sm:text-lg">{p.nama}</h3>
											<span class="text-xs text-white/80 font-medium">{p.badge}</span>
										</div>
									</div>
								</div>
								<div class="p-6">
									<p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
										{p.deskripsi}
									</p>
								</div>
							</div>
						{/each}
					</div>
				</section>

				<!-- Fasilitas Sarana Prasarana Section -->
				<section class="space-y-6">
					<div class="border-b pb-4 border-slate-200 dark:border-slate-800">
						<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
							🏛️ Fasilitas & Sarana Prasarana
						</h2>
						<p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
							Dukungan infrastruktur lengkap untuk menunjang kenyamanan kegiatan belajar mengajar.
						</p>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						{#each fasilitasList as f}
							<div class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
								<div class="text-3xl">{f.icon}</div>
								<h3 class="text-lg font-bold text-slate-900 dark:text-white">{f.nama}</h3>
								<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
									{f.deskripsi}
								</p>
							</div>
						{/each}
					</div>
				</section>

				<!-- Ekstrakurikuler & Organisasi Section -->
				<section class="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
					<div class="border-b pb-4 border-slate-200 dark:border-slate-800">
						<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
							<span>🎨</span> Ekstrakurikuler & Organisasi Siswa
						</h2>
						<p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
							Pengembangan potensi minat, bakat seni, kepemimpinan, dan kepramukaan.
						</p>
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{#each ekskulList as eks}
							<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-start gap-3">
								<span class="text-2xl flex-shrink-0">{eks.icon}</span>
								<div>
									<h3 class="font-bold text-sm text-slate-900 dark:text-white">{eks.nama}</h3>
									<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
										{eks.ket}
									</p>
								</div>
							</div>
						{/each}
					</div>
				</section>

				<!-- Panduan & PPDB Online Section -->
				<section id="ppdb" class="bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-8 scroll-mt-24">
					<div>
						<span class="text-xs font-bold uppercase tracking-widest text-emerald-300">Penerimaan Murid Baru (PMB)</span>
						<h2 class="text-2xl sm:text-3xl font-extrabold mt-1">
							📝 Pendaftaran Siswa Baru (E-PPDB)
						</h2>
						<p class="mt-2 text-sm text-emerald-200">
							MTs. Riyadlotut Thalabah Sedan melayani pendaftaran online melalui sistem E-PPDB Single Submission.
						</p>
					</div>

					<!-- Syarat Berkas -->
					<div class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 space-y-4">
						<h3 class="font-bold text-lg text-emerald-300 flex items-center gap-2">
							📌 Berkas Persyaratan Pendaftaran
						</h3>
						<ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
							<li class="flex items-center gap-2">
								<span class="text-emerald-400">✓</span> Fotokopi / Scan Ijazah SD/MI atau Surat Keterangan Lulus (SKL)
							</li>
							<li class="flex items-center gap-2">
								<span class="text-emerald-400">✓</span> Fotokopi / Scan Kartu Keluarga (KK) & KTP Orang Tua
							</li>
							<li class="flex items-center gap-2">
								<span class="text-emerald-400">✓</span> Fotokopi / Scan Akta Kelahiran Calon Siswa
							</li>
							<li class="flex items-center gap-2">
								<span class="text-emerald-400">✓</span> Pasfoto Terbaru Ukuran 3x4 (3 Lembar)
							</li>
							<li class="flex items-center gap-2 sm:col-span-2">
								<span class="text-emerald-400">✓</span> KIP / PKH / KKS (Khusus bagi pendaftar jalur beasiswa bantuan)
							</li>
						</ul>
					</div>

					<!-- Alur Pendaftaran -->
					<div class="space-y-4">
						<h3 class="font-bold text-lg text-white">Alur Pendaftaran E-PPDB:</h3>
						<ol class="space-y-4 text-sm text-slate-300">
							<li class="flex gap-4 items-start">
								<span class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">1</span>
								<div>
									<strong class="text-white block">Kunjungi Portal Resmi Pendaftaran</strong>
									Akses alamat resmi madrasah di <a href={officialUrl} target="_blank" rel="noopener noreferrer" class="text-emerald-300 underline font-semibold">mtsriyadl.sch.id</a> dan klik menu PMB / E-PPDB Online.
								</div>
							</li>
							<li class="flex gap-4 items-start">
								<span class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">2</span>
								<div>
									<strong class="text-white block">Isi Formulir & Pilih Program Kelas</strong>
									Lengkapi biodata calon peserta didik serta tentukan pilihan kelas (Sains Terintegrasi, Tahfidz Putri, atau Kelas Reguler).
								</div>
							</li>
							<li class="flex gap-4 items-start">
								<span class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">3</span>
								<div>
									<strong class="text-white block">Unggah Berkas & Verifikasi Panitia</strong>
									Unggah dokumen persyaratan yang diperlukan. Panitia PPDB akan memverifikasi berkas secara sistem.
								</div>
							</li>
							<li class="flex gap-4 items-start">
								<span class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">4</span>
								<div>
									<strong class="text-white block">Pengumuman & Daftar Ulang</strong>
									Calon siswa yang dinyatakan lolos seleksi dapat melakukan daftar ulang sesuai jadwal yang ditentukan.
								</div>
							</li>
						</ol>
					</div>

					<div class="pt-4 text-center sm:text-left flex flex-wrap gap-4">
						<a
							href={officialUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 rounded-xl bg-emerald-400 text-slate-950 px-8 py-3.5 text-base font-extrabold hover:bg-emerald-300 transition-all shadow-lg"
						>
							Buka Website Pendaftaran E-PPDB Online &rarr;
						</a>
					</div>
				</section>

				<!-- FAQ Accordion Section -->
				<section class="space-y-6">
					<div class="border-b pb-4 border-slate-200 dark:border-slate-800">
						<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
							❓ Pertanyaan Sering Diajukan (FAQ)
						</h2>
						<p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
							Jawaban singkat seputar pendaftaran, akreditasi, dan program di MTs. Riyadlotut Thalabah Sedan.
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
									<span class="text-xl font-bold text-emerald-600 ml-4">{activeFaq === i ? '−' : '+'}</span>
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
				<!-- School Contact & Identity Card -->
				<div class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 sticky top-28">
					<div class="border-b pb-4 border-slate-100 dark:border-slate-800">
						<span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Informasi Resmi</span>
						<h3 class="text-xl font-bold text-slate-900 dark:text-white mt-1">
							📍 MTs. Riyadlotut Thalabah
						</h3>
					</div>

					<div class="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
						<div>
							<strong class="text-slate-900 dark:text-white block">Kepala Madrasah:</strong>
							<span>Muhammad Farid Aziz, S.Psi.</span>
						</div>

						<div>
							<strong class="text-slate-900 dark:text-white block">NPSN:</strong>
							<span>20364025</span>
						</div>

						<div>
							<strong class="text-slate-900 dark:text-white block">Status Akreditasi:</strong>
							<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
								Terakreditasi A (Unggul)
							</span>
						</div>

						<div>
							<strong class="text-slate-900 dark:text-white block">Alamat Lengkap:</strong>
							<span>Jl. Raya Sedan KM. 01, Desa Sidorejo, Kecamatan Sedan, Kabupaten Rembang, Jawa Tengah 59264</span>
						</div>

						<div>
							<strong class="text-slate-900 dark:text-white block">Layanan Telepon / WhatsApp:</strong>
							<a href="https://wa.me/62811256301" target="_blank" rel="noopener noreferrer" class="text-emerald-600 dark:hover:text-emerald-400 underline block mt-0.5 font-semibold">
								+62 811-256-301
							</a>
						</div>

						<div>
							<strong class="text-slate-900 dark:text-white block">Email Resmi:</strong>
							<a href="mailto:mtsriyadl@gmail.com" class="text-emerald-600 dark:hover:text-emerald-400 underline block mt-0.5 font-semibold">
								mtsriyadl@gmail.com
							</a>
						</div>

						<div>
							<strong class="text-slate-900 dark:text-white block">Website Utama:</strong>
							<a href={officialUrl} target="_blank" rel="noopener noreferrer" class="text-emerald-600 dark:hover:text-emerald-400 underline block mt-0.5 font-semibold">
								https://mtsriyadl.sch.id/
							</a>
						</div>
					</div>

					<div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
						<a
							href={officialUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-emerald-700 transition-all"
						>
							Kunjungi Website Resmi &rarr;
						</a>
						<a
							href="/kecamatan/sedan"
							class="w-full inline-flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 py-3 text-center text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
						>
							Profil Kecamatan Sedan
						</a>
					</div>
				</div>

				<!-- Card Terkait Kecamatan & Informasi Pendidikan -->
				<div class="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl p-6 shadow-md space-y-4">
					<h4 class="font-bold text-base text-emerald-300">
						🌐 Portal Kabupaten Rembang
					</h4>
					<p class="text-xs text-slate-300 leading-relaxed">
						Jelajahi informasi 14 kecamatan, institusi pendidikan, cagar budaya, serta destinasi wisata ikonik di Kabupaten Rembang.
					</p>
					<div class="flex flex-col gap-2 pt-2 text-xs font-medium">
						<a href="/kecamatan/sedan" class="text-emerald-300 hover:underline">→ Kecamatan Sedan (Sentra Dumbeg)</a>
						<a href="/universitas-ut-rembang" class="text-emerald-300 hover:underline">→ Universitas Terbuka (UT) Rembang</a>
						<a href="/masjid" class="text-emerald-300 hover:underline">→ Daftar Masjid & Syiar Islam</a>
						<a href="/profil" class="text-emerald-300 hover:underline">→ Sejarah & Profil Rembang</a>
					</div>
				</div>
			</aside>
		</div>
	</div>
</div>
