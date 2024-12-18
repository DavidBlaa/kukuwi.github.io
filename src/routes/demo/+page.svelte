<script lang="ts">
	import { instruments } from '$lib/data/instruments';
	import MidiBoard from '$lib/components/DemoBoard.svelte';

	let n_instruments: number = instruments.length;
	const activeTileList: boolean[] = $state(Array(n_instruments).fill(false));
	const pauseTileList: boolean[] = $state(Array(n_instruments).fill(true));
	function alt_handle_music_tile_click(endOfSong: boolean = false, index: number) {
		activeTileList[index] = !activeTileList[index];

		if (!endOfSong) {
			pauseTileList[index] = !pauseTileList[index];
		}
	}
</script>

<div class="h-screen w-full bg-blue-200 p-5">
	<MidiBoard
		{instruments}
		{activeTileList}
		{pauseTileList}
		onmouseup={alt_handle_music_tile_click}
	/>
</div>
