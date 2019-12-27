<template>
  <v-container class="pa-0">
    <v-layout
      wrap
      align-center
      justify-center
      row
      fill-height
    >
      <v-flex
        xs12
        md3
        lg3
        class="pa-2"
      >
        <p
          class="google-font"
          style="font-size:180%"
        >我们是做什么的？</p>
        <p
          class="google-font"
          style="font-size:110%"
        >Google Developer Groups(GDGs)是由热爱Google技术的开发者们组成的社区。</p>

        <p
          class="google-font"
          style="font-size:110%"
        >以下这些是Google的各种技术：</p>

        <span
          v-for="(item,i) in whatWeDoData"
          :key="i"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <a
                :href="item.link"
                target="_blank"
                flat
                class="ma-0"
              >
                <img
                  :src="getImgUrl(item.image)"
                  width="30vh"
                  alt=""
                  srcset=""
                  dark
                  v-on="on"
                >
              </a>
              &nbsp;&nbsp;&nbsp;
            </template>
            <span>{{item.TechName}}</span>
          </v-tooltip>
        </span>

        <br><br>

        <v-btn
          :href="chapterDetails.GDGProgramWebsite"
          outline
          target="_blank"
          round
          color="cyan"
          style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"
          flat
          class="ml-0 google-font hidden-md-and-down"
          dark
        >查看更多</v-btn>

      </v-flex>
      <v-flex
        xs12
        md9
        lg9
        class=""
      >
        <v-layout
          row
          wrap
        >

          <v-flex
            xs6
            sm6
            md3
            lg3
            class="text-xs-center pa-2"
          >
            <v-icon
              large
              style="font-size:300%"
            >chat_bubble</v-icon>
            <p
              class="google-font"
              style="font-size:130%"
            >精彩演讲</p>
            <p
              class="google-font"
              style="font-size:110%"
            >持续跟进最新的新闻与公告</p>
          </v-flex>

          <v-flex
            xs6
            sm6
            md3
            lg3
            class="text-xs-center pa-2"
          >
            <v-icon
              large
              style="font-size:300%"
            >code</v-icon>
            <p
              class="google-font"
              style="font-size:130%"
            >编程实验</p>
            <p
              class="google-font"
              style="font-size:110%"
            >体验由社区成员提供的手把手开发指南</p>
          </v-flex>

          <v-flex
            xs6
            sm6
            md3
            lg3
            class="text-xs-center pa-2"
          >
            <v-icon
              large
              style="font-size:300%"
            >school</v-icon>
            <p
              class="google-font"
              style="font-size:130%"
            >校园路演</p>
            <p
              class="google-font"
              style="font-size:110%"
            >在各大公司和学校分享知识</p>
          </v-flex>

          <v-flex
            xs6
            sm6
            md3
            lg3
            class="text-xs-center pa-2"
          >
            <v-icon
              large
              style="font-size:300%"
            >airplay</v-icon>
            <p
              class="google-font"
              style="font-size:130%"
            >直播聚会</p>
            <p
              class="google-font"
              style="font-size:110%"
            >聚在一起观看讨论新的大会直播</p>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import whatWeDoData from "@/assets/data/whatWeDoComponentData.json";
import ChapterDetails from "@/assets/data/chapterDetails.json";
export default {
  data() {
    return {
      chapterDetails: ChapterDetails,
      whatWeDoData: whatWeDoData
    };
  },
  methods: {
    getImgUrl(url) {
      if (url.length > 0) {
        return require("@/assets/img/what-we-do/" + url);
      } else {
        return require("@/assets/img/what-we-do/notFound.png");
      }
    }
  }
};
</script>
