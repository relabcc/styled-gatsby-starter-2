import { Container, Text, VStack, Heading } from '@chakra-ui/react'
import React from 'react'

import Button from 'components/Button'

const lorem = `同師羽又問呀鴨地吉哭早請往圓，了室穴有四夕第好包故姐會？快坐吃王！服聽像寺蝸次言旦古時在手讀吉即！細朋珠冰種國原己菜追。

心躲放戶要別帽松新向主秋躲，背就正幫由犬走乞連星外請活頭送林九忍浪；視那候歡加戶什媽拉卜夏松爸向；從主光它能年片苦奶土。

兌不朋意門第松月羽采步過言嗎隻：筆左北比出：習現語合像禾屋亭貫鼻帶亭許！小走就百背，她掃節山里房道讀杯小申禾種示樹姐止辛；法兆京魚果，草畫蝸唱習牙愛神拉去「吉且語」是間那。

奶美工朋昔，邊您院話比？喝現對良入師雄光弟澡生它久來怪神四而！了乙馬好蛋媽對收？正動動間知消頁收各，花對筆種穴呢道早荷真方兒貝。

申息鴨燈雄前告向美了色借愛草院里足課香半！麻飯明，經話園几巾紅麼才喝里虎河、寺了息時九犬雄毛乍消頁玩，明丟巾林斗隻京叫雲拍品汗結找告，頁打家種個勿第對太息雞黃足交胡用假面、燈屋因星學女。

們片去圓衣笑立您共來世綠回星抓八，教即記對許寺想課了找都南尾車反的陽朋千，澡跳停天筆頭坐婆魚牛說次几元比找朋，科寫千水頭我波個買。

下裏追兄發兒麻固隻胡六，背斗節月有抱汗昔別女更收重遠孝工「內連果都」水花至老隻在問個假田晚上小他五馬食頁。祖幼五問示了嗎怕福能長。跟雄好現冰回。`

const AboutPage = () => (
  <Container>
    <VStack py="8">
      <Heading size="lg" as="h1">這是關於頁</Heading>
      <Text whiteSpace="pre-wrap">
        {lorem}
      </Text>
      <Text whiteSpace="pre-wrap">
        {lorem}
      </Text>

      <div>
        <Button to="/">
          回到首頁
        </Button>
      </div>
    </VStack>
  </Container>
)

export default AboutPage
