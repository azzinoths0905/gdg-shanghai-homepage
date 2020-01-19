<template>
  <v-content class="pa-0">

    <v-container
      fluid
      class="mt-3 mb-0"
    >
      <v-layout
        wrap
        align-center
        justify-center
        row
        fill-height
        class="my-0"
      >
        <v-flex
          xs12
          md10
          class="my-0"
        >
          <p
            class="google-font mb-0"
            style="font-size:200%;color:#616161"
          >我们之中有许多有趣的人，更有强大的实践者</p>
          <p
            class="google-font mt-0 mb-0"
            style="font-size:110%"
          >Google是全球最著名的公司之一，谷歌搜索，谷歌地图和Gmail都是非常出色的产品。对于普通用户来说，它们只是好用的工具；但我们而言，则远不止于此。开发者们考虑得更多：API、扩展性问题、复杂的技术栈，而这些才是我们GDG所关注的。</p>
          <p
            class="google-font mt-3 mb-0"
            style="font-size:110%"
          >我们的目标是通过组织活动来让广大的中国开发者接触最优秀的领域专家，加速IT行业的建设。以下是我们的核心团队：</p>

        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid>
      <v-layout
        wrap
        align-center
        justify-center
        row
        fill-height
      >
        <v-flex
          xs12
          md10
          class=""
        >
          <coreTeam />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid>
      <v-layout
        wrap
        align-center
        justify-center
        row
        fill-height
      >
        <v-flex
          xs12
          md10
          class=""
        >
          <organizingTeam />
        </v-flex>
      </v-layout>
    </v-container>

  </v-content>

</template>

<script>
import TeamDetails from "@/assets/data/chapterDetails.json";
import coreTeam from "@/components/team/coreTeam";
import organizingTeam from "@/components/team/organizingTeam";
export default {
  components: {
    coreTeam,
    organizingTeam
  },
  data() {
    return {
      TeamDetails: TeamDetails
    };
  }
};
</script>
