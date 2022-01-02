async function  handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);
  const formdata = new FormData();
  formdata.append("key", process.env.API_KEY);
  formdata.append("txt", formText);
  formdata.append("lang", "en"); // 2-letter code, like en es fr ...

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  )
    .then( async (response) => ({
      status: response.status,
      body:await response.json(),
    }))
    .then(({ status, body }) => {console.log(status, body)
        const {subjectivity, irony} = body
        console.log(subjectivity, irony)

        // SHOW user 
        document.getElementById("results").innerHTML = `your sentence is ${subjectivity} and ${irony}`;
    })
    .catch((error) => console.log("error", error));

//   console.log("::: Form Submitted :::");
//   fetch("http://localhost:8081/test", {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     headers: { "Content-Type": "application/json" },

//     body: JSON.stringify({ text: formText }), // body data type must match "Content-Type" header
//   })
//     .then((res) => res.json())
//     .then(function (res) {
//       document.getElementById("results").innerHTML = res.message;
//     });
}

export { handleSubmit };
