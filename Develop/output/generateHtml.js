const generateHTML = (manager, engineerCards, internCards) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Employee Summary</title>
      <style>
  
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .top-container {
    background-color: #f1f1f1;
    padding: 30px;
    text-align: center;
  }
  
  .header {
    padding: 10px 16px;
    background: #555;
    color: #f1f1f1;
  }
  
  .content {
    padding: 16px;
  }
  
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
  
  .sticky + .content {
    padding-top: 102px;
  }
  
          .card {
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          transition: 0.3s;
          width: 40%;
          }
  
          .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          }
  
          .container {
          padding: 2px 16px;
          }
  
          .header{
              justify-content: center;
          }
          
          .h2{
            justify-content: center;
          }
  
      
      </style>
  </head>
  
  <body>
          <div class="header" id="myHeader">
                  <h2>Team Members</h2>
                </div>
        
        <div class="card">
            <div class="container">
            <h3>Manager</h3>
            <h4><b>${manager.name}</b></h4>
            <p>${manager.email}</p>
            <p>${manager.id}</p>
            <p>${manager.officeNumber}</p>
        </div>
                

        <div class="card">
          <div class="container">
            <h3>$Employee</h3>
            <h4><b>${employee.name}</b></h4>
            <p>${employee.email}</p>
            <p>${employee.id}</p>
        </div>

        <div class="card">
        <div class="container">
          <h3>Engineer</h3>
          <h4><b>${engineer.name}</b></h4>
          <p>${engineer.email}</p>
          <p>${engineer.id}</p>
          <p>${engineer.github}</p>
        </div>

        <div class="card">
        <div class="container">
          <h3>Intern</h3>
          <h4><b>${intern.name}</b></h4>
          <p>${intern.email}</p>
          <p>${intern.id}</p>
          <p>${intern.school}</p>
        </div>

  </body>
  </html>
  `
}

module.exports = generateHTML

