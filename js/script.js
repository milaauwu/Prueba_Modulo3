document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.querySelectorAll('.chat-messages');
    const contactItems = document.querySelectorAll('.contact-item');
    const startScreen = document.querySelector('.start-screen');
    const chatImage = document.querySelector('#contactImage');
    const contactNameElement = document.querySelector('#contactName');


    function showChat(chatId) {
        startScreen.style.display = 'none';

        chatMessages.forEach(chat => {
            if (chat.id === chatId) {
                chat.style.display = 'flex';

                const contactItem = document.querySelector(`.contact-item[data-chat="${chatId}"]`);
                const contactName = contactItem.querySelector('.contact-name').innerText;
                const contactImageSrc = contactItem.querySelector('.contact-item--img').src;
                const contactList = document.querySelector('.contact-list');
                const chatContainer =  document.querySelector('.chat-container')
                const screenSizePx = window.innerWidth;
              
                contactNameElement.innerText = contactName;
                chatImage.src = contactImageSrc;
                chatImage.style.display = 'block';
                if(screenSizePx<=768){
                    contactList.style.display="none"
                    if(chatContainer.style.display==="none"){
                        chatContainer.style.display="flex"
                    }
                }
               

            } else {
                chat.style.display = 'none';
            }
        });
    }

    contactItems.forEach(item => {
        item.addEventListener('click', () => {
            
            const chatId = item.getAttribute('data-chat');
            showChat(chatId);
        });
    });

    function initialize() {
        chatMessages.forEach(chat => {
            chat.style.display = 'none';
        });
        startScreen.style.display = 'flex';
    }

    initialize();


});


document.addEventListener('DOMContentLoaded', () => {
    const contactItems = document.querySelectorAll('.last-message-bold');

    contactItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.remove('last-message-bold');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const collapseButton = document.querySelector('.collapse-button');
    const contactList = document.querySelector('.contact-list');
    const chatContainer =  document.querySelector('.chat-container')

    if (collapseButton && contactList) {
        collapseButton.addEventListener('click', () => {
            
            console.log("contact-list",contactList.style)
            console.log("chat-container",chatContainer.style.display)
            
            if(contactList.style.display ===""){
                contactList.classList.toggle('show');
                chatContainer.style.display="none"
            }
            if(contactList.style.display==="none"){
                contactList.style.display="block"
                // contactList.style.display="block";
                chatContainer.style.display="none"
            }
           

            
        });
    }

});

window.addEventListener('resize', function() {
     const screenSize_px = window.innerWidth;
     const chatContainer =  document.querySelector('.chat-container')
     const contactList = document.querySelector(".contact-list")
     if(screenSize_px>768){
       
        chatContainer.style.display="flex";
        contactList.style.display="block"
     }
     else if(screenSize_px<=768){
        //chatContainer.style.display="none";
        contactList.style.display="none"
     }
  });