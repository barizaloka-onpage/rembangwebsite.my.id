<script lang="ts">
	import { LIST_WISATA, type Wisata } from '$lib/data/rembangData';

	let activeFilter = $state<'semua' | Wisata['kategori']>('semua');

	const categories = [
		{ id: 'semua', label: 'Semua Wisata' },
		{ id: 'pantai', label: '🏖️ Wisata Pantai' },
		{ id: 'sejarah', label: '🏛️ Sejarah & Budaya' },
		{ id: 'alam', label: '🌿 Wisata Alam' },
		{ id: 'religi', label: '🕌 Wisata Religi' }
	];

	let filteredWisata = $derived(
		activeFilter === 'semua'
			? LIST_WISATA
			: LIST_WISATA.filter((w) => w.kategori === activeFilter)
	);
</script>

<svelte:head>
	<title>Destinasi Wisata - Kabupaten Rembang</title>
</svelte:head>

<!-- Header Banner -->
<div class="bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-900 text-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
		<h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Destinasi Wisata Kabupaten Rembang</h1>
		<p class="mt-2 text-blue-200 text-sm sm:text-base max-w-2xl mx-auto">
			Nikmati keindahan wisata bahari, jejak sejarah R.A. Kartini, keunikan arsitektur Lasem, dan tempat ziarah religi.
		</p>

		<!-- Category Filter Tabs -->
		<div class="mt-8 flex flex-wrap justify-center gap-2">
			{#each categories as cat}
				<button
					onclick={() => (activeFilter = cat.id as any)}
					class={`px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
						activeFilter === cat.id
							? 'bg-blue-600 text-white shadow-md'
							: 'bg-white/10 hover:bg-white/20 text-slate-200 backdrop-blur-sm'
					}`}
				>
					{cat.label}
				</button>
			{/each}
		</div>
	</div>
</div>

<!-- Wisata Cards Grid -->
<div class="py-12 bg-slate-50 dark:bg-slate-900 min-h-[50vh]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		{#if filteredWisata.length === 0}
			<div class="text-center py-12 text-slate-500">
				Tidak ada destinasi wisata pada kategori ini.
			</div>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each filteredWisata as item}
					<a href="/wisata/{item.id}" class="group rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
						<div>
							<div class="flex items-center justify-between mb-3">
								<span class="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
									{item.kategori}
								</span>
							</div>

							<h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
								{item.nama}
							</h3>
							<p class="mt-1 text-xs font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1">
								📍 {item.lokasi}
							</p>
							<p class="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
								{item.deskripsi}
							</p>

							<!-- Fitur Tags -->
							<div class="mt-4 flex flex-wrap gap-1.5">
								{#each item.fitur as tag}
									<span class="rounded-md bg-slate-100 dark:bg-slate-700/60 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:text-slate-300">
										✓ {tag}
									</span>
								{/each}
							</div>
						</div>

						<div class="pt-4 border-t border-slate-100 dark:border-slate-700 text-xs font-semibold text-blue-600 dark:text-blue-400">
							Lihat Detail Wisata &rarr;
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
