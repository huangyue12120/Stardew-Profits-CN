/*
 * All data gathered from a modified version of polarstoat/stardew-crop-data
 */

// Crop List
var crops = {
  "amaranth": {
    "name": "苋菜",
    "url": "https://zh.stardewvalleywiki.com/%E8%8B%8B%E8%8F%9C",
    "img": "amaranth.png",
    "seeds": {
      "pierre": 70,
      "joja": 87,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 150,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "grape": {
    "name": "葡萄",
    "url": "https://zh.stardewvalleywiki.com/%E8%91%A1%E8%90%84",
    "img": "grape.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 80,
      "jarType": "果酱",
      "kegType": "果酒"
    }
  },
  "hops": {
    "name": "啤酒花",
    "url": "https://zh.stardewvalleywiki.com/%E5%95%A4%E9%85%92%E8%8A%B1",
    "img": "hops.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 1
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 25,
      "keg": 300,
      "jarType": "腌菜",
      "kegType": "淡啤酒"
    }
  },
  "pineapple": {
    "name": "菠萝",
    "url": "https://zh.stardewvalleywiki.com/%E8%8F%A0%E8%90%9D",
    "img": "pineapple.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 400,
      "specialLoc": "姜岛商人",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E5%A7%9C%E5%B2%9B%E5%95%86%E4%BA%BA"
    },
    "growth": {
      "initial": 14,
      "regrow": 7
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 300,
      "jarType": "果酱",
      "kegType": "果酒"
    }
  },
  "sweetgemberry": {
    "name": "宝石甜莓",
    "url": "https://zh.stardewvalleywiki.com/%E5%AE%9D%E7%9F%B3%E7%94%9C%E8%8E%93",
    "img": "sweetgemberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "旅行货车",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E6%97%85%E8%A1%8C%E8%B4%A7%E8%BD%A6"
    },
    "growth": {
      "initial": 24,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 3000
    }
  },
  "tealeaves": {
    "name": "茶叶",
    "url": "https://zh.stardewvalleywiki.com/%E8%8C%B6%E5%8F%B6",
    "img": "tealeaves.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 2500,
      "specialLoc": "旅行货车",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E6%97%85%E8%A1%8C%E8%B4%A7%E8%BD%A6"
    },
    "growth": {
      "initial": 20,
      "regrow": 1
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50,
      "keg": 100,
      "jarType": "腌菜",
      "kegType": "绿茶"
    }
  },
  "fairyrose": {
    "name": "玫瑰仙子",
    "url": "https://zh.stardewvalleywiki.com/%E7%8E%AB%E7%91%B0%E4%BB%99%E5%AD%90",
    "img": "fairyrose.png",
    "seeds": {
      "pierre": 200,
      "joja": 250,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 290
    }
  },
  "tulip": {
    "name": "郁金香",
    "url": "https://zh.stardewvalleywiki.com/%E9%83%81%E9%87%91%E9%A6%99",
    "img": "tulip.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 30
    }
  },
  "bluejazz": {
    "name": "蓝爵",
    "url": "https://zh.stardewvalleywiki.com/%E8%93%9D%E7%88%B5",
    "img": "bluejazz.png",
    "seeds": {
      "pierre": 30,
      "joja": 37,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    }
  },
  "sunflower": {
    "name": "向日葵",
    "url": "https://zh.stardewvalleywiki.com/%E5%90%91%E6%97%A5%E8%91%B5",
    "img": "sunflower.png",
    "seeds": {
      "pierre": 200,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 80
    }
  },
  "coffeebean": {
    "name": "咖啡豆",
    "url": "https://zh.stardewvalleywiki.com/%E5%92%96%E5%95%A1%E8%B1%86",
    "img": "coffeebean.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 2500,
      "specialLoc": "旅行货车",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E6%97%85%E8%A1%8C%E8%B4%A7%E8%BD%A6"
    },
    "growth": {
      "initial": 10,
      "regrow": 2
    },
    "produce": {
      "extra": 3,
      "extraPerc": 1,
      "price": 15,
      "keg": 150 / 5,
      "kegType": "Coffee"
    }
  },
  "poppy": {
    "name": "虞美人花",
    "url": "https://zh.stardewvalleywiki.com/%E8%99%9E%E7%BE%8E%E4%BA%BA%E8%8A%B1",
    "img": "poppy.png",
    "seeds": {
      "pierre": 100,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 140
    }
  },
  "summerspangle": {
    "name": "夏季亮片",
    "url": "https://zh.stardewvalleywiki.com/%E5%A4%8F%E5%AD%A3%E4%BA%AE%E7%89%87",
    "img": "summerspangle.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90
    }
  },
  "parsnip": {
    "name": "防风草",
    "url": "https://zh.stardewvalleywiki.com/%E9%98%B2%E9%A3%8E%E8%8D%89",
    "img": "parsnip.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 35,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "greenbean": {
    "name": "青豆",
    "url": "https://zh.stardewvalleywiki.com/%E9%9D%92%E8%B1%86",
    "img": "greenbean.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 40,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "cauliflower": {
    "name": "花椰菜",
    "url": "https://zh.stardewvalleywiki.com/%E8%8A%B1%E6%A4%B0%E8%8F%9C",
    "img": "cauliflower.png",
    "seeds": {
      "pierre": 80,
      "joja": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 175,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "potato": {
    "name": "土豆",
    "url": "https://zh.stardewvalleywiki.com/%E5%9C%9F%E8%B1%86",
    "img": "potato.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.2,
      "price": 80,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "garlic": {
    "name": "蒜",
    "url": "https://zh.stardewvalleywiki.com/%E8%92%9C",
    "img": "garlic.png",
    "seeds": {
      "pierre": 40,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 60,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "taroroot": {
    "name": "芋头",
    "url": "https://zh.stardewvalleywiki.com/%E8%8A%8B%E5%A4%B4",
    "img": "taroroot.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 24,
      "specialLoc": "姜岛商人",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E5%A7%9C%E5%B2%9B%E5%95%86%E4%BA%BA"
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 100,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "kale": {
    "name": "甘蓝菜",
    "url": "https://zh.stardewvalleywiki.com/%E7%94%98%E8%93%9D%E8%8F%9C",
    "img": "kale.png",
    "seeds": {
      "pierre": 70,
      "joja": 87,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 110,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "unmilledrice" : {
    "name": "未碾米",
    "url": "https://zh.stardewvalleywiki.com/%E6%9C%AA%E7%A2%BE%E7%B1%B3",
    "img": "unmilledrice.png",
    "seeds": {
      "pierre": 40,
      "joja": 0,
      "special": 1000,
      "specialLoc": "旅行货车",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E6%97%85%E8%A1%8C%E8%B4%A7%E8%BD%A6"
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.11,
      "price": 30,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "rhubarb": {
    "name": "大黄",
    "url": "https://zh.stardewvalleywiki.com/%E5%A4%A7%E9%BB%84",
    "img": "rhubarb.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "绿洲",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E7%BB%BF%E6%B4%B2"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 220,
      "jarType": "果酱",
      "kegType": "果酒"
    }
  },
  "melon": {
    "name": "甜瓜",
    "url": "https://zh.stardewvalleywiki.com/%E7%94%9C%E7%93%9C",
    "img": "melon.png",
    "seeds": {
      "pierre": 80,
      "joja": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 250,
      "jarType": "果酱",
      "kegType": "果酒"
    }
  },
  "tomato": {
    "name": "西红柿",
    "url": "https://zh.stardewvalleywiki.com/%E8%A5%BF%E7%BA%A2%E6%9F%BF",
    "img": "tomato.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.05,
      "price": 60,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "blueberry": {
    "name": "蓝莓",
    "url": "https://zh.stardewvalleywiki.com/%E8%93%9D%E8%8E%93",
    "img": "blueberry.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 4
    },
    "produce": {
      "extra": 2,
      "extraPerc": 1,
      "price": 50,
      "jarType": "果酱",
      "kegType": "果酒"
    }
  },
  "hotpepper": {
    "name": "辣椒",
    "url": "https://zh.stardewvalleywiki.com/%E8%BE%A3%E6%A4%92",
    "img": "hotpepper.png",
    "seeds": {
      "pierre": 40,
      "joja": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.03,
      "price": 40,
      "jarType": "果酱",
      "kegType": "果酒"
    }
  },
  "wheat": {
    "name": "小麦",
    "url": "https://zh.stardewvalleywiki.com/%E5%B0%8F%E9%BA%A6",
    "img": "wheat.png",
    "seeds": {
      "pierre": 10,
      "joja": 12,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 25,
      "keg": 200,
      "jarType": "腌菜",
      "kegType": "啤酒"
    }
  },
  "radish": {
    "name": "萝卜",
    "url": "https://zh.stardewvalleywiki.com/%E8%90%9D%E5%8D%9C",
    "img": "radish.png",
    "seeds": {
      "pierre": 40,
      "joja": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "redcabbage": {
    "name": "红叶卷心菜",
    "url": "https://zh.stardewvalleywiki.com/%E7%BA%A2%E5%8F%B6%E5%8D%B7%E5%BF%83%E8%8F%9C",
    "img": "redcabbage.png",
    "seeds": {
      "pierre": 100,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 260,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "starfruit": {
    "name": "杨桃",
    "url": "https://zh.stardewvalleywiki.com/%E6%9D%A8%E6%A1%83",
    "img": "starfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 400,
      "specialLoc": "绿洲",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E7%BB%BF%E6%B4%B2"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 750,
      "jarType": "果酱",
      "kegType": "果酒"
    }
  },
  "corn": {
    "name": "玉米",
    "url": "https://zh.stardewvalleywiki.com/%E7%8E%89%E7%B1%B3",
    "img": "corn.png",
    "seeds": {
      "pierre": 150,
      "joja": 187,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 14,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 50,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "eggplant": {
    "name": "茄子",
    "url": "https://zh.stardewvalleywiki.com/%E8%8C%84%E5%AD%90",
    "img": "eggplant.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 5
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.002,
      "price": 60,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "artichoke": {
    "name": "洋蓟",
    "url": "https://zh.stardewvalleywiki.com/%E6%B4%8B%E8%93%9F",
    "img": "artichoke.png",
    "seeds": {
      "pierre": 30,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 160,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "pumpkin": {
    "name": "南瓜",
    "url": "https://zh.stardewvalleywiki.com/%E5%8D%97%E7%93%9C",
    "img": "pumpkin.png",
    "seeds": {
      "pierre": 100,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 320,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "bokchoy": {
    "name": "小白菜",
    "url": "https://zh.stardewvalleywiki.com/%E5%B0%8F%E7%99%BD%E8%8F%9C",
    "img": "bokchoy.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 80,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "yam": {
    "name": "山药",
    "url": "https://zh.stardewvalleywiki.com/%E5%B1%B1%E8%8D%AF",
    "img": "yam.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 160,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "cranberries": {
    "name": "蔓越莓",
    "url": "https://zh.stardewvalleywiki.com/%E8%94%93%E8%B6%8A%E8%8E%93",
    "img": "cranberries.png",
    "seeds": {
      "pierre": 240,
      "joja": 300,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 5
    },
    "produce": {
      "extra": 1,
      "extraPerc": 1,
      "price": 75,
      "jarType": "果酱",
      "kegType": "果酒"
    }
  },
  "beet": {
    "name": "甜菜",
    "url": "https://zh.stardewvalleywiki.com/%E7%94%9C%E8%8F%9C",
    "img": "beet.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 20,
      "specialLoc": "绿洲",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E7%BB%BF%E6%B4%B2"
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 100,
      "jarType": "腌菜",
      "kegType": "果汁"
    }
  },
  "ancientfruit": {
    "name": "上古水果",
    "url": "https://zh.stardewvalleywiki.com/%E4%B8%8A%E5%8F%A4%E6%B0%B4%E6%9E%9C",
    "img": "ancientfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 450,
      "specialLoc": "旅行货车",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E6%97%85%E8%A1%8C%E8%B4%A7%E8%BD%A6"
    },
    "growth": {
      "initial": 28,
      "regrow": 7
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 550,
      "jarType": "果酱",
      "kegType": "果酒"
    }
  },
  "cactusfruit": {
    "name": "仙人掌果子",
    "url": "https://zh.stardewvalleywiki.com/%E4%BB%99%E4%BA%BA%E6%8E%8C%E6%9E%9C%E5%AD%90",
    "img": "cactusfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 150,
      "specialLoc": "绿洲",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E7%BB%BF%E6%B4%B2"
    },
    "growth": {
      "initial": 12,
      "regrow": 3
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 75,
      "jarType": "果酱",
      "kegType": "果酒"
    }
  },
  "strawberry": {
    "name": "草莓",
    "url": "https://zh.stardewvalleywiki.com/%E8%8D%89%E8%8E%93",
    "img": "strawberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "复活节",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E5%A4%8D%E6%B4%BB%E8%8A%82"
    },
    "growth": {
      "initial": 8,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.02,
      "price": 120,
      "jarType": "果酱",
      "kegType": "果酒"
    }
  },
  "springseeds": {
    "name": "春季种子",
    "url": "https://zh.stardewvalleywiki.com/%E6%98%A5%E5%AD%A3%E7%A7%8D%E5%AD%90",
    "img": "springseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "旅行货车",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E6%97%85%E8%A1%8C%E8%B4%A7%E8%BD%A6"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Wild Horseradish + Daffodil + Leek + Dandelion) / 4
      "price": (50 + 30 + 60 + 40) / 4
    },
    "isWildseed": true
  },
  "summerseeds": {
    "name": "夏季种子",
    "url": "https://zh.stardewvalleywiki.com/%E5%A4%8F%E5%AD%A3%E7%A7%8D%E5%AD%90",
    "img": "summerseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "旅行货车",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E6%97%85%E8%A1%8C%E8%B4%A7%E8%BD%A6"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Spice Berry + Grape + Sweet Pea) / 3
      "price": (80 + 80 + 50) / 3,
      "jarType": "果酱",
      "kegType": "果酒"
    },
    "isWildseed": true
  },
  "fallseeds": {
    "name": "秋季种子",
    "url": "https://zh.stardewvalleywiki.com/%E7%A7%8B%E5%AD%A3%E7%A7%8D%E5%AD%90",
    "img": "fallseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "旅行货车",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E6%97%85%E8%A1%8C%E8%B4%A7%E8%BD%A6"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Blackberry + Common Mushroom + Hazelnut + Wild Plum) / 4
      "price": (20 + 40 + 90 + 80) / 4,
      "jarType": "果酱",
      "kegType": "果酒"
    },
    "isWildseed": true
  },
  "winterseeds": {
    "name": "冬季种子",
    "url": "https://zh.stardewvalleywiki.com/%E5%86%AC%E5%AD%A3%E7%A7%8D%E5%AD%90",
    "img": "winterseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "旅行货车",
      "specialUrl": "https://zh.stardewvalleywiki.com/%E6%97%85%E8%A1%8C%E8%B4%A7%E8%BD%A6"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Crocus + Crystal Fruit + Snow Yam + Winter Root) / 4
      "price": (60 + 150 + 100 + 70) / 4,
      "jarType": "果酱",
      "kegType": "果酒"
    },
    "isWildseed": true
  }
};