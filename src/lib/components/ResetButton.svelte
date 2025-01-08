<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Button3d from '$lib/components/Button3d.svelte';
</script>

<Button3d
	bgFront="bg-kukuwi-red"
	bgBack="bg-kukuwi-red-dark"
	padding="p-2"
	onclick={() => goto(`${base}/`)}
	onmouseup={() => {}}
	style="w-24 text-white font-bold"
>
	Abbruch
</Button3d>
