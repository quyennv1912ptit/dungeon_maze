// ============================================================
// DATA
// ============================================================
const SWORDS = [
    { id: 's01', name: 'Kiếm Gỉ Sét', icon: '🗡️', rarity: 'common', desc: 'Cũ kỹ nhưng vẫn sắc bén.' },
    { id: 's02', name: 'Dao Găm Gỗ', icon: '🔪', rarity: 'common', desc: 'Làm từ gỗ cứng rừng sâu.' },
    { id: 's03', name: 'Lưỡi Đồng', icon: '⚔️', rarity: 'common', desc: 'Đồng thau thô sơ.' },
    { id: 's04', name: 'Kiếm Lính', icon: '🗡️', rarity: 'common', desc: 'Tiêu chuẩn của lính thường.' },
    { id: 's05', name: 'Dao Bếp Ma', icon: '🔪', rarity: 'common', desc: 'Ai đó đã bỏ quên...' },
    { id: 's06', name: 'Kiếm Cùn', icon: '🗡️', rarity: 'common', desc: 'Cần mài thêm.' },
    { id: 's07', name: 'Kiếm Bạc Rừng', icon: '🌿', rarity: 'uncommon', desc: 'Được rèn dưới ánh trăng.' },
    { id: 's08', name: 'Lưỡi Ngọc Thạch', icon: '💎', rarity: 'uncommon', desc: 'Màu xanh lá huyền ảo.' },
    { id: 's09', name: 'Kiếm Thợ Săn', icon: '🏹', rarity: 'uncommon', desc: 'Nhẹ và cân bằng hoàn hảo.' },
    { id: 's10', name: 'Dao Lửa Nhỏ', icon: '🔥', rarity: 'uncommon', desc: 'Ấm tay khi cầm.' },
    { id: 's11', name: 'Kiếm Sấm Sét', icon: '⚡', rarity: 'uncommon', desc: 'Truyền điện khi va chạm.' },
    { id: 's12', name: 'Lưỡi Băng Giá', icon: '❄️', rarity: 'uncommon', desc: 'Làm lạnh mọi thứ xung quanh.' },
    { id: 's13', name: 'Kiếm Rồng Xanh', icon: '🐉', rarity: 'rare', desc: 'Được khắc hình rồng cổ đại.' },
    { id: 's14', name: 'Lưỡi Hồn Ma', icon: '👻', rarity: 'rare', desc: 'Xuyên qua mọi lá chắn.' },
    { id: 's15', name: 'Kiếm Máu Đỏ', icon: '🩸', rarity: 'rare', desc: 'Uống máu kẻ thù mạnh thêm.' },
    { id: 's16', name: 'Kiếm Thiên Thạch', icon: '☄️', rarity: 'rare', desc: 'Rèn từ mảnh thiên thạch.' },
    { id: 's17', name: 'Lưỡi Bão Tố', icon: '🌪️', rarity: 'rare', desc: 'Quay tròn khi tấn công.' },
    { id: 's18', name: 'Kiếm Mặt Trăng', icon: '🌙', rarity: 'rare', desc: 'Sáng hơn vào ban đêm.' },
    { id: 's19', name: 'Kiếm Hoàng Đế', icon: '👑', rarity: 'epic', desc: 'Chỉ dành cho hoàng tộc.' },
    { id: 's20', name: 'Lưỡi Tử Thần', icon: '💀', rarity: 'epic', desc: 'Nhìn thấy là tim đập mạnh.' },
    { id: 's21', name: 'Kiếm Vũ Trụ', icon: '🌌', rarity: 'epic', desc: 'Chứa đựng cả thiên hà.' },
    { id: 's22', name: 'Lưỡi Phượng Hoàng', icon: '🦅', rarity: 'epic', desc: 'Hồi sinh từ tro tàn.' },
    { id: 's23', name: 'Kiếm Bóng Tối', icon: '🌑', rarity: 'epic', desc: 'Hấp thụ ánh sáng xung quanh.' },
    { id: 's24', name: 'Lưỡi Thần Sấm', icon: '⚡', rarity: 'epic', desc: 'Sức mạnh của thần linh.' },
    { id: 's25', name: 'Excalibur', icon: '✨', rarity: 'legendary', desc: 'Thanh kiếm của vua Arthur.' },
    { id: 's26', name: 'Kiếm Trời Xé', icon: '🌟', rarity: 'legendary', desc: 'Xé toạc không gian thời gian.' },
    { id: 's27', name: 'Durandal Bất Tử', icon: '💫', rarity: 'legendary', desc: 'Không thể bị phá hủy.' },
    { id: 's28', name: 'Gram Diệt Long', icon: '🐲', rarity: 'legendary', desc: 'Giết được rồng thần.' },
    { id: 's29', name: 'Kiếm Nguyên Thủy', icon: '🌠', rarity: 'legendary', desc: 'Kiếm đầu tiên trên thế giới.' },
    { id: 's30', name: 'Lưỡi Tạo Hóa', icon: '🔱', rarity: 'legendary', desc: 'Rèn bởi chính thần tạo hóa.' },
];

