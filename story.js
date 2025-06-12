// 스토리 데이터
const storyData = {
    start: {
        text: "안녕! 나는 지구지킴이 '에코'야. 오늘 우리는 함께 기후위기에 대해 알아보고 지구를 구하는 모험을 떠날 거야. 준비됐니?",
        image: "images/eco_character.jpg",
        choices: [
            { text: "응, 준비됐어!", nextNode: "intro" },
            { text: "기후위기가 뭐야?", nextNode: "explain_climate" }
        ]
    },

    explain_climate: {
        text: "기후위기는 지구의 온도가 점점 올라가면서 생기는 여러 가지 문제를 말해. 이상기후, 해수면 상승, 생태계 파괴 등이 일어나고 있어. 우리가 석유나 석탄 같은 화석연료를 많이 사용해서 이산화탄소가 증가하는 것이 주요 원인이야.",
        image: "images/climate_change.jpg",
        choices: [
            { text: "이제 이해했어. 모험을 시작하자!", nextNode: "intro" }
        ]
    },

    intro: {
        text: "2050년, 지구는 많이 달라졌어. 기온이 크게 올라가고, 바다 수위도 높아졌지. 많은 동물들이 멸종 위기에 처했고, 심각한 가뭄과 홍수가 자주 일어나. 하지만 아직 늦지 않았어! 우리의 선택에 따라 미래는 바뀔 수 있어. 어떤 도전부터 시작할까?",
        image: "images/future_city.jpg",
        choices: [
            { text: "물 부족 문제 해결하기", nextNode: "water_challenge" },
            { text: "플라스틱 오염 문제 해결하기", nextNode: "plastic_challenge" },
            { text: "에너지 문제 해결하기", nextNode: "energy_challenge" }
        ]
    },

    // 물 부족 도전
    water_challenge: {
        text: "학교에서 돌아온 너는 뉴스를 보게 돼. 도시의 물 저장고가 거의 바닥나서 물 사용을 제한한다는 소식이야. 엄마가 물을 아껴 써야 한다고 말씀하셔. 어떻게 할까?",
        image: "images/water_shortage.jpg",
        choices: [
            { text: "샤워 시간을 줄이고 물을 받아서 쓰기로 결정한다", nextNode: "water_save_shower", points: 10 },
            { text: "빗물을 모으는 시스템을 설치하자고 제안한다", nextNode: "water_rain_collection", points: 15 },
            { text: "평소처럼 생활한다. 어차피 곧 비가 올 거야", nextNode: "water_ignore", points: -5 }
        ]
    },

    water_save_shower: {
        text: "샤워 시간을 5분으로 줄이고, 양치할 때는 컵에 물을 받아 쓰기 시작했어. 한 달 후, 가족의 물 사용량이 30% 줄었다는 걸 알게 됐어! 이웃들에게도 이 방법을 알려줄까?",
        image: "images/saving_water.jpg",
        choices: [
            { text: "이웃들에게 물 절약 방법을 알려준다", nextNode: "water_share_methods", points: 10 },
            { text: "학교에서 물 절약 캠페인을 시작한다", nextNode: "water_school_campaign", points: 15 }
        ]
    },

    water_rain_collection: {
        text: "부모님과 함께 간단한 빗물 수집 시스템을 만들었어. 모은 빗물로 화분에 물을 주고 세차도 할 수 있게 됐지! 이웃 아저씨가 너의 아이디어에 감탄하며 어떻게 만들었는지 물어보셨어.",
        image: "images/rain_collection.jpg",
        choices: [
            { text: "이웃 아저씨에게 만드는 방법을 알려드린다", nextNode: "water_share_methods", points: 10 },
            { text: "온라인에 빗물 수집 아이디어를 공유한다", nextNode: "water_online_share", points: 15 }
        ]
    },

    water_ignore: {
        text: "평소처럼 생활했더니 도시의 물 상황이 더 나빠졌어. 이제는 하루에 몇 시간만 수돗물을 쓸 수 있게 됐고, 학교에서도 물 부족에 대한 특별 수업을 하게 됐어. 이대로는 안 되겠다는 생각이 들었어.",
        image: "images/severe_drought.jpg",
        choices: [
            { text: "뒤늦게 물 절약을 시작한다", nextNode: "water_late_action", points: 5 },
            { text: "물 보존에 대해 더 배우고 실천 방법을 찾는다", nextNode: "water_research", points: 10 }
        ]
    },

    water_share_methods: {
        text: "너의 조언 덕분에 이웃들도 물 절약에 동참하게 됐어! 동네 전체가 함께 노력한 결과, 지역 물 사용량이 크게 줄어들었고 시에서 표창장까지 받게 됐어. 다음은 어떤 도전을 해볼까?",
        image: "images/community_action.jpg",
        choices: [
            { text: "플라스틱 오염 문제 해결하기", nextNode: "plastic_challenge" },
            { text: "에너지 문제 해결하기", nextNode: "energy_challenge" }
        ]
    },

    water_school_campaign: {
        text: "학교에서 '한 방울의 소중함'이라는 캠페인을 시작했어. 포스터를 만들고, 조회 시간에 발표도 했지. 선생님들과 친구들이 모두 참여하게 됐고, 학교의 물 사용량이 절반으로 줄었어! 교육청에서도 너의 캠페인을 다른 학교에 소개하기로 했대.",
        image: "images/school_campaign.jpg",
        choices: [
            { text: "플라스틱 오염 문제 해결하기", nextNode: "plastic_challenge" },
            { text: "에너지 문제 해결하기", nextNode: "energy_challenge" }
        ]
    },

    water_online_share: {
        text: "너의 빗물 수집 시스템을 온라인에 공유했더니 수천 명이 좋아요를 누르고 댓글을 달았어! 심지어 지역 뉴스에서 인터뷰 요청이 왔고, 많은 사람들이 너의 아이디어를 따라하기 시작했어. 작은 행동이 큰 변화를 만들 수 있다는 걸 깨달았어.",
        image: "images/online_sharing.jpg",
        choices: [
            { text: "플라스틱 오염 문제 해결하기", nextNode: "plastic_challenge" },
            { text: "에너지 문제 해결하기", nextNode: "energy_challenge" }
        ]
    },

    water_late_action: {
        text: "늦게나마 물 절약을 시작했어. 처음에는 어려웠지만 점점 습관이 되었고, 가족들도 함께 동참했어. 상황이 조금씩 나아지고 있어. 다음은 어떤 도전을 해볼까?",
        image: "images/water_conservation.jpg",
        choices: [
            { text: "플라스틱 오염 문제 해결하기", nextNode: "plastic_challenge" },
            { text: "에너지 문제 해결하기", nextNode: "energy_challenge" }
        ]
    },

    water_research: {
        text: "도서관과 인터넷에서 물 보존에 대해 열심히 공부했어. 새로운 기술과 방법들을 알게 되었고, 그중 몇 가지를 직접 실천해봤어. 학교 과학 프로젝트에서 물 절약 장치를 만들어 1등을 했어!",
        image: "images/water_research.jpg",
        choices: [
            { text: "플라스틱 오염 문제 해결하기", nextNode: "plastic_challenge" },
            { text: "에너지 문제 해결하기", nextNode: "energy_challenge" }
        ]
    },

    // 플라스틱 도전
    plastic_challenge: {
        text: "학교 소풍을 가는 날, 바닷가에 도착했는데 해변에 플라스틱 쓰레기가 너무 많아서 놀랐어. 선생님이 이건 해양 생물에게 아주 위험하다고 설명해주셨어. 어떻게 할까?",
        image: "images/beach_plastic.jpg",
        choices: [
            { text: "친구들과 함께 해변 청소를 한다", nextNode: "plastic_beach_cleanup", points: 10 },
            { text: "일회용품 사용을 줄이기로 결심한다", nextNode: "plastic_reduce", points: 15 },
            { text: "그냥 놀기로 한다. 내가 할 수 있는 일은 없어", nextNode: "plastic_ignore", points: -5 }
        ]
    },

    plastic_beach_cleanup: {
        text: "친구들과 함께 해변 청소를 시작했어. 두 시간 동안 쓰레기 봉투 10개를 가득 채웠지! 지나가던 어른들도 칭찬해주시고, 몇몇은 동참하기도 했어. 이 경험이 너에게 큰 영감을 주었어.",
        image: "images/beach_cleanup.jpg",
        choices: [
            { text: "정기적인 해변 청소 모임을 만든다", nextNode: "plastic_regular_cleanup", points: 15 },
            { text: "플라스틱 줄이기 캠페인을 시작한다", nextNode: "plastic_campaign", points: 10 }
        ]
    },

    plastic_reduce: {
        text: "일회용품 사용을 줄이기로 결심하고, 집에서 텀블러와 에코백을 가져와 사용하기 시작했어. 친구들이 너의 행동에 관심을 보이며 왜 그러는지 물어봤어.",
        image: "images/reusable_items.jpg",
        choices: [
            { text: "친구들에게 플라스틱 문제에 대해 설명한다", nextNode: "plastic_educate_friends", points: 10 },
            { text: "가족들에게도 일회용품을 줄이자고 제안한다", nextNode: "plastic_family_change", points: 15 }
        ]
    },

    plastic_ignore: {
        text: "그냥 놀았지만, 바다거북이 플라스틱에 다친 뉴스를 보고 마음이 불편했어. 선생님이 보여주신 영상에서는 플라스틱으로 가득 찬 바다와 그로 인해 고통받는 해양 생물들의 모습이 나왔어. 이대로는 안 되겠다는 생각이 들었어.",
        image: "images/plastic_ocean.jpg",
        choices: [
            { text: "플라스틱 문제에 대해 더 알아본다", nextNode: "plastic_research", points: 5 },
            { text: "작은 실천부터 시작하기로 한다", nextNode: "plastic_small_steps", points: 10 }
        ]
    },

    plastic_regular_cleanup: {
        text: "'바다 지킴이단'이라는 이름으로 매월 해변 청소 모임을 만들었어. SNS에 홍보하자 점점 더 많은 사람들이 참여하게 됐고, 지역 신문에도 소개됐어! 너의 작은 행동이 커다란 변화를 만들어가고 있어.",
        image: "images/cleanup_group.jpg",
        choices: [
            { text: "에너지 문제 해결하기", nextNode: "energy_challenge" },
            { text: "모험을 마무리하고 결과 보기", nextNode: "ending" }
        ]
    },

    plastic_campaign: {
        text: "'플라스틱 없는 학교 만들기' 캠페인을 시작했어. 포스터를 만들고, 학교 방송에서 발표도 했지. 교장 선생님이 너의 아이디어를 지지해주셔서 학교 매점에서 일회용 빨대와 플라스틱 용기 사용을 중단하기로 결정했어!",
        image: "images/school_plastic_campaign.jpg",
        choices: [
            { text: "에너지 문제 해결하기", nextNode: "energy_challenge" },
            { text: "모험을 마무리하고 결과 보기", nextNode: "ending" }
        ]
    },

    plastic_educate_friends: {
        text: "친구들에게 플라스틱이 자연에서 분해되는 데 수백 년이 걸리고, 미세 플라스틱이 어떻게 먹이사슬에 들어가는지 설명해줬어. 친구들이 놀라며 너의 행동에 동참하기로 했어! 함께 '플라스틱 프리 런치' 그룹을 만들었어.",
        image: "images/friends_eco_lunch.jpg",
        choices: [
            { text: "에너지 문제 해결하기", nextNode: "energy_challenge" },
            { text: "모험을 마무리하고 결과 보기", nextNode: "ending" }
        ]
    },

    plastic_family_change: {
        text: "가족들에게 일회용품 줄이기를 제안했더니 모두 동의했어! 장바구니와 다회용기를 들고 장을 보러 가고, 집에서 플라스틱 사용을 최소화하는 규칙을 만들었지. 한 달 후, 집에서 나오는 플라스틱 쓰레기가 절반으로 줄었어!",
        image: "images/family_eco_shopping.jpg",
        choices: [
            { text: "에너지 문제 해결하기", nextNode: "energy_challenge" },
            { text: "모험을 마무리하고 결과 보기", nextNode: "ending" }
        ]
    },

    plastic_research: {
        text: "플라스틱 문제에 대해 열심히 공부했어. 플라스틱이 만들어지는 과정부터 재활용되는 방법까지 알게 됐지. 학교 발표 시간에 이 내용을 친구들에게 알려주었고, 선생님이 너의 발표를 매우 칭찬해주셨어.",
        image: "images/plastic_research.jpg",
        choices: [
            { text: "에너지 문제 해결하기", nextNode: "energy_challenge" },
            { text: "모험을 마무리하고 결과 보기", nextNode: "ending" }
        ]
    },

    plastic_small_steps: {
        text: "작은 실천부터 시작했어. 빨대 사용을 거부하고, 물병을 재사용하며, 장난감도 플라스틱 대신 나무로 된 것을 선택하기 시작했지. 작은 변화지만, 지속적으로 실천하니 뿌듯한 마음이 들었어.",
        image: "images/small_changes.jpg",
        choices: [
            { text: "에너지 문제 해결하기", nextNode: "energy_challenge" },
            { text: "모험을 마무리하고 결과 보기", nextNode: "ending" }
        ]
    },

    // 에너지 도전
    energy_challenge: {
        text: "요즘 이상기후로 날씨가 더 더워져서 에어컨을 많이 틀게 돼. 뉴스에서는 전력 사용량이 너무 많아 정전이 발생할 수 있다고 경고하고 있어. 전기 요금 고지서를 본 부모님이 걱정하시는 모습을 봤어. 어떻게 할까?",
        image: "images/hot_weather.jpg",
        choices: [
            { text: "에너지 절약 방법을 찾아본다", nextNode: "energy_save", points: 10 },
            { text: "재생 에너지에 대해 알아본다", nextNode: "energy_renewable", points: 15 },
            { text: "그냥 평소처럼 지낸다", nextNode: "energy_ignore", points: -5 }
        ]
    },

    energy_save: {
        text: "에너지 절약 방법을 찾아보니 생각보다 쉬운 방법들이 많았어. 사용하지 않는 전자기기의 플러그를 뽑고, 창문에 커튼을 달아 열기를 차단하고, LED 전구로 교체하는 등의 방법을 실천해봤어.",
        image: "images/energy_saving.jpg",
        choices: [
            { text: "가족들과 함께 '전기 없는 날'을 만든다", nextNode: "energy_no_electricity_day", points: 15 },
            { text: "이웃들에게 에너지 절약 팁을 공유한다", nextNode: "energy_share_tips", points: 10 }
        ]
    },

    energy_renewable: {
        text: "재생 에너지에 대해 알아보니 태양광, 풍력, 지열 등 다양한 방법이 있었어. 특히 태양광 패널이 흥미로웠고, 집에 설치할 수 있을지 부모님과 상의해봤어.",
        image: "images/solar_panels.jpg",
        choices: [
            { text: "미니 태양광 패널 키트를 사서 실험해본다", nextNode: "energy_solar_experiment", points: 15 },
            { text: "학교에 재생 에너지 사용을 제안한다", nextNode: "energy_school_proposal", points: 10 }
        ]
    },

    energy_ignore: {
        text: "평소처럼 지내다가 어느 날 갑자기 정전이 발생했어. 도시 전체가 전기 없이 몇 시간을 보내야 했지. 이 경험이 너에게 에너지가 얼마나 중요한지 깨닫게 해주었어.",
        image: "images/blackout.jpg",
        choices: [
            { text: "에너지 절약의 필요성을 깨닫고 실천하기 시작한다", nextNode: "energy_late_action", points: 5 },
            { text: "대체 에너지에 대해 더 알아본다", nextNode: "energy_alternative_research", points: 10 }
        ]
    },

    energy_no_electricity_day: {
        text: "매주 토요일 저녁 8시부터 9시까지 '전기 없는 시간'을 만들었어. 촛불을 켜고 보드게임을 하거나 이야기를 나누며 가족과 함께하는 특별한 시간이 됐지. 처음에는 불편했지만, 이제는 모두가 기다리는 시간이 됐어!",
        image: "images/candlelight_family.jpg",
        choices: [
            { text: "모험을 마무리하고 결과 보기", nextNode: "ending" }
        ]
    },

    energy_share_tips: {
        text: "이웃들에게 에너지 절약 팁을 담은 안내문을 만들어 나눠줬어. 아파트 단지 전체가 함께 노력한 결과, 다음 달 전체 전기 사용량이 15% 감소했대! 관리사무소에서 너의 노력을 치하하는 편지까지 받았어.",
        image: "images/neighborhood_tips.jpg",
        choices: [
            { text: "모험을 마무리하고 결과 보기", nextNode: "ending" }
        ]
    },

    energy_solar_experiment: {
        text: "미니 태양광 패널 키트로 실험을 해봤어. 작은 선풍기와 LED 전구를 태양 에너지로 작동시키는 데 성공했지! 과학 박람회에서 이 프로젝트를 발표했더니 많은 사람들이 관심을 보였어.",
        image: "images/solar_experiment.jpg",
        choices: [
            { text: "모험을 마무리하고 결과 보기", nextNode: "ending" }
        ]
    },

    energy_school_proposal: {
        text: "학교에 재생 에너지 사용을 제안하는 편지를 썼어. 교장 선생님이 너의 아이디어에 감동받아 학교 옥상에 작은 태양광 패널을 설치하기로 결정했어! 설치 과정을 학생들에게 교육 프로그램으로 보여주기로 했대.",
        image: "images/school_solar.jpg",
        choices: [
            { text: "모험을 마무리하고 결과 보기", nextNode: "ending" }
        ]
    },

    energy_late_action: {
        text: "정전 경험 후, 에너지 절약을 실천하기 시작했어. 사용하지 않는 방의 불을 끄고, 전자기기의 대기전력을 차단하고, 에어컨 대신 부채를 사용하는 등의 노력을 했지. 작은 변화였지만, 전기 요금이 확실히 줄어들었어!",
        image: "images/energy_conservation.jpg",
        choices: [
            { text: "모험을 마무리하고 결과 보기", nextNode: "ending" }
        ]
    },

    energy_alternative_research: {
        text: "대체 에너지에 대해 열심히 공부했어. 다양한 친환경 에너지 방식과 각각의 장단점을 알게 됐지. 미래에는 환경 공학자가 되어 더 효율적인 재생 에너지를 개발하고 싶다는 꿈이 생겼어!",
        image: "images/energy_research.jpg",
        choices: [
            { text: "모험을 마무리하고 결과 보기", nextNode: "ending" }
        ]
    },

    // 결말
    ending: {
        text: "축하해! 너는 기후위기에 맞서는 여러 도전을 경험했어. 네가 한 선택들이 미래를 바꾸는 데 기여했어. 기억해, 작은 행동들이 모여 큰 변화를 만들 수 있어. 앞으로도 지구를 지키는 기후 영웅으로 살아가길 바랄게!",
        image: "images/happy_earth.jpg",
        isEnding: true
    }
};

// 환경 행동 리스트
const environmentalActions = [
    "물 절약하기: 양치할 때 컵 사용하기, 짧게 샤워하기",
    "전기 절약하기: 사용하지 않는 전자기기 플러그 뽑기, LED 전구 사용하기",
    "일회용품 줄이기: 텀블러와 에코백 사용하기",
    "분리수거 철저히 하기",
    "대중교통 이용하기",
    "로컬 푸드 먹기: 가까운 곳에서 생산된 식품 구매하기",
    "채식 식단 시도해보기: 일주일에 하루는 고기 없는 날로 정하기",
    "나무 심기: 학교나 집 주변에 식물 가꾸기",
    "중고 물품 이용하기: 필요한 물건은 새로 사기 전에 중고 시장 확인하기",
    "환경 단체 활동에 참여하기"
]; 