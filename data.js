const kanjiData = {
    "1": {
        kanji: "一",
        romaji: "ichi",
        onyomi: "イチ",
        kunyomi: "ひと",
        meaning: "One",
        words: [
            "一つ (ひとつ) - One thing",
            "一人 (ひとり) - One person",
            "一時 (いちじ) - One o'clock",
            "一番 (いちばん) - Best"
        ]
    },
    "2": {
        kanji: "二",
        romaji: "ni",
        onyomi: "ニ",
        kunyomi: "ふた",
        meaning: "Two",
        words: [
            "二つ (ふたつ) - Two things",
            "二人 (ふたり) - Two people",
            "二月 (にがつ) - February",
            "二重 (にじゅう) - Double"
        ]
    },
    "3": {
        kanji: "三",
        romaji: "san",
        onyomi: "サン",
        kunyomi: "み",
        meaning: "Three",
        words: [
            "三つ (みっつ) - Three things",
            "三人 (さんにん) - Three people",
            "三角 (さんかく) - Triangle",
            "三月 (さんがつ) - March"
        ]
    },
    "4": {
        kanji: "四",
        romaji: "shi",
        onyomi: "シ",
        kunyomi: "よ",
        meaning: "Four",
        words: [
            "四つ (よっつ) - Four things",
            "四人 (よにん) - Four people",
            "四季 (しき) - Four seasons",
            "四月 (しがつ) - April"
        ]
    },
    "5": {
        kanji: "五",
        romaji: "go",
        onyomi: "ゴ",
        kunyomi: "いつ",
        meaning: "Five",
        words: [
            "五つ (いつつ) - Five things",
            "五人 (ごにん) - Five people",
            "五感 (ごかん) - Five senses",
            "五月 (ごがつ) - May"
        ]
    },
    "6": {
        kanji: "六",
        romaji: "roku",
        onyomi: "ロク",
        kunyomi: "む",
        meaning: "Six",
        words: [
            "六つ (むっつ) - Six things",
            "六人 (ろくにん) - Six people",
            "六月 (ろくがつ) - June",
            "六角形 (ろっかっけい) - Hexagon"
        ]
    },
    "7": {
        kanji: "七",
        romaji: "shichi",
        onyomi: "シチ",
        kunyomi: "なな",
        meaning: "Seven",
        words: [
            "七つ (ななつ) - Seven things",
            "七人 (しちにん) - Seven people",
            "七月 (しちがつ) - July",
            "七夕 (たなばた) - Star festival"
        ]
    },
    "8": {
        kanji: "八",
        romaji: "hachi",
        onyomi: "ハチ",
        kunyomi: "や",
        meaning: "Eight",
        words: [
            "八つ (やっつ) - Eight things",
            "八人 (はちにん) - Eight people",
            "八月 (はちがつ) - August",
            "八方 (はっぽう) - In all directions"
        ]
    },
    "9": {
        kanji: "九",
        romaji: "kyuu",
        onyomi: "キュウ",
        kunyomi: "ここの",
        meaning: "Nine",
        words: [
            "九つ (ここのつ) - Nine things",
            "九人 (きゅうにん) - Nine people",
            "九月 (くがつ) - September",
            "九州 (きゅうしゅう) - Kyushu (region)"
        ]
    },
    "10": {
        kanji: "十",
        romaji: "juu",
        onyomi: "ジュウ",
        kunyomi: "とお",
        meaning: "Ten",
        words: [
            "十 (じゅう) - Ten",
            "十人 (じゅうにん) - Ten people",
            "十月 (じゅうがつ) - October",
            "十年 (じゅうねん) - Ten years"
        ]
    },
    "11": {
        kanji: "百",
        romaji: "hyaku",
        onyomi: "ヒャク",
        kunyomi: "もも",
        meaning: "Hundred",
        words: [
            "百 (ひゃく) - Hundred",
            "百人 (ひゃくにん) - Hundred people",
            "百年 (ひゃくねん) - Hundred years",
            "三百 (さんびゃく) - Three hundred"
        ]
    },
    "12": {
        kanji: "千",
        romaji: "sen",
        onyomi: "セン",
        kunyomi: "ち",
        meaning: "Thousand",
        words: [
            "千 (せん) - Thousand",
            "千人 (せんにん) - Thousand people",
            "千年 (せんねん) - Thousand years",
            "三千 (さんぜん) - Three thousand"
        ]
    },
    "13": {
        kanji: "万",
        romaji: "man",
        onyomi: "マン",
        kunyomi: "よろず",
        meaning: "Ten thousand",
        words: [
            "万 (まん) - Ten thousand",
            "万人 (まんにん) - Ten thousand people",
            "万年 (まんねん) - Ten thousand years",
            "百万 (ひゃくまん) - One million"
        ]
    },
    "14": {
        kanji: "円",
        romaji: "en",
        onyomi: "エン",
        kunyomi: "まる",
        meaning: "Yen, Circle",
        words: [
            "円 (えん) - Yen (currency)",
            "円形 (えんけい) - Circular shape",
            "円高 (えんだか) - Strong yen",
            "三円 (さんえん) - Three yen"
        ]
    },
    "15": {
        kanji: "目",
        romaji: "me",
        onyomi: "モク",
        kunyomi: "め",
        meaning: "Eye, Target",
        words: [
            "目 (め) - Eye",
            "目標 (もくひょう) - Target",
            "目的 (もくてき) - Purpose",
            "目覚まし (めざまし) - Alarm clock"
        ]
    },
    "16": {
        kanji: "口",
        romaji: "kuchi",
        onyomi: "コウ",
        kunyomi: "くち",
        meaning: "Mouth",
        words: [
            "口 (くち) - Mouth",
            "口紅 (くちべに) - Lipstick",
            "口調 (くちょう) - Tone of voice",
            "口座 (こうざ) - Bank account"
        ]
    },
    "17": {
        kanji: "右",
        romaji: "migi",
        onyomi: "ウ",
        kunyomi: "みぎ",
        meaning: "Right",
        words: [
            "右 (みぎ) - Right",
            "右手 (みぎて) - Right hand",
            "右側 (みぎがわ) - Right side",
            "右折 (うせつ) - Right turn"
        ]
    },
    "18": {
        kanji: "左",
        romaji: "hidari",
        onyomi: "サ",
        kunyomi: "ひだり",
        meaning: "Left",
        words: [
            "左 (ひだり) - Left",
            "左手 (ひだりて) - Left hand",
            "左側 (ひだりがわ) - Left side",
            "左折 (させつ) - Left turn"
        ]
    },
    "19": {
        kanji: "上",
        romaji: "ue",
        onyomi: "ジョウ",
        kunyomi: "うえ",
        meaning: "Up",
        words: [
            "上 (うえ) - Up",
            "上手 (じょうず) - Skillful",
            "上昇 (じょうしょう) - Ascent",
            "上着 (うわぎ) - Jacket"
        ]
    },
    "20": {
        kanji: "下",
        romaji: "shita",
        onyomi: "カ",
        kunyomi: "した",
        meaning: "Down",
        words: [
            "下 (した) - Down",
            "下手 (へた) - Unskillful",
            "下着 (したぎ) - Underwear",
            "地下 (ちか) - Underground"
        ]
    },
    "21": {
        kanji: "大",
        romaji: "dai",
        onyomi: "ダイ",
        kunyomi: "おお",
        meaning: "Big, Large",
        words: [
            "大きい (おおきい) - Big",
            "大学 (だいがく) - University",
            "大人 (おとな) - Adult",
            "大事 (だいじ) - Important"
        ]
    },
    "22": {
        kanji: "小",
        romaji: "shou",
        onyomi: "ショウ",
        kunyomi: "ちい",
        meaning: "Small",
        words: [
            "小さい (ちいさい) - Small",
            "小学校 (しょうがっこう) - Elementary school",
            "小説 (しょうせつ) - Novel",
            "小道 (こみち) - Small road"
        ]
    },
    "23": {
        kanji: "中",
        romaji: "chuu",
        onyomi: "チュウ",
        kunyomi: "なか",
        meaning: "Middle, Inside",
        words: [
            "中 (なか) - Middle",
            "中学校 (ちゅうがっこう) - Middle school",
            "中国 (ちゅうごく) - China",
            "中心 (ちゅうしん) - Center"
        ]
    },
    "24": {
        kanji: "学",
        romaji: "gaku",
        onyomi: "ガク",
        kunyomi: "まな",
        meaning: "Study, Learning",
        words: [
            "学ぶ (まなぶ) - To study",
            "学校 (がっこう) - School",
            "学生 (がくせい) - Student",
            "学問 (がくもん) - Learning"
        ]
    },
    "25": {
        kanji: "校",
        romaji: "kou",
        onyomi: "コウ",
        kunyomi: "",
        meaning: "School",
        words: [
            "学校 (がっこう) - School",
            "校舎 (こうしゃ) - School building",
            "校庭 (こうてい) - Schoolyard",
            "校長 (こうちょう) - Principal"
        ]
    },
    "26": {
        kanji: "生",
        romaji: "sei",
        onyomi: "セイ",
        kunyomi: "いき",
        meaning: "Life, Birth",
        words: [
            "生きる (いきる) - To live",
            "学生 (がくせい) - Student",
            "生まれる (うまれる) - To be born",
            "生活 (せいかつ) - Life, living"
        ]
    },
    "27": {
        kanji: "先",
        romaji: "sen",
        onyomi: "セン",
        kunyomi: "さき",
        meaning: "Previous, Ahead",
        words: [
            "先 (さき) - Ahead",
            "先週 (せんしゅう) - Last week",
            "先月 (せんげつ) - Last month",
            "先生 (せんせい) - Teacher"
        ]
    },
    "28": {
        kanji: "年",
        romaji: "nen",
        onyomi: "ネン",
        kunyomi: "とし",
        meaning: "Year",
        words: [
            "年 (とし) - Year",
            "去年 (きょねん) - Last year",
            "今年 (ことし) - This year",
            "年齢 (ねんれい) - Age"
        ]
    },
    "29": {
        kanji: "水",
        romaji: "sui",
        onyomi: "スイ",
        kunyomi: "みず",
        meaning: "Water",
        words: [
            "水 (みず) - Water",
            "水泳 (すいえい) - Swimming",
            "水曜日 (すいようび) - Wednesday",
            "水道 (すいどう) - Water supply"
        ]
    },
    "30": {
        kanji: "火",
        romaji: "ka",
        onyomi: "カ",
        kunyomi: "ひ",
        meaning: "Fire",
        words: [
            "火 (ひ) - Fire",
            "火曜日 (かようび) - Tuesday",
            "火事 (かじ) - Fire (disaster)",
            "火山 (かざん) - Volcano"
        ]
    },
    "31": {
        kanji: "木",
        romaji: "moku",
        onyomi: "モク",
        kunyomi: "き",
        meaning: "Tree, Wood",
        words: [
            "木 (き) - Tree",
            "木曜日 (もくようび) - Thursday",
            "木材 (もくざい) - Lumber",
            "森 (もり) - Forest"
        ]
    },
    "32": {
        kanji: "金",
        romaji: "kin",
        onyomi: "キン",
        kunyomi: "かね",
        meaning: "Gold, Money",
        words: [
            "金 (きん) - Gold",
            "お金 (おかね) - Money",
            "金曜日 (きんようび) - Friday",
            "金属 (きんぞく) - Metal"
        ]
    },
    "33": {
        kanji: "土",
        romaji: "do",
        onyomi: "ド",
        kunyomi: "つち",
        meaning: "Earth, Soil",
        words: [
            "土 (つち) - Soil",
            "土曜日 (どようび) - Saturday",
            "土地 (とち) - Land",
            "土木 (どぼく) - Civil engineering"
        ]
    },
    "34": {
        kanji: "日",
        romaji: "nichi",
        onyomi: "ニチ",
        kunyomi: "ひ",
        meaning: "Day, Sun",
        words: [
            "日 (ひ) - Day",
            "日本 (にほん) - Japan",
            "日曜日 (にちようび) - Sunday",
            "日記 (にっき) - Diary"
        ]
    },
    "35": {
        kanji: "月",
        romaji: "getsu",
        onyomi: "ゲツ",
        kunyomi: "つき",
        meaning: "Month, Moon",
        words: [
            "月 (つき) - Moon",
            "月曜日 (げつようび) - Monday",
            "一月 (いちがつ) - January",
            "月日 (つきひ) - Time, years"
        ]
    },
    "36": {
        kanji: "火",
        romaji: "ka",
        onyomi: "カ",
        kunyomi: "ひ",
        meaning: "Fire",
        words: [
            "火 (ひ) - Fire",
            "火曜日 (かようび) - Tuesday",
            "火事 (かじ) - Fire (disaster)",
            "火山 (かざん) - Volcano"
        ]
    },
    "37": {
        kanji: "人",
        romaji: "hito",
        onyomi: "ジン",
        kunyomi: "ひと",
        meaning: "Person",
        words: [
            "人 (ひと) - Person",
            "人間 (にんげん) - Human",
            "人々 (ひとびと) - People",
            "人口 (じんこう) - Population"
        ]
    },
    "38": {
        kanji: "子",
        romaji: "ko",
        onyomi: "シ",
        kunyomi: "こ",
        meaning: "Child",
        words: [
            "子供 (こども) - Child",
            "男子 (だんし) - Boy",
            "女子 (じょし) - Girl",
            "子孫 (しそん) - Descendants"
        ]
    },
    "39": {
        kanji: "女",
        romaji: "onna",
        onyomi: "ジョ",
        kunyomi: "おんな",
        meaning: "Woman",
        words: [
            "女 (おんな) - Woman",
            "女性 (じょせい) - Female",
            "女の子 (おんなのこ) - Girl",
            "女王 (じょおう) - Queen"
        ]
    },
    "40": {
        kanji: "男",
        romaji: "otoko",
        onyomi: "ダン",
        kunyomi: "おとこ",
        meaning: "Man",
        words: [
            "男 (おとこ) - Man",
            "男性 (だんせい) - Male",
            "男の子 (おとこのこ) - Boy",
            "男爵 (だんしゃく) - Baron"
        ]
    },
    "41": {
        kanji: "目",
        romaji: "me",
        onyomi: "モク",
        kunyomi: "め",
        meaning: "Eye, Target",
        words: [
            "目 (め) - Eye",
            "目標 (もくひょう) - Target",
            "目的 (もくてき) - Purpose",
            "目覚まし (めざまし) - Alarm clock"
        ]
    },
    "42": {
        kanji: "耳",
        romaji: "mimi",
        onyomi: "ジ",
        kunyomi: "みみ",
        meaning: "Ear",
        words: [
            "耳 (みみ) - Ear",
            "耳鼻科 (じびか) - ENT (ear, nose, and throat)",
            "耳鳴り (みみなり) - Tinnitus",
            "耳元 (みみもと) - Near one's ear"
        ]
    },
    "43": {
        kanji: "足",
        romaji: "ashi",
        onyomi: "ソク",
        kunyomi: "あし",
        meaning: "Foot, Leg",
        words: [
            "足 (あし) - Foot, Leg",
            "足りる (たりる) - To be enough",
            "足元 (あしもと) - At one's feet",
            "足速 (あしばや) - Fast runner"
        ]
    },
    "44": {
        kanji: "手",
        romaji: "te",
        onyomi: "シュ",
        kunyomi: "て",
        meaning: "Hand",
        words: [
            "手 (て) - Hand",
            "手紙 (てがみ) - Letter",
            "手伝う (てつだう) - To help",
            "手元 (てもと) - At hand"
        ]
    },
    "45": {
        kanji: "今",
        romaji: "ima",
        onyomi: "コン",
        kunyomi: "いま",
        meaning: "Now",
        words: [
            "今 (いま) - Now",
            "今日 (きょう) - Today",
            "今週 (こんしゅう) - This week",
            "今後 (こんご) - From now on"
        ]
    },
    "46": {
        kanji: "時",
        romaji: "ji",
        onyomi: "ジ",
        kunyomi: "とき",
        meaning: "Time, Hour",
        words: [
            "時 (とき) - Time",
            "時間 (じかん) - Time (duration)",
            "時計 (とけい) - Clock",
            "時期 (じき) - Period, season"
        ]
    },
    "47": {
        kanji: "分",
        romaji: "bun",
        onyomi: "ブン",
        kunyomi: "わける",
        meaning: "Minute, Part",
        words: [
            "分 (ぶん) - Minute, Part",
            "分ける (わける) - To divide",
            "分かる (わかる) - To understand",
            "十分 (じゅうぶん) - Enough, sufficient"
        ]
    },
    "48": {
        kanji: "大",
        romaji: "dai",
        onyomi: "ダイ",
        kunyomi: "おお",
        meaning: "Big, Large",
        words: [
            "大きい (おおきい) - Big",
            "大学 (だいがく) - University",
            "大人 (おとな) - Adult",
            "大事 (だいじ) - Important"
        ]
    },
    "49": {
        kanji: "小",
        romaji: "shou",
        onyomi: "ショウ",
        kunyomi: "ちい",
        meaning: "Small",
        words: [
            "小さい (ちいさい) - Small",
            "小学校 (しょうがっこう) - Elementary school",
            "小説 (しょうせつ) - Novel",
            "小道 (こみち) - Small road"
        ]
    },
    "50": {
        kanji: "明",
        romaji: "mei",
        onyomi: "メイ",
        kunyomi: "あか",
        meaning: "Bright, Light",
        words: [
            "明るい (あかるい) - Bright",
            "明日 (あした) - Tomorrow",
            "明かり (あかり) - Light",
            "明確 (めいかく) - Clear, definite"
        ]
    },
    "51": {
        kanji: "暗",
        romaji: "an",
        onyomi: "アン",
        kunyomi: "くら",
        meaning: "Dark",
        words: [
            "暗い (くらい) - Dark",
            "暗号 (あんごう) - Code, cipher",
            "暗示 (あんじ) - Suggestion",
            "暗闇 (くらやみ) - Darkness"
        ]
    },
    "52": {
        kanji: "新",
        romaji: "shin",
        onyomi: "シン",
        kunyomi: "あたら",
        meaning: "New",
        words: [
            "新しい (あたらしい) - New",
            "新年 (しんねん) - New Year",
            "新聞 (しんぶん) - Newspaper",
            "新鮮 (しんせん) - Fresh"
        ]
    },
    "53": {
        kanji: "古",
        romaji: "ko",
        onyomi: "コ",
        kunyomi: "ふる",
        meaning: "Old",
        words: [
            "古い (ふるい) - Old",
            "古本 (ふるほん) - Used book",
            "古代 (こだい) - Ancient",
            "古典 (こてん) - Classical literature"
        ]
    },
    "54": {
        kanji: "長",
        romaji: "chou",
        onyomi: "チョウ",
        kunyomi: "なが",
        meaning: "Long",
        words: [
            "長い (ながい) - Long",
            "長男 (ちょうなん) - Eldest son",
            "長女 (ちょうじょ) - Eldest daughter",
            "長期 (ちょうき) - Long term"
        ]
    },
    "55": {
        kanji: "短",
        romaji: "tan",
        onyomi: "タン",
        kunyomi: "みじか",
        meaning: "Short",
        words: [
            "短い (みじかい) - Short",
            "短期 (たんき) - Short term",
            "短所 (たんしょ) - Shortcoming",
            "短文 (たんぶん) - Short sentence"
        ]
    },
    "56": {
        kanji: "高",
        romaji: "kou",
        onyomi: "コウ",
        kunyomi: "たか",
        meaning: "High, Tall",
        words: [
            "高い (たかい) - High, Expensive",
            "高校 (こうこう) - High school",
            "高齢 (こうれい) - Advanced age",
            "高速 (こうそく) - High speed"
        ]
    },
    "57": {
        kanji: "安",
        romaji: "an",
        onyomi: "アン",
        kunyomi: "やす",
        meaning: "Cheap, Safe",
        words: [
            "安い (やすい) - Cheap",
            "安心 (あんしん) - Relief, peace of mind",
            "安全 (あんぜん) - Safety",
            "安定 (あんてい) - Stability"
        ]
    },
    "58": {
        kanji: "低",
        romaji: "tei",
        onyomi: "テイ",
        kunyomi: "ひく",
        meaning: "Low",
        words: [
            "低い (ひくい) - Low",
            "低温 (ていおん) - Low temperature",
            "低速 (ていそく) - Low speed",
            "低下 (ていか) - Decline"
        ]
    },
    "59": {
        kanji: "多",
        romaji: "ta",
        onyomi: "タ",
        kunyomi: "おお",
        meaning: "Many, Much",
        words: [
            "多い (おおい) - Many",
            "多分 (たぶん) - Probably",
            "多国籍 (たこくせき) - Multinational",
            "多忙 (たぼう) - Busy"
        ]
    },
    "60": {
        kanji: "少",
        romaji: "shou",
        onyomi: "ショウ",
        kunyomi: "すく",
        meaning: "Few, Little",
        words: [
            "少ない (すくない) - Few",
            "少し (すこし) - A little",
            "少々 (しょうしょう) - A little, a moment",
            "少数 (しょうすう) - Small number"
        ]
    },
    "61": {
        kanji: "名",
        romaji: "mei",
        onyomi: "メイ",
        kunyomi: "な",
        meaning: "Name",
        words: [
            "名前 (なまえ) - Name",
            "有名 (ゆうめい) - Famous",
            "名刺 (めいし) - Business card",
            "名誉 (めいよ) - Honor"
        ]
    },
    "62": {
        kanji: "行",
        romaji: "kou",
        onyomi: "コウ",
        kunyomi: "いく",
        meaning: "Go",
        words: [
            "行く (いく) - To go",
            "行動 (こうどう) - Action, behavior",
            "行列 (ぎょうれつ) - Line (of people)",
            "旅行 (りょこう) - Travel"
        ]
    },
    "63": {
        kanji: "来",
        romaji: "rai",
        onyomi: "ライ",
        kunyomi: "くる",
        meaning: "Come",
        words: [
            "来る (くる) - To come",
            "来週 (らいしゅう) - Next week",
            "来月 (らいげつ) - Next month",
            "来年 (らいねん) - Next year"
        ]
    },
    "64": {
        kanji: "食",
        romaji: "shoku",
        onyomi: "ショク",
        kunyomi: "たべ",
        meaning: "Eat",
        words: [
            "食べる (たべる) - To eat",
            "食事 (しょくじ) - Meal",
            "食堂 (しょくどう) - Cafeteria",
            "食べ物 (たべもの) - Food"
        ]
    },
    "65": {
        kanji: "飲",
        romaji: "in",
        onyomi: "イン",
        kunyomi: "のむ",
        meaning: "Drink",
        words: [
            "飲む (のむ) - To drink",
            "飲み物 (のみもの) - Drink",
            "飲酒 (いんしゅ) - Drinking alcohol",
            "飲み会 (のみかい) - Drinking party"
        ]
    },
    "66": {
        kanji: "見",
        romaji: "ken",
        onyomi: "ケン",
        kunyomi: "みる",
        meaning: "See, Look",
        words: [
            "見る (みる) - To see",
            "見える (みえる) - To be visible",
            "見学 (けんがく) - Study tour",
            "見物 (けんぶつ) - Sightseeing"
        ]
    },
    "67": {
        kanji: "聞",
        romaji: "bun",
        onyomi: "ブン",
        kunyomi: "きく",
        meaning: "Hear, Ask",
        words: [
            "聞く (きく) - To ask, To listen",
            "聞こえる (きこえる) - To be heard",
            "新聞 (しんぶん) - Newspaper",
            "聞き取る (ききとる) - To understand by listening"
        ]
    },
    "68": {
        kanji: "話",
        romaji: "wa",
        onyomi: "ワ",
        kunyomi: "はなす",
        meaning: "Talk, Speech",
        words: [
            "話す (はなす) - To speak",
            "話 (はなし) - Talk, Story",
            "会話 (かいわ) - Conversation",
            "物語 (ものがたり) - Tale, Story"
        ]
    },
    "69": {
        kanji: "書",
        romaji: "sho",
        onyomi: "ショ",
        kunyomi: "かく",
        meaning: "Write",
        words: [
            "書く (かく) - To write",
            "書類 (しょるい) - Document",
            "図書館 (としょかん) - Library",
            "書店 (しょてん) - Bookstore"
        ]
    },
    "70": {
        kanji: "読",
        romaji: "doku",
        onyomi: "ドク",
        kunyomi: "よむ",
        meaning: "Read",
        words: [
            "読む (よむ) - To read",
            "読書 (どくしょ) - Reading",
            "読み方 (よみかた) - Way of reading",
            "読者 (どくしゃ) - Reader"
        ]
    },
    "71": {
        kanji: "買",
        romaji: "bai",
        onyomi: "バイ",
        kunyomi: "かう",
        meaning: "Buy",
        words: [
            "買う (かう) - To buy",
            "買い物 (かいもの) - Shopping",
            "売買 (ばいばい) - Buy and sell",
            "購入 (こうにゅう) - Purchase"
        ]
    },
    "72": {
        kanji: "売",
        romaji: "bai",
        onyomi: "バイ",
        kunyomi: "うる",
        meaning: "Sell",
        words: [
            "売る (うる) - To sell",
            "売店 (ばいてん) - Shop, stall",
            "売上 (うりあげ) - Sales, revenue",
            "売買 (ばいばい) - Buy and sell"
        ]
    },
    "73": {
        kanji: "思",
        romaji: "shi",
        onyomi: "シ",
        kunyomi: "おもう",
        meaning: "Think",
        words: [
            "思う (おもう) - To think",
            "思い出 (おもいで) - Memory",
            "思考 (しこう) - Thought",
            "感思 (かんし) - Feeling, Thought"
        ]
    },
    "74": {
        kanji: "知",
        romaji: "chi",
        onyomi: "チ",
        kunyomi: "しる",
        meaning: "Know",
        words: [
            "知る (しる) - To know",
            "知識 (ちしき) - Knowledge",
            "知人 (ちじん) - Acquaintance",
            "認知 (にんち) - Recognition"
        ]
    },
    "75": {
        kanji: "言",
        romaji: "gen",
        onyomi: "ゲン",
        kunyomi: "いわ",
        meaning: "Say, Word",
        words: [
            "言う (いう) - To say",
            "言葉 (ことば) - Word, language",
            "言語 (げんご) - Language",
            "発言 (はつげん) - Statement"
        ]
    },
    "76": {
        kanji: "話",
        romaji: "wa",
        onyomi: "ワ",
        kunyomi: "はなす",
        meaning: "Talk",
        words: [
            "話す (はなす) - To speak",
            "話 (はなし) - Story",
            "会話 (かいわ) - Conversation",
            "物語 (ものがたり) - Story"
        ]
    },
    "77": {
        kanji: "会",
        romaji: "kai",
        onyomi: "カイ",
        kunyomi: "あう",
        meaning: "Meet, Association",
        words: [
            "会う (あう) - To meet",
            "会社 (かいしゃ) - Company",
            "会議 (かいぎ) - Meeting",
            "会話 (かいわ) - Conversation"
        ]
    },
    "78": {
        kanji: "使",
        romaji: "shi",
        onyomi: "シ",
        kunyomi: "つかう",
        meaning: "Use",
        words: [
            "使う (つかう) - To use",
            "使用 (しよう) - Use, usage",
            "使者 (ししゃ) - Messenger",
            "使い方 (つかいかた) - Way of using"
        ]
    },
    "79": {
        kanji: "道",
        romaji: "dou",
        onyomi: "ドウ",
        kunyomi: "みち",
        meaning: "Way, Road",
        words: [
            "道 (みち) - Road, Way",
            "道路 (どうろ) - Road",
            "道具 (どうぐ) - Tool",
            "武道 (ぶどう) - Martial art"
        ]
    },
    "80": {
        kanji: "女",
        romaji: "onna",
        onyomi: "ジョ",
        kunyomi: "おんな",
        meaning: "Woman",
        words: [
            "女 (おんな) - Woman",
            "女性 (じょせい) - Female",
            "女の子 (おんなのこ) - Girl",
            "女王 (じょおう) - Queen"
        ]
    },
    "81": {
        kanji: "男",
        romaji: "otoko",
        onyomi: "ダン",
        kunyomi: "おとこ",
        meaning: "Man",
        words: [
            "男 (おとこ) - Man",
            "男性 (だんせい) - Male",
            "男の子 (おとこのこ) - Boy",
            "男友達 (おとこともだち) - Male friend"
        ]
    },
    "82": {
        kanji: "午",
        romaji: "go",
        onyomi: "ゴ",
        kunyomi: "ご",
        meaning: "Noon",
        words: [
            "午前 (ごぜん) - AM, morning",
            "午後 (ごご) - PM, afternoon",
            "午睡 (ごすい) - Afternoon nap",
            "午前中 (ごぜんちゅう) - During the morning"
        ]
    },
    "83": {
        kanji: "百",
        romaji: "hyaku",
        onyomi: "ヒャク",
        kunyomi: "もも",
        meaning: "Hundred",
        words: [
            "百 (ひゃく) - Hundred",
            "百円 (ひゃくえん) - 100 yen",
            "百貨店 (ひゃっかてん) - Department store",
            "百人 (ひゃくにん) - Hundred people"
        ]
    },
    "84": {
        kanji: "千",
        romaji: "sen",
        onyomi: "セン",
        kunyomi: "ち",
        meaning: "Thousand",
        words: [
            "千 (せん) - Thousand",
            "千円 (せんえん) - 1000 yen",
            "千里 (せんり) - A thousand miles",
            "千年 (せんねん) - A thousand years"
        ]
    },
    "85": {
        kanji: "万",
        romaji: "man",
        onyomi: "バン",
        kunyomi: "まん",
        meaning: "Ten thousand",
        words: [
            "万 (まん) - Ten thousand",
            "万歳 (ばんざい) - Hurrah, long life",
            "万年 (まんねん) - Forever",
            "万一 (まんいち) - By any chance"
        ]
    },
    "86": {
        kanji: "入",
        romaji: "nyuu",
        onyomi: "ニュウ",
        kunyomi: "いる",
        meaning: "Enter",
        words: [
            "入る (はいる) - To enter",
            "入れる (いれる) - To put in",
            "入学 (にゅうがく) - Entrance to school",
            "入院 (にゅういん) - Hospitalization"
        ]
    },
    "87": {
        kanji: "出",
        romaji: "shutsu",
        onyomi: "シュツ",
        kunyomi: "でる",
        meaning: "Exit",
        words: [
            "出る (でる) - To exit",
            "出口 (でぐち) - Exit",
            "出発 (しゅっぱつ) - Departure",
            "出演 (しゅつえん) - Performance"
        ]
    },
    "88": {
        kanji: "立",
        romaji: "ritsu",
        onyomi: "リツ",
        kunyomi: "たつ",
        meaning: "Stand",
        words: [
            "立つ (たつ) - To stand",
            "立場 (たちば) - Position",
            "立ち上がる (たちあがる) - To stand up",
            "立派 (りっぱ) - Splendid, admirable"
        ]
    },
    "89": {
        kanji: "休",
        romaji: "kyuu",
        onyomi: "キュウ",
        kunyomi: "やす",
        meaning: "Rest",
        words: [
            "休む (やすむ) - To rest",
            "休み (やすみ) - Holiday, rest",
            "休日 (きゅうじつ) - Day off",
            "休憩 (きゅうけい) - Break"
        ]
    },
    "90": {
        kanji: "会",
        romaji: "kai",
        onyomi: "カイ",
        kunyomi: "あう",
        meaning: "Meet",
        words: [
            "会う (あう) - To meet",
            "会社 (かいしゃ) - Company",
            "会議 (かいぎ) - Meeting",
            "会話 (かいわ) - Conversation"
        ]
    },
    "91": {
        kanji: "社",
        romaji: "sha",
        onyomi: "シャ",
        kunyomi: "やしろ",
        meaning: "Company, Society",
        words: [
            "会社 (かいしゃ) - Company",
            "社会 (しゃかい) - Society",
            "神社 (じんじゃ) - Shrine",
            "社長 (しゃちょう) - Company president"
        ]
    },
    "92": {
        kanji: "町",
        romaji: "machi",
        onyomi: "チョウ",
        kunyomi: "まち",
        meaning: "Town",
        words: [
            "町 (まち) - Town",
            "町内 (ちょうない) - Neighborhood",
            "町人 (まちびと) - Townspeople",
            "商店街 (しょうてんがい) - Shopping street"
        ]
    },
    "93": {
        kanji: "村",
        romaji: "mura",
        onyomi: "ソン",
        kunyomi: "むら",
        meaning: "Village",
        words: [
            "村 (むら) - Village",
            "村人 (むらびと) - Villager",
            "村落 (そんらく) - Village",
            "農村 (のうそん) - Farming village"
        ]
    },
    "94": {
        kanji: "空",
        romaji: "kuu",
        onyomi: "クウ",
        kunyomi: "そら",
        meaning: "Sky, Empty",
        words: [
            "空 (そら) - Sky",
            "空気 (くうき) - Air",
            "空間 (くうかん) - Space",
            "空港 (くうこう) - Airport"
        ]
    },
    "95": {
        kanji: "雨",
        romaji: "ame",
        onyomi: "ウ",
        kunyomi: "あめ",
        meaning: "Rain",
        words: [
            "雨 (あめ) - Rain",
            "雨天 (うてん) - Rainy weather",
            "大雨 (おおあめ) - Heavy rain",
            "雨季 (うき) - Rainy season"
        ]
    },
    "96": {
        kanji: "風",
        romaji: "kaze",
        onyomi: "フウ",
        kunyomi: "かぜ",
        meaning: "Wind",
        words: [
            "風 (ふう) - Wind",
            "風邪 (かぜ) - Cold (illness)",
            "風景 (ふうけい) - Scenery",
            "風力 (ふうりょく) - Wind power"
        ]
    },
    "97": {
        kanji: "電",
        romaji: "den",
        onyomi: "デン",
        kunyomi: "でん",
        meaning: "Electricity",
        words: [
            "電気 (でんき) - Electricity",
            "電車 (でんしゃ) - Electric train",
            "電話 (でんわ) - Telephone",
            "電力 (でんりょく) - Electric power"
        ]
    },
    "98": {
        kanji: "車",
        romaji: "sha",
        onyomi: "シャ",
        kunyomi: "くるま",
        meaning: "Car",
        words: [
            "車 (くるま) - Car",
            "自転車 (じてんしゃ) - Bicycle",
            "車両 (しゃりょう) - Vehicle",
            "車道 (しゃどう) - Roadway"
        ]
    },
    "99": {
        kanji: "駅",
        romaji: "eki",
        onyomi: "エキ",
        kunyomi: "えき",
        meaning: "Station",
        words: [
            "駅 (えき) - Station",
            "駅前 (えきまえ) - In front of the station",
            "駅員 (えきいん) - Station attendant",
            "地下鉄駅 (ちかてつえき) - Subway station"
        ]
    },
    "100": {
        kanji: "手",
        romaji: "te",
        onyomi: "シュ",
        kunyomi: "て",
        meaning: "Hand",
        words: [
            "手 (て) - Hand",
            "手紙 (てがみ) - Letter",
            "手伝う (てつだう) - To help",
            "手元 (てもと) - At hand"
        ]
    },
    "101": {
        kanji: "足",
        romaji: "ashi",
        onyomi: "ソク",
        kunyomi: "あし",
        meaning: "Foot, Leg",
        words: [
            "足 (あし) - Foot, Leg",
            "足りる (たりる) - To be enough",
            "足元 (あしもと) - At one's feet",
            "足速 (あしばや) - Fast runner"
        ]
    },
    "102": {
        kanji: "魚",
        romaji: "sakana",
        onyomi: "ギョ",
        kunyomi: "さかな",
        meaning: "Fish",
        words: [
            "魚 (さかな) - Fish",
            "魚介 (ぎょかい) - Seafood",
            "金魚 (きんぎょ) - Goldfish",
            "魚屋 (さかなや) - Fish shop"
        ]
    },
    "103": {
        kanji: "鳥",
        romaji: "tori",
        onyomi: "チョウ",
        kunyomi: "とり",
        meaning: "Bird",
        words: [
            "鳥 (とり) - Bird",
            "鳥類 (ちょうるい) - Birds (species)",
            "小鳥 (ことり) - Small bird",
            "鳥肉 (とりにく) - Chicken (meat)"
        ]
    },
    "104": {
        kanji: "虫",
        romaji: "mushi",
        onyomi: "チュウ",
        kunyomi: "むし",
        meaning: "Insect",
        words: [
            "虫 (むし) - Insect",
            "虫歯 (むしば) - Cavity",
            "虫けら (むしから) - Bug",
            "昆虫 (こんちゅう) - Insect"
        ]
    },
    "105": {
        kanji: "言",
        romaji: "gen",
        onyomi: "ゲン",
        kunyomi: "いわ",
        meaning: "Say, Word",
        words: [
            "言う (いう) - To say",
            "言葉 (ことば) - Word, language",
            "言語 (げんご) - Language",
            "発言 (はつげん) - Statement"
        ]
    },
    "106": {
        kanji: "語",
        romaji: "go",
        onyomi: "ゴ",
        kunyomi: "かたる",
        meaning: "Language, Speak",
        words: [
            "語る (かたる) - To tell, speak",
            "言語 (げんご) - Language",
            "語学 (ごがく) - Linguistics",
            "外国語 (がいこくご) - Foreign language"
        ]
    },
    "107": {
        kanji: "読",
        romaji: "doku",
        onyomi: "ドク",
        kunyomi: "よむ",
        meaning: "Read",
        words: [
            "読む (よむ) - To read",
            "読書 (どくしょ) - Reading",
            "読み方 (よみかた) - Way of reading",
            "読者 (どくしゃ) - Reader"
        ]
    },
    "108": {
        kanji: "書",
        romaji: "sho",
        onyomi: "ショ",
        kunyomi: "かく",
        meaning: "Write",
        words: [
            "書く (かく) - To write",
            "書類 (しょるい) - Document",
            "図書館 (としょかん) - Library",
            "書店 (しょてん) - Bookstore"
        ]
    },
    "109": {
        kanji: "帰",
        romaji: "ki",
        onyomi: "キ",
        kunyomi: "かえる",
        meaning: "Return",
        words: [
            "帰る (かえる) - To return",
            "帰国 (きこく) - Return to one's country",
            "帰宅 (きたく) - Going home",
            "帰省 (きせい) - Visiting one's hometown"
        ]
    },
    "110": {
        kanji: "会",
        romaji: "kai",
        onyomi: "カイ",
        kunyomi: "あう",
        meaning: "Meet",
        words: [
            "会う (あう) - To meet",
            "会社 (かいしゃ) - Company",
            "会議 (かいぎ) - Meeting",
            "会話 (かいわ) - Conversation"
        ]
    },
    "111": {
        kanji: "子",
        romaji: "shi",
        onyomi: "シ",
        kunyomi: "こ",
        meaning: "Child",
        words: [
            "子 (こ) - Child",
            "子供 (こども) - Children",
            "男子 (だんし) - Boy",
            "女子 (じょし) - Girl"
        ]
    },
    "112": {
        kanji: "兄",
        romaji: "ani",
        onyomi: "ケイ",
        kunyomi: "あに",
        meaning: "Older Brother",
        words: [
            "兄 (あに) - Older brother",
            "兄弟 (きょうだい) - Siblings",
            "義兄 (ぎけい) - Brother-in-law",
            "長兄 (ちょうけい) - Eldest brother"
        ]
    },
    "113": {
        kanji: "姉",
        romaji: "ane",
        onyomi: "シ",
        kunyomi: "あね",
        meaning: "Older Sister",
        words: [
            "姉 (あね) - Older sister",
            "姉妹 (しまい) - Sisters",
            "義姉 (ぎし) - Sister-in-law",
            "長姉 (ちょうし) - Eldest sister"
        ]
    }
};

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const kanjiKey = urlParams.get("kanji");

    if (kanjiKey && kanjiData[kanjiKey]) {
        const data = kanjiData[kanjiKey];

        document.querySelector(".kanji").textContent = data.kanji;
        document.querySelector(".kanji-box .info:nth-child(2)").textContent = `Romaji: ${data.romaji}`;
        document.querySelector(".kanji-box .info:nth-child(3)").textContent = `Onyomi: ${data.onyomi}`;
        document.querySelector(".kanji-box .info:nth-child(4)").textContent = `Kunyomi: ${data.kunyomi}`;
        document.querySelector(".kanji-box .info:nth-child(5)").textContent = `Meaning: ${data.meaning}`;

        const wordsContainer = document.querySelector(".common-words");
        wordsContainer.innerHTML = "<h3>Common Words</h3>" + data.words.map(word => `<p>${word}</p>`).join("");
    } else {
        document.querySelector(".main-content").innerHTML = "<p>Kanji not found.</p>";
    }
};