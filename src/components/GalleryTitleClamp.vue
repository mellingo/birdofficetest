<template>
  <span class="clamp">
    <span class="size" ref="size" v-html="clampText"></span>
    <span v-html="finalText"></span>
  </span>
</template>

<style scoped>
.clamp {
  position: relative;
  display: block;
}
.size {
  position: absolute;
  visibility: hidden;
}
</style>

<script>
export default {
  props: ["price", "title", "lineLimit"],
  data() {
    return {
      lineHeight: 0,
      width: 0,
      limit: 0,
      wordArray: [],
      wordCount: 0,
      clampArray: [],
      checkExpand: false,
      finalText: ""
    };
  },
  mounted() {
    this.wordArray = [
      `<span style="font-weight: 600; padding-right: 0.5rem">${this.price}</span>`,
      ...this.title.split(" ")
    ];
    this.wordCount = this.wordArray.length;
    this.lineHeight = parseInt(
      getComputedStyle(this.$el).getPropertyValue("line-height")
    );
    addEventListener("resize", this.handleResize);
    this.$nextTick(this.init);
  },
  destroyed() {
    removeEventListener("resize", this.handleResize);
  },
  computed: {
    clampText: function() {
      return this.clampArray.join(" ");
    },
    maxHeight: function() {
      return this.lineLimit * this.lineHeight;
    }
  },
  watch: {
    width: function() {
      this.init();
    }
  },
  methods: {
    init: function() {
      this.clampArray = [...this.wordArray];
      this.$nextTick(() => {
        this.updateTextValue();
      });
    },
    updateTextValue: function() {
      if (this.$refs.size.offsetHeight > this.maxHeight) {
        this.checkExpand = false;
        if (this.clampArray.length > 0) {
          this.clampArray.pop();
          this.clampArray[this.clampArray.length - 1] =
            this.clampArray[this.clampArray.length - 1] + "...";
        }
        this.$nextTick(() => {
          this.updateTextValue();
        });
      } else {
        this.finalText = this.clampText;
      }
    },
    handleResize: function() {
      if (this.$refs.size && this.$refs.size.offsetWidth) {
        this.width = this.$refs.size.offsetWidth;
      }
    }
  }
};
</script>
