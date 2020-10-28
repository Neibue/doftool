<template>
  <div class="equipment">
    <div class="equipment__item" v-for="equipment in equipments" :key="equipment._id.$oid">
      
      <div class="item__header">
        <!-- <img :src="set.imageUrl"> -->
        <span class="item__name">{{ equipment.name }}</span>
        <span class="item__level"> Lvl {{ equipment.level }}</span>
      </div>
      
      <div class="item__recipe">
        <!-- <div class="recipe__header">Recipe :</div> -->
        <div class="recipe__item" v-for="resource in equipment.recipe" :key="resource.name">
          <!-- <img :src="item.imageUrl" > -->
          <span class="recipe__item__name">{{ resource.name }}</span>
          <span class="recipe__item__quantity">x{{ resource.amount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Equipments',
  data() {
    return {
      equipments: [
        {
          _id:{
            $oid: "5f7c67e26082a92a48238ce4"
          },
          name: "Count Harebourg's Hat",
          description: "Count Harebourg was forced to become a recluse after the big freeze, but even back then, no living soul had ever seen his face. What is he hiding behind this hat, and what transformations has that face undergone after all these years?",
          conditions: [],
          imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/200/16362.png",
          encyclopediaUrl: "/en/mmorpg/encyclopedia/equipment/14076-count-harebourg\r",
          level: 200,
          type: "Hat",
          set: "/en/mmorpg/encyclopedia/sets/270-count-harebourg-set",
          stats: ["451 to 500 Vitality", "71 to 100 Strength", "41 to 60 Wisdom", "1 Range", "21 to 30 Prospecting", "16 to 20 Neutral Damage", "16 to 20 Earth Damage", "-4 to -5% Neutral Resistance", "-4 to -5% Earth Resistance", "-4 to -5% Fire Resistance", "-4 to -5% Water Resistance", "-4 to -5% Air Resistance", "6 to 8 AP Reduction", "16 to 20 Lock"],
          recipe: [{
            name: "Sparkling Pebble",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/15289.w48h48.png",
            amount: 3
          }, {
            name: "Minotot Ethmoid",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/47694.w48h48.png",
            amount: 12
          }, {
            name: "Harrogant Pants",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/164010.w48h48.png",
            amount: 5
          }, {
            name: "Sylargh's Wool",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/57660.w48h48.png",
            amount: 8
          }, {
            name: "Sinistrofu Wing",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/104745.w48h48.png",
            amount: 30
          }, {
            name: "Nocturnowl Spike",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/47823.w48h48.png",
            amount: 4
          }, {
            name: "Count Harebourg's Bandages",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/15831.w48h48.png",
            amount: 1
          }, {
            name: "Glass Eye",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/109604.w48h48.png",
            amount: 1
          }]
        },
        {
          _id:{
            $oid: "5f7c67e26082a92a48238ce4"
          },
          name: "Count Harebourg's Hat",
          description: "Count Harebourg was forced to become a recluse after the big freeze, but even back then, no living soul had ever seen his face. What is he hiding behind this hat, and what transformations has that face undergone after all these years?",
          conditions: [],
          imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/200/16362.png",
          encyclopediaUrl: "/en/mmorpg/encyclopedia/equipment/14076-count-harebourg\r",
          level: 200,
          type: "Hat",
          set: "/en/mmorpg/encyclopedia/sets/270-count-harebourg-set",
          stats: ["451 to 500 Vitality", "71 to 100 Strength", "41 to 60 Wisdom", "1 Range", "21 to 30 Prospecting", "16 to 20 Neutral Damage", "16 to 20 Earth Damage", "-4 to -5% Neutral Resistance", "-4 to -5% Earth Resistance", "-4 to -5% Fire Resistance", "-4 to -5% Water Resistance", "-4 to -5% Air Resistance", "6 to 8 AP Reduction", "16 to 20 Lock"],
          recipe: [{
            name: "Sparkling Pebble",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/15289.w48h48.png",
            amount: 3
          }, {
            name: "Minotot Ethmoid",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/47694.w48h48.png",
            amount: 12
          }, {
            name: "Harrogant Pants",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/164010.w48h48.png",
            amount: 5
          }, {
            name: "Sylargh's Wool",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/57660.w48h48.png",
            amount: 8
          }, {
            name: "Sinistrofu Wing",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/104745.w48h48.png",
            amount: 30
          }, {
            name: "Nocturnowl Spike",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/47823.w48h48.png",
            amount: 4
          }, {
            name: "Count Harebourg's Bandages",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/15831.w48h48.png",
            amount: 1
          }, {
            name: "Glass Eye",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/109604.w48h48.png",
            amount: 1
          }]
        },
        {
          _id:{
            $oid: "5f7c67e26082a92a48238ce4"
          },
          name: "Count Harebourg's Hat",
          description: "Count Harebourg was forced to become a recluse after the big freeze, but even back then, no living soul had ever seen his face. What is he hiding behind this hat, and what transformations has that face undergone after all these years?",
          conditions: [],
          imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/200/16362.png",
          encyclopediaUrl: "/en/mmorpg/encyclopedia/equipment/14076-count-harebourg\r",
          level: 200,
          type: "Hat",
          set: "/en/mmorpg/encyclopedia/sets/270-count-harebourg-set",
          stats: ["451 to 500 Vitality", "71 to 100 Strength", "41 to 60 Wisdom", "1 Range", "21 to 30 Prospecting", "16 to 20 Neutral Damage", "16 to 20 Earth Damage", "-4 to -5% Neutral Resistance", "-4 to -5% Earth Resistance", "-4 to -5% Fire Resistance", "-4 to -5% Water Resistance", "-4 to -5% Air Resistance", "6 to 8 AP Reduction", "16 to 20 Lock"],
          recipe: [{
            name: "Sparkling Pebble",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/15289.w48h48.png",
            amount: 3
          }, {
            name: "Minotot Ethmoid",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/47694.w48h48.png",
            amount: 12
          }, {
            name: "Harrogant Pants",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/164010.w48h48.png",
            amount: 5
          }, {
            name: "Sylargh's Wool",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/57660.w48h48.png",
            amount: 8
          }, {
            name: "Sinistrofu Wing",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/104745.w48h48.png",
            amount: 30
          }, {
            name: "Nocturnowl Spike",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/47823.w48h48.png",
            amount: 4
          }, {
            name: "Count Harebourg's Bandages",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/15831.w48h48.png",
            amount: 1
          }, {
            name: "Glass Eye",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/109604.w48h48.png",
            amount: 1
          }]
        },
        {
          _id:{
            $oid: "5f7c67e26082a92a48238ce4"
          },
          name: "Count Harebourg's Hat",
          description: "Count Harebourg was forced to become a recluse after the big freeze, but even back then, no living soul had ever seen his face. What is he hiding behind this hat, and what transformations has that face undergone after all these years?",
          conditions: [],
          imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/200/16362.png",
          encyclopediaUrl: "/en/mmorpg/encyclopedia/equipment/14076-count-harebourg\r",
          level: 200,
          type: "Hat",
          set: "/en/mmorpg/encyclopedia/sets/270-count-harebourg-set",
          stats: ["451 to 500 Vitality", "71 to 100 Strength", "41 to 60 Wisdom", "1 Range", "21 to 30 Prospecting", "16 to 20 Neutral Damage", "16 to 20 Earth Damage", "-4 to -5% Neutral Resistance", "-4 to -5% Earth Resistance", "-4 to -5% Fire Resistance", "-4 to -5% Water Resistance", "-4 to -5% Air Resistance", "6 to 8 AP Reduction", "16 to 20 Lock"],
          recipe: [{
            name: "Sparkling Pebble",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/15289.w48h48.png",
            amount: 3
          }, {
            name: "Minotot Ethmoid",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/47694.w48h48.png",
            amount: 12
          }, {
            name: "Harrogant Pants",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/164010.w48h48.png",
            amount: 5
          }, {
            name: "Sylargh's Wool",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/57660.w48h48.png",
            amount: 8
          }, {
            name: "Sinistrofu Wing",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/104745.w48h48.png",
            amount: 30
          }, {
            name: "Nocturnowl Spike",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/47823.w48h48.png",
            amount: 4
          }, {
            name: "Count Harebourg's Bandages",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/15831.w48h48.png",
            amount: 1
          }, {
            name: "Glass Eye",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/109604.w48h48.png",
            amount: 1
          }]
        },
        {
          _id:{
            $oid: "5f7c67e26082a92a48238ce4"
          },
          name: "Count Harebourg's Hat",
          description: "Count Harebourg was forced to become a recluse after the big freeze, but even back then, no living soul had ever seen his face. What is he hiding behind this hat, and what transformations has that face undergone after all these years?",
          conditions: [],
          imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/200/16362.png",
          encyclopediaUrl: "/en/mmorpg/encyclopedia/equipment/14076-count-harebourg\r",
          level: 200,
          type: "Hat",
          set: "/en/mmorpg/encyclopedia/sets/270-count-harebourg-set",
          stats: ["451 to 500 Vitality", "71 to 100 Strength", "41 to 60 Wisdom", "1 Range", "21 to 30 Prospecting", "16 to 20 Neutral Damage", "16 to 20 Earth Damage", "-4 to -5% Neutral Resistance", "-4 to -5% Earth Resistance", "-4 to -5% Fire Resistance", "-4 to -5% Water Resistance", "-4 to -5% Air Resistance", "6 to 8 AP Reduction", "16 to 20 Lock"],
          recipe: [{
            name: "Sparkling Pebble",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/15289.w48h48.png",
            amount: 3
          }, {
            name: "Minotot Ethmoid",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/47694.w48h48.png",
            amount: 12
          }, {
            name: "Harrogant Pants",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/164010.w48h48.png",
            amount: 5
          }, {
            name: "Sylargh's Wool",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/57660.w48h48.png",
            amount: 8
          }, {
            name: "Sinistrofu Wing",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/104745.w48h48.png",
            amount: 30
          }, {
            name: "Nocturnowl Spike",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/47823.w48h48.png",
            amount: 4
          }, {
            name: "Count Harebourg's Bandages",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/15831.w48h48.png",
            amount: 1
          }, {
            name: "Glass Eye",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/109604.w48h48.png",
            amount: 1
          }]
        },
        {
          _id:{
            $oid: "5f7c67e26082a92a48238ce4"
          },
          name: "Count Harebourg's Hat",
          description: "Count Harebourg was forced to become a recluse after the big freeze, but even back then, no living soul had ever seen his face. What is he hiding behind this hat, and what transformations has that face undergone after all these years?",
          conditions: [],
          imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/200/16362.png",
          encyclopediaUrl: "/en/mmorpg/encyclopedia/equipment/14076-count-harebourg\r",
          level: 200,
          type: "Hat",
          set: "/en/mmorpg/encyclopedia/sets/270-count-harebourg-set",
          stats: ["451 to 500 Vitality", "71 to 100 Strength", "41 to 60 Wisdom", "1 Range", "21 to 30 Prospecting", "16 to 20 Neutral Damage", "16 to 20 Earth Damage", "-4 to -5% Neutral Resistance", "-4 to -5% Earth Resistance", "-4 to -5% Fire Resistance", "-4 to -5% Water Resistance", "-4 to -5% Air Resistance", "6 to 8 AP Reduction", "16 to 20 Lock"],
          recipe: [{
            name: "Sparkling Pebble",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/15289.w48h48.png",
            amount: 3
          }, {
            name: "Minotot Ethmoid",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/47694.w48h48.png",
            amount: 12
          }, {
            name: "Harrogant Pants",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/164010.w48h48.png",
            amount: 5
          }, {
            name: "Sylargh's Wool",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/57660.w48h48.png",
            amount: 8
          }, {
            name: "Sinistrofu Wing",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/104745.w48h48.png",
            amount: 30
          }, {
            name: "Nocturnowl Spike",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/47823.w48h48.png",
            amount: 4
          }, {
            name: "Count Harebourg's Bandages",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/15831.w48h48.png",
            amount: 1
          }, {
            name: "Glass Eye",
            imageUrl: "https://static.ankama.com/dofus/ng/img/../../../dofus/www/game/items/52/109604.w48h48.png",
            amount: 1
          }]
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.equipment__item {
  margin: 10px 0;
}

.item__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: .8rem 2rem;
  background-color: #CCC;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #AAA;
}

.item__name{
  font-weight: bold;
  font-size: 1.2rem;
}

.item__level {
  font-size: .8rem;
  font-style: italic;

}

.item__recipe {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px 10px;
  padding: 5px 10px;
  background-color: #EAEAEA;
  border-radius: 0 0 10px 10px;
}

/* .recipe__header{
  text-align: left;
  text-decoration: underline;
  grid-column: 1 / span 2;
} */

.recipe__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: .8rem;
  text-align: left;
}

.recipe__item__name {
  font-weight: bold;
}

.recipe__item__quantity {
  font-size: 1rem;
  font-style: italic;
}

</style>
