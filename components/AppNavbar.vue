<template>
  <div class="navbar">
    <div class="navbar__logo">MANGO</div>
    <div class="navbar__items" :class="{ 'collapse-menu': collapse }">
      <div
        class="navbar__items--item"
        v-for="menuItem in menuItems"
        :key="menuItem"
      >
        {{ menuItem }}
      </div>
    </div>
    <i
      class="fa fa-bars fa-2x navbr__navigation-icon"
      v-if="!collapse"
      @click="handleCollapse"
    ></i>
    <i
      class="fa fa-times fa-2x navbr__navigation-icon"
      v-else
      @click="handleCollapse"
    ></i>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      menuItems: ["menu item 1", "menu item 2", "menu item 3", "menu item 4"],
      collapse: false,
    };
  },
  methods: {
    handleCollapse() {
      this.collapse = !this.collapse;
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/main.scss";

.navbar {
  background-color: #5c5c5c;
  height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $white;
  position: sticky;
  top: 0;
  z-index: 1;
  .navbar__logo {
    display: flex;
    align-items: center;
    width: 30%;
    height: 100%;
    background: $dark-blue;
    padding-left: 48px;
    font-size: 36.21px;
    font-weight: 700;
    @include mobile {
      padding-left: 20px;
    }
    @include tablet {
      font-size: 26px;
      width: 25%;
    }
  }
  .navbar__items {
    font-family: "Roboto", sans-serif;
    display: flex;
    padding-right: 96px;
    @include mobile {
      display: none;

      &.collapse-menu {
        background: $dark-blue;
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        top: 88px;
        padding: 0px 20px 12px 4px;

        .navbar__items--item {
          margin-left: 0;
          padding: 8px 8px 8px 16px;
          border-radius: 8px;
          &:hover {
            background-color: $white;
            color: $gray1;
          }
        }
      }
    }
    @include tablet {
      @apply pl-7;
    }
    .navbar__items--item {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      margin-left: 50px;
      cursor: pointer;
      .navbar__items--item:first-child {
        margin-left: 0;
      }
      @include tablet {
        margin-left: 28px;
        font-size: 12px;
      }
    }
  }
  .navbr__navigation-icon {
    display: none;
    margin-right: 20px;
    color: $white;
    cursor: pointer;

    @include mobile {
      display: block;
    }
  }

  @include mobile {
    background: $dark-blue;
  }
}
</style>
