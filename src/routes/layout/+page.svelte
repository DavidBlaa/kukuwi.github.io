<script>
	const colorGroups = [
		{
			title: 'kukuwi-red',
			gradations: [
				{ title: 'light', bg: 'bg-kukuwi-red-light' },
				{ title: 'DEFAULT', bg: 'bg-kukuwi-red' },
				{ title: 'dark', bg: 'bg-kukuwi-red-dark' }
			]
		},
		{
			title: 'kukuwi-yellow',
			gradations: [
				{ title: 'light', bg: 'bg-kukuwi-yellow-light' },
				{ title: 'DEFAULT', bg: 'bg-kukuwi-yellow' },
				{ title: 'dark', bg: 'bg-kukuwi-yellow-dark' }
			]
		},
		{
			title: 'kukuwi-blue',
			gradations: [
				{ title: 'light', bg: 'bg-kukuwi-blue-light' },
				{ title: 'DEFAULT', bg: 'bg-kukuwi-blue' },
				{ title: 'dark', bg: 'bg-kukuwi-blue-dark' }
			]
		}
	];
</script>

<main class="mx-auto max-w-[80rem] p-6">
	<h1 class="flex justify-center pb-6 text-4xl font-bold">Component Library</h1>
	<section>
		<h2 class="pb-2 text-2xl font-bold">Colors</h2>
		<ul class="flex flex-col gap-4 pl-4">
			{#each colorGroups as colorGroup}
				<li>
					<h3 class="pb-1 font-semibold">{colorGroup.title}</h3>
					<ul class="flex gap-6 pl-4">
						{#each colorGroup.gradations as gradation}
							<li>
								<div class={`h-[4.5rem] w-24 rounded-lg ${gradation.bg}`}></div>
								<p class="pl-1 text-xs font-semibold text-gray-800">
									{gradation.title.toUpperCase()}
								</p>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</section>
	<section class="my-14">
		<h2 class="pb-2 text-2xl font-bold">GameCard</h2>
	</section>
</main>
