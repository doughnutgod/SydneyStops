

//Handles all Location Data Management
export default class DataManager {
  static myInstance = null;
  userID = "";

  categories = [
    {
      value: 1,
      label: "Bar",
      icon: "beer",
    },
    {
      value: 2,
      label: "Club",
      icon: "cards",
    },
    {
      value: 3,
      label: "Resturant",
      icon: "food-fork-drink",
    },
    {
      value: 4,
      label: "Cinema",
      icon: "filmstrip",
    },
    {
      value: 5,
      label: "Park",
      icon: "pine-tree",
    },
    {
      value: 6,
      label: "Cafe",
      icon: "coffee",
    },
    {
      value: 7,
      label: "Shop",
      icon: "basket",
    },
  ];

  VerifiedUsers = [
    {
      id: "user1",
      name: "Samantha Carter",
      email: "samcarter@gmail.com",
      password: "midway1",
      image: require("../assets/UserSam.jpg"),
    },
    {
      id: "user2",
      name: "Daniel Jackson",
      email: "dannyboy@gmail.com",
      password: "omadesala",
      image: require("../assets/User2.jpg"),
    },
    {
      id: "user0",
      name: "admin",
      email: "admin@sydneystops.com",
      password: "123456",
      image: require("../assets/AdminUser.jpg"),
    },
  ];

  locations = [
    {
      userid: "user1",
      locationid: 101,
      name: "Gary's Bar",
      city: "Newtown",
      visited: "01/01/2021",
      category: "Bar",
      image: require("../assets/GenericBar.jpg"),
    },
    {
      userid: "user1",
      locationid: 102,
      name: "Chinese Laundry",
      city: "Sydney",
      visited: "31/01/2021",
      category: "Club",
      image: require("../assets/GenericClub.jpg"),
    },
    {
      userid: "user2",
      locationid: 103,
      name: "Oliver Brown",
      city: "Chatswood",
      visited: "04/01/2021",
      category: "Cafe",
      image: require("../assets/GenericCafe.jpg"),
    },
    {
      userid: "user1",
      locationid: 104,
      name: "Johnnies Bar",
      city: "Sydney",
      visited: "03/01/2021",
      category: "Bar",
      image: require("../assets/GenericBar.jpg"),
    },
    {
      userid: "user1",
      locationid: 105,
      name: "Rooftop Rave",
      city: "Sydney",
      visited: "30/01/2021",
      category: "Club",
      image: require("../assets/GenericClub.jpg"),
    },
    {
      userid: "user2",
      locationid: 106,
      name: "Oliver Brown",
      city: "Chatswood",
      visited: "08/01/2021",
      category: "Cafe",
      image: require("../assets/GenericCafe.jpg"),
    },
    {
      userid: "user1",
      locationid: 107,
      name: "Big Bobs Bar",
      city: "Parramatta",
      visited: "05/01/2021",
      category: "Bar",
      image: require("../assets/GenericBar.jpg"),
    },
    {
      userid: "user1",
      locationid: 108,
      name: "Lolipops",
      city: "Sydney",
      visited: "28/01/2021",
      category: "Club",
      image: require("../assets/GenericClub.jpg"),
    },
    {
      userid: "user2",
      locationid: 109,
      name: "Castle Cake",
      city: "Epping",
      visited: "10/01/2021",
      category: "Cafe",
      image: require("../assets/GenericCafe.jpg"),
    },
  ];

  static getInstance() {
    if (DataManager.myInstance == null) {
      DataManager.myInstance = new DataManager();
    }
    return this.myInstance;
  }

  getUserID() {
    return this.userID;
  }

  setUserID(id) {
    this.userID = id;
  }

  getLocations(id) {
    return this.locations.filter((location) => location.userid === id);
  }

  getAllLocations() {
    return this.locations;
  }

  getAllCategories() {
    return this.categories;
  }

  addLocation(location) {
    this.locations.push(location);
  }

  setLocationID(locationid) {
    this.LocationID = locationid;
  }

  getLocationID() {
    return this.LocationID;
  }

  getLocation(locID) {
    return this.locations.filter((location) => location.locationid === locID);
  }

  removeLocation(locID) {
    let x = this.locations.findIndex((obj) => obj.locationid === locID);
    return this.locations.splice(x, 1);
  }
}


