<script lang="ts">
    import Icon from '$lib/components/Icons.svelte';
	interface ComponentProps {
		img_url: string;
		is_active: boolean;
		audio_url: string;
		name: string;
		onmouseup: (...args: any[]) => any;
		paused: boolean;
		width?: string;
		height?: string;
		active_color_top?: string;
		active_color_bottom?: string;
		passiv_color_top?: string;
		passiv_color_bottom?: string;
		use_audio?: boolean;
		use_header?: boolean;
		volume?: number;
	}

	let {
		img_url,
		is_active,
		audio_url,
		name,
		onmouseup,
		paused = true,
		active_color_top = 'bg-blue-400',
		active_color_bottom = '[box-shadow:0_10px_0_0_#4e81bf,0_15px_0_0_#1b70f841]',
		passiv_color_top = 'bg-blue-100',
		passiv_color_bottom = '[box-shadow:0_10px_0_0_#b0b1b5,0_15px_0_0_#1b70f841]',
		use_audio = true,
		use_header = true,
		volume = 0.5
	}: ComponentProps = $props();
    
	export function handle_music_tile_click(end_of_song: boolean = false): void {
		is_active = !is_active;

		if (!end_of_song) {
			paused = !paused;
		}
	}
</script>

<div class="flex h-full flex-col">
	{#if use_header}
		<p
			class="flex w-fit flex-col items-start justify-center px-1 text-xs lg:text-xl {is_active
				? active_color_top
				: passiv_color_top} mb-1 rounded-sm font-bold"
		>
			{name}
		</p>
	{/if}
	<button
		{onmouseup}
		class="flex h-full flex-col items-center justify-center {is_active
			? active_color_top
			: passiv_color_top} order-[1px] cursor-pointer select-none
    rounded-lg transition-all
    duration-150 active:translate-y-2
    active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] {is_active
			? active_color_bottom
			: passiv_color_bottom}
    border-b-[1px] border-white"
	>
	<Icon src={img_url} className=""/>
		{#if use_audio}
			<audio src={audio_url} bind:paused bind:volume onended={() => handle_music_tile_click(true)}
			></audio>
		{/if}
	</button>
</div>