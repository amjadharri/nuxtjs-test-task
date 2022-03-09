<template>
  <div class="widget">
    <div class="content">
      <div class="header" ref="widgetHeader">
        <div class="header__description">
          <h3 class="widget__title">{{ description.product_title }}</h3>
          <h3 class="widget__subtitle">{{ description.product_subtitle }}</h3>
        </div>
        <img src="~/assets/images/car.png" alt="" class="widget__img" />
      </div>
      <WidgetDetails />
    </div>
    <WidgetDetails class="widget__details--desktop-wrapper" />
    <div class="price">
      <div class="price__action--arrow" @click="handleShowDetails">
        <i class="fa fa-chevron-up"></i>
      </div>
      <div class="price__wrapper">
        <p class="price__wrapper--product-name">Leiguverð</p>
        <h2 class="price__wrapper--product-price">106.190 kr. /mán.</h2>
      </div>

      <div class="btn__wrapper">
        <span class="btn__wrapper--label">Áfram</span>
        <i class="icon fa fa-chevron-right"></i>
      </div>
    </div>
    <div class="show__details" v-if="showDetails" style="top: 221px">
      <div class="circle" @click="handleShowDetails">
        <i class="fa fa-chevron-down"></i>
      </div>
      <div class="show__details--price">
        <div class="price">
          <div class="price__wrapper">
            <p class="price__wrapper--product-name">Leiguverð</p>
            <h2 class="price__wrapper--product-price">106.190 kr. /mán.</h2>
          </div>
          <div class="btn__wrapper">
            <span class="btn__wrapper--label">Áfram</span>
            <i class="icon fa fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <WidgetDetails />
    </div>
  </div>
</template>

<script>
import WidgetDetails from "./WidgetDetails.vue";
export default {
  name: "Widget",
  components: {
    WidgetDetails,
  },
  data() {
    return {
      showDetails: false,
      description: {
        product_title: "Hyundai",
        product_subtitle: "Tucson Comfort",
      },
    };
  },
  methods: {
    handleShowDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/main.scss";
.widget {
  width: 35%;
  height: 100%;
  padding-top: 32px;
  background: $white;
  position: fixed;
  right: 0;
  top: 88px;
  bottom: 0;

  .content {
    height: 100%;
    overflow-y: auto;
    padding-bottom: 220px;
    @include mobile {
      overflow: hidden;
      padding-bottom: 0;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .header {
    @include mobile {
      @apply flex items-center justify-between;
    }
    .widget__title {
      font-weight: bold;
      font-size: 16px;
      line-height: 120%;
      color: $dark-blue;
      text-transform: uppercase;
      margin-bottom: 4px;
      margin: auto 32px;
    }
    .widget__subtitle {
      font-weight: normal;
      font-size: 24px;
      line-height: 120%;
      color: $dark-blue;
      text-transform: uppercase;
      margin-bottom: 16px;
      margin: auto 32px;
      @include mobile {
        margin-right: 0;
      }
    }
    .widget__img {
      width: 68%;
      height: 35%;
      margin: auto;
      margin-top: 16px;
      @include mobile {
        height: auto;
        width: 179px;
      }
    }
  }

  .price {
    width: 100%;
    height: 123px;
    background: $light-blue;
    position: absolute;
    bottom: 88px;
    padding-left: 24px;
    @include mobile {
      bottom: 0;
      position: fixed;
      height: 80px;
    }

    @apply flex items-center
      justify-between pr-4;
    .price__wrapper {
      .price__wrapper--product-name {
        font-weight: normal;
        font-size: 16px;
        line-height: 120%;
        color: $gray3;
      }
      .price__wrapper--product-price {
        font-weight: bold;
        font-size: 26px;
        line-height: 120%;
        letter-spacing: -2px;
        color: $dark-blue;
      }
    }
    .price__action--arrow {
      top: -11px;
      background: $light-blue;
      @apply cursor-pointer absolute flex justify-center items-center opacity-0 w-6 h-6 rounded-3xl;

      @include mobile {
        @apply opacity-100;
      }
    }
    .btn__wrapper {
      color: $white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: $dark-blue;
      border-radius: 4px;
      padding: 8px 16px 8px 24px;
      cursor: pointer;
      .label {
        font-weight: bold;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0.1px;
        margin-right: 12px;
      }
      .icon {
        margin-left: 12px;
      }
    }
  }
  .show__details {
    background: $light-blue;
    box-shadow: 0px -8px 32px rgba(0, 42, 82, 0.08);
    top: 0;
    position: fixed !important;
    padding-top: 0;
    z-index: 3;
    .show__details--price {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .price {
      position: absolute;
      top: 0;
      height: 80px;
      display: flex;
      padding-left: 0;
      padding-right: 0;
    }
    .widget__details {
      display: flex;
      position: absolute;
      top: 108px;
      margin-left: 0;
      margin-right: 0;
    }

    @apply px-8 py-4 absolute inset-0;

    .circle {
      width: 26px;
      height: 26px;
      position: absolute;
      background: $dark-blue;
      border-radius: 26px;
      color: $white;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -12px;
      left: 30px;
      z-index: 1;
    }
  }
  @include mobile {
    width: 100%;
    position: inherit;
    padding-top: 0;
    height: 128px;

    .widget__details--desktop-wrapper {
      // display: none;
    }
  }
}
</style>
