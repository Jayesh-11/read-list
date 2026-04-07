<script lang="ts">
  import list from "./list.json";
  import MiniSearch from "minisearch";
  const miniSearch = new MiniSearch({
    fields: ["title", "tags", "notes", "createdAt", "url"],
    storeFields: ["title", "tags", "notes", "createdAt", "url"],
  });
  miniSearch.addAll(list);

  let query: string = $state("");
  const onInput = (q: string) => {};
  const results = $derived.by(() => {
    const queryResults = miniSearch.search(query);
    if (queryResults.length === 0 && !query) {
      return list;
    }
    return queryResults;
  });
</script>

<div class="container">
  <input
    class="query-input"
    bind:value={query}
    oninput={(e) => onInput(e.currentTarget.value)}
  />

  {#each results as result}
    <div class="card">
      <a href={result.url} target="_blank">{result.title}</a>
      <div class="tag-container">
        {#each result.tags as tag}
          <button class="tag">{tag}</button>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .card {
    border: 1px solid #eee;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 4px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
  }

  .query-input {
    font-size: 16px;
  }

  .tag-container {
    display: flex;
    flex-direction: row;
    gap: 2px;
  }
  .tag {
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