const RARITY_WEIGHTS = { common: 45, uncommon: 30, rare: 16, epic: 7, legendary: 2 };
const RARITY_LABELS = { common: 'Thường', uncommon: 'Không Phổ Biến', rare: 'Hiếm', epic: 'Sử Thi', legendary: 'Huyền Thoại' };
const RARITY_COLORS = { common: '#A0A0A0', uncommon: '#4ADE80', rare: '#60A5FA', epic: '#C084FC', legendary: '#FFD700' };

// ============================================================
// GAME STATE
// ============================================================
let state = {
    screen: 'menu',
    level: 1,
    totalLevels: 5,
    score: 0,
    totalScore: 0,
    startingAP: 10,
    replaysLeft: 2,
    collection: new Set(),
    pendingLoot: [],
};

let grid = [], rows = 0, cols = 0;
let initialGrid = [];
let initialAP = 0;
let initialStars = [];

let startPos = null, exitPos = null, stars = [];
let cellRenderState = [];
let starsCollected = 0;
let actionPoints = 0;
let currentTool = 'build';

// DFS & Animation Control
let running = false;
let isPaused = false;
let animFrame = null;
let dfsPath = [];
let pathIdx = 0;
let starsOnPath = [];
let heroPx = { x: 0, y: 0 };

// Connected Components
let componentColors = [];
let componentCount = 0;

// Speed Control
let speedMultiplier = 1;
const BASE_SPEED = 6;

const CELL = { FLOOR: 0, WALL: 1, START: 2, EXIT: 3, STAR: 4 };

// Canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let cellSize = 32;

// ============================================================
// SCREEN MANAGEMENT
// ============================================================
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function showCollection() {
    renderCollection();
    showScreen('collectionScreen');
}

function showIntro() {
    showScreen('introScreen');
}

function closeLoot() {
    closeAllModals();
}

function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}

function showNotif(msg, duration = 2500) {
    const n = document.getElementById('notification');
    n.textContent = msg;
    n.classList.add('show');
    setTimeout(() => n.classList.remove('show'), duration);
}

function toggleStackPanel(show) {
    const panel = document.getElementById('stackPanel');
    if (show) panel.classList.add('active');
    else panel.classList.remove('active');
}

function quitGame() {
    showNotif('Hẹn gặp lại👋');

    setTimeout(() => {
        window.close();

        if (!window.closed) {
            alert("Trình duyệt đã chặn lệnh đóng tab tự động. Bạn vui lòng đóng tab thủ công nhé!");
        }
    }, 1000);
}

// ============================================================
// LỊCH SỬ STACK (LOG)
// ============================================================
function showStackLog() {
    document.getElementById('levelEndModal').classList.remove('active');
    const tbody = document.getElementById('stackLogBody');
    let html = '';

    dfsPath.forEach((step, index) => {
        let action = '', rowClass = '', icon = '';
        if (step.isBacktrack) { action = 'Lùi lại (Pop)'; rowClass = 'log-row-pop'; icon = '🔙'; }
        else if (step.type === CELL.EXIT) { action = 'Đến Đích!'; rowClass = 'log-row-exit'; icon = '🏁'; }
        else if (step.type === CELL.STAR) { action = 'Ăn Sao (Push)'; rowClass = 'log-row-star'; icon = '⭐'; }
        else { action = 'Tiến vào (Push)'; rowClass = 'log-row-push'; icon = '➡️'; }

        const reversedStack = [...step.stackState].reverse();
        const stackStr = reversedStack.length > 0 ? reversedStack.join(' → ') : '<i style="color:#666">Rỗng</i>';

        html += `<tr class="${rowClass}">
          <td style="text-align:center; font-weight:700">${index + 1}</td>
          <td style="font-weight:600">${icon} ${action}</td>
          <td style="font-family:monospace; font-size:0.9rem">[C${step.c}, D${step.r}]</td>
          <td style="font-size: 0.8rem; color: #9CA3AF;">${stackStr}</td>
        </tr>`;
    });

    tbody.innerHTML = html;
    document.getElementById('stackLogModal').classList.add('active');
}

