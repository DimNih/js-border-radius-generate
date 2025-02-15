  // Ambil elemen-elemen yang dibutuhkan
  const preview = document.getElementById('preview');
  const topLeft = document.getElementById('topLeft');
  const topRight = document.getElementById('topRight');
  const bottomRight = document.getElementById('bottomRight');
  const bottomLeft = document.getElementById('bottomLeft');
  const valTopLeft = document.getElementById('valTopLeft');
  const valTopRight = document.getElementById('valTopRight');
  const valBottomRight = document.getElementById('valBottomRight');
  const valBottomLeft = document.getElementById('valBottomLeft');
  const cssCode = document.getElementById('cssCode');
  const copyBtn = document.getElementById('copyBtn');

  // Fungsi buat update border radius di preview dan kode CSS
  function updateBorderRadius() {
    const tl = topLeft.value;
    const tr = topRight.value;
    const br = bottomRight.value;
    const bl = bottomLeft.value;
    
    preview.style.borderRadius = `${tl}px ${tr}px ${br}px ${bl}px`;
    cssCode.textContent = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px;`;
    
    valTopLeft.textContent = tl;
    valTopRight.textContent = tr;
    valBottomRight.textContent = br;
    valBottomLeft.textContent = bl;
  }
  
  // Event listener buat slider
  topLeft.addEventListener('input', updateBorderRadius);
  topRight.addEventListener('input', updateBorderRadius);
  bottomRight.addEventListener('input', updateBorderRadius);
  bottomLeft.addEventListener('input', updateBorderRadius);
  
  // Copy CSS ke clipboard
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(cssCode.textContent)
      .then(() => {
        alert('CSS berhasil disalin ke clipboard!');
      })
      .catch(err => {
        alert('Gagal menyalin CSS.');
      });
  });
  
  // Inisialisasi tampilan awal
  updateBorderRadius();