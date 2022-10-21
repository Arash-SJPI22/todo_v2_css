const pCounter = document.querySelector("#pCounter");
const submitBtn = document.querySelector("#submitBtn");
const taskInput = document.querySelector("#taskInput");
const pInputVarning = document.querySelector("#pInputVarning");
const ulTaskList = document.querySelector("#ulTaskList");

let completedTaskCounter = 0;

submitBtn.addEventListener("click", () => {
    const inputText = taskInput.value;
    if (!inputText) {
        if(pInputVarning.hidden) {
            pInputVarning.hidden = "";
        } else {
            if (pInputVarning.style.animation == "") {
                pInputVarning.style.animation = "pInputVarningBlink2 0.5s linear 3";
            } else {
                if (pInputVarning.style.animation == "0.5s linear 0s 3 normal none running pInputVarningBlink"){
                    pInputVarning.style.animation = "pInputVarningBlink2 0.5s linear 3";
                } else {
                    pInputVarning.style.animation = "pInputVarningBlink 0.5s linear 3"
                };
            };
        };
        pInputVarning.innerHTML = "Input must not be empty";
    } else {
        pInputVarning.hidden = "hidden";
        const liElement = document.createElement("li");
        const spanElement = document.createElement("span");
        const btnElement = document.createElement("button");

        ulTaskList.appendChild(liElement);
        spanElement.innerText = inputText;
        spanElement.setAttribute("class", "");
        btnElement.setAttribute("class", "rmvTaskBtn");
        btnElement.innerText = "🗑️";

        liElement.appendChild(spanElement);
        liElement.appendChild(btnElement);

        spanElement.addEventListener("click", () => {
            if(spanElement.getAttribute("class") == "") {
                spanElement.setAttribute("class", "completedTask");
                pCounter.innerText = ++completedTaskCounter + " completed";
            } else {
                spanElement.setAttribute("class", "");
                pCounter.innerText = --completedTaskCounter + " completed";
            };
        });
            btnElement.addEventListener("click", () => {
            ulTaskList.removeChild(liElement);
        });
    };
    taskInput.value = "";
});