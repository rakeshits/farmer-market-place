// Sample crop rates data
const cropRates = [
    { crop: "Wheat", rate: "₹25/kg", trend: "High" },
    { crop: "Rice", rate: "₹30/kg", trend: "Medium" },
    { crop: "Corn", rate: "₹20/kg", trend: "Low" },
    { crop: "Soybean", rate: "₹35/kg", trend: "High" },
];

// Function to populate crop rates table
function populateCropRates() {
    const tableBody = document.querySelector("#crop-rates-table tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    cropRates.forEach((crop) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${crop.crop}</td>
            <td>${crop.rate}</td>
            <td>${crop.trend}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to handle product form submission
document.getElementById("product-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const cropName = document.getElementById("crop-name").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;

    alert(`Product Listed Successfully!\nCrop: ${cropName}\nQuantity: ${quantity} kg\nPrice: ₹${price}/kg`);
    document.getElementById("product-form").reset();
});

// Initialize the page
populateCropRates();