class DiscountTab extends HTMLElement {
  constructor() {
    super();
    // this.cachedResults = {};
    // this.predictiveSearchResults = this.querySelector('[data-predictive-search]');
    // this.allPredictiveSearchInstances = document.querySelectorAll('predictive-search');
    // this.isOpen = false;
    // this.abortController = new AbortController();
    // this.searchTerm = '';

    this.setupEventListeners();
  }

  setupEventListeners() {
    // this.input.form.addEventListener('submit', this.onFormSubmit.bind(this));
    // this.input.addEventListener('focus', this.onFocus.bind(this));
    // this.addEventListener('focusout', this.onFocusOut.bind(this));
    // this.addEventListener('keyup', this.onKeyup.bind(this));
    // this.addEventListener('keydown', this.onKeydown.bind(this));
  }
  test(){
    console.log(1)
  }
}

customElements.define('discount-tab', DiscountTab);
