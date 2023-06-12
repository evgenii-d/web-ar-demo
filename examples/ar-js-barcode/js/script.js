AFRAME.registerComponent('scene-controller', {
    init: function () {
        this.el.addEventListener('loaded', function () {
            const barcodeMarker = document.querySelector('#barcode-marker')
            const modelSelector = document.querySelector('#model-selector')
            const models = barcodeMarker.children

            modelSelector.hidden = false

            for (const model of models) {
                if (modelSelector.value === model.dataset.listId) {
                    model.object3D.visible = true
                    break
                }
            }

            modelSelector.addEventListener('change', () => {
                for (const model of models) {
                    if (modelSelector.value === model.dataset.listId) {
                        model.object3D.visible = true
                    } else {
                        model.object3D.visible = false
                    }
                }
            })
        })
    }
})