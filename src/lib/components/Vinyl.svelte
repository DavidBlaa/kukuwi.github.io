<script lang="ts">
	let {
		spinning = false,
		height = 'h-min-1/10 h-full'
	}: {
		spinning: boolean;
		width?: string;
		height?: string;
	} = $props();
</script>

<div class="flex flex-row items-center justify-center {height}">
	<div
		class="flex h-full w-full flex-row items-center justify-center rounded-full bg-gray-600 {spinning
			? 'animate-spin-slow'
			: ''}"
	>
		<div
			class="flex h-5/6 w-5/6 flex-row items-center justify-center rounded-full bg-gray-800


            "
		>
			<div
				class="flex h-5/6 w-5/6 flex-row items-center justify-center rounded-full border-b-2
                            border-l-2 border-r-2
                            border-t-2 border-b-gray-300
                            border-l-gray-800 border-r-gray-800
                            border-t-gray-300 bg-gray-800"
			>
				<div
					class="flex h-5/6 w-5/6 flex-row items-center justify-center rounded-full border-b-2
                            border-l-2 border-r-2
                            border-t-2 border-b-gray-300
                            border-l-gray-800 border-r-gray-800
                            border-t-gray-300 bg-gray-800"
				>
					<div
						class="flex h-5/6 w-5/6 flex-row items-center justify-center rounded-full border-b-2
                            border-l-2 border-r-2
                            border-t-2 border-b-gray-300
                            border-l-gray-800 border-r-gray-800
                            border-t-gray-300 bg-gray-800"
					>
						<div
							class="flex h-4/6 w-4/6 flex-row items-center justify-center rounded-full bg-red-800"
						>
							<div
								class="flex h-1/6 w-1/6 flex-row items-center justify-center rounded-full bg-white"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
