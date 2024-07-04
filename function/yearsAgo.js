function yearsAgo(Past){
    var Today = new Date().getFullYear();
    return Today - Past;
  }

  console.log(yearsAgo(1976))
  console.log(yearsAgo(2000))
  console.log(yearsAgo(1830))