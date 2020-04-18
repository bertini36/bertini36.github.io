import Noty from 'noty';

export function show_notification(type, text, timeout = 5000) {
    new Noty({
        type: type,
        text: text,
        timeout: timeout,
        theme: "nest"
    }).show();
}
