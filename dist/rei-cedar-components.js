

riot.tag2('cdr-modal-button', '<button if="{opts.cedarbutton == 1 || opts.cedarbutton == null}" type="button" class="btn btn-primary" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 2}" type="button" class="btn btn-contrast btn-primary" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 3}" type="button" class="btn btn-primary btn-sm" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 4}" type="button" class="btn btn-contrast btn-primary btn-xs" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 5}" type="button" class="btn btn-default" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 6}" type="button" class="btn btn-block btn-link" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 7}" type="button" class="btn btn-fixed btn-link-body" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 8}" type="button" class="btn btn-fixed btn-link_stag" id="{opts.hashtag}">{opts.buttontext}</button>', 'cdr-modal-button .btn-link-body,[data-is="cdr-modal-button"] .btn-link-body{font-family:inherit;font-size:inherit;font-weight:normal;color:#06c;background:transparent;text-decoration:underline;vertical-align:unset;padding:0} cdr-modal-button .btn-link-body:hover,[data-is="cdr-modal-button"] .btn-link-body:hover,cdr-modal-button .btn-link-body:focus,[data-is="cdr-modal-button"] .btn-link-body:focus,cdr-modal-button .btn-link-body:active,[data-is="cdr-modal-button"] .btn-link-body:active{color:#06c;text-decoration:underline} cdr-modal-button .btn-link_stag,[data-is="cdr-modal-button"] .btn-link_stag{font-family:inherit;font-size:inherit;color:#06c;background:transparent;vertical-align:unset;padding:0} cdr-modal-button .btn-link_stag:hover,[data-is="cdr-modal-button"] .btn-link_stag:hover,cdr-modal-button .btn-link_stag:focus,[data-is="cdr-modal-button"] .btn-link_stag:focus,cdr-modal-button .btn-link_stag:active,[data-is="cdr-modal-button"] .btn-link_stag:active{color:#06c;text-decoration:underline}', '', function(opts) {
});
riot.tag2('cdr-video-modal', '<div class="modal" tabindex="-1" keyup="{}" role="dialog" aria-labelledby="videoModal" aria-hidden="true"> <span class="sr-only">Begin dialog</span> <div class="modal__content"> <div class="text-right"> <button id="{opts.dismisstrigger}" class="close icon icon-rei-close img-circle" aria-label="Close"><span class="sr-only sr-only-focusable">Close</span></button> </div> <div class="modal__content--inner"> <div class="embed-responsive embed-responsive-16by9"> <yield></yield> </div> </div> </div> <button class="modal__video--end--dialog sr-only sr-only-focusable">End dialog</button> </div>', 'cdr-video-modal .icon.icon-rei-close.img-circle,[data-is="cdr-video-modal"] .icon.icon-rei-close.img-circle{background:rgba(0,0,0,0.5);color:#fff;padding:2rem;margin:1.6rem;float:none}@media screen and (max-width:768px){ cdr-video-modal .icon.icon-rei-close.img-circle,[data-is="cdr-video-modal"] .icon.icon-rei-close.img-circle{position:absolute;top:0;right:0;bottom:auto;left:auto;z-index:1}} cdr-video-modal .modal,[data-is="cdr-video-modal"] .modal{opacity:0;transition:opacity .15s linear} cdr-video-modal .modal .modal__content,[data-is="cdr-video-modal"] .modal .modal__content{transition:transform .3s ease-out;transform:translate(0, -25%)}@media screen and (max-width:768px){ cdr-video-modal .modal .modal__content,[data-is="cdr-video-modal"] .modal .modal__content{position:absolute;top:0;bottom:0;left:0;right:0}} cdr-video-modal .modal.show.in,[data-is="cdr-video-modal"] .modal.show.in{opacity:1} cdr-video-modal .modal.show.in .modal__content,[data-is="cdr-video-modal"] .modal.show.in .modal__content{transform:translate(0, 0)} cdr-video-modal .modal__content--inner,[data-is="cdr-video-modal"] .modal__content--inner{max-width:90rem;margin:0 auto}@media screen and (max-width:768px){ cdr-video-modal .modal__content--inner,[data-is="cdr-video-modal"] .modal__content--inner{width:100%;position:absolute;top:50%;right:auto;bottom:auto;left:50%;text-align:center;transform:translate(-50%, -50%)}} cdr-video-modal .modal__video--end--dialog,[data-is="cdr-video-modal"] .modal__video--end--dialog{background-color:transparent;color:#fff}', '', function(opts) {

        var focusableElements = [
            'a',
            'area[href]',
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            'button:not([disabled])',
            'iframe',
            'object',
            'embed',
            '*[tabindex]',
            '*[contenteditable]'
        ].join(',');

        var tabTrap = function (elem, evt) {
            var $elem = $(elem);

            var focusableItems = $(focusableElements, modal).filter(':visible');

            var focusedItem = $(':focus');

            var numberOfFocusableItems = focusableItems.length;

            var lastFocusableItem = numberOfFocusableItems - 1;

            var focusedItemIndex = focusableItems.index(focusedItem);

            if (evt.shiftKey) {

                if (focusedItemIndex <= 0) {
                    focusableItems.get(lastFocusableItem).focus();
                    evt.preventDefault();
                }
            } else {

                if (focusedItemIndex >= lastFocusableItem) {
                    focusableItems.get(0).focus();
                    evt.preventDefault();
                }
            }
        };

        var modal;

        this.on('mount', function () {
            modal = this.root.querySelector('.modal');

            function showModal() {
                var body = document.querySelector('body');
                var modalBackdrop = document.createElement('div');
                modalBackdrop.id = 'modalBackdrop';

                modalBackdrop.classList.add('modal-backdrop');
                modalBackdrop.classList.add('opaque');
                modalBackdrop.classList.add('fade');
                modalBackdrop.tabindex = -1;
                body.appendChild(modalBackdrop);
                body.classList.add('modal-open');
                body.classList.add('modal__gutter--right');
                modal.classList.add('show');
                setTimeout(function () {
                    modal.classList.add('in');
                    modalBackdrop.classList.add('in');
                }, 100);
                modal.focus();
            }

            function hideModal() {
                var body = document.querySelector('body');
                var modalBackdrop = document.querySelector('#modalBackdrop');
                var modalLaunchId = document.getElementById(opts.opentrigger);
                var videoSrc = $('iframe').attr('src');
                $('iframe').attr('src', videoSrc);
                modal.classList.remove('in');
                modalBackdrop.classList.remove('in');
                setTimeout(function () {
                    modal.classList.remove('show');
                    body.classList.remove('modal-open');
                    body.classList.remove('modal__gutter--right');
                    body.removeChild(modalBackdrop);
                }, 200);
                modalLaunchId.focus();
            }

            var trigger = document.getElementById(opts.opentrigger);
            trigger.addEventListener('click', function (e) {
                showModal();
            });

            var dismissTrigger = document.getElementById(opts.dismisstrigger);
            dismissTrigger.addEventListener('click', function (e) {
                hideModal();
            });

            this.root.addEventListener('keyup', function (e) {
                if (e.keyCode === 27) {
                    hideModal();
                }
            });

            modal.addEventListener('keydown', function (e) {
                if (e.keyCode === 9) {
                    tabTrap(modal, e);
                }
            });
        });
});