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
		<div class="flex flex-col gap-6 xl:flex-row">
			<section class="flex gap-2">
				<MenuCard
					text="ÜBEN"
					image={{ src: '/images/Hut_2.png', alt: 'Hut' }}
					bgFront="bg-kukuwi-red"
					bgBack="bg-kukuwi-red-dark"
				/>
				<aside class="flex flex-col">
					<p class="text-xl font-bold">Props:</p>
					<ul class="pl-2 pt-2">
						<li><strong>text:</strong> ÜBEN</li>
						<li><strong>image:</strong>{" { src: '/images/Hut_2.png', alt: 'Hut' }"}</li>
						<li><strong>bgFront:</strong> bg-kukuwi-red</li>
						<li><strong>bgBack:</strong> bg-kukuwi-red-dark</li>
					</ul>
				</aside>
			</section>
			<section class="flex gap-2">
				<MenuCard
					text="START"
					image={{ src: '/images/Pokal.png', alt: 'Pokal' }}
					bgFront="bg-kukuwi-blue"
					bgBack="bg-kukuwi-blue-dark"
				/>
				<aside class="flex flex-col">
					<p class="text-xl font-bold">Props:</p>
					<ul class="pl-2 pt-2">
						<li><strong>text:</strong> START</li>
						<li><strong>image:</strong>{" { src: '/images/Pokal.png', alt: 'Pokal' }"}</li>
						<li><strong>bgFront:</strong> bg-kukuwi-blue</li>
						<li><strong>bgBack:</strong> bg-kukuwi-blue-dark</li>
					</ul>
				</aside>
			</section>
		</div>
	</section>

	<section>
		<h2 class="pb-2 text-2xl font-bold">Button3d</h2>
		<div class="flex flex-col gap-10 xl:flex-row">
			<section class="flex items-center">
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
						<Button3d
							bgFront="bg-red-500"
							bgBack="bg-red-600"
							padding="px-8 py-2"
							onclick={() => console.log('Level 3 wurde angeklickt!')}
						>
							Level 3
						</Button3d>
					</li>
				</ul>
				<aside class="mr-20">
					<ul class="flex flex-col gap-1 pl-2 text-sm leading-4">
						<li>
							<strong>bgFront:</strong><br />1. bg-green-500<br />2. bg-yellow-500<br />3.
							bg-red-500
						</li>
						<li>
							<strong>bgBack:</strong><br />1. bg-green-600<br />2. bg-yellow-600<br />3. bg-red-600
						</li>
						<li><strong>padding:</strong> px-8 py-2</li>
						<li><strong>children:</strong><br />1. Level 1<br />2. Level 2<br />3. Level 3</li>
					</ul>
				</aside>
			</section>
			<section class="flex items-center">
				<Button3d bgFront="bg-kukuwi-blue" bgBack="bg-kukuwi-blue-dark" padding="px-8 py-2">
					<Icon src={FaSolidPlay} color="white" className="size-24" />
				</Button3d>
				<aside>
					<ul class="flex flex-col gap-1 pl-2 text-sm leading-4">
						<li>
							<strong>bgFront:</strong> bg-kukuwi-blue
						</li>
						<li>
							<strong>bgBack:</strong> bg-kukuwi-blue-dark
						</li>
						<li><strong>padding:</strong> px-8 py-2</li>
						<li>
							<strong>children:</strong>
							{'<Icon src={FaSolidPlay} color="white" className="size-24" />'}
						</li>
					</ul>
				</aside>
			</section>
		</div>
	</section>
</main>
