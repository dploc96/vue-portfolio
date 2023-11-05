<template>
  <section id="skill">
    <h2 class="title title--skill">Skills</h2>
    <div class="skill__list">
      <div class="skill__item">
        <h3>PROGRAMMING LANGUAGES</h3>
        <ul>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Visual Basic</li>
        </ul>
      </div>
      <div class="skill__item">
        <h3>FRAMEWORKS</h3>
        <ul>
          <li>ReactJS</li>
        </ul>
        <h3>VERSION CONTROL</h3>
        <ul>
          <li>Git</li>
          <li>SVN</li>
        </ul>
      </div>
      <div class="skill__item">
        <h3>DATABASE</h3>
        <ul>
          <li>Microsoft SQL Server</li>
        </ul>
        <h3>IDE</h3>
        <ul>
          <li>Visual Studio Code</li>
          <li>Visual Studio 2012</li>
        </ul>
      </div>
    </div>
    <a target="_blank" href="{cv}" class="btn"> Download CV </a>
  </section>
</template>

<style lang="scss" scoped>
#skill {
  background-color: var(--clr-dark);
  background-size: cover;
  color: var(--clr-light);
  text-align: center;

  .skill__list {
    margin-top: -1.5rem;
    margin-bottom: 4em;

    .skill__item {
      max-width: 500px;
      margin: 0 auto;

      h3 {
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
      }
    }
  }

  .title--skill {
    color: var(--clr-accent);
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 2em;
      height: 1px;
      margin: 0.5em auto 1em;
      background: var(--clr-light);
      opacity: 0.25;
    }
  }
}

@media (min-width: 739px) {
  .skill__list {
    display: flex;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }

  .skill__item {
    flex: 1;
  }

  .skill__item + .skill__item {
    margin-left: 2em;
  }
}
</style>
