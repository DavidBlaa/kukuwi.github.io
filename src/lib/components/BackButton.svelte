<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Button3d from '$lib/components/Button3d.svelte';
</script>

<Button3d
	bgFront="bg-kukuwi-blue"
	bgBack="bg-kukuwi-blue-dark"
	padding="px-4 py-2"
	onclick={() => goto(`${base}/`)}
	onmouseup={() => {}}
	style="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 mt-4 sm:mt-6 md:mt-8 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
>
	Zurück
</Button3d>
