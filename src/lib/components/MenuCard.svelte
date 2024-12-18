<script lang="ts">
	import { base } from '$app/paths';
	import Button3d from './Button3d.svelte';
	

	type MenuCardProps = {
		text: string;
		image: { src: string; alt: string };
		bgFront: string;
		bgBack: string;
		onclick: (this: Window, ev: MouseEvent) => any;
		class?: string;
		textClass?: string;
	};

	let { text, image, bgFront, bgBack = 'text-white' ,onclick, class: customClass = '', textClass = '' }: MenuCardProps = $props();
</script>

<Button3d {bgFront} {bgBack} padding="px-1 py-1 md: px-2 md: py-2 lg:px-4 lg:py-4" translateY="translate-y-[-0.75rem]" {onclick} onmouseup={() => {}} class={customClass}>
    <div class={`menu-card flex flex-col items-center justify-center ${customClass}`}>
        <img src={base + image.src} alt={image.alt} class="menu-card-image w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-128 2xl:h-128 object-contain" />
        <p class={`menu-card-text mt-1 font-extrabold text-white text-center ${textClass}`}>{text}</p>
	</div>
</Button3d>