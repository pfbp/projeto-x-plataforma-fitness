import { MessageView } from "../View/Message-view.js";
import {} from "../Tools/bootstrap-bundle.js";

export class SendMessageController {
    static send(message) {
        // let messageSend = document.querySelector('[data-message]');
        //     if (messageSend) {
        //     messageSend = new MessageView('[data-message]');
        let messageSend = new MessageView('[data-message]');
        messageSend.update();
        const toastLive = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastLive);
    }   
}
