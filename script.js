function percentage() {
    var num = document.getElementById("totalNumberofdosesmissed").value
    var num2 = document.getElementById("totalNumberofdosesprescribed").value
    var calculate = num/num2*100
     document.getElementById("result").innerHTML = calculate
}

document.getElementById('add').addEventListener('click', add);
show();