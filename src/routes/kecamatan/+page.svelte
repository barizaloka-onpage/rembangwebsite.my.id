<script lang="ts">
	import { LIST_KECAMATAN } from '$lib/data/rembangData';

	let searchQuery = $state('');

	let filteredKecamatan = $derived(
		LIST_KECAMATAN.filter(
			(k) =>
				k.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
				k.potensiUtama.toLowerCase().includes(searchQuery.toLowerCase()) ||
				k.pusatPemerintahan.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);
</script>

<svelte:head>
	<title>14 Kecamatan - Kabupaten Rembang</title>
</svelte:head>

<!-- Header Banner -->
<div class="bg-gradient-to-r from-blue-950 via-slate-900 to-teal-950 text-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
		<h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Wilayah 14 Kecamatan Rembang</h1>
		<p class="mt-2 text-teal-200 text-sm sm:text-base max-w-2xl mx-auto">
			Kabupaten Rembang terbagi atas 14 wilayah kecamatan dengan keunggulan potensi maritim, agribisnis, industri, dan sejarah.
		</p>

		<!-- Search input -->
		<div class="mt-8 max-w-md mx-auto">
			<div class="relative">
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Cari kecamatan atau potensi daerah..."
					class="w-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 pl-10 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
				/>
				<svg class="absolute left-3 top-3.5 h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</div>
		</div>
	</div>
</div>

<div class="py-12 bg-slate-50 dark:bg-slate-900">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each filteredKecamatan as kec}
				<a href="/kecamatan/{kec.slug}" class="group rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md hover:border-teal-500 transition-all flex flex-col justify-between space-y-4">
					<div>
						<div class="flex items-center justify-between">
							<h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">Kecamatan {kec.nama}</h3>
							<span class="rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-xs font-bold px-2.5 py-1">
								{kec.jumlahDesa} Desa
							</span>
						</div>

						<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
							Pusat Admin: <strong class="text-slate-700 dark:text-slate-300">{kec.pusatPemerintahan}</strong>
						</p>

						<p class="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
							{kec.deskripsi}
						</p>
					</div>

					<div class="pt-4 border-t border-slate-100 dark:border-slate-700 space-y-2">
						<div class="text-xs font-semibold text-teal-600 dark:text-teal-400">
							⭐ Potensi Utama:
						</div>
						<p class="text-xs text-slate-700 dark:text-slate-300 font-medium">
							{kec.potensiUtama}
						</p>
						<div class="text-[11px] text-slate-400 pt-1">
							Luas Wilayah: {kec.luasKm2} km²
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
