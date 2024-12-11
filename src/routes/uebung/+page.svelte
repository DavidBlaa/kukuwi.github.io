<script lang="ts">
    import { goto } from "$app/navigation";
    import { base } from '$app/paths';
    import Button3d from '$lib/components/Button3d.svelte';

    const levels = [
        { text: 'Level 1', bgFront: 'bg-green-500', bgBack: 'bg-green-600' },
        { text: 'Level 2', bgFront: 'bg-yellow-500', bgBack: 'bg-yellow-600' },
        { text: 'Level 3', bgFront: 'bg-red-500', bgBack: 'bg-red-600' }
    ];

    const ueberschriften = [
        { text: 'Ratespiel', textColor: 'text-kukuwi-red', path: 'ratespiel' }, 
        { text: 'Pattern', textColor: 'text-kukuwi-yellow', path: 'pattern' }, 
        { text: 'Genre', textColor: 'text-kukuwi-blue', path: 'genre' }
    ];

    function handleLevelClick(ueberschrift: string, level: string) {
        const uebungPath = ueberschriften.find(u => u.text === ueberschrift)?.path;
        if (uebungPath) {
            let instrument = 'drum'; // Standardwert, kann angepasst werden
            let rows = '2'; // Standardwert, kann angepasst werden

            if (ueberschrift === 'Ratespiel') {
                instrument = 'drum';
                rows = level === 'Level 1' ? '2' : level === 'Level 2' ? '3' : '4';
            } else if (ueberschrift === 'Pattern') {
                instrument = 'drum';
                rows = level === 'Level 1' ? '2' : level === 'Level 2' ? '3' : '4';
            }
            goto(`${base}/uebung/${uebungPath}/${level}?instrument=${instrument}&rows=${rows}`);
        }   
    }
</script>

<main class="h-screen">
    <div class="grid grid-cols-3 gap-4 h-full">
        {#each ueberschriften as ueberschrift}
            <div class="flex flex-col items-center h-full">
                <div class={`flex justify-center items-center text-5xl font-bold ${ueberschrift.textColor} h-1/6`}>
                    {ueberschrift.text}
                </div>
                <div class="grid grid-rows-3 gap-4 mt-4 h-5/6 w-full">
                    {#each levels as level}
                        <div class="flex justify-center items-center text-white font-bold text-3xl h-full w-full">
                            <Button3d bgFront={level.bgFront} bgBack={level.bgBack} padding="px-8 py-2" onclick={() => handleLevelClick(ueberschrift.text, level.text)}>
                                {level.text}
                            </Button3d>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</main>