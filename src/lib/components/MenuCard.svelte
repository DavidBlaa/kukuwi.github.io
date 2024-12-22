<script lang="ts">
	import { base } from '$app/paths';
	import Button3d from './Button3d.svelte';

	type MenuCardProps = {
		text: string;
		image: { src: string; alt: string };
		bgFront: string;
		bgBack: string;
		onclick: (this: Window, ev: MouseEvent) => any;
	};

	let { text, image, bgFront, bgBack, onclick }: MenuCardProps = $props();
</script>

<Button3d
	{bgFront}
	{bgBack}
	{onclick}
	style="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56"
>
	<div class={`flex flex-col items-center justify-center`}>
		<img src={base + image.src} alt={image.alt} class="object contain w-full" />
		<p class={`mt-1 text-center text-4xl font-extrabold text-white`}>{text}</p>
	</div>
</Button3d>
