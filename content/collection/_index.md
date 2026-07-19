---
title: ""
subtitle: ""
layout: single
show_author_byline: false
show_post_date: false
show_post_thumbnail: false
---

<style>
:root {
  --bobo-poppy: #d95d3f;
  --bobo-poppy-dark: #b9472f;
  --bobo-text: #2f2723;
  --bobo-cream: #fbfaf2;
  --bobo-soft-poppy: #f8e8df;
  --bobo-soft-gold: #f8efdc;
  --bobo-border: #e1c7b8;
}

.bobo-menu-page {
  width: min(1400px, calc(100vw - 3rem));
  max-width: none;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 2rem 1rem 5rem;
}

.food-grid {
  display: grid;
  grid-template-columns: repeat(5, 180px);
  justify-content: center;
  column-gap: 2rem;
  row-gap: 2rem;
  padding: 2rem;
  border-top: 1px solid #e4dccb;
  background: #fffdf8;
}

.food-card {
  width: 180px;
  min-width: 0;
  text-align: center;
}

.food-image-box {
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.food-card img {
  display: block;
  width: 180px;
  height: 180px;
  object-fit: contain;
}

.food-card h3 {
  margin: 0.65rem 0 0;
  font-size: 0.95rem;
  text-align: center;
}

.bobo-menu-painting {
  width: min(90%, 680px);
  margin: -10rem auto 1.5rem;
}

.bobo-menu-painting img {
  display: block;
  width: 100%;
  height: auto;
}

.bobo-menu-heading {
  text-align: center;
  margin-bottom: 2.5rem;
}

.bobo-menu-heading h1 {
  color: #df5c3b;
  font-size: 4rem;
  margin: 0 0 0.5rem;
}

.bobo-menu-heading p {
  color: #2b160f;
  font-size: 1.15rem;
}

.bobo-menu-section {
  border: 1px solid #d8cdb3;
  border-radius: 10px;
  margin-bottom: 1rem;
  overflow: hidden;
  background: #fffdf8;
}

.bobo-menu-section summary {
  list-style: none;
  cursor: pointer;
  padding: 1.2rem 2rem;
  min-height: 92px;
  font-size: 1.6rem;
  letter-spacing: 0.08em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary-left {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  height: 100%;
}

.section-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  font-size: 4.6 rem;
  line-height: 1;
  flex-shrink: 0;
}

.section-label {
  display: inline-block;
}

.bobo-menu-section summary::-webkit-details-marker {
  display: none;
}

.bobo-menu-section summary::after {
  content: "";
  width: 11px;
  height: 11px;
  margin-left: auto;
  border-right: 3px solid currentColor;
  border-bottom: 3px solid currentColor;
  transform: rotate(45deg);
  transform-origin: center;
  flex-shrink: 0;
  position: relative;
  top: -3px;
  transition: transform 0.2s ease, top 0.2s ease;
}

.bobo-menu-section[open] summary::after {
  transform: rotate(225deg);
  top: 3px;
}

.bobo-menu-section.loves summary {
  background: #f4f3e7;
  color: #68703f;
}

.bobo-menu-section.refuses summary {
  background: #fbf3e4;
  color: #a67b34;
}

.bobo-menu-section.avoid summary {
  background: #faece7;
  color: #9b4e3e;
}

.food-grid {
  display: grid;
  grid-template-columns: repeat(6, 180px);
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  border-top: 1px solid #e4dccb;
}

.food-card {
  width: 180px;
  text-align: center;
}

.food-image-box {
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.food-card img {
  width: 160px;
  height: 160px;
  object-fit: contain;
  display: block;
}

.food-card h3 {
  margin: 0.7rem 0 0;
  font-size: 1rem;
  font-weight: 400;
  color: #444;
}

.bobo-menu-note {
  text-align: center;
  margin-top: 2rem;
  color: #666;
  font-size: 0.9rem;
}

@media screen and (max-width: 900px) {
  .food-grid {
    grid-template-columns: repeat(2, 180px);
  }

  .bobo-menu-heading h1 {
    font-size: 3rem;
  }
}

@media screen and (max-width: 500px) {
  .food-grid {
    grid-template-columns: 180px;
    justify-content: center;
  }
}

/* Hide Hugo Apéro's automatic post details */
details.f6.fw7.input-reset {
  display: none !important;
}
</style>

<div class="bobo-menu-page">

<div class="bobo-menu-painting">
  <img
    src="/img/bobo-menu-painting.png"
    alt="Bobo sitting at a table surrounded by his favorite foods"
  />
</div>

  <div class="bobo-menu-heading">
    <h1>Bobo’s Menu</h1>
    <p>A little guide to Bobo’s tastes and cat-safe boundaries.</p>
  </div>

<details class="bobo-menu-section loves">
<summary>
<span class="summary-left">
<span class="bobo-section-icon">♥</span>
<span class="section-label">BOBO LOVES</span>
</span>
</summary>

<div class="food-grid">
<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/Salmon.png" alt="Salmon">
</div>
<h3>Salmon</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/tuna.png" alt="Tuna">
</div>
<h3>Tuna</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/squid.png" alt="Squid">
</div>
<h3>Squid</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/shrimp.png" alt="Shrimp">
</div>
<h3>Shrimp</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/chicken.png" alt="Chicken">
</div>
<h3>Chicken</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/pork.png" alt="Pork">
</div>
<h3>Pork</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/beef.png" alt="Beef">
</div>
<h3>Beef</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/milk.png" alt="Milk">
</div>
<h3>Milk</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/yogurt.png" alt="Yogurt">
</div>
<h3>Yogurt</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/cheese.png" alt="Cheese">
</div>
<h3>Cheese</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/butter.png" alt="Butter">
</div>
<h3>Butter</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/century-egg.png" alt="Century egg">
</div>
<h3>Century Egg</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/durian.png" alt="Durian">
</div>
<h3>Durian</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/tofu.png" alt="Tofu">
</div>
<h3>Tofu</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/bread.png" alt="Bread">
</div>
<h3>Bread</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/cream-cake.png" alt="Cream cake">
</div>
<h3>Cream Cake</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/egg-tart.png" alt="Egg-tart">
</div>
<h3>Egg-tart</h3>
</div>

</div>
</details>

<details class="bobo-menu-section refuses">
<summary>
<span class="summary-left">
<span class="bobo-section-icon">⊘</span>
<span class="section-label">BOBO REFUSES</span>
</span>
</summary>

<div class="food-grid">

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/crab.png" alt="Crab">
</div>
<h3>Crab</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/lobster.png" alt="Lobster">
</div>
<h3>Lobster</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/sea-urchin.png" alt="Sea Urchin">
</div>
<h3>Sea Urchin</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/mussels.png" alt="Mussels">
</div>
<h3>Mussels</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/oyster.png" alt="Oyster">
</div>
<h3>Oyster</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/broccoli.png" alt="Broccoli">
</div>
<h3>Broccoli</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/mushroom.png" alt="Mushroom">
</div>
<h3>Mushroom</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/tomato.png" alt="Tomato">
</div>
<h3>Tomato</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/watermelon.png" alt="Watermelon">
</div>
<h3>Watermelon</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/lettuce.png" alt="Lettuce">
</div>
<h3>Lettuce</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/carrot.png" alt="Carrot">
</div>
<h3>Carrot</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/cucumber.png" alt="Cucumber">
</div>
<h3>Cucumber</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/pumpkin.png" alt="Pumpkin">
</div>
<h3>Pumpkin</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/spinach.png" alt="Spinach">
</div>
<h3>Spinach</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/celery.png" alt="Celery">
</div>
<h3>Celery</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/banana.png" alt="Banana">
</div>
<h3>Banana</h3>
</div>

</details>

<details class="bobo-menu-section avoid">
<summary>
<span class="summary-left">
<span class="bobo-section-icon">⚠</span>
<span class="section-label">KEEP AWAY FROM BOBO</span>
</span>
</summary>

<div class="food-grid">

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/wine.png" alt="Wine">
</div>
<h3>Wine</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/beer.png" alt="Beer">
</div>
<h3>Beer</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/liquor.png" alt="Liquor">
</div>
<h3>Liquor</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/coffee.png" alt="Coffee">
</div>
<h3>Coffee</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/tea.png" alt="Tea">
</div>
<h3>Tea</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/matcha.png" alt="Matcha">
</div>
<h3>Matcha</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/onion.png" alt="Onion">
</div>
<h3>Onion</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/garlic.png" alt="Garlic">
</div>
<h3>Garlic</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/chives.png" alt="Chives">
</div>
<h3>Chives</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/scallions.png" alt="Scallions">
</div>
<h3>Scallions</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/leeks.png" alt="Leeks">
</div>
<h3>Leeks</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/shallots.png" alt="Shallots">
</div>
<h3>Shallots</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/chocolate.png" alt="Chocolate">
</div>
<h3>Chocolate</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/grapes.png" alt="Grapes">
</div>
<h3>Grapes</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/raisins.png" alt="Raisins">
</div>
<h3>Raisins</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/avocado.png" alt="Avocado">
</div>
<h3>Avocado</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/raw-dough.png" alt="Raw yeast dough">
</div>
<h3>Raw Yeast Dough</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/cooked-bones.png" alt="Cooked bones">
</div>
<h3>Cooked Bones</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/spicy-pepper.png" alt="Spicy pepper">
</div>
<h3>Spicy Pepper</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/black-pepper.png" alt="Black pepper">
</div>
<h3>Black Pepper</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/salty-food.png" alt="Salty food">
</div>
<h3>Salty Food</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/almonds.png" alt="Almonds">
</div>
<h3>Almonds</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/xylitol-candy.png" alt="Xylitol candy">
</div>
<h3>Xylitol Candy</h3>
</div>

</div>
</details>

  <p class="bobo-menu-note">
    Bobo’s likes and dislikes are observations only and do not represent his diet or feeding recommendations. Some foods he is curious about may still be unsafe for cats.
  </p>

</div>