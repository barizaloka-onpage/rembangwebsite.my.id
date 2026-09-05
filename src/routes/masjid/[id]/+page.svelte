<script lang="ts">
	import { page } from '$app/state';
	import { getMasjidById, LIST_MASJID } from '$lib/data/rembangData';

	let masjidId = $derived(page.params.id);
	let item = $derived(getMasjidById(masjidId));

	let masjidLain = $derived(LIST_MASJID.filter((m) => m.id !== masjidId).slice(0, 3));
</script>

<svelte:head>
	<title>{item ? `${item.nama} - Masjid Kabupaten Rembang` : 'Masjid Tidak Ditemukan'}</title>
	{#if item}
		<meta name="description" content={item.deskripsi} />
		<meta property="og:title" content={`${item.nama} - Kabupaten Rembang`} />
		<meta property="og:description" content={item.deskripsi} />
	{/if}
</svelte:head>

{#if !item}
	<div class="py-24 text-center space-y-4">
		<h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Masjid Tidak Ditemukan</h1>
		<p class="text-slate-600 dark:text-slate-400 text-sm">Masjid yang Anda cari tidak tersedia dalam daftar.</p>
		<div>
			<a href="/masjid" class="inline-block rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white">
				&larr; Kembali ke Daftar Masjid
			</a>
		</div>
	</div>
{:else}
	<!-- Header Banner -->
	<div class="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
			<a href="/masjid" class="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
				&larr; Kembali ke Daftar Masjid
			</a>

			<div class="flex flex-wrap items-center gap-3">
				<span class="rounded-full bg-emerald-600 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
					{item.kategori.replace('-', ' ')}
				</span>
				{#if item.kecamatan}
					<span class="text-xs font-semibold text-emerald-200">Kecamatan {item.kecamatan}</span>
				{/if}
				<span class="text-xs font-medium text-slate-300">📍 {item.lokasi}</span>
			</div>

			<h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white">{item.nama}</h1>
		</div>
	</div>

	<!-- Content Detail -->
	<div class="py-12 bg-white dark:bg-slate-900">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
				<!-- Main Info -->
				<div class="lg:col-span-8 space-y-8">
					<div class="space-y-4">
						<h2 class="text-2xl font-bold text-slate-900 dark:text-white border-b pb-3 border-slate-200 dark:border-slate-800">
							Profil {item.nama}
						</h2>
						<div class="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line text-base">
							{item.deskripsi}
						</div>
					</div>

					<!-- Fitur & Fasilitas -->
					{#if item.fitur.length > 0}
						<div class="rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 p-6 border border-emerald-100 dark:border-emerald-900 space-y-4">
							<h3 class="text-base font-bold text-slate-900 dark:text-white">Fasilitas & Layanan Keumatan</h3>
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
								{#each item.fitur as f}
									<div class="flex items-center gap-2 rounded-xl bg-white dark:bg-slate-800 p-3 border border-emerald-100 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs">
										<span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">✓</span>
										<span>{f}</span>
									</div>
								{/each}
							</div>
						</div>
					{/if}
				</div>

				<!-- Sidebar Info Card -->
				<div class="lg:col-span-4 space-y-6">
					<div class="rounded-2xl bg-slate-900 text-white p-6 space-y-6 shadow-xl border border-slate-800 sticky top-24">
						<h3 class="text-sm font-bold uppercase tracking-wider text-emerald-400">Informasi Masjid</h3>
						
						<div class="space-y-4 text-sm">
							<div class="flex items-start gap-3">
								<span class="text-lg">📍</span>
								<div>
									<span class="block text-xs text-slate-400 font-medium">Alamat & Lokasi</span>
									<span class="font-semibold text-white leading-snug block mt-0.5">{item.lokasi}</span>
								</div>
							</div>

							{#if item.kapasitas}
								<div class="flex items-start gap-3">
									<span class="text-lg">👥</span>
									<div>
										<span class="block text-xs text-slate-400 font-medium">Daya Tampung</span>
										<span class="font-semibold text-white leading-snug block mt-0.5">{item.kapasitas}</span>
									</div>
								</div>
							{/if}

							{#if item.telepon}
								<div class="flex items-start gap-3">
									<span class="text-lg">📞</span>
									<div>
										<span class="block text-xs text-slate-400 font-medium">Kontak / Call Center</span>
										<a href={`tel:${item.telepon}`} class="font-semibold text-emerald-400 hover:underline block mt-0.5">
											{item.telepon}
										</a>
									</div>
								</div>
							{/if}

							{#if item.website}
								<div class="flex items-start gap-3 pt-2">
									<span class="text-lg">🌐</span>
									<div>
										<span class="block text-xs text-slate-400 font-medium">Website Resmi</span>
										<a
											href={item.website}
											target="_blank"
											rel="noopener noreferrer"
											class="font-bold text-emerald-400 hover:text-emerald-300 break-all underline block mt-0.5"
										>
											{item.website}
										</a>
									</div>
								</div>
							{/if}
						</div>

						<div class="pt-4 border-t border-slate-800 space-y-2 text-center">
							{#if item.website}
								<a
									href={item.website}
									target="_blank"
									rel="noopener noreferrer"
									class="block w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 text-xs font-bold text-white transition-all shadow-md"
								>
									Kunjungi Website Resmi &rarr;
								</a>
							{/if}
							<a
								href="/masjid"
								class="block w-full rounded-xl bg-slate-800 hover:bg-slate-700 py-2.5 text-xs font-semibold text-slate-300 transition-all"
							>
								Lihat Masjid Lainnya
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Rekomendasi Masjid Lainnya -->
			{#if masjidLain.length > 0}
				<div class="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
					<h3 class="text-2xl font-bold text-slate-900 dark:text-white">Masjid Lainnya di Kabupaten Rembang</h3>
					<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
						{#each masjidLain as ml}
							<a href={`/masjid/${ml.id}`} class="group rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 hover:border-emerald-500 transition-all flex flex-col justify-between space-y-3">
								<div>
									<span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">{ml.kategori.replace('-', ' ')}</span>
									<h4 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors mt-1">{ml.nama}</h4>
									<p class="text-xs text-slate-500 line-clamp-1 mt-1">📍 {ml.lokasi}</p>
								</div>
								<div class="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
									Detail &rarr;
								</div>
							</a>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
