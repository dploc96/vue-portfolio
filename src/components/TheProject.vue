<template>
  <section id="project">
    <h2 class="title title--project">Pet projects</h2>
    <div class="project__list">
      <div class="project__item">
        <a href="https://dploc96.github.io/vanilla-js-band.github.io/">
          <img src="@/assets/images/the-band.png" alt="" />
        </a>
        <h4>The Band Clone</h4>
      </div>
      <div class="project__item">
        <a href="https://frozen-crag-64962.herokuapp.com/">
          <img src="@/assets/images/amazon-clone.png" alt="" />
        </a>
        <h4>Amazon Simple Clone</h4>
      </div>
      <div class="project__item">
        <a href="https://dploc96.github.io/product-page.github.io/">
          <img src="@/assets/images/product-page.png" alt="" />
          <h4>Shoe Product Page</h4>
        </a>
      </div>
      <div class="project__item">
        <a href="https://dploc96.github.io/tribute-page.github.io/">
          <img src="@/assets/images/tribute-page.png" alt="" />
          <h4>Tribute Page</h4>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#project {
  background-color: var(--clr-light);
  color: var(--clr-dark);
  text-align: center;

  .project__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1em;

    .project__item {
      display: flex;
      flex-direction: column;
      justify-content: center;

      border-radius: 0.3rem;
      overflow: hidden;
      transition:
        transform 750ms cubic-bezier(0.5, 0, 0.5, 1),
        opacity 250ms linear;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

      &:hover {
        transform: scale(1.05);
      }

      img {
        padding-bottom: 0.5rem;
        width: 100%;
      }

      h4 {
        justify-self: flex-start;
      }

      &:focus {
        z-index: 2;
      }
    }
  }

  .title--project {
    margin-bottom: 2em;
  }
}
</style>
