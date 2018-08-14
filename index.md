---
layout: home
published: true
---

<div class="search-engine">
  <label>
    Wyszukaj po tytule/podtytule:
    <input class="search-value" placeholder="Wpisz szukaną frazę"/>
  </label>

  <div class="search-results"></div>

  <script src="/fetch.js"></script>
  <script src="/search.js"></script>

  <script>

    const search = new jekyllSearch(
      '/search.json',
      '.search-value',
      '.search-results',
    );

    search.init();

  </script>
</div>
