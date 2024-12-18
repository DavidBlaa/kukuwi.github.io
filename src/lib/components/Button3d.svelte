<script lang="ts">
	type Button3dProps = {
		bgFront: string;
		bgBack: string;
		padding?: string;
		translateY?: string;
		children: any;
		onclick?: (this: Window, ev: MouseEvent) => any;
		onmouseup?: (...args: any[]) => any;
        onmousedown?: (...args: any[]) => any;
		class?: string;
	};

	let {
		bgFront,
		bgBack,
		padding,
		translateY = 'translate-y-[-0.375rem]',
		children,
		onclick,
		onmouseup,
		onmousedown
	}: Button3dProps = $props();
</script>

<button class={`rounded-xl border-none p-0 active:[&>span]:translate-y-[-0.125rem] ${bgBack}`} {onclick} {onmouseup} {onmousedown}>
	<span class={`block rounded-xl duration-75 ${translateY} ${bgFront} ${padding}`}>
		{@render children()}
	</span>
</button>
