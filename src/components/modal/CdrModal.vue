<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <cdr-row>
            <cdr-col span="12">
              <cdr-button modifier="sm">Close</cdr-button>
            </cdr-col>
            <cdr-col span="12">
              <slot name="header"/>
            </cdr-col>
            <cdr-col span="12">
              <slot name="body"/>
            </cdr-col>
            <cdr-col span="12">
              <slot name="footer"/>
            </cdr-col>
            <cdr-col span="12">
              <slot name="extra"/>
            </cdr-col>
          </cdr-row>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CdrModal',
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import 'styles/vars/CdrModal.vars.pcss';
  @import 'styles/CdrModal.pcss';
</style>
