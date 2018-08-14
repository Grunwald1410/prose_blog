class jekyllSearch {
  constructor(dataSource, searchField, resultsList, siteURL) {
    this.dataSource = dataSource
    this.searchField = document.querySelector(searchField)
    this.resultsList = document.querySelector(resultsList)
    this.siteURL = siteURL

    this.displayResults = this.displayResults.bind(this)
  }

  fetchedData() {
    return fetch(this.dataSource)
      .then(blob => blob.json())
  }

  async findResults() {
	this.resultsList.innerHTML = '<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>';
    const data = await this.fetchedData()
    return data.filter(item => {
	const inputValue = this.searchField.value.trim().replace(/\s/g, ' | ');/*<--*/
      const regex = new RegExp(inputValue, 'gi');
      return item.title.match(regex) || item.content.match(regex)
    })
  }

 async displayResults() {
    const results = await this.findResults();
    const html = results.map(item => `
        <li class="result">
            <article class="result__article  article">
                <div class="post-preview">
                  <a href="${item.url}">
                    <h2 class="post-title">${item.title}</h2>
                    <h3 class="post-subtitle">${item.subtitle}</h3>
                  </a>
          
                  <p class="post-meta">${item.date}</p>
                </div>
            </article>
            
            <hr>
        </li>`).join('');
    if ((results.length === 0) || (this.searchField.value === '')) {
      this.resultsList.innerHTML = '<p>Nic nie znaleziono</p>';
    } else {
      this.resultsList.innerHTML = html;
    }
  }

  init() {
    const url = new URL(document.location)
    if (url.searchParams.get("search")) {
      this.searchField.value = url.searchParams.get("search")
      this.displayResults()
    }
    this.searchField.addEventListener('keyup', () => {
      this.displayResults()
      url.searchParams.set("search", this.searchField.value)
      window.history.pushState('', '', url.href)
    })
    this.searchField.addEventListener('keypress', event => {
      if (event.keyCode == 13) {
        event.preventDefault()
      }
    })
  }
}
