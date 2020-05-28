
/**
 * Inicia loading nas requests
 * Função trabalha em conjunto com o loading.scss compilado
 * E Boostrap 4
 * @param loading
 * @param message
 */
const setLoading = function (loading = true, message = 'Aguarde...') {

    if (loading === true && message !== '') {
        let loadingEl = document.createElement('div');
        let loadEl = document.createElement('span');
        loadEl.setAttribute('class', 'loader');
        let textEl = document.createTextNode(message);
        let messageEl = document.createElement('p');
        messageEl.setAttribute('class', 'd-block text-center');
        messageEl.appendChild(textEl);
        loadingEl.appendChild(messageEl);
        loadingEl.appendChild(loadEl);
        loadingEl.setAttribute('id', 'loading');
        let bodyEl = document.querySelector('body');
        bodyEl.appendChild(loadingEl);
    } else {
        $('#loading').fadeOut('slow', function () {
            $(this).remove();
        });
    }

}
