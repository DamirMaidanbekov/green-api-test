$(document).ready(function() {
    $('#getSettings').click(function() {
        callApi('getSettings');
    });

    $('#getStateInstance').click(function() {
        callApi('getStateInstance');
    });

    $('#sendMessage').click(function() {
        const chatId = $('#chatIdForMessage').val();
        const message = $('#message').val();
        callApi('sendMessage', {
            chatId: chatId,
            message: message
        });
    });

    $('#sendFileByUrl').click(function() {
        const chatId = $('#chatIdForFile').val();
        const urlFile = $('#fileUrl').val();
        callApi('sendFileByUrl', {
            chatId: chatId,
            urlFile: urlFile,
            fileName: urlFile.split('/').pop()
        });
    });

    function callApi(method, data = {}) {
        const idInstance = $('#idInstance').val();
        const apiTokenInstance = $('#apiTokenInstance').val();
        const url = `https://api.green-api.com/waInstance${idInstance}/${method}/${apiTokenInstance}`;

        $.ajax({
            url: url,
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                $('#responseField').val(JSON.stringify(response, null, 2));
            },
            error: function(xhr, status, error) {
                $('#responseField').val(`Error: ${error}`);
            }
        });
    }
});
