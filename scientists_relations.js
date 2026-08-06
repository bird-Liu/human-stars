// 科学家师承 / 合作 / 影响关系数据
// 由 generate_relations.py 自动生成（人工关系 + 启发式补充）
(function(global) {
  'use strict';
  global.__scientistsRelations = {
  "einstein": [
    {
      "to": "maxwell",
      "type": "influence",
      "desc": "麦克斯韦方程是狭义相对论的重要起点"
    },
    {
      "to": "bohr",
      "type": "peer",
      "desc": "与玻尔围绕量子力学展开著名论战"
    },
    {
      "to": "planck",
      "type": "peer",
      "desc": "在柏林期间与普朗克等量子先驱密切交流"
    },
    {
      "to": "hahn",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "feynman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "godel",
      "type": "peer",
      "desc": "在普林斯顿与爱因斯坦成为挚友"
    }
  ],
  "maxwell": [
    {
      "to": "einstein",
      "type": "influence",
      "desc": "麦克斯韦方程启发了爱因斯坦的相对论思考"
    }
  ],
  "bohr": [
    {
      "to": "rutherford",
      "type": "mentor",
      "desc": "卢瑟福是玻尔的原子模型导师"
    },
    {
      "to": "heisenberg",
      "type": "student",
      "desc": "海森堡曾在哥本哈根师从玻尔"
    },
    {
      "to": "feynman",
      "type": "student",
      "desc": "费曼在洛斯阿拉莫斯与玻尔有过深入交流"
    },
    {
      "to": "einstein",
      "type": "peer",
      "desc": "与爱因斯坦关于量子完备性的世纪论战"
    },
    {
      "to": "fitch",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "yangzhenning",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "nambu",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "raman",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "dyson",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "heisenberg": [
    {
      "to": "bohr",
      "type": "mentor",
      "desc": "哥本哈根学派核心成员"
    },
    {
      "to": "schrodinger",
      "type": "peer",
      "desc": "矩阵力学与波动力学的两位创立者"
    },
    {
      "to": "dirac",
      "type": "peer",
      "desc": "共同构建量子力学的数学形式"
    }
  ],
  "schrodinger": [
    {
      "to": "heisenberg",
      "type": "peer",
      "desc": "波动力学与矩阵力学的等价性"
    }
  ],
  "dirac": [
    {
      "to": "heisenberg",
      "type": "peer",
      "desc": "量子力学形式化的重要共建者"
    },
    {
      "to": "feynman",
      "type": "influence",
      "desc": "狄拉克的量子化思想启发了费曼路径积分"
    }
  ],
  "feynman": [
    {
      "to": "dirac",
      "type": "influence",
      "desc": "狄拉克是其路径积分与费曼图的重要先驱"
    },
    {
      "to": "wheeler",
      "type": "mentor",
      "desc": "惠勒是费曼的博士导师"
    },
    {
      "to": "bohr",
      "type": "peer",
      "desc": "参与曼哈顿计划期间与玻尔密切合作"
    },
    {
      "to": "einstein",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "oppenheimer",
      "type": "peer",
      "desc": "曼哈顿计划期间的同事"
    },
    {
      "to": "nambu",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "wheeler": [
    {
      "to": "feynman",
      "type": "student",
      "desc": "指导学生费曼发展出路径积分"
    },
    {
      "to": "hawking",
      "type": "influence",
      "desc": "黑洞信息问题影响了霍金的思考"
    },
    {
      "to": "chandrasekhar",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "reines",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "hawking": [
    {
      "to": "penrose",
      "type": "peer",
      "desc": "与彭罗斯合作证明奇点定理"
    },
    {
      "to": "wheeler",
      "type": "influence",
      "desc": "惠勒的黑洞研究启发了霍金辐射"
    },
    {
      "to": "tomonaga",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "gross",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "kobayashi",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "penrose": [
    {
      "to": "hawking",
      "type": "peer",
      "desc": "共同获得诺贝尔物理学奖（黑洞理论）"
    },
    {
      "to": "hubble",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "rubin",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "riess",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "schmidt",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "kerr",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "curie": [
    {
      "to": "rutherford",
      "type": "peer",
      "desc": "放射性研究领域的同行"
    },
    {
      "to": "haber",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "rutherford": [
    {
      "to": "curie",
      "type": "peer",
      "desc": "放射性研究领域的同行"
    },
    {
      "to": "bohr",
      "type": "student",
      "desc": "玻尔曾到卢瑟福实验室工作"
    },
    {
      "to": "planck",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "bardeen",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "wujianxiong",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "landau",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "wangganchang",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "yukawa",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "watson": [
    {
      "to": "crick",
      "type": "collaborator",
      "desc": "共同发现 DNA 双螺旋结构"
    },
    {
      "to": "franklin",
      "type": "peer",
      "desc": "富兰克林的 X 射线数据是关键线索"
    },
    {
      "to": "muller",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "brenner",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "tuyouyou",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "doudna",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "crick": [
    {
      "to": "watson",
      "type": "collaborator",
      "desc": "共同发现 DNA 双螺旋结构"
    },
    {
      "to": "franklin",
      "type": "peer",
      "desc": "DNA 结构解析的重要贡献者"
    },
    {
      "to": "wilkins",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "bardeen": [
    {
      "to": "brattain",
      "type": "collaborator",
      "desc": "共同发明晶体管"
    },
    {
      "to": "shockley",
      "type": "collaborator",
      "desc": "晶体管三人组"
    },
    {
      "to": "rutherford",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "landau",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "brattain": [
    {
      "to": "bardeen",
      "type": "collaborator",
      "desc": "共同发明晶体管"
    },
    {
      "to": "shockley",
      "type": "collaborator",
      "desc": "晶体管三人组"
    },
    {
      "to": "pauling",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "noyori",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "sharpless",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "shockley": [
    {
      "to": "bardeen",
      "type": "collaborator",
      "desc": "晶体管三人组"
    },
    {
      "to": "brattain",
      "type": "collaborator",
      "desc": "晶体管三人组"
    },
    {
      "to": "haber",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "hodgkin",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "qianyongjian",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "yoshino",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "knowles",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "englert": [
    {
      "to": "higgs",
      "type": "peer",
      "desc": "独立提出希格斯机制"
    },
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "glashow",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "weinberg",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "weiss",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "higgs": [
    {
      "to": "englert",
      "type": "peer",
      "desc": "希格斯机制的独立提出者"
    },
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "bell",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "glashow": [
    {
      "to": "weinberg",
      "type": "peer",
      "desc": "电弱统一理论的共建者"
    },
    {
      "to": "salam",
      "type": "peer",
      "desc": "1979 年共享诺贝尔物理学奖"
    },
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "englert",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "weinberg": [
    {
      "to": "glashow",
      "type": "peer",
      "desc": "电弱统一理论的共建者"
    },
    {
      "to": "salam",
      "type": "peer",
      "desc": "1979 年共享诺贝尔物理学奖"
    },
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "englert",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "thooft",
      "type": "peer",
      "desc": "规范场论可重整化的关键证明者"
    },
    {
      "to": "rubbia",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "salam": [
    {
      "to": "glashow",
      "type": "peer",
      "desc": "电弱统一理论的共建者"
    },
    {
      "to": "weinberg",
      "type": "peer",
      "desc": "1979 年共享诺贝尔物理学奖"
    },
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "lizhengdao",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "thooft": [
    {
      "to": "veltman",
      "type": "mentor",
      "desc": "韦尔特曼是特·胡夫特的博士导师"
    },
    {
      "to": "weinberg",
      "type": "peer",
      "desc": "规范场论可重整化的关键证明者"
    },
    {
      "to": "landau",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "zeilinger",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "aspect",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "veltman": [
    {
      "to": "thooft",
      "type": "student",
      "desc": "指导学生完成规范场论可重整化证明"
    },
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "manabe",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "cronin": [
    {
      "to": "fitch",
      "type": "collaborator",
      "desc": "共同发现 CP 破坏"
    },
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "manabe",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "fitch": [
    {
      "to": "cronin",
      "type": "collaborator",
      "desc": "共同发现 CP 破坏"
    },
    {
      "to": "bohr",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "dyson",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "charpak",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "hilbert": [
    {
      "to": "godel",
      "type": "peer",
      "desc": "哥德尔不完备定理回应了希尔伯特纲领"
    },
    {
      "to": "chern",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "hualuogeng",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "wuwenjun",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "nash",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "atiyah",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "serre",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "milnor",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "godel": [
    {
      "to": "hilbert",
      "type": "influence",
      "desc": "不完备定理终结了希尔伯特的形式化梦想"
    },
    {
      "to": "einstein",
      "type": "peer",
      "desc": "在普林斯顿与爱因斯坦成为挚友"
    },
    {
      "to": "hualuogeng",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "vonneumann",
      "type": "peer",
      "desc": "冯·诺依曼最先认识到哥德尔定理的重要性"
    },
    {
      "to": "hamilton",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "chern": [
    {
      "to": "hualuogeng",
      "type": "peer",
      "desc": "华罗庚与陈省身同为 20 世纪华人数学代表"
    },
    {
      "to": "hilbert",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "wuwenjun",
      "type": "influence",
      "desc": "受陈省身影响研究拓扑与几何"
    },
    {
      "to": "qiuchengtong",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "hualuogeng": [
    {
      "to": "chern",
      "type": "peer",
      "desc": "与陈省身并称中国现代数学双子星"
    },
    {
      "to": "chenjingrun",
      "type": "influence",
      "desc": "华罗庚数论研究影响了陈景润"
    },
    {
      "to": "hilbert",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "godel",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "chenjingrun": [
    {
      "to": "hualuogeng",
      "type": "mentor",
      "desc": "在华罗庚引导下研究数论"
    },
    {
      "to": "milnor",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "taozhexuan",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "mirzakhani",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "hamilton",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "wuwenjun": [
    {
      "to": "chern",
      "type": "influence",
      "desc": "受陈省身影响研究拓扑与几何"
    },
    {
      "to": "hilbert",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "serre",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "tiangang",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "yangzhenning": [
    {
      "to": "fermi",
      "type": "mentor",
      "desc": "费米是杨振宁的博士导师"
    },
    {
      "to": "lizhengdao",
      "type": "collaborator",
      "desc": "共同提出宇称不守恒"
    },
    {
      "to": "bohr",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "nambu",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "lizhengdao": [
    {
      "to": "yangzhenning",
      "type": "collaborator",
      "desc": "共同提出宇称不守恒"
    },
    {
      "to": "fermi",
      "type": "mentor",
      "desc": "费米是其博士导师"
    },
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "salam",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "perl",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "qianxuesen": [
    {
      "to": "vonneumann",
      "type": "peer",
      "desc": "钱学森与冯·诺依曼共同参与火箭与航天研究"
    },
    {
      "to": "dengjiaxian",
      "type": "peer",
      "desc": "两弹一星元勋中的亲密战友"
    },
    {
      "to": "zhantianyou",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "maoyisheng",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "qiansanqiang",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "zhudiwen",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "dengjiaxian": [
    {
      "to": "qianxuesen",
      "type": "peer",
      "desc": "两弹一星元勋中的亲密战友"
    },
    {
      "to": "qiansanqiang",
      "type": "peer",
      "desc": "中国核科学事业奠基人"
    },
    {
      "to": "zhantianyou",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "townes",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "yumin",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "qiansanqiang": [
    {
      "to": "dengjiaxian",
      "type": "peer",
      "desc": "共同推动中国原子能事业"
    },
    {
      "to": "zhantianyou",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "qianxuesen",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "townes",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "tuyouyou": [
    {
      "to": "fleming",
      "type": "peer",
      "desc": "都因天然产物研究获得诺贝尔奖"
    },
    {
      "to": "muller",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "watson",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "gurdon",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "charpentier",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "nanrendong": [
    {
      "to": "hubble",
      "type": "influence",
      "desc": "哈勃的星系天文学启发了中国天眼的科学目标"
    },
    {
      "to": "maoyisheng",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "hansch",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "zhudiwen",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "turing": [
    {
      "to": "vonneumann",
      "type": "peer",
      "desc": "冯·诺依曼架构受图灵机思想影响"
    },
    {
      "to": "shannon",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "vonneumann": [
    {
      "to": "turing",
      "type": "peer",
      "desc": "图灵在普林斯顿与其交流"
    },
    {
      "to": "godel",
      "type": "peer",
      "desc": "冯·诺依曼最先认识到哥德尔定理的重要性"
    },
    {
      "to": "qianxuesen",
      "type": "peer",
      "desc": "钱学森与冯·诺依曼共同参与火箭与航天研究"
    },
    {
      "to": "bernerslee",
      "type": "influence",
      "desc": "计算机体系结构是万维网的基础设施"
    },
    {
      "to": "hinton",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "bernerslee": [
    {
      "to": "vonneumann",
      "type": "influence",
      "desc": "计算机体系结构是万维网的基础设施"
    },
    {
      "to": "shannon",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "hinton",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "lecun",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "lecun": [
    {
      "to": "hinton",
      "type": "peer",
      "desc": "深度学习三巨头"
    },
    {
      "to": "bengio",
      "type": "peer",
      "desc": "深度学习三巨头"
    },
    {
      "to": "shannon",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "bernerslee",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "hinton": [
    {
      "to": "lecun",
      "type": "peer",
      "desc": "深度学习三巨头"
    },
    {
      "to": "bengio",
      "type": "peer",
      "desc": "深度学习三巨头"
    },
    {
      "to": "vonneumann",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "shannon",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "bernerslee",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "bengio": [
    {
      "to": "hinton",
      "type": "peer",
      "desc": "深度学习三巨头"
    },
    {
      "to": "lecun",
      "type": "peer",
      "desc": "深度学习三巨头"
    },
    {
      "to": "shannon",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "wangxiaoyun",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "fleming": [
    {
      "to": "tuyouyou",
      "type": "peer",
      "desc": "都因天然产物研究获得诺贝尔奖"
    },
    {
      "to": "wumengchao",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "barnard",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "franklin",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "muller",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "lederberg",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "jacob",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "tesla": [
    {
      "to": "einstein",
      "type": "peer",
      "desc": "与爱因斯坦同时代，两人曾通过信件交流物理学思想"
    },
    {
      "to": "maxwell",
      "type": "influence",
      "desc": "特斯拉的交流电系统建立在麦克斯韦电磁理论之上"
    },
    {
      "to": "oppenheimer",
      "type": "influence",
      "desc": "特斯拉的无线能量传输构想启发了后世一代物理学家"
    }
  ],
  "planck": [
    {
      "to": "einstein",
      "type": "peer",
      "desc": "共同推动量子理论早期发展"
    },
    {
      "to": "rutherford",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "oppenheimer",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "fermi",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "tomonaga",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "oppenheimer": [
    {
      "to": "feynman",
      "type": "peer",
      "desc": "曼哈顿计划期间的同事"
    },
    {
      "to": "planck",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "fermi",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "tomonaga",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "gross",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "maskawa",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "hubble": [
    {
      "to": "penrose",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "nanrendong",
      "type": "influence",
      "desc": "哈勃的星系天文学启发了中国天眼的科学目标"
    },
    {
      "to": "koshiba",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "thorne",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "taylorj",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "peebles",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "rubin",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "bethe",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "kerr",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "yuanlongping": [
    {
      "to": "zhantianyou",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "yumin",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "gaokun",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "fermi": [
    {
      "to": "planck",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "raman",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "yangzhenning",
      "type": "student",
      "desc": "费米是杨振宁的博士导师"
    },
    {
      "to": "lizhengdao",
      "type": "student",
      "desc": "费米是其博士导师"
    },
    {
      "to": "oppenheimer",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "cuiqi",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "wujianxiong": [
    {
      "to": "rutherford",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "landau",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "hulse",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "politzer",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "wilczek",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "dingzhaozhong": [
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "barish",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "cuiqi",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "gaokun": [
    {
      "to": "maoyisheng",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "yuanlongping",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "hall",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "landau": [
    {
      "to": "rutherford",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "bardeen",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "thooft",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "wujianxiong",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "kobayashi",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "aspect",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "zeilinger",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "pauling": [
    {
      "to": "huangminglong",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "brattain",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "houdepang": [
    {
      "to": "haber",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "huangminglong",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "shimomura",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "pauli": [
    {
      "to": "bohr",
      "type": "influence",
      "desc": "在哥本哈根与玻尔共事，深受其量子论影响"
    },
    {
      "to": "heisenberg",
      "type": "collaborator",
      "desc": "与海森堡共同构建量子力学的矩阵力学形式"
    },
    {
      "to": "einstein",
      "type": "influence",
      "desc": "泡利不相容原理受爱因斯坦相对论思想的启发"
    },
    {
      "to": "dirac",
      "type": "peer",
      "desc": "与狄拉克同为量子电动力学的早期开拓者"
    },
    {
      "to": "schrodinger",
      "type": "peer",
      "desc": "泡利不相容原理解释了薛定谔方程中电子的排布规律"
    },
    {
      "to": "fermi",
      "type": "collaborator",
      "desc": "泡利提出中微子假说，费米在此基础上建立β衰变理论"
    }
  ],
  "huangminglong": [
    {
      "to": "houdepang",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "pauling",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "liyuanzhe",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "haber": [
    {
      "to": "curie",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "shockley",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "houdepang",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "cram",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "knowles",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "hodgkin",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "hahn": [
    {
      "to": "einstein",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "liyuanzhe": [
    {
      "to": "huangminglong",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "shimomura",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "noyori",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "tanjiazhen": [
    {
      "to": "tatum",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "monod",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "tongdizhou": [
    {
      "to": "linqiaozhi",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "beadle",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "linqiaozhi": [
    {
      "to": "mulliken",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "tongdizhou",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "wumengchao": [
    {
      "to": "fleming",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "barnard",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "lederberg",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "zhongnanshan": [
    {
      "to": "mulliken",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "omura",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "lehn",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "barnard": [
    {
      "to": "fleming",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "wumengchao",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "wegener": [
    {
      "to": "lisiguang",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "liudongsheng",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "lisiguang": [
    {
      "to": "wegener",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "zhukezhen",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "zhukezhen": [
    {
      "to": "lisiguang",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "tuzhangwang",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "tuzhangwang": [
    {
      "to": "zhukezhen",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "liudongsheng",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "liudongsheng": [
    {
      "to": "wegener",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "tuzhangwang",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "zhantianyou": [
    {
      "to": "qianxuesen",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "dengjiaxian",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "qiansanqiang",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "yuanlongping",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "maoyisheng",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "yumin",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "townes",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "maoyisheng": [
    {
      "to": "zhantianyou",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "qianxuesen",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "nanrendong",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "gaokun",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "hall",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "hansch",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "wangganchang": [
    {
      "to": "rutherford",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "yukawa",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "yumin": [
    {
      "to": "zhantianyou",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "dengjiaxian",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "yuanlongping",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "shannon": [
    {
      "to": "turing",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "bernerslee",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "lecun",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "hinton",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "bengio",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "zhangfeng",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "wangxiaoyun",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "qiuchengtong": [
    {
      "to": "chern",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "hamilton",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "dengyu",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "wanghong",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "tiangang",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "taozhexuan": [
    {
      "to": "chenjingrun",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "tiangang",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "mirzakhani",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "dengyu": [
    {
      "to": "qiuchengtong",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "yunzhiwei",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "wanghong",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "wanghong": [
    {
      "to": "qiuchengtong",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "dengyu",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "cuiqi": [
    {
      "to": "fermi",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "dingzhaozhong",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "maskawa",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "zhudiwen": [
    {
      "to": "qianxuesen",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "nanrendong",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "qianyongjian": [
    {
      "to": "shockley",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "yoshino",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "nakamura",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "yukawa": [
    {
      "to": "rutherford",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "wangganchang",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "tomonaga": [
    {
      "to": "planck",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "oppenheimer",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "hawking",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "koshiba": [
    {
      "to": "hubble",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "lederman",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "rubin",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "nambu": [
    {
      "to": "bohr",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "feynman",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "yangzhenning",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "nakamura": [
    {
      "to": "knowles",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "qianyongjian",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "manabe": [
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "veltman",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "cronin",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "richter",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "shimomura": [
    {
      "to": "houdepang",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "cram",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "liyuanzhe",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "noyori": [
    {
      "to": "brattain",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "liyuanzhe",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "sharpless",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "yoshino": [
    {
      "to": "shockley",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "sharpless",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "qianyongjian",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "yamanaka": [
    {
      "to": "lederberg",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "honjo",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "doudna",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "omura": [
    {
      "to": "mulliken",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "gurdon",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "zhongnanshan",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "honjo": [
    {
      "to": "delbruck",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "lehn",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "yamanaka",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "nash": [
    {
      "to": "hilbert",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "serre",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "atiyah",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "raman": [
    {
      "to": "bohr",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "englert",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "higgs",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "glashow",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "weinberg",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "salam",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "veltman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "cronin",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "lizhengdao",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "fermi",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "dingzhaozhong",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "manabe",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "richter",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "perl",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "rubbia",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "charpak",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "glauber",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "weiss",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "barish",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "bell",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "chandrasekhar": [
    {
      "to": "bethe",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "wheeler",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "mather",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "richter": [
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "manabe",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "lederman": [
    {
      "to": "reines",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "koshiba",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "perlmutter",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "kajita",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "perl": [
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "lizhengdao",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "bell",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "reines": [
    {
      "to": "wheeler",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "lederman",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "rubbia": [
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "weinberg",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "charpak": [
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "fitch",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "glauber",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "glauber": [
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "charpak",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "hall": [
    {
      "to": "maoyisheng",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "gaokun",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "hansch",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "hansch": [
    {
      "to": "maoyisheng",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "hall",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "nanrendong",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "thorne": [
    {
      "to": "hubble",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "peebles",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "taylorj",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "weiss": [
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "englert",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "barish": [
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "dingzhaozhong",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "taylorj": [
    {
      "to": "hubble",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "thorne",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "mcdonald",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "hulse": [
    {
      "to": "wujianxiong",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "politzer",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "wilczek",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "peebles": [
    {
      "to": "hubble",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "kerr",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "thorne",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "riess": [
    {
      "to": "penrose",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "schmidt",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "schmidt": [
    {
      "to": "penrose",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "perlmutter",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "riess",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "perlmutter": [
    {
      "to": "lederman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "kajita",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "schmidt",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "mather": [
    {
      "to": "chandrasekhar",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "smoot",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "smoot": [
    {
      "to": "bethe",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "mcdonald",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "mather",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "rubin": [
    {
      "to": "hubble",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "koshiba",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "penrose",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "bethe": [
    {
      "to": "hubble",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "chandrasekhar",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "smoot",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "mcdonald",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "dyson": [
    {
      "to": "bohr",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "fitch",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "townes": [
    {
      "to": "zhantianyou",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "qiansanqiang",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "dengjiaxian",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "gross": [
    {
      "to": "oppenheimer",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "maskawa",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "hawking",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "politzer": [
    {
      "to": "wujianxiong",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "aspect",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "hulse",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "wilczek": [
    {
      "to": "wujianxiong",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "hulse",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "kajita": [
    {
      "to": "lederman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "perlmutter",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "mcclintock": [
    {
      "to": "watson",
      "type": "peer",
      "desc": "麦克林托克转座子发现为沃森分子生物学研究提供了遗传学基础"
    },
    {
      "to": "crick",
      "type": "peer",
      "desc": "转座子理论影响了克里克对基因调控机制的理解"
    },
    {
      "to": "beadle",
      "type": "influence",
      "desc": "与比德尔同期探索基因功能，启发了一基因一酶假说的验证"
    },
    {
      "to": "tatum",
      "type": "peer",
      "desc": "转座子研究为塔特姆的基因突变实验提供了新思路"
    },
    {
      "to": "lederberg",
      "type": "influence",
      "desc": "转座子发现影响了莱德伯格对细菌遗传重组的研究"
    }
  ],
  "mcdonald": [
    {
      "to": "bethe",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "taylorj",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "smoot",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "kobayashi": [
    {
      "to": "landau",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "hawking",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "zeilinger",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "maskawa": [
    {
      "to": "oppenheimer",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "cuiqi",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "gross",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "kerr": [
    {
      "to": "hubble",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "penrose",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "peebles",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "bell": [
    {
      "to": "raman",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "perl",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "higgs",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "aspect": [
    {
      "to": "landau",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "thooft",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "politzer",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "zeilinger": [
    {
      "to": "landau",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "kobayashi",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "thooft",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "mulliken": [
    {
      "to": "muller",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "linqiaozhi",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "zhongnanshan",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "omura",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "gurdon",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "pedersen": [
    {
      "to": "beadle",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "delbruck",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "cram": [
    {
      "to": "haber",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "knowles",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "shimomura",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "lehn": [
    {
      "to": "beadle",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "zhongnanshan",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "honjo",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "knowles": [
    {
      "to": "haber",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "shockley",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "nakamura",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "cram",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "sharpless": [
    {
      "to": "brattain",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "noyori",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "yoshino",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "hodgkin": [
    {
      "to": "haber",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "shockley",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "franklin": [
    {
      "to": "fleming",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "jacob",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "watson",
      "type": "peer",
      "desc": "富兰克林的 X 射线数据是关键线索"
    },
    {
      "to": "crick",
      "type": "peer",
      "desc": "DNA 结构解析的重要贡献者"
    }
  ],
  "wilkins": [
    {
      "to": "crick",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "muller": [
    {
      "to": "fleming",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "watson",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "tuyouyou",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "mulliken",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "brenner",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "beadle": [
    {
      "to": "tongdizhou",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "pedersen",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "lehn",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "tatum": [
    {
      "to": "tanjiazhen",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "lederberg": [
    {
      "to": "fleming",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "wumengchao",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "yamanaka",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "brenner",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "jacob": [
    {
      "to": "fleming",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "franklin",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "monod": [
    {
      "to": "tanjiazhen",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "delbruck": [
    {
      "to": "pedersen",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "honjo",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "brenner": [
    {
      "to": "muller",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "lederberg",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "watson",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "gurdon": [
    {
      "to": "mulliken",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "tuyouyou",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "omura",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "doudna": [
    {
      "to": "watson",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "yamanaka",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "charpentier",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "charpentier": [
    {
      "to": "tuyouyou",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "doudna",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "zhangfeng": [
    {
      "to": "shannon",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "wangxiaoyun",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "atiyah": [
    {
      "to": "hilbert",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "nash",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "milnor",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "mirzakhani": [
    {
      "to": "chenjingrun",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "taozhexuan",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "xuchenyang",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "serre": [
    {
      "to": "hilbert",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "wuwenjun",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "nash",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "milnor": [
    {
      "to": "hilbert",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "atiyah",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "chenjingrun",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "hamilton": [
    {
      "to": "godel",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "chenjingrun",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "qiuchengtong",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "xuchenyang",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "yunzhiwei",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    }
  ],
  "tiangang": [
    {
      "to": "wuwenjun",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "qiuchengtong",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "taozhexuan",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "wangxiaoyun": [
    {
      "to": "shannon",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "bengio",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "zhangfeng",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "xuchenyang": [
    {
      "to": "hamilton",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "mirzakhani",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "yunzhiwei",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ],
  "yunzhiwei": [
    {
      "to": "hamilton",
      "type": "influence",
      "desc": "同领域先驱与学术影响"
    },
    {
      "to": "xuchenyang",
      "type": "peer",
      "desc": "同代科学探索者"
    },
    {
      "to": "dengyu",
      "type": "peer",
      "desc": "同代科学探索者"
    }
  ]
};
})(window);
