let coins = 10;
let m = 10;
let n = 5;
let turnCount = 0;

// UI更新関数
function updateUI() {
    document.getElementById("coins").textContent = coins;
    document.getElementById("probability").textContent = m;
    document.getElementById("reward").textContent = n;
    document.getElementById("turn-count").textContent = `ターン数: ${turnCount}`;
}

// ポップアップ表示関数
function showPopup(message, isSuccess) {
    const popup = document.getElementById("popup");
    popup.textContent = message;
    popup.classList.remove("hidden", "success", "failure");
    popup.classList.add("visible", isSuccess ? "success" : "failure");

    setTimeout(() => {
        popup.classList.remove("visible");
    }, 1500);
}

// 確率を上げるボタンの処理
function increaseProbability() {
    if (coins > 0 && m < 100) {
        coins -= 1;
        m += 5;
        if (m > 100) m = 100;
        turnCount++;
        updateUI();
    } else if (coins <= 0) {
        showPopup("コインが足りません！", false);
    } else {
        showPopup("確率は100%が上限です！", false);
    }
}

// コインを上げるボタンの処理
function increaseReward() {
    if (coins > 0) {
        coins -= 1;
        n += 5;
        turnCount++;
        updateUI();
    } else {
        showPopup("コインが足りません！", false);
    }
}

// チャレンジボタンの処理
function challenge() {
    turnCount++;
    const random = Math.random() * 100;
    if (random < m) {
        coins += n;
        showPopup(`成功！${n}コインをゲットしました！`, true);
    } else {
        showPopup("失敗しました…", false);
    }
    updateUI();
}

// 初期UIの表示
updateUI();
