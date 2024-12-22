<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import MenuCard from '$lib/components/MenuCard.svelte';
</script>

<main class="h-screen">
	<div class="flex h-full flex-col">
		<!-- Obere Hälfte mit dem KukuWi Logo -->
		<div class="flex h-1/2 items-center justify-center">
			<img src={base + '/images/logo.png'} alt="logo" class="max-h-md max-w-md object-contain" />
		</div>
		<!-- Untere Hälfte mit den Buttons -->
		<div class="flex h-1/2 items-center justify-center">
			<div class="flex w-1/2 justify-center">
				<MenuCard
					text="ÜBEN"
					image={{ src: '/images/Hut_2.png', alt: 'Hut' }}
					bgFront="bg-kukuwi-red"
					bgBack="bg-kukuwi-red-dark"
					onclick={() => goto(`${base}/uebung`)}
				/>
			</div>
			<div class="flex w-1/2 justify-center">
				<MenuCard
					text="START"
					image={{ src: '/images/Pokal.png', alt: 'Pokal' }}
					bgFront="bg-kukuwi-blue"
					bgBack="bg-kukuwi-blue-dark"
					onclick={() => goto(`${base}/raten`)}
				/>
			</div>
		</div>
	</div>
</main>
