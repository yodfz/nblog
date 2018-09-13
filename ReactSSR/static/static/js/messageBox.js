(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.messageBox = factory());
}(this, (function () {
    'use strict';

    var template = {
        messageBox: '\n    <div id="message_{{id}}" class="screenLock">\n    <div id="message_js_{{id}}" style="{{style}}" class="lcs messageBOX animated {{animation}}In {{className}}">\n        <div class="title lcs {{className}}_title">\n        <span class="close js-close">\n                    <i style="font-size:32px;" class="messageBoxIconFont icon-guanbi iconfont icon-artboard3copy11  js-close"></i>\n        </span>\n        {{title}}\n        </div>\n        <div class="content lcs {{className}}_content">\n        {{content}}\n        </div>\n        <div class="buttonGroup lcs">\n            {{button}}\n        </div>\n    </div></div>',
        button: ['<button class="leftBtn js-cancel" {{cancelAttr}}>{{cancelButtonText}}</button>\n             <button class="rightBtn js-ok" {{okAttr}}>{{okButtonText}}</button>', '<button class="btn js-ok" {{okAttr}}>\u786E\u5B9A</button>', '<button class="js-ok btn-color" {{okAttr}}>{{buttonText}}</button>', ''],
        className: ['', '', 'modal1', 'messageBox-modal2']
    };

    var msgEvent = {};
    var i = 0;
    var onpopustate = {
        install: function install() {
            if (!window.messageBoxOnPopuState) {
                var onpopustate = window.onpopustate;
                window.messageBoxOnPopuState = true;
                window.onpopstate = function () {
                    onpopustate && onpopustate();
                    var event = msgEvent[window.location.href];
                    if (!event) {
                        event = {};
                        event.index = -1;
                    }
                    var events = [];
                    for (var key in msgEvent) {
                        if (msgEvent[key].index > event.index) {
                            events.push(msgEvent[key]);
                        }
                    }
                    events.forEach(function (p) {
                        p.msg.forEach(function (el) {
                            if (el) {
                                el.destory();
                            }
                        });
                    });
                };
            }
        },
        regMsg: function regMsg(_obj, url) {
            if (!msgEvent[url]) {
                msgEvent[url] = {
                    index: i++,
                    msg: []
                };
            }
            msgEvent[url].msg.push(_obj);
        }
    };

    var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };


    var asyncGenerator = function () {
        function AwaitValue(value) {
            this.value = value;
        }

        function AsyncGenerator(gen) {
            var front, back;

            function send(key, arg) {
                return new Promise(function (resolve, reject) {
                    var request = {
                        key: key,
                        arg: arg,
                        resolve: resolve,
                        reject: reject,
                        next: null
                    };

                    if (back) {
                        back = back.next = request;
                    } else {
                        front = back = request;
                        resume(key, arg);
                    }
                });
            }

            function resume(key, arg) {
                try {
                    var result = gen[key](arg);
                    var value = result.value;

                    if (value instanceof AwaitValue) {
                        Promise.resolve(value.value).then(function (arg) {
                            resume('next', arg);
                        }, function (arg) {
                            resume('throw', arg);
                        });
                    } else {
                        settle(result.done ? 'return' : 'normal', result.value);
                    }
                } catch (err) {
                    settle('throw', err);
                }
            }

            function settle(type, value) {
                switch (type) {
                    case 'return':
                        front.resolve({
                            value: value,
                            done: true
                        });
                        break;

                    case 'throw':
                        front.reject(value);
                        break;

                    default:
                        front.resolve({
                            value: value,
                            done: false
                        });
                        break;
                }

                front = front.next;

                if (front) {
                    resume(front.key, front.arg);
                } else {
                    back = null;
                }
            }

            this._invoke = send;

            if (typeof gen.return !== 'function') {
                this.return = undefined;
            }
        }

        if (typeof Symbol === 'function' && Symbol.asyncIterator) {
            AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
                return this;
            };
        }

        AsyncGenerator.prototype.next = function (arg) {
            return this._invoke('next', arg);
        };

        AsyncGenerator.prototype.throw = function (arg) {
            return this._invoke('throw', arg);
        };

        AsyncGenerator.prototype.return = function (arg) {
            return this._invoke('return', arg);
        };

        return {
            wrap: function (fn) {
                return function () {
                    return new AsyncGenerator(fn.apply(this, arguments));
                };
            },
            await: function (value) {
                return new AwaitValue(value);
            }
        };
    }();


    var get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ('value' in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };


    var set = function set(object, property, value, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent !== null) {
                set(parent, property, value, receiver);
            }
        } else if ('value' in desc && desc.writable) {
            desc.value = value;
        } else {
            var setter = desc.set;

            if (setter !== undefined) {
                setter.call(receiver, value);
            }
        }

        return value;
    };

    var index = {
        showMsg: function showMsg(_title, _content, okEvent, cancelEvent, _type, _animation) {
            onpopustate.install();
            var _id = +new Date();
            var d = document;
            var buttonText = '';
            var opt = {};

            if ((typeof _title === 'undefined' ? 'undefined' : _typeof(_title)) === 'object') {
                var result = Object.assign({}, _title);
                _title = result.title;
                _content = result.content;
                okEvent = result.ok;
                cancelEvent = result.cancel;
                _type = result.type;
                _animation = result.animation;
                opt.top = result.top;
                buttonText = result.buttonText;
                opt.okButtonText = result.okButtonText || '确定';
                opt.cancelButtonText = result.cancelButtonText || '取消';
                opt.okButtonDisabled = result.okButtonDisabled || false;
                opt.cancelButtonDisabled = result.cancelButtonDisabled || false;
            }

            _type = _type || 0;
            _animation = _animation || 'fade';

            var $hasTouch = 'ontouchend' in window;

            var $eventStart = $hasTouch ? 'touchend' : 'click';
            var className = template.className[_type];
            var _html = template.messageBox.replace('{{title}}', _title).replace('{{content}}', _content).replace(/\{\{id\}\}/ig, _id).replace(/\{\{className\}\}/ig, className).replace('{{animation}}', _animation);

            var okAttr = '';
            var cancelAttr = '';
            if (opt.okButtonDisabled) {
                okAttr = ' disabled="disabled"';
            }
            if (opt.cancelButtonDisabled) {
                cancelAttr = ' disabled="disabled"';
            }
            _html = _html.replace('{{button}}', template.button[_type].replace('{{buttonText}}', buttonText).replace('{{style}}', 'top:' + opt.top).replace('{{okButtonText}}', opt.okButtonText).replace('{{cancelButtonText}}', opt.cancelButtonText).replace('{{okAttr}}', okAttr).replace('{{cancelAttr}}', cancelAttr));

            d.body.style.overflow = 'hidden';
            d.body.insertAdjacentHTML('beforeend', _html);
            var _obj = d.querySelector('#message_' + _id);

            var bgContent = d.querySelector('.wrapperContains');
            var bg = d.querySelector('.screenLock');
            bg.ontouchmove = function (e) {
                e && e.stopPropagation();
                e && e.preventDefault();
            };
            className && _obj.classList.add(className);
            bgContent && bgContent.classList.add('blur');
            _obj.destory = function () {
                d.body.style.overflow = '';
                bgContent && bgContent.classList.remove('blur');
                if (d.querySelector('#message_' + _id) != null) {
                    _obj && _obj.parentNode.removeChild(_obj);
                }
            };
            _obj.addEventListener($eventStart, function (e) {
                e.preventDefault();
                var _className = e.target.className;
                if (!e.target.disabled) {
                    if (_className.indexOf('screenLock') > -1) {
                        bgContent && bgContent.classList.remove('blur');
                        cancelEvent && cancelEvent(false);
                        _obj.className = 'screenLock animated ' + _animation + 'Out';
                        d.body.style.overflow = '';

                        setTimeout(function () {
                            _obj && _obj.parentNode.removeChild(_obj);
                        }, 500);
                    }
                    if (_className.indexOf('js-close') > -1) {
                        bgContent && bgContent.classList.remove('blur');
                        cancelEvent && cancelEvent(false);
                        _obj.className = 'screenLock animated ' + _animation + 'Out';
                        d.body.style.overflow = '';

                        setTimeout(function () {
                            _obj && _obj.parentNode.removeChild(_obj);
                        }, 500);
                    }
                    if (_className.indexOf('js-cancel') > -1) {
                        bgContent && bgContent.classList.remove('blur');
                        cancelEvent && cancelEvent(true);
                        _obj.className = 'screenLock animated ' + _animation + 'Out';

                        d.body.style.overflow = '';
                        setTimeout(function () {
                            _obj && _obj.parentNode.removeChild(_obj);
                        }, 500);
                    }
                    if (_className.indexOf('js-ok') > -1) {
                        bgContent && bgContent.classList.remove('blur');
                        okEvent && okEvent();
                        d.body.style.overflow = '';
                        _obj.className = 'screenLock animated ' + _animation + 'Out';
                        setTimeout(function () {
                            _obj && _obj.parentNode.removeChild(_obj);
                        }, 500);
                    }
                }
            });
            onpopustate.regMsg(_obj, window.location.href);
            _obj.addEventListener('click', function (e) {
                e.preventDefault();
            });
        }
    };

    return index;

})));
