// 设置一个函数 使li的元素点击变色
function changeColor(classname,aId,aId2){
    var dic = document.getElementsByClassName(classname)[0];
            var a = document.getElementById(aId);
            a.style.color = "#3499dd";
            dic.onclick = function(){
                for(var j=0;j<dicA.length;j++){
                    dicA[j].style.color = "black";
                }
                a.style.color = "#3499dd";
            };
            var dicA = document.getElementsByName(aId2);
            for(var i=0;i<dicA.length;i++){
                dicA[i].onclick = function(){
                    for(var j=0;j<dicA.length;j++){
								dicA[j].style.color = "black";
                                var a = document.getElementById(aId);
                                a.style.color="black";
							}
                    this.style.color = "#3499dd";
                    }
            }
}