function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function solveCaptcha(imageUrl) {
    // Simulate captcha solving with a timeout
    setTimeout(() => {
        document.getElementById('captcha-text').innerText = 'Solved Captcha Text';
    }, 15000);
}

window.onload = function() {
    const urlParam = getUrlParameter('url');
    const captchaImage = document.getElementById('captcha-image');
    if (urlParam) {
        captchaImage.src = urlParam;
    }
    solveCaptcha(captchaImage.src);
};