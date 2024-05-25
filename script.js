let accountIcon = document.getElementById("accountIcon")
let accountMenu = document.getElementById("accountMenu")
let chatSection = document.getElementById("chatSection")
let user = document.getElementById("user")
let groups = document.getElementById("groups")

accountIcon.addEventListener("click", () => {
    accountMenu.style.display = "block"
})
accountMenu.addEventListener("click", () => {
    accountMenu.style.display = "none"
})

let chatIcon = document.getElementById("chatIcon");
let chatSidebar = document.getElementById("chatSidebar");

chatIcon.addEventListener("click", () => {
    chatSidebar.style.display = "block";
    chatSidebar.style.right = "0";
})

window.onclick = function(event) {
    if (event.target == chatSidebar) {
        chatSidebar.style.display = "none";
    }
  }

user.addEventListener("click", () => {
    groups.style.backgroundColor = "white";
    user.style.backgroundColor = "rgba(0, 0, 255, 0.2)";
    chatSection.innerHTML = "";
    let chat = document.createElement("div")
chat.innerHTML = `
<div class="mb-4" >
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <div style="display: flex; align-items: center;">
                            <img src="https://img.freepik.com/free-photo/close-up-portrait-lovely-young-african-american-woman-with-curly-afro-haircut-smiling-with-happy-pleasant-expression-enjoying-winter-holidays-wearing-sweater-blue-wall_1258-35442.jpg?size=626&ext=jpg&uid=R114265951&ga=GA1.2.1234263249.1715352068&semt=sph" alt="User 1" class="rounded-full" style="width: 45px; height: 45px; margin-right: 10px;">
                            <p>Buzz brain</p>
                        </div>
                        <div style="width: 10px; background-color: rgb(2, 202, 2); border-radius: 50%; height: 10px;"></div>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <div style="display: flex; align-items: center;">
                            <img src="https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?size=626&ext=jpg&ga=GA1.1.1234263249.1715352068&semt=sph" alt="User 1" class="rounded-full" style="width: 45px; height: 45px; margin-right: 10px;">
                            <p>Buzz brain</p>
                        </div>
                        <div style="width: 10px; background-color: gray; border-radius: 50%; height: 10px;"></div>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <div style="display: flex; align-items: center;">
                            <img src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?size=626&ext=jpg&uid=R114265951&ga=GA1.1.1234263249.1715352068&semt=sph" alt="User 1" class="rounded-full" style="width: 45px; height: 45px; margin-right: 10px;">
                            <p>Buzz brain</p>
                        </div>
                        <div style="width: 10px; background-color: gray; border-radius: 50%; height: 10px;"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <div style="display: flex; align-items: center;">
                            <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R114265951&ga=GA1.2.1234263249.1715352068&semt=sph" alt="User 1" class="rounded-full" style="width: 45px; height: 45px; margin-right: 10px;">
                            <p>Buzz brain</p>
                        </div>
                        <div style="width: 10px; background-color: gray; border-radius: 50%; height: 10px;"></div>
                    </div>
                </div>`
                chatSection.append(chat)
})
groups.addEventListener("click", () => {
    user.style.backgroundColor = "white";
    groups.style.backgroundColor = "rgba(0, 0, 255, 0.2)";
    chatSection.innerHTML = "";
    let chat = document.createElement("div")
chat.innerHTML = `
<div style="display: flex; justify-content: center; height: 250px; align-items: center;">
                    <p>No groups to show</p>
                </div>`
                chatSection.append(chat)
})

let chat = document.createElement("div")
chat.innerHTML = `
<div class="mb-4" >
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <div style="display: flex; align-items: center;">
                            <img src="https://img.freepik.com/free-photo/close-up-portrait-lovely-young-african-american-woman-with-curly-afro-haircut-smiling-with-happy-pleasant-expression-enjoying-winter-holidays-wearing-sweater-blue-wall_1258-35442.jpg?size=626&ext=jpg&uid=R114265951&ga=GA1.2.1234263249.1715352068&semt=sph" alt="User 1" class="rounded-full" style="width: 45px; height: 45px; margin-right: 10px;">
                            <p>Buzz brain</p>
                        </div>
                        <div style="width: 10px; background-color: rgb(2, 202, 2); border-radius: 50%; height: 10px;"></div>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <div style="display: flex; align-items: center;">
                            <img src="https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?size=626&ext=jpg&ga=GA1.1.1234263249.1715352068&semt=sph" alt="User 1" class="rounded-full" style="width: 45px; height: 45px; margin-right: 10px;">
                            <p>Buzz brain</p>
                        </div>
                        <div style="width: 10px; background-color: gray; border-radius: 50%; height: 10px;"></div>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <div style="display: flex; align-items: center;">
                            <img src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?size=626&ext=jpg&uid=R114265951&ga=GA1.1.1234263249.1715352068&semt=sph" alt="User 1" class="rounded-full" style="width: 45px; height: 45px; margin-right: 10px;">
                            <p>Buzz brain</p>
                        </div>
                        <div style="width: 10px; background-color: gray; border-radius: 50%; height: 10px;"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <div style="display: flex; align-items: center;">
                            <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R114265951&ga=GA1.2.1234263249.1715352068&semt=sph" alt="User 1" class="rounded-full" style="width: 45px; height: 45px; margin-right: 10px;">
                            <p>Buzz brain</p>
                        </div>
                        <div style="width: 10px; background-color: gray; border-radius: 50%; height: 10px;"></div>
                    </div>
                </div>`
                chatSection.append(chat)