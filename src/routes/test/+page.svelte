<script lang="ts">
	import { onMount } from 'svelte';
	import * as midiManager from 'midi-file';
	import { base } from '$app/paths';



	const loadMidiFile = async () =>{
		const response = await fetch(base+'/src/lib/midis/test.mid');
		const arrayBuffer = await response.arrayBuffer();
		const uintArr = new Uint8Array(arrayBuffer);
		console.log(uintArr);
		const parsed = midiManager.parseMidi(uintArr);

		console.log(parsed)

	}

	onMount( () => {

		loadMidiFile();



	});


</script>
