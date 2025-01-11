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

<div class="grid grid-cols-2 border-2 border-gray-500 bg-blue-200 text-lg font-medium lg:text-3xl">
	<span class="border-2 border-gray-500 p-1">Gehört</span>
	<span class="border-2 border-gray-500 p-1 text-center">{repeats}</span>

	<span class="border-2 border-gray-500 p-1 pr-6">Versuche</span>
	<span class="border-2 border-gray-500 p-1 text-center">{tries}</span>

	<span class="border-2 border-gray-500 p-1">Zeit</span>
	<span class="border-2 border-gray-500 p-1 text-center">{time}</span>
</div>
