<script lang="ts">
	import { getRandomGIF } from '$lib/utils/helperfunctions';
	import { base } from '$app/paths';

	interface component_prop_type {
		success: boolean;
		onclick: () => void;
		gif_sound_pause?: boolean;
		volume: number;
	}

	let {
		success = $bindable(true),
		onclick,
		gif_sound_pause = $bindable(true),
		volume = $bindable(0.5)
	}: component_prop_type = $props();

	let gif = getRandomGIF(success);

	let sound = success
		? base + '/audios/gif-sounds/success-fanfare-trumpets-6185.mp3'
		: base + '/audios/gif-sounds/trumpet-fail-242645.mp3';
</script>

<div class="fixed bottom-0 top-0 h-screen w-screen flex-col items-center justify-start">
	<div class="fixed bottom-0 top-0 z-50 flex h-full w-full flex-col items-center justify-start p-7">
		<img
			class="h-5/6 {success ? 'border-green-800' : 'border-red-600'} border-8 shadow-2xl"
			src={base + '/gifs/' + gif}
			alt={success ? 'Gewonnen!!!' : 'Verloren :('}
		/>

		<button
			class="
							mt-3
							flex
							h-1/6
							w-fit
							cursor-pointer
							select-none
							flex-col
							justify-center
							rounded-lg
							border-[1px] bg-amber-500
							px-7
							py-2 text-3xl font-extrabold
							transition-all
							duration-150
							[box-shadow:0_8px_0_0_#d1870a,0_13px_0_0_#1b70f841]
							active:translate-y-2
							active:border-b-[0px]
							active:[box-shadow:0_0px_0_0_#d1870a,0_0px_0_0_#1b70f841]
					"
			{onclick}
		>
			{success ? 'RICHTIG :)' : ' leider falsch :('}
			<br />
			{success ? 'weiter' : 'nochmal?'}
		</button>
		<audio src={sound} bind:paused={gif_sound_pause} bind:volume></audio>
	</div>
	<div
		class="z-15 fixed bottom-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-gray-500 opacity-80"
	></div>
</div>
