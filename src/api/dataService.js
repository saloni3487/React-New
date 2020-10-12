

export default function() {
  // simulates data coming from a database.
  return Promise.resolve(
    [
        {
          custid: 1,
          name: "Tom",
          amt: 120,
          transactionDt: "05-01-2019"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 75,
          transactionDt: "05-21-2019"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 94,
          transactionDt: "05-21-2019"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 10,
          transactionDt: "06-01-2019"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 75,
          transactionDt: "06-21-2019"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 200,
          transactionDt: "07-01-2019"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 1,
          transactionDt: "07-04-2019"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 80,
          transactionDt: "07-03-2019"
        },
        {
          custid: 1,
          name: "Tom",
          amt: 224,
          transactionDt: "07-21-2019"
        },
        {
          custid: 2,
          name: "Apple",
          amt: 125,
          transactionDt: "05-01-2019"
        },
        {
          custid: 2,
          name: "Apple",
          amt: 75,
          transactionDt: "05-21-2019"
        },
        {
          custid: 2,
          name: "Apple",
          amt: 10,
          transactionDt: "06-01-2019"
        },
        {
          custid: 2,
          name: "Apple",
          amt: 75,
          transactionDt: "06-21-2019"
        },
        {
          custid: 2,
          name: "Apple",
          amt: 200,
          transactionDt: "07-01-2019"
        },
        {
          custid: 2,
          name: "Apple",
          amt: 224,
          transactionDt: "07-21-2019"
        },
        {
          custid: 3,
          name: "Startbucks",
          amt: 120,
          transactionDt: "06-21-2019"
        }
    ]
  );
};