<script>
  let myWord = "baseball";
  let reverse = 1;
  let reversed = 0;
  let reversing = 0;
  let clicked = 0;
  let offset2 = 0;
  import { sineOut, sineIn } from "svelte/easing";
  function reverseString(params) {
    let myString = params;
    let outputArray = [];
    let outputString = "";

    myString.split("").forEach((letter, i) => {
      outputArray.unshift(letter);
    });
    outputString = outputArray.join("");
    console.log(outputString);
    return outputString;
  }

  function spin(node, { delay, duration }) {
    return {
      delay,
      duration,
      css: (t) => {
        const eased = sineIn(t);
        let offset = reversed ? 0 : 0;

        return `
					transform: rotateY(${eased * 180 - offset}deg);
					`;
      },
    };
  }
  function spin2(node, { delay, duration }) {
    return {
      delay,
      duration,
      css: (t) => {
        const eased = sineOut(t);
        return `transform: rotateY(${eased * 180 - 180}deg);`;
      },
    };
  }

  // reverseString("cat");
</script>

<section>
  <div class="flex !flex-col items-center">
    <div>
      <input type="text" bind:value={myWord} class="max-w-64" />
      <button
        on:click={() => {
          reverse === 0 ? (reverse = 1) : (reverse = 0);
          clicked = 1;
        }}>
        Toggle reverse</button>
    </div>
    <!-- warning: jank -->
    <div>
      {#key reverse}
        {#if clicked}
          <div
            in:spin={{ delay: 0, duration: 700 }}
            on:introstart={() => {
              reversing = 1;
            }}
            on:introend={() => {
              reversing = 0;
              reversed === 0 ? (reversed = 1) : (reversed = 0);
            }}
            class="!normal-case !text-transparent transition-all !bg-clip-text !from-emerald-700 !to-purple-500 {reversed ===
            0
              ? 'bg-gradient-to-l'
              : 'bg-gradient-to-r'}">
            {#each reversed ? reverseString(myWord) : myWord as letter}
              {#if reversing}
                <span class="!inline-block !min-w-3">{letter}</span>
              {:else}
                <span
                  class="!inline-block !min-w-3 text-purple-500"
                  in:spin2={{ delay: 0, duration: 1000 }}
                  on:introend={() => ((reversing = 0), (clicked = 0))}
                  >{letter}</span>
              {/if}
            {/each}
          </div>
        {:else}
          <div
            class="!normal-case !text-transparent !bg-clip-text !from-emerald-700 !to-purple-500 {reversed ===
            0
              ? 'bg-gradient-to-l'
              : 'bg-gradient-to-r'}">
            {#each reversed ? reverseString(myWord) : myWord as letter}
              <span class="!inline-block !min-w-3">{letter}</span>
            {/each}
          </div>
        {/if}
      {/key}
    </div>
  </div>
</section>
