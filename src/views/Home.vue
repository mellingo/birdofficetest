<template>
  <div>
    <div
      class="gallery"
      v-for="(category, index) in categories"
      :key="'category' + index"
    >
      <h2 class="gallery__title title">{{ category.title }}</h2>
      <ul class="gallery__list">
        <li
          class="gallery__item"
          v-for="experience in category.experiences"
          :key="'experience' + experience.id"
          @click="
            $router.push({
              name: 'Experience',
              params: { id: experience.id }
            })
          "
        >
          <ImageRatio
            :url="require('@/assets/experiences/' + experience.image)"
            ratio="145%"
          />
          <router-link
            @click.native.stop
            class="gallery__item__link stopPropagation"
            :to="{ name: 'Experience', params: { id: experience.id } }"
          >
            <v-clamp autoresize :max-lines="2">{{
              getText(experience)
            }}</v-clamp>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.gallery + .gallery {
  margin-top: 5rem;
}

.gallery__title {
  font-size: 2.5rem;
}

.gallery__list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

@media (max-width: 1200px) {
  .gallery__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.gallery__item {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 175px;
  cursor: pointer;
}

.gallery__item__link {
  margin-top: 0.5rem;
  text-decoration: none;
  color: var(--main-grey);
  font-size: 1.1rem;
}

.gallery__item:hover > .gallery__item__link {
  text-decoration: underline;
}
</style>

<script>
import data from "@/assets/data.json";
import VClamp from "vue-clamp";
import ImageRatio from "@/components/ImageRatio.vue";
import moneyParser from "@/mixins/moneyParser.js";

export default {
  components: {
    VClamp,
    ImageRatio
  },
  mixins: [moneyParser],
  data() {
    return {
      categories: [
        {
          title: "Just Booked",
          experiences: data["experiences"].filter(
            xp => xp.category === "booked"
          )
        },
        {
          title: "Featured experiences",
          experiences: data["experiences"].filter(
            xp => xp.category === "featured"
          )
        }
      ]
    };
  },
  methods: {
    getText: function(experience) {
      let price = this.americanNumberFormat(experience.price);
      return `$${price} ${experience.title}`;
    }
  }
};
</script>
