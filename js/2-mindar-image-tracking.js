const arScene = document.querySelector('#ar-scene')
const modelSelector = document.querySelector('#model-selector')
const imageMarker = document.querySelector('#image-marker')
const models = imageMarker.children

arScene.addEventListener('arReady', () => {
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