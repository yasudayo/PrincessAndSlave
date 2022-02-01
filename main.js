let nomvers = ["1", "2", "3"];
let nomver = Math.floor(Math.random() * 3);
alert("この数字を覚えてください。" + nomvers[nomver]);
   
   document.getElementById('button1').addEventListener('click', function() {
    if (nomvers[nomver] == 1) {
        alert("正解!!");
        document.location.reload();
        clearInterval(interval);
    }else {
        alert("不正解");
        document.location.reload();
        clearInterval(interval);
    }
    });

    document.getElementById('button2').addEventListener('click', function() {
        if (nomvers[nomver] == 2) {
            alert("正解!!");
            document.location.reload();
            clearInterval(interval);
        }else {
            alert("不正解");
            document.location.reload();
            clearInterval(interval);
        }
        });

        document.getElementById('button3').addEventListener('click', function() {
            if (nomvers[nomver] == 3) {
                alert("正解!!");
                document.location.reload();
                clearInterval(interval);
            }else {
                alert("不正解");
                document.location.reload();
                clearInterval(interval);
            }
            });

