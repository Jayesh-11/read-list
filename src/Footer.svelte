<script>
  import EntryBuilder from "./EntryBuilder.svelte";
</script>

<div class="footer">
  <div>
    <button class="footer-button" popovertarget="about" commandfor="about"
      >About</button
    >
    <button class="footer-button" command="show-modal" commandfor="add-new"
      >Add new</button
    >
    <a href="https://github.com/Jayesh-11/read-list">Github</a>
  </div>
  <a href="https://j0dev.com/">By Jayesh Vyavahare</a>
</div>

<dialog id="add-new">
  <EntryBuilder />
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>

<div class="about-popover" id="about" popover="hint">
  <p>
    I used to manage all these links in a markdown file, while easy to manage,
    there were some problems, also there was no scaling issue, as realistically
    there wouldn't be &gt;10000+ links.
  </p>
  <ol>
    <li>How do you search what you need from over 300+ links</li>
    <li>How do you share these links easily</li>
    <li>I don't want to go to github to share link</li>
    <li>I wanted notes based search and tag based search</li>
    <li>Share the whole list with someone</li>
    <li>Easily add to the list</li>
    <li>Aesthetics</li>
  </ol>

  <p>
    Also I wanted to test drive Svelte, so learnt via building, and this was the
    outcome, <strong>intentionally kept it simple</strong>, fork, star, build
    your own read list.
  </p>
  <button
    class="close-button"
    popovertarget="about"
    popovertargetaction="hide"
    command="hide">Close</button
  >
</div>

<style>
  .footer {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .footer-button {
    padding: 4px 8px;
    border: 1.5px solid #000;
    box-shadow: 2px 2px 0 #000;
    outline: none;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
  }
  .about-popover {
    gap: 8px;
    padding: 16px;
    max-width: min(400px, 80vw);
    max-height: min(400px, 80vh);
    border: 2px solid #000;
    box-shadow: 2px 2px 0 #000;
    outline: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .close-button {
    border: 1.5px solid #000;
    box-shadow: 2px 2px 0 #000;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    padding: 4px 8px;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .close-button:active {
    box-shadow: 0px 0px 0 #000;
  }
</style>
