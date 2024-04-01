<script setup lang="ts">
import Card from "./Card.vue";
let base = [
  {
    background: "white",
    color: ["white", "black"],
    contrast: ["AAA", "#666666", "#FFFFFF"],
  },
  {
    background: "black",
    color: ["black", "white"],
    contrast: ["AAA", "#000000", "#FFFFFF"],
  },
];
let neutral = [
  {
    background: "white",
    color: ["50", "black"],
    contrast: ["AAA", "#666666", "#FFFFFF"],
  },
  {
    background: "#f3f4f6",
    color: ["100", "black"],
    contrast: ["AAA", "#666666", "#FFFFFF"],
  },
  {
    background: "#e5e7eb",
    color: ["200", "black"],
    contrast: ["AAA", "#666666", "#FFFFFF"],
  },
  {
    background: "#d0d5dc",
    color: ["300", "black"],
    contrast: ["AAA", "#666666", "#FFFFFF"],
  },
  {
    background: "#9ca3b0",
    color: ["400", "white"],
    contrast: ["55.0", "#666666", "#FFFFFF"],
  },
  {
    background: "#6b7280",
    color: ["500-base", "white"],
    contrast: ["AAA", "#c4c7cc", "#000000"],
  },
  {
    background: "#4b5563",
    color: ["600", "white"],
    contrast: ["AAA", "#c4c7cc", "#000000"],
  },
  {
    background: "#384252",
    color: ["700", "white"],
    contrast: ["AAA", "#c4c7cc", "#000000"],
  },
  {
    background: "#1f2937",
    color: ["800", "white"],
    contrast: ["AAA", "#c4c7cc", "#000000"],
  },
  {
    background: "#111827",
    color: ["900", "white"],
    contrast: ["AAA", "#c4c7cc", "#000000"],
  },
];
let primary = [
  {
    background: "white",
    color: ["50", "black"],
    contrast: ["AAA", "#666666", "#FFFFFF"],
  },
  {
    background: "#f3f4f6",
    color: ["100", "black"],
    contrast: ["AAA", "#666666", "#FFFFFF"],
  },
  {
    background: "#d5f1f1",
    color: ["200", "black"],
    contrast: ["AAA", "#666666", "#FFFFFF"],
  },
  {
    background: "#b7e6e5",
    color: ["300", "black"],
    contrast: ["AAA", "#666666", "#FFFFFF"],
  },
  {
    background: "#5fc8c7",
    color: ["400", "black"],
    contrast: ["AA", "#666666", "#FFFFFF"],
  },
  {
    background: "#00a8a5",
    color: ["500-base", "white"],
    contrast: ["AA", "#666666", "#FFFFFF"],
  },
  {
    background: "#008f8c",
    color: ["600", "white"],
    contrast: ["AA", "#c4c7cc", "#000000"],
  },
  {
    background: "#00706e",
    color: ["700", "white"],
    contrast: ["AAA", "#c4c7cc", "#000000"],
  },
  {
    background: "#005250",
    color: ["800", "white"],
    contrast: ["AAA", "#c4c7cc", "#000000"],
  },
  {
    background: "#003837",
    color: ["900", "white"],
    contrast: ["AAA", "#c4c7cc", "#000000"],
  },
];
let error = [
  {
    background: "white",
    color: ["50", "black"],
    contrast: ["AAA", "#666666", "#FFFFFF"],
  },
  {
    background: "#f3f4f6",
    color: ["100", "black"],
    contrast: ["AAA", "#666666", "#FFFFFF"],
  },
  {
    background: "#fce3e3",
    color: ["200", "black"],
    contrast: ["AAA", "#666666", "#FFFFFF"],
  },
  {
    background: "#fbcbcb",
    color: ["300", "black"],
    contrast: ["AAA", "#666666", "#FFFFFF"],
  },
  {
    background: "#f58a8a",
    color: ["400", "black"],
    contrast: ["55.0", "#666666", "#FFFFFF"],
  },
  {
    background: "#ef4343",
    color: ["500-base", "white"],
    contrast: ["AA", "#c4c7cc", "#000000"],
  },
  {
    background: "#c33737",
    color: ["600", "white"],
    contrast: ["AAA", "#c4c7cc", "#000000"],
  },
  {
    background: "#a32e2e",
    color: ["700", "white"],
    contrast: ["AAA", "#c4c7cc", "#000000"],
  },
  {
    background: "#772222",
    color: ["800", "white"],
    contrast: ["AAA", "#c4c7cc", "#000000"],
  },
  {
    background: "#4c1515",
    color: ["900", "white"],
    contrast: ["AAA", "#c4c7cc", "#000000"],
  },
];
</script>
<template>
  <div>
    <h1>Color Scheme</h1>
    <div class="ColorScheme">
      <div class="ColorScheme__container">
        <div class="title__card">
          <h4>base</h4>
          <span>2 colors</span>
        </div>
        <Card
          v-for="card in base"
          :background="card.background"
          :color="card.color"
          :contrast="card.contrast"
        />
      </div>
      <div class="ColorScheme__container">
        <div class="title__card">
          <h4>💻 web/neutral</h4>
          <span>10 colors</span>
        </div>
        <Card
          v-for="card in neutral"
          :background="card.background"
          :color="card.color"
          :contrast="card.contrast"
        />
      </div>
      <div class="ColorScheme__container">
        <div class="title__card">
          <h4>💻 web/primary</h4>
          <span>10 colors</span>
        </div>
        <Card
          v-for="card in primary"
          :background="card.background"
          :color="card.color"
          :contrast="card.contrast"
        />
      </div>
      <div class="ColorScheme__container">
        <div class="title__card">
          <h4>💻 web/error</h4>
          <span>10 colors</span>
        </div>
        <Card
          v-for="card in error"
          :background="card.background"
          :color="card.color"
          :contrast="card.contrast"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.ColorScheme__container {
  display: grid;
  grid-template-rows: 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 0px;
  grid-template-columns: repeat(11, 1fr);
  margin-bottom: 65px;
  .title__card {
    width: 100%;
    height: 150px;

    h4 {
      font-size: 20px;
    }
    span {
      font-size: 16px;
      color: gray;
    }
  }
}
</style>
