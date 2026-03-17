// Formspree AJAX Submission Handler
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const data = new FormData(form);
    const name = document.getElementById('userName').value;
    
    // Show loading state on button
    const btn = form.querySelector('button[type="submit"]');
    const originalBtnText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
    btn.disabled = true;

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // SweetAlert Success Message
            Swal.fire({
                title: 'Thank You, ' + name + '!',
                text: 'Your enquiry has been received. Our property expert will contact you shortly.',
                icon: 'success',
                confirmButtonColor: '#166534',
                confirmButtonText: 'Great!'
            });
            form.reset(); // Clear the form
        } else {
            // Handle Error
            Swal.fire({
                title: 'Oops!',
                text: 'There was a problem submitting your form. Please try calling us instead.',
                icon: 'error',
                confirmButtonColor: '#166534'
            });
        }
    }).catch(error => {
        // Handle Network Error
        Swal.fire({
            title: 'Oops!',
            text: 'There was a network error. Please try again or call us.',
            icon: 'error',
            confirmButtonColor: '#166534'
        });
    }).finally(() => {
        // Restore button state
        btn.innerHTML = originalBtnText;
        btn.disabled = false;
    });
});

// Image Lightbox Viewer
function viewImage(src) {
    Swal.fire({
        imageUrl: src,
        imageWidth: 800,
        imageAlt: 'Gallery Image',
        showConfirmButton: false,
        background: 'transparent',
        backdrop: `rgba(0,0,0,0.9)`
    });
}

// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Hide mobile menu on link click
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});