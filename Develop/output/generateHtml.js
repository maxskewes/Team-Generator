const generateHTML = (manager, engineerCards, internCards) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Employee Summary</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <style>


  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: grey;
  }
  
  .top-container {
    background-color: #f1f1f1;
    padding: 30px;
    text-align: center;
  }
  
  .header {
    padding: 10px 16px;
    background: blue;
    color: #f1f1f1;
    justify-content: center;
  }
  
  .content {
    padding: 16px;
  }
  
  .container {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 250px;
    height: 200px;
    margin: 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  .header{
    justify-content: center;
  }

  .h1 {
    justify-content: center;
  }

  .h3 {
    justify-content: center;
  }

  .h4 {
    justify-content: center;
  }
    </style>
  </head>
  
  <body>
          <div class="header" id="myHeader">
                  <h1>Team Members</h1>
                </div>

  </html>
  `
}

module.exports = generateHTML

