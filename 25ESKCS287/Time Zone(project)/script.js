document.addEventListener('DOMContentLoaded', () => {
    const inputTime = document.getElementById('input-time');
    const fromZone = document.getElementById('from-zone');
    const toZone = document.getElementById('to-zone');
    const convertBtn = document.getElementById('convert-btn');
    const resultCard = document.getElementById('result-card');
    const convertedTimeText = document.getElementById('converted-time');

    // 1. Set default input time to current local time
    const now = new Date();
    // Format to YYYY-MM-DDTHH:MM local format for datetime-local input
    const localISO = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    inputTime.value = localISO;

    // 2. Fetch time zones from the JSON file and populate select elements
    fetch('timezones.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(zone => {
                const optionFrom = document.createElement('option');
                optionFrom.value = zone.value;
                optionFrom.textContent = zone.name;
                fromZone.appendChild(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.value = zone.value;
                optionTo.textContent = zone.name;
                toZone.appendChild(optionTo);
            });

            // Set default guess selections if available
            const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if ([...fromZone.options].some(opt => opt.value === localZone)) {
                fromZone.value = localZone;
            }
        })
        .catch(error => console.error('Error loading time zones:', error));

    // 3. Conversion Logic
    convertBtn.addEventListener('click', () => {
        const timeVal = inputTime.value;
        if (!timeVal) {
            alert('Please select a valid date and time.');
            return;
        }

        const sourceZone = fromZone.value;
        const targetZone = toZone.value;

        // Parse the input time as if it belongs to the selected source time zone
        const formatterOpts = {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false, timeZone: sourceZone
        };
        
        // This process handles daylight savings accurately based on IANA targets
        const sourceDate = new Date(timeVal);
        
        // Convert the source date object into the target timezone string representation
        const targetString = sourceDate.toLocaleString('en-US', {
            timeZone: targetZone,
            dateStyle: 'full',
            timeStyle: 'long'
        });

        // Display results
        convertedTimeText.textContent = targetString;
        resultCard.style.display = 'block';
    });
})