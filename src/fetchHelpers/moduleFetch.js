module.exports = {
  anonFetch: async () => {
    try {
      const response = await fetch("https://www.boredapi.com/api/activity/");
      return await response.json();
    } catch (error) {
      console.log("Erm, this went a bit wrong");
    } finally {
      console.log("The fetch has completed");
    }
  },

  asyncFetch: async () => {
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const activities = await response.json();
    console.log("Activities", activities)
    return activities;
  },
  logHello: () => {
    console.log("hello Scott and Joseph");
  },
//   promiseFetch:async function fetchData() {
//         fetch('https://www.boredapi.com/api/activity/')
//             .then(response => response.json())
//             .then(data => {return data})
//     }
  };
