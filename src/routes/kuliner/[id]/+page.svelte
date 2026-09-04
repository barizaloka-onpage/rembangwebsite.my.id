<script lang="ts">
	import { page } from '$app/state';
	import { getKulinerById, LIST_KULINER } from '$lib/data/rembangData';

	let kulinerId = $derived(page.params.id);
	let item = $derived(getKulinerById(kulinerId));

	let kulinerLain = $derived(LIST_KULINER.filter((k) => k.id !== kulinerId).slice(0, 3));
</script>

<svelte:head>
	<title>{item ? `${item.nama} - Kuliner Khas Rembang` : 'Kuliner Tidak Ditemukan'}</title>
	{#if item}
		<meta name="description" content={item.deskripsi} />
		<meta property="og:title" content={`${item.nama} - Kuliner Khas Rembang`} />
		<meta property="og:description" content={item.deskripsi} />
	{/if}
</svelte:head>

{#if !item}
	<div class="py-24 text-center space-y-4">
		<h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Kuliner Tidak Ditemukan</h1>
		<p class="text-slate-600 dark:text-slate-400 text-sm">Kuliner yang Anda cari tidak tersedia dalam daftar.</p>
		<div>
			<a href="/kuliner" class="inline-block rounded-xl bg-amber-600 px-6 py-2.5 text-sm font-bold text-white">
				&larr; Kembali ke Daftar Kuliner
			</a>
		</div>
	</div>
{:else}
	<!-- Header Banner -->
	<div class="bg-gradient-to-r from-amber-950 via-slate-900 to-amber-900 text-white py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
			<a href="/kuliner" class="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
				&larr; Kembali ke Kuliner
			</a>

			<div class="flex flex-wrap items-center gap-3">
				<span class="rounded-full bg-amber-600 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
					{item.kategori}
				</span>
				<span class="text-xs font-medium text-amber-200">📍 {item.lokasiKhas}</span>
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
							Cita Rasa {item.nama}
						</h2>
						<p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
							{item.deskripsi}
						</p>
					</div>

					<!-- Bahan Utama -->
					<div class="rounded-2xl bg-amber-50 dark:bg-amber-950/40 p-6 border border-amber-200 dark:border-amber-900 space-y-4">
						<h3 class="text-base font-bold text-amber-900 dark:text-amber-300">Bahan Utama & Olahan Rempah</h3>
						<div class="flex flex-wrap gap-2">
							{#each item.bahanUtama as bahan}
								<span class="rounded-xl bg-white dark:bg-slate-800 px-3.5 py-2 text-xs font-semibold text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-slate-700 shadow-2xs">
									🥘 {bahan}
								</span>
							{/each}
						</div>
					</div>
				</div>

				<!-- Sidebar Info Card -->
				<div class="lg:col-span-4 space-y-6">
					<div class="rounded-2xl bg-slate-900 text-white p-6 space-y-6 shadow-xl border border-slate-800 sticky top-24">
						<h3 class="text-sm font-bold uppercase tracking-wider text-amber-400">Pusat Penjual Khas</h3>
						
						<div class="space-y-3 text-sm">
							<div class="flex items-start gap-3">
								<span class="text-lg">🏪</span>
								<div>
									<span class="block text-xs text-slate-400 font-medium">Lokasi Khas Rekomendasi</span>
									<span class="font-semibold text-white leading-snug block mt-0.5">{item.lokasiKhas}</span>
								</div>
							</div>
						</div>

						<div class="pt-4 border-t border-slate-800 text-center">
							<a
								href="/kuliner"
								class="block w-full rounded-xl bg-amber-600 hover:bg-amber-700 py-3 text-xs font-bold text-white transition-all shadow"
							>
								Jelajahi Kuliner Lainnya
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Rekomendasi Kuliner Lain -->
			{#if kulinerLain.length > 0}
				<div class="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
					<h3 class="text-2xl font-bold text-slate-900 dark:text-white">Kuliner Khas Rembang Lainnya</h3>
					<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
						{#each kulinerLain as kl}
							<a href={`/kuliner/${kl.id}`} class="group rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 hover:border-amber-500 transition-all flex flex-col justify-between space-y-3">
								<div>
									<span class="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase">{kl.kategori}</span>
									<h4 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors mt-1">{kl.nama}</h4>
								</div>
								<div class="text-xs font-semibold text-amber-600 dark:text-amber-400">
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
