
    function toggleDropdown(element) {
        // 
        var dropdown = element.querySelector('.dropdown');

        dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    }

    // Add event listeners to each item with a dropdown
    document.querySelectorAll('.item').forEach(function(item) {
        item.addEventListener('click', function() {
            // Toggle the dropdown when an item is clicked
            toggleDropdown(item);
        });
    });

