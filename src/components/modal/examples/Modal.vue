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
                            <slot name="header">TODO: // show how to import data when invoking modal</slot>
                        </cdr-col>
                        <cdr-col span="12">
                            <slot name="body"></slot>
                        </cdr-col>
                        <cdr-col span="12">
                            <slot name="footer">
                                <p>PreExisting content</p>
                            </slot>
                        </cdr-col>
                        <cdr-col span="12">
                            <slot name="extra"></slot>
                        </cdr-col>
                    </cdr-row>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'Modal',
};
</script>

<style>
    
</style>
