import util from "util";
import mocker from "mocker-data-generator";

const product = {
  name: {
    faker: "commerce.productName",
    length: 15
  },
  email: {
    faker: "internet.email"
  },
  count: {
    faker: "random.number"
  },
  price: {
    faker: "commerce.price",
    min: 100000
  },
  delivery: {
    function: function () {
      const a1 = this.faker.commerce.productName();
      // const a2 = this.faker.random.price;
      return this.faker.random.arrayElement([a1, "a2"]);
    }
  }
};

export async function getFakeData(count = 5) {
  mocker()
    .schema("product", product, count)
    .build()
    .then(
      (data) => {
        return data;
        // console.log("aaa", JSON.stringify(data));
        // // This returns an object
        // // {
        // //      user:[array of users],
        // //      group: [array of groups],
        // //      conditionalField: [array of conditionalFields]
        // // }
      },
      (err) => console.error(err)
    );
}
