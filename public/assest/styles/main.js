const root = document.querySelector('#root');

const content = `
<div id="main">
<div id="main-img">
    <img src="./public/assest/images/atri1.jpg" alt="">
</div>
<div id="main-background"></div>
<div id="navbar">
</div>
<div id="info">
    <div class="info-item">
        <div class="title"><h1>Atri: My Dear Moments</h1></div>
        <div class="desc"><p>Love Stories obout Robot Girl and Human Boy</p></div>
        <div class="category">
            <div class="category-item"><p>Romance</p></div>
            <div class="category-item"><p>Comedy</p></div>
            <div class="category-item"><p>Slice Of Lice</p></div>
        </div>
        <div class="sumary">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus amet culpa aliquam tempore ducimus provident exercitationem error ipsum accusantium. Unde natus quibusdam excepturi facilis sit aspernatur autem voluptas temporibus harum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus amet culpa aliquam tempore ducimus provident exercitationem error ipsum accusantium. Unde natus quibusdam excepturi facilis sit aspernatur autem voluptas temporibus harum?
                
            </p>
        </div>
        <div class="button-opt">
            <div class="sumarry-btn"><p>sumary</p></div>
            <div class="watch"><a href="./public/routes/atri1/atri1.html">watch</a></div>
        </div>
    </div>
</div>
<div id="option">
    <div class="option-item">
        <img src="./public/assest/images/atri1.jpg" alt="">
    </div>
    <div class="option-item">
        <img src="./public/assest/images/atri1.jpg" alt="">
    </div>
    <div class="option-item">
        <img src="./public/assest/images/atri1.jpg" alt="">
    </div>
    <div class="option-item">
        <img src="./public/assest/images/atri1.jpg" alt="">
    </div>
</div>
</div>
`;

root.innerHTML = content;