(function (global) {
  'use strict';

  const extraScientistsData = [
{
  key: 'brattain',
  name: '沃尔特·布拉顿',
  nameEn: 'WALTER BRATTAIN',
  title: '晶体管发明者·诺贝尔物理学奖',
  years: '1902 — 1987 · USA',
  country: 'USA',
  fallback: '布',
  color: '#e8f0ff',
  x: 0.939,
  y: 0.937,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `科学的真正乐趣在于发现自然界的奥秘。`,
  desc: `沃尔特·豪瑟·布拉顿（Walter Houser Brattain，1902年2月10日－1987年10月13日），美国物理学家，1947年与巴丁、肖克利在贝尔实验室共同发明晶体管，1956年获诺贝尔物理学奖。他出生于中国厦门，成长于华盛顿州，擅长实验物理与表面物理。`,
  contrib: `1. 晶体管发明\
1947年12月，布拉顿与约翰·巴丁在贝尔实验室制作出第一个点接触晶体管，实现了电流放大，开启了固态电子时代。\
2. 半导体表面研究\
他系统研究半导体表面态与界面效应，为理解硅、锗等材料的导电机制奠定基础。\
3. 诺贝尔物理学奖\
1956年与巴丁、肖克利共享诺贝尔物理学奖，表彰他们对半导体的研究与晶体管效应的发现。`
},
{
  key: 'shockley',
  name: '威廉·肖克利',
  nameEn: 'WILLIAM SHOCKLEY',
  title: '晶体管与半导体先驱',
  years: '1910 — 1989 · USA',
  country: 'USA',
  fallback: '肖',
  color: '#e8f0ff',
  x: 0.097,
  y: 0.076,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `最有价值的发现往往源于对失败的执着追问。`,
  desc: `威廉·肖克利（William Shockley，1910年2月13日－1989年8月12日），美国物理学家、发明家，晶体管的主要发明者之一，1956年获诺贝尔物理学奖。他后来创办肖克利半导体实验室，培养了硅谷早期一代创业者，被誉为“硅谷之父”。`,
  contrib: `1. 结型晶体管\
1950年肖克利提出并发展了结型晶体管理论，解决了点接触晶体管不稳定的问题，为现代晶体管设计奠定基础。\
2. 半导体器件物理\
他建立的半导体能带理论与少数载流子注入模型，成为半导体物理与工程的经典框架。\
3. 硅谷奠基\
1956年在加州创办肖克利半导体实验室，吸引诺伊斯、摩尔等人才，间接催生了英特尔与硅谷半导体产业。`
},
{
  key: 'englert',
  name: '弗朗索瓦·恩格勒',
  nameEn: 'FRANCOIS ENGLERT',
  title: '希格斯机制提出者·诺贝尔物理学奖',
  years: '1932 — · BEL',
  country: 'BEL',
  fallback: '恩',
  color: '#e8f0ff',
  x: 0.306,
  y: 0.930,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `理论物理学家的使命是为宇宙寻找最简洁的描述。`,
  desc: `弗朗索瓦·恩格勒（François Englert，1932年11月6日－），比利时理论物理学家，因提出希格斯机制与布绕特共同获得2013年诺贝尔物理学奖。他长期从事粒子物理与场论研究，对标准模型的建立贡献卓著。`,
  contrib: `1. 希格斯机制\
1964年与罗伯特·布绕特独立提出对称性自发破缺机制，解释基本粒子如何获得质量，预言希格斯玻色子存在。\
2. 电弱统一理论\
他的工作为格拉肖-温伯格-萨拉姆电弱统一理论奠定关键基础，使电磁力与弱核力统一描述。\
3. 2013年诺贝尔物理学奖\
因理论预言希格斯玻色子而获诺贝尔物理学奖，实验上希格斯玻色子已于2012年在CERN被发现。`
},
{
  key: 'thooft',
  name: '杰拉德·特·胡夫特',
  nameEn: 'GERARD T HOOFT',
  title: '规范场论重构者·诺贝尔物理学奖',
  years: '1946 — · NED',
  country: 'NED',
  fallback: '胡',
  color: '#e8f0ff',
  x: 0.734,
  y: 0.921,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `理解基本相互作用，就是理解宇宙的语法。`,
  desc: `杰拉德·特·胡夫特（Gerard 't Hooft，1946年7月5日－），荷兰理论物理学家，因证明规范场论可重整化与韦尔特曼共获1999年诺贝尔物理学奖。他的工作拯救了电弱统一理论，奠定了粒子物理标准模型的数学基础。`,
  contrib: `1. 规范场论可重整化\
1971年作为博士研究生，他证明了非阿贝尔规范场论（杨-米尔斯理论）的可重整性，解决了电弱统一理论的核心障碍。\
2. 标准模型基础\
他的工作使格拉肖-温伯格-萨拉姆模型成为自洽的量子场论，为标准模型奠定严格数学基础。\
3. 量子引力探索\
他在黑洞信息悖论、全息原理、量子引力基础等方面也做出重要贡献，提出't Hooft全息猜想。`
},
{
  key: 'veltman',
  name: '马丁努斯·韦尔特曼',
  nameEn: 'MARTINUS VELTMAN',
  title: '电弱理论奠基人·诺贝尔物理学奖',
  years: '1931 — 2021 · NED',
  country: 'NED',
  fallback: '韦',
  color: '#e8f0ff',
  x: 0.897,
  y: 0.061,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `数学的严谨是理论物理学最可靠的向导。`,
  desc: `马丁努斯·韦尔特曼（Martinus Veltman，1931年6月27日－2021年1月4日），荷兰理论物理学家，与弟子特·胡夫特因对电弱相互作用量子结构的研究获1999年诺贝尔物理学奖。他发展了用于计算费曼图的计算机代数工具。`,
  contrib: `1. 电弱理论量子结构\
他与特·胡夫特合作，严格证明了电弱统一理论的数学自洽性，使杨-米尔斯规范理论成为可计算的理论。\
2. Schoonschip程序\
他编写了早期重要的符号计算程序Schoonschip，用于自动化处理复杂的费曼图计算。\
3. 培养诺奖学生\
作为特·胡夫特的导师，他指导后者完成规范场论可重整化的关键证明，共同获得1999年诺贝尔物理学奖。`
},
{
  key: 'glashow',
  name: '谢尔登·格拉肖',
  nameEn: 'SHELDON GLASHOW',
  title: '电弱统一理论先驱·诺贝尔物理学奖',
  years: '1932 — · USA',
  country: 'USA',
  fallback: '格',
  color: '#e8f0ff',
  x: 0.443,
  y: 0.938,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `物理学的美在于用统一的视角看待看似不同的现象。`,
  desc: `谢尔登·格拉肖（Sheldon Glashow，1932年12月5日－），美国理论物理学家，1979年与温伯格、萨拉姆因对电弱统一理论的贡献共获诺贝尔物理学奖。他最早提出将电磁相互作用与弱相互作用统一的SU(2)×U(1)规范理论。`,
  contrib: `1. 电弱统一理论\
1961年他提出SU(2)×U(1)规范对称性模型，统一描述电磁力与弱核力，预言W±和Z⁰玻色子存在。\
2. 标准模型构建\
他的理论框架成为粒子物理标准模型的核心组成部分，为后续实验发现中间玻色子提供理论指导。\
3. 大统一理论探索\
1974年与乔吉提出首个SU(5)大统一理论，尝试统一强、弱、电磁三种相互作用。`
},
{
  key: 'weinberg',
  name: '史蒂文·温伯格',
  nameEn: 'STEVEN WEINBERG',
  title: '电弱统一与标准模型',
  years: '1933 — 2021 · USA',
  country: 'USA',
  fallback: '温',
  color: '#e8f0ff',
  x: 0.271,
  y: 0.060,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `宇宙越显得可以理解，它也就越显得没有意义。`,
  desc: `史蒂文·温伯格（Steven Weinberg，1933年5月3日－2021年7月23日），美国理论物理学家，1979年与格拉肖、萨拉姆共获诺贝尔物理学奖。他被誉为标准模型最重要的构建者之一，其著作《最初三分钟》深刻影响了宇宙学普及。`,
  contrib: `1. 电弱统一理论\
1967年他独立提出电弱统一理论，引入希格斯机制解释规范玻色子与费米子质量起源。\
2. 标准模型奠基\
他的工作为粒子物理标准模型奠定基础，准确预言W、Z玻色子性质，后被CERN实验证实。\
3. 宇宙学贡献\
《最初三分钟》将粒子物理与大爆炸宇宙学结合，推动现代物理宇宙学的发展与公众理解。`
},
{
  key: 'salam',
  name: '阿卜杜斯·萨拉姆',
  nameEn: 'ABDUS SALAM',
  title: '电弱统一与巴基斯坦科学',
  years: '1926 — 1996 · PAK',
  country: 'PAK',
  fallback: '萨',
  color: '#e8f0ff',
  x: 0.602,
  y: 0.931,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `科学没有国界，但科学家有祖国。`,
  desc: `阿卜杜斯·萨拉姆（Abdus Salam，1926年1月29日－1996年11月21日），巴基斯坦理论物理学家，1979年与格拉肖、温伯格共获诺贝尔物理学奖。他是首位获得诺贝尔奖的穆斯林科学家，积极推动发展中国家科学教育。`,
  contrib: `1. 电弱统一理论\
独立发展电弱统一理论，引入对称性自发破缺机制，为粒子物理标准模型做出贡献。\
2. 发展中国家科学事业\
1964年创建国际理论物理中心（ICTP），为发展中国家科学家提供研究平台与培训机会。\
3. 巴基斯坦科学奠基\
作为巴基斯坦原子能委员会首席科学顾问，推动该国核科学与技术发展，培养了大批本土科学家。`
},
{
  key: 'cronin',
  name: '詹姆斯·克朗宁',
  nameEn: 'JAMES CRONIN',
  title: 'CP破坏发现者·诺贝尔物理学奖',
  years: '1931 — 2016 · USA',
  country: 'USA',
  fallback: '克',
  color: '#e8f0ff',
  x: 0.847,
  y: 0.881,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `自然界偶尔会用微小不对称打破我们对称的幻想。`,
  desc: `詹姆斯·沃森·克朗宁（James Watson Cronin，1931年9月29日－2016年8月25日），美国粒子物理学家，1980年与瓦尔·菲奇因发现中性K介子衰变中的CP破坏共获诺贝尔物理学奖。这一发现揭示了物质与反物质不对称的物理起源。`,
  contrib: `1. CP破坏发现\
1964年与菲奇在布鲁克海文实验室观测到长寿命K介子偶尔衰变为两个π介子，证明CP对称性在弱相互作用中被破坏。\
2. 物质-反物质不对称\
CP破坏为解释宇宙中物质为何多于反物质提供了关键机制线索。\
3. 宇宙线研究\
晚年参与皮埃尔·奥格宇宙线观测站项目，研究极高能宇宙线的起源与性质。`
},
{
  key: 'fitch',
  name: '瓦尔·菲奇',
  nameEn: 'VAL FITCH',
  title: 'CP破坏发现者·诺贝尔物理学奖',
  years: '1923 — 2015 · USA',
  country: 'USA',
  fallback: '菲',
  color: '#e8f0ff',
  x: 0.195,
  y: 0.269,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `实验是检验自然规律的最终裁判。`,
  desc: `瓦尔·洛格斯登·菲奇（Val Logsdon Fitch，1923年3月10日－2015年2月5日），美国核物理学家，1980年与克朗宁因发现CP破坏共获诺贝尔物理学奖。他在二战期间参与曼哈顿计划，战后长期从事粒子物理实验研究。`,
  contrib: `1. CP破坏实验\
1964年与克朗宁精确测量中性K介子衰变，首次实验证明CP对称性破坏，动摇了粒子物理学基本假设。\
2. 曼哈顿计划参与\
二战期间在美国洛斯阿拉莫斯参与原子弹研制，负责电子学与中子探测器工作。\
3. 普林斯顿大学贡献\
长期在普林斯顿大学任教，领导多个粒子物理实验，培养了大量实验物理人才。`
},
{
  key: 'richter',
  name: '伯顿·里克特',
  nameEn: 'BURTON RICHTER',
  title: 'J/ψ粒子发现者·诺贝尔物理学奖',
  years: '1931 — 2018 · USA',
  country: 'USA',
  fallback: '里',
  color: '#e8f0ff',
  x: 0.785,
  y: 0.071,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `粒子物理的进步，来自理论与实验的相互追逐。`,
  desc: `伯顿·里克特（Burton Richter，1931年3月22日－2018年7月18日），美国物理学家，1976年与丁肇中因独立发现J/ψ粒子共获诺贝尔物理学奖。这一发现证实了第四种夸克——粲夸克的存在，被称为“十一月革命”。`,
  contrib: `1. J/ψ粒子发现\
1974年11月，里克特领导的斯坦福小组在SPEAR对撞机上发现ψ粒子，与丁肇中的J粒子为同一粒子，统称J/ψ。\
2. 粲夸克证实\
J/ψ粒子的发现直接证实粲夸克存在，使夸克模型从3种扩展到4种，深刻改变粒子物理。\
3. 同步辐射光源\
他积极推动斯坦福同步辐射光源（SSRL）建设，为材料、生物、化学研究提供强大工具。`
},
{
  key: 'lederman',
  name: '利昂·莱德曼',
  nameEn: 'LEON LEDERMAN',
  title: '中微子束与τ中微子·诺贝尔物理学奖',
  years: '1922 — 2018 · USA',
  country: 'USA',
  fallback: '莱',
  color: '#e8f0ff',
  x: 0.717,
  y: 0.592,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `中微子是宇宙中最难以捉摸也最忠实的信使。`,
  desc: `利昂·马克斯·莱德曼（Leon Max Lederman，1922年7月15日－2018年10月3日），美国实验物理学家，1988年与施瓦茨、斯坦伯格因发现μ中微子共获诺贝尔物理学奖。他长期致力于粒子物理实验与科学普及教育。`,
  contrib: `1. μ中微子发现\
1962年他与施瓦茨、斯坦伯格利用布鲁克海文加速器产生高能中微子束，证明存在与电子中微子不同的μ中微子。\
2. 费米实验室领导\
1979-1989年任费米国家加速器实验室主任，主导Tevatron加速器建设，推动美国高能物理发展。\
3. 科学教育推广\
积极投身公众科学教育，主张将物理学趣味化，推动“让美国的孩子爱科学”等倡议。`
},
{
  key: 'perl',
  name: '马丁·佩尔',
  nameEn: 'MARTIN PERL',
  title: 'τ轻子发现者·诺贝尔物理学奖',
  years: '1927 — 2014 · USA',
  country: 'USA',
  fallback: '佩',
  color: '#e8f0ff',
  x: 0.349,
  y: 0.229,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `每一次新轻子的发现，都是物质结构的新篇章。`,
  desc: `马丁·刘易斯·佩尔（Martin Lewis Perl，1927年6月24日－2014年9月30日），美国物理学家，1995年与莱因斯因发现τ轻子共获诺贝尔物理学奖。τ轻子是第三种带电轻子，质量约为质子的两倍。`,
  contrib: `1. τ轻子发现\
1975年佩尔在SLAC的SPEAR实验中通过分析正负电子湮灭产物，发现质量巨大的τ轻子，证明轻子家族有三代。\
2. 轻子三代结构\
τ轻子的发现完善了标准模型中三代轻子的图像，为CKM矩阵和PMNS矩阵提供实验基础。\
3. 粒子探测器技术\
他参与开发了多种粒子探测技术，为高能物理实验提供了关键仪器方法。`
},
{
  key: 'reines',
  name: '弗雷德里克·莱因斯',
  nameEn: 'FREDERICK REINES',
  title: '中微子直接探测者·诺贝尔物理学奖',
  years: '1918 — 1998 · USA',
  country: 'USA',
  fallback: '赖',
  color: '#e8f0ff',
  x: 0.284,
  y: 0.434,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `捕捉到中微子，就像用网兜住了幽灵。`,
  desc: `弗雷德里克·莱因斯（Frederick Reines，1918年3月16日－1998年8月26日），美国物理学家，1995年与佩尔因发现中微子共获诺贝尔物理学奖。1956年他领导团队首次直接探测到电子反中微子，结束了中微子仅作为理论假设的历史。`,
  contrib: `1. 中微子直接探测\
1956年与科恩在萨凡纳河核反应堆旁利用水靶和闪烁体探测器首次直接探测到反中微子，证实了泡利1930年的预言。\
2. 反应堆中微子实验\
他发展了利用核反应堆作为强中微子源进行基础物理研究的方法，开创中微子实验物理学。\
3. 诺贝尔奖认可\
1995年获诺贝尔物理学奖，表彰其开创性探测到中微子，为粒子物理和天体物理打开新窗口。`
},
{
  key: 'rubbia',
  name: '卡洛·鲁比亚',
  nameEn: 'CARLO RUBBIA',
  title: 'W/Z玻色子发现者·诺贝尔物理学奖',
  years: '1934 — · ITA',
  country: 'ITA',
  fallback: '鲁',
  color: '#e8f0ff',
  x: 0.371,
  y: 0.065,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `高能对撞让我们得以窥见宇宙最初瞬间的秘密。`,
  desc: `卡洛·鲁比亚（Carlo Rubbia，1934年3月31日－），意大利粒子物理学家，1984年与范德梅尔因发现W±和Z⁰玻色子共获诺贝尔物理学奖。他长期主持CERN重要实验，推动欧洲高能物理发展。`,
  contrib: `1. W/Z玻色子发现\
1983年他领导的UA1实验组在CERN SPS质子-反质子对撞机上发现W±和Z⁰玻色子，直接验证电弱统一理论。\
2. 随机冷却技术\
与范德梅尔合作推动随机冷却技术发展，使质子-反质子对撞机成为可行的高能实验平台。\
3. CERN领导\
1989-1993年任CERN总干事，主导大型强子对撞机（LHC）早期规划与论证。`
},
{
  key: 'charpak',
  name: '乔治·夏帕克',
  nameEn: 'GEORGES CHARPAK',
  title: '多丝正比室发明者·诺贝尔物理学奖',
  years: '1924 — 2010 · FRA',
  country: 'FRA',
  fallback: '夏',
  color: '#e8f0ff',
  x: 0.585,
  y: 0.706,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `一个好的探测器，能让看不见的粒子留下可见的足迹。`,
  desc: `乔治·夏帕克（Georges Charpak，1924年3月8日－2010年9月29日），法国物理学家，1992年因发明多丝正比室获诺贝尔物理学奖。他出生于波兰，二战期间参与法国抵抗运动，后在CERN长期工作。`,
  contrib: `1. 多丝正比室发明\
1968年他发明多丝正比室，能高效记录带电粒子径迹，成为高能物理实验的核心探测技术。\
2. 粒子探测革新\
他的探测器大幅提高了粒子物理实验的数据获取能力，直接促成许多重要发现。\
3. 科普与教育\
晚年积极推动科学教育改革，开发低成本物理实验装置，向青少年普及科学方法。`
},
{
  key: 'glauber',
  name: '罗伊·格劳伯',
  nameEn: 'ROY GLAUBER',
  title: '量子光学相干理论·诺贝尔物理学奖',
  years: '1925 — 2018 · USA',
  country: 'USA',
  fallback: '劳',
  color: '#e8f0ff',
  x: 0.168,
  y: 0.128,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `光的相干性，是量子世界送给经典光学的一份礼物。`,
  desc: `罗伊·杰·格劳伯（Roy J. Glauber，1925年9月1日－2018年12月26日），美国理论物理学家，2005年因对光学相干量子理论的贡献获诺贝尔物理学奖。他建立了现代量子光学的基础框架。`,
  contrib: `1. 量子光学相干理论\
1963年他提出光子的相干态理论与量子关联函数方法，奠定了量子光学的数学基础。\
2. 激光物理应用\
他的理论为激光统计、光子计数、量子信息处理等领域提供了核心工具。\
3. 诺贝尔奖\
2005年与霍尔、亨施共享诺贝尔物理学奖，表彰他在光学相干量子理论方面的奠基性贡献。`
},
{
  key: 'hall',
  name: '约翰·霍尔',
  nameEn: 'JOHN HALL',
  title: '激光精密光谱·诺贝尔物理学奖',
  years: '1934 — · USA',
  country: 'USA',
  fallback: '霍',
  color: '#e8f0ff',
  x: 0.415,
  y: 0.284,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `激光的频率稳定，打开了精密测量的新纪元。`,
  desc: `约翰·刘易斯·霍尔（John L. Hall，1934年8月21日－），美国物理学家，2005年与格劳伯、亨施因对激光精密光谱学的贡献共获诺贝尔物理学奖。他长期研究激光频率稳定与光学频率梳技术。`,
  contrib: `1. 激光频率稳定\
发展了 Pound-Drever-Hall 频率锁定技术，使激光频率稳定度达到极高水平，是引力波探测、光学钟的基础。\
2. 精密光谱测量\
推动了光学频率梳与飞秒激光梳技术，使光学频率与微波频率的直接比对成为可能。\
3. 2005年诺贝尔奖\
因对基于激光的精密光谱学发展做出贡献，与格劳伯、亨施共获诺贝尔物理学奖。`
},
{
  key: 'hansch',
  name: '特奥多尔·亨施',
  nameEn: 'THEODOR HANSCH',
  title: '激光频率梳·诺贝尔物理学奖',
  years: '1941 — · GER',
  country: 'GER',
  fallback: '亨',
  color: '#e8f0ff',
  x: 0.285,
  y: 0.711,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `光学频率梳让光波与电波携手共舞。`,
  desc: `特奥多尔·亨施（Theodor Hänsch，1941年10月30日－），德国物理学家，2005年与格劳伯、霍尔因对激光精密光谱学的贡献共获诺贝尔物理学奖。他发明了光学频率梳，彻底改变了频率计量。`,
  contrib: `1. 光学频率梳\
1999年他团队实现飞秒光学频率梳，将光频直接连接到微波频率标准，革命性地提高了频率测量精度。\
2. 激光冷却与陷俘\
在激光冷却原子、玻色-爱因斯坦凝聚、精密光谱等方面做出多项开创性贡献。\
3. 诺贝尔奖\
2005年因对激光精密光谱学发展的贡献获诺贝尔物理学奖，推动了光学原子钟的发展。`
},
{
  key: 'thorne',
  name: '基普·索恩',
  nameEn: 'KIP THORNE',
  title: '引力波与黑洞天体物理·诺贝尔物理学奖',
  years: '1940 — · USA',
  country: 'USA',
  fallback: '索',
  color: '#e8f0ff',
  x: 0.566,
  y: 0.066,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `黑洞不是黑暗的终点，而是引力最壮丽的舞台。`,
  desc: `基普·斯蒂芬·索恩（Kip Stephen Thorne，1940年6月1日－），美国理论物理学家，2017年与韦斯、巴里什因对LIGO和引力波探测的贡献共获诺贝尔物理学奖。他是引力波天体物理与黑洞研究的权威。`,
  contrib: `1. 引力波探测理论\
他长期研究引力波源、信号特征与探测方法，为LIGO的设计与数据分析奠定理论基础。\
2. 黑洞天体物理\
在黑洞吸积盘、引力透镜、虫洞、时间旅行可能性等方面做出经典理论贡献。\
3. 科普与电影\
担任电影《星际穿越》科学顾问，将引力波、黑洞等前沿科学带给全球观众。`
},
{
  key: 'weiss',
  name: '雷纳·韦斯',
  nameEn: 'RAINER WEISS',
  title: 'LIGO奠基人·诺贝尔物理学奖',
  years: '1932 — · GER/USA',
  country: 'GER/USA',
  fallback: '魏',
  color: '#e8f0ff',
  x: 0.210,
  y: 0.078,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `要相信那些理论上必然存在、但尚未被看见的信号。`,
  desc: `雷纳·韦斯（Rainer Weiss，1932年9月29日－），德裔美国物理学家，2017年与索恩、巴里什因对LIGO和引力波探测的贡献共获诺贝尔物理学奖。他是LIGO项目的发起人和核心设计者。`,
  contrib: `1. LIGO概念提出\
他提出用激光干涉仪探测引力波的基本方案，是LIGO探测器的概念创始者。\
2. 噪声控制技术\
发展了激光干涉引力波探测中的关键噪声抑制技术，包括地震隔离、热噪声控制等。\
3. 2017年诺贝尔奖\
因对LIGO探测器和引力波观测的决定性贡献获诺贝尔物理学奖。`
},
{
  key: 'barish',
  name: '巴里·巴里什',
  nameEn: 'BARRY BARISH',
  title: 'LIGO领导者·诺贝尔物理学奖',
  years: '1936 — · USA',
  country: 'USA',
  fallback: '巴',
  color: '#e8f0ff',
  x: 0.419,
  y: 0.721,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `大科学工程需要远见、协作与不懈的坚持。`,
  desc: `巴里·克拉克·巴里什（Barry Clark Barish，1936年1月27日－），美国实验物理学家，2017年与韦斯、索恩因对LIGO和引力波探测的贡献共获诺贝尔物理学奖。他作为LIGO项目领导人，将项目从困境中带向成功。`,
  contrib: `1. LIGO项目领导\
1994年起担任LIGO项目主任，重组国际合作团队，使项目按预算推进并成功建成。\
2. 国际合作组织\
创建LIGO科学合作组织（LSC），协调全球千余名科学家参与引力波探测。\
3. 2017年诺贝尔奖\
因对LIGO探测器和引力波观测的领导贡献获诺贝尔物理学奖。`
},
{
  key: 'taylorj',
  name: '约瑟夫·泰勒',
  nameEn: 'JOSEPH TAYLOR',
  title: '脉冲双星与引力波验证·诺贝尔物理学奖',
  years: '1941 — · USA',
  country: 'USA',
  fallback: '泰',
  color: '#e8f0ff',
  x: 0.677,
  y: 0.070,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `脉冲双星是自然界为我们建造的引力波天线。`,
  desc: `约瑟夫·胡顿·泰勒（Joseph Hooton Taylor Jr.，1941年3月29日－），美国天体物理学家，1993年与拉塞尔·赫尔斯因发现脉冲双星共获诺贝尔物理学奖。他们的观测为引力波存在提供了首个间接证据。`,
  contrib: `1. 脉冲双星精确观测\
他与赫尔斯发现的脉冲双星PSR B1913+16成为检验广义相对论的理想天然实验室。\
2. 引力波间接证实\
通过长期观测双星轨道衰减，精确验证广义相对论预言的引力波辐射，间接证实引力波存在。\
3. 射电天文技术\
发展了脉冲星计时技术，使其精度达到微秒量级，开辟了强引力场天体物理研究。`
},
{
  key: 'hulse',
  name: '拉塞尔·赫尔斯',
  nameEn: 'RUSSELL HULSE',
  title: '脉冲双星发现者·诺贝尔物理学奖',
  years: '1950 — · USA',
  country: 'USA',
  fallback: '赫',
  color: '#e8f0ff',
  x: 0.281,
  y: 0.768,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `在浩瀚数据中，耐心和敏锐同样重要。`,
  desc: `拉塞尔·艾伦·赫尔斯（Russell Alan Hulse，1950年11月28日－），美国物理学家，1993年与约瑟夫·泰勒因发现脉冲双星共获诺贝尔物理学奖。当时他还是博士研究生，利用阿雷西博射电望远镜发现了PSR B1913+16。`,
  contrib: `1. 脉冲双星发现\
1974年他在阿雷西博望远镜巡天中发现第一颗脉冲双星PSR B1913+16，开启双中子星系统研究。\
2. 广义相对论检验\
该双星系统为检验引力波、轨道进动等广义相对论效应提供了前所未有的精确平台。\
3. 科学教育\
长期从事科学教育与公共传播，致力于激发青少年对物理学的兴趣。`
},
{
  key: 'peebles',
  name: '吉姆·皮布尔斯',
  nameEn: 'JIM PEEBLES',
  title: '现代宇宙学奠基人·诺贝尔物理学奖',
  years: '1935 — · CAN/USA',
  country: 'CAN/USA',
  fallback: '皮',
  color: '#e8f0ff',
  x: 0.811,
  y: 0.270,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `宇宙学已从哲学走进精密科学。`,
  desc: `菲利普·詹姆斯·埃德温·皮布尔斯（Phillip James Edwin Peebles，1935年4月25日－），加拿大裔美国理论物理学家、宇宙学家，2019年与奎洛兹、马约尔因宇宙学物理学的贡献共获诺贝尔物理学奖。他被誉为现代宇宙学奠基人之一。`,
  contrib: `1. 大爆炸宇宙学\
1960年代他与迪克、威尔金森等预言宇宙微波背景辐射的黑体谱与各向异性，为大爆炸理论奠定观测基础。\
2. 暗物质与暗能量\
他在星系形成、暗物质、宇宙学常数和暗能量等问题上做出一系列奠基性理论工作。\
3. 宇宙学教科书\
所著《物理宇宙学原理》《宇宙的大尺度结构》等成为宇宙学标准教材。`
},
{
  key: 'riess',
  name: '亚当·里斯',
  nameEn: 'ADAM RIESS',
  title: '暗能量加速膨胀·诺贝尔物理学奖',
  years: '1969 — · USA',
  country: 'USA',
  fallback: '里',
  color: '#e8f0ff',
  x: 0.447,
  y: 0.166,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `宇宙在加速膨胀，这一发现让我们重新认识真空。`,
  desc: `亚当·盖·里斯（Adam Guy Riess，1969年12月16日－），美国天体物理学家，2011年与施密特、珀尔马特因发现宇宙加速膨胀共获诺贝尔物理学奖。他通过对高红移Ia型超新星的观测揭示了暗能量的存在。`,
  contrib: `1. 宇宙加速膨胀\
1998年他领导的高红移超新星搜寻团队发现宇宙膨胀在加速，为暗能量存在提供直接证据。\
2. 暗能量研究\
他持续改进超新星测距方法，精确测量暗能量状态方程，约束宇宙学参数。\
3. 哈勃常数测量\
利用造父变星和Ia型超新星精确测定哈勃常数，推动宇宙距离尺度研究。`
},
{
  key: 'schmidt',
  name: '布莱恩·施密特',
  nameEn: 'BRIAN SCHMIDT',
  title: '暗能量与超新星·诺贝尔物理学奖',
  years: '1967 — · AUS',
  country: 'AUS',
  fallback: '施',
  color: '#e8f0ff',
  x: 0.588,
  y: 0.777,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `超新星是测量宇宙膨胀的宇宙灯塔。`,
  desc: `布莱恩·保罗·施密特（Brian Paul Schmidt，1967年2月24日－），澳裔美国天体物理学家，2011年与里斯、珀尔马特因发现宇宙加速膨胀共获诺贝尔物理学奖。他领导高红移超新星搜寻团队，为暗能量研究做出关键贡献。`,
  contrib: `1. 宇宙加速膨胀\
1998年他与里斯等通过高红移Ia型超新星观测发现宇宙膨胀加速，揭示暗能量主导宇宙演化。\
2. 超新星巡天\
领导高红移超新星搜寻团队，建立 distant supernova 样本，革新宇宙学观测。\
3. 澳大利亚天文领导\
任澳大利亚国立大学天文与天体物理研究学院院长，推动南半球大视场巡天项目。`
},
{
  key: 'perlmutter',
  name: '索尔·珀尔马特',
  nameEn: 'SAUL PERLMUTTER',
  title: '宇宙加速膨胀·诺贝尔物理学奖',
  years: '1959 — · USA',
  country: 'USA',
  fallback: '珀',
  color: '#e8f0ff',
  x: 0.180,
  y: 0.429,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `最意想不到的宇宙图景，往往来自最耐心的观测。`,
  desc: `索尔·珀尔马特（Saul Perlmutter，1959年9月22日－），美国天体物理学家，2011年与里斯、施密特因发现宇宙加速膨胀共获诺贝尔物理学奖。他领导的超新星宇宙学项目通过Ia型超新星发现了暗能量。`,
  contrib: `1. 超新星宇宙学项目\
1988年创立超新星宇宙学项目，系统搜寻高红移Ia型超新星，建立大规模超新星样本。\
2. 暗能量发现\
1998年该项目首批结果显示宇宙膨胀在加速，直接推动暗能量成为宇宙学核心问题。\
3. 科学传播\
积极参与公众科学传播，将暗能量、加速宇宙等概念介绍给普通读者。`
},
{
  key: 'mather',
  name: '约翰·马瑟',
  nameEn: 'JOHN MATHER',
  title: '宇宙微波背景辐射·诺贝尔物理学奖',
  years: '1946 — · USA',
  country: 'USA',
  fallback: '马',
  color: '#e8f0ff',
  x: 0.410,
  y: 0.437,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `宇宙微波背景是宇宙留给我们的第一张照片。`,
  desc: `约翰·克伦威尔·马瑟（John Cromwell Mather，1946年8月7日－），美国天体物理学家、宇宙学家，2006年与斯穆特因发现宇宙微波背景辐射的黑体形式和各向异性共获诺贝尔物理学奖。`,
  contrib: `1. COBE卫星\
作为NASA宇宙背景探测者（COBE）卫星项目首席科学家，他领导团队精确测量宇宙微波背景辐射谱。\
2. 黑体谱证实\
COBE结果显示宇宙微波背景辐射谱与黑体谱高度一致，为大爆炸理论提供强有力支持。\
3. 詹姆斯·韦伯望远镜\
后来担任詹姆斯·韦伯太空望远镜高级项目科学家，推动下一代空间望远镜发展。`
},
{
  key: 'smoot',
  name: '乔治·斯穆特',
  nameEn: 'GEORGE SMOOT',
  title: '宇宙微波背景各向异性·诺贝尔物理学奖',
  years: '1945 — · USA',
  country: 'USA',
  fallback: '斯',
  color: '#e8f0ff',
  x: 0.326,
  y: 0.800,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `微小的温度涨落，孕育了今天的星系与结构。`,
  desc: `乔治·菲茨杰拉德·斯穆特（George Fitzgerald Smoot，1945年2月20日－），美国天体物理学家、宇宙学家，2006年与马瑟因发现宇宙微波背景辐射的黑体形式和各向异性共获诺贝尔物理学奖。`,
  contrib: `1. 宇宙微波背景各向异性\
他领导的COBE团队首次探测到宇宙微波背景辐射的微小温度涨落，这是宇宙大尺度结构的种子。\
2. 大爆炸理论验证\
COBE结果被誉为“宇宙学的大爆炸理论的证明”，开启了精确宇宙学时代。\
3. 后续宇宙学项目\
参与普朗克卫星等多个宇宙微波背景观测项目，持续精确测量宇宙学参数。`
},
{
  key: 'rubin',
  name: '薇拉·鲁宾',
  nameEn: 'VERA RUBIN',
  title: '暗物质观测先驱',
  years: '1928 — 2016 · USA',
  country: 'USA',
  fallback: '鲁',
  color: '#e8f0ff',
  x: 0.605,
  y: 0.282,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `我们看到的星系，只是宇宙物质的一小部分。`,
  desc: `薇拉·弗洛伦斯·鲁宾（Vera Florence Rubin，1928年7月23日－2016年12月25日），美国天文学家，暗物质观测研究的先驱。她通过星系旋转曲线研究提供了暗物质存在的关键观测证据。`,
  contrib: `1. 星系旋转曲线\
1970年代她与福特系统地测量螺旋星系旋转曲线，发现星系外围恒星旋转速度不下降，提供暗物质存在的关键证据。\
2. 暗物质研究\
她的观测巩固了暗物质在宇宙学中的核心地位，推动了暗物质粒子探测实验的发展。\
3. 女性科学先锋\
作为女性天文学家，她突破了当时的天文学性别壁垒，成为美国国家科学院院士，激励了无数女性投身科学。`
},
{
  key: 'bethe',
  name: '汉斯·贝特',
  nameEn: 'HANS BETHE',
  title: '恒星核合成理论·诺贝尔物理学奖',
  years: '1906 — 2005 · GER/USA',
  country: 'GER/USA',
  fallback: '贝',
  color: '#e8f0ff',
  x: 0.201,
  y: 0.156,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `星星的火焰，来自原子核深处的能量。`,
  desc: `汉斯·阿尔布雷希特·贝特（Hans Albrecht Bethe，1906年7月2日－2005年3月6日），德裔美国理论物理学家，1967年因对恒星核合成理论的贡献获诺贝尔物理学奖。他被誉为20世纪最伟大的核物理学家之一。`,
  contrib: `1. 恒星核合成\
1938年他提出恒星通过质子-质子链反应和CNO循环将氢聚变为氦，解释了恒星能量来源。\
2. 量子电动力学\
与费曼等共同发展量子电动力学，提出贝特-萨尔皮特方程等理论工具。\
3. 曼哈顿计划\
二战期间领导洛斯阿拉莫斯理论部门，计算原子弹效率，战后积极推动核军控。`
},
{
  key: 'dyson',
  name: '弗里曼·戴森',
  nameEn: 'FREEMAN DYSON',
  title: '量子电动力学与戴森球',
  years: '1923 — 2020 · UK/USA',
  country: 'UK/USA',
  fallback: '戴',
  color: '#e8f0ff',
  x: 0.900,
  y: 0.631,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `科学是一种人类活动，其最高成就是扩展我们想象的边界。`,
  desc: `弗里曼·约翰·戴森（Freeman John Dyson，1923年12月15日－2020年2月28日），英裔美国数学物理学家、思想家。他以对量子电动力学的贡献闻名，并提出著名的“戴森球”构想。`,
  contrib: `1. 量子电动力学统一\
1949年他证明费曼图、薛定谔/海森堡形式与朝永振一郎方法的数学等价性，统一了量子电动力学。\
2. 戴森球构想\
1960年提出戴森球假说，描述先进文明可能建造包围恒星的巨型结构以获取能量。\
3. 科学与未来思想\
他在核推进、天体生物学、气候科学、哲学等领域发表大量富有远见的思考。`
},
{
  key: 'wheeler',
  name: '约翰·惠勒',
  nameEn: 'JOHN WHEELER',
  title: '黑洞命名者与核物理',
  years: '1911 — 2008 · USA',
  country: 'USA',
  fallback: '惠',
  color: '#e8f0ff',
  x: 0.826,
  y: 0.404,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `黑洞教会我们，空间和时间本身也会弯曲、演化乃至终结。`,
  desc: `约翰·阿奇博尔德·惠勒（John Archibald Wheeler，1911年7月9日－2008年4月13日），美国理论物理学家，黑洞命名者，核物理与量子引力先驱。他培养了费曼等大批杰出物理学家。`,
  contrib: `1. 黑洞命名\
1967年他创造“黑洞”一词，取代“引力完全坍缩天体”，推动黑洞研究成为天体物理主流领域。\
2. 核物理与核聚变\
参与曼哈顿计划，研究核裂变与核聚变，提出重水反应堆理论。\
3. 量子引力与教育\
提出“万物源于比特”等思想，培养费曼、米斯纳、索恩等杰出学生，影响深远。`
},
{
  key: 'townes',
  name: '查尔斯·汤斯',
  nameEn: 'CHARLES TOWNES',
  title: '微波激射与激光发明者·诺贝尔物理学奖',
  years: '1915 — 2015 · USA',
  country: 'USA',
  fallback: '汤',
  color: '#e8f0ff',
  x: 0.808,
  y: 0.066,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `激光让光成为人类最精密的工具。`,
  desc: `查尔斯·哈德·汤斯（Charles Hard Townes，1915年7月28日－2015年1月27日），美国物理学家，1964年因微波激射与激光的基础研究获诺贝尔物理学奖。他发明微波激射器，奠定了激光技术基础。`,
  contrib: `1. 微波激射器\
1953年他发明首个微波激射器（maser），实现受激辐射放大，是激光技术的前身。\
2. 激光理论\
与肖洛共同提出光学受激辐射放大方案，为1960年第一台激光器的发明奠定理论基础。\
3. 射电天文学\
将微波技术应用于射电天文，参与发现星际分子，推动分子天体物理发展。`
},
{
  key: 'gross',
  name: '戴维·格娄斯',
  nameEn: 'DAVID GROSS',
  title: '渐近自由发现者·诺贝尔物理学奖',
  years: '1941 — · USA',
  country: 'USA',
  fallback: '格',
  color: '#e8f0ff',
  x: 0.466,
  y: 0.504,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `渐近自由让夸克在强相互作用中既亲密又独立。`,
  desc: `戴维·乔纳森·格娄斯（David Jonathan Gross，1941年2月19日－），美国理论物理学家，2004年与波利策、维尔切克因发现强相互作用的渐近自由共获诺贝尔物理学奖。他后来转向弦理论研究。`,
  contrib: `1. 渐近自由\
1973年他与维尔切克证明非阿贝尔规范理论中存在渐近自由，即夸克在高能下相互作用变弱，奠定量子色动力学基础。\
2. 量子色动力学\
渐近自由解释了深度非弹性散射实验，使QCD成为强相互作用的标准理论。\
3. 弦理论研究\
1980年代后投身弦理论，提出“杂化弦”理论，推动统一引力与量子力学。`
},
{
  key: 'politzer',
  name: '休·波利策',
  nameEn: 'HUGH POLITZER',
  title: '渐近自由·诺贝尔物理学奖',
  years: '1949 — · USA',
  country: 'USA',
  fallback: '波',
  color: '#e8f0ff',
  x: 0.856,
  y: 0.396,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `最自由的粒子，往往在最强的力场中运动。`,
  desc: `休·大卫·波利策（Hugh David Politzer，1949年8月17日－），美国理论物理学家，2004年与格娄斯、维尔切克因发现强相互作用的渐近自由共获诺贝尔物理学奖。`,
  contrib: `1. 渐近自由独立发现\
1973年他独立计算非阿贝尔规范理论的β函数，发现渐近自由，为量子色动力学提供关键支撑。\
2. 量子色动力学应用\
将渐近自由应用于强子结构、喷注物理等实验现象，推动高能物理理论发展。\
3. 加州理工学院贡献\
长期在加州理工学院任教，培养粒子物理与宇宙学人才。`
},
{
  key: 'wilczek',
  name: '弗兰克·维尔切克',
  nameEn: 'FRANK WILCZEK',
  title: '渐近自由与轴子·诺贝尔物理学奖',
  years: '1951 — · USA',
  country: 'USA',
  fallback: '威',
  color: '#e8f0ff',
  x: 0.086,
  y: 0.811,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `自然的深层规律往往比表象更简单、更优美。`,
  desc: `弗兰克·安东尼·维尔切克（Frank Anthony Wilczek，1951年5月15日－），美国理论物理学家，2004年与格娄斯、波利策因发现强相互作用的渐近自由共获诺贝尔物理学奖。他还以轴子、任意子等概念研究闻名。`,
  contrib: `1. 渐近自由\
作为普林斯顿研究生，他与格娄斯共同发现渐近自由，解决强相互作用的可计算性问题。\
2. 轴子假说\
1977年提出轴子作为解决强CP问题的假想粒子，成为暗物质候选粒子之一。\
3. 任意子与拓扑物态\
提出任意子概念，为凝聚态物理中的拓扑序与量子计算开辟新方向。`
},
{
  key: 'kajita',
  name: '梶田隆章',
  nameEn: 'TAKAAKI KAJITA',
  title: '中微子振荡·诺贝尔物理学奖',
  years: '1959 — · JPN',
  country: 'JPN',
  fallback: '梶',
  color: '#e8f0ff',
  x: 0.227,
  y: 0.374,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `中微子会变形，这一发现改写了粒子物理。`,
  desc: `梶田隆章（Kajita Takaaki，1959年3月9日－），日本物理学家，2015年与阿瑟·麦克唐纳因发现中微子振荡、证明中微子具有质量共获诺贝尔物理学奖。他领导超级神冈探测器实验。`,
  contrib: `1. 大气中微子振荡\
1998年超级神冈实验宣布大气中微子存在味转换，首次证明中微子具有非零质量。\
2. 超级神冈探测器\
领导建造超级神冈大型水切伦科夫探测器，用于中微子、质子衰变和天体物理研究。\
3. 2015年诺贝尔奖\
因发现中微子振荡获诺贝尔物理学奖，推动粒子物理超出标准模型研究。`
},
{
  key: 'mcdonald',
  name: '阿瑟·麦克唐纳',
  nameEn: 'ARTHUR MCDONALD',
  title: '中微子振荡·诺贝尔物理学奖',
  years: '1943 — · CAN',
  country: 'CAN',
  fallback: '麦',
  color: '#e8f0ff',
  x: 0.800,
  y: 0.395,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `太阳中微子的失踪之谜，最终指向中微子振荡。`,
  desc: `阿瑟·布鲁斯·麦克唐纳（Arthur Bruce McDonald，1943年8月29日－），加拿大物理学家，2015年与梶田隆章因发现中微子振荡共获诺贝尔物理学奖。他领导的萨德伯里中微子观测站解决了太阳中微子缺失问题。`,
  contrib: `1. 太阳中微子问题\
2001年SNO实验结果表明太阳中微子在传播过程中发生味转换，解决了长达30年的太阳中微子缺失之谜。\
2. 重水探测器\
利用重水同时探测三种味的中微子，直接证明电子中微子转变为μ和τ中微子。\
3. 加拿大核物理领导\
长期担任女王大学教授和SNOLAB主任，推动加拿大地下天体粒子物理研究。`
},
{
  key: 'kobayashi',
  name: '小林诚',
  nameEn: 'MAKOTO KOBAYASHI',
  title: 'CKM矩阵·诺贝尔物理学奖',
  years: '1944 — · JPN',
  country: 'JPN',
  fallback: '小',
  color: '#e8f0ff',
  x: 0.267,
  y: 0.335,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `对称性破缺的来源，藏在夸克混合矩阵之中。`,
  desc: `小林诚（Kobayashi Makoto，1944年4月7日－），日本物理学家，2008年与益川敏英、南部阳一郎因对自发对称性破缺的贡献共获诺贝尔物理学奖。他提出了描述夸克混合的CKM矩阵。`,
  contrib: `1. CKM矩阵\
1973年与益川敏英提出小林-益川矩阵，描述三代夸克之间的弱相互作用混合，预言CP破坏。\
2. 三代夸克\
他们的工作预言至少需要三代夸克才能产生CP破坏，后被底夸克和顶夸克的发现证实。\
3. 粒子物理标准模型\
CKM矩阵是标准模型的重要组成部分，为B介子工厂和味物理实验提供理论框架。`
},
{
  key: 'maskawa',
  name: '益川敏英',
  nameEn: 'TOSHIHIDE MASKAWA',
  title: 'CKM矩阵·诺贝尔物理学奖',
  years: '1940 — 2021 · JPN',
  country: 'JPN',
  fallback: '益',
  color: '#e8f0ff',
  x: 0.440,
  y: 0.719,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `三代夸克的混合，是自然界CP破坏的关键。`,
  desc: `益川敏英（Masukawa Toshihide，1940年2月7日－2021年7月23日），日本物理学家，2008年与小林诚、南部阳一郎共获诺贝尔物理学奖。他与小林诚共同发展了夸克混合与CP破坏理论。`,
  contrib: `1. 夸克混合理论\
1973年与小林诚提出三代夸克混合矩阵，解释弱相互作用中的味改变和CP破坏。\
2. CP破坏机制\
该理论预言了底夸克和顶夸克的存在，为后来B工厂精确测量CP破坏参数提供基础。\
3. 名古屋学派\
长期在名古屋大学和京都大学工作，是日本粒子物理理论研究的重要代表人物。`
},
{
  key: 'kerr',
  name: '罗伊·克尔',
  nameEn: 'ROY KERR',
  title: '旋转黑洞解',
  years: '1934 — · NZ',
  country: 'NZ',
  fallback: '克',
  color: '#e8f0ff',
  x: 0.687,
  y: 0.700,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `旋转让黑洞从完美的球体变成拖拽时空的陀螺。`,
  desc: `罗伊·帕特里克·克尔（Roy Patrick Kerr，1934年5月16日－），新西兰数学家、物理学家，以发现旋转黑洞的爱因斯坦场方程精确解——克尔解而闻名。`,
  contrib: `1. 克尔解\
1963年他发现描述旋转不带电黑洞的克尔度规，是广义相对论最重要的精确解之一。\
2. 黑洞物理\
克尔解预言了能层、内/外视界等结构，为黑洞热力学、吸积盘和引力波研究提供基础。\
3. 数学广义相对论\
他的工作推动了数学广义相对论的发展，影响了彭罗斯、霍金等人的奇点定理研究。`
},
{
  key: 'bell',
  name: '约翰·贝尔',
  nameEn: 'JOHN BELL',
  title: '贝尔不等式与量子纠缠',
  years: '1928 — 1990 · UK',
  country: 'UK',
  fallback: '贝',
  color: '#e8f0ff',
  x: 0.479,
  y: 0.360,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `量子纠缠告诉我们，世界比经典物理所描述的更为紧密。`,
  desc: `约翰·斯图尔特·贝尔（John Stewart Bell，1928年6月28日－1990年10月1日），北爱尔兰物理学家，以提出贝尔不等式闻名。他的工作为量子纠缠的非定域性提供了可实验检验的判据。`,
  contrib: `1. 贝尔不等式\
1964年他提出贝尔不等式，将爱因斯坦-波多尔斯基-罗森悖论转化为可实验检验的数学关系。\
2. 量子非定域性\
贝尔定理表明任何定域隐变量理论都无法复现量子力学全部预言，奠定量子信息理论基础。\
3. CERN理论物理\
长期在CERN从事粒子物理与量子场论研究，同时在量子力学基础问题上做出里程碑贡献。`
},
{
  key: 'aspect',
  name: '阿兰·阿斯佩',
  nameEn: 'ALAIN ASPECT',
  title: '量子纠缠实验·诺贝尔物理学奖',
  years: '1947 — · FRA',
  country: 'FRA',
  fallback: '阿',
  color: '#e8f0ff',
  x: 0.315,
  y: 0.913,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `实验最终裁决了爱因斯坦与玻尔关于量子力学的争论。`,
  desc: `阿兰·阿斯佩（Alain Aspect，1947年6月15日－），法国物理学家，2022年与克劳泽、蔡林格因量子纠缠光子实验共获诺贝尔物理学奖。他的实验精确验证了贝尔不等式破坏。`,
  contrib: `1. 贝尔不等式实验\
1981-1982年他完成一系列光子纠缠实验，以高统计显著性证明贝尔不等式被破坏，支持量子力学非定域性。\
2. 实验闭合性改进\
其实验逐步关闭探测效率、局域性等漏洞，为后续 loophole-free 实验奠定基础。\
3. 原子光学\
在玻色-爱因斯坦凝聚、原子激光、量子模拟等领域也有重要贡献。`
},
{
  key: 'zeilinger',
  name: '安东·蔡林格',
  nameEn: 'ANTON ZEILINGER',
  title: '量子信息先驱·诺贝尔物理学奖',
  years: '1945 — · AUT',
  country: 'AUT',
  fallback: '蔡',
  color: '#e8f0ff',
  x: 0.102,
  y: 0.503,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `量子信息让纠缠从哲学问题变成技术资源。`,
  desc: `安东·蔡林格（Anton Zeilinger，1945年5月20日－），奥地利量子物理学家，2022年与克劳泽、阿斯佩因量子纠缠实验共获诺贝尔物理学奖。他是量子信息科学的先驱之一。`,
  contrib: `1. 量子隐形传态\
1997年他团队首次实现光子的量子隐形传态，是量子通信的重要里程碑。\
2. 量子纠缠分发\
开展长距离量子纠缠分发实验，包括卫星量子通信，推动量子网络的实用化。\
3. 量子信息科学\
在量子密码、量子计算、量子基础检验等方面做出多项开创性贡献。`
},
{
  key: 'mulliken',
  name: '罗伯特·马利肯',
  nameEn: 'ROBERT MULLIKEN',
  title: '分子轨道理论·诺贝尔化学奖',
  years: '1896 — 1986 · USA',
  country: 'USA',
  fallback: '马',
  color: '#e8f0ff',
  x: 0.888,
  y: 0.752,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `分子轨道的思想，让化学从经验走向量子。`,
  desc: `罗伯特·桑德森·马利肯（Robert Sanderson Mulliken，1896年6月7日－1986年10月31日），美国化学家、物理学家，1966年因对化学键与分子轨道理论的贡献获诺贝尔化学奖。他奠定了量子化学的理论基础。`,
  contrib: `1. 分子轨道理论\
他发展分子轨道（MO）理论，用原子轨道的线性组合描述分子电子结构，成为现代量子化学核心方法。\
2. 电负性标度\
提出马利肯电负性标度，将电离能与电子亲和能结合，量化原子吸引电子的能力。\
3. 光谱学与化学键\
系统研究分子光谱，建立电子态符号与能级分析方法，深刻影响化学键理论。`
},
{
  key: 'pedersen',
  name: '查尔斯·佩德森',
  nameEn: 'CHARLES PEDERSEN',
  title: '冠醚与超分子化学·诺贝尔化学奖',
  years: '1904 — 1989 · USA/KOR',
  country: 'USA/KOR',
  fallback: '佩',
  color: '#e8f0ff',
  x: 0.092,
  y: 0.196,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `冠醚让离子有了可以选择的分子家园。`,
  desc: `查尔斯·约翰·佩德森（Charles John Pedersen，1904年10月3日－1989年10月26日），美国有机化学家，1987年与克拉姆、莱恩因对超分子化学的贡献共获诺贝尔化学奖。他出生于韩国，父亲是挪威裔美国人。`,
  contrib: `1. 冠醚发现\
1967年他意外合成并发现冠醚，这类大环分子可选择性络合金属离子，开创主客体化学。\
2. 超分子化学奠基\
冠醚的发现启发了分子识别、自组装和超分子化学的发展，为酶模拟和传感技术提供基础。\
3. 诺贝尔奖\
1987年与克拉姆、莱恩共享诺贝尔化学奖，表彰他们在超分子化学领域的开创性工作。`
},
{
  key: 'cram',
  name: '唐纳德·克拉姆',
  nameEn: 'DONALD CRAM',
  title: '主客体化学·诺贝尔化学奖',
  years: '1919 — 2001 · USA',
  country: 'USA',
  fallback: '克',
  color: '#e8f0ff',
  x: 0.705,
  y: 0.689,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `分子也可以被设计成能够识别彼此的客体与主体。`,
  desc: `唐纳德·詹姆斯·克拉姆（Donald James Cram，1919年4月22日－2001年6月17日），美国有机化学家，1987年与佩德森、莱恩因对超分子化学的贡献共获诺贝尔化学奖。他发展了主客体化学与分子识别理论。`,
  contrib: `1. 主客体化学\
他设计合成了一系列具有特定空腔的冠醚类似物（穴醚），能选择性包合离子和分子。\
2. 分子识别\
提出并验证了分子识别的概念，为酶模拟、药物设计和分子机器提供理论基础。\
3. 诺贝尔奖\
1987年与佩德森、莱恩共获诺贝尔化学奖，表彰超分子化学领域的开创性贡献。`
},
{
  key: 'lehn',
  name: '让-马里·莱恩',
  nameEn: 'JEAN-MARIE LEHN',
  title: '超分子化学·诺贝尔化学奖',
  years: '1939 — · FRA',
  country: 'FRA',
  fallback: '兰',
  color: '#e8f0ff',
  x: 0.901,
  y: 0.110,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `超分子化学让分子从个体走向集体行为。`,
  desc: `让-马里·莱恩（Jean-Marie Lehn，1939年9月30日－），法国化学家，1987年与佩德森、克拉姆因对超分子化学的贡献共获诺贝尔化学奖。他提出了超分子化学的完整概念框架。`,
  contrib: `1. 穴醚与分子识别\
合成穴醚并研究其选择性络合行为，发展分子识别的热力学与动力学理论。\
2. 超分子化学\
提出“超分子化学”概念，研究分子间非共价键相互作用、自组装和自适应化学系统。\
3. 自适应化学\
近年提出“自适应化学”，探索动态组合化学与复杂分子系统的自组织行为。`
},
{
  key: 'knowles',
  name: '威廉·诺尔斯',
  nameEn: 'WILLIAM KNOWLES',
  title: '不对称氢化·诺贝尔化学奖',
  years: '1917 — 2012 · USA',
  country: 'USA',
  fallback: '诺',
  color: '#e8f0ff',
  x: 0.579,
  y: 0.812,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `手性催化让化学家像雕刻家一样塑造分子。`,
  desc: `威廉·斯坦迪什·诺尔斯（William Standish Knowles，1917年6月1日－2012年6月13日），美国化学家，2001年与野依良治、夏普莱斯因对手性催化氢化反应的研究共获诺贝尔化学奖。`,
  contrib: `1. 不对称氢化\
1968年他发明首个实用的不对称氢化催化剂，可高选择性地合成手性氨基酸。\
2. L-DOPA合成\
他的方法被用于工业化生产L-DOPA，治疗帕金森病，是不对称合成的里程碑应用。\
3. 诺贝尔奖\
2001年与野依良治、夏普莱斯共享诺贝尔化学奖，表彰对手性催化反应的贡献。`
},
{
  key: 'sharpless',
  name: '巴里·夏普莱斯',
  nameEn: 'K. BARRY SHARPLESS',
  title: '点击化学·双诺贝尔化学奖',
  years: '1941 — · USA',
  country: 'USA',
  fallback: '沙',
  color: '#e8f0ff',
  x: 0.798,
  y: 0.745,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `点击化学让分子连接变得像搭积木一样简单。`,
  desc: `卡尔·巴里·夏普莱斯（K. Barry Sharpless，1941年4月28日－），美国化学家，2001年与诺尔斯、野依良治因手性催化研究获诺贝尔化学奖，2022年再次因点击化学与贝尔托齐、梅尔达尔共获诺贝尔化学奖，成为第五位两获诺贝尔化学奖者。`,
  contrib: `1. 不对称催化\
发展锇催化不对称双羟基化反应（AD反应）和氨基羟基化反应，奠定现代不对称合成基础。\
2. 点击化学\
2001年提出点击化学概念，利用高效、高选择性的反应快速构建分子，广泛应用于药物研发和材料科学。\
3. 双诺贝尔奖\
2001年和2022年两次获诺贝尔化学奖，分别表彰不对称催化和点击化学的开创性贡献。`
},
{
  key: 'hodgkin',
  name: '多萝西·霍奇金',
  nameEn: 'DOROTHY HODGKIN',
  title: '蛋白质晶体学·诺贝尔化学奖',
  years: '1910 — 1994 · UK',
  country: 'UK',
  fallback: '霍',
  color: '#e8f0ff',
  x: 0.906,
  y: 0.670,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `X射线晶体学让我们看见生命的分子机器。`,
  desc: `多萝西·玛丽·克劳福特·霍奇金（Dorothy Mary Crowfoot Hodgkin，1910年5月12日－1994年7月29日），英国化学家、X射线晶体学家，1964年因测定重要生物分子结构获诺贝尔化学奖。她是英国首位获诺贝尔科学奖的女性。`,
  contrib: `1. 青霉素结构\
1945年她首次测定青霉素的三维分子结构，推动抗生素化学研究。\
2. 维生素B12结构\
1956年完成维生素B12晶体结构测定，是当时最复杂的非蛋白质分子结构之一。\
3. 胰岛素结构\
1969年她测定胰岛素晶体结构，为理解糖尿病和蛋白质结构生物学做出里程碑贡献。`
},
{
  key: 'franklin',
  name: '罗莎琳·富兰克林',
  nameEn: 'ROSALIND FRANKLIN',
  title: 'DNA双螺旋结构先驱',
  years: '1920 — 1958 · UK',
  country: 'UK',
  fallback: '富',
  color: '#e8f0ff',
  x: 0.853,
  y: 0.623,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `DNA的衍射图样，是解开生命密码的钥匙。`,
  desc: `罗莎琳·埃尔西·富兰克林（Rosalind Elsie Franklin，1920年7月25日－1958年4月16日），英国物理化学家、X射线晶体学家。她的DNA X射线衍射数据“51号照片”为沃森和克里克提出双螺旋结构提供了关键证据，但她本人未获诺贝尔奖。`,
  contrib: `1. DNA结构数据\
她在伦敦国王学院拍摄的DNA X射线衍射照片“51号照片”揭示了DNA的螺旋结构特征。\
2. 烟草花叶病毒\
对烟草花叶病毒的结构研究奠定了病毒晶体学基础。\
3. 煤与碳结构\
早期研究煤炭微孔结构，为理解碳材料和化石燃料提供重要见解。`
},
{
  key: 'wilkins',
  name: '莫里斯·威尔金斯',
  nameEn: 'MAURICE WILKINS',
  title: 'DNA结构与X射线衍射·诺贝尔生理学奖',
  years: '1916 — 2004 · NZ/UK',
  country: 'NZ/UK',
  fallback: '威',
  color: '#e8f0ff',
  x: 0.692,
  y: 0.894,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `X射线揭示的不仅是分子形状，还有生命的逻辑。`,
  desc: `莫里斯·休·弗雷德里克·威尔金斯（Maurice Hugh Frederick Wilkins，1916年12月15日－2004年10月5日），新西兰出生的英国分子生物学家，1962年与沃森、克里克因对DNA结构的贡献共获诺贝尔生理学或医学奖。`,
  contrib: `1. DNA X射线衍射\
他在国王学院领导DNA的X射线衍射研究，其数据为沃森和克里克建立双螺旋模型提供重要支持。\
2. 分子生物学发展\
作为生物物理学的先驱，他推动了X射线晶体学在生物大分子结构研究中的应用。\
3. 诺贝尔奖\
1962年与沃森、克里克共获诺贝尔生理学或医学奖，表彰DNA双螺旋结构的发现。`
},
{
  key: 'muller',
  name: '赫尔曼·穆勒',
  nameEn: 'HERMANN MULLER',
  title: '辐射遗传学·诺贝尔生理学奖',
  years: '1890 — 1967 · USA',
  country: 'USA',
  fallback: '穆',
  color: '#e8f0ff',
  x: 0.473,
  y: 0.575,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `辐射能改变基因，也能改变我们对遗传的理解。`,
  desc: `赫尔曼·约瑟夫·穆勒（Hermann Joseph Muller，1890年12月21日－1967年4月5日），美国遗传学家，1946年因发现X射线诱导突变获诺贝尔生理学或医学奖。他是辐射遗传学的奠基人。`,
  contrib: `1. X射线诱变\
1926年他证明X射线能显著提高果蝇突变率，首次将物理因素与遗传变异直接联系。\
2. 辐射遗传学\
创立辐射遗传学领域，研究电离辐射对生物遗传物质的影响，为辐射防护提供科学依据。\
3. 优生与社会关怀\
关注辐射对人类健康的影响，积极倡导核试验限制与辐射安全标准。`
},
{
  key: 'beadle',
  name: '乔治·比德尔',
  nameEn: 'GEORGE BEADLE',
  title: '一个基因一个酶·诺贝尔生理学奖',
  years: '1903 — 1989 · USA',
  country: 'USA',
  fallback: '比',
  color: '#e8f0ff',
  x: 0.644,
  y: 0.394,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `一个基因对应一种酶，这是生命化学的核心法则。`,
  desc: `乔治·威尔斯·比德尔（George Wells Beadle，1903年10月22日－1989年6月9日），美国遗传学家，1958年与塔特姆、莱德伯格因发现基因调控酶合成共获诺贝尔生理学或医学奖。`,
  contrib: `1. 一个基因一个酶\
他与塔特姆通过红色面包霉实验提出“一个基因一个酶”假说，揭示基因与蛋白质功能的关系。\
2. 生化遗传学\
开创生化遗传学领域，将遗传学与生物化学结合，为分子生物学奠基。\
3. 加州理工学院领导\
任加州理工学院院长期间推动分子生物学发展，塑造了该校科学研究方向。`
},
{
  key: 'tatum',
  name: '爱德华·塔特姆',
  nameEn: 'EDWARD TATUM',
  title: '生化遗传学·诺贝尔生理学奖',
  years: '1909 — 1975 · USA',
  country: 'USA',
  fallback: '塔',
  color: '#e8f0ff',
  x: 0.682,
  y: 0.573,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `基因通过控制化学反应来决定生命的性状。`,
  desc: `爱德华·劳里·塔特姆（Edward Lawrie Tatum，1909年12月14日－1975年11月5日），美国遗传学家，1958年与比德尔、莱德伯格因对基因调控酶合成的研究共获诺贝尔生理学或医学奖。`,
  contrib: `1. 生化遗传学\
他与比德尔利用红色面包霉研究营养缺陷型突变，证明基因通过控制酶来控制代谢。\
2. 细菌遗传学\
与莱德伯格合作证明细菌存在遗传重组，开创细菌遗传学研究。\
3. 诺贝尔奖\
1958年与比德尔、莱德伯格共获诺贝尔生理学或医学奖，表彰其在生化遗传学方面的贡献。`
},
{
  key: 'lederberg',
  name: '约书亚·莱德伯格',
  nameEn: 'JOSHUA LEDERBERG',
  title: '细菌遗传学·诺贝尔生理学奖',
  years: '1925 — 2008 · USA',
  country: 'USA',
  fallback: '莱',
  color: '#e8f0ff',
  x: 0.508,
  y: 0.816,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `细菌也有性，遗传信息可以在它们之间流动。`,
  desc: `约书亚·莱德伯格（Joshua Lederberg，1925年5月23日－2008年2月2日），美国分子生物学家，1958年与比德尔、塔特姆因发现细菌遗传物质重组共获诺贝尔生理学或医学奖。`,
  contrib: `1. 细菌接合\
1946年他证明细菌可以通过接合进行遗传物质交换，改变了细菌无性的传统观念。\
2. 转导与质粒\
发现噬菌体介导的遗传物质转移（转导）和细菌质粒，为抗生素耐药传播研究提供基础。\
3. 空间生物学\
后期研究外星生命探测和航天微生物学，为NASA行星保护计划提供科学指导。`
},
{
  key: 'jacob',
  name: '弗朗索瓦·雅各布',
  nameEn: 'FRANCOIS JACOB',
  title: '乳糖操纵子与基因调控·诺贝尔生理学奖',
  years: '1920 — 2013 · FRA',
  country: 'FRA',
  fallback: '雅',
  color: '#e8f0ff',
  x: 0.636,
  y: 0.931,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `生命通过调控基因表达来适应环境的变化。`,
  desc: `弗朗索瓦·雅各布（François Jacob，1920年6月17日－2013年4月19日），法国生物学家，1965年与莫诺、雷沃夫因发现酶与病毒合成的遗传调控机制共获诺贝尔生理学或医学奖。`,
  contrib: `1. 乳糖操纵子\
与莫诺提出乳糖操纵子模型，揭示原核生物基因表达调控的分子机制。\
2. 信使RNA\
参与提出信使RNA作为遗传信息从DNA到蛋白质中介的概念。\
3. 调控理论\
提出变构调节等概念，为理解酶活性调控和细胞信号转导奠定基础。`
},
{
  key: 'monod',
  name: '雅克·莫诺',
  nameEn: 'JACQUES MONOD',
  title: '基因调控与乳糖操纵子·诺贝尔生理学奖',
  years: '1910 — 1976 · FRA',
  country: 'FRA',
  fallback: '莫',
  color: '#e8f0ff',
  x: 0.083,
  y: 0.930,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `生命是边界的产物，而边界由调控来维持。`,
  desc: `雅克·吕西安·莫诺（Jacques Lucien Monod，1910年2月9日－1976年5月31日），法国生物学家，1965年与雅各布、雷沃夫因对基因调控的研究共获诺贝尔生理学或医学奖。他也是一位重要的科学哲学家。`,
  contrib: `1. 乳糖操纵子\
与雅各布共同发展乳糖操纵子模型，提出操纵基因、启动子、阻遏蛋白等调控概念。\
2. 变构调节\
提出酶活性的变构调节机制，解释代谢途径中反馈抑制的分子基础。\
3. 科学哲学\
著有《偶然性与必然性》，探讨生物学中的目的性、演化与伦理问题。`
},
{
  key: 'delbruck',
  name: '马克斯·德尔布吕克',
  nameEn: 'MAX DELBRUCK',
  title: '噬菌体与分子生物学·诺贝尔生理学奖',
  years: '1906 — 1981 · GER/USA',
  country: 'GER/USA',
  fallback: '德',
  color: '#e8f0ff',
  x: 0.650,
  y: 0.062,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `病毒是研究生命最简单形式的理想模型。`,
  desc: `马克斯·路德维希·亨宁·德尔布吕克（Max Ludwig Henning Delbrück，1906年9月4日－1981年3月9日），德裔美国生物学家、物理学家，1969年与卢里亚、赫尔希因发现病毒复制机制与遗传结构共获诺贝尔生理学或医学奖。`,
  contrib: `1. 噬菌体研究\
将噬菌体作为研究遗传和复制的模型系统，开创分子生物学新纪元。\
2. 噬菌体小组\
创建噬菌体小组，吸引卢里亚、赫尔希等科学家，形成分子生物学研究核心社群。\
3. 诺贝尔贡献\
1969年与卢里亚、赫尔希共获诺贝尔生理学或医学奖，表彰病毒遗传结构研究。`
},
{
  key: 'brenner',
  name: '悉尼·布伦纳',
  nameEn: 'SYDNEY BRENNER',
  title: '细胞凋亡与线虫模型·诺贝尔生理学奖',
  years: '1927 — 2019 · RSA/UK',
  country: 'RSA/UK',
  fallback: '布',
  color: '#e8f0ff',
  x: 0.103,
  y: 0.925,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `线虫虽小，却能告诉我们关于生命的大道理。`,
  desc: `悉尼·布伦纳（Sydney Brenner，1927年1月13日－2019年4月5日），南非出生的英国生物学家，2002年与苏尔斯顿、霍维茨因对器官发育和细胞程序性死亡的遗传调控研究共获诺贝尔生理学或医学奖。`,
  contrib: `1. 线虫模型\
选择秀丽隐杆线虫作为模式生物，建立其遗传学和细胞谱系研究方法。\
2. 细胞凋亡\
揭示细胞程序性死亡（凋亡）的遗传调控机制，为癌症和发育生物学研究提供基础。\
3. 分子生物学先驱\
参与破解遗传密码，提出mRNA的概念，是现代分子生物学的重要奠基人。`
},
{
  key: 'gurdon',
  name: '约翰·戈登',
  nameEn: 'JOHN GURDON',
  title: '体细胞核移植与克隆·诺贝尔生理学奖',
  years: '1933 — · UK',
  country: 'UK',
  fallback: '戈',
  color: '#e8f0ff',
  x: 0.936,
  y: 0.720,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `分化的细胞依然可以回到生命的起点。`,
  desc: `约翰·伯特兰·戈登（John Bertrand Gurdon，1933年10月2日－），英国发育生物学家，2012年与山中伸弥因发现成熟细胞可被重编程为多能细胞共获诺贝尔生理学或医学奖。`,
  contrib: `1. 体细胞核移植\
1962年他首次将青蛙肠上皮细胞的细胞核移植到去核卵细胞中，培育出正常蝌蚪，证明分化细胞核仍具全能性。\
2. 克隆技术奠基\
该实验是动物克隆技术的里程碑，为1996年多莉羊的诞生奠定理论基础。\
3. 细胞重编程\
他的工作启发了诱导多能干细胞（iPSC）研究，山中伸弥在此基础上实现哺乳动物细胞重编程。`
},
{
  key: 'doudna',
  name: '珍妮弗·杜德纳',
  nameEn: 'JENNIFER DOUDNA',
  title: 'CRISPR基因编辑·诺贝尔化学奖',
  years: '1964 — · USA',
  country: 'USA',
  fallback: '杜',
  color: '#e8f0ff',
  x: 0.064,
  y: 0.403,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `CRISPR让我们得以重写生命的源代码。`,
  desc: `珍妮弗·安妮·杜德纳（Jennifer Anne Doudna，1964年2月19日－），美国生物化学家，2020年与埃玛纽埃尔·夏彭蒂耶因开发CRISPR-Cas9基因编辑技术共获诺贝尔化学奖。`,
  contrib: `1. CRISPR-Cas9机制\
她与夏彭蒂耶阐明Cas9蛋白通过向导RNA靶向切割DNA的分子机制。\
2. 基因编辑工具\
将CRISPR-Cas9发展为简便、高效的基因编辑工具， revolutionized 生物医学研究。\
3. 伦理倡导\
积极倡导基因编辑的伦理规范，推动负责任地使用基因编辑技术。`
},
{
  key: 'charpentier',
  name: '埃玛纽埃尔·夏彭蒂耶',
  nameEn: 'EMMANUELLE CHARPENTIER',
  title: 'CRISPR-Cas9·诺贝尔化学奖',
  years: '1968 — · FRA',
  country: 'FRA',
  fallback: '夏',
  color: '#e8f0ff',
  x: 0.509,
  y: 0.642,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `细菌的免疫系统，成了人类编辑基因的手术刀。`,
  desc: `埃玛纽埃尔·玛丽·夏彭蒂耶（Emmanuelle Marie Charpentier，1968年12月11日－），法国微生物学家、生物化学家，2020年与杜德纳因开发CRISPR-Cas9基因编辑技术共获诺贝尔化学奖。`,
  contrib: `1. tracrRNA发现\
她发现tracrRNA对CRISPR-Cas9系统的成熟与靶向切割至关重要。\
2. CRISPR-Cas9开发\
与杜德纳合作，将Cas9和向导RNA系统改造为可编程的基因编辑工具。\
3. 病原菌研究\
长期研究链球菌等病原菌的分子机制，为理解CRISPR系统的生物学功能提供基础。`
},
{
  key: 'zhangfeng',
  name: '张锋',
  nameEn: 'FENG ZHANG',
  title: 'CRISPR基因编辑技术先驱',
  years: '1982 — · CHN/USA',
  country: 'CHN/USA',
  fallback: '张',
  color: '#e8f0ff',
  x: 0.474,
  y: 0.072,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `基因编辑的力量在于精确，而精确来自理解。`,
  desc: `张锋（1982年10月22日－），美籍华裔生物学家，CRISPR基因编辑技术的重要先驱之一。他在哺乳动物细胞中率先实现CRISPR-Cas9基因编辑，并开发了多种基于CRISPR的新型工具。`,
  contrib: `1. 哺乳动物CRISPR编辑\
2013年他首次证明CRISPR-Cas9可在哺乳动物细胞中高效编辑基因组，推动技术向生物医学应用转化。\
2. 基因编辑工具开发\
开发了Cpf1/Cas12a、碱基编辑、先导编辑等多种新型基因编辑系统。\
3. 生物技术创业\
创立Editas Medicine等多家生物技术公司，推动基因治疗从实验室走向临床。`
},
{
  key: 'atiyah',
  name: '迈克尔·阿蒂亚',
  nameEn: 'MICHAEL ATIYAH',
  title: '阿蒂亚-辛格指标定理·菲尔兹奖',
  years: '1929 — 2019 · UK',
  country: 'UK',
  fallback: '阿',
  color: '#e8f0ff',
  x: 0.793,
  y: 0.164,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `数学之美在于它揭示了不同领域之间深刻的联系。`,
  desc: `迈克尔·弗朗西斯·阿蒂亚（Michael Francis Atiyah，1929年4月22日－2019年1月11日），英国数学家，1966年获菲尔兹奖，2004年与辛格共获阿贝尔奖。他是20世纪最具影响力的数学家之一。`,
  contrib: `1. 阿蒂亚-辛格指标定理\
1963年与辛格证明指标定理，建立微分算子解析性质与拓扑不变量之间的深刻联系。\
2. K理论\
发展拓扑K理论，为代数拓扑和数学物理提供新工具。\
3. 几何与物理\
推动数学与理论物理的交叉，对规范场论、弦论和瞬子等方向影响深远。`
},
{
  key: 'mirzakhani',
  name: '玛丽安·米尔札哈尼',
  nameEn: 'MARYAM MIRZAKHANI',
  title: '菲尔兹奖得主·动力系统与几何',
  years: '1977 — 2017 · IRN/USA',
  country: 'IRN/USA',
  fallback: '米',
  color: '#e8f0ff',
  x: 0.592,
  y: 0.354,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `数学难题如同迷宫，我喜欢在未知中摸索。`,
  desc: `玛丽安·米尔札哈尼（Maryam Mirzakhani，1977年5月3日－2017年7月15日），伊朗数学家，2014年获菲尔兹奖，是首位获此殊荣的女性和伊朗人。她研究双曲几何、泰希米勒理论和动力系统。`,
  contrib: `1. 泰希米勒理论\
她在泰希米勒空间、模空间的动力学和几何方面做出开创性贡献。\
2. 曲面动力学\
研究黎曼曲面上测地流的遍历性质，解决了长期悬而未决的问题。\
3. 菲尔兹奖\
2014年获菲尔兹奖，表彰其对黎曼曲面及其模空间动力学和几何的贡献。`
},
{
  key: 'serre',
  name: '让-皮埃尔·塞尔',
  nameEn: 'JEAN-PIERRE SERRE',
  title: '代数拓扑与代数几何·菲尔兹奖',
  years: '1926 — · FRA',
  country: 'FRA',
  fallback: '塞',
  color: '#e8f0ff',
  x: 0.139,
  y: 0.765,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `数学是发现结构与模式的艺术。`,
  desc: `让-皮埃尔·塞尔（Jean-Pierre Serre，1926年9月15日－），法国数学家，1954年获菲尔兹奖，是历史上最年轻的菲尔兹奖得主。他在代数拓扑、代数几何和数论等领域影响深远。`,
  contrib: `1. 同伦群计算\
1950年代他计算球面高阶同伦群，解决代数拓扑核心问题。\
2. 层论与代数几何\
将层论和谱序列引入代数几何，为格罗滕迪克的现代代数几何计划铺路。\
3. 数论贡献\
在伽罗瓦表示、模形式、椭圆曲线等数论问题上做出重要贡献。`
},
{
  key: 'milnor',
  name: '约翰·米尔诺',
  nameEn: 'JOHN MILNOR',
  title: '微分拓扑与动力系统·菲尔兹奖/阿贝尔奖',
  years: '1931 — · USA',
  country: 'USA',
  fallback: '米',
  color: '#e8f0ff',
  x: 0.830,
  y: 0.509,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `拓扑学告诉我们，形状可以有我们意想不到的性质。`,
  desc: `约翰·威尔拉德·米尔诺（John Willard Milnor，1931年2月20日－），美国数学家，1962年获菲尔兹奖，2011年获阿贝尔奖。他在微分拓扑、动力系统、几何学和代数等领域贡献卓著。`,
  contrib: `1. 怪球面\
1956年他证明存在与标准七维球面同胚但不微分同胚的“怪球面”，震惊拓扑学界。\
2. 微分拓扑奠基\
对微分拓扑、示性类、莫尔斯理论的发展做出奠基性贡献。\
3. 动力系统\
后期研究复动力系统，提出“米尔诺吸引子”等概念，影响深远。`
},
{
  key: 'hamilton',
  name: '理查德·哈密顿',
  nameEn: 'RICHARD HAMILTON',
  title: '里奇流与庞加莱猜想',
  years: '1943 — · USA',
  country: 'USA',
  fallback: '哈',
  color: '#e8f0ff',
  x: 0.514,
  y: 0.260,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `里奇流让几何在热力学式的演化中自我简化。`,
  desc: `理查德·斯特雷特·哈密顿（Richard Streit Hamilton，1943年1月10日－），美国数学家，以发明里奇流（Ricci flow）闻名。里奇流是佩雷尔曼证明庞加莱猜想和几何化猜想的核心工具。`,
  contrib: `1. 里奇流\
1982年他提出里奇流方程，将曲率演化类比热扩散，用于研究流形的几何结构。\
2. 奇点分析\
发展了里奇流的奇点理论与手术技术，为三维流形分类提供工具。\
3. 庞加莱猜想\
佩雷尔曼在其工作的基础上证明了庞加莱猜想和瑟斯顿几何化猜想。`
},
{
  key: 'tiangang',
  name: '田刚',
  nameEn: 'GANG TIAN',
  title: '辛几何与几何分析',
  years: '1958 — · CHN',
  country: 'CHN',
  fallback: '田',
  color: '#e8f0ff',
  x: 0.283,
  y: 0.307,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `几何分析连接了分析与几何两个世界。`,
  desc: `田刚（1958年11月24日－），中国数学家，中国科学院院士，研究领域为辛几何、几何分析和数学物理。他在凯勒-爱因斯坦度量、田刚稳定性条件等方面做出重要贡献。`,
  contrib: `1. 凯勒-爱因斯坦度量\
在凯勒-爱因斯坦方程可解性、稳定性条件方面做出奠基性工作，提出田刚稳定性条件。\
2. 辛几何\
在Gromov-Witten不变量、量子上同调和辛流形拓扑方面贡献卓著。\
3. 中国数学发展\
长期担任北京大学数学科学学院教授，推动中国基础数学研究和人才培养。`
},
{
  key: 'wangxiaoyun',
  name: '王小云',
  nameEn: 'XIAOYUN WANG',
  title: '密码学·未来科学大奖',
  years: '1966 — · CHN',
  country: 'CHN',
  fallback: '王',
  color: '#e8f0ff',
  x: 0.669,
  y: 0.706,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `密码学的安全感，建立在数学难题的坚固之上。`,
  desc: `王小云（1966年8月25日－），中国密码学家，中国科学院院士，2017年获未来科学大奖数学与计算机科学奖。她在密码哈希函数安全性分析方面做出突破性贡献。`,
  contrib: `1. 哈希函数破解\
2004-2005年她领导团队首次给出MD5、SHA-1等广泛使用的哈希函数的有效碰撞攻击。\
2. 密码算法设计\
参与设计中国商用密码哈希函数SM3，该算法成为国家密码标准。\
3. 未来科学大奖\
2017年获未来科学大奖数学与计算机科学奖，表彰她在密码学中的开创性贡献。`
},
{
  key: 'xuchenyang',
  name: '许晨阳',
  nameEn: 'CHENYANG XU',
  title: '代数几何·未来科学大奖',
  years: '1981 — · CHN',
  country: 'CHN',
  fallback: '许',
  color: '#e8f0ff',
  x: 0.650,
  y: 0.819,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `代数几何的抽象之美，在于它能回答具体的问题。`,
  desc: `许晨阳（1981年4月25日－），中国数学家，研究领域为代数几何，特别是双有理几何。2017年获未来科学大奖数学与计算机科学奖，是该奖项最年轻获得者之一。`,
  contrib: `1. 双有理几何\
在一般型代数簇、对数典范阈值、K-稳定性等双有理几何核心问题上做出重要贡献。\
2. 稳定性理论\
发展了Fano簇的K-稳定性理论，与田刚等人共同推动凯勒-爱因斯坦度量研究。\
3. 国际影响\
在麻省理工学院、普林斯顿大学任教后回国，推动中国代数几何研究与国际接轨。`
},
{
  key: 'yunzhiwei',
  name: '恽之玮',
  nameEn: 'ZHIWEI YUN',
  title: '表示论与数论',
  years: '1982 — · CHN/USA',
  country: 'CHN/USA',
  fallback: '恽',
  color: '#e8f0ff',
  x: 0.866,
  y: 0.158,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `表示论与数论的交汇，藏着对称性的深层密码。`,
  desc: `恽之玮（1982年11月2日－），中国数学家，研究领域为表示论、代数几何和数论。他在朗兰兹纲领、志村簇和自守形式方面做出重要贡献。`,
  contrib: `1. 朗兰兹纲领\
在朗兰兹纲领的几何方面做出多项突破，推进表示论与数论的交叉。\
2. 志村簇与上同调\
研究志村簇的l-adic上同调与伽罗瓦表示，解决相关重要猜想。\
3. 国际荣誉\
2016年与张伟合作获SASTRA拉马努金奖，在国际数学界产生重要影响。`
},
{
  key: 'hinton',
  name: '杰弗里·辛顿',
  nameEn: 'GEOFFREY HINTON',
  title: '深度学习之父·图灵奖',
  years: '1947 — · UK/CAN',
  country: 'UK/CAN',
  fallback: '辛',
  color: '#e8f0ff',
  x: 0.888,
  y: 0.879,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `理解大脑如何工作，是构建真正智能机器的最佳途径。`,
  desc: `杰弗里·埃弗里斯特·辛顿（Geoffrey Everest Hinton，1947年12月6日－），英裔加拿大计算机科学家，2018年与杨立昆、约书亚·本吉奥因对深度学习的贡献共获图灵奖，被誉为“深度学习之父”。`,
  contrib: `1. 反向传播算法\
与等人共同发展反向传播算法，使训练多层神经网络成为可能。\
2. 深度学习复兴\
2006年提出深度信念网络，开启深度学习复兴，推动语音识别、图像识别突破。\
3. 图灵奖\
2018年与杨立昆、本吉奥共获图灵奖，表彰对深度学习的奠基性贡献。`
},
{
  key: 'lecun',
  name: '杨立昆',
  nameEn: 'YANN LECUN',
  title: '深度学习与卷积网络·图灵奖',
  years: '1960 — · FRA',
  country: 'FRA',
  fallback: '杨',
  color: '#e8f0ff',
  x: 0.198,
  y: 0.302,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `卷积神经网络让机器拥有了视觉的眼睛。`,
  desc: `杨立昆（Yann LeCun，1960年7月21日－），法国计算机科学家，2018年与辛顿、本吉奥因对深度学习的贡献共获图灵奖。他是卷积神经网络和计算机视觉领域的先驱。`,
  contrib: `1. 卷积神经网络\
1989年他设计LeNet，首个成功应用的卷积神经网络，广泛用于银行支票识别。\
2. 深度学习框架\
推动Torch等开源深度学习框架发展，促进学术界与工业界的研究。\
3. 图灵奖\
2018年与辛顿、本吉奥共获图灵奖，表彰对深度学习与计算机视觉的贡献。`
},
{
  key: 'bengio',
  name: '约书亚·本吉奥',
  nameEn: 'YOSHUA BENGIO',
  title: '深度学习三巨头之一·图灵奖',
  years: '1964 — · CAN',
  country: 'CAN',
  fallback: '本',
  color: '#e8f0ff',
  x: 0.765,
  y: 0.362,
  radius: 3.2,
  brightness: 0.82,
  twinkleSpeed: 0.022,
  phase: 0,
  hasDetail: false,
  quote: `让机器学会表示世界，是人工智能的核心挑战。`,
  desc: `约书亚·本吉奥（Yoshua Bengio，1964年3月5日－），加拿大计算机科学家，2018年与辛顿、杨立昆因对深度学习的贡献共获图灵奖。他在神经网络、表示学习和自然语言处理方面贡献卓著。`,
  contrib: `1. 表示学习\
发展分布式表示、词嵌入和循环神经网络，推动自然语言处理革命。\
2. 生成模型\
提出去噪自编码器、生成对抗网络等思想，推动无监督学习和生成模型发展。\
3. 图灵奖\
2018年与辛顿、杨立昆共获图灵奖，表彰对深度学习的奠基性贡献。`
}
  ];

  const extraTimelineData = {
  brattain: [
    { year: '1902', text: '2月10日出生于中国厦门，父亲为美国传教士' },
    { year: '1929', text: '获明尼苏达大学物理学博士学位' },
    { year: '1947', text: '与巴丁共同发明首个点接触晶体管' },
    { year: '1956', text: '因晶体管研究获诺贝尔物理学奖' },
  ],
  shockley: [
    { year: '1910', text: '出生于英国伦敦，后移居美国加州' },
    { year: '1936', text: '获麻省理工学院物理学博士学位' },
    { year: '1947', text: '领导贝尔实验室团队完成晶体管研发' },
    { year: '1956', text: '获诺贝尔物理学奖，同年创办肖克利半导体实验室' },
  ],
  englert: [
    { year: '1932', text: '出生于比利时埃特贝克' },
    { year: '1959', text: '获布鲁塞尔自由大学物理学博士学位' },
    { year: '1964', text: '与布绕特提出对称性自发破缺与质量起源机制' },
    { year: '2013', text: '因希格斯机制获诺贝尔物理学奖' },
  ],
  thooft: [
    { year: '1946', text: '出生于荷兰登海尔德' },
    { year: '1972', text: '在乌得勒支大学获博士学位' },
    { year: '1971', text: '证明非阿贝尔规范场论可重整化' },
    { year: '1999', text: '与导师韦尔特曼共获诺贝尔物理学奖' },
  ],
  veltman: [
    { year: '1931', text: '出生于荷兰瓦尔韦克' },
    { year: '1963', text: '获乌得勒支大学物理学博士学位' },
    { year: '1971', text: '指导特·胡夫特完成规范场论可重整化证明' },
    { year: '1999', text: '获诺贝尔物理学奖' },
  ],
  glashow: [
    { year: '1932', text: '出生于美国纽约' },
    { year: '1958', text: '获哈佛大学物理学博士学位' },
    { year: '1961', text: '提出电弱统一理论的SU(2)×U(1)模型' },
    { year: '1979', text: '获诺贝尔物理学奖' },
  ],
  weinberg: [
    { year: '1933', text: '出生于美国纽约' },
    { year: '1957', text: '获普林斯顿大学物理学博士学位' },
    { year: '1967', text: '发表电弱统一理论经典论文' },
    { year: '1979', text: '获诺贝尔物理学奖' },
  ],
  salam: [
    { year: '1926', text: '出生于英属印度旁遮普（今巴基斯坦）' },
    { year: '1952', text: '获剑桥大学博士学位' },
    { year: '1964', text: '在意大利的里雅斯特创建国际理论物理中心' },
    { year: '1979', text: '获诺贝尔物理学奖' },
  ],
  cronin: [
    { year: '1931', text: '出生于美国芝加哥' },
    { year: '1955', text: '获芝加哥大学物理学博士学位' },
    { year: '1964', text: '与菲奇共同发现CP破坏现象' },
    { year: '1980', text: '获诺贝尔物理学奖' },
  ],
  fitch: [
    { year: '1923', text: '出生于美国内布拉斯加州梅里曼' },
    { year: '1948', text: '获哥伦比亚大学物理学博士学位' },
    { year: '1964', text: '与克朗宁发现CP破坏' },
    { year: '1980', text: '获诺贝尔物理学奖' },
  ],
  richter: [
    { year: '1931', text: '出生于美国纽约布鲁克林' },
    { year: '1956', text: '获麻省理工学院物理学博士学位' },
    { year: '1974', text: '发现J/ψ粒子，开启粲夸克时代' },
    { year: '1976', text: '获诺贝尔物理学奖' },
  ],
  lederman: [
    { year: '1922', text: '出生于美国纽约' },
    { year: '1951', text: '获哥伦比亚大学物理学博士学位' },
    { year: '1962', text: '发现μ中微子' },
    { year: '1988', text: '获诺贝尔物理学奖' },
  ],
  perl: [
    { year: '1927', text: '出生于美国纽约' },
    { year: '1955', text: '获哥伦比亚大学物理学博士学位' },
    { year: '1975', text: '发现τ轻子' },
    { year: '1995', text: '获诺贝尔物理学奖' },
  ],
  reines: [
    { year: '1918', text: '出生于美国新泽西州帕特森' },
    { year: '1944', text: '获纽约大学物理学博士学位' },
    { year: '1956', text: '首次直接探测到中微子' },
    { year: '1995', text: '获诺贝尔物理学奖' },
  ],
  rubbia: [
    { year: '1934', text: '出生于意大利戈里齐亚' },
    { year: '1958', text: '获比萨大学物理学博士学位' },
    { year: '1983', text: '领导发现W和Z玻色子' },
    { year: '1984', text: '获诺贝尔物理学奖' },
  ],
  charpak: [
    { year: '1924', text: '出生于波兰达布罗瓦' },
    { year: '1954', text: '获巴黎法兰西学院博士学位' },
    { year: '1968', text: '发明多丝正比室' },
    { year: '1992', text: '获诺贝尔物理学奖' },
  ],
  glauber: [
    { year: '1925', text: '出生于美国纽约' },
    { year: '1949', text: '获哈佛大学物理学博士学位' },
    { year: '1963', text: '发表量子光学相干理论经典论文' },
    { year: '2005', text: '获诺贝尔物理学奖' },
  ],
  hall: [
    { year: '1934', text: '出生于美国丹佛' },
    { year: '1961', text: '获卡内基理工学院物理学博士学位' },
    { year: '1983', text: '与Drever、Hall发展PDH激光稳频技术' },
    { year: '2005', text: '获诺贝尔物理学奖' },
  ],
  hansch: [
    { year: '1941', text: '出生于德国海德堡' },
    { year: '1969', text: '获海德堡大学物理学博士学位' },
    { year: '1999', text: '发明光学频率梳' },
    { year: '2005', text: '获诺贝尔物理学奖' },
  ],
  thorne: [
    { year: '1940', text: '出生于美国犹他州洛根' },
    { year: '1965', text: '获普林斯顿大学物理学博士学位' },
    { year: '2015', text: 'LIGO首次直接探测到引力波' },
    { year: '2017', text: '获诺贝尔物理学奖' },
  ],
  weiss: [
    { year: '1932', text: '出生于德国柏林，幼年移居美国' },
    { year: '1962', text: '获麻省理工学院物理学博士学位' },
    { year: '1972', text: '发表激光干涉引力波探测经典论文' },
    { year: '2017', text: '获诺贝尔物理学奖' },
  ],
  barish: [
    { year: '1936', text: '出生于美国内布拉斯加州奥马哈' },
    { year: '1962', text: '获加州大学伯克利分校物理学博士学位' },
    { year: '1994', text: '出任LIGO项目主任' },
    { year: '2017', text: '获诺贝尔物理学奖' },
  ],
  taylorj: [
    { year: '1941', text: '出生于美国费城' },
    { year: '1968', text: '获哈佛大学物理学博士学位' },
    { year: '1974', text: '与赫尔斯发现第一颗脉冲双星' },
    { year: '1993', text: '获诺贝尔物理学奖' },
  ],
  hulse: [
    { year: '1950', text: '出生于美国纽约' },
    { year: '1975', text: '获马萨诸塞大学博士学位' },
    { year: '1974', text: '发现首颗脉冲双星PSR B1913+16' },
    { year: '1993', text: '获诺贝尔物理学奖' },
  ],
  peebles: [
    { year: '1935', text: '出生于加拿大曼尼托巴省温尼伯' },
    { year: '1962', text: '获普林斯顿大学物理学博士学位' },
    { year: '1965', text: '参与宇宙微波背景辐射的理论预言与解释' },
    { year: '2019', text: '获诺贝尔物理学奖' },
  ],
  riess: [
    { year: '1969', text: '出生于美国华盛顿特区' },
    { year: '1996', text: '获哈佛大学天文学博士学位' },
    { year: '1998', text: '发现宇宙加速膨胀' },
    { year: '2011', text: '获诺贝尔物理学奖' },
  ],
  schmidt: [
    { year: '1967', text: '出生于美国蒙大拿州米苏拉' },
    { year: '1993', text: '获哈佛大学博士学位' },
    { year: '1998', text: '发现宇宙加速膨胀' },
    { year: '2011', text: '获诺贝尔物理学奖' },
  ],
  perlmutter: [
    { year: '1959', text: '出生于美国伊利诺伊州厄巴纳-香槟' },
    { year: '1986', text: '获加州大学伯克利分校物理学博士学位' },
    { year: '1998', text: '发表宇宙加速膨胀的发现' },
    { year: '2011', text: '获诺贝尔物理学奖' },
  ],
  mather: [
    { year: '1946', text: '出生于美国弗吉尼亚州罗阿诺克' },
    { year: '1974', text: '获加州大学伯克利分校物理学博士学位' },
    { year: '1992', text: 'COBE团队发表宇宙微波背景各向异性结果' },
    { year: '2006', text: '获诺贝尔物理学奖' },
  ],
  smoot: [
    { year: '1945', text: '出生于美国佛罗里达州育空' },
    { year: '1970', text: '获麻省理工学院物理学博士学位' },
    { year: '1992', text: 'COBE团队发现宇宙微波背景各向异性' },
    { year: '2006', text: '获诺贝尔物理学奖' },
  ],
  rubin: [
    { year: '1928', text: '出生于美国费城' },
    { year: '1954', text: '获乔治城大学博士学位' },
    { year: '1970', text: '发表星系旋转曲线的重要观测结果' },
    { year: '1993', text: '获美国国家科学奖章' },
  ],
  bethe: [
    { year: '1906', text: '出生于德国斯特拉斯堡' },
    { year: '1930', text: '获慕尼黑大学物理学博士学位' },
    { year: '1938', text: '提出恒星核合成理论' },
    { year: '1967', text: '获诺贝尔物理学奖' },
  ],
  dyson: [
    { year: '1923', text: '出生于英国克劳索恩' },
    { year: '1947', text: '获康奈尔大学物理学博士学位' },
    { year: '1949', text: '统一量子电动力学的三种表述' },
    { year: '1960', text: '提出戴森球构想' },
  ],
  wheeler: [
    { year: '1911', text: '出生于美国佛罗里达州杰克逊维尔' },
    { year: '1933', text: '获约翰斯·霍普金斯大学物理学博士学位' },
    { year: '1967', text: '首次使用“黑洞”一词' },
    { year: '2008', text: '在美国新泽西州逝世' },
  ],
  townes: [
    { year: '1915', text: '出生于美国南卡罗来纳州格林维尔' },
    { year: '1939', text: '获加州理工学院物理学博士学位' },
    { year: '1953', text: '发明微波激射器' },
    { year: '1964', text: '获诺贝尔物理学奖' },
  ],
  gross: [
    { year: '1941', text: '出生于美国华盛顿特区' },
    { year: '1966', text: '获加州大学伯克利分校物理学博士学位' },
    { year: '1973', text: '发现强相互作用的渐近自由' },
    { year: '2004', text: '获诺贝尔物理学奖' },
  ],
  politzer: [
    { year: '1949', text: '出生于美国纽约' },
    { year: '1974', text: '获哈佛大学物理学博士学位' },
    { year: '1973', text: '发表渐近自由的经典计算' },
    { year: '2004', text: '获诺贝尔物理学奖' },
  ],
  wilczek: [
    { year: '1951', text: '出生于美国纽约米尼奥拉' },
    { year: '1974', text: '获普林斯顿大学物理学博士学位' },
    { year: '1973', text: '发现强相互作用的渐近自由' },
    { year: '2004', text: '获诺贝尔物理学奖' },
  ],
  kajita: [
    { year: '1959', text: '出生于日本埼玉县' },
    { year: '1986', text: '获东京大学博士学位' },
    { year: '1998', text: '超级神冈发现大气中微子振荡' },
    { year: '2015', text: '获诺贝尔物理学奖' },
  ],
  mcdonald: [
    { year: '1943', text: '出生于加拿大新斯科舍省悉尼' },
    { year: '1969', text: '获加州理工学院物理学博士学位' },
    { year: '2001', text: 'SNO实验解决太阳中微子问题' },
    { year: '2015', text: '获诺贝尔物理学奖' },
  ],
  kobayashi: [
    { year: '1944', text: '出生于日本爱知县名古屋' },
    { year: '1972', text: '获名古屋大学博士学位' },
    { year: '1973', text: '提出小林-益川矩阵' },
    { year: '2008', text: '获诺贝尔物理学奖' },
  ],
  maskawa: [
    { year: '1940', text: '出生于日本爱知县名古屋' },
    { year: '1967', text: '获名古屋大学博士学位' },
    { year: '1973', text: '提出小林-益川矩阵' },
    { year: '2008', text: '获诺贝尔物理学奖' },
  ],
  kerr: [
    { year: '1934', text: '出生于新西兰格雷敦' },
    { year: '1959', text: '获剑桥大学博士学位' },
    { year: '1963', text: '发表旋转黑洞的克尔解' },
    { year: '2020', text: '获克拉福德天文学奖' },
  ],
  bell: [
    { year: '1928', text: '出生于北爱尔兰贝尔法斯特' },
    { year: '1956', text: '获伯明翰大学物理学博士学位' },
    { year: '1964', text: '发表贝尔不等式论文' },
    { year: '1990', text: '在瑞士日内瓦逝世' },
  ],
  aspect: [
    { year: '1947', text: '出生于法国阿让' },
    { year: '1971', text: '获巴黎-萨克雷大学博士学位' },
    { year: '1982', text: '完成贝尔不等式破坏的关键实验' },
    { year: '2022', text: '获诺贝尔物理学奖' },
  ],
  zeilinger: [
    { year: '1945', text: '出生于奥地利里德因克里斯' },
    { year: '1971', text: '获维也纳大学博士学位' },
    { year: '1997', text: '实现光子量子隐形传态' },
    { year: '2022', text: '获诺贝尔物理学奖' },
  ],
  mulliken: [
    { year: '1896', text: '出生于美国马萨诸塞州纽伯里波特' },
    { year: '1921', text: '获芝加哥大学物理学博士学位' },
    { year: '1932', text: '提出分子轨道理论框架' },
    { year: '1966', text: '获诺贝尔化学奖' },
  ],
  pedersen: [
    { year: '1904', text: '出生于韩国釜山' },
    { year: '1927', text: '获麻省理工学院化学硕士学位' },
    { year: '1967', text: '合成并发现冠醚' },
    { year: '1987', text: '获诺贝尔化学奖' },
  ],
  cram: [
    { year: '1919', text: '出生于美国佛蒙特州切斯特' },
    { year: '1942', text: '获哈佛大学博士学位' },
    { year: '1974', text: '提出主客体化学的系统概念' },
    { year: '1987', text: '获诺贝尔化学奖' },
  ],
  lehn: [
    { year: '1939', text: '出生于法国罗塞姆' },
    { year: '1963', text: '获斯特拉斯堡大学博士学位' },
    { year: '1969', text: '合成穴醚并开创超分子化学' },
    { year: '1987', text: '获诺贝尔化学奖' },
  ],
  knowles: [
    { year: '1917', text: '出生于美国马萨诸塞州托恩斯' },
    { year: '1942', text: '获哥伦比亚大学博士学位' },
    { year: '1968', text: '发明首个实用不对称氢化催化剂' },
    { year: '2001', text: '获诺贝尔化学奖' },
  ],
  sharpless: [
    { year: '1941', text: '出生于美国宾夕法尼亚州费城' },
    { year: '1968', text: '获斯坦福大学博士学位' },
    { year: '2001', text: '因不对称催化获诺贝尔化学奖' },
    { year: '2022', text: '因点击化学再获诺贝尔化学奖' },
  ],
  hodgkin: [
    { year: '1910', text: '出生于埃及开罗' },
    { year: '1937', text: '获剑桥大学博士学位' },
    { year: '1956', text: '测定维生素B12结构' },
    { year: '1964', text: '获诺贝尔化学奖' },
  ],
  franklin: [
    { year: '1920', text: '出生于英国伦敦' },
    { year: '1945', text: '获剑桥大学博士学位' },
    { year: '1952', text: '拍摄DNA“51号照片”' },
    { year: '1958', text: '因卵巢癌在伦敦逝世' },
  ],
  wilkins: [
    { year: '1916', text: '出生于新西兰蓬加鲁阿瓦' },
    { year: '1940', text: '获伯明翰大学物理学博士学位' },
    { year: '1953', text: 'DNA双螺旋结构论文发表' },
    { year: '1962', text: '获诺贝尔生理学或医学奖' },
  ],
  muller: [
    { year: '1890', text: '出生于美国纽约' },
    { year: '1916', text: '获哥伦比亚大学博士学位' },
    { year: '1926', text: '证明X射线诱导基因突变' },
    { year: '1946', text: '获诺贝尔生理学或医学奖' },
  ],
  beadle: [
    { year: '1903', text: '出生于美国内布拉斯加州瓦胡' },
    { year: '1931', text: '获康奈尔大学博士学位' },
    { year: '1941', text: '与塔特姆提出一个基因一个酶假说' },
    { year: '1958', text: '获诺贝尔生理学或医学奖' },
  ],
  tatum: [
    { year: '1909', text: '出生于美国科罗拉多州博尔德' },
    { year: '1934', text: '获威斯康星大学博士学位' },
    { year: '1941', text: '与比德尔提出一个基因一个酶假说' },
    { year: '1958', text: '获诺贝尔生理学或医学奖' },
  ],
  lederberg: [
    { year: '1925', text: '出生于美国新泽西州蒙特克莱' },
    { year: '1947', text: '获耶鲁大学博士学位' },
    { year: '1946', text: '发现细菌接合与遗传重组' },
    { year: '1958', text: '获诺贝尔生理学或医学奖' },
  ],
  jacob: [
    { year: '1920', text: '出生于法国南锡' },
    { year: '1947', text: '获巴黎大学医学博士学位' },
    { year: '1961', text: '与莫诺发表乳糖操纵子模型' },
    { year: '1965', text: '获诺贝尔生理学或医学奖' },
  ],
  monod: [
    { year: '1910', text: '出生于法国巴黎' },
    { year: '1941', text: '获巴黎大学博士学位' },
    { year: '1961', text: '提出乳糖操纵子模型' },
    { year: '1965', text: '获诺贝尔生理学或医学奖' },
  ],
  delbruck: [
    { year: '1906', text: '出生于德国柏林' },
    { year: '1930', text: '获哥廷根大学物理学博士学位' },
    { year: '1938', text: '开始用噬菌体研究遗传问题' },
    { year: '1969', text: '获诺贝尔生理学或医学奖' },
  ],
  brenner: [
    { year: '1927', text: '出生于南非杰米斯顿' },
    { year: '1954', text: '获牛津大学博士学位' },
    { year: '1965', text: '开始建立线虫作为模式生物' },
    { year: '2002', text: '获诺贝尔生理学或医学奖' },
  ],
  gurdon: [
    { year: '1933', text: '出生于英国汉普郡迪彭霍尔' },
    { year: '1960', text: '获牛津大学博士学位' },
    { year: '1962', text: '完成首例体细胞核移植克隆实验' },
    { year: '2012', text: '获诺贝尔生理学或医学奖' },
  ],
  doudna: [
    { year: '1964', text: '出生于美国华盛顿特区' },
    { year: '1989', text: '获哈佛大学医学院生物化学博士学位' },
    { year: '2012', text: '发表CRISPR-Cas9基因编辑关键论文' },
    { year: '2020', text: '获诺贝尔化学奖' },
  ],
  charpentier: [
    { year: '1968', text: '出生于法国奥利韦' },
    { year: '1995', text: '获巴黎第六大学博士学位' },
    { year: '2012', text: '与杜德纳发表CRISPR-Cas9基因编辑论文' },
    { year: '2020', text: '获诺贝尔化学奖' },
  ],
  zhangfeng: [
    { year: '1982', text: '出生于中国河北石家庄' },
    { year: '2009', text: '获斯坦福大学博士学位' },
    { year: '2013', text: '实现哺乳动物细胞CRISPR基因编辑' },
    { year: '2016', text: '获盖尔德纳国际奖' },
  ],
  atiyah: [
    { year: '1929', text: '出生于英国伦敦' },
    { year: '1955', text: '获剑桥大学博士学位' },
    { year: '1963', text: '与辛格证明指标定理' },
    { year: '1966', text: '获菲尔兹奖' },
  ],
  mirzakhani: [
    { year: '1977', text: '出生于伊朗德黑兰' },
    { year: '2004', text: '获哈佛大学博士学位' },
    { year: '2014', text: '获菲尔兹奖，成为首位女性获奖者' },
    { year: '2017', text: '因癌症在美国逝世' },
  ],
  serre: [
    { year: '1926', text: '出生于法国巴日' },
    { year: '1951', text: '获巴黎大学博士学位' },
    { year: '1954', text: '获菲尔兹奖，时年28岁' },
    { year: '2003', text: '获阿贝尔奖' },
  ],
  milnor: [
    { year: '1931', text: '出生于美国新泽西州奥兰治' },
    { year: '1954', text: '获普林斯顿大学博士学位' },
    { year: '1956', text: '发现七维怪球面' },
    { year: '1962', text: '获菲尔兹奖' },
  ],
  hamilton: [
    { year: '1943', text: '出生于美国俄亥俄州辛辛那提' },
    { year: '1966', text: '获普林斯顿大学博士学位' },
    { year: '1982', text: '提出里奇流' },
    { year: '2010', text: '获邵逸夫数学科学奖' },
  ],
  tiangang: [
    { year: '1958', text: '出生于江苏南京' },
    { year: '1988', text: '获哈佛大学博士学位' },
    { year: '1994', text: '获维布伦几何奖' },
    { year: '2001', text: '当选中国科学院院士' },
  ],
  wangxiaoyun: [
    { year: '1966', text: '出生于山东诸城' },
    { year: '1993', text: '获山东大学数学博士学位' },
    { year: '2004', text: '报告MD5哈希函数碰撞攻击' },
    { year: '2017', text: '获未来科学大奖' },
  ],
  xuchenyang: [
    { year: '1981', text: '出生于中国重庆' },
    { year: '2008', text: '获普林斯顿大学博士学位' },
    { year: '2016', text: '获拉马努金奖' },
    { year: '2017', text: '获未来科学大奖' },
  ],
  yunzhiwei: [
    { year: '1982', text: '出生于中国江苏常州' },
    { year: '2009', text: '获普林斯顿大学博士学位' },
    { year: '2016', text: '获拉马努金奖' },
    { year: '2022', text: '获数学新视野奖' },
  ],
  hinton: [
    { year: '1947', text: '出生于英国伦敦温布尔登' },
    { year: '1978', text: '获爱丁堡大学人工智能博士学位' },
    { year: '2006', text: '提出深度信念网络，开启深度学习复兴' },
    { year: '2018', text: '获图灵奖' },
  ],
  lecun: [
    { year: '1960', text: '出生于法国巴黎附近' },
    { year: '1987', text: '获巴黎第六大学计算机科学博士学位' },
    { year: '1989', text: '发明LeNet卷积神经网络' },
    { year: '2018', text: '获图灵奖' },
  ],
  bengio: [
    { year: '1964', text: '出生于法国巴黎' },
    { year: '1991', text: '获麦吉尔大学计算机科学博士学位' },
    { year: '2000', text: '提出神经概率语言模型' },
    { year: '2018', text: '获图灵奖' },
  ],
  };

  const extraBirthdayData = {
  brattain: { birth: '1902-02-10', death: '1987-10-13' },
  shockley: { birth: '1910-02-13', death: '1989-08-12' },
  englert: { birth: '1932-11-06', death: null },
  thooft: { birth: '1946-07-05', death: null },
  veltman: { birth: '1931-06-27', death: '2021-01-04' },
  glashow: { birth: '1932-12-05', death: null },
  weinberg: { birth: '1933-05-03', death: '2021-07-23' },
  salam: { birth: '1926-01-29', death: '1996-11-21' },
  cronin: { birth: '1931-09-29', death: '2016-08-25' },
  fitch: { birth: '1923-03-10', death: '2015-02-05' },
  richter: { birth: '1931-03-22', death: '2018-07-18' },
  lederman: { birth: '1922-07-15', death: '2018-10-03' },
  perl: { birth: '1927-06-24', death: '2014-09-30' },
  reines: { birth: '1918-03-16', death: '1998-08-26' },
  rubbia: { birth: '1934-03-31', death: null },
  charpak: { birth: '1924-03-08', death: '2010-09-29' },
  glauber: { birth: '1925-09-01', death: '2018-12-26' },
  hall: { birth: '1934-08-21', death: null },
  hansch: { birth: '1941-10-30', death: null },
  thorne: { birth: '1940-06-01', death: null },
  weiss: { birth: '1932-09-29', death: null },
  barish: { birth: '1936-01-27', death: null },
  taylorj: { birth: '1941-03-29', death: null },
  hulse: { birth: '1950-11-28', death: null },
  peebles: { birth: '1935-04-25', death: null },
  riess: { birth: '1969-12-16', death: null },
  schmidt: { birth: '1967-02-24', death: null },
  perlmutter: { birth: '1959-09-22', death: null },
  mather: { birth: '1946-08-07', death: null },
  smoot: { birth: '1945-02-20', death: null },
  rubin: { birth: '1928-07-23', death: '2016-12-25' },
  bethe: { birth: '1906-07-02', death: '2005-03-06' },
  dyson: { birth: '1923-12-15', death: '2020-02-28' },
  wheeler: { birth: '1911-07-09', death: '2008-04-13' },
  townes: { birth: '1915-07-28', death: '2015-01-27' },
  gross: { birth: '1941-02-19', death: null },
  politzer: { birth: '1949-08-17', death: null },
  wilczek: { birth: '1951-05-15', death: null },
  kajita: { birth: '1959-03-09', death: null },
  mcdonald: { birth: '1943-08-29', death: null },
  kobayashi: { birth: '1944-04-07', death: null },
  maskawa: { birth: '1940-02-07', death: '2021-07-23' },
  kerr: { birth: '1934-05-16', death: null },
  bell: { birth: '1928-06-28', death: '1990-10-01' },
  aspect: { birth: '1947-06-15', death: null },
  zeilinger: { birth: '1945-05-20', death: null },
  mulliken: { birth: '1896-06-07', death: '1986-10-31' },
  pedersen: { birth: '1904-10-03', death: '1989-10-26' },
  cram: { birth: '1919-04-22', death: '2001-06-17' },
  lehn: { birth: '1939-09-30', death: null },
  knowles: { birth: '1917-06-01', death: '2012-06-13' },
  sharpless: { birth: '1941-04-28', death: null },
  hodgkin: { birth: '1910-05-12', death: '1994-07-29' },
  franklin: { birth: '1920-07-25', death: '1958-04-16' },
  wilkins: { birth: '1916-12-15', death: '2004-10-05' },
  muller: { birth: '1890-12-21', death: '1967-04-05' },
  beadle: { birth: '1903-10-22', death: '1989-06-09' },
  tatum: { birth: '1909-12-14', death: '1975-11-05' },
  lederberg: { birth: '1925-05-23', death: '2008-02-02' },
  jacob: { birth: '1920-06-17', death: '2013-04-19' },
  monod: { birth: '1910-02-09', death: '1976-05-31' },
  delbruck: { birth: '1906-09-04', death: '1981-03-09' },
  brenner: { birth: '1927-01-13', death: '2019-04-05' },
  gurdon: { birth: '1933-10-02', death: null },
  doudna: { birth: '1964-02-19', death: null },
  charpentier: { birth: '1968-12-11', death: null },
  zhangfeng: { birth: '1982-10-22', death: null },
  atiyah: { birth: '1929-04-22', death: '2019-01-11' },
  mirzakhani: { birth: '1977-05-03', death: '2017-07-15' },
  serre: { birth: '1926-09-15', death: null },
  milnor: { birth: '1931-02-20', death: null },
  hamilton: { birth: '1943-01-10', death: null },
  tiangang: { birth: '1958-11-24', death: null },
  wangxiaoyun: { birth: '1966-08-25', death: null },
  xuchenyang: { birth: '1981-04-25', death: null },
  yunzhiwei: { birth: '1982-11-02', death: null },
  hinton: { birth: '1947-12-06', death: null },
  lecun: { birth: '1960-07-21', death: null },
  bengio: { birth: '1964-03-05', death: null },
  };

  global.__extraScientistsData = extraScientistsData;
  global.__extraTimelineData = extraTimelineData;
  global.__extraBirthdayData = extraBirthdayData;
})(typeof window !== 'undefined' ? window : globalThis);
