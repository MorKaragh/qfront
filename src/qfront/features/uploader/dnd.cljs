(ns qfront.features.uploader.dnd
  (:require [reagent.core :as r]
            ["react-dnd" :as dnd]
            ["react-dnd-html5-backend" :as html5]))

(def st
   {:height "100px" :width "100px" :background-color "green"})

(def st-2
   {:height "50px" :width "50px" :background-color "gray"})


(defn box [name]
  (let [[props drag] 
        (dnd/useDrag 
         #js {:type "box"
              :item name
              :end (fn [^js item, ^js mon]
                     (let [drop-result (.getDropResult mon)]
                       (when (and item drop-result)
                         (prn "Dropped " name))))
              :collect (fn [^js mon] {:is-dragging (.isDragging mon)
                                  :handler-id (.getHandlerId mon)})})]
    [:div {:ref drag :style st-2} name]))

(defn dustbin []
  (fn []
    (let [[props drop] 
          (dnd/useDrop 
           #js {:accept  "box" 
                :drop    (fn [] {:name 'Dustbin})
                :collect (fn [^js mon] {:is-over  (.isOver mon) 
                                        :can-drop (.canDrop mon)})})]
     [:div {:ref drop :style st} "Release!"])))

(defn dradrop []
  (fn []
    [:> dnd/DndProvider {:backend html5/HTML5Backend}
                     [:div
                      [:f> dustbin]
                      [:f> box "hello"]
                      [:f> box "world"]
                      [:f> box "lol"]]]))
