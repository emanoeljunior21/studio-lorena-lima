
    function toggleDropdown(element) {
        // 
        var dropdown = element.querySelector('.dropdown');

        dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    }

    document.querySelectorAll('.item').forEach(function(item) {
        item.addEventListener('click', function() {
           
            toggleDropdown(item);
        });
    });

