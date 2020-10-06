function tugas17(){
  var paragraf = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  string = paragraf.substr(0,6);
  var x = "-";
  for (var i = 0; i <= 5; i++) {
    char = string.charCodeAt(i);
    process.stdout.write(char + x);
    if (i >= 4){
      x = "";
    }
  }
  console.log("");
}
  /*
  char1 = string.charCodeAt(0);
  char2 = string.charCodeAt(1);
  char3 = string.charCodeAt(2);
  char4 = string.charCodeAt(3);
  char5 = string.charCodeAt(4);
  char6 = string.charCodeAt(5);
  console.log(char1+"-"+char2+"-"+char3+"-"+char4+"-"+char5+"-"+char6);
  */

tugas17();
