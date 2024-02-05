function submitForm() {
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const bloodType = document.getElementById("bloodType").value.toUpperCase();
  
    // Perform calculations and update result elements
    const resultName = document.getElementById("resultName");
    const resultSign = document.getElementById("resultSign");
    const resultBloodType = document.getElementById("resultBloodType");
    const resultWeightHeight = document.getElementById("resultWeightHeight");
    const resultBMI = document.getElementById("resultBMI");
    const resultIdealWeight = document.getElementById("resultIdealWeight");
  
    // Mock calculations for demonstration purposes
    const sign = calculateSign(dob);
    const bmi = calculateBMI(weight, height);
    const idealWeight = calculateIdealWeight(height, bmi);
  
    resultName.textContent = name;
    resultSign.textContent = sign;
    resultBloodType.textContent = `${bloodType} (Compatíveis: ${calculateCompatibleBloodTypes(bloodType)})`;
    resultWeightHeight.textContent = `${weight} kg, ${height} cm`;
    resultBMI.textContent = bmi.toFixed(2);
    resultIdealWeight.textContent = `${idealWeight.toFixed(2)} kg`;
  
    // Show the result section
    document.getElementById("result").classList.remove("hidden");
  }
  
  function clearForm() {
    // Clear form fields
    document.getElementById("form").reset();
  
    // Hide the result section
    document.getElementById("result").classList.add("hidden");
  }
  
  function calculateSign(dob) {
    // Mock implementation, replace with actual sign calculation logic
    return "Signo Aquário";
  }
  
  function calculateBMI(weight, height) {
    // Mock implementation, replace with actual BMI calculation logic
    return weight / Math.pow(height / 100, 2);
  }
  
  function calculateIdealWeight(height, bmi) {
    // Mock implementation, replace with actual ideal weight calculation logic
    return 22 * Math.pow(height / 100, 2);
  }
  
  function calculateCompatibleBloodTypes(bloodType) {
    // Mock implementation, replace with actual blood type compatibility logic
    return ["A+", "O+"];
  }
  