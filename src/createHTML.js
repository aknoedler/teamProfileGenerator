// Creates the HTML for an employee card based on the employee object passed in.
function createCard(employee) {
    return `<div class="card m-5" style="width: 18rem;">
        <h2 class="card-header bg-info">${employee.getName()}</h2>
        <div class="card-body">
            <h3 class="card-subtitle">${employee.getRole()}</h3>
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.getID()}</li>
                <li class="list-group-item"><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">${getInfo(employee)}</li>
            </ul>
        </div>
    </div>`
}

// Creates the HTML that is specific to each particular role.
function getInfo(employee) {
    switch (employee.getRole()) {
        case "Manager":
            return `Office number: ${employee.officeNumber}`;
        case "Engineer":
            return `Github username: <a href="https://github.com/${employee.github}">${employee.github}</a>`;
        case "Intern":
            return `School: ${employee.school}`;
    }
}

// Main function for creating the HTML template literal.
function createHTML(array) {
    // Uses the array passed in to create an array of template literals.
    let cards = array.map(employee => createCard(employee));
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    </head>
    
    <body>
        <header class="d-flex justify-content-center bg-info p-5">
            <h1 class="text-white">My Team</h1>
        </header>
        <main class="min-vh-100 bg-dark">
            <div class="d-flex containter-fluid p-5">
                <div class="row p-5">
                    ${cards.join('')}
                </div>
            </div>
        </main>
    </body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>

    </html>`
}

module.exports = createHTML;