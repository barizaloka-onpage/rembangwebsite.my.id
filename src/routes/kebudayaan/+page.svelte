<script lang="ts">
	import { LIST_BUDAYA } from '$lib/data/rembangData';
</script>

<svelte:head>
	<title>Seni & Budaya - Kabupaten Rembang</title>
</svelte:head>

<!-- Header Banner -->
<div class="bg-gradient-to-r from-red-950 via-slate-900 to-indigo-950 text-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
		<h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Kebudayaan & Kesenian Tradisional</h1>
		<p class="mt-2 text-red-200 text-sm sm:text-base max-w-2xl mx-auto">
			Warisan budaya takbenda, batik khas Lasem, kesenian daerah, dan tradisi pesisir Kabupaten Rembang.
		</p>
	</div>
</div>

<div class="py-12 bg-white dark:bg-slate-900">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
		<!-- Highlight Batik Lasem -->
		<div class="rounded-3xl bg-gradient-to-r from-red-900 to-slate-900 text-white p-8 sm:p-12 shadow-xl border border-red-800/50">
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
				<div class="lg:col-span-8 space-y-4">
					<span class="inline-block rounded-full bg-red-500/20 border border-red-400/30 px-3 py-1 text-xs font-bold text-red-300 uppercase tracking-widest">
						Mahakarya Nusantara
					</span>
					<h2 class="text-3xl sm:text-4xl font-black">Batik Tulis Lasem</h2>
					<p class="text-slate-200 text-base leading-relaxed">
						Batik Tulis Lasem merupakan bukti akulturasi budaya yang sangat indah antara etnis Tionghoa dan Jawa di Lasem, Rembang. Terkenal dengan sebutan "Batik Tiga Negeri" dan ciri khas warna merah darah ayam (abang getih pitik) yang sulit ditiru di daerah lain.
					</p>
					<div class="pt-2 flex flex-wrap gap-2 text-xs font-medium">
						<span class="bg-white/10 px-3 py-1.5 rounded-lg">Motif Hong & Naga</span>
						<span class="bg-white/10 px-3 py-1.5 rounded-lg">Motif Sekar Jagad</span>
						<span class="bg-white/10 px-3 py-1.5 rounded-lg">Pewarnaan Alami Alizarin</span>
					</div>
				</div>
				<div class="lg:col-span-4 bg-white/10 rounded-2xl p-6 text-center backdrop-blur-md border border-white/10">
					<span class="text-4xl font-extrabold text-red-400">Abad 14</span>
					<span class="block mt-1 text-xs font-medium text-slate-300">Awal Jejak Batik Lasem & Akulturasi Budaya</span>
				</div>
			</div>
		</div>

		<!-- Budaya List -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each LIST_BUDAYA as b}
				<div class="rounded-2xl bg-slate-50 dark:bg-slate-800 p-8 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
					<div class="flex items-center justify-between">
						<span class="rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-3 py-1 text-xs font-bold uppercase">
							{b.kategori}
						</span>
						<span class="text-xs text-slate-500 dark:text-slate-400 font-medium">Asal: {b.asal}</span>
					</div>
					<h3 class="text-xl font-bold text-slate-900 dark:text-white">{b.nama}</h3>
					<p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
						{b.deskripsi}
					</p>
				</div>
			{/each}
		</div>
	</div>
</div>
