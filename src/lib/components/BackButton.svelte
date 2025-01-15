<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Button3d from '$lib/components/Button3d.svelte';

	export let image = { src: '/images/left-arrow.png', alt: 'BackArrow' };
</script>

<Button3d
	bgFront="bg-kukuwi-blue"
	bgBack="bg-kukuwi-blue-dark"
	padding="px-4 py-2"
	onclick={() => goto(`${base}/`)}
	onmouseup={() => {}}
	style="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 mt-4 sm:mt-6 md:mt-8"
>
	<div class="flex items-center justify-center">
		<img
			src={base + image.src}
			alt={image.alt}
			class="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"
		/>
	</div>
</Button3d>
