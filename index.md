---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<div class="search-engine">
  <label>
    Wyszukaj po tytule/podtytule:
    <input class="search-value" placeholder="Wpisz szukaną frazę"/>
  </label>

  <div class="search-results"></div>

  <script src="/dist/js/search/fetch.min.js"></script>
  <script src="/dist/js/search/search.min.js"></script>

  <script>

    const search = new jekyllSearch(
      '/dist/js/search/search.json',
      '.search-value',
      '.search-results',
    );

    search.init();

  </script>
</div>