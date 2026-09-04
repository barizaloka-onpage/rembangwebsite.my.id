<script lang="ts">
	import { page } from '$app/state';
	import { getKecamatanBySlug, LIST_KECAMATAN } from '$lib/data/rembangData';

	let slug = $derived(page.params.slug);
	let item = $derived(getKecamatanBySlug(slug));

	let kecamatanLain = $derived(LIST_KECAMATAN.filter((k) => k.slug !== slug).slice(0, 4));
</script>

<svelte:head>
	<title>{item ? `Kecamatan ${item.nama} - Rembang` : 'Kecamatan Tidak Ditemukan'}</title>
	{#if item}
		<meta name="description" content={item.deskripsi} />
		<meta property="og:title" content={`Kecamatan ${item.nama} - Kabupaten Rembang`} />
		<meta property="og:description" content={item.deskripsi} />
	{/if}
</svelte:head>

{#if !item}
	<div class="py-24 text-center space-y-4">
		<h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Kecamatan Tidak Ditemukan</h1>
		<p class="text-slate-600 dark:text-slate-400 text-sm">Wilayah kecamatan yang Anda cari tidak tersedia dalam data.</p>
		<div>
			<a href="/kecamatan" class="inline-block rounded-xl bg-teal-600 px-6 py-2.5 text-sm font-bold text-white">
				&larr; Kembali ke Daftar 14 Kecamatan
			</a>
		</div>
	</div>
{:else}
	<!-- Header Banner -->
	<div class="bg-gradient-to-r from-teal-950 via-slate-900 to-blue-950 text-white py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
			<a href="/kecamatan" class="inline-flex items-center gap-2 text-xs font-semibold text-teal-300 hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
				&larr; Kembali ke 14 Kecamatan
			</a>

			<div class="flex flex-wrap items-center gap-3">
				<span class="rounded-full bg-teal-600 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
					Kecamatan
				</span>
				<span class="text-xs font-medium text-teal-200">Luas: {item.luasKm2} km²</span>
			</div>

			<h1 class="text-4xl sm:text-5xl font-black tracking-tight text-white">
				Kecamatan {item.nama}
			</h1>
			<p class="text-teal-200 text-base max-w-2xl">
				Pusat Pemerintahan / Ibu Kota Kecamatan: <strong class="text-white">{item.pusatPemerintahan}</strong>
			</p>
		</div>
	</div>

	<!-- Content Detail -->
	<div class="py-12 bg-white dark:bg-slate-900">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
			<!-- Summary Cards -->
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
				<div class="rounded-2xl bg-teal-50 dark:bg-slate-800 p-6 border border-teal-100 dark:border-slate-700">
					<h3 class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Pusat Administrasi</h3>
					<p class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">{item.pusatPemerintahan}</p>
				</div>

				<div class="rounded-2xl bg-teal-50 dark:bg-slate-800 p-6 border border-teal-100 dark:border-slate-700">
					<h3 class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Jumlah Desa / Kelurahan</h3>
					<p class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">{item.jumlahDesa} Desa</p>
				</div>

				<div class="rounded-2xl bg-teal-50 dark:bg-slate-800 p-6 border border-teal-100 dark:border-slate-700">
					<h3 class="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Luas Wilayah</h3>
					<p class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">{item.luasKm2} km²</p>
				</div>
			</div>

			<!-- Detailed Description & Potensi -->
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
				<div class="lg:col-span-8 space-y-6">
					<h2 class="text-2xl font-bold text-slate-900 dark:text-white border-b pb-3 border-slate-200 dark:border-slate-800">
						Gambaran Umum Kecamatan {item.nama}
					</h2>
					<p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
						{item.deskripsi}
					</p>

					<div class="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-6 border border-slate-200 dark:border-slate-700 space-y-3">
						<h3 class="text-base font-bold text-slate-900 dark:text-white">⭐ Potensi Utama Wilayah</h3>
						<p class="text-sm font-semibold text-teal-600 dark:text-teal-400">
							{item.potensiUtama}
						</p>
					</div>
				</div>

				<div class="lg:col-span-4">
					<div class="rounded-2xl bg-slate-900 text-white p-6 space-y-4 shadow-xl border border-slate-800 sticky top-24">
						<h3 class="text-sm font-bold uppercase tracking-wider text-teal-400">Navigasi Kecamatan</h3>
						<p class="text-xs text-slate-300 leading-relaxed">
							Lihat profil dan potensi daerah dari 14 kecamatan lainnya di Kabupaten Rembang.
						</p>
						<a
							href="/kecamatan"
							class="block w-full text-center rounded-xl bg-teal-600 hover:bg-teal-700 py-3 text-xs font-bold text-white transition-all shadow"
						>
							Lihat Semua 14 Kecamatan
						</a>
					</div>
				</div>
			</div>

			<!-- Kecamatan Lain -->
			{#if kecamatanLain.length > 0}
				<div class="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
					<h3 class="text-2xl font-bold text-slate-900 dark:text-white">Kecamatan Lain di Rembang</h3>
					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{#each kecamatanLain as kl}
							<a href={`/kecamatan/${kl.slug}`} class="rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 hover:border-teal-500 transition-all flex flex-col justify-between space-y-2">
								<h4 class="text-base font-bold text-slate-900 dark:text-white">Kecamatan {kl.nama}</h4>
								<span class="text-xs text-teal-600 dark:text-teal-400 font-medium">📍 Pusat: {kl.pusatPemerintahan}</span>
								<span class="text-[11px] text-slate-500">{kl.jumlahDesa} Desa • {kl.luasKm2} km²</span>
							</a>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
