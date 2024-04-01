var recipes = []

filters = {
  searchText: "",
}

var vegetableCurry = {
  id: "1234567890",
  name: "Vegetable Curry",
  description: "Spicy curry with mixed vegetables",
}

recipes.push(vegetableCurry)

var vegetableSoup = {
  id: "1234567890",
  name: "Vegetable Soup",
  description: "Spicy curry with mixed vegetables",
}

recipes.push(vegetableSoup)

localStorage.setItem("recipes", JSON.stringify(recipes))

renderRecipes(recipes, filters)

$("#searchRecipe").on("input", function (event) {
  filters.searchText = $(this).val()

  renderRecipes(recipes, filters)
})

function renderRecipes(recipes, filters) {
  var filteredRecipes = $.grep(recipes, function (object) {
    return object.name.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  $(".recipes").empty()

  $.each(filteredRecipes, function (index, value) {
    $(".recipes").append("<p>" + value.name + "</p>")
  })
}

$("#add-recipe").click(function () {
  recipes.push({
    id: uuidv4(),
    name: "Chicken biryani",
    description: "some text",
  })
  localStorage.setItem("recipes", JSON.stringify(recipes))
  renderRecipes(recipes, filters)
})

function uuidv4() {
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )
}

// Initialize the recipes array with some sample data
recipes.push({
  id: uuidv4(),
  name: "Pizza",
  description: "Cheesy goodness",
})

renderRecipes(recipes, filters)
