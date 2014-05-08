/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * version: 1.0.0
 */

function defineConst(props) {
    var obj = {},
        hack = !Object.defineProperty || /MSIE 8.0/.test(navigator.userAgent);

    if (hack) {
        var onPropertyChange = function (e) {
            // temporarily remove the event so it doesn't fire again and create a loop
            obj.detachEvent('onpropertychange', onPropertyChange);
            obj[e.propertyName] = props[e.propertyName];
            // restore the event
            obj.attachEvent('onpropertychange', onPropertyChange);
        };

        // IE6 - IE7: must be a DOM object (even if it's not a real tag) attached to document
        // IE8 (defineProperty must be a DOM object)
        obj = document.createElement('fake');
        document.body.appendChild(obj);
    }
    for (var prop in props) {
        if (hack) {
            obj[prop] = props[prop];
        } else {
            // Modern browsers, IE9+
            Object.defineProperty(obj, prop, {writable: false, value: props[prop]});
        }
    }

    if (hack) {
        obj.attachEvent('onpropertychange', onPropertyChange);
    }

    return obj;
}
