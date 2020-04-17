function onClick(arg) {
    var data_ = arg.getAttribute('data');
    var data_type = arg.getAttribute('data-type');
    var output = document.getElementById("output");
    var sketch_path = '';
    var gt_path = '';
    var json_path = '';
    var result_array = [];
    if (data_ == "Objects") {
        sketch_path = 'images/Object/Sketch/';
        gt_path = 'images/Object/GT/';
        json_path = '/Object.json'
    } else {
        sketch_path = 'images/Scene/Sketch/';
        gt_path = 'images/Scene/GT/';
        json_path = '/Scene.json'
    }
    $.ajax({
        type:'get',
        url:json_path,
        dataType:'json',
        success:function(data){
            console.log(data_type)
            if (data_ == "Objects") {
                var tmp = data[data_type.toString()]
            } else {
                var tmp = data.data;
            }
            // console.log(tmp)
            var counter = 0;
            for (var n = 0; n<tmp.length; n++) {
                path = tmp[n];
                if (counter % 2 == 0 && counter != 0) {
                    result_array.push("        </tr>\n        <tr>\n          <td>\n            <a href=" + "http://sysu-imsl.com/" + sketch_path + path + ">" + "<img src=" + "http://sysu-imsl.com/" + sketch_path + path +  " alt=\"\" /></div></a>" + "\n       </td>");
                    result_array.push("          <td>\n            <a href=" + "http://sysu-imsl.com/" + gt_path + path + ">" + "<img src=" + "http://sysu-imsl.com/" + gt_path + path +  " alt=\"\" /></div></a>" + "\n       </td>");
                } else {
                    result_array.push("          <td>\n            <a href=" + "http://sysu-imsl.com/" + sketch_path + path + ">" + "<img src=" + "http://sysu-imsl.com/" + sketch_path + path +  " alt=\"\" /></div></a>" + "\n       </td>");
                    result_array.push("          <td>\n            <a href=" + "http://sysu-imsl.com/" + gt_path + path + ">" + "<img src=" + "http://sysu-imsl.com/" + gt_path + path +  " alt=\"\" /></div></a>" + "\n       </td>");
                }
                counter++;
            }

            output.innerHTML = "              <table>\n        <tr>\n" + result_array.join("\n") + "        </tr>\n      </table>";
        }
    })


}