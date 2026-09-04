<script lang="ts">
	import { DATA_PROFIL } from '$lib/data/rembangData';
</script>

<svelte:head>
	<title>Profil & Sejarah - Kabupaten Rembang</title>
</svelte:head>

<!-- Header Banner -->
<div class="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
		<h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Profil & Sejarah Kabupaten Rembang</h1>
		<p class="mt-2 text-blue-200 text-sm sm:text-base">
			Mengenal asal usul, letak geografis, visi misi, serta makna lambang daerah Kabupaten Rembang.
		</p>
	</div>
</div>

<!-- Main Content -->
<div class="py-12 bg-white dark:bg-slate-900">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
		<!-- Summary Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="rounded-2xl bg-blue-50 dark:bg-slate-800 p-6 border border-blue-100 dark:border-slate-700">
				<h3 class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Hari Jadi</h3>
				<p class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">{DATA_PROFIL.hariJadi}</p>
				<p class="mt-1 text-xs text-slate-600 dark:text-slate-400">Penetapan Adipati Ingabehi Wongsojedjo (1741)</p>
			</div>
			<div class="rounded-2xl bg-blue-50 dark:bg-slate-800 p-6 border border-blue-100 dark:border-slate-700">
				<h3 class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Semboyan Daerah</h3>
				<p class="mt-2 text-xl font-bold text-slate-900 dark:text-white">Rembang BANGKIT</p>
				<p class="mt-1 text-xs text-slate-600 dark:text-slate-400">Bersih, Asri, Niat, Gigih, Kritis, Indah, Tenteram</p>
			</div>
			<div class="rounded-2xl bg-blue-50 dark:bg-slate-800 p-6 border border-blue-100 dark:border-slate-700">
				<h3 class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Posisi Geografis</h3>
				<p class="mt-2 text-xl font-bold text-slate-900 dark:text-white">Pantai Utara (Pantura)</p>
				<p class="mt-1 text-xs text-slate-600 dark:text-slate-400">Berbatasan dengan Laut Jawa di sebelah Utara</p>
			</div>
		</div>

		<!-- Sejarah -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
			<div class="lg:col-span-8 space-y-6">
				<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white border-b pb-4 border-slate-200 dark:border-slate-800">
					Sejarah Singkat Rembang
				</h2>
				<p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
					{DATA_PROFIL.sejarah}
				</p>
				
				<div class="mt-8 rounded-2xl bg-slate-50 dark:bg-slate-800 p-6 border border-slate-200 dark:border-slate-700 space-y-3">
					<h4 class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
						📜 Peran Pahlawan Nasional R.A. Kartini
					</h4>
					<p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
						Raden Ajeng Kartini menikah dengan Bupati Rembang K.R.M. Adipati Ario Singgih Djojo Adhiningrat pada tahun 1903. Di Rembang, Kartini mendirikan sekolah wanita di komplek pendopo kabupaten dan menghasilkan karya tulisan yang legendaris sebelum wafat pada 17 September 1904 dan dimakamkan di Desa Bulu, Rembang.
					</p>
				</div>
			</div>

			<!-- Visi Misi Sidebar -->
			<div class="lg:col-span-4 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 space-y-6 shadow-lg">
				<div>
					<h3 class="text-xs font-bold uppercase tracking-wider text-blue-400">Visi Kabupaten</h3>
					<p class="mt-2 text-lg font-bold italic leading-snug">
						"{DATA_PROFIL.visi}"
					</p>
				</div>
				<div>
					<h3 class="text-xs font-bold uppercase tracking-wider text-blue-400">Misi Utama</h3>
					<ul class="mt-3 space-y-3 text-sm text-slate-300">
						{#each DATA_PROFIL.misi as item, i}
							<li class="flex items-start gap-2">
								<span class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
									{i + 1}
								</span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
