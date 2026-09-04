<script lang="ts">
	import { DATA_BERANDA, LIST_WISATA, LIST_KULINER } from '$lib/data/rembangData';
</script>

<svelte:head>
	<title>Beranda - Kabupaten Rembang Jawa Tengah</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-950 text-white py-24 lg:py-32">
	<div class="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
	
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
			<div class="lg:col-span-7 space-y-6 text-center lg:text-left">
				<div class="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-md">
					<span>✨ Pesona Pesisir Utara Jawa Tengah</span>
				</div>
				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
					Kabupaten Rembang
					<span class="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300">
						Kota Garam & Bumi Kartini
					</span>
				</h1>
				<p class="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
					{DATA_BERANDA.heroTagline}. Jelajahi kekayaan keindahan alam pantai, warisan sejarah pahlawan nasional, akulturasi arsitektur Lasem, dan kekayaan seni budaya lokal.
				</p>

				<!-- Badges -->
				<div class="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
					{#each DATA_BERANDA.julukan as item}
						<span class="rounded-lg bg-slate-800/80 border border-slate-700 px-3 py-1 text-xs font-medium text-slate-200">
							#{item}
						</span>
					{/each}
				</div>

				<div class="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
					<a
						href="/wisata"
						class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:scale-105 transition-all"
					>
						Jelajah Destinasi Wisata
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
						</svg>
					</a>
					<a
						href="/profil"
						class="inline-flex items-center justify-center rounded-xl bg-slate-800/80 border border-slate-700 px-6 py-3.5 text-base font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
					>
						Profil & Sejarah
					</a>
				</div>
			</div>

			<!-- Hero Quick Cards / Highlights -->
			<div class="lg:col-span-5">
				<div class="grid grid-cols-2 gap-4">
					{#each DATA_BERANDA.statistik as stat}
						<div class="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-6 text-center hover:bg-white/15 transition-all">
							<span class="block text-2xl sm:text-3xl font-extrabold text-cyan-300">{stat.value}</span>
							<span class="mt-1 block text-xs sm:text-sm font-medium text-slate-300">{stat.label}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section Wisata Unggulan -->
<section class="py-20 bg-white dark:bg-slate-900">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
			<div>
				<h2 class="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Pariwisata</h2>
				<p class="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
					Destinasi Populer Rembang
				</p>
			</div>
			<a href="/wisata" class="mt-4 md:mt-0 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1">
				Lihat Semua Wisata &rarr;
			</a>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each LIST_WISATA.slice(0, 3) as w}
				<a href="/wisata/{w.id}" class="group rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
					<div>
						<div class="flex items-center justify-between mb-3">
							<span class="rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-3 py-1 text-xs font-bold uppercase tracking-wider">
								{w.kategori}
							</span>
						</div>
						<h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
							{w.nama}
						</h3>
						<p class="mt-1 text-xs font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1">
							📍 {w.lokasi}
						</p>
						<p class="mt-3 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
							{w.deskripsi}
						</p>
					</div>
					<div class="pt-4 border-t border-slate-200 dark:border-slate-700 text-xs text-blue-600 dark:text-blue-400 font-semibold">
						Lihat Detail Wisata &rarr;
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Section Kuliner Khas -->
<section class="py-20 bg-slate-100 dark:bg-slate-950">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center max-w-2xl mx-auto mb-14">
			<h2 class="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Cita Rasa Khas</h2>
			<p class="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
				Kuliner Ikonik Rembang
			</p>
			<p class="mt-3 text-slate-600 dark:text-slate-400 text-sm">
				Nikmati kelezatan sajian kuliner legendaris yang kaya rempah dan cita rasa pesisir Jawa.
			</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each LIST_KULINER.slice(0, 3) as k}
				<a href="/kuliner/{k.id}" class="group rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
					<div>
						<span class="rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-3 py-1 text-xs font-bold uppercase tracking-wider">
							{k.kategori}
						</span>
						<h3 class="mt-3 text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">{k.nama}</h3>
						<p class="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
							{k.deskripsi}
						</p>
					</div>
					<div class="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-amber-600 dark:text-amber-400 font-medium">
						📍 {k.lokasiKhas}
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Section Kebudayaan & Call To Action -->
<section class="py-20 bg-blue-600 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
		<h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
			Jelajahi Keragaman 14 Kecamatan di Rembang
		</h2>
		<p class="max-w-2xl mx-auto text-blue-100 text-base sm:text-lg">
			Mulai dari pusat perdagangan kota, sentra industri batik Lasem, hingga kawasan perikanan tangkap pesisir.
		</p>
		<div>
			<a
				href="/kecamatan"
				class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-blue-700 shadow-lg hover:bg-blue-50 transition-all hover:scale-105"
			>
				Lihat Data 14 Kecamatan
			</a>
		</div>
	</div>
</section>
