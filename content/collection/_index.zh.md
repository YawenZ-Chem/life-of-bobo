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

.bobo-section-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  font-size: 4.6rem;
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

details.f6.fw7.input-reset {
  display: none !important;
}
</style>

<div class="bobo-menu-page">

<div class="bobo-menu-painting">
  <img
    src="/img/bobo-menu-painting.png"
    alt="Bobo 坐在餐桌前，身边摆满了他最喜欢的食物"
  />
</div>

<div class="bobo-menu-heading">
  <h1>Bobo 的菜单</h1>
  <p>一份关于 Bobo 口味偏好和猫咪饮食安全边界的小指南。</p>
</div>

<details class="bobo-menu-section loves">
<summary>
<span class="summary-left">
<span class="bobo-section-icon">♥</span>
<span class="section-label">BOBO 最爱</span>
</span>
</summary>

<div class="food-grid">

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/Salmon.png" alt="三文鱼">
</div>
<h3>三文鱼</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/tuna.png" alt="金枪鱼">
</div>
<h3>金枪鱼</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/squid.png" alt="鱿鱼">
</div>
<h3>鱿鱼</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/shrimp.png" alt="虾">
</div>
<h3>虾</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/chicken.png" alt="鸡肉">
</div>
<h3>鸡肉</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/pork.png" alt="猪肉">
</div>
<h3>猪肉</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/beef.png" alt="牛肉">
</div>
<h3>牛肉</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/milk.png" alt="牛奶">
</div>
<h3>牛奶</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/yogurt.png" alt="酸奶">
</div>
<h3>酸奶</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/cheese.png" alt="奶酪">
</div>
<h3>奶酪</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/butter.png" alt="黄油">
</div>
<h3>黄油</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/century-egg.png" alt="皮蛋">
</div>
<h3>皮蛋</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/durian.png" alt="榴莲">
</div>
<h3>榴莲</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/tofu.png" alt="豆腐">
</div>
<h3>豆腐</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/bread.png" alt="面包">
</div>
<h3>面包</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/cream-cake.png" alt="奶油蛋糕">
</div>
<h3>奶油蛋糕</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/egg-tart.png" alt="蛋挞">
</div>
<h3>蛋挞</h3>
</div>

</div>
</details>

<details class="bobo-menu-section refuses">
<summary>
<span class="summary-left">
<span class="bobo-section-icon">⊘</span>
<span class="section-label">BOBO 拒绝</span>
</span>
</summary>

<div class="food-grid">

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/crab.png" alt="螃蟹">
</div>
<h3>螃蟹</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/lobster.png" alt="龙虾">
</div>
<h3>龙虾</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/sea-urchin.png" alt="海胆">
</div>
<h3>海胆</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/mussels.png" alt="青口贝">
</div>
<h3>青口贝</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/oyster.png" alt="生蚝">
</div>
<h3>生蚝</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/broccoli.png" alt="西兰花">
</div>
<h3>西兰花</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/mushroom.png" alt="蘑菇">
</div>
<h3>蘑菇</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/tomato.png" alt="西红柿">
</div>
<h3>西红柿</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/watermelon.png" alt="西瓜">
</div>
<h3>西瓜</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/lettuce.png" alt="生菜">
</div>
<h3>生菜</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/carrot.png" alt="胡萝卜">
</div>
<h3>胡萝卜</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/cucumber.png" alt="黄瓜">
</div>
<h3>黄瓜</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/pumpkin.png" alt="南瓜">
</div>
<h3>南瓜</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/spinach.png" alt="菠菜">
</div>
<h3>菠菜</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/celery.png" alt="芹菜">
</div>
<h3>芹菜</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/banana.png" alt="香蕉">
</div>
<h3>香蕉</h3>
</div>

</div>
</details>

<details class="bobo-menu-section avoid">
<summary>
<span class="summary-left">
<span class="bobo-section-icon">⚠</span>
<span class="section-label">绝对不能给 BOBO</span>
</span>
</summary>

<div class="food-grid">

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/wine.png" alt="葡萄酒">
</div>
<h3>葡萄酒</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/beer.png" alt="啤酒">
</div>
<h3>啤酒</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/liquor.png" alt="烈酒">
</div>
<h3>烈酒</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/coffee.png" alt="咖啡">
</div>
<h3>咖啡</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/tea.png" alt="茶">
</div>
<h3>茶</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/matcha.png" alt="抹茶">
</div>
<h3>抹茶</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/onion.png" alt="洋葱">
</div>
<h3>洋葱</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/garlic.png" alt="大蒜">
</div>
<h3>大蒜</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/chives.png" alt="韭菜">
</div>
<h3>韭菜</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/scallions.png" alt="葱">
</div>
<h3>葱</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/leeks.png" alt="韭葱">
</div>
<h3>韭葱</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/shallots.png" alt="红葱头">
</div>
<h3>红葱头</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/chocolate.png" alt="巧克力">
</div>
<h3>巧克力</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/grapes.png" alt="葡萄">
</div>
<h3>葡萄</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/raisins.png" alt="葡萄干">
</div>
<h3>葡萄干</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/avocado.png" alt="牛油果">
</div>
<h3>牛油果</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/raw-dough.png" alt="生酵母面团">
</div>
<h3>生酵母面团</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/cooked-bones.png" alt="熟骨头">
</div>
<h3>熟骨头</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/spicy-pepper.png" alt="辣椒">
</div>
<h3>辣椒</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/black-pepper.png" alt="黑胡椒">
</div>
<h3>黑胡椒</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/salty-food.png" alt="高盐食物">
</div>
<h3>高盐食物</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/almonds.png" alt="杏仁">
</div>
<h3>杏仁</h3>
</div>

<div class="food-card">
<div class="food-image-box">
<img src="/img/menu/xylitol-candy.png" alt="木糖醇糖果">
</div>
<h3>木糖醇糖果</h3>
</div>

</div>
</details>

<p class="bobo-menu-note">
这里记录的只是我们对 Bobo 日常口味的观察，并不代表他的正式食谱或喂养建议。有些让他感兴趣的食物，对猫咪来说依然可能并不安全。
</p>

</div>