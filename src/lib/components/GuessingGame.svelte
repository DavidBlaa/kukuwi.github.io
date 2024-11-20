<script lang="ts">
	import SoundControl from '$lib/components/SoundControl.svelte';
	import type { KlangQuizInstrument } from '$lib/types/types';
	import MidiBoardGrid from '$lib/components/MidiBoardGrid.svelte';
	import MusicControl from '$lib/components/MusicControl.svelte';
	import GIF from '$lib/components/GIF.svelte';
	import { goto } from '$app/navigation';

	let {
		instruments,
		active_tile_list,
		pause_tile_list,
		board_bg_color = 'bg-[#252525]',
		track_source,
		correct_instrument_id
	}: {
		instruments: KlangQuizInstrument[];
		active_tile_list: boolean[];
		pause_tile_list: boolean[];
		onmouseup: (end_of_song: boolean, id: number) => void;
		board_bg_color?: string;
		track_source: string;
		track_paused?: boolean;
		correct_instrument_id: number;
	} = $props();

	let sound_level_float: number = $state(0.4);

	function handle_instrument_buttons(end_of_sound: boolean, id: number): void {
		time_running = false;
		track_paused = true;
		game_won = id == correct_instrument_id;
		game_ended = true;
		sound_effect_paused = false;
	}

	function handle_next_repeat_button(): void {
		if (game_won) {
			goto('/');
		} else {
			tries++;
			time_running = true;
			game_ended = false;
		}
	}

	let track_paused = $state(false);
	let sound_effect_paused: boolean = $state(false);
	let game_ended: boolean = $state(false);
	let game_won: boolean = $state(false);

	let time: number = $state(0);
	let time_running: boolean = $state(true);
	let tries: number = $state(0);
	let repeats: number = $state(0);

	function start() {
		setInterval(() => {
			if (time_running) {
				time++;
			}
		}, 1000);
	}

	start();
</script>

<div
	class="
            flex
            justify-evenly
            rounded-2xl
            {board_bg_color}
            [rotate-y-20deg]
            h-full
            w-full
            border-x-[10px]
            border-b-[20px]
            border-t-[10px]
            border-b-gray-600
            border-l-gray-200
            border-r-gray-400
            border-t-gray-400
            p-3
            shadow-2xl lg:p-10"
>
	<div class="basis-2/12">
		<MusicControl
			{time}
			{track_source}
			bind:sound_level_float
			bind:track_paused
			{tries}
			{repeats}
		/>
	</div>

	<div class="basis-8/12">
		<MidiBoardGrid
			bind:sound_level_float
			{active_tile_list}
			{pause_tile_list}
			use_tile_sounds={false}
			{instruments}
			onmouseup={handle_instrument_buttons}
		/>
	</div>

	<div class="basis-1/12">
		<SoundControl bind:sound_level_float />
	</div>
</div>
{#if game_ended}
	<div class="absolute left-0 top-0">
		<GIF
			bind:success={game_won}
			onclick={handle_next_repeat_button}
			bind:gif_sound_pause={sound_effect_paused}
			bind:volume={sound_level_float}
		/>
	</div>
{/if}
