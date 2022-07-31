// const lastNames = ["Developers", "Young man", "Painter", "Coocer"];
// export default lastName = "anonymus";
export const lastNames = ["Developers", "Young man", "Painter", "Coocer"];
const users = [
  {
    id: 1,
    name: "Sergii",
    [lastName]: "Krasivskyi",
    username: "Sir",
    email: "serg@ukr.net",
    address: {
      street: "Heroes of Stalingrad avenue",
      suite: "1441/",
      city: "Kharkiv",
      zipcode: "16132",
      geo: {
        lat: "1111",
        lng: "2222",
      },
    },
    phone: "0637611756",
    webcite: "developer.ua",
    company: {
      name: "Innovations Inc",
      catchPhrase: "Lets Learn and Joy It",
      bs: "Developing and Learning",
    },
    showDetails: function () {
      const { name = "", phone = "", webcite = {} } = this;
      return `${name} ${phone} ${webcite}`;
    },
  },
  {
    id: 2,
    name: "Ivan",
    [lastName]: "Krasivskyi",
    username: "derTiger",
    email: "ivan@ukr.net",
    address: {
      street: "Heroes of Stalingrad avenue",
      suite: "1441/",
      city: "Kharkiv",
      zipcode: "16132",
      geo: {
        lat: "1111",
        lng: "2222",
      },
    },
    phone: "0951231235",
    webcite: "javapower.ua",
    company: {
      name: "Innovations Inc",
      catchPhrase: "Lets Learn and Joy It",
      bs: "Developing and Learning",
    },
    showDetails: function () {
      const { name = "", phone = "", webcite = {} } = this;
      return `${name} ${phone} ${webcite}`;
    },
  },
  {
    id: 3,
    name: "Sveta",
    [lastName]: "Krasivska",
    username: "mammy",
    email: "svetik@ukr.net",
    address: {
      street: "Heroes of Stalingrad avenue",
      suite: "1441/",
      city: "Kharkiv",
      zipcode: "16132",
      geo: {
        lat: "1111",
        lng: "2222",
      },
    },
    phone: "0638058808",
    webcite: "colors.ua",
    company: {
      name: "Innovations Inc",
      catchPhrase: "Lets Learn and Joy It",
      bs: "Developing and Learning",
    },
    showDetails: function () {
      const { name = "", phone = "", webcite = {} } = this;
      return `${name} ${phone} ${webcite}`;
    },
  },
  {
    id: 4,
    name: "Mariia",
    [lastName]: "Krasivska",
    username: "mouse",
    email: "mouse@ukr.net",
    address: {
      street: "Heroes of Stalingrad avenue",
      suite: "1441/",
      city: "Kharkiv",
      zipcode: "16132",
      geo: {
        lat: "1111",
        lng: "2222",
      },
    },
    phone: "0631231231",
    webcite: "craft.ua",
    company: {
      name: "Innovations Inc",
      catchPhrase: "Lets Learn and Joy It",
      bs: "Developing and Learning",
    },
    showDetails: function () {
      const { name = "", phone = "", webcite = {} } = this;
      return `${name} ${phone} ${webcite}`;
    },
  },
];
