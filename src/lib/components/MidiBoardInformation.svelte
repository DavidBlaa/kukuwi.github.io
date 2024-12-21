<script lang="ts">
	interface ComponentProps {
		time: number;
		tries: number;
		repeats: number;
	}

	let {
		time = $bindable(0),
		tries = $bindable(0),
		repeats = $bindable(0)
	}: ComponentProps = $props();
</script>

<div class="grid grid-cols-2 border-2 border-gray-500 bg-blue-200 text-xs lg:text-2xl">
	<span class="border-2 border-gray-500 p-1">Gehört</span>
	<span class="items-center border-2 border-gray-500 p-1">{repeats}</span>

	<span class="border-2 border-gray-500 p-1">Versuche</span>
	<span class="items-center border-2 border-gray-500 p-1">{tries}</span>

	<span class="border-2 border-gray-500 p-1">Zeit</span>
	<span class="items-center border-2 border-gray-500 p-1">{time}</span>
</div>
