const pictureSize = (blockSel) => {
    const blocks = document.querySelectorAll(blockSel);

    function showPic(block) {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hidePic(block) {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showPic(block);
        });
    });

    blocks.forEach(block => {
        block.addEventListener('mouseout', () => {
            hidePic(block);
        });
    });
};

export default pictureSize;