<script lang="ts">
	import { LIST_MASJID, type Masjid } from '$lib/data/rembangData';

	let activeFilter = $state<string>('semua');

	const categories = [
		{ id: 'semua', label: 'Semua Masjid' },
		{ id: 'masjid-agung', label: '🕌 Masjid Agung' },
		{ id: 'masjid-besar', label: '🏛️ Masjid Besar Kecamatan' },
		{ id: 'masjid-sejarah', label: '📜 Masjid Bersejarah' }
	];

	let filteredMasjid = $derived(
		activeFilter === 'semua'
			? LIST_MASJID
			: LIST_MASJID.filter((m) => m.kategori === activeFilter)
	);
</script>

<svelte:head>
	<title>Daftar Masjid & Pusat Keagamaan - Kabupaten Rembang</title>
	<meta name="description" content="Informasi lengkap daftar masjid, masjid agung, masjid besar kecamatan, dan masjid bersejarah di Kabupaten Rembang." />
</svelte:head>

<!-- Header Banner -->
<div class="bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-950 text-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
		<span class="inline-block rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30 uppercase tracking-wider mb-3">
			Kota Santri & Syiar Islam
		</span>
		<h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Masjid & Pusat Keagamaan Rembang</h1>
		<p class="mt-3 text-emerald-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
			Jelajahi tempat ibadah, pusat keumatan, masjid bersejarah, dan masjid besar di seluruh wilayah Kabupaten Rembang.
		</p>

		<!-- Category Filter Tabs -->
		<div class="mt-8 flex flex-wrap justify-center gap-2">
			{#each categories as cat}
				<button
					onclick={() => (activeFilter = cat.id)}
					class={`px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
						activeFilter === cat.id
							? 'bg-emerald-600 text-white shadow-md'
							: 'bg-white/10 hover:bg-white/20 text-slate-200 backdrop-blur-sm'
					}`}
				>
					{cat.label}
				</button>
			{/each}
		</div>
	</div>
</div>

<!-- Masjid Cards Grid -->
<div class="py-12 bg-slate-50 dark:bg-slate-900 min-h-[50vh]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		{#if filteredMasjid.length === 0}
			<div class="text-center py-12 text-slate-500">
				Tidak ada masjid pada kategori ini.
			</div>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each filteredMasjid as item}
					<div class="group rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
						<div>
							<div class="flex items-center justify-between mb-3">
								<span class="rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-3 py-1 text-xs font-bold uppercase tracking-wider">
									{item.kategori.replace('-', ' ')}
								</span>
								{#if item.kecamatan}
									<span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
										Kec. {item.kecamatan}
									</span>
								{/if}
							</div>

							<h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
								<a href="/masjid/{item.id}">
									{item.nama}
								</a>
							</h3>
							
							<p class="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
								📍 {item.lokasi}
							</p>

							<p class="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
								{item.deskripsi}
							</p>

							<!-- Fitur Tags -->
							<div class="mt-4 flex flex-wrap gap-1.5">
								{#each item.fitur.slice(0, 4) as tag}
									<span class="rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900 px-2.5 py-1 text-[11px] font-medium">
										✓ {tag}
									</span>
								{/each}
							</div>
						</div>

						<div class="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
							<a
								href="/masjid/{item.id}"
								class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
							>
								Lihat Detail &rarr;
							</a>
							{#if item.website}
								<a
									href={item.website}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors"
								>
									🌐 Website Resmi
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
