<script lang="ts">
  import list from "./list.json";
  let formValues = $state({
    link: "",
    title: "",
    notes: "",
    tags: [],
    author: [],
    doneReading: false,
  });
  let handleSubmit = () => {};
  let authorsSet = new Set();
  let tagsSet = new Set();
  list.forEach((item) => {
    item.author.forEach((author) => {
      if (!authorsSet.has(author)) {
        authorsSet.add(author);
      }
    });
    item.tags.forEach((tag) => {
      if (!tagsSet.has(tag)) {
        tagsSet.add(tag);
      }
    });
  });
  let authorOptions = Array.from(authorsSet);
  let tagsOptions = Array.from(tagsSet);
</script>

<form class="form-container" onsubmit={handleSubmit}>
  <div class="input-container">
    <label for="fname">Link:</label>
    <input type="text" id="link" name="link" bind:value={formValues.link} />
  </div>
  <div class="input-container">
    <label for="lname">Title:</label>
    <input type="text" id="title" name="title" bind:value={formValues.title} />
  </div>
  <div class="input-container">
    <label for="lname">Notes:</label>
    <textarea id="notes" name="notes" bind:value={formValues.notes}></textarea>
  </div>
  <div class="input-container">
    <label for="lname">Tags:</label>
    <select id="tags" name="tags" bind:value={formValues.tags}>
      {#each tagsOptions as tagOption}
        <option>{tagOption}</option>
      {/each}
    </select>
  </div>
  <div class="input-container">
    <label for="lname">Author:</label>
    <select id="author" name="author" bind:value={formValues.author}>
      {#each authorOptions as authorOption}
        <option>{authorOption}</option>
      {/each}
    </select>
  </div>
  <div class="input-container">
    <label for="lname">Done Reading:</label>
    <input
      type="checkbox"
      id="doneReading"
      name="doneReading"
      bind:checked={formValues.doneReading}
    />
  </div>
  <input type="submit" value="Copy JSON" />
</form>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 320px;
  }
  .input-container {
    display: flex;
    justify-content: space-between;
  }
  .input-container > input {
    width: 140px;
  }
  .input-container > select {
    width: 140px;
  }
  .input-container > textarea {
    width: 140px;
  }
</style>
