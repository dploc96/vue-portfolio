<template>
  <section id="home">
    <div class="home__content">
      <h1 class="title title--home">
        Hi, I am <strong>Duong Phuoc Loc</strong>
      </h1>
      <p class="subtitle subtitle--home">front-end dev</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#home {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 2.5rem);

  .home__content {
    position: relative;

    .title--home {
      font-weight: var(--fw-reg);

      strong {
        display: block;
      }
    }

    .subtitle--home {
      display: block;
      padding: 0.25em 1em;
      margin-bottom: 1em;

      background: var(--clr-accent);
      font-family: var(--ff-secondary);
    }
  }
}

@media (min-width: 739px) {
  #home {
    .home__content {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: max-content;
      margin: 0 auto;

      .subtitle--home {
        position: relative;
        align-self: flex-end;
        width: calc(100% + 1.5em);
        text-align: right;
      }
    }
  }
}
</style>
