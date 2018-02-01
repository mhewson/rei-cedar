import CdrModal from './CdrModal';

function install(Vue) {
  Vue.component('cdr-modal', CdrModal);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrModal };
