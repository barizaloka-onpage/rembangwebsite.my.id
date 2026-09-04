<script lang="ts">
	import { LIST_KULINER } from '$lib/data/rembangData';
</script>

<svelte:head>
	<title>Kuliner Khas - Kabupaten Rembang</title>
</svelte:head>

<!-- Header Banner -->
<div class="bg-gradient-to-r from-amber-900 via-orange-950 to-slate-900 text-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
		<h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Wisata Kuliner Khas Rembang</h1>
		<p class="mt-2 text-amber-200 text-sm sm:text-base max-w-2xl mx-auto">
			Eksplorasi sajian makanan tradisional, minuman legendaris, dan buah tangan khas pesisir Rembang.
		</p>
	</div>
</div>

<div class="py-12 bg-slate-50 dark:bg-slate-900">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each LIST_KULINER as item}
				<a href="/kuliner/{item.id}" class="group rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4">
					<div>
						<div class="flex items-center justify-between mb-3">
							<span class="rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-3 py-1 text-xs font-bold uppercase tracking-wider">
								{item.kategori}
							</span>
						</div>

						<h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">{item.nama}</h3>
						<p class="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
							{item.deskripsi}
						</p>

						<div class="mt-4">
							<h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Bahan Utama:</h4>
							<div class="mt-1.5 flex flex-wrap gap-1">
								{#each item.bahanUtama as bahan}
									<span class="rounded bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 px-2 py-0.5 text-xs font-medium border border-amber-200 dark:border-amber-900">
										{bahan}
									</span>
								{/each}
							</div>
						</div>
					</div>

					<div class="pt-4 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400">
						<span class="font-bold text-amber-600 dark:text-amber-400">📍 Lokasi Penjualan:</span>
						<p class="mt-1 font-medium">{item.lokasiKhas}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
