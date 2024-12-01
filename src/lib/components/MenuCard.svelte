<script lang="ts">
	import { base } from '$app/paths';
	import Button3d from './Button3d.svelte';

	type MenuCardProps = {
		text: string;
		image: { src: string; alt: string };
		bgFront: string;
		bgBack: string;
	};

	let { text, image, bgFront, bgBack = 'text-white' }: MenuCardProps = $props();
</script>

<Button3d {bgFront} {bgBack} padding="p-4" translateY="translate-y-[-0.75rem]">
	<div class="w-72">
		<img src={base + image.src} alt={image.alt} class="h-full" />
		<p class={`text-4xl font-extrabold text-white`}>{text}</p>
	</div>
</Button3d>
