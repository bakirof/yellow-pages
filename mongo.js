db.place.update(
  {placeName: "Coffee Cake"},
  {
    $set: {
      placeName: "Coffee Cake",
      category: "Кофейня",
      adres: "ул. Родионова, д. 187",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequatur corporis dolorum minus neque nostrum nulla tempora. Autem consequuntur impedit totam voluptatem? Atque magnam nesciunt nulla placeat ratione, suscipit.",
      imageUrl: "images/images-place/img3.jpg",
      rating: "3,5",
      hours: "с 09:00 до 18:00",
      reviews: [
        {
          id: "1234567",
          name: "Lorem ipsum",
          image: "images/images-place/img3.jpg",
          rating: "4",
          comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequatur corporis dolorum minus neque!",
          data: '20.02.2015',
          time: '12:27',
          like: true
        },
        {
          id: "1234567",
          name: "Adipisicing",
          image: "images/images-place/img4.jpg",
          rating: "5",
          comment: "Assumenda consectetur consequatur corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequatur corporis dolorum minus neque!",
          data: '20.02.2015',
          time: '12:41',
          like: true
        }

      ]
    },
    $currentDate: {lastModified: true}
  });

db.user.insert(
    {
      userName: "Lorem Ipsum",
      userEmail: "a@a",
      userPW: "a"
    }
  );

db.user.remove({});
