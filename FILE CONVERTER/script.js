document.getElementById('convertButton').addEventListener('click', () => {
  const fileInput = document.getElementById('fileInput');
  const targetFormat = document.getElementById('targetFormat').value;
  const canvas = document.getElementById('canvas');
  const downloadLink = document.getElementById('downloadLink');

  if (fileInput.files.length === 0) {
    alert('Please select a file to convert.');
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      // Convert canvas to target format
      const convertedDataURI = canvas.toDataURL(`image/${targetFormat}`);

      // Display download link and enable download
      downloadLink.href = convertedDataURI;
      downloadLink.download = `converted.${targetFormat}`;
      downloadLink.style.display = 'block';
    };
    img.src = event.target.result;
  };

  reader.readAsDataURL(file);
});
