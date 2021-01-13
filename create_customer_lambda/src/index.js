exports.handler = async (event) => {
    console.log(JSON.stringify(event));
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        msg: "OK",
        userId: "dasdjalsjdasld", 
        description: "User created successfully"
      })
    };
   return response;
 };