<script lang="ts">
  import list from "./list.json";
  import MiniSearch from "minisearch";
  const miniSearch = new MiniSearch({
    fields: ["title", "tags", "notes", "createdAt", "url"],
    storeFields: ["title", "tags", "notes", "createdAt", "url"],
  });
  miniSearch.addAll(list);

  let query: string = $state("");
  let tagsFilter: string[] = $state([]);

  const results = $derived.by(() => {
    const tagsFilterSet = new Set(tagsFilter);
    if (!query) {
      if (tagsFilter.length === 0) return list;
      return list.filter((item) => {
        return item.tags.some((tag: string) => tagsFilterSet.has(tag));
      });
    }
    const queryResults = miniSearch.search(query, {
      filter: (result) => {
        return result.tags.some((tag: string) => tagsFilterSet.has(tag));
      },
    });
    return queryResults;
  });

  const onInput = (q: string) => {};
  const onTagClickHandler = (tag: string) => {
    if (tagsFilter.includes(tag)) {
      tagsFilter = tagsFilter.filter((t) => t !== tag);
      return;
    }
    tagsFilter.push(tag);
  };
</script>

<div class="container">
  <input
    class="query-input"
    bind:value={query}
    oninput={(e) => onInput(e.currentTarget.value)}
    placeholder="Search anything..."
  />
  <div class="tag-filter-view">
    {#each tagsFilter as filterTag (filterTag)}
      <button class="tag" data-tagname={filterTag}>{filterTag}</button>
    {/each}
  </div>

  {#each results as result}
    <div class="card">
      <a href={result.url} target="_blank">{result.title}</a>
      <span>{result.author}</span>
      <div class="tag-container">
        {#each result.tags as tag}
          <button
            class="tag"
            data-tagname={tag}
            onclick={() => onTagClickHandler(tag)}>{tag}</button
          >
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    max-width: 100%;
    border: 1.5px solid #000;
    box-shadow: 2px 2px 0 #000;
    outline: none;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    box-shadow: 4px 4px 0 rgba(0, 0, 0);
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
  }

  .query-input {
    font-size: 16px;
    padding: 12px;
    max-width: 100%;
    border: 1.5px solid #000;
    box-shadow: 2px 2px 0 #000;
    outline: none;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .query-input:hover,
  .query-input:focus {
    box-shadow: 4px 4px 0 rgba(0, 0, 0);
  }

  .tag-container {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  .tag {
    border: none;
    cursor: pointer;
    font-size: 14px;
    padding: 4px 8px;
    font-family: monospace;
  }

  .tag[data-tagname="React"] {
    background-color: rgb(97, 219, 251);
  }

  .tag-filter-view {
    display: flex;
    gap: 8px;
  }
</style>
