<script lang="ts">
	import { page } from '$app/state';
	import { getWisataById, LIST_WISATA } from '$lib/data/rembangData';

	let wisataId = $derived(page.params.id);
	let item = $derived(getWisataById(wisataId));

	let wisataLain = $derived(LIST_WISATA.filter((w) => w.id !== wisataId).slice(0, 3));
</script>

<svelte:head>
	<title>{item ? `${item.nama} - Wisata Rembang` : 'Wisata Tidak Ditemukan'}</title>
	{#if item}
		<meta name="description" content={item.deskripsi} />
		<meta property="og:title" content={`${item.nama} - Destinasi Wisata Rembang`} />
		<meta property="og:description" content={item.deskripsi} />
	{/if}
</svelte:head>

{#if !item}
	<div class="py-24 text-center space-y-4">
		<h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Destinasi Wisata Tidak Ditemukan</h1>
		<p class="text-slate-600 dark:text-slate-400 text-sm">Destinasi wisata yang Anda cari tidak tersedia.</p>
		<div>
			<a href="/wisata" class="inline-block rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-bold text-white">
				&larr; Kembali ke Daftar Wisata
			</a>
		</div>
	</div>
{:else}
	<!-- Header Banner -->
	<div class="bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 text-white py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
			<a href="/wisata" class="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
				&larr; Kembali ke Wisata
			</a>

			<div class="flex flex-wrap items-center gap-3">
				<span class="rounded-full bg-blue-600 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
					{item.kategori}
				</span>
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
							Mengenal {item.nama}
						</h2>
						<p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
							{item.deskripsi}
						</p>
					</div>

					<!-- Fitur & Fasilitas -->
					<div class="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-6 border border-slate-200 dark:border-slate-700 space-y-4">
						<h3 class="text-base font-bold text-slate-900 dark:text-white">Fasilitas & Daya Tarik Utama</h3>
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
							{#each item.fitur as f}
								<div class="flex items-center gap-2 rounded-xl bg-white dark:bg-slate-800 p-3 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs">
									<span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">✓</span>
									<span>{f}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<!-- Sidebar Info Card -->
				<div class="lg:col-span-4 space-y-6">
					<div class="rounded-2xl bg-slate-900 text-white p-6 space-y-6 shadow-xl border border-slate-800 sticky top-24">
						<h3 class="text-sm font-bold uppercase tracking-wider text-blue-400">Informasi Lokasi</h3>
						
						<div class="space-y-4 text-sm">
							<div class="flex items-start gap-3">
								<span class="text-lg">📍</span>
								<div>
									<span class="block text-xs text-slate-400 font-medium">Lokasi Destinasi</span>
									<span class="font-semibold text-white">{item.lokasi}</span>
								</div>
							</div>
						</div>

						<div class="pt-4 border-t border-slate-800 text-center">
							<a
								href="/wisata"
								class="block w-full rounded-xl bg-blue-600 hover:bg-blue-700 py-3 text-xs font-bold text-white transition-all shadow"
							>
								Lihat Wisata Lainnya
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Wisata Lainnya -->
			{#if wisataLain.length > 0}
				<div class="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
					<h3 class="text-2xl font-bold text-slate-900 dark:text-white">Rekomendasi Wisata Lain di Rembang</h3>
					<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
						{#each wisataLain as wl}
							<a href={`/wisata/${wl.id}`} class="group rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 hover:border-blue-500 transition-all flex flex-col justify-between space-y-3">
								<div>
									<span class="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">{wl.kategori}</span>
									<h4 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors mt-1">{wl.nama}</h4>
									<p class="text-xs text-slate-500 line-clamp-1 mt-1">📍 {wl.lokasi}</p>
								</div>
								<div class="text-xs font-semibold text-blue-600 dark:text-blue-400">
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
