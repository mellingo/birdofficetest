<template>
  <div class="home">
    <div
      class="gallery"
      v-for="(category, index) in categories"
      :key="'category' + index"
    >
      <h2 class="gallery__title">{{ category.title }}</h2>
      <ul class="gallery__list">
        <li
          class="gallery__item"
          v-for="experience in category.experiences"
          :key="'experience' + experience.id"
          @click="
            $router.push({ name: 'Experience', params: { id: experience.id } })
          "
        >
          <div class="gallery__item__image">
            <img
              alt=""
              :src="require('@/assets/experiences/' + experience.image)"
            />
          </div>
          <router-link
            class="gallery__item__link"
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
.home {
  padding: 5rem 13% 3rem;
}

.gallery + .gallery {
  margin-top: 5rem;
}

.gallery__title {
  color: var(--dark-grey);
}

.gallery__list {
  display: grid;
  grid-template-columns: repeat(5, calc(20% - 1rem));
  column-gap: 1rem;
  row-gap: 1rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

@media (max-width: 1200px) {
  .gallery__list {
    grid-template-columns: repeat(2, calc(50% - 1rem));
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
  text-decoration: none;
  color: var(--main-grey);
}

.gallery__item:hover > .gallery__item__link {
  text-decoration: underline;
}

.gallery__item__image {
  width: 100%;
  padding-top: 145%;
  position: relative;
  margin-bottom: 0.5rem;
}

.gallery__item__image > img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
}
</style>

<script>
import data from "@/assets/data.json";
import VClamp from "vue-clamp";

export default {
  components: {
    VClamp
  },
  data() {
    return {
      categories: [
        {
          title: "Just booked",
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
      return `$${experience.price} ${experience.title}`;
    }
  }
};
</script>
