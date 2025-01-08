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
	style="w-40 mt-8 text-white font-bold"
>
	Zurück
</Button3d>
