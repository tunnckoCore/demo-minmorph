/* eslint-env browser */
let events = [];

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  /* eslint-disable guard-for-in, no-restricted-syntax */
  for (const key in document) {
    const isEvent =
      document[key] == null || typeof document[key] === 'function';
    if (key.startsWith('on') && isEvent) {
      events.push(key);
    }
  }
} else {
  events = [
    'onclick',
    'ondblclick',
    'onmousedown',
    'onmouseup',
    'onmouseover',
    'onmousemove',
    'onmouseout',
    'onmouseenter',
    'onmouseleave',
    'ontouchcancel',
    'ontouchend',
    'ontouchmove',
    'ontouchstart',
    'ondragstart',
    'ondrag',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondrop',
    'ondragend',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onunload',
    'onabort',
    'onerror',
    'onresize',
    'onscroll',
    'onselect',
    'onchange',
    'onsubmit',
    'onreset',
    'onfocus',
    'onblur',
    'oninput',
    'oncontextmenu',
    'onfocusin',
    'onfocusout',
    'onreadystatechange',
    'onpointerlockchange',
    'onpointerlockerror',
    'onbeforecopy',
    'onbeforecut',
    'onbeforepaste',
    'oncopy',
    'oncut',
    'onpaste',
    'onsearch',
    'onselectionchange',
    'onselectstart',
    'onvisibilitychange',
    'oncancel',
    'oncanplay',
    'oncanplaythrough',
    'onclose',
    'oncuechange',
    'ondurationchange',
    'onemptied',
    'onended',
    'oninvalid',
    'onload',
    'onloadeddata',
    'onloadedmetadata',
    'onloadstart',
    'onmousewheel',
    'onpause',
    'onplay',
    'onplaying',
    'onprogress',
    'onratechange',
    'onseeked',
    'onseeking',
    'onstalled',
    'onsuspend',
    'ontimeupdate',
    'ontoggle',
    'onvolumechange',
    'onwaiting',
    'onwheel',
    'onauxclick',
    'ongotpointercapture',
    'onlostpointercapture',
    'onpointerdown',
    'onpointermove',
    'onpointerup',
    'onpointercancel',
    'onpointerover',
    'onpointerout',
    'onpointerenter',
    'onpointerleave',
    'onwebkitfullscreenchange',
    'onwebkitfullscreenerror',
    'onsecuritypolicyviolation',
    'onformdata',
    'onfullscreenchange',
    'onfullscreenerror',
    'onfreeze',
    'onresume',
  ];
}

module.exports = events;
