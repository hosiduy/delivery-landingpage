
document.addEventListener('DOMContentLoaded', function()
{
    var zalobutton = document.querySelector('.btn-zalo');
    var callbutton = document.querySelector('.btn-call');
    var button = document.querySelector('.btn.btn-primary.btn-lg.mt-3');
    var successbtn = document.querySelector('.btn-success');
    if (zalobutton)
    {
        zalobutton.addEventListener('click', function() 
        {
            var zaloChatUrl = 'https://zalo.me/0915549594?';
            window.open(zaloChatUrl);
        });
    }
    if (callbutton)
        {
            callbutton.addEventListener('click', function() 
            {
                var phoneNumber = '0915549594';
                var telUri = 'tel:' + phoneNumber;
    
                // Mở cuộc gọi điện thoại
                window.location.href = telUri;
            });
        }
        if (button)
            {
                button.addEventListener('click', function() 
                {
                    var zaloChatUrl = 'https://zalo.me/0915549594?text=Hello';
                    window.open(zaloChatUrl);
                });
            }

                if (successbtn)
                    {
                        successbtn.addEventListener('click', function() 
                        {
                            var zaloChatUrl = 'https://zalo.me/0915549594?text=Hello';
                            window.open(zaloChatUrl);
                        });
                    }
});
$(document).ready(function(){
    $('.carousel-item').click(function(){
        var src = $(this).find('img').attr('src');
        $('#modalImage').attr('src', src);
    });
});
 // Mảng các hình ảnh
 const images = [
    'images/client7.jpg',
    'images/client8.jpg',
    'images/client3.jpg',
    'images/client4.jpg',
    'images/client5.jpg',
    'images/client6.jpg'
    // Thêm nhiều hình ảnh khác nếu cần
];

document.addEventListener('DOMContentLoaded', function () {
    const indicators = document.querySelector('#carouselModal .carousel-indicators');
    const inner = document.querySelector('#carouselModal .carousel-inner');

    images.forEach((image, index) => {
        // Thêm chỉ báo cho carousel
        const indicator = document.createElement('li');
        indicator.setAttribute('data-target', '#carouselModal');
        indicator.setAttribute('data-slide-to', index);
        if (index === 0) indicator.classList.add('active');
        indicators.appendChild(indicator);

        // Thêm item cho carousel
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) item.classList.add('active');

        const img = document.createElement('img');
        img.classList.add('d-block', 'w-100');
        img.src = image;
        img.alt = `Hình ảnh ${index + 1}`;
        
        item.appendChild(img);
        inner.appendChild(item);
    });

    // Mở modal khi nhấp vào một hình ảnh trong carousel
    document.querySelectorAll('.carousel-item img').forEach(img => {
        img.addEventListener('click', function () {
            $('#imageModal').modal('show');
        });
    });
});