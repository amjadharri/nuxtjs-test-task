<template>
  <div class="wrapper">
    <div class="tags">
      <div
        class="tags__tag"
        :style="getTransform"
        v-for="(tag, index) in tags"
        :key="index"
        ref="tag"
      >
        <span class="tag__label">{{ tag }}</span>
      </div>
      <i class="icon fa fa-chevron-right fa-1x" @click="handleTransform"></i>
    </div>
    <h2 class="type__title">Gerð</h2>
    <div
      class="product__details"
      v-for="(table, tableIndex) in tableData"
      :key="tableIndex"
    >
      <div class="product__details--type">
        <h2 class="type capitalize">{{ table.title }}</h2>
        <h2 class="more">Nánar</h2>
      </div>
      <div class="table__details">
        <div
          class="table__details--row"
          v-for="(tableRow, rowsIndex) in table.rows"
          :key="rowsIndex"
          :class="{
            'click-active':
              tableIndex === activetableIndex && rowsIndex === activeRowIndex,
          }"
        >
          <div
            class="circle__wrapper"
            v-if="!clicked"
            @click="handleActiveRow(rowsIndex, tableIndex)"
          >
            <div class="circle"></div>
          </div>
          <div class="table__row">
            <div
              v-for="({ key, value }, rowIndex) in tableRow.row"
              :key="rowIndex"
            >
              <div class="table__data">
                <span class="table__data--key">{{ key }}</span>
                <span class="table__data--value">{{ value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BodyWrapper",
  data() {
    return {
      clicked: false,
      tags: ["Gerð", "Aukabúnaður", "Litur", "Innrétting", "Leigutími"],
      activeRowIndex: null,
      activetableIndex: null,
      transformWidth: 0,
      tagIndex: 0,
      tableData: [
        {
          id: 1,
          title: "classic",
          rows: [
            {
              row: [
                { key: "Vélarstærð", value: "1600cc Bensín" },
                { key: "Skipting", value: "Beinskiptur" },
                { key: "Drif", value: "Framhjóladrif" },
                { key: "Co2 frá", value: "95 g/km" },
                { key: "Eyðsla frá ", value: "3,7 l/100km" },
                { key: "Afl og tog", value: "100hö/160nm" },
              ],
            },
            {
              row: [
                { key: "Vélarstærð", value: "1600cc Bensín" },
                { key: "Skipting", value: "Beinskiptur" },
                { key: "Drif", value: "Framhjóladrif" },
                { key: "Co2 frá", value: "95 g/km" },
                { key: "Eyðsla frá ", value: "3,7 l/100km" },
                { key: "Afl og tog", value: "100hö/160nm" },
              ],
            },
            {
              row: [
                { key: "Vélarstærð", value: "1600cc Bensín" },
                { key: "Skipting", value: "Beinskiptur" },
                { key: "Drif", value: "Framhjóladrif" },
                { key: "Co2 frá", value: "95 g/km" },
                { key: "Eyðsla frá ", value: "3,7 l/100km" },
                { key: "Afl og tog", value: "100hö/160nm" },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Premium",
          rows: [
            {
              row: [
                { key: "Vélarstærð", value: "1600cc Bensín" },
                { key: "Skipting", value: "Beinskiptur" },
                { key: "Drif", value: "Framhjóladrif" },
                { key: "Co2 frá", value: "95 g/km" },
                { key: "Eyðsla frá ", value: "3,7 l/100km" },
                { key: "Afl og tog", value: "100hö/160nm" },
              ],
            },
            {
              row: [
                { key: "Vélarstærð", value: "1600cc Bensín" },
                { key: "Skipting", value: "Beinskiptur" },
                { key: "Drif", value: "Framhjóladrif" },
                { key: "Co2 frá", value: "95 g/km" },
                { key: "Eyðsla frá ", value: "3,7 l/100km" },
                { key: "Afl og tog", value: "100hö/160nm" },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    getTransform() {
      return `transform: translateX(${this.transformWidth}px);`;
    },
  },
  methods: {
    handleActiveRow(rowIndex, tableIndex) {
      this.activeRowIndex = rowIndex;
      this.activetableIndex = tableIndex;
    },
    handleTransform() {
      if (this.tagIndex < this.tags.length - 2) {
        this.transformWidth =
          this.transformWidth - this.$refs.tag[0].clientWidth;
        this.tagIndex = this.tagIndex + 1;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/main.scss";
.wrapper {
  width: 65%;
  height: 100%;
  background-color: $gray2;
  padding: 0 34px;
  .tags {
    overflow-x: hidden;
    padding: 16px 14px;
    @apply flex  items-center mt-3 relative;

    .tags__tag {
      position: relative;
      margin-right: 56px;
      &:first-child {
        background: $light-blue;

        @apply py-0 px-4 rounded;
        .tag__label {
          color: $dark-blue;
          font-weight: bold;
        }
      }

      &::after {
        content: "";
        background: $light-green;
        top: 10px;
        right: -28px;
        @apply w-1 h-1 rounded absolute;
      }
      margin-right: 44px;
      .tag__label {
        font-size: 14px;
        color: $gray4;
        @apply capitalize;
      }
    }
    .icon {
      cursor: pointer;
      color: $dark-blue;
      @include tablet {
        @apply sticky right-0;
      }
      @include mobile {
        @apply sticky right-0;
      }
    }
    @include mobile {
      background: $gray5;
      padding-left: 45%;
      position: sticky;
      top: 88px;
      z-index: 1;
      margin-top: 0;
    }
  }
  .type__title {
    font-weight: bold;
    font-size: 20px;
    line-height: 120%;
    color: $dark-blue;
    text-transform: uppercase;
    margin-bottom: 24px;
    margin-top: 44px;
    padding: 0 14px;
  }
  .product__details {
    padding: 20px 0 0px 16px;
    background: $white;
    @apply mr-8 mt-11 rounded-lg;

    .product__details--type {
      font-size: 20px;
      line-height: 120%;
      color: $dark-blue;
      border-bottom: 1px solid $light-blue;
      @apply flex justify-between items-center pr-4 font-bold pb-5;
    }

    .table__details {
      .table__details--row {
        border-bottom: 1px solid $light-blue;
        @include mobile {
          padding-right: 0;
        }

        &.click-active {
          background: $dark-blue;

          .table__row {
            .table__data {
              .table__data--key,
              .table__data--value {
                color: $white;
              }
            }
          }

          .circle__wrapper {
            .circle {
              &::before {
                content: "";
                background: $dark-blue;
                border-radius: 10px;
                inset: 3px;
                @apply absolute;
              }
            }
          }
        }
        @apply flex  py-4 items-center px-8 pl-0;
        .circle__wrapper {
          padding: 8px;
          border-radius: 20px;
          margin-left: -8px;
          background: $white;
          .circle {
            border: 2px solid $dark-blue;
            @apply w-5 h-5 rounded-3xl cursor-pointer relative;
          }
        }
        .table__row {
          @apply flex flex-wrap justify-between ml-4 w-full;
          .table__data {
            @apply flex flex-col my-1;

            .table__data--key {
              font-size: 14px;
              font-weight: bold;
              color: $dark-blue;
            }
            .table__data--value {
              font-size: 14px;
              font-weight: normal;
              color: $dark-blue;
            }
          }

          @include mobile {
            @apply justify-start;

            .table__data {
              @apply mr-4;
            }
          }
        }
      }
    }
  }
  @include mobile {
    width: 100%;
    background: transparent;
    height: max-content;
    padding: 0;
    .product__details {
      margin: 0 0px 20px 0;
      padding: 20px 16px 0px 16px;
      .product__details--type {
        padding: 20px 40px 20px 16px;
      }
    }
    .type__title {
      display: none;
    }
  }
}
</style>
