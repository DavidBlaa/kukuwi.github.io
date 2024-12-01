<script>
	import Button3d from '$lib/components/Button3d.svelte';
	import MenuCard from '$lib/components/MenuCard.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { FaSolidPlay } from 'svelte-icons-pack/fa';

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
		<h2 class="pb-5 text-2xl font-bold">MenuCard</h2>
		<ul class="flex gap-10">
			<li>
				<MenuCard
					text="ÜBEN"
					image={{ src: '/images/Hut_2.png', alt: 'Hut' }}
					bgFront="bg-kukuwi-red"
					bgBack="bg-kukuwi-red-dark"
				/>
			</li>
			<li>
				<MenuCard
					text="START"
					image={{ src: '/images/Pokal.png', alt: 'Pokal' }}
					bgFront="bg-kukuwi-blue"
					bgBack="bg-kukuwi-blue-dark"
				/>
			</li>
		</ul>
	</section>

	<section>
		<h2 class="pb-5 text-2xl font-bold">Button3d</h2>
		<div class="flex items-start gap-20">
			<ul class="flex flex-col gap-5 text-3xl font-bold text-white">
				<li>
					<Button3d bgFront="bg-green-500" bgBack="bg-green-600" padding="px-8 py-2">
						Level 1
					</Button3d>
				</li>
				<li>
					<Button3d bgFront="bg-yellow-500" bgBack="bg-yellow-600" padding="px-8 py-2">
						Level 2
					</Button3d>
				</li>
				<li>
					<Button3d bgFront="bg-red-500" bgBack="bg-red-600" padding="px-8 py-2">Level 3</Button3d>
				</li>
			</ul>
			<Button3d bgFront="bg-kukuwi-blue" bgBack="bg-kukuwi-blue-dark" padding="px-8 py-2">
				<Icon src={FaSolidPlay} color="white" className="size-24" />
			</Button3d>
		</div>
	</section>
</main>
