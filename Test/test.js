// 1 var movies = ["Mission impossible", "Spider man", "Girl vs World"]

alert("hi")
var movies = [
  {
    name: "Mission Impossible",
    year: 2007,
  },
  {
    name: "Avatar",
    year: 2010,
  },
  {
    name: "Gone Girl",
    year: 2013,
  },
]
// 2 console.log(movies);
// 3 console;log(movies[2]);

//api.jquery.com

$.each(movies, function (index, value) {
  $(".test").append("<p>" + value.name + "<p>")
})
