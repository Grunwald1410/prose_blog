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
  
  <script type="text/javascript" src="./src/fetch.js"></script>
<script type="text/javascript" src="./src/search.js"></script>

 <script type="text/javascript">

  // New search using example options
  const search = new jekyllSearch(
    'https://alembic.darn.es/assets/search.json',
    '#search',
    '#list',
    'https://alembic.darn.es'
  );

  // Initialise
  search.init();

</script>
 
</div>
