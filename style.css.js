body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}

.player-container {
    background: #fff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    text-align: center;
    width: 300px;
}

h2 {
    margin: 10px 0 5px 0;
    color: #333;
}

h3 {
    margin: 0 0 20px 0;
    color: #777;
    font-weight: 300;
}

.controls {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.btn {
    background-color: #9b59b6;
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
    background-color: #8e44ad;
    transform: scale(1.05);
}