function closeStackLog() {
    document.getElementById('stackLogModal').classList.remove('active');
    document.getElementById('levelEndModal').classList.add('active');
}

// ============================================================
// MENU & SPEED
// ============================================================
function startGame() {
    state.startingAP = 10;
    state.level = 1;
    state.totalScore = 0;
    state.pendingLoot = [];
    showScreen('gameScreen');
    generateLevel();
}

function goMenu() {
    if (animFrame) { cancelAnimationFrame(animFrame); animFrame = null; }
    running = false;
    isPaused = false;
    toggleStackPanel(false);
    showScreen('menuScreen');
}

function updateSpeed(val) {
    speedMultiplier = parseFloat(val);
    document.getElementById('speedValue').textContent = speedMultiplier.toFixed(1);
}

// ============================================================
// LEVEL GENERATION
// ============================================================
function generateLevel() {
    if (animFrame) cancelAnimationFrame(animFrame);
    toggleStackPanel(false);

    // Reset states
    componentColors = [];
    componentCount = 0;
    running = false;
    isPaused = false;
    pathIdx = 0;
    updateRunButton();

    const cfg = getLevelConfig(state.level);
    rows = cfg.rows; cols = cfg.cols;
    actionPoints = state.startingAP;
    starsCollected = 0;
    dfsPath = [];
    cellRenderState = Array.from({ length: rows }, () => Array(cols).fill(0));
    currentTool = 'build';
    state.replaysLeft = 2;

    const gameArea = document.querySelector('.game-area');
    cellSize = Math.floor(Math.min((gameArea.clientWidth - 20) / cols, (gameArea.clientHeight - 20) / rows));
    cellSize = Math.max(18, Math.min(cellSize, 36));
    canvas.width = cols * cellSize;
    canvas.height = rows * cellSize;

    grid = Array.from({ length: rows }, () => Array(cols).fill(CELL.FLOOR));
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) if (Math.random() < cfg.walls) grid[r][c] = CELL.WALL;
    }

    let attempts = 0;
    do {
        startPos = randomPos(); exitPos = randomPos(); attempts++;
    } while ((distance(startPos, exitPos) < (rows + cols) / 2 || posEq(startPos, exitPos)) && attempts < 500);

    grid[startPos.r][startPos.c] = CELL.START;
    grid[exitPos.r][exitPos.c] = CELL.EXIT;
    ensureBasicPath();

    stars = [];
    let starAtts = 0;
    while (stars.length < 5 && starAtts < 1000) {
        const p = randomPos();
        if (grid[p.r][p.c] === CELL.FLOOR && !stars.some(s => posEq(s, p))) {
            grid[p.r][p.c] = CELL.STAR; stars.push(p);
        }
        starAtts++;
    }

    initialGrid = grid.map(row => [...row]);
    initialAP = actionPoints;
    initialStars = stars.map(s => ({ ...s }));
    heroPx = { x: startPos.c * cellSize + cellSize / 2, y: startPos.r * cellSize + cellSize / 2 };

    updateHUD();
    setTool('build');
    drawGrid();
}

function getLevelConfig(level) {
    const configs = [
        { rows: 10, cols: 14, walls: 0.25 },
        { rows: 12, cols: 16, walls: 0.28 },
        { rows: 14, cols: 18, walls: 0.30 },
        { rows: 15, cols: 20, walls: 0.32 },
        { rows: 16, cols: 22, walls: 0.35 },
    ];
    return configs[Math.min(level - 1, 4)];
}

function ensureBasicPath() {
    let r = startPos.r, c = startPos.c;
    const er = exitPos.r, ec = exitPos.c;
    while (r !== er) { r < er ? r++ : r--; if (grid[r][c] === CELL.WALL) grid[r][c] = CELL.FLOOR; }
    while (c !== ec) { c < ec ? c++ : c--; if (grid[r][c] === CELL.WALL) grid[r][c] = CELL.FLOOR; }
}

function randomPos() { return { r: Math.floor(Math.random() * rows), c: Math.floor(Math.random() * cols) }; }
function distance(a, b) { return Math.abs(a.r - b.r) + Math.abs(a.c - b.c); }
function posEq(a, b) { return a.r === b.r && a.c === b.c; }

