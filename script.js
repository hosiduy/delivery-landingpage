
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
