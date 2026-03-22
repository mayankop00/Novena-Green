// Modern Google Forms Fetch Submission
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stops the page from redirecting
    
    const form = e.target;
    const formData = new FormData(form);
    const urlEncodedData = new URLSearchParams(formData).toString();
    const name = document.getElementById('userName').value;
    
    // Show loading state
    const btn = form.querySelector('button[type="submit"]');
    const originalBtnText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
    btn.disabled = true;

    // Send the data securely in the background
    fetch(form.action, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlEncodedData
    }).then(() => {
        Swal.fire({
            title: 'Thank You, ' + name + '!',
            text: 'Your enquiry has been received. Our property expert will contact you shortly.',
            icon: 'success',
            confirmButtonColor: '#166534',
            confirmButtonText: 'Great!'
        });
        form.reset(); 
    }).catch(error => {
        Swal.fire({
            title: 'Oops!',
            text: 'There was a network error. Please try again later.',
            icon: 'error',
            confirmButtonColor: '#166534'
        });
    }).finally(() => {
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
