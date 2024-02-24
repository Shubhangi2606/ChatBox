document.getElementById('send-btn').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addMessage('User', userInput);
        // Here you can add logic to handle the user input and generate bot response
        // For simplicity, let's just simulate a bot response
        setTimeout(function() {
            addMessage('Bot', 'I received your message: ' + userInput);
        }, 1000);
        document.getElementById('user-input').value = '';
    }
});

function addMessage(user, message) {
    var chatBox = document.getElementById('chat-box');
    var messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.innerHTML = '<span class="user">' + user + ':</span><span class="message">' + message + '</span>';
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
