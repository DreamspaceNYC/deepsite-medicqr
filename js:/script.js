function generateQRCode() {
    const fullName = document.getElementById('full-name').value;
    const dob = document.getElementById('dob').value;
    const hospitalNumber = document.getElementById('hospital-number').value;
    const passwordProtect = document.getElementById('password-protect').checked;
    const recordPassword = document.getElementById('record-password').value;
    const qrcodeDiv = document.getElementById('qrcode');
    const qrInstructions = document.getElementById('qr-instructions');
    const downloadBtn = document.getElementById('download-btn');

    if (!fullName || !dob || !hospitalNumber) {
        alert('Please fill in all the required fields.');
        return;
    }

    let qrData = `Name: ${fullName}\nDOB: ${dob}\nHospital Number: ${hospitalNumber}`;

    if (passwordProtect && recordPassword) {
        qrData += `\nPassword: ${recordPassword}`;
    }

    // Clear any existing QR code
    qrcodeDiv.innerHTML = '';

    // Generate the QR code
    QRCode.toCanvas(qrcodeDiv, qrData, {
        width: 256,
        height: 256,
        color: {
            dark: '#000',
            light: '#fff'
        }
    }, function (error) {
        if (error) {
            console.error('Error generating QR code:', error);
            alert('Error generating QR code.');
            return;
        }
        console.log('QR code generated successfully!');
        qrcodeDiv.classList.remove('hidden');
        qrInstructions.classList.add('hidden');
        downloadBtn.classList.remove('hidden');
    });
}

function togglePasswordFields() {
    const passwordProtectCheckbox = document.getElementById('password-protect');
    const passwordFieldsDiv = document.getElementById('password-fields');
    passwordFieldsDiv.classList.toggle('hidden', !passwordProtectCheckbox.checked);
}

function downloadQRCode() {
    const qrcodeCanvas = qrcodeDiv.querySelector('canvas');
    if (qrcodeCanvas) {
        const dataURL = qrcodeCanvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = 'medical_qr_code.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        alert('No QR code to download.');
    }
}

// Event listener for the password protect checkbox
document.getElementById('password-protect').addEventListener('change', togglePasswordFields);
