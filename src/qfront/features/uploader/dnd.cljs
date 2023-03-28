(ns qfront.features.uploader.dnd
  (:require [reagent.core :as r]
            ["react-dnd" :as dnd]
            ["react-dnd-html5-backend" :as html5]))


(defn rgb [r g b]
  (str "rgb(" r "," g "," b ")"))

(defn bin-style [r g b active]
  {:height           "200px"
   :width            "200px"
   :border           (if active "5px dotted gray" "5px solid gray")
   :background-color (rgb r g b)})

(defn box-style [color]
  {:height           "50px"
   :width            "50px"
   :border-radius    "10px"
   :background-color color})

(defn process-colors [r g b item]
  (let [step 51]
    (case (:color item)
     "red" (swap! r + step)
     "green" (swap! g + step)
     "blue" (swap! b + step))))

(defn box [color]
  (let [[props drag]
        (dnd/useDrag
         #js {:type    "box"
              :item    {:color color}
              :end     (fn [^js item, ^js mon]
                         (let [drop-result (.getDropResult mon)]
                           (when (and item drop-result)
                             (prn "Dropped " name)))
                         {:color "color"})
              :collect (fn [^js mon]
                         {:is-dragging (.isDragging mon)
                          :handler-id  (.getHandlerId mon)})})]
    [:div {:ref   drag
           :style (box-style color)}]))

(defn dustbin []
  (let [red    (r/atom 0)
        green  (r/atom 0)
        blue   (r/atom 0)]
    (fn []
      (let [[props drop]
            (dnd/useDrop
             #js {:accept  "box"
                  :drop    (fn [^js item ^js mon]
                             (js/console.log (js->clj item))
                             (prn item)
                             (process-colors red green blue item)
                             {:name 'Dustbin})
                  :collect (fn [^js mon] {:is-over  (.isOver mon)
                                          :can-drop (.canDrop mon)})})]
        [:div {:ref   drop
               :style (bin-style @red @green @blue (:is-over props))}]))))

(defn dradrop []
  (fn []
    [:> dnd/DndProvider {:backend html5/HTML5Backend}
     [:div {:style {:display         "flex"
                    :justify-content "center"
                    :margin-top "100px"}}
      [:div 
       [:f> dustbin]
       [:div {:style {:width           "200px"
                      :display         "flex"
                      :justify-content "space-between"
                      :margin-top      "20px"}}
        [:f> box "red"]
        [:f> box "green"]
        [:f> box "blue"]]]]]))
