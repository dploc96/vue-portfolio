<script setup>
const theme = ref('light');

watch(
  () => theme.value,
  (val) => {
    document.body.dataset.theme = val;
  },
);

const setTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
};

const openNav = () => {
  document.body.classList.toggle('header__nav--open');
};

const openLink = () => {
  document.body.classList.remove('header__nav--open');
};
</script>

<template>
  <header id="header">
    <div class="header__switch">
      <input
        id="header-switch__check"
        type="checkbox"
        class="header-switch__check"
        @click="setTheme"
      />
      <label htmlFor="header-switch__check">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <div class="header-switch__ball"></div>
      </label>
    </div>
    <button class="header__menu-icon" @click="openNav">
      <span></span>
    </button>
    <nav class="header__nav">
      <ul class="header-nav__list">
        <li>
          <a href="#" @click="openLink"> Home </a>
        </li>
        <li>
          <a href="#skill" @click="openLink"> Skills </a>
        </li>
        <li>
          <a href="#project" @click="openLink"> Pet Projects </a>
        </li>
        <li>
          <a href="#contact" @click="openLink"> Contact </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
#header {
  padding: 1rem 1.5rem;

  // Switch theme
  .header__switch {
    label {
      position: relative;

      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 3rem;
      height: 1.5rem;

      padding: 0.5rem;
      border-radius: 3rem;
      border: 2px solid var(--clr-accent);

      background-color: #000;
      cursor: pointer;
      transform: scale(1.5);

      i {
        font-size: 0.6rem;

        &.fa-moon {
          color: #f1c40f;
        }

        &.fa-sun {
          color: #f39c12;
        }
      }

      .header-switch__ball {
        position: absolute;
        top: 2px;
        left: 2px;

        width: 1rem;
        height: 1rem;

        border-radius: 50%;
        background-color: var(--clr-accent);

        transform: translateX(0px);
        transition: transform 0.2s linear;
      }
    }

    .header-switch__check {
      position: absolute;
      opacity: 0;

      &:checked + label .header-switch__ball {
        transform: translateX(24px);
      }
    }
  }

  // Menu icon
  .header__menu-icon {
    position: fixed;
    right: 1em;
    top: 1em;
    z-index: 1000;

    padding: 0.5em;
    border: 0;

    background: transparent;
    cursor: pointer;

    span {
      position: relative;
      display: block;

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
      }

      &::before {
        top: 6px;
      }

      &::after {
        bottom: 6px;
      }

      &,
      &::before,
      &::after {
        width: 2rem;
        height: 3px;
        border-radius: 1rem;
        background-color: var(--clr-accent);
        transition: transform 250ms ease-in-out;
      }
    }
  }

  /* Nav */
  .header__nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;

    background: var(--clr-dark);
    color: var(--clr-light);

    transform: translateX(100%);
    transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);

    .header-nav__list {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      height: 100%;
      margin: 0;
      padding: 0;
      list-style: none;

      a {
        color: inherit;
        font-weight: var(--fw-bold);
        font-size: var(--fs-h2);
        text-decoration: none;

        &:hover {
          color: var(--clr-accent);
        }
      }
    }
  }
}

.header__nav--open #header {
  .header__menu-icon {
    position: fixed;

    span {
      transform: rotate(0.625turn);

      &::before {
        transform: rotate(90deg) translateX(-6px);
      }

      &::after {
        opacity: 0;
      }
    }
  }

  .header__nav {
    transform: translateX(0);
  }
}
</style>
