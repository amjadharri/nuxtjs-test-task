<template>
  <div class="widget__details">
    <div class="widget__details--left">
      <div class="widget__details--type widget__details-box">
        <p class="widget__details--title">{{ widgetDetails.type }}</p>
        <p class="widget__details--value">
          {{ widgetDetails.type_value }}
        </p>
      </div>
      <div class="widget__details--color widget__details-box">
        <p class="widget__details--title">{{ widgetDetails.color }}</p>
        <p class="widget__details--value">
          {{ widgetDetails.color_value }}
        </p>
      </div>
      <div class="widget__details--accessories widget__details-box">
        <p class="widget__details--title">
          {{ widgetDetails.accessories }}
        </p>
        <p
          class="widget__details--value"
          v-for="(accesory, index) in widgetDetails.accessories_values"
          :key="index"
        >
          {{ accesory }}
        </p>
      </div>
    </div>
    <div class="widget__details--right">
      <div class="widget__details--rental-period widget__details-box">
        <p class="widget__details--title">
          {{ widgetDetails.rental_period }}
        </p>
        <p class="widget__details--value">
          {{ widgetDetails.rental_period_value }}
        </p>
      </div>
      <div class="widget__details--driving-period widget__details-box">
        <p class="widget__details--title">Akstur á ári</p>
        <p class="widget__details--value">18.000 km.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WidgetDetails",
  data() {
    return {
      widgetDetails: {
        product_title: "Hyundai",
        product_subtitle: "Tucson Comfort",
        type: "Gerd",
        type_value: "1.600cc Bensín Sjálfskipting - Framhjóladrif",
        color: "Litur",
        color_value: "Kongablár",
        accessories: "Aukabúnaður",
        accessories_values: {
          type1: "Toppbogar",
          type2: "Nelgd vetrardekk",
          type3: "Hjólafestingar",
        },
        rental_period: "Leigutími",
        rental_period_value: "12 mán.",
        driving_period: "Akstur á ári",
        driving_period_value: "18.000 km.",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/main.scss";
.widget__details {
  display: flex;
  justify-content: flex-start;
  margin: auto 32px;
  @include mobile {
    display: none;
  }
  .widget__details--left {
    padding-right: 20px;
    .widget__details--type {
      .widget__details--value {
        font-size: 11px;
        margin-bottom: 16px;
      }
    }
    .widget__details-box {
      margin-bottom: 24px;
    }
  }
  .widget__details--right {
    .widget__details-box {
      margin-bottom: 24px;
    }
  }
  .widget__details--title {
    font-weight: normal;
    font-size: 16px;
    line-height: 120%;
    color: $gray3;
  }
  .widget__details--value {
    font-weight: bold;
    font-size: 18px;
    line-height: 180%;
    color: $dark-blue;
  }
}
</style>
