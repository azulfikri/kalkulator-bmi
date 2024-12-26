function hitungBMI() {
  const genderMale = document.getElementById("gender-male").checked;
  const genderFemale = document.getElementById("gender-female").checked;
  const age = parseInt(document.getElementById("age").value);
  const beratBadan = parseFloat(document.getElementById("bb").value);
  const tinggiBadan = parseFloat(document.getElementById("tb").value) / 100;

  if (
    (genderMale || genderFemale) &&
    age > 0 &&
    beratBadan > 0 &&
    tinggiBadan > 0
  ) {
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);
    const hasilBMI = bmi.toFixed(1);

    let kategoriBMI, color;

    if (bmi < 18.5) {
      kategoriBMI = "Kekurangan Berat Badan";
      color = "red";
      desc =
        "BMI Anda kurang dari 18.5. Anda berada dalam kategori kekurangan berat badan. Pertimbangkan untuk meningkatkan asupan nutrisi dan konsultasikan dengan dokter atau ahli gizi.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      kategoriBMI = "Normal (ideal)";
      color = "green";
      desc =
        "BMI Anda antara 18.5 - 24.9. Berat badan Anda berada dalam kategori normal. Pertahankan pola makan sehat dan olahraga teratur.";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      kategoriBMI = "Kelebihan Berat Badan";
      color = "orange";
      desc =
        "BMI Anda antara 25.0 - 29.9. Anda berada dalam kategori kelebihan berat badan. Pertimbangkan untuk meningkatkan aktivitas fisik dan mengatur pola makan.";
    } else {
      kategoriBMI = "Kegemukan (obesitas)";
      color = "orange";
      desc =
        "BMI Anda di atas 30.0. Anda berada dalam kategori kegemukan. Disarankan untuk berkonsultasi dengan ahli gizi atau dokter.";
    }

    document.getElementById("hasilBMI").textContent = hasilBMI;
    document.getElementById("hasilBMI").style.color = color;
    document.getElementById("kategoriBMI").textContent = kategoriBMI;
    document.getElementById("desc").textContent = desc;
    document.getElementById("hasil").style.display = "block";
  } else {
    alert("Mohon lengkapi semua data!");
  }
}

function resetForm() {
  document.getElementById("bmi-form").reset();
  document.getElementById("hasil").style.display = "none";
  document.getElementById("hasilBMI").textContent = "";
  document.getElementById("kategoriBMI").textContent = "";
  document.getElementById("desc").textContent = "";
}
