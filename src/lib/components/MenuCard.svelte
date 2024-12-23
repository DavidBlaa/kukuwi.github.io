<script lang="ts">
	import { base } from '$app/paths';
	import Button3d from './Button3d.svelte';

	type MenuCardProps = {
		text: string;
		image: { src: string; alt: string };
		bgFront: string;
		bgBack: string;
		onclick: () => void;
	};

	let { text, image, bgFront, bgBack, onclick }: MenuCardProps = $props();
</script>

<Button3d
	{bgFront}
	{bgBack}
	{onclick}
	style="flex flex-col items-center justify-center w-40 sm:w-52 md:w-56 lg:w-64 xl:w-80"
	padding="p-4"
	translateY="translate-y-[-0.7rem]"
>
	<img src={base + image.src} alt={image.alt} class="w-full" />
	<p class="mt-1 text-center text-4xl font-extrabold text-white">{text}</p>
</Button3d>
