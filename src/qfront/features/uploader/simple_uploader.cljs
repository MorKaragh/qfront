(ns qfront.features.uploader.simple-uploader
  (:require [reagent.core :as r]
            [ajax.core :as ajax]))


(defn handle-drag [e]
  (.preventDefault e)
  (.stopPropagation e)
  (prn (.-type e)))

(defn handle-drop-2 [e] 
  (prn "dropping!")
  (js/console.log e)
  (if (not (nil? (-> e .-dataTransfer .-files (aget 0))))
    (prn "NOT NIL!")))

(defn simple-uploader []
  (fn []
    [:div.drop-div {:on-drag-enter handle-drag 
                    :on-drag-leave handle-drag 
                    :on-drag-over  handle-drag 
                    :on-drop       handle-drop-2}]))