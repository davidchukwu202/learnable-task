class Movie {
    constructor(id, title, genre, price) {
      this.id = id;
      this.title = title;
      this.genre = genre;
      this.price = price;
      this.isAvailable = true;
    }
  
    rentMovie() {
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`movie "${this.title}" has been rented.`);
      } else {
        console.log(`Sorry, "${this.title}" unavailable for rent.`);
      }  
    }
}
