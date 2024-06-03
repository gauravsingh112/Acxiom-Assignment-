document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorDiv = document.getElementById('error');

    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'admin.html';
    } else if (username === 'user' && password === 'user123') {
        window.location.href = 'user.html';
    } else {
        errorDiv.textContent = 'Invalid username or password. Use admin as username and password as admin123';
    }
});

document.getElementById('addBookForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var isbn = document.getElementById('isbn').value;
    var publishedDate = document.getElementById('publishedDate').value;
    var errorDiv = document.getElementById('error');

    if (title && author && isbn && publishedDate) {
        alert('Book added successfully!');
        document.getElementById('addBookForm').reset();
        errorDiv.textContent = '';
    } else {
        errorDiv.textContent = 'All fields are mandatory.';
    }
});

document.getElementById('updateBookForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var isbn = document.getElementById('isbn').value;
    var publishedDate = document.getElementById('publishedDate').value;
    var errorDiv = document.getElementById('error');

    if (title && author && isbn && publishedDate) {
        alert('Book updated successfully!');
        document.getElementById('updateBookForm').reset();
        errorDiv.textContent = '';
    } else {
        errorDiv.textContent = 'All fields are mandatory.';
    }
});

document.getElementById('addMembershipForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var membershipType = document.getElementById('membershipType').value;
    var errorDiv = document.getElementById('error');

    if (name && email && membershipType) {
        alert('Membership added successfully!');
        document.getElementById('addMembershipForm').reset();
        errorDiv.textContent = '';
    } else {
        errorDiv.textContent = 'All fields are mandatory.';
    }
});

document.getElementById('updateMembershipForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    var membershipNumber = document.getElementById('membershipNumber').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var membershipType = document.getElementById('membershipType').value;
    var errorDiv = document.getElementById('error');

    if (membershipNumber && name && email && membershipType) {
        alert('Membership updated successfully!');
        document.getElementById('updateMembershipForm').reset();
        errorDiv.textContent = '';
    } else {
        errorDiv.textContent = 'All fields are mandatory.';
    }
});

document.getElementById('userManagementForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var errorDiv = document.getElementById('error');

    if (name && email) {
        alert('User managed successfully!');
        document.getElementById('userManagementForm').reset();
        errorDiv.textContent = '';
    } else {
        errorDiv.textContent = 'All fields are mandatory.';
    }
});
