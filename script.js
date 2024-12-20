let betslip = [];

function showBetslip() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('betslipPage').style.display = 'block';
    addMatchToBetslip(); // Dynamically add matches to betslip
}

function addMatchToBetslip() {
    const matchList = document.getElementById('matchList');
    const matchData = [
        { league: 'Premier League', teams: 'Team A vs Team B', pick: 'Over 2.5', odds: '1.75' },
        { league: 'La Liga', teams: 'Team C vs Team D', pick: 'Under 3.5', odds: '2.10' }
    ];

    matchList.innerHTML = ''; // Clear any previous content

    matchData.forEach((match, index) => {
        const matchElement = document.createElement('div');
        matchElement.classList.add('match');
        matchElement.innerHTML = `
            <div class="match-details">
                <p class="league">${match.league}</p>
                <p class="teams">${match.teams}</p>
                <p class="pick">Pick: ${match.pick}</p>
                <p class="odds">Odds: ${match.odds}</p>
            </div>
            <button class="bet-btn" onclick="addToBet(${index})">Add to Bet</button>
        `;
        matchList.appendChild(matchElement);
    });
}

function addToBet(index) {
    const matchData = [
        { league: 'Premier League', teams: 'Team A vs Team B', pick: 'Over 2.5', odds: '1.75' },
        { league: 'La Liga', teams: 'Team C vs Team D', pick: 'Under 3.5', odds: '2.10' }
    ];

    betslip.push(matchData[index]);
    alert(`${matchData[index].teams} added to betslip!`);
    updateBetslip();
}

function updateBetslip() {
    const betslipPage = document.getElementById('betslipPage');
    const matchList = document.getElementById('matchList');
    matchList.innerHTML = ''; // Clear current betslip

    betslip.forEach(match => {
        const matchElement = document.createElement('div');
        matchElement.classList.add('match');
        matchElement.innerHTML = `
            <div class="match-details">
                <p class="league">${match.league}</p>
                <p class="teams">${match.teams}</p>
                <p class="pick">Pick: ${match.pick}</p>
                <p class="odds">Odds: ${match.odds}</p>
            </div>
        `;
        matchList.appendChild(matchElement);
    });
}

function placeBet() {
    if (betslip.length === 0) {
        alert('No matches selected!');
    } else {
        alert('Bet Placed Successfully!');
        betslip = []; // Clear betslip after placing the bet
        updateBetslip();
    }
}

function clearBetslip() {
    betslip = [];
    updateBetslip();
}