// ============================================================
// RESTART & TOOLS
// ============================================================
function restartLevel() {
    if (animFrame) cancelAnimationFrame(animFrame);
    running = false; isPaused = false; pathIdx = 0;
    updateRunButton();
    toggleStackPanel(false);

    grid = initialGrid.map(row => [...row]);
    stars = initialStars.map(s => ({ ...s }));
    actionPoints = initialAP;
    starsCollected = 0;
    dfsPath = [];
    cellRenderState = Array.from({ length: rows }, () => Array(cols).fill(0));
    heroPx = { x: startPos.c * cellSize + cellSize / 2, y: startPos.r * cellSize + cellSize / 2 };
    componentColors = [];
    componentCount = 0;

    updateHUD();
    setTool('build');
    drawGrid();
    drawHero();
}

function restartFromModal() {
    if (state.replaysLeft > 0) {
        state.replaysLeft--; state.pendingLoot = [];
        document.getElementById('levelEndModal').classList.remove('active');
        restartLevel();
        showNotif(`🔄 Còn ${state.replaysLeft} lần chơi lại!`);
    }
}

function setTool(tool) {
    if (running) return;
    currentTool = tool;
    document.getElementById('btnBuild').classList.toggle('active', tool === 'build');
    document.getElementById('btnDestroy').classList.toggle('active', tool === 'destroy');
    const info = { build: 'Chọn ô sàn để đặt tường', destroy: 'Chọn tường để phá hủy', run: '' };
    document.getElementById('toolInfo').textContent = info[tool] || '';
}

canvas.addEventListener('click', e => {
    if (running) return;
    const rect = canvas.getBoundingClientRect();
    const c = Math.floor((e.clientX - rect.left) / cellSize);
    const r = Math.floor((e.clientY - rect.top) / cellSize);
    if (r < 0 || r >= rows || c < 0 || c >= cols) return;

    if (currentTool === 'build' && grid[r][c] === CELL.FLOOR && actionPoints > 0) {
        grid[r][c] = CELL.WALL; actionPoints--; updateHUD(); drawGrid();
    } else if (currentTool === 'destroy' && grid[r][c] === CELL.WALL && actionPoints > 0) {
        grid[r][c] = CELL.FLOOR; actionPoints--; updateHUD(); drawGrid();
    }
});

// ============================================================
// STACK & DFS LOGIC
// ============================================================
function renderStackUI(stackArr) {
    const content = document.getElementById('stackContent');
    if (!stackArr || stackArr.length === 0) {
        content.innerHTML = '<div style="color:#666;text-align:center;font-style:italic;font-size:0.85rem">Stack rỗng</div>';
        return;
    }
    const reversed = [...stackArr].reverse();
    content.innerHTML = reversed.map((item, index) => {
        const isTop = index === 0;
        return `<div class="stack-item ${isTop ? 'top' : ''}">${isTop ? '📍 ' : ''}${item}</div>`;
    }).join('');
    content.scrollTop = 0; // Tự động cuộn lên đầu (phần tử mới nhất)
}

function findConnectedComponents() {
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    componentColors = Array.from({ length: rows }, () => Array(cols).fill(null));
    componentCount = 0;
    const isFloor = (t) => t !== CELL.WALL;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (isFloor(grid[r][c]) && !visited[r][c]) {
                componentCount++;
                const color = `hsla(${(componentCount * 137.5) % 360}, 60%, 40%, 0.35)`;
                const q = [{ r, c }]; visited[r][c] = true;
                while (q.length > 0) {
                    const curr = q.shift(); componentColors[curr.r][curr.c] = color;
                    [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(([dr, dc]) => {
                        const nr = curr.r + dr, nc = curr.c + dc;
                        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && isFloor(grid[nr][nc]) && !visited[nr][nc]) {
                            visited[nr][nc] = true; q.push({ r: nr, c: nc });
                        }
                    });
                }
            }
        }
    }
    showNotif(`Tìm thấy ${componentCount} vùng liên thông!`);
}

