$(".button .hide-button").click(function() {
  $(".ghost-image").hide();
});

$(".show-button").click(function() {
  $(".ghost-image").show(); 
});

$(".update-img-button").click(function() {
  const old_src = $("img").attr("src");
  let new_src = get_random_img();
  console.log(old_src);
  console.log(new_src);
  
  while (new_src === old_src) {
    new_src = get_random_img();
  }
  
  $("img").attr("src", new_src)
});

$(".message-button").click(function() {
  let message = $(".input").val();
  $(".message").append("<p>" + message + "</p>");
});

$(".name-button").click(function() {
  let name = $(".input").val();
  $(".name").text("My name is " + name + "!");
});


const img_opts = [
  "https://i.pinimg.com/originals/87/20/4b/87204b868ff3a1be842f8a3b8d696510.jpg",
  "https://ih1.redbubble.net/image.153656513.6605/flat,800x800,075,f.jpg",
  "https://i.pinimg.com/originals/fa/14/a6/fa14a6dc9a6b71d9d0bf65bf8f35bf94.jpg",
  "https://art.pixilart.com/3b9d8873b4b4abc.png"
]

function get_random_img() {
  return img_opts[Math.floor(Math.random() * img_opts.length)];
}