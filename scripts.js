const bloodBanks = [
    { name: 'Chandigarh Blood Bank', location: 'Chandigarh', bloodType: 'A+', available: true },
    { name: 'Mohali Blood Hub', location: 'Mohali', bloodType: 'O-', available: true },
    { name: 'Panchkula Blood Center', location: 'Panchkula', bloodType: 'B+', available: true },
    // Add more blood banks as needed
];

function filterResults() {
    const searchBar = document.getElementById('searchBar').value.toLowerCase();
    const bloodType = document.getElementById('bloodType').value;
    const location = document.getElementById('location').value;

    const filteredBloodBanks = bloodBanks.filter(bank => {
        const matchesLocation = location ? bank.location.toLowerCase().includes(location.toLowerCase()) : true;
        const matchesBloodType = bloodType ? bank.bloodType === bloodType : true;
        const matchesSearch = bank.location.toLowerCase().includes(searchBar);

        return matchesLocation && matchesBloodType && matchesSearch;
    });

    displayResults(filteredBloodBanks);
}

function displayResults(bloodBanks) {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = ''; // Clear previous results

    if (bloodBanks.length > 0) {
        bloodBanks.forEach(bank => {
            const listItem = document.createElement('li');
            listItem.classList.add('p-4', 'bg-gray-100', 'rounded-lg', 'shadow-sm');
            listItem.innerHTML = `
                <h3 class="text-xl font-semibold text-gray-800">${bank.name}</h3>
                <p class="text-sm text-gray-600"><span class="font-semibold">Location:</span> ${bank.location}</p>
                <p class="text-sm text-gray-600"><span class="font-semibold">Blood Type Available:</span> ${bank.bloodType}</p>
            `;
            resultsList.appendChild(listItem);
        });
    } else {
        resultsList.innerHTML = '<li class="p-4 text-center text-gray-500">No results found.</li>';
    }
}
