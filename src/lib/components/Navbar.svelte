<script lang="ts">
	import { page } from '$app/state';

	let isMenuOpen = $state(false);

	const navItems = [
		{ href: '/', label: 'Beranda' },
		{ href: '/profil', label: 'Profil' },
		{ href: '/wisata', label: 'Wisata' },
		{ href: '/kuliner', label: 'Kuliner' },
		{ href: '/kebudayaan', label: 'Kebudayaan' },
		{ href: '/kecamatan', label: 'Kecamatan' },
		{ href: '/masjid', label: 'Masjid' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur-md transition-all dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo & Title -->
			<a href="/" class="flex items-center gap-3 group">
				<img src="/logo.svg" alt="Logo Kabupaten Rembang" class="h-11 w-11 rounded-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform" />
				<div>
					<span class="block text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
						KABUPATEN REMBANG
					</span>
					<span class="block text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
						Bumi Kartini • Karya Pemuda Rembang
					</span>
				</div>
			</a>

			<!-- Desktop Navigation Links -->
			<nav class="hidden md:flex items-center gap-1 lg:gap-2">
				{#each navItems as item}
					{@const isActive = page.url.pathname === item.href || (item.href !== '/' && page.url.pathname.startsWith(item.href))}
					<a
						href={item.href}
						class={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
							isActive
								? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 font-semibold'
								: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
						}`}
					>
						{item.label}
					</a>
				{/each}
			</nav>

			<!-- Action Button -->
			<div class="hidden md:flex items-center gap-3">
				<a
					href="/wisata"
					class="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:shadow-md"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					Jelajah Wisata
				</a>
			</div>

			<!-- Mobile menu button -->
			<div class="flex md:hidden">
				<button
					type="button"
					onclick={toggleMenu}
					aria-label="Toggle Navigation Menu"
					class="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-800"
				>
					{#if isMenuOpen}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Navigation Menu -->
	{#if isMenuOpen}
		<div class="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
			<div class="space-y-1">
				{#each navItems as item}
					{@const isActive = page.url.pathname === item.href || (item.href !== '/' && page.url.pathname.startsWith(item.href))}
					<a
						href={item.href}
						onclick={() => (isMenuOpen = false)}
						class={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
							isActive
								? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 font-semibold'
								: 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
						}`}
					>
						{item.label}
					</a>
				{/each}
				<div class="pt-4">
					<a
						href="/wisata"
						onclick={() => (isMenuOpen = false)}
						class="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
					>
						Jelajah Wisata Rembang
					</a>
				</div>
			</div>
		</div>
	{/if}
</header>
