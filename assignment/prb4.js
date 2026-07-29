function topRatedRestaurant(restaurants) {
    if (Array.isArray(restaurants) == false) {
        return "Invalid";
   }
   if (restaurants.length == 0) {
        return "Invalid";
    }


  let largestRestaurent = restaurants[0]
  for(let i = 0; i<restaurants.length; i++){
    if(largestRestaurent.rating<restaurants[i].rating)
        largestRestaurent=restaurants[i];
  }
  return largestRestaurent.name.toUpperCase();
}
console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]));
console.log(topRatedRestaurant([]))