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
    <div class="menu-card w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-192 2xl:h-192 flex flex-col items-center justify-center">
        <img src={base + image.src} alt={image.alt} class="menu-card-image w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-128 2xl:h-128 object-contain" />
        <p class="menu-card-text mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl font-extrabold text-white text-center">{text}</p>
    </div>
</Button3d>