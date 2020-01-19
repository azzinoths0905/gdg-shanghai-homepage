<template>
  <v-container class="pa-0 my-0">
    <v-layout
      wrap
      align-start
      justify-start
      row
      fill-height
      class="my-0"
    >

      <v-flex
        xs12
        md8
        lg8
        class="pa-2 my-0"
      >
        <p
          class="google-font"
          style="font-size:180%;color:#0277bd"
        >反骚扰政策</p>

        <p
          class="google-font"
          style="font-size:110%"
        >
          <b style="font-size:120%;color: #2E2E2E;">为什么我们为 {{chapterDetails.ChapterName}} 的活动制定了反骚扰政策？</b>

          <ul
            class="mt-2"
            style="font-size:110%"
          >
            <li class="google-font">它确立了活动期间的期望行为，只需制定这一项政策即可防止成员被骚扰。</li>
            <li class="google-font">它可以让曾经在其他活动中经历过骚扰的社区成员安心参加我们的活动。</li>
            <li class="google-font">它告诉了活动中的工作人员和志愿者怎样在不干扰到活动本身的情况下处理各种骚扰事件。</li>
          </ul>
        </p>

        <p
          class="google-font"
          style="font-size:110%"
        >
          <b style="font-size:120%;color: #2E2E2E;">{{chapterDetails.ChapterName}} 致力于为每个人提供没有骚扰的活动体验，以下这些都不会影响您的权益：</b>

          <ul
            class="mt-2"
            style="font-size:110%"
          >
            <li class="google-font">性别</li>
            <li class="google-font">性取向</li>
            <li class="google-font">身体障碍</li>
            <li class="google-font">性别认知</li>
            <li class="google-font">年龄</li>
            <li class="google-font">种族</li>
            <li class="google-font">信仰</li>
            <li class="google-font">国籍</li>
          </ul>

          <span
            class="google-font"
            style="font-size:110%"
          >以上列出的并不是全部，我们对于骚扰是零容忍的。</span>
        </p>

        <p
          class="google-font"
          style="font-size:120%"
        >涉及色情内容的言论和图像在任何场合下都是不能出现的，包括演讲。违反这些规则的活动参与者可能会在活动中被排除，并由活动组织者或管理人员禁止其参与未来的活动。</p>

        <p
          class="google-font"
          style="font-size:110%"
        >骚扰包括（但不限于）：
          <ul
            class="mt-2"
            style="font-size:110%"
          >
            <li class="google-font">
              与性别、性取向、身体障碍、性别认知、年龄、种族或信仰相关的口头冒犯言论。
            </li>
            <li class="google-font">在公共场所展示涉及色情内容的图像。</li>
            <li class="google-font">各种形式的恐吓。</li>
            <li class="google-font">对于他人纠缠不清。</li>
            <li class="google-font">骚扰性的拍摄和录音。</li>
            <li class="google-font">破坏活动秩序。</li>
            <li class="google-font">不恰当的肢体接触。</li>
            <li class="google-font">令人不适的性暗示。</li>
          </ul>
        </p>

        <p
          class="google-font"
          style="font-size:120%"
        >一旦参与者要求停止任何骚扰行为时应当立即停止。
          <br><br>
          参与的合作伙伴和客人也应遵守反骚扰政策。参展商和演讲者不应使用带有性别色彩的图像、活动或其他物料，或在其他如幻灯片、展品、参展人员、促销商品中加入此类要素。
          <br><br>
          如果您受到骚扰，或注意有人受到骚扰，或有其他任何疑虑的话，请立即与组织者或志愿者联系。组织者和志愿者可以通过T恤或特殊徽章/挂绳来识别。组织者将对此问题进行调查并采取适当的措施。这可能包括帮助参与者联系场地安全或当地执法部门，提供护送或以其他方式协助这些遭受骚扰的人在活动期间保持安全。
          <br><br>
          尽管我们希望我们永远不必引用此政策，但我们相信拥有它可以让每个人去思考他们的行为和言语会如何影响整个社区以及社区成员。
        </p>

      </v-flex>

      <v-flex
        xs12
        md4
        lg4
        class="pa-2 hidden-sm-and-down"
      >

      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
export default {
  data() {
    return {
      chapterDetails: ChapterDetails
    };
  }
};
</script>
