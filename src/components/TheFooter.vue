<template>
  <footer id="footer">
    <a href="mailto:dploc96@gmail.com" class="footer__email">
      dploc96@gmail.com
    </a>
    <ul class="social">
      <li class="social__item">
        <a class="social-item__link" href="tel:0842575139">
          <i class="fas fa-phone"></i>
        </a>
      </li>
      <li class="social__item">
        <a
          class="social-item__link"
          href="https://www.linkedin.com/in/locphuocduong"
          target="blank"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li class="social__item">
        <a class="social-item__link" href="skype:live:dploc96?chat">
          <i class="fab fa-skype"></i>
        </a>
      </li>
      <li class="social__item">
        <a
          class="social-item__link"
          href="https://github.com/dploc96"
          target="blank"
        >
          <i class="fab fa-github"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
@mixin opacity {
  opacity: 0.7;
}

#footer {
  background: #111;
  color: var(--clr-accent);
  text-align: center;
  padding: 2.5rem 0;
  font-size: var(--fs--h3);

  .footer__email {
    @include opacity();
    font-weight: var(--fw-bold);

    &:hover {
      text-decoration: underline;
    }
  }

  .social {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 2rem 0 0;
    padding: 0;
  }

  .social__item {
    margin: 0 0.5em;
  }

  .social-item__link {
    @include opacity();
    padding: 0.5em;
  }
}
</style>
