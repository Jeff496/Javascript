document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('gridContainer');
    const gridItem = gridContainer.getElementsByClassName('grid-item');

    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseover', function() {
            this.classList.add('hovered');
        });
    }
});