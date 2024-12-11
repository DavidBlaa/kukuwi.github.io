<script lang="ts">

	import Table from '$lib/components/Table.svelte';
	import Button3d from '$lib/components/Button3d.svelte';
	import { FaSolidArrowLeft } from 'svelte-icons-pack/fa';
	import { Icon } from 'svelte-icons-pack';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
</script>

<main class="flex flex-col justify-evenly items-center bg-[#FBF6EC] h-screen">

	<div class="mt-3 flex w-1/2">
		<Table />
	</div>
	<div class="flex flex-col">
		<Button3d bgBack={"bg-kukuwi-yellow-dark"} bgFront={"bg-kukuwi-yellow"} onmouseup={() => goto(base+"/")}
							padding={"p-5"}>

			<Icon color={"white"} src={FaSolidArrowLeft} />

		</Button3d>
	</div>
</main>