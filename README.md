# Border Radius Generator

Web generate/membuat  **border-radius** . 

## Preview

![Preview](test.png)

## Importan!!
isi ke file css

```bash

  /* Global Styles */
  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #864DEB, #6c3cb5);
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
  }

  .container {
    max-width: 400px; /* Lebih kecil */
    width: 90%;
    background: rgba(255, 255, 255, 0.95);
    padding: 20px; /* Padding lebih kecil */
    border-radius: 15px; /* Border radius lebih kecil */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  h1 {
    text-align: center;
    margin-bottom: 20px; /* Margin lebih kecil */
    font-size: 1.8rem; /* Ukuran font lebih kecil */
    color: #864DEB;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .preview {
    margin: 15px auto; /* Margin lebih kecil */
    width: 150px; /* Ukuran lebih kecil */
    height: 150px; /* Ukuran lebih kecil */
    background: linear-gradient(135deg, #864DEB, #6c3cb5);
    transition: all 0.3s ease;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  .slider-container {
    display: grid;
    gap: 15px; /* Gap lebih kecil */
    margin-top: 20px; /* Margin lebih kecil */
  }

  .slider-group {
    display: flex;
    align-items: center;
    gap: 10px; /* Gap lebih kecil */
    background: rgba(255, 255, 255, 0.9);
    padding: 10px; /* Padding lebih kecil */
    border-radius: 10px; /* Border radius lebih kecil */
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  }

  .slider-group label {
    font-weight: 500;
    color: #555;
    min-width: 80px; /* Lebar lebih kecil */
    font-size: 0.9rem; /* Ukuran font lebih kecil */
  }

  .slider-group input[type="range"] {
    flex: 1;
    -webkit-appearance: none;
    appearance: none;
    height: 6px; /* Lebih tipis */
    background: #e0e0e0;
    border-radius: 3px; /* Border radius lebih kecil */
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .slider-group input[type="range"]:hover {
    opacity: 1;
  }

  .slider-group input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px; /* Lebih kecil */
    height: 16px; /* Lebih kecil */
    background: #864DEB;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .code {
    margin-top: 20px; /* Margin lebih kecil */
    padding: 10px; /* Padding lebih kecil */
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px; /* Border radius lebih kecil */
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem; /* Ukuran font lebih kecil */
    color: #333;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    overflow-x: auto;
  }

  button {
    display: block;
    margin: 20px auto 0; /* Margin lebih kecil */
    padding: 10px 20px; /* Padding lebih kecil */
    background: #864DEB;
    color: #fff;
    border: none;
    border-radius: 20px; /* Border radius lebih kecil */
    cursor: pointer;
    font-size: 0.9rem; /* Ukuran font lebih kecil */
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  }

  button:hover {
    background: #6c3cb5;
    transform: translateY(-2px);
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
  }

  button:active {
    transform: translateY(0);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  }
```
