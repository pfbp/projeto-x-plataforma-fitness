import { View } from './View.js';
export class MessageView extends View {
    
    constructor(element) {
       super(element);
    }
    
    template(model) {       
        return model.text ?  
        `<div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <strong class="me-auto">Message</strong>
                    <small></small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    ${model.text}
                </div>
            </div>
        </div>` : '<div></div>'
   }
   send() {
    const toastLiveExample = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
   }
}
