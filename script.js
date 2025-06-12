// 게임 상태 변수
let currentNode = 'start';
let playerScore = 0;
let visitedNodes = [];

// DOM 요소
const titleScreen = document.getElementById('title-screen');
const gameScreen = document.getElementById('game-screen');
const endingScreen = document.getElementById('ending-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const storyText = document.getElementById('story-text');
const choiceContainer = document.getElementById('choice-container');
const characterImage = document.getElementById('character-image');
const progressElement = document.getElementById('progress');
const endingMessage = document.getElementById('ending-message');
const actionList = document.getElementById('action-list');

// 이벤트 리스너
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', resetGame);

// 게임 시작 함수
function startGame() {
    titleScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    loadNode(currentNode);
}

// 게임 재시작 함수
function resetGame() {
    currentNode = 'start';
    playerScore = 0;
    visitedNodes = [];
    
    endingScreen.classList.add('hidden');
    titleScreen.classList.remove('hidden');
}

// 노드 로드 함수
function loadNode(nodeName) {
    const node = storyData[nodeName];
    
    if (!node) {
        console.error(`노드 ${nodeName}을(를) 찾을 수 없습니다.`);
        return;
    }
    
    // 방문한 노드 기록
    if (!visitedNodes.includes(nodeName)) {
        visitedNodes.push(nodeName);
    }
    
    // 화면 업데이트
    storyText.textContent = node.text;
    storyText.classList.add('fade-in');
    
    // 캐릭터 이미지 설정 (임시 이미지를 사용하거나 실제 이미지가 있으면 그것을 사용)
    try {
        characterImage.style.backgroundImage = `url('${node.image}')`;
    } catch (e) {
        characterImage.style.backgroundImage = "url('images/placeholder.jpg')";
    }
    
    // 선택지 생성
    choiceContainer.innerHTML = '';
    
    if (node.choices) {
        node.choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('choice-btn');
            button.textContent = choice.text;
            
            button.addEventListener('click', () => {
                // 점수 추가 (있는 경우)
                if (choice.points) {
                    playerScore += choice.points;
                }
                
                // 다음 노드로 이동
                currentNode = choice.nextNode;
                loadNode(currentNode);
            });
            
            choiceContainer.appendChild(button);
        });
    }
    
    // 엔딩인 경우
    if (node.isEnding) {
        setTimeout(showEnding, 2000);
    }
    
    // 진행 상황 업데이트
    updateProgress();
    
    // 애니메이션 리셋
    setTimeout(() => {
        storyText.classList.remove('fade-in');
    }, 800);
}

// 진행 상황 업데이트
function updateProgress() {
    // 총 노드 수 (엔딩 제외)
    const totalNodes = Object.keys(storyData).length - 1;
    const visitedNodesCount = visitedNodes.length;
    
    // 진행률 계산 (최대 100%)
    const progressPercentage = Math.min((visitedNodesCount / totalNodes) * 100, 100);
    progressElement.style.width = `${progressPercentage}%`;
}

// 엔딩 화면 표시
function showEnding() {
    gameScreen.classList.add('hidden');
    endingScreen.classList.remove('hidden');
    
    // 플레이어 점수에 따른 엔딩 메시지
    let message;
    
    if (playerScore >= 30) {
        message = "멋진 기후 영웅이 되었어요! 당신의 선택은 지구를 더 나은 곳으로 만들었습니다. 앞으로도 환경을 생각하는 행동을 계속해주세요!";
    } else if (playerScore >= 15) {
        message = "기후 수호자가 되었어요! 좋은 선택을 많이 했지만, 아직 더 배울 것이 있어요. 계속해서 환경을 위한 행동을 이어가세요!";
    } else if (playerScore >= 0) {
        message = "기후 친구가 되었어요! 환경을 생각하는 첫 걸음을 내딛었어요. 앞으로 더 많은 것을 실천해볼까요?";
    } else {
        message = "아직 기후위기에 대해 배울 것이 많아요. 다시 도전해서 더 나은 선택을 해보세요!";
    }
    
    endingMessage.textContent = message;
    
    // 환경 행동 리스트 추가
    actionList.innerHTML = '';
    environmentalActions.forEach(action => {
        const li = document.createElement('li');
        li.textContent = action;
        actionList.appendChild(li);
    });
}

// 이미지 미리 로드 함수
function preloadImages() {
    // 모든 노드의 이미지를 가져옴
    const images = Object.values(storyData)
        .map(node => node.image)
        .filter(image => image); // undefined 제거
    
    // 이미지 미리 로드
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// 페이지 로드 시 이미지 미리 로드
window.addEventListener('load', () => {
    try {
        preloadImages();
    } catch (e) {
        console.log('이미지를 미리 로드하는 중 오류가 발생했습니다.');
    }
}); 