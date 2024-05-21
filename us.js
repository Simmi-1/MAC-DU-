function showUs() {
    var us = document.createElement("div");
    us.innerHTML="<div style=\"position: fixed; bottom: 30px; right: 30px; width: 50px; height: 50px;" +
        " background-color: orangered; border-radius: 100%; display: flex; align-items: center; justify-content: center;\">\n" +
        "    <a href=\"us/us.html\" style=\"color: white\">\n" +
        "        <i class=\"fas fa-users\" style=\"font-size: 2rem;\"></i>\n" +
        "        <img src=\"https://media3.giphy.com/media/dkQ1CRCVHUaBi/giphy.gif?cid=ecf05e47jcqbn3r48w8crcwdevp10bjpku9psc92exlg5ix5&rid=giphy.gif&ct=s\"\n" +
        "             style=\"position: absolute; top: -35px; left: -26px;width: 100px; border-radius: 100%; z-index:" +
        " -1\"\n" +
        "             alt=\"\">\n" +
        "    </a>\n" +
        "</div>";

    document.body.appendChild(us);
}

showUs();