function runDFS() {
    if (!running) {
        findConnectedComponents();
        running = true; isPaused = false; pathIdx = 0; starsOnPath = [];
        toggleStackPanel(true);

        const workGrid = grid.map(row => [...row]);
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
        dfsPath = [];
        let currentStack = [];

        const dfs = (r, c, pR, pC) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] || workGrid[r][c] === CELL.WALL) return false;
            visited[r][c] = true;
            currentStack.push(`[C${c}, D${r}]`);
            dfsPath.push({ r, c, type: workGrid[r][c], isBacktrack: false, stackState: [...currentStack] });
            if (workGrid[r][c] === CELL.EXIT) return true;
            const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
            for (const [dr, dc] of dirs) if (dfs(r + dr, c + dc, r, c)) return true;
            currentStack.pop();
            if (pR !== undefined) dfsPath.push({ r: pR, c: pC, type: workGrid[pR][pC], isBacktrack: true, stackState: [...currentStack] });
            return false;
        };

        if (!dfs(startPos.r, startPos.c)) {
            showNotif('Không có lối thoát!'); running = false; updateRunButton(); return;
        }
        updateRunButton();
        animFrame = requestAnimationFrame(animate);
    } else {
        isPaused = !isPaused;
        updateRunButton();
        if (!isPaused) animFrame = requestAnimationFrame(animate);
    }
}

function animate() {
    if (!running || isPaused) return;
    if (pathIdx >= dfsPath.length) {
        running = false; updateRunButton();
        showLootSequence(starsOnPath, () => showLevelEnd(starsOnPath.length));
        return;
    }

    const step = dfsPath[pathIdx];
    const targetX = step.c * cellSize + cellSize / 2, targetY = step.r * cellSize + cellSize / 2;
    const speed = BASE_SPEED * speedMultiplier;
    const dx = targetX - heroPx.x, dy = targetY - heroPx.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= speed) {
        heroPx.x = targetX; heroPx.y = targetY;
        renderStackUI(step.stackState);
        if (step.isBacktrack) { if (pathIdx > 0) cellRenderState[dfsPath[pathIdx - 1].r][dfsPath[pathIdx - 1].c] = 2; }
        else {
            cellRenderState[step.r][step.c] = 1;
            if (step.type === CELL.STAR && grid[step.r][step.c] === CELL.STAR) {
                starsOnPath.push(step); starsCollected++; grid[step.r][step.c] = CELL.FLOOR; updateHUD();
            }
        }
        pathIdx++;
    } else {
        heroPx.x += (dx / dist) * speed; heroPx.y += (dy / dist) * speed;
    }
    drawGrid(); drawHero();
    animFrame = requestAnimationFrame(animate);
}

// ============================================================
// DRAWING & UI UPDATES
// ============================================================
const COLORS = {
    floor: '#1C1410', wall: '#3D2B1F', wallTop: '#5C4030', start: '#064E3B',
    exit: '#1E3A8A', grid: '#2D1F15', visited: 'rgba(56, 189, 248, 0.25)', backtracked: 'rgba(239, 68, 68, 0.35)',
};

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const x = c * cellSize, y = r * cellSize;
            ctx.fillStyle = COLORS.floor; ctx.fillRect(x, y, cellSize, cellSize);

            if (componentColors[r] && componentColors[r][c]) {
                ctx.fillStyle = componentColors[r][c]; ctx.fillRect(x, y, cellSize, cellSize);
            }
            if (cellRenderState[r][c] === 1) { ctx.fillStyle = COLORS.visited; ctx.fillRect(x, y, cellSize, cellSize); }
            else if (cellRenderState[r][c] === 2) { ctx.fillStyle = COLORS.backtracked; ctx.fillRect(x, y, cellSize, cellSize); }

            ctx.strokeStyle = COLORS.grid; ctx.lineWidth = 0.5; ctx.strokeRect(x, y, cellSize, cellSize);

            if (grid[r][c] === CELL.WALL) {
                ctx.fillStyle = COLORS.wall; ctx.fillRect(x, y, cellSize, cellSize);
                ctx.fillStyle = COLORS.wallTop; ctx.fillRect(x, y, cellSize, 4);
            }
            const fs = Math.floor(cellSize * 0.55);
            ctx.font = `${fs}px sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            const cx = x + cellSize / 2, cy = y + cellSize / 2;
            if (grid[r][c] === CELL.START) { ctx.fillStyle = COLORS.start; ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2); ctx.fillText('🚪', cx, cy); }
            else if (grid[r][c] === CELL.EXIT) { ctx.fillStyle = COLORS.exit; ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2); ctx.fillText('🏁', cx, cy); }
            else if (grid[r][c] === CELL.STAR) { ctx.fillText('⭐', cx, cy); }
        }
    }
}

function drawHero() {
    ctx.font = `${Math.floor(cellSize * 0.65)}px sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('🧙', heroPx.x, heroPx.y);
}

function updateHUD() {
    document.getElementById('hudLevel').textContent = `Màn ${state.level} / ${state.totalLevels}`;
    document.getElementById('hudActions').textContent = `⚡ Lượt: ${actionPoints}`;
    const starsEl = document.getElementById('hudStars');
    starsEl.innerHTML = Array(5).fill(0).map((_, i) =>
        `<span class="hud-star ${i < starsCollected ? 'collected' : 'uncollected'}">★</span>`
    ).join('');
}

function updateRunButton() {
    const btn = document.getElementById('btnRun');
    if (!running) { btn.textContent = "▶ Chạy"; btn.className = "tool-btn tool-run"; }
    else {
        btn.textContent = isPaused ? "▶ Tiếp tục" : "⏸ Tạm dừng";
        btn.className = "tool-btn tool-run active";
    }
}

// ============================================================
// LOOT, END GAME & COLLECTION
// ============================================================
function rollSword() {
    const total = Object.values(RARITY_WEIGHTS).reduce((a, b) => a + b, 0);
    let roll = Math.random() * total;
    let rarity = 'common';
    for (const [r, w] of Object.entries(RARITY_WEIGHTS)) { roll -= w; if (roll <= 0) { rarity = r; break; } }
    const pool = SWORDS.filter(s => s.rarity === rarity);
    return pool[Math.floor(Math.random() * pool.length)];
}

function showLootSequence(starsOnPath, callback) {
    if (starsOnPath.length === 0) { callback(); return; }
    const loot = starsOnPath.map(() => rollSword());
    state.pendingLoot = loot;
    document.getElementById('lootContent').innerHTML = loot.map(s => `
        <div class="loot-item loot-${s.rarity}">
          <div class="loot-sword-art">${s.icon}</div>
          <div class="loot-info">
            <div class="loot-name rarity-${s.rarity}">${s.name}</div>
            <div class="loot-rarity rarity-${s.rarity}">${RARITY_LABELS[s.rarity]}</div>
            <div class="loot-desc">${s.desc}</div>
          </div>
        </div>`).join('');
    document.getElementById('lootModal').classList.add('active');
    document.getElementById('lootContinue').onclick = () => { closeAllModals(); callback(); };
}

function showLevelEnd(starsGot) {
    const total = (starsGot * 200) + (actionPoints * 30);
    state.score = total;
    document.getElementById('levelEndStars').textContent = Array(5).fill('⚫').map((s, i) => i < starsGot ? '⭐' : s).join('');
    document.getElementById('levelEndScore').innerHTML = `
        <div class="score-row"><span>Ngôi sao</span><span>${starsGot}/5</span></div>
        <div class="score-total"><span>Điểm màn</span><span>${total}</span></div>`;
    const replayBtn = document.getElementById('btnReplayModal');
    replayBtn.style.display = state.replaysLeft > 0 ? 'block' : 'none';
    replayBtn.textContent = `🔄 Chơi Lại (${state.replaysLeft})`;
    document.getElementById('levelEndBtn').textContent = state.level >= state.totalLevels ? '🏆 Kết Thúc' : 'Tiếp Theo →';
    document.getElementById('levelEndModal').classList.add('active');
}

function processLevelTransition() {
    state.pendingLoot.forEach(s => state.collection.add(s.id));
    state.totalScore += state.score;
    closeAllModals();
    if (state.level >= state.totalLevels) showGameEnd();
    else {
        state.level++;
        state.startingAP = 10 + starsCollected + (actionPoints > 10 ? actionPoints - 10 : 0);
        generateLevel();
    }
}

function showGameEnd() {
    document.getElementById('gameEndScore').innerHTML = `<div class="score-total"><span>Tổng Điểm</span><span>${state.totalScore}</span></div>`;
    document.getElementById('gameEndModal').classList.add('active');
}

function renderCollection() {
    document.getElementById('collectionStats').textContent = `${state.collection.size} / ${SWORDS.length} thanh kiếm`;
    document.getElementById('collectionGrid').innerHTML = SWORDS.map(s => {
        const owned = state.collection.has(s.id);
        return `<div class="sword-card ${owned ? 'owned' : 'locked'}">
          <div class="sword-icon">${owned ? s.icon : '❓'}</div>
          <div class="sword-name">${owned ? s.name : '???'}</div>
        </div>`;
    }).join('');
}

// Animation loop for pulsing stars
setInterval(() => { if (!running) drawGrid(); }, 100);

updateHUD();